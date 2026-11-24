import React, { useState, useMemo } from 'react';
import {
  User,
  LogIn,
  UserPlus,
  LogOut,
  Package,
  RotateCcw,
  Ticket,
  Star,
  Headphones,
  Settings,
  Check,
  ChevronDown,
  ChevronUp,
  Trash2,
  Edit3,
  Plus,
  ArrowRight,
  ShoppingBag,
  AlertCircle,
  ShieldCheck,
  X,
  Lock,
  Gift,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Product } from '../data/products';
import {
  InquiryCategory,
  MyPageTabType,
  OrderStatus,
  PROMO_CATALOG,
  PromoCodeKey,
  UserOrder,
  UserReview,
} from '../types/mypage';

interface MyPageProps {
  initialTab?: MyPageTabType;
  allProducts: Product[];
  onNavigateShop: () => void;
  onSelectProduct: (product: Product) => void;
  onApplyPromoCode: (code: string) => boolean;
  appliedPromoCode?: string | null;
  onShowToast: (text: string, type?: 'info' | 'success' | 'heart' | 'bag') => void;
  isAdmin?: boolean;
  onOpenAdminLogin?: () => void;
  onAdminLogout?: () => void;
  onOpenAddProduct?: () => void;
}

const ORDER_STATUS_LABEL: Record<OrderStatus, { label: string; tone: string }> = {
  paid: { label: '결제완료', tone: 'bg-[#111111] text-white' },
  preparing: { label: '상품준비중', tone: 'bg-[#f5f5f5] text-[#111111] border border-[#cacacb]' },
  shipped: { label: '배송중', tone: 'bg-[#f5f5f5] text-[#111111] border border-[#111111]' },
  delivered: { label: '배송완료', tone: 'bg-[#007d48] text-white' },
  cancel_requested: { label: '취소접수', tone: 'bg-[#fff5f5] text-[#d30005] border border-[#d30005]' },
  cancelled: { label: '취소완료', tone: 'bg-[#f5f5f5] text-[#707072] border border-[#cacacb]' },
  return_requested: { label: '반품접수', tone: 'bg-[#fff5f5] text-[#d30005] border border-[#d30005]' },
  returned: { label: '반품완료', tone: 'bg-[#f5f5f5] text-[#707072] border border-[#cacacb]' },
};

const FAQ_ITEMS = [
  {
    q: '배송 기간은 얼마나 소요되나요?',
    a: '평일 오후 2시 이전 결제 완료 시 당일 출고되며, CJ대한통운을 통해 영업일 기준 1~2일 이내 수령하실 수 있습니다. MONO:DAY 회원은 전 상품 무료 배송이 적용됩니다.',
  },
  {
    q: '주문 취소 및 반품/교환 신청은 어떻게 하나요?',
    a: 'MY 페이지 > 주문내역에서 결제완료·상품준비중 상태일 때는 즉시 주문 취소 신청이 가능하며, 배송중·배송완료 상태에서는 반품 신청 버튼을 통해 간편하게 접수하실 수 있습니다.',
  },
  {
    q: '쿠폰은 어디에서 발급받고 사용하나요?',
    a: 'MY 페이지 > 쿠폰 탭이나 이벤트 배너에서 기프트 쿠폰을 간편하게 받을 수 있으며, 장바구니 및 결제 화면에서 보유 중인 기프트 쿠폰을 선택해 바로 적용할 수 있습니다.',
  },
  {
    q: '고객센터 운영시간 및 연락처가 궁금합니다.',
    a: '고객센터 대표번호는 111-11-11111이며, 운영시간은 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00, 주말/공휴일 휴무)입니다. 1:1 문의는 24시간 접수 가능합니다.',
  },
];

function formatDate(ts: unknown): string {
  if (!ts) return '방금 전';
  if (typeof ts === 'string') return ts;
  if (typeof ts === 'object' && ts !== null && 'toDate' in ts) {
    const d = (ts as { toDate: () => Date }).toDate();
    return d.toISOString().slice(0, 10).replace(/-/g, '.');
  }
  return '방금 전';
}

