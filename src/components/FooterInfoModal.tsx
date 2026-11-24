import React from 'react';
import { X, ArrowRight, Briefcase, Shield, FileText, Users, CreditCard, Store } from 'lucide-react';

export type FooterModalType =
  | 'brands'
  | 'careers'
  | 'privacy'
  | 'terms'
  | 'youth'
  | 'efinance'
  | null;

interface FooterInfoModalProps {
  activeModal: FooterModalType;
  onChangeModal: (next: FooterModalType) => void;
  onClose: () => void;
  brands: string[];
  onSelectBrand: (brand: string) => void;
  onGoShopAll: () => void;
  onOpenCustomerService: () => void;
}

const POLICY_TABS: { id: 'privacy' | 'terms' | 'youth' | 'efinance'; label: string }[] = [
  { id: 'privacy', label: '개인정보처리방침' },
  { id: 'terms', label: '이용약관' },
  { id: 'youth', label: '청소년 보호정책' },
  { id: 'efinance', label: '전자금융거래 약관' },
];

const CAREER_ROLES = [
  {
    team: 'Editorial & Merchandising',
    title: '컨템포러리 브랜드 큐레이션 MD',
    type: '정규직 · 경력 2년 이상',
    desc: '국내외 감각적인 디자이너 브랜드 발굴, 시즌 기획전 및 단독 PT 프레젠테이션 총괄',
  },
  {
    team: 'Product Engineering',
    title: '프론트엔드 엔지니어 (React / TypeScript)',
    type: '정규직 · 신입/경력',
    desc: 'MONO:DAY 웹 플랫폼 UI/UX 고도화 및 실시간 커머스·MY PAGE 경험 설계',
  },
  {
    team: 'Brand Partnership',
    title: '브랜드 파트너십 & 룩북 디렉터',
    type: '정규직 · 경력 3년 이상',
    desc: '입점 브랜드 온보딩, 에디토리얼 화보 및 SNAP 룩북 콘텐츠 제작 리딩',
  },
  {
    team: 'Customer Experience',
    title: '고객경험(CX) 스페셜리스트',
    type: '정규직 · 신입/경력',
    desc: '주문·배송·취소/반품 통합 케어 및 1:1 고객센터 운영 품질 관리',
  },
];

