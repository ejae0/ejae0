export type MyPageTabType = 'orders' | 'cancellations' | 'coupons' | 'reviews' | 'cs' | 'profile';

export type OrderStatus =
  | 'paid'
  | 'preparing'
  | 'shipped'
  | 'delivered'
  | 'cancel_requested'
  | 'cancelled'
  | 'return_requested'
  | 'returned';

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  bodySpecs: string;
  membershipTier: 'WELCOME' | 'SILVER' | 'GOLD' | 'BLACK';
  points: number;
  agreedTerms: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export type PromoCodeKey = 'WELCOME15' | 'MONODAY15' | 'MATINKIM15' | 'SPRING10' | 'FIRST5000';

export interface UserCoupon {
  id: string;
  userId: string;
  code: PromoCodeKey;
  title: string;
  description: string;
  discountType: 'percent' | 'fixed';
  discountValue: number;
  minOrderAmount: number;
  status: 'available' | 'used' | 'expired';
  expiresAt: string;
  usedOrderId: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface OrderItemSnapshot {
  productId: string;
  productName: string;
  brand: string;
  price: number;
  qty: number;
  selectedColor: string;
  selectedSize: string;
  imageUrl: string;
}

export interface UserOrder {
  id: string;
  orderNumber: string;
  userId: string;
  recipientName: string;
  recipientPhone: string;
  shippingAddress: string;
  deliveryNote: string;
  paymentMethod: 'card' | 'npay' | 'kpay' | 'bank';
  couponCode: string;
  rawTotal: number;
  discountAmount: number;
  finalPrice: number;
  status: OrderStatus;
  cancelReturnType: '' | 'cancel' | 'return';
  cancelReturnReason: string;
  items: OrderItemSnapshot[];
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface UserReview {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  productBrand: string;
  productImage: string;
  orderId: string;
  selectedOption: string;
  userSpecs: string;
  rating: number;
  content: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export type InquiryCategory = '배송' | '주문/결제' | '취소/반품/교환' | '상품문의' | '쿠폰/회원';

export interface CustomerInquiry {
  id: string;
  userId: string;
  category: InquiryCategory;
  orderNumber: string;
  title: string;
  content: string;
  status: '접수완료' | '답변완료';
  reply: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface PromoTemplate {
  code: PromoCodeKey;
  title: string;
  description: string;
  discountType: 'percent' | 'fixed';
  discountValue: number;
  minOrderAmount: number;
  expiresAt: string;
}

export const PROMO_CATALOG: Record<PromoCodeKey, PromoTemplate> = {
  WELCOME15: {
    code: 'WELCOME15',
    title: '신규 가입 15% 웰컴 쿠폰',
    description: '전 카테고리 상품 적용 가능 (최대 50,000원 할인)',
    discountType: 'percent',
    discountValue: 15,
    minOrderAmount: 30000,
    expiresAt: '2026-12-31',
  },
  MONODAY15: {
    code: 'MONODAY15',
    title: '26FW 시즌 오픈 15% 스페셜 쿠폰',
    description: 'MONO:DAY 26FW 에디토리얼 컬렉션 전용 할인',
    discountType: 'percent',
    discountValue: 15,
    minOrderAmount: 50000,
    expiresAt: '2026-12-31',
  },
  MATINKIM15: {
    code: 'MATINKIM15',
    title: 'MATIN KIM 브랜드 PT 15% 단독 쿠폰',
    description: '마틴킴 프레젠테이션 이슈 기념 단독 할인',
    discountType: 'percent',
    discountValue: 15,
    minOrderAmount: 50000,
    expiresAt: '2026-12-31',
  },
  SPRING10: {
    code: 'SPRING10',
    title: '스프링 데일리 10% 추가 할인 쿠폰',
    description: '상시 사용 가능한 전 상품 10% 장바구니 쿠폰',
    discountType: 'percent',
    discountValue: 10,
    minOrderAmount: 20000,
    expiresAt: '2026-12-31',
  },
  FIRST5000: {
    code: 'FIRST5000',
    title: '첫 구매 응원 5,000원 정액 쿠폰',
    description: '3만원 이상 구매 시 즉시 5,000원 할인',
    discountType: 'fixed',
    discountValue: 5000,
    minOrderAmount: 30000,
    expiresAt: '2026-12-31',
  },
};
