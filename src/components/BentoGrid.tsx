import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Product } from '../data/products';

interface BentoGridProps {
  onSelectBrand: (brand: string) => void;
  onSelectCategory: (gender: 'women' | 'men', category: string) => void;
  onQuickAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  highlightProduct: Product;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  onSelectBrand,
  onSelectCategory,
  onQuickAddToCart,
  onToggleWishlist,
  isWishlisted,
  highlightProduct
}) => {
  const isHighlightedWished = isWishlisted(highlightProduct.id);

  return (
    <section id="editorial" className="max-w-[1440px] mx-auto px-6 sm:px-8 py-12">
      {/* Section Header (Nike heading-xl: 32px 500 line-height 1.2) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#e5e5e5]">
        <div>
          <span className="text-xs font-medium tracking-widest text-[#707072] uppercase block mb-1">
            MONO:DAY CURATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] tracking-tight">
            Today's Bento Editorial
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#707072] max-w-md mt-4 md:mt-0 font-normal leading-relaxed break-keep">
          에디터가 제안하는 다채로운 레이아웃 속 단 하나의 감성 큐레이션. 단순한 쇼핑을 넘어 브랜드를 경험하세요.
        </p>
      </div>

      {/* Bento Grid Layout (Nike editorial & campaign tiles: flat cards, zero shadow, pill buttons) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[280px]">
        {/* Bento Card 1: Large Campaign Tile (Nike campaign-tile: full-bleed image + white pill anchored bottom-left) */}
        <div
          onClick={() => onSelectBrand('DUNST')}
          className="group relative md:col-span-2 md:row-span-2 bg-[#111111] cursor-pointer overflow-hidden rounded-none"
        >
          <img
            src="/src/assets/images/editorial_bento_dunst_1793684669027.jpg"
            alt="Dunst Editorial Focus"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
            <span className="text-xs tracking-widest uppercase font-medium text-white/80 mb-2">
              WEEKLY BRAND FOCUS
            </span>
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-2 text-white">
              DUNST : CLASSIC &amp; MODERN
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-normal mb-5 line-clamp-2 leading-relaxed">
              비대칭 컷팅과 고급스러운 울 블렌드 소재의 모던 트렌치 라이너 컬렉션. 지금 바로 만나보세요.
            </p>
            {/* Nike button-outline-on-image: white pill anchored bottom-left */}
            <div>
              <span className="inline-flex items-center space-x-2 bg-white text-[#111111] px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider group-hover:bg-[#f5f5f5] transition-colors">
                <span>DISCOVER BRAND</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Bento Card 2: Medium Collection Card */}
        <div className="group relative md:col-span-2 md:row-span-1 bg-[#111111] text-white flex flex-col sm:flex-row overflow-hidden rounded-none border border-[#39393b]">
          <div className="w-full sm:w-1/2 h-44 sm:h-full overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
              alt="Mardi Mercredi Flower Collection"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between bg-[#111111]">
            <div>
              <span className="text-[11px] tracking-widest uppercase font-medium text-[#9e9ea0]">
                TREND ESSENTIAL
              </span>
              <h4 className="text-base font-semibold text-white mt-1">
                MARDI MERCREDI FLOWER
              </h4>
              <p className="text-xs text-[#cacacb] font-normal mt-1.5 leading-relaxed break-keep">
                위트 있는 시그니처 프렌치 그래픽 라인업과 24SS 컬러웨이.
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center text-xs">
              <span className="text-[#d30005] font-medium">UP TO 20% OFF</span>
              <button
                onClick={() => onSelectCategory('women', 'top')}
                className="bg-white text-[#111111] px-4 py-1.5 rounded-full text-xs font-medium hover:bg-[#f5f5f5] transition-colors cursor-pointer"
              >
                Shop Now →
              </button>
            </div>
          </div>
        </div>

        {/* Bento Card 3: Quick Add Highlight (Nike product-card style on #f5f5f5) */}
        <div className="group relative md:col-span-1 md:row-span-1 bg-[#f5f5f5] p-5 flex flex-col justify-between border border-[#e5e5e5] rounded-none">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-medium tracking-widest text-[#707072] uppercase">
              ICONIC BAG
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(highlightProduct.id);
              }}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#707072] hover:text-[#d30005] transition-colors cursor-pointer"
              aria-label="Wishlist toggle"
            >
              <Heart
                className={`w-4 h-4 ${
                  isHighlightedWished ? 'text-[#d30005] fill-[#d30005]' : 'text-[#707072]'
                }`}
              />
            </button>
          </div>

          <div
            className="my-auto text-center py-2 cursor-pointer"
            onClick={() => onQuickAddToCart(highlightProduct)}
          >
            <img
              src={highlightProduct.img1}
              alt={highlightProduct.name}
              referrerPolicy="no-referrer"
              className="h-28 mx-auto object-contain group-hover:scale-102 transition-transform duration-300"
            />
          </div>

          <div className="flex justify-between items-end pt-2">
            <div className="overflow-hidden">
              <p className="text-xs font-medium text-[#111111] truncate">
                {highlightProduct.name}
              </p>
              <p className="text-xs text-[#707072] mt-0.5">
                {highlightProduct.brand} · ₩{highlightProduct.price.toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => onQuickAddToCart(highlightProduct)}
              className="shrink-0 ml-2 bg-[#111111] text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full uppercase hover:bg-black transition-colors cursor-pointer active:scale-95"
            >
              + Cart
            </button>
          </div>
        </div>

        {/* Bento Card 4: Editorial Quote */}
        <div className="group relative md:col-span-1 md:row-span-1 bg-[#f5f5f5] border border-[#e5e5e5] p-6 flex flex-col justify-between rounded-none">
          <span className="text-3xl font-display text-[#111111] leading-none select-none">
            “
          </span>
          <p className="text-xs font-medium text-[#111111] leading-relaxed -mt-3 break-keep">
            "취향은 매일 거치는 작은 선택들이 모여 비로소 나만의 색깔을 완성한다."
          </p>
          <div className="text-right border-t border-[#e5e5e5] pt-3">
            <span className="text-[11px] tracking-widest text-[#707072] font-medium block uppercase">
              — MONO:DAY ESSAY
            </span>
            <span className="text-[10px] text-[#9e9ea0] font-mono">ISSUE VOL. 29</span>
          </div>
        </div>
      </div>
    </section>
  );
};
