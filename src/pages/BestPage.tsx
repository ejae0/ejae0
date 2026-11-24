import React, { useState } from 'react';
import { Trophy, Flame, Heart, ShoppingBag, Crown, Trash2 } from 'lucide-react';
import { Product, SUBCATEGORIES } from '../data/products';

interface BestPageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  onQuickAddToCart: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  isAdmin?: boolean;
  onDeleteProduct?: (productId: string) => void;
}

export const BestPage: React.FC<BestPageProps> = ({
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

  const bestProducts = products
    .filter((p) => {
      const matchGender = currentGender === 'all' || p.gender === currentGender;
      const matchCategory = currentCategory === 'all' || p.category === currentCategory;
      return matchGender && matchCategory;
    })
    .sort((a, b) => a.bestRank - b.bestRank)
    .slice(0, 50);

  const top3 = [...products].sort((a, b) => a.bestRank - b.bestRank).slice(0, 3);
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
      {/* Page Header (Nike heading-xl) */}
      <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-medium text-[#707072] uppercase tracking-wider">
          <Trophy className="w-4 h-4 text-[#111111]" />
          <span>REALTIME BEST TOP 50</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#111111] tracking-tight">
          근 3일간 가장 많이 팔린 BEST 50
        </h1>
        <p className="text-xs sm:text-sm text-[#707072] font-normal leading-relaxed">
          MONO:DAY 고객들이 가장 많이 선택한 실시간 판매 랭킹 상위 50개 상품입니다. 매시간 실시간 주문 데이터를 집계하여 정렬됩니다.
        </p>
      </div>

      {/* Top 3 Podium Showcase Card (Nike neutral dark container) */}
      {currentGender === 'all' && currentCategory === 'all' && (
        <div className="bg-[#111111] text-white p-6 sm:p-8 mb-12 border border-[#39393b] rounded-none">
          <div className="flex items-center justify-between border-b border-[#39393b] pb-4 mb-6">
            <span className="text-xs tracking-widest text-[#cacacb] font-medium uppercase flex items-center space-x-2">
              <Crown className="w-4 h-4 text-white" />
              <span>TOP 3 PODIUM HONORS</span>
            </span>
            <span className="text-[11px] text-[#9e9ea0]">집계 기준 : 최근 3일 누적 판매량</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {top3.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onSelectProduct(item)}
                className="group bg-[#1e1e20] border border-[#39393b] hover:border-[#707072] flex flex-col cursor-pointer hover:bg-[#262629] transition-all rounded-none overflow-hidden"
              >
                <div className="relative w-full aspect-square bg-[#2b2b2e] overflow-hidden">
                  <img
                    src={item.img1}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-3 left-3 text-xs font-mono font-bold px-3 py-1 shadow-sm ${
                      idx === 0
                        ? 'bg-white text-[#111111]'
                        : idx === 1
                        ? 'bg-[#cacacb] text-[#111111]'
                        : 'bg-[#707072] text-white'
                    }`}
                  >
                    BEST {idx + 1}
                  </span>
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-medium text-[#9e9ea0] uppercase block truncate">
                      {item.brand}
                    </span>
                    <h4 className="text-sm font-medium text-white truncate group-hover:underline mt-0.5">
                      {item.name}
                    </h4>
                  </div>
                  <div className="pt-2 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="flex items-center space-x-1.5 text-white">
                        <Flame className="w-3.5 h-3.5 text-[#d30005]" />
                        <span>최근 3일 {item.salesCount3Days.toLocaleString()}개</span>
                      </span>
                      <span className="text-sm font-semibold text-white tabular-nums">
                        ₩{item.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#9e9ea0] font-mono truncate">
                      SIZE: <span className="text-[#cacacb]">{item.sizes.slice(0, 4).join(', ')}{item.sizes.length > 4 ? '…' : ''}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
              종합 베스트 (ALL)
            </button>
            <button
              onClick={() => setCurrentGender('women')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer ${
                currentGender === 'women'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              여성 베스트 (WOMEN)
            </button>
            <button
              onClick={() => setCurrentGender('men')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer ${
                currentGender === 'men'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              남성 베스트 (MEN)
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

      {/* Count & Status */}
      <div className="flex justify-between items-center mb-8 text-xs text-[#707072]">
        <div>
          <span>RANKING: </span>
          <span className="text-[#111111] font-semibold uppercase">
            BEST TOP 50 &gt; {currentGender.toUpperCase()} &gt; {activeCategoryObj?.label || '전체'}
          </span>
        </div>
        <div className="text-[#111111] font-medium">
          <span>{bestProducts.length} ITEMS RANKED</span>
        </div>
      </div>

      {/* 50-Item Ranked Grid (Nike product-card spec: 0px radius, 0 padding, flat #f5f5f5 image) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-12">
        {bestProducts.map((item, index) => {
          const isWished = isWishlisted(item.id);
          const formattedPrice = item.price.toLocaleString();
          const originalPrice =
            item.discount > 0
              ? Math.round(item.price / (1 - item.discount / 100)).toLocaleString()
              : null;

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

                {/* Rank Badge */}
                {index < 50 && (
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="bg-[#111111] text-white px-2.5 py-1 text-xs font-mono font-medium">
                      BEST {index + 1}
                    </span>
                  </div>
                )}

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

                {/* 3-day Sales Count Indicator */}
                <div className="flex items-center space-x-1 text-xs text-[#707072]">
                  <Flame className="w-3 h-3 text-[#d30005]" />
                  <span>최근 3일 {item.salesCount3Days.toLocaleString()}개 판매</span>
                </div>

                {/* Available Sizes list */}
                <div className="text-[11px] text-[#707072] truncate">
                  SIZE: {item.sizes.join(', ')}
                </div>

                {/* Price */}
                <div className="flex items-baseline space-x-2 pt-0.5">
                  {item.discount > 0 ? (
                    <>
                      <span className="text-sm font-medium text-[#d30005] tabular-nums">
                        ₩{formattedPrice}
                      </span>
                      {originalPrice && (
                        <span className="text-xs text-[#707072] line-through tabular-nums">
                          ₩{originalPrice}
                        </span>
                      )}
                      <span className="text-xs text-[#d30005] font-medium">
                        {item.discount}% off
                      </span>
                    </>
                  ) : (
                    <span className="text-sm font-medium text-[#111111] tabular-nums">
                      ₩{formattedPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
