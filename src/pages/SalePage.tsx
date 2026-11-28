import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Clock,
  Heart,
  ShoppingBag,
  Trash2,
  ArrowUpDown,
  ChevronDown,
  Check,
  Zap,
  Flame
} from 'lucide-react';
import { Product, SUBCATEGORIES } from '../data/products';
import { KREAM_SORT_OPTIONS, KreamSortType, getProductWishCount, formatWishCount } from './ShopPage';
import { getDailyTimeSaleProducts, getNoonCycleInfo } from '../utils/timeSale';

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
  const [sortBy, setSortBy] = useState<KreamSortType>('discount');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [onlyFastDelivery, setOnlyFastDelivery] = useState(false);
  const [now, setNow] = useState<Date>(() => new Date());

  const sortDropdownRef = useRef<HTMLDivElement>(null);

  // Update countdown every second and roll over automatically at 12:00 PM
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

  const dailyTimeSalePool = useMemo(
    () => getDailyTimeSaleProducts(products, cycleInfo.cycleSeed),
    [products, cycleInfo.cycleSeed]
  );

  const subcategories = SUBCATEGORIES[currentGender] || SUBCATEGORIES.all;

  const getWishCount = (product: Product, isWished: boolean) => {
    const hash = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const base = Math.floor(product.salesCount3Days * 1.5 + product.reviewCount * 14 + (hash % 600));
    return isWished ? base + 1 : base;
  };

  let timeSaleProducts = dailyTimeSalePool.filter((p) => {
    const matchGender = currentGender === 'all' || p.gender === currentGender;
    const matchCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchFastDelivery = !onlyFastDelivery || (p.salesCount3Days > 1200 || p.isBest);
    return matchGender && matchCategory && matchFastDelivery;
  });

  timeSaleProducts = [...timeSaleProducts].sort((a, b) => {
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
      {/* Banner (Nike display campaign style, consistent with NEW / SNAP banners) */}
      <div className="bg-[#111111] text-white px-6 py-5 sm:px-8 sm:py-6 mb-4 border border-[#39393b] rounded-none">
        <div className="max-w-3xl space-y-1.5">
          <div className="inline-flex items-center space-x-1.5 text-[#d30005] text-xs font-semibold tracking-wider uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>DAILY TIME SALE · RESETS AT 12:00 PM ({cycleInfo.countdown})</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.92] tracking-tight sm:whitespace-nowrap">
            DAILY TIME SALE
          </h1>
          <p className="text-xs sm:text-sm text-[#cacacb] font-normal leading-relaxed pt-0.5 sm:whitespace-nowrap break-keep">
            매일 정오(12:00)를 기준으로 새롭게 선정되는 오늘의 타임세일 특가 라인업입니다.
            <br />
            평소보다 높은 타임세일 전용 할인율로 다음 정오까지 한정 특가에 만나보세요.
          </p>
        </div>
      </div>

      {/* Filter Module (clean borderless strip close to banner) */}
      <div className="py-2 mb-4 space-y-3">
        {/* Gender Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 border-b border-[#e5e5e5] pb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#707072] w-24 shrink-0">
            GENDER
          </span>
          <div className="flex space-x-2 sm:space-x-3">
            <button
              onClick={() => {
                setCurrentGender('all');
                setCurrentCategory('all');
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer ${
                currentGender === 'all'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              ALL (전체)
            </button>
            <button
              onClick={() => {
                setCurrentGender('women');
                setCurrentCategory('all');
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer ${
                currentGender === 'women'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white border border-[#cacacb] text-[#111111] hover:border-[#111111]'
              }`}
            >
              WOMEN (여성)
            </button>
            <button
              onClick={() => {
                setCurrentGender('men');
                setCurrentCategory('all');
              }}
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

      {/* Control Bar (matching SHOP tab: Count + Quick Filters + Sort Dropdown) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-3 border-b border-[#e5e5e5] gap-3">
        <div className="flex items-center space-x-3 flex-wrap gap-y-2">
          <div className="text-sm font-semibold text-[#111111]">
            타임세일 상품 <span className="text-[#707072] font-normal">{timeSaleProducts.length}</span>
          </div>

          <span className="text-[#cacacb] hidden sm:inline">|</span>

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

          <div className="inline-flex items-center space-x-1.5 bg-[#f5f5f5] border border-[#e5e5e5] text-[#111111] px-3 py-1.5 rounded-full text-xs font-medium">
            <Flame className="w-3.5 h-3.5 text-[#d30005]" />
            <span>정오 마감까지</span>
            <span className="font-semibold text-[#d30005] tabular-nums">
              {cycleInfo.countdown}
            </span>
          </div>
        </div>

        {/* Right: Sort Popover Dropdown (identical to ShopPage) */}
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

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-12">
        {timeSaleProducts.map((item) => {
          const isWished = isWishlisted(item.id);
          const wishCount = getProductWishCount(item, isWished);
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
                  className="w-full h-full object-cover cursor-pointer group-hover:scale-102 transition-transform duration-500"
                />

                {/* Wishlist Button */}
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
                    {formatWishCount(wishCount)}
                  </span>
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
                    className="absolute bottom-10 left-2.5 w-8 h-8 rounded-full bg-[#d30005] hover:bg-[#780700] text-white flex items-center justify-center transition-all z-20 shadow-sm cursor-pointer"
                    title="관리자 권한: 상품 삭제"
                    aria-label="상품 삭제"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Quick Add on Hover (sits cleanly above Time Sale bottom bar) */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickAddToCart(item);
                  }}
                  className="absolute bottom-8 inset-x-0 bg-[#111111]/95 text-white text-[11px] py-2 text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer uppercase tracking-wider flex items-center justify-center space-x-1.5 z-10 border-b border-white/15"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-white" />
                  <span>+ Quick Add</span>
                </div>

                {/* Time Sale Live Status & Remaining Time Bar at Bottom of Image */}
                <div className="absolute bottom-0 inset-x-0 h-8 bg-[#111111]/90 text-white px-3 flex items-center justify-between text-[11px] z-10">
                  <span className="inline-flex items-center space-x-1.5 font-semibold tracking-tight">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] animate-pulse" />
                    <span>타임세일 중</span>
                  </span>
                  <span className="tabular-nums text-[#f5f5f5] font-medium">
                    {cycleInfo.countdown}
                  </span>
                </div>
              </div>

              {/* Product Info & Price */}
              <div className="space-y-1 pt-1">
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

                <div className="text-[11px] text-[#707072] truncate">
                  {item.regularDiscount && item.regularDiscount > 0
                    ? `평소 ${item.regularDiscount}% 할인 → 타임세일 ${item.discount}%`
                    : `정가 판매 상품 → 타임세일 ${item.discount}%`}
                </div>

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

