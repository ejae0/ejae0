import React from 'react';
import { Heart, X, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  allProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  allProducts,
  onRemoveFromWishlist,
  onAddToCart,
  onSelectProduct
}) => {
  const wishedProducts = wishlistIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-out Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 border-l border-[#cacacb] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#e5e5e5] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-[#d30005] fill-[#d30005]" />
            <h3 className="font-semibold text-base uppercase tracking-normal text-[#111111]">
              Wishlist (좋아요)
            </h3>
            <span className="text-xs text-[#707072] font-mono">({wishedProducts.length})</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Item List Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishedProducts.length === 0 ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-[#707072] space-y-3">
              <Heart className="w-12 h-12 stroke-[1.2] text-[#cacacb]" />
              <p className="text-sm font-normal">위시리스트가 비어있습니다.</p>
              <button
                onClick={onClose}
                className="mt-2 text-xs text-[#111111] underline underline-offset-4 font-medium cursor-pointer"
              >
                마음에 드는 상품을 찾아보세요
              </button>
            </div>
          ) : (
            wishedProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 bg-[#f5f5f5] rounded-none border border-[#e5e5e5]"
              >
                {/* Product info */}
                <div
                  className="flex items-center space-x-3.5 cursor-pointer overflow-hidden"
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                >
                  <img
                    src={item.img1}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-20 object-cover rounded-none bg-white shrink-0 border border-[#e5e5e5]"
                  />
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] font-medium text-[#707072] uppercase block truncate">
                      {item.brand}
                    </span>
                    <h4 className="text-xs font-medium text-[#111111] truncate mt-0.5" title={item.name}>
                      {item.name}
                    </h4>
                    <p className="text-xs font-medium text-[#111111] mt-1 tabular-nums">
                      ₩{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-2 items-end shrink-0">
                  <button
                    onClick={() => onRemoveFromWishlist(item.id)}
                    className="text-[#707072] hover:text-[#d30005] text-xs p-1 transition-colors cursor-pointer"
                    title="위시리스트 삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="text-[10px] bg-[#111111] text-white px-3.5 py-1.5 rounded-full uppercase font-medium hover:bg-black transition-colors flex items-center space-x-1 cursor-pointer active:scale-95"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>+ Cart</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#e5e5e5] bg-[#f5f5f5]">
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase hover:bg-black transition-all cursor-pointer rounded-full active:scale-95 shadow-sm"
          >
            쇼핑 계속하기
          </button>
        </div>
      </aside>
    </>
  );
};
