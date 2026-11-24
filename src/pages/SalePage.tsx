import React, { useState } from 'react';
import { Percent, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product, SUBCATEGORIES } from '../data/products';

interface SalePageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  onQuickAddToCart: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  isAdmin?: boolean;
  onDeleteProduct?: (productId: string) => void;
}

export const SalePage: React.FC<SalePageProps> = ({
  products,
  onSelectProduct,
  onToggleWishlist,
  onQuickAddToCart,
  isWishlisted,
  isAdmin = false,
  onDeleteProduct
}) => {
  const [currentGender, setCurrentGender] = useState<'all' | 'women' | 'men'>('all');
  const [currentCategory, setCurrentCategory] = useState<string>('all');

  const subcategories = SUBCATEGORIES[currentGender] || SUBCATEGORIES.all;

  const saleProducts = products
    .filter((p) => {
      const isDiscounted = p.discount > 0;
      const matchGender = currentGender === 'all' || p.gender === currentGender;
      const matchCategory = currentCategory === 'all' || p.category === currentCategory;
      return isDiscounted && matchGender && matchCategory;
    })
    .sort((a, b) => b.discount - a.discount);

  const activeCategoryObj = subcategories.find((s) => s.id === currentCategory);

  const getColorHex = (colorName: string) => {
    const lower = colorName.toLowerCase();
    if (lower.includes('black')) return '#111111';
    if (lower.includes('white') || lower.includes('cream')) return '#f5f5f5';
    if (lower.includes('grey') || lower.includes('gray')) return '#9e9ea0';
    if (lower.includes('navy') || lower.includes('blue')) return '#1a2b49';
    if (lower.includes('beige') || lower.includes('camel')) return '#d4b996';
    if (lower.includes('olive') || lower.includes('green')) return '#4a5b43';
    if (lower.includes('brown')) return '#5a3d28';
    if (lower.includes('red') || lower.includes('burgundy')) return '#8b1e2a';
    if (lower.includes('pink')) return '#e098a8';
    return '#39393b';
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 sm:py-12">
      {/* Banner (Nike display campaign style) */}
      <div className="bg-[#111111] text-white p-8 sm:p-12 mb-10 border border-[#39393b] rounded-none">
        <div className="max-w-xl space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-[#d30005] text-xs font-semibold tracking-wider uppercase">
            <Percent className="w-3.5 h-3.5" />
            <span>SEASON SALE · UP TO 25% OFF</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-tight">
            시즌 오프 특별 할인전
          </h1>
          <p className="text-xs sm:text-sm text-[#cacacb] font-normal leading-relaxed pt-1">
            던스트, 마르디 메크르디, 아모멘토, 로우클래식 등 MONO:DAY 입점 브랜드의 단독 할인 혜택 상품을 합리적인 가격에 만나보세요. 할인율이 높은 순서로 정렬됩니다.
          </p>
        </div>
      </div>

      {/* Filter Module (Nike filter-chip style on #f5f5f5) */}
      <div className="bg-[#f5f5f5] p-6 border border-[#e5e5e5] mb-8 space-y-4 rounded-none">
        {/* Gender Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 border-b border-[#e5e5e5] pb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#707072] w-24 shrink-0">
            GENDER
          </span>
          <div className="flex space-x-2 sm:space-x-3">
            <button
              onClick={() => setCurrentGender('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer ${
                currentGender === 'all'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              ALL (전체)
            </button>
            <button
              onClick={() => setCurrentGender('women')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer ${
                currentGender === 'women'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              WOMEN (여성)
            </button>
            <button
              onClick={() => setCurrentGender('men')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer ${
                currentGender === 'men'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              MEN (남성)
            </button>
          </div>
        </div>

        {/* Subcategories */}
        <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#707072] w-24 shrink-0 pt-1.5">
            CATEGORY
          </span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs font-medium">
            {subcategories.map((sub) => {
              const isActive = sub.id === currentCategory;
              return (
                <button
                  key={sub.id}
                  onClick={() => setCurrentCategory(sub.id)}
                  className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white'
                      : 'bg-white text-[#111111] border border-[#cacacb] hover:border-[#111111]'
                  }`}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Info Status */}
      <div className="flex justify-between items-center mb-8 text-xs text-[#707072]">
        <div>
          <span>FILTER: </span>
          <span className="text-[#111111] font-semibold uppercase">
            SALE &gt; {currentGender.toUpperCase()} &gt; {activeCategoryObj?.label || '전체'}
          </span>
        </div>
        <div className="text-[#111111] font-medium">
          <span>{saleProducts.length} ITEMS ON SALE</span>
        </div>
      </div>

      {/* Products Grid (Nike product-card: 0px radius, 0 padding, full-bleed on #f5f5f5, zero shadow) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-12">
        {saleProducts.map((item) => {
          const isWished = isWishlisted(item.id);
          const formattedPrice = item.price.toLocaleString();
          const originalPrice = Math.round(item.price / (1 - item.discount / 100)).toLocaleString();

          return (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-white rounded-none p-0"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-square bg-[#f5f5f5] rounded-none overflow-hidden mb-3">
                <img
                  src={item.img1}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  onClick={() => onSelectProduct(item)}
                  className="w-full h-full object-cover cursor-pointer"
                />

                {/* Discount Tag (Nike badge-sale: text #d30005, clean tag) */}
                <div className="absolute top-2.5 left-2.5 bg-white border border-[#cacacb] text-[#d30005] text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                  <span>{item.discount}% off</span>
                </div>

                {/* Wishlist Button (Nike button-icon-circular) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(item.id);
                  }}
                  className="absolute top-2.5 right-2.5 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#111111] transition-all z-10 shadow-xs cursor-pointer"
                  aria-label="Wishlist"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWished ? 'text-[#d30005] fill-[#d30005]' : 'text-[#707072]'
                    }`}
                  />
                </button>

                {/* ADMIN ONLY: Delete Button */}
                {isAdmin && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm(`'${item.name}' 상품을 삭제하시겠습니까?`)) {
                        onDeleteProduct?.(item.id);
                      }
                    }}
                    className="absolute bottom-2.5 left-2.5 w-8 h-8 rounded-full bg-[#d30005] hover:bg-[#780700] text-white flex items-center justify-center transition-all z-20 shadow-sm cursor-pointer"
                    title="관리자 권한: 상품 삭제"
                    aria-label="상품 삭제"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Quick Add on Hover */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickAddToCart(item);
                  }}
                  className="absolute bottom-0 inset-x-0 bg-[#111111] text-white text-[11px] py-2.5 text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer uppercase tracking-wider flex items-center justify-center space-x-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-white" />
                  <span>+ Quick Add</span>
                </div>
              </div>

              {/* Product Info & Size details */}
              <div className="space-y-1 pt-1">
                {/* Swatch dots */}
                <div className="flex items-center space-x-1.5 pb-1">
                  {item.colors.slice(0, 4).map((c, cIdx) => (
                    <span
                      key={cIdx}
                      className="w-3 h-3 rounded-full border border-[#cacacb]"
                      style={{ backgroundColor: getColorHex(c) }}
                      title={c}
                    />
                  ))}
                </div>

                <div className="flex justify-between items-center text-xs font-medium text-[#707072] uppercase">
                  <span>{item.brand}</span>
                  <span className="text-[#707072] font-mono text-[11px]">★ {item.rating}</span>
                </div>

                <h3
                  onClick={() => onSelectProduct(item)}
                  className="text-sm font-medium text-[#111111] truncate cursor-pointer leading-tight"
                  title={item.name}
                >
                  {item.name}
                </h3>

                {/* Available Sizes list */}
                <div className="text-[11px] text-[#707072] truncate">
                  SIZE: {item.sizes.join(', ')}
                </div>

                {/* Price (Nike: sale price in #d30005, original in #707072 line-through) */}
                <div className="flex items-baseline space-x-2 pt-0.5">
                  <span className="text-sm font-medium text-[#d30005] tabular-nums">
                    ₩{formattedPrice}
                  </span>
                  <span className="text-xs text-[#707072] line-through tabular-nums">
                    ₩{originalPrice}
                  </span>
                  <span className="text-xs text-[#d30005] font-medium">
                    {item.discount}% off
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
