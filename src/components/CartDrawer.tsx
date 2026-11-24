import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, ArrowRight, Tag, Check } from 'lucide-react';
import { Product } from '../data/products';
import { PROMO_CATALOG, PromoCodeKey } from '../types/mypage';

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
  onOpenCheckout: (appliedDiscountPercent: number) => void;
  appliedPromoCode: string | null;
  onApplyPromoCode: (code: string) => boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onOpenCheckout,
  appliedPromoCode,
  onApplyPromoCode
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  const rawSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  const promoTemplate = appliedPromoCode
    ? PROMO_CATALOG[appliedPromoCode as PromoCodeKey]
    : undefined;
  const discountAmount = promoTemplate
    ? promoTemplate.discountType === 'percent'
      ? Math.round(rawSubtotal * (promoTemplate.discountValue / 100))
      : Math.min(rawSubtotal, promoTemplate.discountValue)
    : appliedPromoCode
    ? Math.round(rawSubtotal * 0.15)
    : 0;
  const discountLabel = promoTemplate
    ? promoTemplate.discountType === 'percent'
      ? `${promoTemplate.discountValue}% 추가 할인`
      : `₩${promoTemplate.discountValue.toLocaleString()} 할인`
    : '15% 추가 할인';
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const ok = onApplyPromoCode(promoInput.trim().toUpperCase());
    if (ok) {
      setPromoError('');
      setPromoInput('');
    } else {
      setPromoError('유효하지 않은 쿠폰 코드입니다.');
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
            {/* Promo Code Input (Nike pill input) */}
            <form onSubmit={handleApplyPromo} className="space-y-1">
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3.5 top-3 text-[#707072]" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="쿠폰 코드 입력 (예: MONODAY15)"
                    className="w-full bg-white border border-[#cacacb] rounded-full px-9 py-2 text-xs focus:outline-none focus:border-[#111111] uppercase font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#111111] hover:bg-black text-white text-xs px-4 py-2 rounded-full font-medium transition-colors cursor-pointer active:scale-95"
                >
                  적용
                </button>
              </div>
              {appliedPromoCode && (
                <p className="text-[11px] text-[#007d48] flex items-center space-x-1 font-medium pt-1">
                  <Check className="w-3 h-3" />
                  <span>쿠폰 '{appliedPromoCode}' 적용됨 ({discountLabel})</span>
                </p>
              )}
              {promoError && <p className="text-[11px] text-[#d30005] pt-1">{promoError}</p>}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#707072] pt-2 border-t border-[#e5e5e5]">
              <div className="flex justify-between">
                <span>상품 합계</span>
                <span className="tabular-nums font-medium text-[#111111]">₩{rawSubtotal.toLocaleString()}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#d30005]">
                  <span>쿠폰 할인 ({discountLabel})</span>
                  <span className="tabular-nums font-medium">-₩{discountAmount.toLocaleString()}</span>
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
              onClick={() => onOpenCheckout(promoTemplate?.discountType === 'percent' ? promoTemplate.discountValue : 15)}
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
