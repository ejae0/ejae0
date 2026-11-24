import React, { useState } from 'react';
import { Heart, SlidersHorizontal, X, ShoppingBag, Flame, Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Product, SUBCATEGORIES } from '../data/products';
import { NavTabType } from './Header';

interface ProductCatalogProps {
  products: Product[];
  activeNavTab: NavTabType;
  onNavTabChange: (tab: NavTabType) => void;
  currentGender: 'all' | 'women' | 'men';
  currentCategory: string;
  selectedBrand: string | null;
  searchQuery: string;
  onGenderChange: (gender: 'all' | 'women' | 'men') => void;
  onCategoryChange: (category: string) => void;
  onClearBrand: () => void;
  onClearSearch: () => void;
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  onQuickAddToCart: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
}

type SortOption = 'rank' | 'recommended' | 'new' | 'discount' | 'price-asc' | 'price-desc';

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  activeNavTab,
  onNavTabChange,
  currentGender,
  currentCategory,
  selectedBrand,
  searchQuery,
  onGenderChange,
  onCategoryChange,
  onClearBrand,
  onClearSearch,
  onSelectProduct,
  onToggleWishlist,
  onQuickAddToCart,
  isWishlisted
}) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>(
    activeNavTab === 'best' ? 'rank' : activeNavTab === 'sale' ? 'discount' : 'recommended'
  );

  // Available subcategories depending on gender
  const allSubcategories = [
    { id: 'all', label: '전체' },
    { id: 'top', label: '상의' },
    { id: 'outer', label: '아우터' },
    { id: 'bottom', label: '하의' },
    { id: 'skirt', label: '스커트' },
    { id: 'dress', label: '원피스' },
    { id: 'shoes', label: '신발' },
    { id: 'bag', label: '가방' },
    { id: 'acc', label: '액세서리' }
  ];

  const subcategories =
    currentGender === 'men'
      ? SUBCATEGORIES.men
      : currentGender === 'women'
      ? SUBCATEGORIES.women
      : allSubcategories;

  // Filter products by Tab Mode & criteria
  let filtered = products.filter((p) => {
    // 1. Tab mode filter
    if (activeNavTab === 'best') {
      if (!p.bestRank) return false;
    } else if (activeNavTab === 'sale') {
      if (!p.discount || p.discount <= 0) return false;
    } else if (activeNavTab === 'new') {
      if (!p.isNew) return false;
    }

    // 2. Gender filter
    const matchGender = currentGender === 'all' || p.gender === currentGender;

    // 3. Category filter
    const matchCategory = currentCategory === 'all' || p.category === currentCategory;

    // 4. Brand filter
    const matchBrand = !selectedBrand || p.brand.toLowerCase() === selectedBrand.toLowerCase();

    // 5. Search query
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchGender && matchCategory && matchBrand && matchSearch;
  });

  // Sort products
  filtered = [...filtered].sort((a, b) => {
    if (activeNavTab === 'best' || sortBy === 'rank') {
      return a.bestRank - b.bestRank;
    }
    if (sortBy === 'new') {
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    }
    if (sortBy === 'discount') {
      return b.discount - a.discount;
    }
    if (sortBy === 'price-asc') {
      return a.price - b.price;
    }
    if (sortBy === 'price-desc') {
      return b.price - a.price;
    }
    return (b.isBest ? 1 : 0) - (a.isBest ? 1 : 0);
  });

  const activeCategoryObj = subcategories.find((s) => s.id === currentCategory);

  // Helper for swatch colors
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
    <section id="shop" className="max-w-[1440px] mx-auto px-6 sm:px-8 py-12">
      
      {/* Tab Switcher Bar (Nike filter-chip row) */}
      <div className="flex items-center space-x-2 sm:space-x-3 pb-6 mb-8 border-b border-[#e5e5e5] overflow-x-auto">
        <button
          onClick={() => {
            onNavTabChange('shop');
            setSortBy('recommended');
          }}
          className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-normal transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
            activeNavTab === 'shop'
              ? 'bg-[#111111] text-white'
              : 'bg-white text-[#111111] border border-[#cacacb] hover:border-[#111111]'
          }`}
        >
          <span>SHOP (전체 상품)</span>
        </button>

        <button
          onClick={() => {
            onNavTabChange('best');
            setSortBy('rank');
          }}
          className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-normal transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
            activeNavTab === 'best'
              ? 'bg-[#111111] text-white'
              : 'bg-white text-[#111111] border border-[#cacacb] hover:border-[#111111]'
          }`}
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>BEST (3일 랭킹 TOP 50)</span>
        </button>

        <button
          onClick={() => {
            onNavTabChange('sale');
            setSortBy('discount');
          }}
          className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-normal transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
            activeNavTab === 'sale'
              ? 'bg-[#111111] text-white'
              : 'bg-white text-[#d30005] border border-[#cacacb] hover:border-[#d30005]'
          }`}
        >
          <span>SALE (할인 상품)</span>
        </button>

        <button
          onClick={() => {
            onNavTabChange('new');
            setSortBy('new');
          }}
          className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-normal transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
            activeNavTab === 'new'
              ? 'bg-[#111111] text-white'
              : 'bg-white text-[#111111] border border-[#cacacb] hover:border-[#111111]'
          }`}
        >
          <span>NEW (24SS 신상품)</span>
        </button>
      </div>

      {/* Section Header (Nike heading-xl: 32px 500 line-height 1.2) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4">
        <div>
          <span className="text-xs font-medium tracking-widest text-[#707072] uppercase block mb-1">
            {activeNavTab === 'shop' && 'MONO:DAY CATALOG'}
            {activeNavTab === 'best' && 'REALTIME SALES RANKING'}
            {activeNavTab === 'sale' && 'SEASON SPECIAL BENEFIT'}
            {activeNavTab === 'new' && '24SS NEW ARRIVALS'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] tracking-tight">
            {activeNavTab === 'shop' && 'Shop Collections'}
            {activeNavTab === 'best' && '근 3일간 가장 많이 팔린 BEST 50'}
            {activeNavTab === 'sale' && '시즌 오프 특별 할인 (SALE)'}
            {activeNavTab === 'new' && '24SS 신규 입고 상품 (NEW)'}
          </h2>
          <p className="text-xs sm:text-sm text-[#707072] font-normal mt-1.5">
            {activeNavTab === 'shop' && '모든 상품을 성별 및 카테고리별로 자유롭게 둘러보세요.'}
            {activeNavTab === 'best' && '최근 3일간 실시간 주문량 기준 상위 50개 상품 랭킹입니다.'}
            {activeNavTab === 'sale' && '최대 25% 할인 혜택이 적용된 브랜드 특별 기획전입니다.'}
            {activeNavTab === 'new' && '가장 최근에 출시된 신상 라인업을 만나보세요.'}
          </p>
        </div>

        {/* Sort Selector (Nike pill style) */}
        <div className="mt-4 sm:mt-0 flex items-center space-x-2 text-xs text-[#707072] shrink-0">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#707072]" />
          <span>정렬:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-[#f5f5f5] border border-[#cacacb] rounded-full px-3.5 py-1.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111] cursor-pointer"
          >
            {activeNavTab === 'best' && <option value="rank">판매 랭킹순 (1위~50위)</option>}
            <option value="recommended">추천순 (인기순)</option>
            <option value="new">신상품순</option>
            <option value="discount">할인율순</option>
            <option value="price-asc">낮은 가격순</option>
            <option value="price-desc">높은 가격순</option>
          </select>
        </div>
      </div>

      {/* Navigation Filter Box (Nike filter-chip style: clean flat surface, pill chips) */}
      <div className="bg-[#f5f5f5] p-6 rounded-none mb-10 space-y-5 border border-[#e5e5e5]">
        {/* Level 1: Gender Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 border-b border-[#e5e5e5] pb-4">
          <span className="text-xs font-semibold tracking-wider text-[#707072] uppercase w-24 shrink-0">
            GENDER
          </span>
          <div className="flex space-x-2 sm:space-x-3">
            <button
              onClick={() => onGenderChange('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                currentGender === 'all'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              ALL (전체)
            </button>
            <button
              onClick={() => onGenderChange('women')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                currentGender === 'women'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              WOMEN (여성)
            </button>
            <button
              onClick={() => onGenderChange('men')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                currentGender === 'men'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              MEN (남성)
            </button>
          </div>
        </div>

        {/* Level 2: Subcategories */}
        <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0">
          <span className="text-xs font-semibold tracking-wider text-[#707072] uppercase w-24 shrink-0 pt-1.5">
            CATEGORY
          </span>
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {subcategories.map((sub) => {
              const isActive = sub.id === currentCategory;
              return (
                <button
                  key={sub.id}
                  onClick={() => onCategoryChange(sub.id)}
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

      {/* Active Filter Chips & Product Count */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs text-[#707072]">
        <div className="flex items-center space-x-3 flex-wrap gap-y-2">
          <div>
            <span className="text-[#707072]">ACTIVE: </span>
            <span className="text-[#111111] font-semibold uppercase">
              {activeNavTab.toUpperCase()} &gt; {currentGender.toUpperCase()} &gt; {activeCategoryObj?.label || '전체'}
            </span>
          </div>

          {selectedBrand && (
            <div className="inline-flex items-center space-x-1.5 bg-[#111111] text-white px-3 py-1 rounded-full text-[11px]">
              <span>브랜드: {selectedBrand}</span>
              <button onClick={onClearBrand} className="hover:text-red-300 ml-1 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          {searchQuery && (
            <div className="inline-flex items-center space-x-1.5 bg-[#f5f5f5] text-[#111111] border border-[#cacacb] px-3 py-1 rounded-full text-[11px]">
              <span>검색: "{searchQuery}"</span>
              <button onClick={onClearSearch} className="hover:text-black ml-1 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        <div className="text-[#111111] font-medium">
          <span>{filtered.length} ITEMS {activeNavTab === 'best' && '(TOP 50 랭킹)'}</span>
        </div>
      </div>

      {/* Product Grid (Nike product-card: 0px radius, 0 internal padding, full-bleed photo on #f5f5f5, zero shadow) */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center border border-[#cacacb] bg-[#f5f5f5]">
          <p className="text-[#707072] text-sm font-normal mb-4">
            조건에 부합하는 상품이 없습니다.
          </p>
          <button
            onClick={() => {
              onCategoryChange('all');
              onGenderChange('all');
              onClearBrand();
              onClearSearch();
            }}
            className="text-xs bg-[#111111] text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors cursor-pointer"
          >
            필터 초기화
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-12">
          {filtered.map((item) => {
            const isWished = isWishlisted(item.id);
            const isHovered = hoveredProduct === item.id;
            const displayImg = isHovered && item.img2 ? item.img2 : item.img1;
            const formattedPrice = item.price.toLocaleString();
            const originalPrice =
              item.discount > 0
                ? Math.round(item.price / (1 - item.discount / 100)).toLocaleString()
                : null;

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-none p-0"
                onMouseEnter={() => setHoveredProduct(item.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Image Frame (Nike product-card-image: bg #f5f5f5, rounded 0px, zero shadow) */}
                <div className="relative w-full aspect-square bg-[#f5f5f5] rounded-none overflow-hidden mb-3">
                  <img
                    src={displayImg}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    onClick={() => onSelectProduct(item)}
                    className="w-full h-full object-cover transition-opacity duration-300 cursor-pointer"
                  />

                  {/* BEST Tab: Rank Tag in top-left */}
                  {activeNavTab === 'best' && (
                    <div className="absolute top-2 left-2 z-10">
                      <div className="bg-[#111111] text-white px-2.5 py-1 text-xs font-mono font-medium flex items-center space-x-1">
                        <span>#{item.bestRank}</span>
                        {item.rankChange === 'new' && (
                          <span className="text-[10px] text-[#d30005] font-bold">NEW</span>
                        )}
                        {typeof item.rankChange === 'number' && item.rankChange > 0 && (
                          <span className="text-[10px] text-[#007d48] flex items-center">
                            <TrendingUp className="w-2.5 h-2.5 mr-0.5" />
                            {item.rankChange}
                          </span>
                        )}
                        {typeof item.rankChange === 'number' && item.rankChange < 0 && (
                          <span className="text-[10px] text-[#d30005] flex items-center">
                            <TrendingDown className="w-2.5 h-2.5 mr-0.5" />
                            {Math.abs(item.rankChange)}
                          </span>
                        )}
                        {item.rankChange === 'same' && (
                          <span className="text-[10px] text-[#707072]">
                            <Minus className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Promo Badge (Nike badge-promo: bg white, border hairline, rounded full, text ink) */}
                  {activeNavTab !== 'best' && (
                    <div className="absolute top-2.5 left-2.5 flex flex-col space-y-1 pointer-events-none">
                      {item.isBest && (
                        <span className="bg-white border border-[#cacacb] text-[#111111] text-[11px] font-medium rounded-full px-2.5 py-0.5">
                          Just In
                        </span>
                      )}
                      {item.isNew && (
                        <span className="bg-white border border-[#cacacb] text-[#111111] text-[11px] font-medium rounded-full px-2.5 py-0.5">
                          24SS New
                        </span>
                      )}
                    </div>
                  )}

                  {/* Wishlist Button (Nike button-icon-circular: 40px rounded-full) */}
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
                        isWished ? 'text-[#d30005] fill-[#d30005]' : 'text-[#111111]'
                      }`}
                    />
                  </button>

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

                {/* Details Section (Nike: swatch dot row -> name -> subtitle -> price row) */}
                <div className="space-y-1 pt-1">
                  {/* Swatch Dot Row (Nike swatch-dot: 12px circular, concentric ring active) */}
                  <div className="flex items-center space-x-1.5 pb-1">
                    {item.colors.slice(0, 4).map((c, cIdx) => (
                      <span
                        key={cIdx}
                        className={`w-3 h-3 rounded-full border transition-all ${
                          cIdx === 0
                            ? 'ring-1 ring-[#111111] ring-offset-1 border-[#cacacb]'
                            : 'border-[#cacacb]'
                        }`}
                        style={{ backgroundColor: getColorHex(c) }}
                        title={c}
                      />
                    ))}
                    {item.colors.length > 4 && (
                      <span className="text-[10px] text-[#707072] font-mono">
                        +{item.colors.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Product Title (Nike body-strong: 16px 500) */}
                  <h3
                    onClick={() => onSelectProduct(item)}
                    className="text-sm font-medium text-[#111111] truncate cursor-pointer leading-tight"
                    title={item.name}
                  >
                    {item.name}
                  </h3>

                  {/* Category & Brand Subtitle (Nike caption-md: 14px 500 #707072) */}
                  <p className="text-xs text-[#707072] font-normal truncate">
                    {item.brand} · {item.category.toUpperCase()}
                  </p>

                  {/* 3-day Sales Count Indicator if in Best mode */}
                  {activeNavTab === 'best' && (
                    <div className="flex items-center space-x-1 text-xs text-[#707072]">
                      <Flame className="w-3 h-3 text-[#d30005]" />
                      <span>최근 3일 {item.salesCount3Days.toLocaleString()}개 판매</span>
                    </div>
                  )}

                  {/* Price Row (Nike: #111111 regular, #d30005 sale price & % off, #707072 strike-through original) */}
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
      )}
    </section>
  );
};
