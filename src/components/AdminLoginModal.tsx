import React, { useState } from 'react';
import { X, Lock, KeyRound, ShieldAlert } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validPasswords = ['1245', 'admin123'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!password.trim()) {
      setErrorMsg('비밀번호를 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      if (validPasswords.includes(password.trim())) {
        setPassword('');
        setErrorMsg('');
        setIsSubmitting(false);
        onLoginSuccess();
      } else {
        setIsSubmitting(false);
        setErrorMsg('비밀번호가 일치하지 않습니다. (기본값: 1245 또는 admin123)');
      }
    }, 200);
  };

  const handleQuickFill = (pw: string) => {
    setPassword(pw);
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="bg-white w-full max-w-md rounded-none shadow-2xl border border-[#cacacb] overflow-hidden relative">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] bg-[#f5f5f5]">
          <div className="flex items-center space-x-2 text-[#111111] font-bold text-sm">
            <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#111111] leading-tight">MONO:DAY 관리자 인증</h3>
              <p className="text-[11px] text-[#707072] font-normal">ADMIN AUTHENTICATION</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#707072] uppercase tracking-wider mb-2">
              관리자 비밀번호 (Admin Password)
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="비밀번호를 입력하세요"
                autoFocus
                className="w-full text-sm px-4 py-2.5 border border-[#cacacb] rounded-full focus:outline-none focus:border-[#111111] pr-10 font-mono"
              />
              <KeyRound className="w-4 h-4 text-[#707072] absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="bg-[#f5f5f5] p-3 border border-[#e5e5e5] text-xs text-[#707072] space-y-1.5 rounded-none">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#707072]">
              <span>기본 관리자 비밀번호:</span>
              <div className="space-x-1.5">
                <button
                  type="button"
                  onClick={() => handleQuickFill('1245')}
                  className="bg-white border border-[#cacacb] hover:border-[#111111] px-2.5 py-1 rounded-full font-medium cursor-pointer text-[#111111]"
                >
                  "1245" 자동입력
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFill('admin123')}
                  className="bg-white border border-[#cacacb] hover:border-[#111111] px-2.5 py-1 rounded-full font-medium cursor-pointer text-[#111111]"
                >
                  "admin123" 자동입력
                </button>
              </div>
            </div>
          </div>

          {/* Error message */}
          {errorMsg && (
            <div className="flex items-center space-x-1.5 text-xs text-[#d30005] bg-[#f5f5f5] p-2.5 border border-[#d30005]">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Action buttons (Nike pill CTAs) */}
          <div className="pt-2 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs text-[#707072] hover:text-[#111111] font-medium transition-colors cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-2.5 text-xs bg-[#111111] text-white rounded-full font-medium hover:bg-black transition-all cursor-pointer shadow-sm disabled:opacity-50 active:scale-95"
            >
              <span>로그인</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
