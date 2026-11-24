import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, ArrowRight, Gift, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '../data/products';
import { PROMO_CATALOG, PromoCodeKey } from '../types/mypage';
import { useAuth } from '../contexts/AuthContext';

export interface CartItem {
  id: string;
  product: Product;
  qty: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCheckout: () => void;
  appliedPromoCode: string | null;
  onSelectPromoCode: (code: string | null) => void;
  onShowToast?: (text: string, type?: 'info' | 'success' | 'heart' | 'bag') => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onOpenCheckout,
  appliedPromoCode,
  onSelectPromoCode,
  onShowToast
}) => {
  const { isAuthenticated, coupons, claimCoupon } = useAuth();
  const [showClaimableGifts, setShowClaimableGifts] = useState(false);

  const rawSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  const availableCoupons = isAuthenticated
    ? coupons.filter((c) => c.status === 'available')
    : [];
  const unclaimedKeys = isAuthenticated
    ? (Object.keys(PROMO_CATALOG) as PromoCodeKey[]).filter(
        (key) => !coupons.some((c) => c.code === key)
      )
    : [];

  const promoTemplate = appliedPromoCode
    ? PROMO_CATALOG[appliedPromoCode as PromoCodeKey]
    : undefined;
  const isPromoEligible = Boolean(
    promoTemplate && rawSubtotal >= promoTemplate.minOrderAmount
  );
  const discountAmount =
    isPromoEligible && promoTemplate
      ? promoTemplate.discountType === 'percent'
        ? Math.round(rawSubtotal * (promoTemplate.discountValue / 100))
        : Math.min(rawSubtotal, promoTemplate.discountValue)
      : 0;
  const discountLabel = promoTemplate
    ? promoTemplate.discountType === 'percent'
      ? `${promoTemplate.discountValue}%`
      : `₩${promoTemplate.discountValue.toLocaleString()}`
    : '';
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const handleToggleGiftCoupon = (code: PromoCodeKey, minOrderAmount: number) => {
    if (appliedPromoCode === code) {
      onSelectPromoCode(null);
      return;
    }
    if (rawSubtotal < minOrderAmount) {
      onShowToast?.(
        `₩${minOrderAmount.toLocaleString()} 이상 주문 시 사용할 수 있는 기프트 쿠폰입니다.`,
        'info'
      );
      return;
    }
    onSelectPromoCode(code);
  };

  const handleClaimInsideCart = async (key: PromoCodeKey) => {
    const res = await claimCoupon(key);
    if (res.ok) {
      const tpl = PROMO_CATALOG[key];
      onShowToast?.(`'${tpl.title}' 기프트 쿠폰을 받았습니다!`, 'success');
      if (rawSubtotal >= tpl.minOrderAmount) {
        onSelectPromoCode(key);
      }
    } else {
      onShowToast?.(res.message, 'info');
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-out Drawer (Nike flat drawer with white canvas & pill CTA) */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 border-l border-[#cacacb] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#e5e5e5] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-[#111111]" />
            <h3 className="font-semibold text-base uppercase tracking-normal text-[#111111]">
              Bag (장바구니)
            </h3>
            <span className="text-xs text-[#707072] font-mono">({totalItemsCount})</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-[#707072] space-y-3">
              <ShoppingBag className="w-12 h-12 stroke-[1.2] text-[#cacacb]" />
              <p className="text-sm font-normal">장바구니가 비어있습니다.</p>
              <button
                onClick={onClose}
                className="mt-2 text-xs text-[#111111] underline underline-offset-4 font-medium cursor-pointer"
              >
                추천 상품 구경하러 가기
              </button>
            </div>
          ) : (
            cartItems.map((cItem) => {
              const { product } = cItem;
              const itemTotal = product.price * cItem.qty;

              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3.5 bg-[#f5f5f5] rounded-none border border-[#e5e5e5]"
                >
                  <div className="flex items-center space-x-3.5 overflow-hidden">
                    <img
                      src={product.img1}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-20 object-cover bg-white shrink-0 rounded-none border border-[#e5e5e5]"
                    />
                    <div className="min-w-0 pr-2">
                      <span className="text-[10px] font-medium text-[#707072] uppercase block truncate">
                        {product.brand}
                      </span>
                      <h4 className="text-xs font-medium text-[#111111] truncate mt-0.5" title={product.name}>
                        {product.name}
                      </h4>
                      {(cItem.selectedColor || cItem.selectedSize) && (
                        <p className="text-[10px] text-[#707072] mt-0.5">
                          {cItem.selectedColor && `Color: ${cItem.selectedColor}`}
                          {cItem.selectedColor && cItem.selectedSize && ' · '}
                          {cItem.selectedSize && `Size: ${cItem.selectedSize}`}
                        </p>
                      )}
                      <p className="text-xs font-medium text-[#111111] mt-1 tabular-nums">
                        ₩{itemTotal.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between space-y-3 shrink-0">
                    <button
                      onClick={() => onRemoveItem(product.id)}
                      className="text-[#707072] hover:text-[#111111] p-1 transition-colors cursor-pointer"
                      title="삭제"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Quantity Stepper (Nike clean stepper) */}
                    <div className="flex items-center space-x-2 border border-[#cacacb] bg-white rounded-full px-2.5 py-1 text-xs">
                      <button
                        onClick={() => onUpdateQty(product.id, -1)}
                        className="text-[#707072] hover:text-[#111111] transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono font-medium w-4 text-center tabular-nums text-[#111111]">
                        {cItem.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(product.id, 1)}
                        className="text-[#707072] hover:text-[#111111] transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer / Summary / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#e5e5e5] bg-[#f5f5f5] space-y-4">
            {/* Gift Coupon Selector (Select & Claim) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#111111] flex items-center space-x-1.5">
                  <Gift className="w-3.5 h-3.5 text-[#d30005]" />
                  <span>기프트 쿠폰 선택 ({availableCoupons.length})</span>
                </span>
                {unclaimedKeys.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowClaimableGifts((prev) => !prev)}
                    className="text-[11px] font-medium text-[#111111] hover:underline inline-flex items-center space-x-1 cursor-pointer"
                  >
                    <span>기프트 더 받기 (+{unclaimedKeys.length})</span>
                    {showClaimableGifts ? (
                      <ChevronUp className="w-3 h-3" />
                    ) : (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </button>
                )}
              </div>

              {availableCoupons.length === 0 ? (
                <div className="bg-white border border-[#e5e5e5] px-3 py-2.5 text-[11px] text-[#707072]">
                  보유 중인 사용 가능 기프트 쿠폰이 없습니다.
                </div>
              ) : (
                <div className="space-y-1.5 max-h-32 overflow-y-auto pr-0.5">
                  {availableCoupons.map((coupon) => {
                    const selected = appliedPromoCode === coupon.code;
                    const eligible = rawSubtotal >= coupon.minOrderAmount;
                    return (
                      <button
                        key={coupon.id}
                        type="button"
                        onClick={() => handleToggleGiftCoupon(coupon.code, coupon.minOrderAmount)}
                        className={`w-full text-left px-3 py-2 border transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                          selected
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : eligible
                            ? 'bg-white text-[#111111] border-[#cacacb] hover:border-[#111111]'
                            : 'bg-white/60 text-[#707072] border-[#e5e5e5]'
                        }`}
                      >
                        <div className="min-w-0">
                          <p className="text-[11px] font-medium truncate">{coupon.title}</p>
                          <p
                            className={`text-[10px] ${
                              selected ? 'text-[#cacacb]' : 'text-[#707072]'
                            }`}
                          >
                            ₩{coupon.minOrderAmount.toLocaleString()} 이상 주문 시
                            {!eligible && ' (금액 미달)'}
                          </p>
                        </div>
                        <span
                          className={`text-[11px] font-semibold shrink-0 flex items-center space-x-1 ${
                            selected ? 'text-white' : 'text-[#d30005]'
                          }`}
                        >
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

              {showClaimableGifts && unclaimedKeys.length > 0 && (
                <div className="pt-1.5 space-y-1.5 border-t border-[#e5e5e5]">
                  <span className="text-[10px] font-medium text-[#707072] uppercase tracking-wider block">
                    받을 수 있는 기프트 쿠폰
                  </span>
                  <div className="space-y-1.5 max-h-28 overflow-y-auto pr-0.5">
                    {unclaimedKeys.map((key) => {
                      const tpl = PROMO_CATALOG[key];
                      return (
                        <div
                          key={key}
                          className="bg-white border border-[#e5e5e5] px-3 py-2 flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <p className="text-[11px] font-medium text-[#111111] truncate">
                              {tpl.title}
                            </p>
                            <p className="text-[10px] text-[#707072]">
                              {tpl.discountType === 'percent'
                                ? `${tpl.discountValue}% 할인`
                                : `₩${tpl.discountValue.toLocaleString()} 할인`}{' '}
                              · ₩{tpl.minOrderAmount.toLocaleString()} 이상
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => void handleClaimInsideCart(key)}
                            className="px-2.5 py-1 bg-[#111111] hover:bg-black text-white rounded-full text-[10px] font-medium shrink-0 cursor-pointer"
                          >
                            선물 받기
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {promoTemplate && !isPromoEligible && (
                <p className="text-[11px] text-[#d30005]">
                  선택하신 기프트 쿠폰은 ₩{promoTemplate.minOrderAmount.toLocaleString()} 이상 주문 시 적용됩니다.
                </p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#707072] pt-2 border-t border-[#e5e5e5]">
              <div className="flex justify-between">
                <span>상품 합계</span>
                <span className="tabular-nums font-medium text-[#111111]">₩{rawSubtotal.toLocaleString()}</span>
              </div>
              {discountAmount > 0 && promoTemplate && (
                <div className="flex justify-between text-[#d30005] gap-2">
                  <span className="truncate">기프트 할인 ({promoTemplate.title} · {discountLabel})</span>
                  <span className="tabular-nums font-medium shrink-0">-₩{discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>배송비</span>
                <span className="font-medium text-[#111111]">무료 배송</span>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#111111] pt-2 border-t border-[#e5e5e5]">
                <span>총 결제 예정 금액</span>
                <span className="text-xl tabular-nums font-medium">₩{finalTotal.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#707072] font-normal">
              MONO:DAY 멤버십 회원 전 상품 무료배송 혜택 적용 대상입니다.
            </p>

            {/* Order Now Button (Nike button-primary: black pill 48px height) */}
            <button
              onClick={onOpenCheckout}
              className="w-full py-3.5 bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase hover:bg-black transition-all flex items-center justify-center space-x-2 cursor-pointer rounded-full active:scale-95 shadow-sm"
            >
              <span>ORDER NOW (주문하기)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
