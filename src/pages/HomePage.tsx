import React from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import { BentoGrid } from '../components/BentoGrid';
import { BrandPTSection } from '../components/BrandPTSection';
import { Product } from '../data/products';
import { NavTabType } from '../components/Header';

interface HomePageProps {
  onNavigateTab: (tab: NavTabType) => void;
  onOpenPTModal: () => void;
  onSelectBrand: (brand: string) => void;
  onSelectCategory: (gender: 'women' | 'men', category: string) => void;
  onQuickAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  highlightProduct: Product;
  onCopyPromo: (code: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateTab,
  onOpenPTModal,
  onSelectBrand,
  onSelectCategory,
  onQuickAddToCart,
  onToggleWishlist,
  isWishlisted,
  highlightProduct,
  onCopyPromo
}) => {
  return (
    <div className="space-y-12">
      {/* 1. Hero Editorial Slider (Towering Display Typography & White Pill CTA) */}
      <HeroSlider
        onExploreShop={() => onNavigateTab('shop')}
        onViewPT={() => {
          const ptEl = document.getElementById('pt');
          if (ptEl) ptEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Today's Bento Editorial (Nike editorial bento tile layout) */}
      <BentoGrid
        onSelectBrand={(brand) => {
          onSelectBrand(brand);
          onNavigateTab('shop');
        }}
        onSelectCategory={(gender, category) => {
          onSelectCategory(gender, category);
          onNavigateTab('shop');
        }}
        onQuickAddToCart={onQuickAddToCart}
        onToggleWishlist={onToggleWishlist}
        isWishlisted={isWishlisted}
        highlightProduct={highlightProduct}
      />

      {/* 3. Special PT Presentation */}
      <BrandPTSection
        onOpenPTModal={onOpenPTModal}
        onExplorePTCollection={() => {
          onSelectBrand('Matin Kim');
          onNavigateTab('shop');
        }}
        onCopyCoupon={onCopyPromo}
      />

      {/* Snap Lookbook Teaser Banner on Home (Nike campaign tile style) */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 py-6">
        <div className="bg-[#111111] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#39393b] rounded-none">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono tracking-widest text-[#9e9ea0] uppercase flex items-center space-x-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>INTERACTIVE STYLE SNAP</span>
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.9] tracking-tight">
              모델이 착용한 그 옷, 마우스만 대면 바로 확인하세요.
            </h3>
            <p className="text-xs sm:text-sm text-[#cacacb] font-normal leading-relaxed">
              성수동, 한남동 거리의 감각적인 스타일링 컷 위로 마우스 커서를 올리면
              실제 코디된 아우터, 팬츠, 슈즈, 가방의 정보를 실시간으로 확인하고 바로 장바구니에 담을 수 있습니다.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('snap')}
            className="bg-white text-[#111111] px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#f5f5f5] transition-all flex items-center space-x-2 shrink-0 cursor-pointer active:scale-95"
          >
            <span>SNAP 룩북 둘러보기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
