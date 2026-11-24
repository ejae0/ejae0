import React from 'react';
import { ArrowRight, Play, Gift, Calendar, Check } from 'lucide-react';

interface BrandPTSectionProps {
  onOpenPTModal: () => void;
  onExplorePTCollection: () => void;
  onClaimGiftCoupon: (code: string) => void;
  giftStatus?: 'unclaimed' | 'available' | 'applied' | 'used';
}

export const BrandPTSection: React.FC<BrandPTSectionProps> = ({
  onOpenPTModal,
  onExplorePTCollection,
  onClaimGiftCoupon,
  giftStatus = 'unclaimed'
}) => {
  return (
    <section id="pt" className="w-full bg-[#111111] text-white py-16 sm:py-20 my-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Subhead Tag */}
        <div className="flex items-center space-x-2.5 mb-4">
          <span className="text-xs tracking-[0.25em] font-medium text-[#9e9ea0] uppercase">
            MONO:DAY BRAND PT ISSUE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Editorial Story & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#9e9ea0] uppercase block">
                Presentation Issue Vol.12
              </span>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight mt-1 leading-[0.9] text-white">
                MATIN KIM
              </h2>
              <p className="text-lg font-medium text-[#cacacb] mt-1">
                Rough &amp; Chic Culture
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#cacacb] leading-relaxed font-normal break-keep">
              자유롭고 러프한 감각을 시그니처 메탈 로고와 스트릿 실루엣으로 정제해내는 마틴킴의 24SS 라이브 프레젠테이션.
              오직 MONO:DAY에서만 단독 15% 혜택 및 한정 기프트 증정 프로모션으로 제시됩니다.
            </p>

            {/* Exclusive Benefit Box (Nike neutral dark container) */}
            <div className="bg-[#1e1e20] border border-[#39393b] p-5 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#9e9ea0] flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#9e9ea0]" />
                  <span>PROMOTION PERIOD</span>
                </span>
                <span className="font-mono text-white">2026.10.27 - 11.10</span>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-[#39393b] pt-2.5">
                <span className="text-[#9e9ea0] flex items-center space-x-1.5">
                  <Gift className="w-3.5 h-3.5 text-white" />
                  <span>EXCLUSIVE BENEFIT</span>
                </span>
                <span className="text-white font-medium">15% 단독 쿠폰 + 에코백 기프트</span>
              </div>
            </div>

            {/* Action Buttons (Nike pill CTA hierarchy) */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Primary: White Pill button */}
              <button
                onClick={onExplorePTCollection}
                className="inline-flex items-center space-x-2.5 bg-white text-[#111111] px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#f5f5f5] transition-all cursor-pointer active:scale-95"
              >
                <span>PT 컬렉션 바로가기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              {/* Secondary: Gift Coupon Claim Pill */}
              <button
                onClick={() => onClaimGiftCoupon('MATINKIM15')}
                disabled={giftStatus === 'used'}
                className={`inline-flex items-center space-x-2 px-5 py-3.5 rounded-full text-xs font-medium tracking-wider transition-colors cursor-pointer border ${
                  giftStatus === 'applied'
                    ? 'bg-white text-[#111111] border-white'
                    : giftStatus === 'used'
                    ? 'bg-[#1e1e20] text-[#707072] border-[#39393b] cursor-default'
                    : 'bg-[#252528] hover:bg-[#39393b] text-white border-[#39393b]'
                }`}
              >
                {giftStatus === 'applied' ? (
                  <Check className="w-4 h-4 text-[#007d48]" />
                ) : (
                  <Gift className="w-4 h-4 text-white" />
                )}
                <span>
                  {giftStatus === 'applied'
                    ? '15% 기프트 쿠폰 적용됨'
                    : giftStatus === 'available'
                    ? '보유 기프트 쿠폰 적용'
                    : giftStatus === 'used'
                    ? '기프트 쿠폰 사용완료'
                    : '15% 기프트 쿠폰 받기'}
                </span>
              </button>
            </div>
          </div>

          {/* Right: Video / Visual Teaser Card (Nike flat full-bleed video canvas) */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-[#39393b]">
            <div className="w-full h-[380px] sm:h-[440px] relative bg-[#111111]">
              <img
                src="/src/assets/images/pt_matin_kim_campaign_1793684668781.jpg"
                alt="Matin Kim Brand PT Campaign Visual"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />

              {/* Play Button Trigger (Nike button-icon-circular) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={onOpenPTModal}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#111111] flex items-center justify-center hover:scale-105 hover:bg-[#f5f5f5] transition-all duration-200 shadow-xl cursor-pointer"
                  aria-label="Play presentation video"
                >
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-current" />
                </button>
                <span className="mt-4 text-xs font-medium tracking-wider text-white bg-black/75 px-4 py-1.5 rounded-full">
                  WATCH 24SS BRAND SHOWCASE FILM (01:45)
                </span>
              </div>

              {/* Corner badge */}
              <div className="absolute bottom-4 left-6 text-xs text-[#cacacb] font-mono">
                MATIN KIM × MONO:DAY SPECIAL EDITION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