export const FooterInfoModal: React.FC<FooterInfoModalProps> = ({
  activeModal,
  onChangeModal,
  onClose,
  brands,
  onSelectBrand,
  onGoShopAll,
  onOpenCustomerService,
}) => {
  if (!activeModal) return null;

  const isPolicy =
    activeModal === 'privacy' ||
    activeModal === 'terms' ||
    activeModal === 'youth' ||
    activeModal === 'efinance';

  const getHeaderTitle = () => {
    switch (activeModal) {
      case 'brands':
        return 'PARTNER BRANDS (입점 브랜드)';
      case 'careers':
        return 'CAREERS AT MONO:DAY (인재 채용)';
      case 'privacy':
        return '개인정보처리방침';
      case 'terms':
        return '이용약관';
      case 'youth':
        return '청소년 보호정책';
      case 'efinance':
        return '전자금융거래 약관';
      default:
        return '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="bg-white w-full max-w-3xl border border-[#cacacb] shadow-2xl overflow-hidden relative my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e5e5e5] flex items-center justify-between bg-white">
          <h3 className="text-sm sm:text-base font-semibold text-[#111111] tracking-tight">
            {getHeaderTitle()}
          </h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Policy Switcher Tabs when viewing policies */}
        {isPolicy && (
          <div className="px-6 py-3 bg-[#f5f5f5] border-b border-[#e5e5e5] flex items-center gap-2 overflow-x-auto">
            {POLICY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onChangeModal(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeModal === tab.id
                    ? 'bg-[#111111] text-white'
                    : 'bg-white text-[#707072] border border-[#e5e5e5] hover:text-[#111111]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs text-[#111111] leading-relaxed">
          {/* 1. PARTNER BRANDS */}
          {activeModal === 'brands' && (
            <div className="space-y-5">
              <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-[#111111] font-semibold">
                    <Store className="w-4 h-4" />
                    <span>MONO:DAY 공식 입점 브랜드 ({brands.length})</span>
                  </div>
                  <p className="text-[#707072]">
                    원하는 브랜드를 선택하면 해당 브랜드의 전체 큐레이션 상품을 바로 확인하실 수 있습니다.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onGoShopAll();
                  }}
                  className="px-5 py-2.5 bg-[#111111] hover:bg-black text-white rounded-full text-xs font-medium shrink-0 inline-flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>전체 상품 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => {
                      onClose();
                      onSelectBrand(brand);
                    }}
                    className="p-3 border border-[#e5e5e5] hover:border-[#111111] hover:bg-[#111111] hover:text-white text-left transition-colors cursor-pointer flex items-center justify-between group"
                  >
                    <span className="font-medium truncate pr-2">{brand}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 shrink-0 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. CAREERS */}
          {activeModal === 'careers' && (
            <div className="space-y-6">
              <div className="bg-[#111111] text-white p-6 space-y-2">
                <div className="flex items-center space-x-2 text-[#9e9ea0] text-[11px] font-mono uppercase tracking-wider">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>JOIN OUR TEAM</span>
                </div>
                <h4 className="font-display text-3xl tracking-tight uppercase">
                  CURATE THE NEXT STANDARD
                </h4>
                <p className="text-[#cacacb]">
                  주식회사 모노데이(대표이사: 이재영 · 근무지: 한신대학교)와 함께 브랜드의 이야기와 취향을 연결할 동료를 찾습니다.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-semibold text-[#111111] uppercase tracking-wider text-[11px]">
                  현재 모집 중인 포지션
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CAREER_ROLES.map((role) => (
                    <div
                      key={role.title}
                      className="border border-[#e5e5e5] bg-[#f5f5f5]/50 p-4 space-y-2"
                    >
                      <span className="text-[10px] font-mono text-[#707072] uppercase">
                        {role.team}
                      </span>
                      <h6 className="text-sm font-semibold text-[#111111]">{role.title}</h6>
                      <p className="text-[11px] text-[#007d48] font-medium">{role.type}</p>
                      <p className="text-[#707072]">{role.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <p className="font-semibold text-[#111111]">채용 및 입점 제휴 문의</p>
                  <p className="text-[#707072]">
                    대표전화: <span className="font-mono text-[#111111]">111-11-11111</span> · 주소: 한신대학교
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenCustomerService();
                  }}
                  className="px-5 py-2.5 bg-[#111111] hover:bg-black text-white rounded-full font-medium inline-flex items-center space-x-1.5 cursor-pointer shrink-0"
                >
                  <span>1:1 문의로 지원 문의하기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 3. PRIVACY POLICY */}
          {activeModal === 'privacy' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#111111] font-semibold border-b border-[#e5e5e5] pb-3">
                <Shield className="w-4 h-4" />
                <span>주식회사 모노데이 개인정보처리방침 (시행일: 2026.01.01)</span>
              </div>
              <div className="space-y-3 text-[#707072]">
                <div>
                  <h5 className="font-semibold text-[#111111] mb-1">1. 수집하는 개인정보 항목 및 목적</h5>
                  <p>
                    주식회사 모노데이(이하 &apos;회사&apos;)는 회원 가입, 상품 주문 및 배송, 쿠폰 발급, 구매 후기 관리, 1:1 고객센터 응대를 위해 최소한의 개인정보(이름, 이메일, 연락처, 배송지 주소, 주문내역)를 수집·이용합니다.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#111111] mb-1">2. 개인정보의 보유 및 이용 기간</h5>
                  <p>
                    회원 탈퇴 시 지체 없이 파기하는 것을 원칙으로 하되, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법령에 따라 계약·청약철회 기록은 5년, 소비자 불만 및 분쟁처리 기록은 3년간 안전하게 보관합니다.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#111111] mb-1">3. 개인정보의 안전성 확보 조치</h5>
                  <p>
                    회사는 인증된 사용자 본인 외 타인의 열람을 차단하는 보안 규칙과 암호화 통신(HTTPS)을 적용하여 회원의 개인정보를 엄격히 격리·보호합니다.
                  </p>
                </div>
                <div className="bg-[#f5f5f5] p-4 border border-[#e5e5e5] text-[#111111]">
                  <p className="font-semibold mb-1">개인정보관리책임자 및 고충처리 부서</p>
                  <p className="text-[#707072]">
                    책임자: 이재영 · 주소: 한신대학교 · 고객센터: 111-11-11111
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 4. TERMS OF SERVICE */}
          {activeModal === 'terms' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#111111] font-semibold border-b border-[#e5e5e5] pb-3">
                <FileText className="w-4 h-4" />
                <span>MONO:DAY 서비스 이용약관</span>
              </div>
              <div className="space-y-3 text-[#707072]">
                <div>
                  <h5 className="font-semibold text-[#111111] mb-1">제1조 (목적)</h5>
                  <p>
                    본 약관은 주식회사 모노데이(사업자등록번호: 111-11-11111, 주소: 한신대학교)가 운영하는 MONO:DAY 플랫폼에서 제공하는 전자상거래 및 에디토리얼 큐레이션 서비스의 이용 조건 및 절차를 규정함을 목적으로 합니다.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#111111] mb-1">제2조 (회원가입 및 계정 관리)</h5>
                  <p>
                    이용자는 본 약관 및 개인정보처리방침에 동의한 후 Google 계정 인증 및 기본 회원정보를 등록함으로써 회원 자격을 취득하며, 가입 즉시 제공되는 웰컴 쿠폰 및 전 상품 무료배송 혜택을 이용할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#111111] mb-1">제3조 (청약철회 및 교환·반품)</h5>
                  <p>
                    회원은 상품 수령일로부터 7일 이내에 MY PAGE의 주문내역을 통해 주문 취소 또는 반품을 신청할 수 있습니다. 단, 상품 택 제거, 착용 흔적, 오염 등 재판매가 곤란한 경우 반품이 제한될 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5. YOUTH PROTECTION POLICY */}
          {activeModal === 'youth' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#111111] font-semibold border-b border-[#e5e5e5] pb-3">
                <Users className="w-4 h-4" />
                <span>청소년 보호정책</span>
              </div>
              <div className="space-y-3 text-[#707072]">
                <p>
                  주식회사 모노데이는 청소년이 건전한 인격체로 성장할 수 있도록 유해 정보로부터 청소년을 보호하기 위해 정보통신망 이용촉진 및 정보보호 등에 관한 법률에 근거하여 본 청소년 보호정책을 수립·시행하고 있습니다.
                </p>
                <div>
                  <h5 className="font-semibold text-[#111111] mb-1">1. 유해 정보 차단 및 모니터링</h5>
                  <p>
                    MONO:DAY 내 등록되는 상품 설명, SNAP 룩북 및 구매 후기 게시물에 대해 유해·부적절 콘텐츠가 노출되지 않도록 상시 점검합니다.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#111111] mb-1">2. 청소년 보호 책임자</h5>
                  <p>
                    성명: 이재영 · 연락처: 111-11-11111 · 주소: 한신대학교
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 6. E-FINANCE TERMS */}
          {activeModal === 'efinance' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#111111] font-semibold border-b border-[#e5e5e5] pb-3">
                <CreditCard className="w-4 h-4" />
                <span>전자금융거래 이용약관</span>
              </div>
              <div className="space-y-3 text-[#707072]">
                <div>
                  <h5 className="font-semibold text-[#111111] mb-1">제1조 (적용 범위)</h5>
                  <p>
                    본 약관은 회사가 제공하는 신용/체크카드, 네이버페이, 카카오페이, 무통장입금 등 전자지급결제대행 및 결제수단 이용과 관련한 권리·의무 사항에 적용됩니다.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#111111] mb-1">제2조 (거래 내역 확인 및 정정)</h5>
                  <p>
                    회원은 MY PAGE의 &apos;주문내역&apos; 및 &apos;취소/반품내역&apos;을 통해 결제 금액, 쿠폰 할인 내역 및 환불 예정 금액을 언제든지 열람할 수 있으며, 오류 발견 시 고객센터(111-11-11111)를 통해 정정을 요구할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="px-6 py-4 border-t border-[#e5e5e5] bg-[#f5f5f5] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#111111] hover:bg-black text-white rounded-full text-xs font-medium cursor-pointer"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
