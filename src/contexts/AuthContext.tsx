import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import {
  auth,
  db,
  googleProvider,
  handleFirestoreError,
  OperationType,
} from '../lib/firebase';
import {
  CustomerInquiry,
  InquiryCategory,
  OrderItemSnapshot,
  PROMO_CATALOG,
  PromoCodeKey,
  UserCoupon,
  UserOrder,
  UserProfile,
  UserReview,
} from '../types/mypage';

interface InstantStoreData {
  profile: UserProfile;
  coupons: UserCoupon[];
  orders: UserOrder[];
  reviews: UserReview[];
  inquiries: CustomerInquiry[];
}

const INSTANT_SESSION_KEY = 'monoday_instant_signed_in';
const INSTANT_DATA_KEY = 'monoday_instant_member_data';
const INSTANT_UID = 'instant-member-monoday';

function createDefaultInstantData(custom?: {
  name?: string;
  phone?: string;
  address?: string;
  bodySpecs?: string;
}): InstantStoreData {
  const nowIso = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
  return {
    profile: {
      uid: INSTANT_UID,
      email: 'member@monoday.kr',
      name: custom?.name?.trim() || '이재영',
      phone: custom?.phone?.trim() || '111-11-11111',
      address: custom?.address?.trim() || '한신대학교',
      bodySpecs: custom?.bodySpecs?.trim() || '172cm · 65kg',
      membershipTier: 'WELCOME',
      points: 0,
      agreedTerms: true,
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    coupons: [
      {
        id: 'coupon_welcome15',
        userId: INSTANT_UID,
        code: 'WELCOME15',
        title: PROMO_CATALOG.WELCOME15.title,
        description: PROMO_CATALOG.WELCOME15.description,
        discountType: PROMO_CATALOG.WELCOME15.discountType,
        discountValue: PROMO_CATALOG.WELCOME15.discountValue,
        minOrderAmount: PROMO_CATALOG.WELCOME15.minOrderAmount,
        status: 'available',
        expiresAt: PROMO_CATALOG.WELCOME15.expiresAt,
        usedOrderId: '',
        createdAt: nowIso,
        updatedAt: nowIso,
      },
      {
        id: 'coupon_monoday15',
        userId: INSTANT_UID,
        code: 'MONODAY15',
        title: PROMO_CATALOG.MONODAY15.title,
        description: PROMO_CATALOG.MONODAY15.description,
        discountType: PROMO_CATALOG.MONODAY15.discountType,
        discountValue: PROMO_CATALOG.MONODAY15.discountValue,
        minOrderAmount: PROMO_CATALOG.MONODAY15.minOrderAmount,
        status: 'available',
        expiresAt: PROMO_CATALOG.MONODAY15.expiresAt,
        usedOrderId: '',
        createdAt: nowIso,
        updatedAt: nowIso,
      },
    ],
    orders: [],
    reviews: [],
    inquiries: [],
  };
}

function loadInstantData(): InstantStoreData {
  try {
    const raw = localStorage.getItem(INSTANT_DATA_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as InstantStoreData;
      if (parsed && parsed.profile) return parsed;
    }
  } catch {}
  return createDefaultInstantData();
}

function saveInstantData(data: InstantStoreData) {
  try {
    localStorage.setItem(INSTANT_DATA_KEY, JSON.stringify(data));
  } catch {}
}

interface AuthContextValue {
  user: User | null;
  isInstantSignedIn: boolean;
  isAuthenticated: boolean;
  authReady: boolean;
  profile: UserProfile | null;
  profileLoaded: boolean;
  needsRegistration: boolean;
  coupons: UserCoupon[];
  orders: UserOrder[];
  reviews: UserReview[];
  inquiries: CustomerInquiry[];
  instantLogin: () => void;
  instantSignup: (input?: {
    name?: string;
    phone?: string;
    address?: string;
    bodySpecs?: string;
  }) => void;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  completeRegistration: (input: {
    name: string;
    phone: string;
    address: string;
    bodySpecs: string;
    agreedTerms: boolean;
  }) => Promise<void>;
  updateProfile: (input: {
    name: string;
    phone: string;
    address: string;
    bodySpecs: string;
  }) => Promise<void>;
  claimCoupon: (code: string) => Promise<{ ok: boolean; message: string }>;
  createOrder: (input: {
    orderNumber: string;
    recipientName: string;
    recipientPhone: string;
    shippingAddress: string;
    deliveryNote: string;
    paymentMethod: 'card' | 'npay' | 'kpay' | 'bank';
    couponCode: string;
    couponId?: string;
    rawTotal: number;
    discountAmount: number;
    finalPrice: number;
    items: OrderItemSnapshot[];
  }) => Promise<void>;
  requestOrderCancelOrReturn: (
    orderId: string,
    type: 'cancel' | 'return',
    reason: string
  ) => Promise<void>;
  confirmOrderDelivery: (orderId: string) => Promise<void>;
  completeCancelOrReturn: (
    orderId: string,
    type: 'cancel' | 'return'
  ) => Promise<void>;
  createReview: (input: {
    productId: string;
    productName: string;
    productBrand: string;
    productImage: string;
    orderId: string;
    selectedOption: string;
    userSpecs: string;
    rating: number;
    content: string;
  }) => Promise<void>;
  updateReview: (
    reviewId: string,
    input: {
      rating: number;
      content: string;
      userSpecs: string;
      selectedOption: string;
    }
  ) => Promise<void>;
  deleteReview: (reviewId: string) => Promise<void>;
  createInquiry: (input: {
    category: InquiryCategory;
    orderNumber: string;
    title: string;
    content: string;
  }) => Promise<void>;
  updateInquiry: (
    inquiryId: string,
    input: {
      category: InquiryCategory;
      orderNumber: string;
      title: string;
      content: string;
    }
  ) => Promise<void>;
  deleteInquiry: (inquiryId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function sanitizeString(value: string, maxLen: number): string {
  return value.trim().slice(0, maxLen);
}

function getTimestampMillis(ts: unknown): number {
  if (!ts) return 0;
  if (typeof ts === 'object' && ts !== null && 'toMillis' in ts) {
    return (ts as { toMillis: () => number }).toMillis();
  }
  return 0;
}

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);

  // Instant 1-click member session state
  const [isInstantSignedIn, setIsInstantSignedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(INSTANT_SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [instantData, setInstantData] = useState<InstantStoreData>(() => loadInstantData());

  // Firestore-backed state (when signed in via Google)
  const [fsProfile, setFsProfile] = useState<UserProfile | null>(null);
  const [fsProfileLoaded, setFsProfileLoaded] = useState(false);
  const [fsCoupons, setFsCoupons] = useState<UserCoupon[]>([]);
  const [fsOrders, setFsOrders] = useState<UserOrder[]>([]);
  const [fsReviews, setFsReviews] = useState<UserReview[]>([]);
  const [fsInquiries, setFsInquiries] = useState<CustomerInquiry[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setAuthReady(true);
      if (!firebaseUser) {
        setFsProfile(null);
        setFsProfileLoaded(false);
        setFsCoupons([]);
        setFsOrders([]);
        setFsReviews([]);
        setFsInquiries([]);
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!authReady || !user) return;

    const uid = user.uid;
    const profilePath = `users/${uid}`;
    const unsubProfile = onSnapshot(
      doc(db, 'users', uid),
      (snap) => {
        setFsProfile(snap.exists() ? (snap.data() as UserProfile) : null);
        setFsProfileLoaded(true);
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, profilePath);
      }
    );

    const couponsPath = `users/${uid}/coupons`;
    const unsubCoupons = onSnapshot(
      query(collection(db, 'users', uid, 'coupons'), where('userId', '==', uid)),
      (snap) => {
        const list = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<UserCoupon, 'id'>),
        }));
        list.sort((a, b) => getTimestampMillis(b.createdAt) - getTimestampMillis(a.createdAt));
        setFsCoupons(list);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, couponsPath);
      }
    );

    const ordersPath = `users/${uid}/orders`;
    const unsubOrders = onSnapshot(
      query(collection(db, 'users', uid, 'orders'), where('userId', '==', uid)),
      (snap) => {
        const list = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<UserOrder, 'id'>),
        }));
        list.sort((a, b) => getTimestampMillis(b.createdAt) - getTimestampMillis(a.createdAt));
        setFsOrders(list);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, ordersPath);
      }
    );

    const reviewsPath = `users/${uid}/reviews`;
    const unsubReviews = onSnapshot(
      query(collection(db, 'users', uid, 'reviews'), where('userId', '==', uid)),
      (snap) => {
        const list = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<UserReview, 'id'>),
        }));
        list.sort((a, b) => getTimestampMillis(b.createdAt) - getTimestampMillis(a.createdAt));
        setFsReviews(list);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, reviewsPath);
      }
    );

    const inquiriesPath = `users/${uid}/inquiries`;
    const unsubInquiries = onSnapshot(
      query(collection(db, 'users', uid, 'inquiries'), where('userId', '==', uid)),
      (snap) => {
        const list = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<CustomerInquiry, 'id'>),
        }));
        list.sort((a, b) => getTimestampMillis(b.createdAt) - getTimestampMillis(a.createdAt));
        setFsInquiries(list);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, inquiriesPath);
      }
    );

    return () => {
      unsubProfile();
      unsubCoupons();
      unsubOrders();
      unsubReviews();
      unsubInquiries();
    };
  }, [authReady, user]);

  const updateInstant = (updater: (prev: InstantStoreData) => InstantStoreData) => {
    setInstantData((prev) => {
      const next = updater(prev);
      saveInstantData(next);
      return next;
    });
  };

  const instantLogin = () => {
    const existing = loadInstantData();
    setInstantData(existing);
    saveInstantData(existing);
    try {
      localStorage.setItem(INSTANT_SESSION_KEY, 'true');
    } catch {}
    setIsInstantSignedIn(true);
  };

  const instantSignup = (input?: {
    name?: string;
    phone?: string;
    address?: string;
    bodySpecs?: string;
  }) => {
    const fresh = createDefaultInstantData(input);
    setInstantData(fresh);
    saveInstantData(fresh);
    try {
      localStorage.setItem(INSTANT_SESSION_KEY, 'true');
    } catch {}
    setIsInstantSignedIn(true);
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    if (isInstantSignedIn) {
      try {
        localStorage.removeItem(INSTANT_SESSION_KEY);
      } catch {}
      setIsInstantSignedIn(false);
    }
    if (user) {
      await signOut(auth);
    }
  };

  const completeRegistration = async (input: {
    name: string;
    phone: string;
    address: string;
    bodySpecs: string;
    agreedTerms: boolean;
  }) => {
    if (!user) throw new Error('로그인이 필요합니다.');
    const uid = user.uid;
    const path = `users/${uid}`;
    try {
      const batch = writeBatch(db);
      const userRef = doc(db, 'users', uid);
      batch.set(userRef, {
        uid,
        email: sanitizeString(user.email || 'user@monoday.kr', 120),
        name: sanitizeString(input.name || '이재영', 50),
        phone: sanitizeString(input.phone || '111-11-11111', 30),
        address: sanitizeString(input.address || '한신대학교', 200),
        bodySpecs: sanitizeString(input.bodySpecs || '', 50),
        membershipTier: 'WELCOME',
        points: 0,
        agreedTerms: Boolean(input.agreedTerms),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      const welcomeKeys: PromoCodeKey[] = ['WELCOME15', 'MONODAY15'];
      for (const key of welcomeKeys) {
        const tpl = PROMO_CATALOG[key];
        const couponRef = doc(db, 'users', uid, 'coupons', `coupon_${key.toLowerCase()}`);
        batch.set(couponRef, {
          userId: uid,
          code: tpl.code,
          title: sanitizeString(tpl.title, 80),
          description: sanitizeString(tpl.description, 200),
          discountType: tpl.discountType,
          discountValue: tpl.discountValue,
          minOrderAmount: tpl.minOrderAmount,
          status: 'available',
          expiresAt: tpl.expiresAt,
          usedOrderId: '',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }

      await batch.commit();
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const updateProfile = async (input: {
    name: string;
    phone: string;
    address: string;
    bodySpecs: string;
  }) => {
    if (!user && isInstantSignedIn) {
      updateInstant((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          name: sanitizeString(input.name, 50),
          phone: sanitizeString(input.phone, 30),
          address: sanitizeString(input.address, 200),
          bodySpecs: sanitizeString(input.bodySpecs, 50),
          updatedAt: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
        },
      }));
      return;
    }
    if (!user) throw new Error('로그인이 필요합니다.');
    const path = `users/${user.uid}`;
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        name: sanitizeString(input.name, 50),
        phone: sanitizeString(input.phone, 30),
        address: sanitizeString(input.address, 200),
        bodySpecs: sanitizeString(input.bodySpecs, 50),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const claimCoupon = async (rawCode: string): Promise<{ ok: boolean; message: string }> => {
    const normalized = rawCode.trim().toUpperCase() as PromoCodeKey;
    const template = PROMO_CATALOG[normalized];
    if (!template) {
      return {
        ok: false,
        message: '유효하지 않은 쿠폰 코드입니다. (WELCOME15, MONODAY15, MATINKIM15, SPRING10, FIRST5000)',
      };
    }

    if (!user && isInstantSignedIn) {
      const alreadyHas = instantData.coupons.some((c) => c.code === normalized);
      if (alreadyHas) {
        return { ok: false, message: `'${normalized}' 쿠폰은 이미 보유 중입니다.` };
      }
      const nowIso = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
      updateInstant((prev) => ({
        ...prev,
        coupons: [
          {
            id: `coupon_${normalized.toLowerCase()}`,
            userId: INSTANT_UID,
            code: template.code,
            title: sanitizeString(template.title, 80),
            description: sanitizeString(template.description, 200),
            discountType: template.discountType,
            discountValue: template.discountValue,
            minOrderAmount: template.minOrderAmount,
            status: 'available',
            expiresAt: template.expiresAt,
            usedOrderId: '',
            createdAt: nowIso,
            updatedAt: nowIso,
          },
          ...prev.coupons,
        ],
      }));
      return { ok: true, message: `'${template.title}' 쿠폰이 발급되었습니다.` };
    }

    if (!user) {
      return { ok: false, message: '로그인 후 쿠폰을 등록할 수 있습니다.' };
    }
    if (!fsProfile) {
      return { ok: false, message: '회원가입을 먼저 완료해 주세요.' };
    }

    const alreadyHas = fsCoupons.some((c) => c.code === normalized);
    if (alreadyHas) {
      return { ok: false, message: `'${normalized}' 쿠폰은 이미 보유 중입니다.` };
    }

    const couponId = `coupon_${normalized.toLowerCase()}`;
    const path = `users/${user.uid}/coupons/${couponId}`;
    try {
      await setDoc(doc(db, 'users', user.uid, 'coupons', couponId), {
        userId: user.uid,
        code: template.code,
        title: sanitizeString(template.title, 80),
        description: sanitizeString(template.description, 200),
        discountType: template.discountType,
        discountValue: template.discountValue,
        minOrderAmount: template.minOrderAmount,
        status: 'available',
        expiresAt: template.expiresAt,
        usedOrderId: '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      return { ok: true, message: `'${template.title}' 쿠폰이 발급되었습니다.` };
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  };

  const createOrder = async (input: {
    orderNumber: string;
    recipientName: string;
    recipientPhone: string;
    shippingAddress: string;
    deliveryNote: string;
    paymentMethod: 'card' | 'npay' | 'kpay' | 'bank';
    couponCode: string;
    couponId?: string;
    rawTotal: number;
    discountAmount: number;
    finalPrice: number;
    items: OrderItemSnapshot[];
  }) => {
    const orderId = `order_${Date.now()}`;
    const sanitizedItems = input.items.slice(0, 50).map((it) => ({
      productId: sanitizeString(it.productId, 64),
      productName: sanitizeString(it.productName, 120),
      brand: sanitizeString(it.brand, 80),
      price: Math.max(0, Math.round(it.price)),
      qty: Math.min(99, Math.max(1, Math.round(it.qty))),
      selectedColor: sanitizeString(it.selectedColor || 'Default', 40),
      selectedSize: sanitizeString(it.selectedSize || 'FREE', 40),
      imageUrl: sanitizeString(it.imageUrl || '', 500),
    }));
    const safeRawTotal = Math.max(0, Math.round(input.rawTotal));
    const safeFinalPrice = Math.min(safeRawTotal, Math.max(0, Math.round(input.finalPrice)));
    const safeDiscount = Math.max(0, Math.round(input.discountAmount));

    if (!user && isInstantSignedIn) {
      const nowIso = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
      updateInstant((prev) => ({
        ...prev,
        orders: [
          {
            id: orderId,
            orderNumber: sanitizeString(input.orderNumber, 40),
            userId: INSTANT_UID,
            recipientName: sanitizeString(input.recipientName, 50),
            recipientPhone: sanitizeString(input.recipientPhone, 30),
            shippingAddress: sanitizeString(input.shippingAddress, 200),
            deliveryNote: sanitizeString(input.deliveryNote || '', 200),
            paymentMethod: input.paymentMethod,
            couponCode: sanitizeString(input.couponCode || '', 32),
            rawTotal: safeRawTotal,
            discountAmount: safeDiscount,
            finalPrice: safeFinalPrice,
            status: 'paid',
            cancelReturnType: '',
            cancelReturnReason: '',
            items: sanitizedItems,
            createdAt: nowIso,
            updatedAt: nowIso,
          },
          ...prev.orders,
        ],
        coupons: input.couponId
          ? prev.coupons.map((c) =>
              c.id === input.couponId && c.status === 'available'
                ? {
                    ...c,
                    status: 'used' as const,
                    usedOrderId: sanitizeString(input.orderNumber, 64),
                    updatedAt: nowIso,
                  }
                : c
            )
          : prev.coupons,
      }));
      return;
    }

    if (!user || !fsProfile) return;
    const path = `users/${user.uid}/orders/${orderId}`;
    try {
      const batch = writeBatch(db);
      const orderRef = doc(db, 'users', user.uid, 'orders', orderId);

      batch.set(orderRef, {
        orderNumber: sanitizeString(input.orderNumber, 40),
        userId: user.uid,
        recipientName: sanitizeString(input.recipientName, 50),
        recipientPhone: sanitizeString(input.recipientPhone, 30),
        shippingAddress: sanitizeString(input.shippingAddress, 200),
        deliveryNote: sanitizeString(input.deliveryNote || '', 200),
        paymentMethod: input.paymentMethod,
        couponCode: sanitizeString(input.couponCode || '', 32),
        rawTotal: safeRawTotal,
        discountAmount: safeDiscount,
        finalPrice: safeFinalPrice,
        status: 'paid',
        cancelReturnType: '',
        cancelReturnReason: '',
        items: sanitizedItems,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      if (input.couponId) {
        const targetCoupon = fsCoupons.find((c) => c.id === input.couponId && c.status === 'available');
        if (targetCoupon) {
          batch.update(doc(db, 'users', user.uid, 'coupons', targetCoupon.id), {
            status: 'used',
            usedOrderId: sanitizeString(input.orderNumber, 64),
            updatedAt: serverTimestamp(),
          });
        }
      }

      await batch.commit();
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const requestOrderCancelOrReturn = async (
    orderId: string,
    type: 'cancel' | 'return',
    reason: string
  ) => {
    if (!user && isInstantSignedIn) {
      updateInstant((prev) => ({
        ...prev,
        orders: prev.orders.map((o) =>
          o.id === orderId
            ? {
                ...o,
                status: type === 'cancel' ? 'cancel_requested' : 'return_requested',
                cancelReturnType: type,
                cancelReturnReason: sanitizeString(reason, 300),
                updatedAt: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
              }
            : o
        ),
      }));
      return;
    }

    if (!user) throw new Error('로그인이 필요합니다.');
    const path = `users/${user.uid}/orders/${orderId}`;
    try {
      await updateDoc(doc(db, 'users', user.uid, 'orders', orderId), {
        status: type === 'cancel' ? 'cancel_requested' : 'return_requested',
        cancelReturnType: type,
        cancelReturnReason: sanitizeString(reason, 300),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const confirmOrderDelivery = async (orderId: string) => {
    if (!user && isInstantSignedIn) {
      updateInstant((prev) => ({
        ...prev,
        orders: prev.orders.map((o) =>
          o.id === orderId
            ? {
                ...o,
                status: 'delivered',
                updatedAt: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
              }
            : o
        ),
      }));
      return;
    }

    if (!user) throw new Error('로그인이 필요합니다.');
    const path = `users/${user.uid}/orders/${orderId}`;
    try {
      await updateDoc(doc(db, 'users', user.uid, 'orders', orderId), {
        status: 'delivered',
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const completeCancelOrReturn = async (orderId: string, type: 'cancel' | 'return') => {
    if (!user && isInstantSignedIn) {
      updateInstant((prev) => ({
        ...prev,
        orders: prev.orders.map((o) =>
          o.id === orderId
            ? {
                ...o,
                status: type === 'cancel' ? 'cancelled' : 'returned',
                updatedAt: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
              }
            : o
        ),
      }));
      return;
    }

    if (!user) throw new Error('로그인이 필요합니다.');
    const path = `users/${user.uid}/orders/${orderId}`;
    try {
      await updateDoc(doc(db, 'users', user.uid, 'orders', orderId), {
        status: type === 'cancel' ? 'cancelled' : 'returned',
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const createReview = async (input: {
    productId: string;
    productName: string;
    productBrand: string;
    productImage: string;
    orderId: string;
    selectedOption: string;
    userSpecs: string;
    rating: number;
    content: string;
  }) => {
    const reviewId = `rev_${Date.now()}`;

    if (!user && isInstantSignedIn) {
      const nowIso = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
      updateInstant((prev) => ({
        ...prev,
        reviews: [
          {
            id: reviewId,
            userId: INSTANT_UID,
            productId: sanitizeString(input.productId, 64),
            productName: sanitizeString(input.productName, 120),
            productBrand: sanitizeString(input.productBrand, 80),
            productImage: sanitizeString(input.productImage, 500),
            orderId: sanitizeString(input.orderId || '', 64),
            selectedOption: sanitizeString(input.selectedOption || '기본 옵션', 80),
            userSpecs: sanitizeString(input.userSpecs || prev.profile.bodySpecs || '170cm · 60kg', 50),
            rating: Math.min(5, Math.max(1, Math.round(input.rating))),
            content: sanitizeString(input.content, 1000),
            createdAt: nowIso,
            updatedAt: nowIso,
          },
          ...prev.reviews,
        ],
      }));
      return;
    }

    if (!user || !fsProfile) throw new Error('회원 로그인 후 후기를 작성할 수 있습니다.');
    const path = `users/${user.uid}/reviews/${reviewId}`;
    try {
      await setDoc(doc(db, 'users', user.uid, 'reviews', reviewId), {
        userId: user.uid,
        productId: sanitizeString(input.productId, 64),
        productName: sanitizeString(input.productName, 120),
        productBrand: sanitizeString(input.productBrand, 80),
        productImage: sanitizeString(input.productImage, 500),
        orderId: sanitizeString(input.orderId || '', 64),
        selectedOption: sanitizeString(input.selectedOption || '기본 옵션', 80),
        userSpecs: sanitizeString(input.userSpecs || fsProfile.bodySpecs || '170cm · 60kg', 50),
        rating: Math.min(5, Math.max(1, Math.round(input.rating))),
        content: sanitizeString(input.content, 1000),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  };

  const updateReview = async (
    reviewId: string,
    input: {
      rating: number;
      content: string;
      userSpecs: string;
      selectedOption: string;
    }
  ) => {
    if (!user && isInstantSignedIn) {
      updateInstant((prev) => ({
        ...prev,
        reviews: prev.reviews.map((r) =>
          r.id === reviewId
            ? {
                ...r,
                rating: Math.min(5, Math.max(1, Math.round(input.rating))),
                content: sanitizeString(input.content, 1000),
                userSpecs: sanitizeString(input.userSpecs, 50),
                selectedOption: sanitizeString(input.selectedOption, 80),
                updatedAt: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
              }
            : r
        ),
      }));
      return;
    }

    if (!user) throw new Error('로그인이 필요합니다.');
    const path = `users/${user.uid}/reviews/${reviewId}`;
    try {
      await updateDoc(doc(db, 'users', user.uid, 'reviews', reviewId), {
        rating: Math.min(5, Math.max(1, Math.round(input.rating))),
        content: sanitizeString(input.content, 1000),
        userSpecs: sanitizeString(input.userSpecs, 50),
        selectedOption: sanitizeString(input.selectedOption, 80),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const deleteReview = async (reviewId: string) => {
    if (!user && isInstantSignedIn) {
      updateInstant((prev) => ({
        ...prev,
        reviews: prev.reviews.filter((r) => r.id !== reviewId),
      }));
      return;
    }

    if (!user) throw new Error('로그인이 필요합니다.');
    const path = `users/${user.uid}/reviews/${reviewId}`;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'reviews', reviewId));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const createInquiry = async (input: {
    category: InquiryCategory;
    orderNumber: string;
    title: string;
    content: string;
  }) => {
    const inquiryId = `inq_${Date.now()}`;

    if (!user && isInstantSignedIn) {
      const nowIso = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
      updateInstant((prev) => ({
        ...prev,
        inquiries: [
          {
            id: inquiryId,
            userId: INSTANT_UID,
            category: input.category,
            orderNumber: sanitizeString(input.orderNumber || '', 40),
            title: sanitizeString(input.title, 120),
            content: sanitizeString(input.content, 2000),
            status: '접수완료',
            reply: '',
            createdAt: nowIso,
            updatedAt: nowIso,
          },
          ...prev.inquiries,
        ],
      }));
      return;
    }

    if (!user || !fsProfile) throw new Error('회원 로그인 후 1:1 문의를 접수할 수 있습니다.');
    const path = `users/${user.uid}/inquiries/${inquiryId}`;
    try {
      await setDoc(doc(db, 'users', user.uid, 'inquiries', inquiryId), {
        userId: user.uid,
        category: input.category,
        orderNumber: sanitizeString(input.orderNumber || '', 40),
        title: sanitizeString(input.title, 120),
        content: sanitizeString(input.content, 2000),
        status: '접수완료',
        reply: '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  };

  const updateInquiry = async (
    inquiryId: string,
    input: {
      category: InquiryCategory;
      orderNumber: string;
      title: string;
      content: string;
    }
  ) => {
    if (!user && isInstantSignedIn) {
      updateInstant((prev) => ({
        ...prev,
        inquiries: prev.inquiries.map((i) =>
          i.id === inquiryId
            ? {
                ...i,
                category: input.category,
                orderNumber: sanitizeString(input.orderNumber || '', 40),
                title: sanitizeString(input.title, 120),
                content: sanitizeString(input.content, 2000),
                updatedAt: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
              }
            : i
        ),
      }));
      return;
    }

    if (!user) throw new Error('로그인이 필요합니다.');
    const path = `users/${user.uid}/inquiries/${inquiryId}`;
    try {
      await updateDoc(doc(db, 'users', user.uid, 'inquiries', inquiryId), {
        category: input.category,
        orderNumber: sanitizeString(input.orderNumber || '', 40),
        title: sanitizeString(input.title, 120),
        content: sanitizeString(input.content, 2000),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const deleteInquiry = async (inquiryId: string) => {
    if (!user && isInstantSignedIn) {
      updateInstant((prev) => ({
        ...prev,
        inquiries: prev.inquiries.filter((i) => i.id !== inquiryId),
      }));
      return;
    }

    if (!user) throw new Error('로그인이 필요합니다.');
    const path = `users/${user.uid}/inquiries/${inquiryId}`;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'inquiries', inquiryId));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const isFirebaseActive = Boolean(user);
  const profile = isFirebaseActive ? fsProfile : isInstantSignedIn ? instantData.profile : null;
  const profileLoaded = isFirebaseActive ? fsProfileLoaded : true;
  const needsRegistration = Boolean(authReady && user && fsProfileLoaded && !fsProfile);
  const coupons = isFirebaseActive ? fsCoupons : isInstantSignedIn ? instantData.coupons : [];
  const orders = isFirebaseActive ? fsOrders : isInstantSignedIn ? instantData.orders : [];
  const reviews = isFirebaseActive ? fsReviews : isInstantSignedIn ? instantData.reviews : [];
  const inquiries = isFirebaseActive ? fsInquiries : isInstantSignedIn ? instantData.inquiries : [];
  const isAuthenticated = Boolean((user && fsProfile) || isInstantSignedIn);

  return (
    <AuthContext.Provider
      value={{
        user,
        isInstantSignedIn,
        isAuthenticated,
        authReady,
        profile,
        profileLoaded,
        needsRegistration,
        coupons,
        orders,
        reviews,
        inquiries,
        instantLogin,
        instantSignup,
        signInWithGoogle,
        logout,
        completeRegistration,
        updateProfile,
        claimCoupon,
        createOrder,
        requestOrderCancelOrReturn,
        confirmOrderDelivery,
        completeCancelOrReturn,
        createReview,
        updateReview,
        deleteReview,
        createInquiry,
        updateInquiry,
        deleteInquiry,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside FirebaseProvider');
  }
  return ctx;
}
