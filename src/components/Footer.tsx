import React, { useState } from 'react';
import { FooterInfoModal, FooterModalType } from './FooterInfoModal';

interface FooterProps {
  brands?: string[];
  onGoHome?: () => void;
  onGoBrandStory?: () => void;
  onGoPT?: () => void;
  onSelectBrand?: (brand: string) => void;
  onGoShopAll?: () => void;
  onOpenCustomerService?: () => void;
  onShowToast?: (text: string, type?: 'info' | 'success' | 'heart' | 'bag') => void;
}

export const Footer: React.FC<FooterProps> = ({
  brands = [],
  onGoHome,
  onGoBrandStory,
  onGoPT,
  onSelectBrand,
  onGoShopAll,
  onOpenCustomerService,
  onShowToast,
}) => {
  const [activeModal, setActiveModal] = useState<FooterModalType>(null);

  const handleSocialClick = (channel: string) => {
    if (onShowToast) {
      onShowToast(`MONO:DAY 공식 ${channel} (@monoday_official) 채널을 준비 중입니다.`, 'info');
    }
  };

  return (
    <>
      <footer className="bg-white text-[#707072] border-t border-[#cacacb] pt-14 pb-12 mt-16 select-none">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#e5e5e5]">
            {/* Brand Info */}
            <div className="md:col-span-5 space-y-3">
              <button
                type="button"
                onClick={() => {
                  if (onGoHome) {
                    onGoHome();
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="text-2xl font-bold tracking-tighter uppercase block text-[#111111] hover:opacity-80 transition-opacity cursor-pointer text-left"
              >
                MONO:DAY
              </button>
              <p className="text-xs text-[#707072] leading-relaxed font-normal max-w-md break-keep">
                MONO:DAY는 독보적인 라이프스타일 감각을 바탕으로, 브랜드의 취향과
                <br />
                이야기를 제안하는 에디토리얼 커머스 플랫폼입니다.
              </p>
              <div className="pt-2 text-[11px] text-[#9e9ea0] space-y-1 font-normal">
                <p>주식회사 모노데이 | 대표이사: 이재영 | 사업자등록번호: 111-11-11111</p>
                <p>통신판매업신고: 2026-경기오산-01111호 | 개인정보관리책임자: 이재영</p>
                <p>주소: 한신대학교</p>
              </div>
            </div>

            {/* Customer Service */}
            <div className="md:col-span-3 space-y-2.5">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#111111]">
                Customer Center
              </h4>
              <p className="text-xl font-mono font-bold text-[#111111] tracking-tight">111-11-11111</p>
              <p className="text-xs text-[#707072] font-normal leading-relaxed">
                운영시간 : 평일 09:00 - 18:00<br />
                (점심시간 12:00 - 13:00 / 주말 및 공휴일 휴무)
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenCustomerService) {
                      onOpenCustomerService();
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-xs text-[#111111] hover:text-[#707072] underline underline-offset-4 cursor-pointer"
                >
                  1:1 문의하기 (24시간 접수)
                </button>
              </div>
            </div>

            {/* About Links */}
            <div className="md:col-span-2 space-y-2.5">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#111111]">
                About MONO:DAY
              </h4>
              <ul className="text-xs text-[#707072] space-y-2 font-normal">
                <li>
                  <button
                    type="button"
                    onClick={() => onGoBrandStory?.()}
                    className="hover:text-[#111111] transition-colors cursor-pointer text-left"
                  >
                    브랜드 스토리
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onGoPT?.()}
                    className="hover:text-[#111111] transition-colors cursor-pointer text-left"
                  >
                    PT 프레젠테이션
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('brands')}
                    className="hover:text-[#111111] transition-colors cursor-pointer text-left"
                  >
                    입점 브랜드
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('careers')}
                    className="hover:text-[#111111] transition-colors cursor-pointer text-left"
                  >
                    인재 채용
                  </button>
                </li>
              </ul>
            </div>

            {/* Terms & Privacy */}
            <div className="md:col-span-2 space-y-2.5">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#111111]">
                Terms &amp; Policies
              </h4>
              <ul className="text-xs text-[#707072] space-y-2 font-normal">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('privacy')}
                    className="hover:text-[#111111] font-medium transition-colors text-[#111111] cursor-pointer text-left"
                  >
                    개인정보처리방침
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('terms')}
                    className="hover:text-[#111111] transition-colors cursor-pointer text-left"
                  >
                    이용약관
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('youth')}
                    className="hover:text-[#111111] transition-colors cursor-pointer text-left"
                  >
                    청소년 보호정책
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('efinance')}
                    className="hover:text-[#111111] transition-colors cursor-pointer text-left"
                  >
                    전자금융거래 약관
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Fine Print Row (Nike utility-xs #707072) */}
          <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between text-[11px] text-[#707072] font-normal space-y-2 md:space-y-0">
            <p>© 2026 MONO:DAY Inc. All rights reserved. Editorial Commerce Platform.</p>
            <div className="flex space-x-6 text-[11px]">
              <button
                type="button"
                onClick={() => handleSocialClick('INSTAGRAM')}
                className="hover:text-[#111111] cursor-pointer transition-colors"
              >
                INSTAGRAM
              </button>
              <button
                type="button"
                onClick={() => handleSocialClick('YOUTUBE')}
                className="hover:text-[#111111] cursor-pointer transition-colors"
              >
                YOUTUBE
              </button>
              <button
                type="button"
                onClick={() => handleSocialClick('PINTEREST')}
                className="hover:text-[#111111] cursor-pointer transition-colors"
              >
                PINTEREST
              </button>
            </div>
          </div>
        </div>
      </footer>

      <FooterInfoModal
        activeModal={activeModal}
        onChangeModal={setActiveModal}
        onClose={() => setActiveModal(null)}
        brands={brands}
        onSelectBrand={(brand) => onSelectBrand?.(brand)}
        onGoShopAll={() => onGoShopAll?.()}
        onOpenCustomerService={() => onOpenCustomerService?.()}
      />
    </>
  );
};
