import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Gift, Check } from 'lucide-react';
import { CartItem } from './CartDrawer';
import { useAuth } from '../contexts/AuthContext';
import { PROMO_CATALOG, PromoCodeKey } from '../types/mypage';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  appliedPromoCode?: string | null;
  onSelectPromoCode?: (code: string | null) => void;
  onOrderSuccess: (orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  appliedPromoCode = null,
  onSelectPromoCode,
  onOrderSuccess
}) => {
  const { isAuthenticated, profile, coupons, createOrder } = useAuth();
  const [name, setName] = useState('이재영');
  const [phone, setPhone] = useState('111-11-11111');
  const [address, setAddress] = useState('한신대학교');
  const [deliveryNote, setDeliveryNote] = useState('부재 시 문 앞에 놓아주세요');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'npay' | 'kpay' | 'bank'>('card');
  const [selectedPromoCode, setSelectedPromoCode] = useState<string | null>(appliedPromoCode);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrderNumber, setConfirmedOrderNumber] = useState<string | null>(null);

  useEffect(() => {
    if (profile) {
      setName(profile.name || '이재영');
      setPhone(profile.phone || '111-11-11111');
      setAddress(profile.address || '한신대학교');
    }
  }, [profile, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setSelectedPromoCode(appliedPromoCode);
    }
  }, [appliedPromoCode, isOpen]);

  if (!isOpen) return null;

  const rawTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  const availableCoupons = isAuthenticated
    ? coupons.filter((c) => c.status === 'available')
    : [];
  const promoTemplate = selectedPromoCode
    ? PROMO_CATALOG[selectedPromoCode as PromoCodeKey]
    : undefined;
  const isPromoEligible = Boolean(
    promoTemplate && rawTotal >= promoTemplate.minOrderAmount
  );
  const discountAmount =
    isPromoEligible && promoTemplate
      ? promoTemplate.discountType === 'percent'
        ? Math.round(rawTotal * (promoTemplate.discountValue / 100))
        : Math.min(rawTotal, promoTemplate.discountValue)
      : 0;
  const finalPrice = Math.max(0, rawTotal - discountAmount);

  const handleChoosePromo = (code: string | null) => {
    setSelectedPromoCode(code);
    onSelectPromoCode?.(code);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderId = `MN-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(
      new Date().getDate()
    ).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      if (isAuthenticated && profile && cartItems.length > 0) {
        const activeCode = isPromoEligible && selectedPromoCode ? selectedPromoCode : '';
        const matchedCoupon = activeCode
          ? coupons.find(
              (c) => c.code === activeCode && c.status === 'available'
            )
          : undefined;
        await createOrder({
          orderNumber: orderId,
          recipientName: name,
          recipientPhone: phone,
          shippingAddress: address,
          deliveryNote,
          paymentMethod,
          couponCode: activeCode,
          couponId: matchedCoupon?.id,
          rawTotal,
          discountAmount,
          finalPrice,
          items: cartItems.map((c) => ({
            productId: c.product.id,
            productName: c.product.name,
            brand: c.product.brand,
            price: c.product.price,
            qty: c.qty,
            selectedColor: c.selectedColor || c.product.colors[0] || 'Default',
            selectedSize: c.selectedSize || c.product.sizes[0] || 'FREE',
            imageUrl: c.product.img1,
          })),
        });
      }
      setConfirmedOrderNumber(orderId);
      onOrderSuccess(orderId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinish = () => {
    setConfirmedOrderNumber(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0 -z-10" onClick={confirmedOrderNumber ? handleFinish : onClose} />

      <div className="bg-white w-full max-w-xl rounded-none shadow-2xl overflow-hidden relative my-auto border border-[#cacacb] max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#e5e5e5] flex items-center justify-between">
          <h3 className="font-semibold text-base text-[#111111] tracking-normal">
            {confirmedOrderNumber ? 'Order Confirmed' : 'Order & Payment (주문 / 결제)'}
          </h3>
          <button
            onClick={confirmedOrderNumber ? handleFinish : onClose}
            className="w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {confirmedOrderNumber ? (
            /* Order Confirmed Success Screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#f5f5f5] text-[#007d48] rounded-full flex items-center justify-center mx-auto border border-[#cacacb]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-medium text-[#111111]">
                주문이 성공적으로 접수되었습니다.
              </h4>
              <p className="text-xs text-[#707072] max-w-md mx-auto leading-relaxed">
                주문하신 상품은 정성껏 검수 후 안전하게 발송됩니다. 
                배송 시작 시 안내 메시지가 전송됩니다.
              </p>

              <div className="bg-[#f5f5f5] rounded-none p-5 border border-[#e5e5e5] text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#707072]">주문 번호</span>
                  <span className="font-mono font-medium text-[#111111]">{confirmedOrderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#707072]">받는 분</span>
                  <span className="font-medium text-[#111111]">{name} ({phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#707072]">배송 주소</span>
                  <span className="font-medium text-[#111111] truncate max-w-[260px]">{address}</span>
                </div>
                <div className="flex justify-between border-t border-[#e5e5e5] pt-2 font-medium text-sm">
                  <span>최종 결제 금액</span>
                  <span className="text-[#d30005]">₩{finalPrice.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="w-full py-4 bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase hover:bg-black transition-all rounded-full mt-4 cursor-pointer active:scale-95 shadow-sm"
              >
                쇼핑 계속하기
              </button>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              {/* Order Items Preview */}
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#707072] uppercase block mb-3">
                  ORDER SUMMARY ({cartItems.length} ITEMS)
                </span>
                <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                  {cartItems.map((cItem) => (
                    <div
                      key={cItem.product.id}
                      className="flex items-center justify-between text-xs py-2 border-b border-[#e5e5e5]"
                    >
                      <div className="flex items-center space-x-2.5 truncate pr-2">
                        <img
                          src={cItem.product.img1}
                          alt={cItem.product.name}
                          referrerPolicy="no-referrer"
                          className="w-8 h-10 object-cover bg-[#f5f5f5] shrink-0 border border-[#e5e5e5]"
                        />
                        <div className="truncate">
                          <p className="font-medium text-[#111111] truncate">{cItem.product.name}</p>
                          <p className="text-[11px] text-[#707072]">수량: {cItem.qty}개</p>
                        </div>
                      </div>
                      <span className="font-medium text-[#111111] shrink-0">
                        ₩{(cItem.product.price * cItem.qty).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Info */}
              <div className="space-y-3 border-t border-[#e5e5e5] pt-5">
                <span className="text-xs font-semibold tracking-wider text-[#707072] uppercase block">
                  SHIPPING ADDRESS (배송 정보)
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[#707072] mb-1">받는 분</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-[#cacacb] rounded-full px-4 py-2 focus:outline-none focus:border-[#111111]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#707072] mb-1">연락처</label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-[#cacacb] rounded-full px-4 py-2 focus:outline-none focus:border-[#111111] font-mono"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block text-[#707072] mb-1">배송 주소</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border border-[#cacacb] rounded-full px-4 py-2 focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div className="text-xs">
                  <label className="block text-[#707072] mb-1">배송 요청사항</label>
                  <input
                    type="text"
                    value={deliveryNote}
                    onChange={(e) => setDeliveryNote(e.target.value)}
                    className="w-full border border-[#cacacb] rounded-full px-4 py-2 focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>

              {/* Gift Coupon Selection */}
              <div className="space-y-2.5 border-t border-[#e5e5e5] pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-[#707072] uppercase flex items-center space-x-1.5">
                    <Gift className="w-3.5 h-3.5 text-[#d30005]" />
                    <span>GIFT COUPON (기프트 쿠폰 선택)</span>
                  </span>
                  {selectedPromoCode && (
                    <button
                      type="button"
                      onClick={() => handleChoosePromo(null)}
                      className="text-[11px] text-[#707072] hover:text-[#111111] underline cursor-pointer"
                    >
                      적용 해제
                    </button>
                  )}
                </div>

                {availableCoupons.length === 0 ? (
                  <p className="text-xs text-[#707072] bg-[#f5f5f5] border border-[#e5e5e5] px-4 py-3">
                    현재 보유 중인 사용 가능 기프트 쿠폰이 없습니다.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableCoupons.map((coupon) => {
                      const selected = selectedPromoCode === coupon.code;
                      const eligible = rawTotal >= coupon.minOrderAmount;
                      return (
                        <button
                          key={coupon.id}
                          type="button"
                          disabled={!eligible}
                          onClick={() =>
                            handleChoosePromo(selected ? null : coupon.code)
                          }
                          className={`text-left px-3.5 py-2.5 border transition-colors flex items-center justify-between gap-2 text-xs ${
                            selected
                              ? 'border-[#111111] bg-[#111111] text-white cursor-pointer'
                              : eligible
                              ? 'border-[#cacacb] bg-white text-[#111111] hover:border-[#111111] cursor-pointer'
                              : 'border-[#e5e5e5] bg-[#f5f5f5] text-[#707072] opacity-60 cursor-not-allowed'
                          }`}
                        >
                          <div className="min-w-0">
                            <p className="font-medium truncate">{coupon.title}</p>
                            <p
                              className={`text-[10px] ${
                                selected ? 'text-[#cacacb]' : 'text-[#707072]'
                              }`}
                            >
                              ₩{coupon.minOrderAmount.toLocaleString()} 이상
                              {!eligible && ' (조건 미달)'}
                            </p>
                          </div>
                          <span className="font-semibold shrink-0 flex items-center space-x-1">
                            {selected && <Check className="w-3 h-3" />}
                            <span>
                              {coupon.discountType === 'percent'
                                ? `${coupon.discountValue}%`
                                : `₩${coupon.discountValue.toLocaleString()}`}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Payment Methods (Nike pill selection) */}
              <div className="space-y-3 border-t border-[#e5e5e5] pt-5">
                <span className="text-xs font-semibold tracking-wider text-[#707072] uppercase block">
                  PAYMENT METHOD (결제 수단)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-full border text-center transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#111111] bg-[#111111] text-white font-medium'
                        : 'border-[#cacacb] bg-white text-[#111111] hover:border-[#111111]'
                    }`}
                  >
                    신용/체크카드
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('npay')}
                    className={`py-2.5 px-3 rounded-full border text-center transition-all cursor-pointer ${
                      paymentMethod === 'npay'
                        ? 'border-[#007d48] bg-[#007d48] text-white font-medium'
                        : 'border-[#cacacb] bg-white text-[#111111] hover:border-[#007d48]'
                    }`}
                  >
                    네이버페이
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('kpay')}
                    className={`py-2.5 px-3 rounded-full border text-center transition-all cursor-pointer ${
                      paymentMethod === 'kpay'
                        ? 'border-[#111111] bg-[#111111] text-white font-medium'
                        : 'border-[#cacacb] bg-white text-[#111111] hover:border-[#111111]'
                    }`}
                  >
                    카카오페이
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`py-2.5 px-3 rounded-full border text-center transition-all cursor-pointer ${
                      paymentMethod === 'bank'
                        ? 'border-[#111111] bg-[#111111] text-white font-medium'
                        : 'border-[#cacacb] bg-white text-[#111111] hover:border-[#111111]'
                    }`}
                  >
                    무통장입금
                  </button>
                </div>
              </div>

              {/* Price Calculation and Submit */}
              <div className="bg-[#f5f5f5] p-4 rounded-none border border-[#e5e5e5] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#707072]">주문 금액</span>
                  <span className="font-medium tabular-nums text-[#111111]">₩{rawTotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && promoTemplate && (
                  <div className="flex justify-between text-[#d30005] gap-2">
                    <span className="truncate">기프트 쿠폰 할인 ({promoTemplate.title})</span>
                    <span className="font-medium tabular-nums shrink-0">-₩{discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#707072]">배송비</span>
                  <span className="text-[#111111] font-medium">무료</span>
                </div>
                <div className="flex justify-between items-center text-sm font-semibold border-t border-[#e5e5e5] pt-2 text-[#111111]">
                  <span>최종 결제 금액</span>
                  <span className="text-xl tabular-nums font-medium">
                    ₩{finalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Submit Button (Nike button-primary: black pill 48px height) */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase hover:bg-black transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 rounded-full active:scale-95 shadow-sm"
              >
                <span>
                  {isSubmitting
                    ? '결제 처리 중...'
                    : `₩${finalPrice.toLocaleString()} 결제하기`}
                </span>
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
