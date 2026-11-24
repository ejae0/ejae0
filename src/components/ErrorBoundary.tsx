import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error.message || '예기치 않은 오류가 발생했습니다.',
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, errorMessage: '' });
  };

  public render() {
    if (this.state.hasError) {
      let displayMessage = '서비스 처리 중 일시적인 문제가 발생했습니다.';
      try {
        const parsed = JSON.parse(this.state.errorMessage);
        if (parsed?.error) {
          displayMessage = parsed.error.includes('permissions')
            ? '접근 권한이 없거나 로그인이 필요합니다. 다시 로그인 후 시도해주세요.'
            : parsed.error;
        }
      } catch {
        displayMessage = this.state.errorMessage;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8 bg-white">
          <div className="max-w-md w-full border border-[#cacacb] bg-[#f5f5f5] p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-white border border-[#cacacb] flex items-center justify-center mx-auto text-[#d30005]">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-base font-semibold text-[#111111]">
              문제가 발생했습니다
            </h2>
            <p className="text-xs text-[#707072] leading-relaxed break-words">
              {displayMessage}
            </p>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-[#111111] text-white rounded-full text-xs font-medium hover:bg-black transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>다시 시도</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
