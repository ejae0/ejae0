import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  LogIn,
  UserPlus,
  ArrowRight,
  AlertCircle,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface MemberLoginModalProps {
  isOpen: boolean;
  reasonMessage: string;
  onClose: () => void;
  onSuccess: () => void;
  onOpenMyPage?: () => void;
  onShowToast: (text: string, type?: 'info' | 'success' | 'heart' | 'bag') => void;
}

export const MemberLoginModal: React.FC<MemberLoginModalProps> = ({
  isOpen,
  reasonMessage,
  onClose,
  onSuccess,
  onOpenMyPage,
  onShowToast,
}) => {
  const {
    user,
    isAuthenticated,
    needsRegistration,
    instantLogin,
    instantSignup,
    signInWithGoogle,
    completeRegistration,
  } = useAuth();

  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const [regName, setRegName] = useState('이재영');
  const [regPhone, setRegPhone] = useState('111-11-11111');
  const [regAddress, setRegAddress] = useState('한신대학교');
  const [regBodySpecs, setRegBodySpecs] = useState('172cm · 65kg');
  const [regAgreed, setRegAgreed] = useState(true);
  const [regSubmitting, setRegSubmitting] = useState(false);

  const onSuccessRef = useRef(onSuccess);
  onSuccessRef.current = onSuccess;

  const wasAuthenticatedRef = useRef(isAuthenticated);

  useEffect(() => {
    if (isOpen) {
      setAuthError('');
      setAuthLoading(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (user && !regName) {
      setRegName(user.displayName || '이재영');
    }
  }, [user, regName]);

  useEffect(() => {
    if (isOpen && isAuthenticated && !wasAuthenticatedRef.current) {
      onSuccessRef.current();
    }
    wasAuthenticatedRef.current = isAuthenticated;
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  const handleInstantAuth = () => {
    setAuthError('');
    if (authMode === 'login') {
      instantLogin();
      onShowToast('MONO:DAY 회원으로 로그인되었습니다.', 'success');
    } else {
      instantSignup({
        name: regName || '이재영',
        phone: regPhone || '111-11-11111',
        address: regAddress || '한신대학교',
        bodySpecs: regBodySpecs || '172cm · 65kg',
      });
      onShowToast('회원가입이 완료되었습니다! 웰컴 쿠폰 2종이 발급되었습니다.', 'success');
    }
  };

  const handleGoogleAuth = async () => {
    setAuthError('');
    setAuthLoading(true);
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
      setAuthError('로그인 팝업이 닫혔거나 인증에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleCompleteRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regAgreed) {
      onShowToast('이용약관 및 개인정보처리방침에 동의해 주세요.', 'info');
      return;
    }
    setRegSubmitting(true);
    try {
      await completeRegistration({
        name: regName || '이재영',
        phone: regPhone || '111-11-11111',
        address: regAddress || '한신대학교',
        bodySpecs: regBodySpecs,
        agreedTerms: regAgreed,
      });
      onShowToast('회원가입이 완료되었습니다! 웰컴 쿠폰 2종이 발급되었습니다.', 'success');
    } catch (err) {
      console.error(err);
      setAuthError('회원가입 저장 중 오류가 발생했습니다.');
    } finally {
      setRegSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="bg-white w-full max-w-md rounded-none shadow-2xl border border-[#cacacb] overflow-hidden relative">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] bg-[#f5f5f5]">
          <div className="flex items-center space-x-2.5 text-[#111111]">
            <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#111111] leading-tight">
                MONO:DAY 회원 로그인
              </h3>
              <p className="text-[11px] text-[#707072] uppercase tracking-wider">
                MEMBER LOGIN REQUIRED
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Reason Notice Banner */}
        <div className="bg-[#111111] text-white px-6 py-3 text-xs font-medium flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
          <span>{reasonMessage}</span>
        </div>

        {/* Body */}
        {needsRegistration ? (
          <form onSubmit={handleCompleteRegistration} className="p-6 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-[#111111]">추가 회원 정보 입력</h4>
              <p className="text-xs text-[#707072] mt-1">
                간단한 정보 입력 후 즉시 좋아요·장바구니 기능을 이용하실 수 있습니다.
              </p>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <label className="block text-[11px] text-[#707072] mb-1">이름</label>
                <input
                  type="text"
                  required
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  className="w-full bg-white border border-[#cacacb] rounded-full px-3.5 py-2 focus:outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-[11px] text-[#707072] mb-1">연락처</label>
                <input
                  type="text"
                  required
                  value={regPhone}
                  onChange={(e) => setRegPhone(e.target.value)}
                  className="w-full bg-white border border-[#cacacb] rounded-full px-3.5 py-2 font-mono focus:outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-[11px] text-[#707072] mb-1">기본 배송지</label>
                <input
                  type="text"
                  required
                  value={regAddress}
                  onChange={(e) => setRegAddress(e.target.value)}
                  className="w-full bg-white border border-[#cacacb] rounded-full px-3.5 py-2 focus:outline-none focus:border-[#111111]"
                />
              </div>
              <label className="flex items-center space-x-2 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={regAgreed}
                  onChange={(e) => setRegAgreed(e.target.checked)}
                  className="accent-[#111111]"
                />
                <span className="text-[11px] text-[#707072]">
                  MONO:DAY 이용약관 및 개인정보 수집·이용에 동의합니다.
                </span>
              </label>
            </div>

            {authError && (
              <div className="p-3 bg-[#f5f5f5] border border-[#d30005] text-xs text-[#d30005] flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={regSubmitting}
              className="w-full py-3.5 px-6 bg-[#111111] hover:bg-black text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
            >
              <span>{regSubmitting ? '저장 중...' : '회원가입 완료하기'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="p-6 space-y-5">
            {/* Mode Switcher */}
            <div className="flex border-b border-[#e5e5e5]">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`flex-1 pb-3 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer flex items-center justify-center space-x-1.5 ${
                  authMode === 'login'
                    ? 'border-[#111111] text-[#111111]'
                    : 'border-transparent text-[#707072]'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>로그인</span>
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('signup')}
                className={`flex-1 pb-3 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer flex items-center justify-center space-x-1.5 ${
                  authMode === 'signup'
                    ? 'border-[#111111] text-[#111111]'
                    : 'border-transparent text-[#707072]'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>회원가입</span>
              </button>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-base font-medium text-[#111111]">
                {authMode === 'login'
                  ? '클릭 한 번으로 바로 로그인'
                  : '간편 회원가입 & 웰컴 쿠폰 2종 지급'}
              </h4>
              <p className="text-xs text-[#707072] leading-relaxed">
                {authMode === 'login'
                  ? '로그인 완료 후 방금 선택하신 좋아요/장바구니 작업이 바로 이어집니다.'
                  : '기본 정보 확인 후 즉시 가입되며 좋아요·장바구니 및 웰컴 쿠폰을 바로 사용할 수 있습니다.'}
              </p>
            </div>

            {authMode === 'signup' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div>
                  <label className="block text-[11px] text-[#707072] mb-1">이름</label>
                  <input
                    type="text"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    className="w-full bg-[#f5f5f5] border border-[#cacacb] rounded-full px-3 py-2 focus:outline-none focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#707072] mb-1">연락처</label>
                  <input
                    type="text"
                    value={regPhone}
                    onChange={(e) => setRegPhone(e.target.value)}
                    className="w-full bg-[#f5f5f5] border border-[#cacacb] rounded-full px-3 py-2 font-mono focus:outline-none focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#707072] mb-1">배송지</label>
                  <input
                    type="text"
                    value={regAddress}
                    onChange={(e) => setRegAddress(e.target.value)}
                    className="w-full bg-[#f5f5f5] border border-[#cacacb] rounded-full px-3 py-2 focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>
            )}

            {authError && (
              <div className="p-3 bg-[#f5f5f5] border border-[#d30005] text-xs text-[#d30005] flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleInstantAuth}
                className="w-full py-3.5 px-6 bg-[#111111] hover:bg-black text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95 shadow-sm"
              >
                <span>
                  {authMode === 'login' ? '바로 로그인하기' : '바로 회원가입 완료하기'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleGoogleAuth}
                disabled={authLoading}
                className="w-full py-2.5 px-4 bg-white hover:bg-[#f5f5f5] text-[#707072] hover:text-[#111111] border border-[#cacacb] rounded-full text-[11px] font-medium transition-colors cursor-pointer disabled:opacity-50"
              >
                {authLoading ? 'Google 인증 중...' : 'Google 계정으로 연동 로그인'}
              </button>
            </div>

            <div className="pt-4 border-t border-[#e5e5e5] flex items-center justify-between text-[11px] text-[#707072]">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                <span>MONO:DAY 멤버십</span>
              </span>
              {onOpenMyPage && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenMyPage();
                  }}
                  className="underline text-[#111111] cursor-pointer"
                >
                  MY 페이지로 이동
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
