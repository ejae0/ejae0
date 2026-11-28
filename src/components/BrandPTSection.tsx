import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, Gift, Check, Maximize2 } from 'lucide-react';

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
  const [isPlaying, setIsPlaying] = useState(true);
  const [elapsedSec, setElapsedSec] = useState(42);
  const totalSec = 105; // 01:45

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setElapsedSec((prev) => (prev + 1 > totalSec ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const formatTime = (sec: number) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const progressPercent = Math.round((elapsedSec / totalSec) * 100);

  return (
    <section
      id="pt"
      className="w-full bg-[#111111] text-white my-12 relative overflow-hidden h-[440px] sm:h-[520px] lg:h-[600px] select-none"
    >
      {/* Full-bleed Widescreen Video Canvas */}
      <img
        src="/src/assets/images/pt_matin_kim_campaign_1793684668781.jpg"
        alt="Matin Kim 26FW Showcase Film"
        referrerPolicy="no-referrer"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
          isPlaying ? 'scale-105 opacity-90' : 'scale-100 opacity-75'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />

      {/* Inner Full-Size Overlay Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto h-full px-6 sm:px-8 py-6 sm:py-8 flex flex-col justify-between">
        {/* Top Video Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-[#cacacb]">
          <div className="flex items-center space-x-2.5">
            <span
              className={`w-2 h-2 rounded-full ${
                isPlaying ? 'bg-[#d30005] animate-pulse' : 'bg-[#707072]'
              }`}
            />
            <span className="tracking-[0.2em] uppercase text-white font-medium">
              MONO:DAY BRAND PT FILM · VOL.12
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline bg-black/60 border border-white/20 px-3 py-1 rounded-full text-[11px]">
              {formatTime(elapsedSec)} / {formatTime(totalSec)}
            </span>
            <button
              type="button"
              onClick={onOpenPTModal}
              className="inline-flex items-center space-x-1.5 bg-black/60 hover:bg-black/90 border border-white/25 text-white px-3 py-1 rounded-full text-[11px] transition-colors cursor-pointer"
              title="전체 화면으로 보기"
            >
              <Maximize2 className="w-3 h-3" />
              <span>FULL FILM</span>
            </button>
          </div>
        </div>

        {/* Center Play / Pause Trigger */}
        <div className="flex flex-col items-center justify-center text-center my-auto">
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-[#111111] flex items-center justify-center hover:scale-105 hover:bg-white transition-all duration-200 shadow-2xl cursor-pointer"
            aria-label={isPlaying ? 'Pause presentation video' : 'Play presentation video'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
            ) : (
              <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-current" />
            )}
          </button>
          <span className="mt-3 text-[11px] font-mono tracking-widest text-white/90 bg-black/60 px-4 py-1 rounded-full uppercase">
            {isPlaying ? 'NOW STREAMING · MATIN KIM 26FW' : 'PAUSED · CLICK TO RESUME'}
          </span>
        </div>

        {/* Bottom Film Info & Actions + Progress Bar */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-widest text-[#cacacb] uppercase block">
                MATIN KIM × MONO:DAY · 2026.10.27 - 11.10
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[0.9] text-white">
                MATIN KIM : 26FW SHOWCASE FILM
              </h2>
              <p className="text-xs sm:text-sm text-[#cacacb] font-normal break-keep">
                Rough &amp; Chic Culture — 단독 15% 기프트 쿠폰 &amp; 한정 에코백 증정 프로모션
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={onExplorePTCollection}
                className="inline-flex items-center space-x-2 bg-white text-[#111111] px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#f5f5f5] transition-all cursor-pointer active:scale-95"
              >
                <span>PT 컬렉션 바로가기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => onClaimGiftCoupon('MATINKIM15')}
                disabled={giftStatus === 'used'}
                className={`inline-flex items-center space-x-2 px-5 py-3 rounded-full text-xs font-medium tracking-wider transition-colors cursor-pointer border ${
                  giftStatus === 'applied'
                    ? 'bg-white text-[#111111] border-white'
                    : giftStatus === 'used'
                    ? 'bg-black/60 text-[#9e9ea0] border-white/20 cursor-default'
                    : 'bg-black/65 hover:bg-black/85 text-white border-white/30'
                }`}
              >
                {giftStatus === 'applied' ? (
                  <Check className="w-3.5 h-3.5 text-[#007d48]" />
                ) : (
                  <Gift className="w-3.5 h-3.5 text-white" />
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

          {/* Interactive Video Timeline Bar */}
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              setElapsedSec(Math.round(ratio * totalSec));
            }}
            className="w-full h-1.5 bg-white/25 rounded-full overflow-hidden cursor-pointer group"
            title="재생 위치 이동"
          >
            <div
              className="h-full bg-white transition-all duration-300 group-hover:bg-[#d30005]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

