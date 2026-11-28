import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  onExploreShop: () => void;
  onViewPT: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onExploreShop, onViewPT }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 0,
      tag: 'MONO:DAY EDITORIAL ISSUE',
      displayTitle: 'QUIET LUXURY',
      koreanTitle: '절제된 취향의 발견',
      subtitle: '감각적인 브랜드 큐레이션. 단순한 옷이 아닌 당신의 일상을 채우는 서사적 스타일 제안.',
      btnText: 'EXPLORE SHOP',
      action: onExploreShop,
      image: '/src/assets/images/hero_quiet_luxury_1793684667332.jpg',
      alt: 'Quiet luxury fashion editorial camel coat'
    },
    {
      id: 1,
      tag: 'SPECIAL PRESENTATION',
      displayTitle: 'DUNST & MARDI',
      koreanTitle: '26FW Exclusive Launching',
      subtitle: 'MONO:DAY 단독 혜택으로 만나는 이번 시즌 프리미엄 아카이브 라인업.',
      btnText: 'VIEW PT ISSUE',
      action: onViewPT,
      image: '/src/assets/images/hero_spring_collection_1793684668384.jpg',
      alt: 'Dunst and Mardi 26FW exclusive presentation'
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] min-h-[580px] max-h-[860px] overflow-hidden bg-[#111111] text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Full-bleed Image */}
            <img
              src={slide.image}
              alt={slide.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-100 transition-transform duration-7000 ease-out"
              style={{ transform: isActive ? 'scale(1.02)' : 'scale(1)' }}
            />
            {/* Measured Scrim for maximum typographic contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />

            {/* Campaign Lockup (Nike display-campaign: 96px uppercase Futura / Bebas Neue burned into photography) */}
            <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 sm:px-12 flex flex-col justify-end pb-16 sm:pb-20">
              <div className="max-w-3xl space-y-1.5">
                <span className="text-xs uppercase tracking-widest font-medium text-white/90 block">
                  {slide.tag}
                </span>

                {/* Towering Display Campaign Headline */}
                <div className="space-y-0">
                  <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-[0.88] tracking-tight text-white uppercase block">
                    {slide.displayTitle}
                  </h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-tight text-white/95 -mt-0.5">
                    {slide.koreanTitle}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base font-normal text-white/80 whitespace-nowrap leading-snug pt-0 pb-1">
                  {slide.subtitle}
                </p>

                {/* Nike button-outline-on-image: white pill anchored at bottom-left */}
                <div>
                  <button
                    onClick={slide.action}
                    className="inline-flex items-center space-x-2.5 bg-white text-[#111111] px-7 py-3.5 rounded-full text-sm font-medium tracking-normal hover:bg-[#f5f5f5] transition-all duration-200 active:scale-95 shadow-sm cursor-pointer group"
                  >
                    <span>{slide.btnText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Controls (Nike button-icon-circular) */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center space-x-3">
        {/* Next/Prev buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white text-[#111111] hover:bg-[#f5f5f5] transition-all flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white text-[#111111] hover:bg-[#f5f5f5] transition-all flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-xs font-mono tracking-wider text-white/90 pl-2">
          <span className="font-bold">0{currentSlide + 1}</span>
          <span className="text-white/50"> / 0{slides.length}</span>
        </div>
      </div>
    </section>
  );
};
