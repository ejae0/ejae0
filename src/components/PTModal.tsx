import React from 'react';
import { X, Play, Gift, Check, ArrowRight, Sparkles } from 'lucide-react';

interface PTModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreCollection: () => void;
  onClaimGiftCoupon: (code: string) => void;
  giftStatus?: 'unclaimed' | 'available' | 'applied' | 'used';
}

export const PTModal: React.FC<PTModalProps> = ({
  isOpen,
  onClose,
  onExploreCollection,
  onClaimGiftCoupon,
  giftStatus = 'unclaimed'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="bg-[#111111] text-white w-full max-w-4xl rounded-none shadow-2xl overflow-hidden relative my-auto border border-[#39393b] max-h-[90vh] flex flex-col">
        {/* Close Button (Nike button-icon-circular) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white text-[#111111] hover:bg-[#f5f5f5] transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-[#39393b] flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 text-[#cacacb] text-xs font-mono mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MONO:DAY BRAND PRESENTATION PT #12</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-white tracking-tight leading-[0.9]">
              MATIN KIM : 24SS Showcase Film
            </h2>
          </div>
        </div>

        {/* Video / Editorial Canvas */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          <div className="relative aspect-video w-full overflow-hidden bg-black border border-[#39393b] group rounded-none">
            <img
              src="/src/assets/images/pt_matin_kim_campaign_1793684668781.jpg"
              alt="Matin Kim Film Player"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/35" />
            
            {/* Video Control Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-xl mb-3 hover:scale-105 transition-transform cursor-pointer">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" />
              </div>
              <p className="text-xs font-mono tracking-wider text-white bg-black/75 px-3 py-1 rounded-full">
                LIVE PT FILM · 01:45 STREAMING
              </p>
            </div>

            {/* Video progress mock bar */}
            <div className="absolute bottom-3 inset-x-4 flex items-center space-x-3 text-[11px] font-mono text-[#cacacb]">
              <span>00:42</span>
              <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-white" />
              </div>
              <span>01:45</span>
            </div>
          </div>

          {/* PT Editorial Article Content */}
          <div className="space-y-3 text-xs sm:text-sm text-[#cacacb] font-normal leading-relaxed">
            <h4 className="text-base font-semibold text-white tracking-wide">
              "자연스럽고 편안하지만, 결코 평범하지 않은 실루엣"
            </h4>
            <p>
              이번 24SS 프레젠테이션에서 마틴킴은 브랜드 고유의 인더스트리얼 메탈 감성을 가벼운 스프링 패브릭과 접목했습니다.
              해체된 라이더 레더 라펠, 정밀하게 레이저 각인된 메탈 버클, 그리고 일상의 편안함을 보장하는 오버핏 구조가 어우러집니다.
            </p>
          </div>

          {/* Exclusive Gift Coupon Banner inside modal */}
          <div className="bg-[#1e1e20] border border-[#39393b] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-none">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9e9ea0] font-medium block mb-1">
                LIMITED PT GIFT COUPON
              </span>
              <h5 className="text-sm font-semibold text-white">마틴킴 24SS 전 상품 15% 추가 할인 기프트</h5>
              <p className="text-xs text-[#cacacb] mt-0.5">
                기프트 쿠폰함으로 즉시 지급 · 장바구니 및 결제 시 선택 적용
              </p>
            </div>
            <button
              onClick={() => onClaimGiftCoupon('MATINKIM15')}
              disabled={giftStatus === 'used'}
              className={`text-xs font-medium px-5 py-2.5 rounded-full tracking-wider uppercase transition-all flex items-center space-x-2 shrink-0 cursor-pointer active:scale-95 ${
                giftStatus === 'used'
                  ? 'bg-[#39393b] text-[#9e9ea0] cursor-default'
                  : 'bg-white text-[#111111] hover:bg-[#f5f5f5]'
              }`}
            >
              {giftStatus === 'applied' ? (
                <Check className="w-3.5 h-3.5 text-[#007d48]" />
              ) : (
                <Gift className="w-3.5 h-3.5 text-[#111111]" />
              )}
              <span>
                {giftStatus === 'applied'
                  ? '기프트 적용됨'
                  : giftStatus === 'available'
                  ? '보유 기프트 적용'
                  : giftStatus === 'used'
                  ? '사용 완료'
                  : '기프트 쿠폰 받기'}
              </span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#39393b] bg-[#111111] flex justify-between items-center">
          <span className="text-xs text-[#9e9ea0] font-mono hidden sm:inline">
            PROMOTION PERIOD: 2026.10.27 - 11.10
          </span>
          <button
            onClick={() => {
              onClose();
              onExploreCollection();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white text-[#111111] px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#f5f5f5] transition-all cursor-pointer active:scale-95 shadow-sm"
          >
            <span>마틴킴 PT 컬렉션 쇼핑하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
