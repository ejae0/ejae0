import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  ArrowUpDown,
  ChevronDown,
  Check,
  X,
  Heart,
  ShoppingBag,
  Zap,
  Tag,
  Star,
  RotateCcw,
  Plus,
  Trash2
} from 'lucide-react';
import { Product, SUBCATEGORIES } from '../data/products';
import { getDailyTimeSaleProducts, getNoonCycleInfo } from '../utils/timeSale';

interface ShopPageProps {
  products: Product[];
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
  isAdmin?: boolean;
  onOpenAddProductModal?: () => void;
  onDeleteProduct?: (productId: string) => void;
}

export type KreamSortType =
  | 'popular'
  | 'wish'
  | 'release'
  | 'price-asc'
  | 'price-desc'
  | 'discount'
  | 'reviews';

interface SortOptionItem {
  id: KreamSortType;
  label: string;
  description: string;
}

export const KREAM_SORT_OPTIONS: SortOptionItem[] = [
  { id: 'popular', label: '인기순', description: '거래량 및 실시간 랭킹 기준' },
  { id: 'wish', label: '관심순', description: '관심 상품 찜 등록이 많은 순서' },
  { id: 'release', label: '발매일순', description: '최신 출시 및 발매일자 기준' },
  { id: 'price-asc', label: '구매가 낮은 순', description: '즉시 구매가가 낮은 순서' },
  { id: 'price-desc', label: '구매가 높은 순', description: '즉시 구매가가 높은 순서' },
  { id: 'discount', label: '할인율순', description: '할인 혜택이 가장 큰 순서' },
  { id: 'reviews', label: '후기 많은 순', description: '구매 고객 리뷰가 많은 순서' }
];

export const getProductWishCount = (product: Product, isWished: boolean): number => {
  const hash = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const base = Math.floor(product.salesCount3Days * 1.5 + product.reviewCount * 14 + (hash % 600));
  return isWished ? base + 1 : base;
};