export const MyPage: React.FC<MyPageProps> = ({
  initialTab = 'orders',
  allProducts,
  onNavigateShop,
  onSelectProduct,
  onApplyPromoCode,
  appliedPromoCode = null,
  onShowToast,
  isAdmin = false,
  onOpenAdminLogin,
  onAdminLogout,
  onOpenAddProduct,
}) => {
  const {
    user,
    isInstantSignedIn,
    isAuthenticated,
    authReady,
    profile,
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
    requestOrderCancelOrReturn,
    confirmOrderDelivery,
    completeCancelOrReturn,
    createReview,
    updateReview,
    deleteReview,
    createInquiry,
    updateInquiry,
    deleteInquiry,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<MyPageTabType>(initialTab);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  // Onboarding / Profile form state
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('111-11-11111');
  const [regAddress, setRegAddress] = useState('한신대학교');
  const [regBodySpecs, setRegBodySpecs] = useState('172cm · 65kg');
  const [regAgreed, setRegAgreed] = useState(true);
  const [regSubmitting, setRegSubmitting] = useState(false);

  // Profile Edit state
  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editAddress, setEditAddress] = useState('');
  const [editBodySpecs, setEditBodySpecs] = useState('');
  const [profileInitialized, setProfileInitialized] = useState(false);
  const [profileSaving, setProfileSaving] = useState(false);

  // Orders & Cancel/Return Modal state
  const [cancelReturnTarget, setCancelReturnTarget] = useState<{
    order: UserOrder;
    type: 'cancel' | 'return';
  } | null>(null);
  const [cancelReturnReason, setCancelReturnReason] = useState('단순 변심');
  const [cancelReturnCustomReason, setCancelReturnCustomReason] = useState('');
  const [cancelFilter, setCancelFilter] = useState<'all' | 'cancel' | 'return'>('all');

  // Coupons state
  const [couponFilter, setCouponFilter] = useState<'available' | 'used'>('available');

  // Reviews state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewProductId, setReviewProductId] = useState(allProducts[0]?.id || '');
  const [reviewOrderId, setReviewOrderId] = useState('');
  const [reviewOption, setReviewOption] = useState('');
  const [reviewSpecs, setReviewSpecs] = useState('172cm · 65kg');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewContent, setReviewContent] = useState('');
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [editingReview, setEditingReview] = useState<UserReview | null>(null);

  // Customer Service state
  const [inqCategory, setInqCategory] = useState<InquiryCategory>('배송');
  const [inqOrderNumber, setInqOrderNumber] = useState('');
  const [inqTitle, setInqTitle] = useState('');
  const [inqContent, setInqContent] = useState('');
  const [inqSubmitting, setInqSubmitting] = useState(false);
  const [editingInquiryId, setEditingInquiryId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [guestTab, setGuestTab] = useState<'auth' | 'cs'>('auth');

  // Sync registration default name from Google displayName
  React.useEffect(() => {
    if (user && !regName) {
      setRegName(user.displayName || '이재영');
    }
  }, [user, regName]);

  // Sync profile edit fields when profile loads
  React.useEffect(() => {
    if (profile && !profileInitialized) {
      setEditName(profile.name);
      setEditPhone(profile.phone);
      setEditAddress(profile.address);
      setEditBodySpecs(profile.bodySpecs || '');
      setReviewSpecs(profile.bodySpecs || '172cm · 65kg');
      setProfileInitialized(true);
    }
  }, [profile, profileInitialized]);

  const activeOrders = useMemo(
    () =>
      orders.filter((o) =>
        ['paid', 'preparing', 'shipped', 'delivered'].includes(o.status)
      ),
    [orders]
  );

  const cancelReturnOrders = useMemo(() => {
    const list = orders.filter((o) =>
      ['cancel_requested', 'cancelled', 'return_requested', 'returned'].includes(
        o.status
      )
    );
    if (cancelFilter === 'cancel') {
      return list.filter((o) => o.cancelReturnType === 'cancel');
    }
    if (cancelFilter === 'return') {
      return list.filter((o) => o.cancelReturnType === 'return');
    }
    return list;
  }, [orders, cancelFilter]);

  const availableCoupons = useMemo(
    () => coupons.filter((c) => c.status === 'available'),
    [coupons]
  );
  const usedCoupons = useMemo(
    () => coupons.filter((c) => c.status !== 'available'),
    [coupons]
  );

  const handleInstantAuth = () => {
    setAuthError('');
    if (authMode === 'login') {
      instantLogin();
      onShowToast('MONO:DAY 회원으로 로그인되었습니다.', 'success');
    } else {
      instantSignup({
        name: regName || '이재영',
        phone: regPhone || '111-11-11111',
        address: regAddress || '한신대학교',
        bodySpecs: regBodySpecs || '172cm · 65kg',
      });
      onShowToast('회원가입이 완료되었습니다! 웰컴 쿠폰 2종이 발급되었습니다.', 'success');
    }
  };

  const handleGoogleAuth = async () => {
    setAuthError('');
    setAuthLoading(true);
    try {
      await signInWithGoogle();
      onShowToast('Google 계정으로 로그인되었습니다.', 'success');
    } catch (err) {
      console.error(err);
      setAuthError('로그인 팝업이 닫혔거나 인증에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setProfileInitialized(false);
    onShowToast('로그아웃되었습니다.', 'info');
  };

  const handleCompleteRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regAgreed) {
      onShowToast('이용약관 및 개인정보처리방침에 동의해 주세요.', 'info');
      return;
    }
    setRegSubmitting(true);
    try {
      await completeRegistration({
        name: regName || '이재영',
        phone: regPhone || '111-11-11111',
        address: regAddress || '한신대학교',
        bodySpecs: regBodySpecs,
        agreedTerms: regAgreed,
      });
      onShowToast('회원가입이 완료되었습니다! 웰컴 쿠폰 2종이 발급되었습니다.', 'success');
    } catch (err) {
      console.error(err);
      onShowToast('회원가입 저장 중 오류가 발생했습니다.', 'info');
    } finally {
      setRegSubmitting(false);
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSaving(true);
    try {
      await updateProfile({
        name: editName,
        phone: editPhone,
        address: editAddress,
        bodySpecs: editBodySpecs,
      });
      onShowToast('회원정보가 저장되었습니다.', 'success');
    } finally {
      setProfileSaving(false);
    }
  };

  const handleClaimPresetCoupon = async (code: PromoCodeKey) => {
    const res = await claimCoupon(code);
    onShowToast(res.message, res.ok ? 'success' : 'info');
  };

  const handleCancelReturnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cancelReturnTarget) return;
    const finalReason =
      cancelReturnReason === '직접 입력'
        ? cancelReturnCustomReason.trim()
        : cancelReturnReason;
    if (finalReason.length < 2) {
      onShowToast('사유를 2자 이상 입력해 주세요.', 'info');
      return;
    }
    await requestOrderCancelOrReturn(
      cancelReturnTarget.order.id,
      cancelReturnTarget.type,
      finalReason
    );
    onShowToast(
      cancelReturnTarget.type === 'cancel'
        ? '주문 취소 신청이 접수되었습니다.'
        : '반품 신청이 접수되었습니다.',
      'success'
    );
    setCancelReturnTarget(null);
    setActiveTab('cancellations');
  };

  const handleOpenReviewForProduct = (
    productId: string,
    orderId = '',
    selectedOpt = ''
  ) => {
    const prod = allProducts.find((p) => p.id === productId);
    setReviewProductId(productId);
    setReviewOrderId(orderId);
    setReviewOption(
      selectedOpt ||
        (prod ? `${prod.colors[0] || 'Default'} / ${prod.sizes[0] || 'FREE'}` : '')
    );
    setEditingReview(null);
    setReviewContent('');
    setReviewRating(5);
    setShowReviewForm(true);
    setActiveTab('reviews');
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewContent.trim().length < 5) {
      onShowToast('후기 내용을 5자 이상 작성해 주세요.', 'info');
      return;
    }
    setReviewSubmitting(true);
    try {
      if (editingReview) {
        await updateReview(editingReview.id, {
          rating: reviewRating,
          content: reviewContent,
          userSpecs: reviewSpecs,
          selectedOption: reviewOption,
        });
        onShowToast('후기가 수정되었습니다.', 'success');
        setEditingReview(null);
      } else {
        const prod =
          allProducts.find((p) => p.id === reviewProductId) || allProducts[0];
        if (!prod) return;
        await createReview({
          productId: prod.id,
          productName: prod.name,
          productBrand: prod.brand,
          productImage: prod.img1,
          orderId: reviewOrderId,
          selectedOption:
            reviewOption || `${prod.colors[0] || 'Default'} / ${prod.sizes[0] || 'FREE'}`,
          userSpecs: reviewSpecs,
          rating: reviewRating,
          content: reviewContent,
        });
        onShowToast('소중한 상품 후기가 등록되었습니다.', 'success');
      }
      setReviewContent('');
      setShowReviewForm(false);
    } finally {
      setReviewSubmitting(false);
    }
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inqTitle.trim().length < 2 || inqContent.trim().length < 5) {
      onShowToast('문의 제목(2자 이상)과 내용(5자 이상)을 입력해 주세요.', 'info');
      return;
    }
    setInqSubmitting(true);
    try {
      if (editingInquiryId) {
        await updateInquiry(editingInquiryId, {
          category: inqCategory,
          orderNumber: inqOrderNumber,
          title: inqTitle,
          content: inqContent,
        });
        onShowToast('1:1 문의가 수정되었습니다.', 'success');
        setEditingInquiryId(null);
      } else {
        await createInquiry({
          category: inqCategory,
          orderNumber: inqOrderNumber,
          title: inqTitle,
          content: inqContent,
        });
        onShowToast('1:1 문의가 정상적으로 접수되었습니다.', 'success');
      }
      setInqTitle('');
      setInqContent('');
      setInqOrderNumber('');
    } finally {
      setInqSubmitting(false);
    }
  };

  if (!authReady) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-20 text-center">
        <div className="inline-block w-8 h-8 border-2 border-[#111111] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs text-[#707072] mt-4">회원 정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  // 1. LOGGED-OUT VIEW: Login / Sign Up + Customer Service FAQ
  if (!user && !isInstantSignedIn) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#e5e5e5] pb-6 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#707072] uppercase block">
              MONO:DAY MEMBERSHIP
            </span>
            <h1 className="font-display text-4xl sm:text-5xl text-[#111111] tracking-tight uppercase mt-1">
              MY PAGE
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setGuestTab('auth')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                guestTab === 'auth'
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#f5f5f5] text-[#111111] hover:bg-[#e5e5e5]'
              }`}
            >
              로그인 / 회원가입
            </button>
            <button
              onClick={() => setGuestTab('cs')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                guestTab === 'cs'
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#f5f5f5] text-[#111111] hover:bg-[#e5e5e5]'
              }`}
            >
              고객센터 / FAQ
            </button>
          </div>
        </div>

        {guestTab === 'auth' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Editorial Benefits */}
            <div className="lg:col-span-6 bg-[#111111] text-white p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-[11px] font-mono tracking-widest text-[#9e9ea0] uppercase">
                  MEMBERS ONLY BENEFITS
                </span>
                <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-none uppercase">
                  JOIN MONO:DAY
                </h2>
                <p className="text-xs sm:text-sm text-[#cacacb] leading-relaxed max-w-md">
                  MONO:DAY 회원으로 가입하고 웰컴 15% 할인 쿠폰, 실시간 주문·배송 조회, 간편 취소/반품, 포토 후기 관리 및 1:1 전담 고객센터 서비스를 이용해 보세요.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#2d2d2f] text-xs">
                <div className="space-y-1">
                  <Ticket className="w-4 h-4 text-white" />
                  <p className="font-semibold">신규 가입 웰컴 쿠폰</p>
                  <p className="text-[#9e9ea0] text-[11px]">가입 즉시 15% 쿠폰 2종 지급</p>
                </div>
                <div className="space-y-1">
                  <Package className="w-4 h-4 text-white" />
                  <p className="font-semibold">주문 / 배송 통합 관리</p>
                  <p className="text-[#9e9ea0] text-[11px]">주문내역 및 취소/반품 원클릭 접수</p>
                </div>
                <div className="space-y-1">
                  <Star className="w-4 h-4 text-white" />
                  <p className="font-semibold">구매 후기 아카이브</p>
                  <p className="text-[#9e9ea0] text-[11px]">내가 남긴 리뷰 조회·수정·관리</p>
                </div>
                <div className="space-y-1">
                  <Headphones className="w-4 h-4 text-white" />
                  <p className="font-semibold">1:1 전담 고객센터</p>
                  <p className="text-[#9e9ea0] text-[11px]">문의 접수 및 처리 현황 실시간 확인</p>
                </div>
              </div>
            </div>

            {/* Right Login / Signup Card */}
            <div className="lg:col-span-6 bg-[#f5f5f5] border border-[#e5e5e5] p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex border-b border-[#cacacb] mb-6">
                  <button
                    onClick={() => setAuthMode('login')}
                    className={`flex-1 pb-3 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer flex items-center justify-center space-x-1.5 ${
                      authMode === 'login'
                        ? 'border-[#111111] text-[#111111]'
                        : 'border-transparent text-[#707072]'
                    }`}
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>로그인</span>
                  </button>
                  <button
                    onClick={() => setAuthMode('signup')}
                    className={`flex-1 pb-3 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer flex items-center justify-center space-x-1.5 ${
                      authMode === 'signup'
                        ? 'border-[#111111] text-[#111111]'
                        : 'border-transparent text-[#707072]'
                    }`}
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>회원가입</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-[#111111]">
                    {authMode === 'login'
                      ? 'MONO:DAY 회원 로그인'
                      : 'MONO:DAY 간편 회원가입'}
                  </h3>
                  <p className="text-xs text-[#707072] leading-relaxed">
                    {authMode === 'login'
                      ? '별도의 복잡한 인증 절차 없이 버튼 클릭 한 번으로 바로 로그인하여 주문내역, 쿠폰, 후기, 고객센터를 이용하세요.'
                      : '간단한 기본 정보 확인 후 클릭 한 번으로 즉시 회원가입이 완료되며 웰컴 15% 쿠폰 2종이 자동 발급됩니다.'}
                  </p>
                </div>

                {authMode === 'signup' && (
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div>
                      <label className="block text-[11px] text-[#707072] mb-1">이름</label>
                      <input
                        type="text"
                        value={regName || '이재영'}
                        onChange={(e) => setRegName(e.target.value)}
                        className="w-full bg-white border border-[#cacacb] rounded-full px-3.5 py-2 focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#707072] mb-1">연락처</label>
                      <input
                        type="text"
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        className="w-full bg-white border border-[#cacacb] rounded-full px-3.5 py-2 font-mono focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#707072] mb-1">기본 배송지</label>
                      <input
                        type="text"
                        value={regAddress}
                        onChange={(e) => setRegAddress(e.target.value)}
                        className="w-full bg-white border border-[#cacacb] rounded-full px-3.5 py-2 focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                  </div>
                )}

                {authError && (
                  <div className="mt-4 p-3 bg-white border border-[#d30005] text-xs text-[#d30005] flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                <div className="mt-6 space-y-2.5">
                  <button
                    onClick={handleInstantAuth}
                    className="w-full py-4 px-6 bg-[#111111] hover:bg-black text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center space-x-3 cursor-pointer active:scale-95 shadow-sm"
                  >
                    <span>{authMode === 'login' ? '바로 로그인하기' : '바로 회원가입 완료하기'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleGoogleAuth}
                    disabled={authLoading}
                    className="w-full py-2.5 px-4 bg-white hover:bg-[#e5e5e5]/50 text-[#707072] hover:text-[#111111] border border-[#cacacb] rounded-full text-[11px] font-medium transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {authLoading ? 'Google 인증 중...' : 'Google 계정으로 연동 로그인'}
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-[#e5e5e5] flex items-center justify-between text-[11px] text-[#707072]">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                  <span>Firebase 보안 인증 기반 개인정보 보호</span>
                </span>
                <button
                  onClick={() => setGuestTab('cs')}
                  className="underline text-[#111111] cursor-pointer"
                >
                  비회원 고객센터 안내
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Guest Customer Service View */
          <div className="space-y-8">
            <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <span className="text-[11px] text-[#707072] uppercase tracking-wider font-semibold">
                  CUSTOMER CENTER
                </span>
                <p className="text-2xl font-mono font-bold text-[#111111] mt-1">111-11-11111</p>
                <p className="text-xs text-[#707072] mt-1">
                  평일 09:00 - 18:00 (점심 12:00 - 13:00)
                </p>
              </div>
              <div>
                <span className="text-[11px] text-[#707072] uppercase tracking-wider font-semibold">
                  ADDRESS
                </span>
                <p className="text-sm font-medium text-[#111111] mt-1">한신대학교</p>
                <p className="text-xs text-[#707072] mt-1">대표이사 / 책임자: 이재영</p>
              </div>
              <div className="flex flex-col justify-center items-start md:items-end">
                <button
                  onClick={() => setGuestTab('auth')}
                  className="px-6 py-3 bg-[#111111] text-white rounded-full text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
                >
                  로그인 후 1:1 문의 접수하기
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#111111] uppercase tracking-wider">
                자주 묻는 질문 (FAQ)
              </h3>
              <div className="border-t border-[#e5e5e5]">
                {FAQ_ITEMS.map((faq, idx) => (
                  <div key={idx} className="border-b border-[#e5e5e5]">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full py-4 flex items-center justify-between text-left text-xs sm:text-sm font-medium text-[#111111] cursor-pointer"
                    >
                      <span>Q. {faq.q}</span>
                      {openFaqIndex === idx ? (
                        <ChevronUp className="w-4 h-4 text-[#707072]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#707072]" />
                      )}
                    </button>
                    {openFaqIndex === idx && (
                      <div className="pb-4 text-xs text-[#707072] leading-relaxed bg-[#f5f5f5]/60 p-4 mb-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Admin Mode Access inside MY Page */}
        <div className="border border-[#e5e5e5] bg-[#f5f5f5] p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#111111]">
                MONO:DAY 관리자 모드 (ADMIN)
              </p>
              <p className="text-[11px] text-[#707072]">
                상품 등록·삭제 등 스토어 카탈로그 관리 기능에 접근할 수 있습니다.
              </p>
            </div>
          </div>

          {isAdmin ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 bg-white text-[#111111] border border-[#cacacb] px-3 py-1.5 rounded-full text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#007d48]" />
                <span>Admin Mode</span>
              </span>
              {onOpenAddProduct && (
                <button
                  onClick={onOpenAddProduct}
                  className="inline-flex items-center space-x-1.5 bg-[#111111] hover:bg-black text-white px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>상품 추가</span>
                </button>
              )}
              {onAdminLogout && (
                <button
                  onClick={onAdminLogout}
                  className="inline-flex items-center space-x-1 bg-white hover:bg-[#e5e5e5] text-[#111111] border border-[#cacacb] px-3.5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5 text-[#707072]" />
                  <span>관리자 로그아웃</span>
                </button>
              )}
            </div>
          ) : (
            onOpenAdminLogin && (
              <button
                onClick={onOpenAdminLogin}
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-medium transition-all cursor-pointer"
                title="관리자 로그인 (비밀번호: 1245 또는 admin123)"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>관리자 로그인 (ADMIN)</span>
              </button>
            )
          )}
        </div>
      </div>
    );
  }

  // 2. ONBOARDING VIEW (Signed in via Google, needs profile registration)
  if (user && needsRegistration) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="border border-[#cacacb] bg-white p-8 sm:p-10 space-y-6">
          <div className="flex items-start justify-between border-b border-[#e5e5e5] pb-5">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#007d48] uppercase font-semibold">
                STEP 2 / MEMBER REGISTRATION
              </span>
              <h1 className="text-2xl font-medium text-[#111111] mt-1">
                회원가입 정보 입력
              </h1>
              <p className="text-xs text-[#707072] mt-1">
                인증 계정: <span className="font-mono text-[#111111]">{user.email}</span>
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-[#707072] hover:text-[#111111] underline cursor-pointer"
            >
              다른 계정으로 로그인
            </button>
          </div>

          <form onSubmit={handleCompleteRegistration} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">이름 *</label>
                <input
                  type="text"
                  required
                  maxLength={50}
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  placeholder="이름 입력"
                  className="w-full border border-[#cacacb] rounded-full px-4 py-2.5 focus:outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">연락처 *</label>
                <input
                  type="text"
                  required
                  maxLength={30}
                  value={regPhone}
                  onChange={(e) => setRegPhone(e.target.value)}
                  placeholder="예: 111-11-11111"
                  className="w-full border border-[#cacacb] rounded-full px-4 py-2.5 focus:outline-none focus:border-[#111111] font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#707072] mb-1.5 font-medium">기본 배송지 *</label>
              <input
                type="text"
                required
                maxLength={200}
                value={regAddress}
                onChange={(e) => setRegAddress(e.target.value)}
                placeholder="기본 배송지 입력"
                className="w-full border border-[#cacacb] rounded-full px-4 py-2.5 focus:outline-none focus:border-[#111111]"
              />
            </div>

            <div>
              <label className="block text-[#707072] mb-1.5 font-medium">
                체형 정보 (선택 · 후기 작성 시 자동 입력)
              </label>
              <input
                type="text"
                maxLength={50}
                value={regBodySpecs}
                onChange={(e) => setRegBodySpecs(e.target.value)}
                placeholder="예: 172cm · 65kg"
                className="w-full border border-[#cacacb] rounded-full px-4 py-2.5 focus:outline-none focus:border-[#111111]"
              />
            </div>

            <div className="bg-[#f5f5f5] p-4 border border-[#e5e5e5] space-y-2">
              <label className="flex items-center space-x-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={regAgreed}
                  onChange={(e) => setRegAgreed(e.target.checked)}
                  className="w-4 h-4 accent-[#111111]"
                />
                <span className="text-[#111111] font-medium">
                  [필수] MONO:DAY 이용약관 및 개인정보 수집·이용에 동의합니다.
                </span>
              </label>
              <p className="text-[11px] text-[#007d48] pl-6">
                가입 완료 즉시 신규 가입 15% 웰컴 &amp; 시즌 오픈 기프트 쿠폰 2종이 자동 지급됩니다.
              </p>
            </div>

            <button
              type="submit"
              disabled={regSubmitting}
              className="w-full py-3.5 bg-[#111111] hover:bg-black text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer disabled:opacity-50"
            >
              {regSubmitting ? '가입 처리 중...' : '회원가입 완료 & 웰컴 쿠폰 받기'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 3. REGISTERED MEMBER MY PAGE DASHBOARD
  const tabs: { id: MyPageTabType; label: string; count?: number; icon: React.ReactNode }[] = [
    { id: 'orders', label: '주문내역', count: activeOrders.length, icon: <Package className="w-3.5 h-3.5" /> },
    { id: 'cancellations', label: '취소/반품내역', count: cancelReturnOrders.length, icon: <RotateCcw className="w-3.5 h-3.5" /> },
    { id: 'coupons', label: '쿠폰', count: availableCoupons.length, icon: <Ticket className="w-3.5 h-3.5" /> },
    { id: 'reviews', label: '후기', count: reviews.length, icon: <Star className="w-3.5 h-3.5" /> },
    { id: 'cs', label: '고객센터', count: inquiries.length, icon: <Headphones className="w-3.5 h-3.5" /> },
    { id: 'profile', label: '회원정보', icon: <Settings className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-8">
      {/* Member Top Dashboard Banner */}
      <section className="bg-[#111111] text-white p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full bg-white text-[#111111] flex items-center justify-center font-display text-2xl shrink-0">
              {(profile?.name || user?.displayName || 'M').slice(0, 1).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-white/15 text-white text-[10px] font-mono px-2.5 py-0.5 rounded-full uppercase">
                  {profile?.membershipTier || 'WELCOME'} MEMBER
                </span>
                <span className="text-[11px] text-[#9e9ea0] font-mono">
                  {profile?.email || user?.email || 'member@monoday.kr'}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-medium mt-1">
                {profile?.name || user?.displayName || '이재영'}님의 MY PAGE
              </h1>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            <button
              onClick={() => setActiveTab('orders')}
              className="bg-[#1e1e20] hover:bg-[#2a2a2d] p-3.5 text-left transition-colors cursor-pointer"
            >
              <span className="text-[10px] text-[#9e9ea0] block">진행 주문</span>
              <span className="text-lg font-mono font-semibold mt-0.5 block">
                {activeOrders.length}건
              </span>
            </button>
            <button
              onClick={() => setActiveTab('cancellations')}
              className="bg-[#1e1e20] hover:bg-[#2a2a2d] p-3.5 text-left transition-colors cursor-pointer"
            >
              <span className="text-[10px] text-[#9e9ea0] block">취소/반품</span>
              <span className="text-lg font-mono font-semibold mt-0.5 block">
                {cancelReturnOrders.length}건
              </span>
            </button>
            <button
              onClick={() => setActiveTab('coupons')}
              className="bg-[#1e1e20] hover:bg-[#2a2a2d] p-3.5 text-left transition-colors cursor-pointer"
            >
              <span className="text-[10px] text-[#9e9ea0] block">보유 쿠폰</span>
              <span className="text-lg font-mono font-semibold mt-0.5 block">
                {availableCoupons.length}장
              </span>
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className="bg-[#1e1e20] hover:bg-[#2a2a2d] p-3.5 text-left transition-colors cursor-pointer"
            >
              <span className="text-[10px] text-[#9e9ea0] block">작성 후기</span>
              <span className="text-lg font-mono font-semibold mt-0.5 block">
                {reviews.length}건
              </span>
            </button>
            <button
              onClick={handleLogout}
              className="bg-[#1e1e20] hover:bg-[#2a2a2d] p-3.5 text-left transition-colors cursor-pointer flex flex-col justify-between col-span-2 sm:col-span-1"
            >
              <span className="text-[10px] text-[#9e9ea0] flex items-center space-x-1">
                <LogOut className="w-3 h-3" />
                <span>계정</span>
              </span>
              <span className="text-xs font-medium mt-1 underline underline-offset-4">
                로그아웃
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Sub-Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e5e5e5]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-medium transition-all flex items-center space-x-1.5 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#f5f5f5] text-[#707072] hover:bg-[#e5e5e5] hover:text-[#111111]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && (
                <span
                  className={`font-mono text-[11px] px-1.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white text-[#111111]'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB 1: 주문내역 */}
      {activeTab === 'orders' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#111111]">주문내역</h2>
              <p className="text-xs text-[#707072] mt-0.5">
                결제 완료된 주문의 배송 상태 확인, 주문 취소·반품 신청 및 후기 작성이 가능합니다.
              </p>
            </div>
            <button
              onClick={onNavigateShop}
              className="px-4 py-2 bg-[#f5f5f5] hover:bg-[#e5e5e5] text-[#111111] rounded-full text-xs font-medium cursor-pointer"
            >
              쇼핑 계속하기
            </button>
          </div>

          {activeOrders.length === 0 ? (
            <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-12 text-center space-y-3">
              <ShoppingBag className="w-10 h-10 text-[#cacacb] mx-auto" />
              <p className="text-sm text-[#111111] font-medium">진행 중인 주문내역이 없습니다.</p>
              <p className="text-xs text-[#707072]">
                장바구니에서 상품을 주문하면 이곳에 실시간으로 기록됩니다.
              </p>
              <button
                onClick={onNavigateShop}
                className="mt-2 px-6 py-2.5 bg-[#111111] text-white rounded-full text-xs font-medium hover:bg-black cursor-pointer"
              >
                상품 보러가기
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {activeOrders.map((order) => {
                const statusInfo = ORDER_STATUS_LABEL[order.status];
                return (
                  <div
                    key={order.id}
                    className="border border-[#e5e5e5] bg-white p-5 sm:p-6 space-y-4"
                  >
                    {/* Order Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#e5e5e5]">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span
                          className={`text-[11px] px-3 py-1 rounded-full font-medium ${statusInfo.tone}`}
                        >
                          {statusInfo.label}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#111111]">
                          {order.orderNumber}
                        </span>
                        <span className="text-xs text-[#707072] font-mono">
                          {formatDate(order.createdAt)}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-[#111111] tabular-nums">
                        결제금액: <span className="text-sm font-semibold">₩{order.finalPrice.toLocaleString()}</span>
                        {order.couponCode && (
                          <span className="ml-2 text-[11px] text-[#007d48]">
                            ({PROMO_CATALOG[order.couponCode as PromoCodeKey]?.title || '기프트 쿠폰'} 적용)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="space-y-3">
                      {order.items.map((item, idx) => {
                        const catalogProd = allProducts.find((p) => p.id === item.productId);
                        const alreadyReviewed = reviews.some(
                          (r) => r.productId === item.productId && r.orderId === order.orderNumber
                        );
                        return (
                          <div
                            key={`${order.id}-${idx}`}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#f5f5f5] p-3.5"
                          >
                            <div
                              onClick={() => catalogProd && onSelectProduct(catalogProd)}
                              className={`flex items-center space-x-3.5 ${
                                catalogProd ? 'cursor-pointer' : ''
                              }`}
                            >
                              <img
                                src={item.imageUrl}
                                alt={item.productName}
                                referrerPolicy="no-referrer"
                                className="w-14 h-16 object-cover bg-white border border-[#e5e5e5] shrink-0"
                              />
                              <div>
                                <span className="text-[10px] text-[#707072] uppercase font-medium">
                                  {item.brand}
                                </span>
                                <p className="text-xs font-medium text-[#111111]">
                                  {item.productName}
                                </p>
                                <p className="text-[11px] text-[#707072] mt-0.5">
                                  {item.selectedColor} / {item.selectedSize} · 수량 {item.qty}개
                                </p>
                                <p className="text-xs font-medium text-[#111111] mt-1 tabular-nums">
                                  ₩{(item.price * item.qty).toLocaleString()}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              {alreadyReviewed ? (
                                <span className="text-[11px] text-[#007d48] font-medium px-3 py-1.5 bg-white border border-[#e5e5e5] rounded-full">
                                  후기 작성 완료
                                </span>
                              ) : (
                                <button
                                  onClick={() =>
                                    handleOpenReviewForProduct(
                                      item.productId,
                                      order.orderNumber,
                                      `${item.selectedColor} / ${item.selectedSize}`
                                    )
                                  }
                                  className="px-3.5 py-1.5 bg-white border border-[#cacacb] hover:border-[#111111] text-[#111111] rounded-full text-xs font-medium cursor-pointer"
                                >
                                  후기 작성
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Shipping & Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs">
                      <div className="text-[#707072]">
                        배송지: <span className="text-[#111111]">{order.recipientName}</span> (
                        {order.recipientPhone}) · {order.shippingAddress}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {(order.status === 'paid' || order.status === 'preparing') && (
                          <>
                            <button
                              onClick={async () => {
                                await confirmOrderDelivery(order.id);
                                onShowToast('배송 완료 상태로 확인되었습니다.', 'success');
                              }}
                              className="px-4 py-1.5 bg-[#f5f5f5] hover:bg-[#e5e5e5] text-[#111111] rounded-full text-xs font-medium cursor-pointer"
                            >
                              배송 완료 확인
                            </button>
                            <button
                              onClick={() => {
                                setCancelReturnTarget({ order, type: 'cancel' });
                                setCancelReturnReason('단순 변심');
                                setCancelReturnCustomReason('');
                              }}
                              className="px-4 py-1.5 border border-[#d30005] text-[#d30005] hover:bg-[#fff5f5] rounded-full text-xs font-medium cursor-pointer"
                            >
                              주문 취소 신청
                            </button>
                          </>
                        )}
                        {(order.status === 'shipped' || order.status === 'delivered') && (
                          <button
                            onClick={() => {
                              setCancelReturnTarget({ order, type: 'return' });
                              setCancelReturnReason('사이즈가 맞지 않음');
                              setCancelReturnCustomReason('');
                            }}
                            className="px-4 py-1.5 border border-[#d30005] text-[#d30005] hover:bg-[#fff5f5] rounded-full text-xs font-medium cursor-pointer"
                          >
                            반품 신청
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* TAB 2: 취소/반품내역 */}
      {activeTab === 'cancellations' && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-[#111111]">취소/반품내역</h2>
              <p className="text-xs text-[#707072] mt-0.5">
                접수하신 주문 취소 및 반품 진행 현황과 환불 금액을 확인할 수 있습니다.
              </p>
            </div>
            <div className="flex space-x-2">
              {(['all', 'cancel', 'return'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setCancelFilter(f)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer ${
                    cancelFilter === f
                      ? 'bg-[#111111] text-white'
                      : 'bg-[#f5f5f5] text-[#707072] hover:text-[#111111]'
                  }`}
                >
                  {f === 'all' ? '전체' : f === 'cancel' ? '취소 내역' : '반품 내역'}
                </button>
              ))}
            </div>
          </div>

          {cancelReturnOrders.length === 0 ? (
            <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-12 text-center space-y-2">
              <RotateCcw className="w-10 h-10 text-[#cacacb] mx-auto" />
              <p className="text-sm text-[#111111] font-medium">
                취소 또는 반품 신청 내역이 없습니다.
              </p>
              <p className="text-xs text-[#707072]">
                주문내역 탭에서 주문 취소 또는 반품을 신청하시면 이곳에서 확인할 수 있습니다.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cancelReturnOrders.map((order) => {
                const statusInfo = ORDER_STATUS_LABEL[order.status];
                const isPending =
                  order.status === 'cancel_requested' ||
                  order.status === 'return_requested';
                return (
                  <div
                    key={order.id}
                    className="border border-[#e5e5e5] bg-white p-5 sm:p-6 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#e5e5e5]">
                      <div className="flex items-center space-x-2.5">
                        <span
                          className={`text-[11px] px-3 py-1 rounded-full font-medium ${statusInfo.tone}`}
                        >
                          {statusInfo.label}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#111111]">
                          {order.orderNumber}
                        </span>
                        <span className="text-xs text-[#707072]">
                          ({order.cancelReturnType === 'cancel' ? '주문 취소' : '반품'})
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-[#d30005] tabular-nums">
                        환불 예정 금액: ₩{order.finalPrice.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-[#f5f5f5] p-3.5 text-xs space-y-1">
                      <p className="text-[#707072]">
                        신청 사유:{' '}
                        <span className="text-[#111111] font-medium">
                          {order.cancelReturnReason}
                        </span>
                      </p>
                      <p className="text-[#707072]">
                        상품: {order.items[0]?.productName}
                        {order.items.length > 1 ? ` 외 ${order.items.length - 1}건` : ''}
                      </p>
                    </div>

                    {isPending && (
                      <div className="flex justify-end">
                        <button
                          onClick={async () => {
                            await completeCancelOrReturn(
                              order.id,
                              order.cancelReturnType === 'cancel' ? 'cancel' : 'return'
                            );
                            onShowToast(
                              order.cancelReturnType === 'cancel'
                                ? '취소 처리가 완료되었습니다.'
                                : '반품 처리가 완료되었습니다.',
                              'success'
                            );
                          }}
                          className="px-4 py-1.5 bg-[#111111] hover:bg-black text-white rounded-full text-xs font-medium cursor-pointer"
                        >
                          {order.cancelReturnType === 'cancel'
                            ? '취소 완료 확인'
                            : '반품 완료 확인'}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* TAB 3: 쿠폰 (기프트 쿠폰 라운지 & 쿠폰함) */}
      {activeTab === 'coupons' && (
        <section className="space-y-8">
          {/* Gift Coupon Lounge Header */}
          <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#111111]">기프트 쿠폰 라운지 &amp; 내 쿠폰함</h2>
                <p className="text-xs text-[#707072] mt-0.5">
                  코드 입력 없이 원하는 기프트 쿠폰을 바로 받아 보관하고, 장바구니 및 결제 화면에서 선택해 사용하세요.
                </p>
              </div>
            </div>
            <span className="text-xs font-medium text-[#111111] bg-white border border-[#cacacb] px-3.5 py-1.5 rounded-full shrink-0">
              사용 가능 기프트 {availableCoupons.length}장
            </span>
          </div>

          {/* Claimable Gift Coupons */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-[#707072] uppercase">
              받을 수 있는 기프트 쿠폰
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(Object.keys(PROMO_CATALOG) as PromoCodeKey[]).map((key) => {
                const tpl = PROMO_CATALOG[key];
                const owned = coupons.some((c) => c.code === key);
                return (
                  <div
                    key={key}
                    className="border border-[#e5e5e5] bg-white p-5 flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-display tracking-tight text-[#111111]">
                          {tpl.discountType === 'percent'
                            ? `${tpl.discountValue}% OFF`
                            : `₩${tpl.discountValue.toLocaleString()} OFF`}
                        </span>
                        <span className="inline-flex items-center space-x-1 text-[11px] font-medium bg-[#f5f5f5] px-2.5 py-0.5 rounded-full text-[#111111]">
                          <Gift className="w-3 h-3 text-[#d30005]" />
                          <span>GIFT</span>
                        </span>
                      </div>
                      <h4 className="text-xs font-semibold text-[#111111] mt-2">{tpl.title}</h4>
                      <p className="text-[11px] text-[#707072] mt-1">{tpl.description}</p>
                      <p className="text-[11px] text-[#707072] mt-1.5">
                        최소 주문 ₩{tpl.minOrderAmount.toLocaleString()} · ~{tpl.expiresAt}
                      </p>
                    </div>
                    <button
                      onClick={() => handleClaimPresetCoupon(key)}
                      disabled={owned}
                      className={`w-full py-2 rounded-full text-xs font-medium transition-colors inline-flex items-center justify-center space-x-1.5 ${
                        owned
                          ? 'bg-[#f5f5f5] text-[#707072] cursor-default'
                          : 'bg-[#111111] hover:bg-black text-white cursor-pointer'
                      }`}
                    >
                      {owned ? <Check className="w-3.5 h-3.5" /> : <Gift className="w-3.5 h-3.5" />}
                      <span>{owned ? '기프트 수령 완료' : '기프트 쿠폰 받기'}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* My Gift Coupon Wallet */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCouponFilter('available')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer ${
                  couponFilter === 'available'
                    ? 'bg-[#111111] text-white'
                    : 'bg-[#f5f5f5] text-[#707072]'
                }`}
              >
                사용 가능 ({availableCoupons.length})
              </button>
              <button
                onClick={() => setCouponFilter('used')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer ${
                  couponFilter === 'used'
                    ? 'bg-[#111111] text-white'
                    : 'bg-[#f5f5f5] text-[#707072]'
                }`}
              >
                사용 완료 / 만료 ({usedCoupons.length})
              </button>
            </div>

            {(couponFilter === 'available' ? availableCoupons : usedCoupons).length === 0 ? (
              <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-10 text-center text-xs text-[#707072]">
                해당하는 기프트 쿠폰이 없습니다.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(couponFilter === 'available' ? availableCoupons : usedCoupons).map(
                  (coupon) => {
                    const isApplied = appliedPromoCode === coupon.code;
                    return (
                      <div
                        key={coupon.id}
                        className={`border p-5 flex items-center justify-between gap-4 ${
                          coupon.status === 'available'
                            ? isApplied
                              ? 'border-[#111111] bg-[#f5f5f5]'
                              : 'border-[#111111] bg-white'
                            : 'border-[#e5e5e5] bg-[#f5f5f5] opacity-70'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-display text-[#d30005]">
                              {coupon.discountType === 'percent'
                                ? `${coupon.discountValue}%`
                                : `₩${coupon.discountValue.toLocaleString()}`}
                            </span>
                            <span className="inline-flex items-center space-x-1 text-[10px] font-medium bg-[#f5f5f5] border border-[#e5e5e5] px-2 py-0.5 rounded-full text-[#111111]">
                              <Gift className="w-3 h-3 text-[#d30005]" />
                              <span>{coupon.status === 'available' ? '사용 가능' : '사용 완료'}</span>
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-[#111111]">{coupon.title}</p>
                          <p className="text-[11px] text-[#707072]">
                            최소 주문 ₩{coupon.minOrderAmount.toLocaleString()} · 만료일{' '}
                            {coupon.expiresAt}
                          </p>
                          {coupon.usedOrderId && (
                            <p className="text-[11px] text-[#007d48] font-mono">
                              사용 주문: {coupon.usedOrderId}
                            </p>
                          )}
                        </div>
                        {coupon.status === 'available' && (
                          <button
                            onClick={() => onApplyPromoCode(coupon.code)}
                            className={`px-4 py-2 rounded-full text-xs font-medium shrink-0 cursor-pointer transition-colors ${
                              isApplied
                                ? 'bg-[#007d48] text-white'
                                : 'bg-[#111111] hover:bg-black text-white'
                            }`}
                          >
                            {isApplied ? '장바구니 적용됨' : '장바구니 사용하기'}
                          </button>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* TAB 4: 후기 */}
      {activeTab === 'reviews' && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-[#111111]">상품 후기 관리</h2>
              <p className="text-xs text-[#707072] mt-0.5">
                구매하신 상품이나 관심 상품에 대한 솔직한 착용 후기를 작성하고 관리할 수 있습니다.
              </p>
            </div>
            <button
              onClick={() => {
                setEditingReview(null);
                setReviewContent('');
                setShowReviewForm((prev) => !prev);
              }}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-[#111111] hover:bg-black text-white rounded-full text-xs font-medium cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{showReviewForm ? '작성 닫기' : '새 후기 작성하기'}</span>
            </button>
          </div>

          {showReviewForm && (
            <form
              onSubmit={handleReviewSubmit}
              className="border border-[#111111] bg-white p-6 space-y-4 text-xs"
            >
              <h3 className="text-sm font-semibold text-[#111111]">
                {editingReview ? '작성한 후기 수정' : '새 상품 후기 작성'}
              </h3>

              {!editingReview && (
                <div>
                  <label className="block text-[#707072] mb-1.5 font-medium">상품 선택</label>
                  <select
                    value={reviewProductId}
                    onChange={(e) => {
                      const prod = allProducts.find((p) => p.id === e.target.value);
                      setReviewProductId(e.target.value);
                      if (prod) {
                        setReviewOption(
                          `${prod.colors[0] || 'Default'} / ${prod.sizes[0] || 'FREE'}`
                        );
                      }
                    }}
                    className="w-full border border-[#cacacb] bg-[#f5f5f5] px-4 py-2.5 rounded-full focus:outline-none focus:border-[#111111]"
                  >
                    {allProducts.slice(0, 60).map((p) => (
                      <option key={p.id} value={p.id}>
                        [{p.brand}] {p.name} (₩{p.price.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#707072] mb-1.5 font-medium">별점</label>
                  <select
                    value={reviewRating}
                    onChange={(e) => setReviewRating(Number(e.target.value))}
                    className="w-full border border-[#cacacb] bg-[#f5f5f5] px-4 py-2.5 rounded-full"
                  >
                    <option value={5}>★★★★★ 5점 (아주 만족)</option>
                    <option value={4}>★★★★☆ 4점 (만족)</option>
                    <option value={3}>★★★☆☆ 3점 (보통)</option>
                    <option value={2}>★★☆☆☆ 2점 (아쉬움)</option>
                    <option value={1}>★☆☆☆☆ 1점 (불만족)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#707072] mb-1.5 font-medium">구매 옵션</label>
                  <input
                    type="text"
                    maxLength={80}
                    value={reviewOption}
                    onChange={(e) => setReviewOption(e.target.value)}
                    placeholder="예: Black / M"
                    className="w-full border border-[#cacacb] px-4 py-2.5 rounded-full"
                  />
                </div>
                <div>
                  <label className="block text-[#707072] mb-1.5 font-medium">체형 정보</label>
                  <input
                    type="text"
                    maxLength={50}
                    value={reviewSpecs}
                    onChange={(e) => setReviewSpecs(e.target.value)}
                    placeholder="예: 172cm · 65kg"
                    className="w-full border border-[#cacacb] px-4 py-2.5 rounded-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">
                  후기 내용 (최소 5자 이상)
                </label>
                <textarea
                  rows={4}
                  required
                  minLength={5}
                  maxLength={1000}
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  placeholder="핏, 소재감, 착용 소감을 자세히 들려주세요."
                  className="w-full border border-[#cacacb] p-3.5 focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowReviewForm(false);
                    setEditingReview(null);
                  }}
                  className="px-4 py-2 border border-[#cacacb] rounded-full cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={reviewSubmitting}
                  className="px-6 py-2 bg-[#111111] hover:bg-black text-white rounded-full font-medium cursor-pointer disabled:opacity-50"
                >
                  {reviewSubmitting
                    ? '저장 중...'
                    : editingReview
                    ? '수정 완료'
                    : '후기 등록'}
                </button>
              </div>
            </form>
          )}

          {reviews.length === 0 ? (
            <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-12 text-center space-y-2">
              <Star className="w-10 h-10 text-[#cacacb] mx-auto" />
              <p className="text-sm font-medium text-[#111111]">작성한 상품 후기가 없습니다.</p>
              <p className="text-xs text-[#707072]">
                상단의 &apos;새 후기 작성하기&apos; 버튼을 눌러 첫 후기를 남겨보세요.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((rev) => {
                const catalogProd = allProducts.find((p) => p.id === rev.productId);
                return (
                  <div key={rev.id} className="border border-[#e5e5e5] bg-white p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#e5e5e5]">
                      <div
                        onClick={() => catalogProd && onSelectProduct(catalogProd)}
                        className={`flex items-center space-x-3 ${
                          catalogProd ? 'cursor-pointer' : ''
                        }`}
                      >
                        {rev.productImage && (
                          <img
                            src={rev.productImage}
                            alt={rev.productName}
                            referrerPolicy="no-referrer"
                            className="w-12 h-14 object-cover bg-[#f5f5f5] border border-[#e5e5e5]"
                          />
                        )}
                        <div>
                          <span className="text-[10px] text-[#707072] uppercase font-medium">
                            {rev.productBrand}
                          </span>
                          <p className="text-xs font-semibold text-[#111111]">{rev.productName}</p>
                          <p className="text-[11px] text-[#707072]">
                            옵션: {rev.selectedOption} · {rev.userSpecs}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center text-[#111111]">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#111111]" />
                          ))}
                        </div>
                        <span className="text-xs font-mono text-[#707072]">
                          {formatDate(rev.createdAt)}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#111111] leading-relaxed whitespace-pre-line">
                      {rev.content}
                    </p>

                    <div className="flex justify-end space-x-2 pt-1">
                      <button
                        onClick={() => {
                          setEditingReview(rev);
                          setReviewProductId(rev.productId);
                          setReviewOption(rev.selectedOption);
                          setReviewSpecs(rev.userSpecs);
                          setReviewRating(rev.rating);
                          setReviewContent(rev.content);
                          setShowReviewForm(true);
                        }}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 border border-[#cacacb] rounded-full text-xs hover:border-[#111111] cursor-pointer"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>수정</span>
                      </button>
                      <button
                        onClick={async () => {
                          await deleteReview(rev.id);
                          onShowToast('후기가 삭제되었습니다.', 'info');
                        }}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 border border-[#cacacb] text-[#d30005] rounded-full text-xs hover:border-[#d30005] cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>삭제</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* TAB 5: 고객센터 */}
      {activeTab === 'cs' && (
        <section className="space-y-8">
          {/* Contact Card */}
          <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <span className="text-[11px] text-[#707072] font-semibold uppercase tracking-wider">
                CUSTOMER CENTER
              </span>
              <p className="text-2xl font-mono font-bold text-[#111111] mt-1">111-11-11111</p>
              <p className="text-xs text-[#707072] mt-1">평일 09:00 - 18:00 (점심 12:00 - 13:00)</p>
            </div>
            <div>
              <span className="text-[11px] text-[#707072] font-semibold uppercase tracking-wider">
                ADDRESS / MANAGER
              </span>
              <p className="text-sm font-medium text-[#111111] mt-1">한신대학교</p>
              <p className="text-xs text-[#707072] mt-1">책임자: 이재영</p>
            </div>
            <div>
              <span className="text-[11px] text-[#707072] font-semibold uppercase tracking-wider">
                1:1 INQUIRY STATUS
              </span>
              <p className="text-sm font-medium text-[#111111] mt-1">
                접수된 문의 {inquiries.length}건
              </p>
              <p className="text-xs text-[#707072] mt-1">24시간 온라인 문의 접수 가능</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 1:1 Inquiry Form */}
            <form
              onSubmit={handleInquirySubmit}
              className="lg:col-span-5 border border-[#e5e5e5] bg-white p-6 space-y-4 text-xs h-fit"
            >
              <h3 className="text-sm font-semibold text-[#111111]">
                {editingInquiryId ? '1:1 문의 수정' : '1:1 문의하기'}
              </h3>

              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">문의 유형</label>
                <select
                  value={inqCategory}
                  onChange={(e) => setInqCategory(e.target.value as InquiryCategory)}
                  className="w-full border border-[#cacacb] bg-[#f5f5f5] px-4 py-2.5 rounded-full"
                >
                  <option value="배송">배송</option>
                  <option value="주문/결제">주문/결제</option>
                  <option value="취소/반품/교환">취소/반품/교환</option>
                  <option value="상품문의">상품문의</option>
                  <option value="쿠폰/회원">쿠폰/회원</option>
                </select>
              </div>

              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">
                  관련 주문번호 (선택)
                </label>
                <select
                  value={inqOrderNumber}
                  onChange={(e) => setInqOrderNumber(e.target.value)}
                  className="w-full border border-[#cacacb] bg-[#f5f5f5] px-4 py-2.5 rounded-full font-mono"
                >
                  <option value="">선택 안 함</option>
                  {orders.map((o) => (
                    <option key={o.id} value={o.orderNumber}>
                      {o.orderNumber} (₩{o.finalPrice.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">제목 *</label>
                <input
                  type="text"
                  required
                  minLength={2}
                  maxLength={120}
                  value={inqTitle}
                  onChange={(e) => setInqTitle(e.target.value)}
                  placeholder="문의 제목을 입력하세요"
                  className="w-full border border-[#cacacb] px-4 py-2.5 rounded-full focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">문의 내용 *</label>
                <textarea
                  rows={5}
                  required
                  minLength={5}
                  maxLength={2000}
                  value={inqContent}
                  onChange={(e) => setInqContent(e.target.value)}
                  placeholder="자세한 문의 내용을 작성해 주세요."
                  className="w-full border border-[#cacacb] p-3.5 focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div className="flex space-x-2">
                {editingInquiryId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingInquiryId(null);
                      setInqTitle('');
                      setInqContent('');
                      setInqOrderNumber('');
                    }}
                    className="px-4 py-3 border border-[#cacacb] rounded-full cursor-pointer"
                  >
                    취소
                  </button>
                )}
                <button
                  type="submit"
                  disabled={inqSubmitting}
                  className="flex-1 py-3 bg-[#111111] hover:bg-black text-white rounded-full font-semibold cursor-pointer disabled:opacity-50"
                >
                  {inqSubmitting
                    ? '접수 중...'
                    : editingInquiryId
                    ? '문의 수정 저장'
                    : '1:1 문의 접수하기'}
                </button>
              </div>
            </form>

            {/* Inquiry List + FAQ */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[#111111]">나의 1:1 문의 내역</h3>
                {inquiries.length === 0 ? (
                  <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-8 text-center text-xs text-[#707072]">
                    접수된 1:1 문의 내역이 없습니다.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {inquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className="border border-[#e5e5e5] bg-white p-5 space-y-2.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center space-x-2">
                            <span
                              className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium ${
                                inq.status === '답변완료'
                                  ? 'bg-[#007d48] text-white'
                                  : 'bg-[#111111] text-white'
                              }`}
                            >
                              {inq.status}
                            </span>
                            <span className="text-[11px] bg-[#f5f5f5] px-2.5 py-0.5 rounded-full text-[#111111]">
                              {inq.category}
                            </span>
                            {inq.orderNumber && (
                              <span className="text-[11px] font-mono text-[#707072]">
                                {inq.orderNumber}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] font-mono text-[#707072]">
                            {formatDate(inq.createdAt)}
                          </span>
                        </div>
                        <h4 className="text-xs font-semibold text-[#111111]">{inq.title}</h4>
                        <p className="text-xs text-[#707072] leading-relaxed whitespace-pre-line">
                          {inq.content}
                        </p>
                        {inq.reply && (
                          <div className="bg-[#f5f5f5] p-3.5 text-xs border-l-2 border-[#111111]">
                            <span className="font-semibold text-[#111111] block mb-1">
                              고객센터 답변
                            </span>
                            <p className="text-[#707072]">{inq.reply}</p>
                          </div>
                        )}
                        <div className="flex justify-end space-x-2 pt-1">
                          {inq.status === '접수완료' && (
                            <button
                              onClick={() => {
                                setEditingInquiryId(inq.id);
                                setInqCategory(inq.category);
                                setInqOrderNumber(inq.orderNumber);
                                setInqTitle(inq.title);
                                setInqContent(inq.content);
                              }}
                              className="px-3 py-1 border border-[#cacacb] rounded-full text-[11px] hover:border-[#111111] cursor-pointer"
                            >
                              수정
                            </button>
                          )}
                          <button
                            onClick={async () => {
                              await deleteInquiry(inq.id);
                              onShowToast('문의 내역이 삭제되었습니다.', 'info');
                            }}
                            className="px-3 py-1 border border-[#cacacb] text-[#d30005] rounded-full text-[11px] hover:border-[#d30005] cursor-pointer"
                          >
                            삭제
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[#111111]">자주 묻는 질문 (FAQ)</h3>
                <div className="border-t border-[#e5e5e5]">
                  {FAQ_ITEMS.map((faq, idx) => (
                    <div key={idx} className="border-b border-[#e5e5e5]">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full py-3.5 flex items-center justify-between text-left text-xs font-medium text-[#111111] cursor-pointer"
                      >
                        <span>Q. {faq.q}</span>
                        {openFaqIndex === idx ? (
                          <ChevronUp className="w-4 h-4 text-[#707072]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#707072]" />
                        )}
                      </button>
                      {openFaqIndex === idx && (
                        <div className="pb-3.5 text-xs text-[#707072] leading-relaxed bg-[#f5f5f5]/60 p-3.5 mb-2">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 6: 회원정보 */}
      {activeTab === 'profile' && (
        <section className="max-w-2xl space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-[#111111]">회원정보 관리</h2>
            <p className="text-xs text-[#707072] mt-0.5">
              저장된 배송지와 연락처는 주문/결제 시 자동으로 적용됩니다.
            </p>
          </div>

          <form
            onSubmit={handleSaveProfile}
            className="border border-[#e5e5e5] bg-white p-6 space-y-4 text-xs"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">이메일 (로그인 계정)</label>
                <input
                  type="text"
                  disabled
                  value={profile?.email || user?.email || 'member@monoday.kr'}
                  className="w-full border border-[#e5e5e5] bg-[#f5f5f5] text-[#707072] rounded-full px-4 py-2.5 font-mono"
                />
              </div>
              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">이름</label>
                <input
                  type="text"
                  required
                  maxLength={50}
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full border border-[#cacacb] rounded-full px-4 py-2.5 focus:outline-none focus:border-[#111111]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">연락처</label>
                <input
                  type="text"
                  required
                  maxLength={30}
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  className="w-full border border-[#cacacb] rounded-full px-4 py-2.5 font-mono focus:outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">체형 정보</label>
                <input
                  type="text"
                  maxLength={50}
                  value={editBodySpecs}
                  onChange={(e) => setEditBodySpecs(e.target.value)}
                  className="w-full border border-[#cacacb] rounded-full px-4 py-2.5 focus:outline-none focus:border-[#111111]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#707072] mb-1.5 font-medium">기본 배송지</label>
              <input
                type="text"
                required
                maxLength={200}
                value={editAddress}
                onChange={(e) => setEditAddress(e.target.value)}
                className="w-full border border-[#cacacb] rounded-full px-4 py-2.5 focus:outline-none focus:border-[#111111]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={handleLogout}
                className="px-4 py-2.5 border border-[#cacacb] text-[#707072] hover:text-[#111111] rounded-full cursor-pointer"
              >
                로그아웃
              </button>
              <button
                type="submit"
                disabled={profileSaving}
                className="px-6 py-2.5 bg-[#111111] hover:bg-black text-white rounded-full font-semibold flex items-center space-x-1.5 cursor-pointer disabled:opacity-50"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{profileSaving ? '저장 중...' : '변경사항 저장'}</span>
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Cancel / Return Reason Modal */}
      {cancelReturnTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-md border border-[#cacacb] p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-3">
              <h3 className="text-sm font-semibold text-[#111111]">
                {cancelReturnTarget.type === 'cancel' ? '주문 취소 신청' : '반품 신청'}
              </h3>
              <button
                onClick={() => setCancelReturnTarget(null)}
                className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCancelReturnSubmit} className="space-y-4 text-xs">
              <p className="text-[#707072]">
                주문번호{' '}
                <span className="font-mono text-[#111111] font-medium">
                  {cancelReturnTarget.order.orderNumber}
                </span>{' '}
                (환불 예정 금액 ₩{cancelReturnTarget.order.finalPrice.toLocaleString()})
              </p>

              <div>
                <label className="block text-[#707072] mb-1.5 font-medium">사유 선택</label>
                <select
                  value={cancelReturnReason}
                  onChange={(e) => setCancelReturnReason(e.target.value)}
                  className="w-full border border-[#cacacb] bg-[#f5f5f5] px-4 py-2.5 rounded-full"
                >
                  <option value="단순 변심">단순 변심</option>
                  <option value="사이즈가 맞지 않음">사이즈가 맞지 않음</option>
                  <option value="색상/옵션 변경 희망">색상/옵션 변경 희망</option>
                  <option value="배송 지연">배송 지연</option>
                  <option value="상품 불량 또는 오배송">상품 불량 또는 오배송</option>
                  <option value="직접 입력">직접 입력</option>
                </select>
              </div>

              {cancelReturnReason === '직접 입력' && (
                <div>
                  <label className="block text-[#707072] mb-1.5 font-medium">상세 사유</label>
                  <textarea
                    rows={3}
                    required
                    maxLength={300}
                    value={cancelReturnCustomReason}
                    onChange={(e) => setCancelReturnCustomReason(e.target.value)}
                    placeholder="상세 사유를 입력해 주세요."
                    className="w-full border border-[#cacacb] p-3 focus:outline-none focus:border-[#111111]"
                  />
                </div>
              )}

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCancelReturnTarget(null)}
                  className="px-4 py-2 border border-[#cacacb] rounded-full cursor-pointer"
                >
                  닫기
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#d30005] hover:opacity-90 text-white rounded-full font-medium cursor-pointer"
                >
                  {cancelReturnTarget.type === 'cancel' ? '취소 접수' : '반품 접수'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Admin Mode Access inside MY Page */}
      <section className="border border-[#e5e5e5] bg-[#f5f5f5] p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#111111]">
              MONO:DAY 관리자 모드 (ADMIN)
            </p>
            <p className="text-[11px] text-[#707072]">
              상품 등록·삭제 등 스토어 카탈로그 관리 기능에 접근할 수 있습니다.
            </p>
          </div>
        </div>

        {isAdmin ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center space-x-1.5 bg-white text-[#111111] border border-[#cacacb] px-3 py-1.5 rounded-full text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#007d48]" />
              <span>Admin Mode</span>
            </span>
            {onOpenAddProduct && (
              <button
                onClick={onOpenAddProduct}
                className="inline-flex items-center space-x-1.5 bg-[#111111] hover:bg-black text-white px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>상품 추가</span>
              </button>
            )}
            {onAdminLogout && (
              <button
                onClick={onAdminLogout}
                className="inline-flex items-center space-x-1 bg-white hover:bg-[#e5e5e5] text-[#111111] border border-[#cacacb] px-3.5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5 text-[#707072]" />
                <span>관리자 로그아웃</span>
              </button>
            )}
          </div>
        ) : (
          onOpenAdminLogin && (
            <button
              onClick={onOpenAdminLogin}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-medium transition-all cursor-pointer"
              title="관리자 로그인 (비밀번호: 1245 또는 admin123)"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>관리자 로그인 (ADMIN)</span>
            </button>
          )
        )}
      </section>
    </div>
  );
};
