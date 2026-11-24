import React from 'react';
import { Heart, ShoppingBag, CheckCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  text: string;
  type?: 'heart' | 'bag' | 'info' | 'success';
}

interface ToastProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onRemove }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#111111] text-white text-xs px-4 py-3 rounded-full shadow-xl flex items-center justify-between space-x-3 transition-all duration-300 transform translate-y-0 opacity-100 border border-[#39393b]"
        >
          <div className="flex items-center space-x-2.5 overflow-hidden">
            {toast.type === 'heart' && <Heart className="w-4 h-4 text-[#d30005] shrink-0 fill-[#d30005]" />}
            {toast.type === 'bag' && <ShoppingBag className="w-4 h-4 text-white shrink-0" />}
            {toast.type === 'success' && <CheckCircle className="w-4 h-4 text-[#007d48] shrink-0" />}
            {(!toast.type || toast.type === 'info') && <Info className="w-4 h-4 text-[#cacacb] shrink-0" />}
            <span className="font-normal truncate">{toast.text}</span>
          </div>
          <button
            onClick={() => onRemove(toast.id)}
            className="text-[#9e9ea0] hover:text-white transition-colors shrink-0 p-1 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
