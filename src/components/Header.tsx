import React, { useState } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  X,
  Copy,
  Check,
  Camera,
  Lock,
  LogOut,
  Plus,
  User
} from 'lucide-react';

export type NavTabType = 'home' | 'shop' | 'best' | 'sale' | 'new' | 'snap' | 'mypage';

interface HeaderProps {
  activeNavTab: NavTabType;
  onSelectNavTab: (tab: NavTabType) => void;
  wishlistCount: number;
  cartCount: number;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onCopyPromo: (code: string) => void;
  isAdmin: boolean;
  onOpenAdminLogin: () => void;
  onAdminLogout: () => void;
  onOpenAddProduct: () => void;
  isMemberSignedIn?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeNavTab,
  onSelectNavTab,
  wishlistCount,
  cartCount,
  onOpenWishlist,
  onOpenCart,
  onOpenSearch,
  onCopyPromo,
  isAdmin,
  onOpenAdminLogin,
  onAdminLogout,
  onOpenAddProduct,
  isMemberSignedIn = false
}) => {
  const [showBanner, setShowBanner] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    onCopyPromo('MONODAY15');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* UTILITY BAR (Nike utility-bar: bg #f5f5f5, text #111111, height ~36px, border-b #e5e5e5) */}
      {showBanner && (
        <div className="bg-[#f5f5f5] text-[#111111] text-xs h-9 px-4 sm:px-8 flex items-center justify-between border-b border-[#e5e5e5] transition-all select-none">
          <div className="flex-1 text-center flex items-center justify-center space-x-3 text-[12px] font-medium">
            <span className="text-[#111111]">
              MONO:DAY 24SS SEASON OPEN — 신규 가입 15% 웰컴 쿠폰 &amp; 전 상품 무료 배송
            </span>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center space-x-1.5 bg-white border border-[#cacacb] hover:border-[#111111] text-[#111111] px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-colors cursor-pointer"
              title="쿠폰 코드 복사하기"
            >
              {copied ? <Check className="w-3 h-3 text-[#007d48]" /> : <Copy className="w-3 h-3 text-[#707072]" />}
              <span>{copied ? '복사완료' : '코드 복사: MONODAY15'}</span>
            </button>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="text-[#707072] hover:text-[#111111] transition-colors p-1 cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* PRIMARY NAV (Nike primary-nav: bg #ffffff, text #111111, height 60px, 2px active underline) */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#e5e5e5] transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Zone 1: Logo & Nav Links */}
          <div className="flex items-center space-x-8 lg:space-x-12 shrink-0">
            <button
              onClick={() => onSelectNavTab('home')}
              className="text-2xl font-bold tracking-tighter uppercase hover:opacity-80 transition-opacity text-left flex items-center cursor-pointer text-[#111111]"
              title="MONO:DAY 홈으로 가기"
            >
              <span className="tracking-tight">MONO</span>
              <span className="text-[#111111]">:</span>
              <span className="tracking-tight">DAY</span>
            </button>

            {/* Zone 2: Navigation Links (SHOP, BEST, SALE, NEW, SNAP) */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-8 text-sm font-medium tracking-normal">
              <button
                onClick={() => onSelectNavTab('shop')}
                className={`py-5 transition-all cursor-pointer whitespace-nowrap uppercase border-b-2 text-[14px] ${
                  activeNavTab === 'shop'
                    ? 'text-[#111111] border-[#111111] font-semibold'
                    : 'border-transparent text-[#707072] hover:text-[#111111]'
                }`}
              >
                SHOP
              </button>

              <button
                onClick={() => onSelectNavTab('best')}
                className={`py-5 transition-all cursor-pointer whitespace-nowrap uppercase border-b-2 flex items-center space-x-1.5 text-[14px] ${
                  activeNavTab === 'best'
                    ? 'text-[#111111] border-[#111111] font-semibold'
                    : 'border-transparent text-[#707072] hover:text-[#111111]'
                }`}
              >
                <span>BEST</span>
                <span className="text-[11px] text-[#707072] font-normal">TOP 50</span>
              </button>

              <button
                onClick={() => onSelectNavTab('sale')}
                className={`py-5 transition-all cursor-pointer whitespace-nowrap uppercase border-b-2 flex items-center space-x-1 text-[14px] ${
                  activeNavTab === 'sale'
                    ? 'text-[#d30005] border-[#d30005] font-semibold'
                    : 'border-transparent text-[#d30005] hover:opacity-80'
                }`}
              >
                <span>SALE</span>
                <span className="text-[11px] font-normal text-[#d30005]">%</span>
              </button>

              <button
                onClick={() => onSelectNavTab('new')}
                className={`py-5 transition-all cursor-pointer whitespace-nowrap uppercase border-b-2 flex items-center space-x-1.5 text-[14px] ${
                  activeNavTab === 'new'
                    ? 'text-[#111111] border-[#111111] font-semibold'
                    : 'border-transparent text-[#707072] hover:text-[#111111]'
                }`}
              >
                <span>NEW</span>
                <span className="text-[11px] text-[#707072] font-normal">24SS</span>
              </button>

              {/* SNAP BUTTON */}
              <button
                onClick={() => onSelectNavTab('snap')}
                className={`py-5 transition-all cursor-pointer whitespace-nowrap uppercase border-b-2 flex items-center space-x-1.5 text-[14px] ${
                  activeNavTab === 'snap'
                    ? 'text-[#111111] border-[#111111] font-semibold'
                    : 'border-transparent text-[#707072] hover:text-[#111111]'
                }`}
              >
                <Camera className="w-3.5 h-3.5 text-[#707072]" />
                <span>SNAP</span>
                <span className="text-[11px] text-[#707072] font-normal">LOOKBOOK</span>
              </button>
            </nav>
          </div>

          {/* Zone 3: Search Pill, Action Icons & Admin Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-[#111111] shrink-0">
            {/* Search Pill (Nike search-pill: bg #f5f5f5, rounded-full, h-10, px-4) */}
            <button
              onClick={onOpenSearch}
              className="hidden lg:flex items-center space-x-2.5 bg-[#f5f5f5] hover:bg-[#e5e5e5] text-[#707072] hover:text-[#111111] px-4 py-2 rounded-full h-10 w-44 xl:w-56 text-sm transition-colors cursor-pointer"
              title="검색창 열기"
            >
              <Search className="w-4 h-4 text-[#707072]" />
              <span className="text-xs font-normal">검색</span>
            </button>

            {/* Mobile / Compact Search Icon Button */}
            <button
              onClick={onOpenSearch}
              className="lg:hidden w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
              aria-label="Search"
              title="검색"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* ADMIN CONTROLS (Only visible if Admin or Admin Button) */}
            {isAdmin ? (
              <div className="flex items-center space-x-2 mr-1">
                {/* Admin Mode (Active) Badge */}
                <div className="hidden sm:inline-flex items-center space-x-1.5 bg-[#f5f5f5] text-[#111111] border border-[#cacacb] px-3 py-1.5 rounded-full text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#007d48]" />
                  <span>Admin Mode</span>
                </div>

                {/* GNB Quick Add Product Button (Nike button-primary: bg #111111, rounded-full) */}
                <button
                  onClick={onOpenAddProduct}
                  className="inline-flex items-center space-x-1.5 bg-[#111111] hover:bg-black text-white px-3.5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer active:scale-95"
                  title="새 상품 추가"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">상품 추가</span>
                </button>

                {/* Logout Button (Nike button-secondary: bg #f5f5f5, rounded-full) */}
                <button
                  onClick={onAdminLogout}
                  className="inline-flex items-center space-x-1 bg-[#f5f5f5] hover:bg-[#e5e5e5] text-[#111111] px-3 py-2 rounded-full text-xs font-medium transition-all cursor-pointer"
                  title="관리자 로그아웃"
                >
                  <LogOut className="w-3.5 h-3.5 text-[#707072]" />
                  <span>로그아웃</span>
                </button>
              </div>
            ) : (
              /* Non-logged in: Admin Login Button (Nike pill) */
              <button
                onClick={onOpenAdminLogin}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] text-[#111111] border border-[#e5e5e5] text-xs font-medium transition-all cursor-pointer mr-0.5"
                title="관리자 로그인 (비밀번호: 1245 또는 admin123)"
              >
                <Lock className="w-3 h-3 text-[#707072]" />
                <span className="text-[11px] font-medium tracking-wider">ADMIN</span>
              </button>
            )}

            {/* MY Page Trigger */}
            <button
              onClick={() => onSelectNavTab('mypage')}
              className={`h-10 px-3 sm:px-3.5 rounded-full flex items-center space-x-1.5 text-xs font-medium transition-colors cursor-pointer relative ${
                activeNavTab === 'mypage'
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#f5f5f5] hover:bg-[#e5e5e5] text-[#111111]'
              }`}
              aria-label="My Page"
              title="마이페이지 (로그인/주문/쿠폰/후기/고객센터)"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">MY</span>
              {isMemberSignedIn && (
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeNavTab === 'mypage' ? 'bg-[#007d48]' : 'bg-[#007d48]'
                  }`}
                />
              )}
            </button>

            {/* Wishlist Trigger (Nike button-icon-circular: 40px rounded-full bg #f5f5f5) */}
            <button
              onClick={onOpenWishlist}
              className="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] relative transition-colors cursor-pointer"
              aria-label="Wishlist"
              title="위시리스트"
            >
              <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-[#d30005] fill-[#d30005]' : 'text-[#111111]'}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#d30005] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Trigger (Nike button-icon-circular: 40px rounded-full bg #f5f5f5) */}
            <button
              onClick={onOpenCart}
              className="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] relative transition-colors cursor-pointer"
              aria-label="Cart"
              title="장바구니"
            >
              <ShoppingBag className="w-4 h-4 text-[#111111]" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#111111] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Strip */}
        <div className="md:hidden flex items-center justify-around border-t border-[#e5e5e5] py-2 px-2 bg-white text-xs font-medium tracking-wider overflow-x-auto">
          <button
            onClick={() => onSelectNavTab('home')}
            className={`py-1.5 px-2 cursor-pointer whitespace-nowrap ${activeNavTab === 'home' ? 'text-[#111111] font-bold border-b-2 border-[#111111]' : 'text-[#707072]'}`}
          >
            HOME
          </button>
          <button
            onClick={() => onSelectNavTab('shop')}
            className={`py-1.5 px-2 cursor-pointer whitespace-nowrap ${activeNavTab === 'shop' ? 'text-[#111111] font-bold border-b-2 border-[#111111]' : 'text-[#707072]'}`}
          >
            SHOP
          </button>
          <button
            onClick={() => onSelectNavTab('best')}
            className={`py-1.5 px-2 flex items-center space-x-1 cursor-pointer whitespace-nowrap ${activeNavTab === 'best' ? 'text-[#111111] font-bold border-b-2 border-[#111111]' : 'text-[#707072]'}`}
          >
            <span>BEST</span>
            <span className="text-[10px] text-[#707072]">50</span>
          </button>
          <button
            onClick={() => onSelectNavTab('sale')}
            className={`py-1.5 px-2 cursor-pointer whitespace-nowrap ${activeNavTab === 'sale' ? 'text-[#d30005] font-bold border-b-2 border-[#d30005]' : 'text-[#d30005]'}`}
          >
            SALE
          </button>
          <button
            onClick={() => onSelectNavTab('new')}
            className={`py-1.5 px-2 cursor-pointer whitespace-nowrap ${activeNavTab === 'new' ? 'text-[#111111] font-bold border-b-2 border-[#111111]' : 'text-[#707072]'}`}
          >
            NEW
          </button>
          <button
            onClick={() => onSelectNavTab('snap')}
            className={`py-1.5 px-2 cursor-pointer whitespace-nowrap ${activeNavTab === 'snap' ? 'text-[#111111] font-bold border-b-2 border-[#111111]' : 'text-[#707072]'}`}
          >
            SNAP
          </button>
          <button
            onClick={() => onSelectNavTab('mypage')}
            className={`py-1.5 px-2 cursor-pointer whitespace-nowrap ${activeNavTab === 'mypage' ? 'text-[#111111] font-bold border-b-2 border-[#111111]' : 'text-[#707072]'}`}
          >
            MY
          </button>
        </div>
      </header>
    </>
  );
};