export const formatWishCount = (wishCount: number): string | number =>
  wishCount > 999 ? `${(wishCount / 1000).toFixed(1)}k` : wishCount;

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
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
  isWishlisted,
  isAdmin = false,
  onOpenAddProductModal,
  onDeleteProduct
}) => {
  const [sortBy, setSortBy] = useState<KreamSortType>('popular');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [onlyFastDelivery, setOnlyFastDelivery] = useState(false);
  const [onlySale, setOnlySale] = useState(false);
  const [now, setNow] = useState<Date>(() => new Date());

  const sortDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setIsSortDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const cycleInfo = useMemo(() => getNoonCycleInfo(now), [now]);

  const timeSaleMap = useMemo(() => {
    const list = getDailyTimeSaleProducts(products, cycleInfo.cycleSeed);
    return new Map(list.map((item) => [item.id, item]));
  }, [products, cycleInfo.cycleSeed]);

  const enrichedProducts = useMemo(
    () => products.map((p) => timeSaleMap.get(p.id) || p),
    [products, timeSaleMap]
  );

  const subcategories = SUBCATEGORIES[currentGender] || SUBCATEGORIES.all;

  const getWishCount = getProductWishCount;

  // Filter logic
  let filtered = enrichedProducts.filter((p) => {
    const matchGender = currentGender === 'all' || p.gender === currentGender;
    const matchCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchBrand = !selectedBrand || p.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchFastDelivery = !onlyFastDelivery || (p.salesCount3Days > 1200 || p.isBest);
    const matchSale = !onlySale || p.discount > 0;
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      matchGender &&
      matchCategory &&
      matchBrand &&
      matchFastDelivery &&
      matchSale &&
      matchSearch
    );
  });

  // Sorting logic
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === 'popular') return a.bestRank - b.bestRank;
    if (sortBy === 'wish') {
      const wishA = getWishCount(a, isWishlisted(a.id));
      const wishB = getWishCount(b, isWishlisted(b.id));
      return wishB - wishA;
    }
    if (sortBy === 'release') {
      if (a.releaseDate && b.releaseDate) {
        return b.releaseDate.localeCompare(a.releaseDate);
      }
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    }
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'discount') return b.discount - a.discount;
    if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
    return 0;
  });

  const activeSortOption = KREAM_SORT_OPTIONS.find((opt) => opt.id === sortBy)!;

  const handleDeleteClick = (e: React.MouseEvent, item: Product) => {
    e.stopPropagation();
    if (window.confirm(`'${item.name}' 상품을 삭제하시겠습니까?`)) {
      onDeleteProduct?.(item.id);
    }
  };

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
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 pt-4 sm:pt-5 pb-10 sm:pb-12">
      {/* Admin Add Product Button (Admin Mode Only) */}
      {isAdmin && onOpenAddProductModal && (
        <div className="mb-3 flex justify-end">
          <button
            onClick={onOpenAddProductModal}
            className="inline-flex items-center space-x-1.5 bg-[#111111] hover:bg-black text-white px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer active:scale-95"
            title="새 상품 등록하기"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ 상품 추가</span>
          </button>
        </div>
      )}

      {/* Filter Module (clean borderless strip) */}
      <div className="py-2 mb-4 space-y-3">
        {/* 1. GENDER Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 border-b border-[#e5e5e5] pb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#707072] w-24 shrink-0">
            GENDER
          </span>
          <div className="flex space-x-2 sm:space-x-3">
            <button
              onClick={() => onGenderChange('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer ${
                currentGender === 'all'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              ALL (전체)
            </button>
            <button
              onClick={() => onGenderChange('women')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer ${
                currentGender === 'women'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              WOMEN (여성)
            </button>
            <button
              onClick={() => onGenderChange('men')}
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

        {/* 2. CATEGORY Filter */}
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

      {/* Control Bar: Product Count + Fast Delivery + Sort Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-3 border-b border-[#e5e5e5] gap-3">
        {/* Left: Product Count & Quick Filter Chips */}
        <div className="flex items-center space-x-3 flex-wrap gap-y-2">
          <div className="text-sm font-semibold text-[#111111]">
            상품 <span className="text-[#707072] font-normal">{filtered.length}</span>
          </div>

          <span className="text-[#cacacb] hidden sm:inline">|</span>

          {/* Quick Filter: 빠른배송 */}
          <button
            onClick={() => setOnlyFastDelivery(!onlyFastDelivery)}
            className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
              onlyFastDelivery
                ? 'bg-[#111111] text-white border-[#111111]'
                : 'bg-white text-[#111111] border-[#cacacb] hover:border-[#111111]'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${onlyFastDelivery ? 'text-white' : 'text-[#007d48]'}`} />
            <span>빠른배송</span>
          </button>

          {/* Quick Filter: 할인상품만 */}
          <button
            onClick={() => setOnlySale(!onlySale)}
            className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
              onlySale
                ? 'bg-[#111111] text-white border-[#111111]'
                : 'bg-white text-[#111111] border-[#cacacb] hover:border-[#111111]'
            }`}
          >
            <Tag className={`w-3.5 h-3.5 ${onlySale ? 'text-white' : 'text-[#d30005]'}`} />
            <span>할인상품만</span>
          </button>

          {/* Active Chips */}

          {selectedBrand && (
            <div className="inline-flex items-center space-x-1 bg-[#111111] text-white px-3 py-1 rounded-full text-[11px]">
              <span>브랜드: {selectedBrand}</span>
              <button onClick={onClearBrand} className="hover:text-red-300 ml-1 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          {searchQuery && (
            <div className="inline-flex items-center space-x-1 bg-[#f5f5f5] text-[#111111] border border-[#cacacb] px-3 py-1 rounded-full text-[11px]">
              <span>검색: "{searchQuery}"</span>
              <button onClick={onClearSearch} className="hover:text-black ml-1 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Right: Sort Popover Dropdown (Nike button-secondary pill style) */}
        <div className="relative self-end sm:self-auto" ref={sortDropdownRef}>
          <button
            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
            className="flex items-center space-x-2 px-4 py-2 rounded-full border border-[#cacacb] bg-white hover:border-[#111111] transition-all text-xs font-medium text-[#111111] cursor-pointer select-none"
            aria-expanded={isSortDropdownOpen}
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-[#707072]" />
            <span>{activeSortOption.label}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-[#707072] transition-transform duration-200 ${
                isSortDropdownOpen ? 'rotate-180 text-[#111111]' : ''
              }`}
            />
          </button>

          {/* Dropdown Popover Menu */}
          {isSortDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-xl border border-[#cacacb] py-2 z-40">
              <div className="px-4 py-2 border-b border-[#e5e5e5] text-[11px] font-mono font-medium tracking-wider text-[#707072] uppercase">
                정렬 기준 (SORT BY)
              </div>
              <div className="py-1">
                {KREAM_SORT_OPTIONS.map((option) => {
                  const isSelected = sortBy === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        setIsSortDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-[#f5f5f5] transition-colors cursor-pointer ${
                        isSelected ? 'bg-[#f5f5f5]' : ''
                      }`}
                    >
                      <div>
                        <div
                          className={`text-xs ${
                            isSelected ? 'font-semibold text-[#111111]' : 'font-normal text-[#111111]'
                          }`}
                        >
                          {option.label}
                        </div>
                        <div className="text-[11px] text-[#707072] font-normal">
                          {option.description}
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#111111] stroke-[2.5]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid (Nike product-card: 0px radius, 0 internal padding, full-bleed on #f5f5f5, 0 shadow) */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center border border-[#cacacb] bg-[#f5f5f5]">
          <p className="text-[#707072] text-sm font-normal mb-4">
            조건에 부합하는 상품이 없습니다.
          </p>
          <button
            onClick={() => {
              onCategoryChange('all');
              onGenderChange('all');
              setOnlyFastDelivery(false);
              setOnlySale(false);
              onClearBrand();
              onClearSearch();
            }}
            className="inline-flex items-center space-x-1.5 text-xs bg-[#111111] text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>필터 전체 초기화</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-12">
          {filtered.map((item, index) => {
            const isWished = isWishlisted(item.id);
            const formattedPrice = item.price.toLocaleString();
            const originalPrice =
              item.discount > 0
                ? Math.round(item.price / (1 - item.discount / 100)).toLocaleString()
                : null;
            const wishCount = getWishCount(item, isWished);

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between relative bg-white rounded-none p-0"
              >
                {/* Image Frame (Nike product-card-image: #f5f5f5 square, rounded 0px, zero shadow) */}
                <div className="relative w-full aspect-square bg-[#f5f5f5] rounded-none overflow-hidden mb-3">
                  <img
                    src={item.img1}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    onClick={() => onSelectProduct(item)}
                    className="w-full h-full object-cover cursor-pointer"
                  />

                  {/* Wishlist Button (Nike button-icon-circular) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(item.id);
                    }}
                    className="absolute top-2.5 right-2.5 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/90 text-[#111111] hover:text-[#d30005] transition-all z-10 shadow-xs cursor-pointer"
                    aria-label="Wishlist"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 transition-transform active:scale-125 ${
                        isWished ? 'text-[#d30005] fill-[#d30005]' : 'text-[#707072]'
                      }`}
                    />
                    <span className="text-[10px] font-mono font-medium text-[#111111]">
                      {wishCount > 999 ? `${(wishCount / 1000).toFixed(1)}k` : wishCount}
                    </span>
                  </button>

                  {/* ADMIN ONLY: Delete Button */}
                  {isAdmin && (
                    <button
                      onClick={(e) => handleDeleteClick(e, item)}
                      className={`absolute left-2.5 w-8 h-8 rounded-full bg-[#d30005] hover:bg-[#780700] text-white flex items-center justify-center transition-all z-20 shadow-sm cursor-pointer ${
                        item.isTimeSale ? 'bottom-10' : 'bottom-2.5'
                      }`}
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
                    className={`absolute inset-x-0 bg-[#111111]/95 text-white text-[11px] text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer uppercase tracking-wider flex items-center justify-center space-x-1.5 z-10 ${
                      item.isTimeSale ? 'bottom-8 py-2 border-b border-white/15' : 'bottom-0 py-2.5'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-white" />
                    <span>+ Quick Add</span>
                  </div>

                  {/* Time Sale Live Status & Remaining Time Bar at Bottom of Image */}
                  {item.isTimeSale && (
                    <div className="absolute bottom-0 inset-x-0 h-8 bg-[#111111]/90 text-white px-3 flex items-center justify-between text-[11px] z-10">
                      <span className="inline-flex items-center space-x-1.5 font-semibold tracking-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] animate-pulse" />
                        <span>타임세일 중</span>
                      </span>
                      <span className="tabular-nums text-[#f5f5f5] font-medium">
                        {cycleInfo.countdown}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="space-y-1 pt-1">
                  {/* Swatch Dot Row */}
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
                  </div>

                  {/* Brand */}
                  <div className="flex justify-between items-center text-xs font-medium text-[#707072] uppercase">
                    <span className="hover:underline cursor-pointer" onClick={() => onSelectProduct(item)}>
                      {item.brand}
                    </span>
                    <span className="text-[#707072] font-mono text-[11px] flex items-center">
                      <Star className="w-3 h-3 text-[#111111] fill-[#111111] mr-0.5" />
                      {item.rating}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3
                    onClick={() => onSelectProduct(item)}
                    className="text-sm font-medium text-[#111111] line-clamp-1 hover:underline cursor-pointer leading-tight"
                    title={item.name}
                  >
                    {item.name}
                  </h3>

                  {/* Price Section */}
                  <div className="pt-0.5">
                    <div className="flex items-baseline space-x-2">
                      {item.discount > 0 ? (
                        <>
                          <span className="text-sm font-medium text-[#d30005] tabular-nums">
                            {formattedPrice}원
                          </span>
                          {originalPrice && (
                            <span className="text-xs text-[#707072] line-through tabular-nums">
                              {originalPrice}원
                            </span>
                          )}
                          <span className="text-xs text-[#d30005] font-medium">
                            {item.discount}% off
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-medium text-[#111111] tabular-nums">
                          {formattedPrice}원
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-[#9e9ea0] font-normal mt-0.5">
                      즉시 구매가
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
