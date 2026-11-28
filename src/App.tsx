import React, { useState, useEffect } from 'react';
import { Header, NavTabType } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { BestPage } from './pages/BestPage';
import { SalePage } from './pages/SalePage';
import { NewPage } from './pages/NewPage';
import { SnapPage } from './pages/SnapPage';
import { MyPage } from './pages/MyPage';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { PTModal } from './components/PTModal';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/Toast';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AddProductModal } from './components/AddProductModal';
import { MemberLoginModal } from './components/MemberLoginModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { FirebaseProvider, useAuth } from './contexts/AuthContext';
import { PRODUCTS, Product } from './data/products';
import { MyPageTabType, PROMO_CATALOG, PromoCodeKey } from './types/mypage';

function AppContent() {
  const { isAuthenticated, claimCoupon, coupons } = useAuth();
  // Navigation State: 'home' | 'shop' | 'best' | 'sale' | 'new' | 'snap' | 'mypage'
  const [activeNavTab, setActiveNavTab] = useState<NavTabType>('home');
  const [myPageInitialTab, setMyPageInitialTab] = useState<MyPageTabType>('orders');

  // Filter States for ShopPage
  const [currentGender, setCurrentGender] = useState<'all' | 'women' | 'men'>('all');
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 1. Dynamic Products Data with localStorage persistence (CRUD Support)
  const [productsData, setProductsData] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('monoday_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to parse localStorage products', e);
    }
    return PRODUCTS;
  });

  // Sync productsData to localStorage whenever updated
  useEffect(() => {
    try {
      localStorage.setItem('monoday_products', JSON.stringify(productsData));
    } catch (e) {
      console.error('Failed to save products to localStorage', e);
    }
  }, [productsData]);

  // 2. Admin Authentication State with localStorage persistence
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return localStorage.getItem('monoday_admin_logged_in') === 'true';
    } catch {
      return false;
    }
  });

  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  // Wishlist State (starts with pre-saved item)
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('monoday_wishlist');
      if (saved) return JSON.parse(saved);
    } catch {}
    return productsData[1] ? [productsData[1].id] : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('monoday_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  // Snap Likes State (requires login, persisted per browser)
  const [likedSnaps, setLikedSnaps] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('monoday_snap_likes');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('monoday_snap_likes', JSON.stringify(likedSnaps));
    } catch {}
  }, [likedSnaps]);

  // Cart State (starts with 2 pre-seeded items from the catalog)
  const [cart, setCart] = useState<CartItem[]>(() => {
    const p1 = productsData[0] || PRODUCTS[0];
    const p2 = productsData[200] || productsData[1] || PRODUCTS[1];
    return [
      {
        id: p1?.id || 'top-1',
        product: p1,
        qty: 1,
        selectedColor: p1?.colors[0] || 'Default',
        selectedSize: p1?.sizes[0] || 'FREE'
      },
      {
        id: p2?.id || 'shoes-1',
        product: p2,
        qty: 1,
        selectedColor: p2?.colors[0] || 'Default',
        selectedSize: p2?.sizes[0] || 'FREE'
      }
    ];
  });

  // Promo Code State
  const [appliedPromoCode, setAppliedPromoCode] = useState<string | null>(null);

  // Modals & Drawers States
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPTOpen, setIsPTOpen] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);
  const [loginModalState, setLoginModalState] = useState<{
    isOpen: boolean;
    reasonMessage: string;
  }>({ isOpen: false, reasonMessage: '' });
  const pendingAuthActionRef = React.useRef<(() => void) | null>(null);
  const wishlistRef = React.useRef(wishlist);
  wishlistRef.current = wishlist;
  const likedSnapsRef = React.useRef(likedSnaps);
  likedSnapsRef.current = likedSnaps;

  useEffect(() => {
    if (!isAuthenticated) {
      setIsWishlistOpen(false);
      setIsCartOpen(false);
      setAppliedPromoCode(null);
    }
  }, [isAuthenticated]);

  const requireMemberLogin = (reasonMessage: string, action?: () => void) => {
    pendingAuthActionRef.current = action || null;
    setLoginModalState({ isOpen: true, reasonMessage });
  };

  // Toast Notification System
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (text: string, type: ToastMessage['type'] = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Switch Page and Scroll to Top
  const handleSelectNavTab = (tab: NavTabType) => {
    if (tab === 'mypage') {
      setMyPageInitialTab('orders');
    }
    setActiveNavTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Admin Auth Handlers
  const handleAdminLoginSuccess = () => {
    setIsAdmin(true);
    try {
      localStorage.setItem('monoday_admin_logged_in', 'true');
    } catch {}
    setIsAdminLoginModalOpen(false);
    addToast('관리자 인증 완료! 상품 CRUD 기능이 활성화되었습니다.', 'success');
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    try {
      localStorage.removeItem('monoday_admin_logged_in');
    } catch {}
    addToast('관리자 모드에서 로그아웃되었습니다.', 'info');
  };

  // Product CRUD: Add Product
  const handleAddProduct = (newProduct: Product) => {
    setProductsData((prev) => [newProduct, ...prev]);
    addToast(`'${newProduct.name}' 상품이 성공적으로 등록되었습니다.`, 'success');
  };

  // Product CRUD: Delete Product
  const handleDeleteProduct = (productId: string) => {
    const target = productsData.find((p) => p.id === productId);
    const targetName = target ? target.name : '상품';

    setProductsData((prev) => prev.filter((p) => p.id !== productId));
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    setWishlist((prev) => prev.filter((id) => id !== productId));
    if (selectedProductDetail?.id === productId) {
      setSelectedProductDetail(null);
    }
    addToast(`'${targetName}' 상품이 카탈로그에서 삭제되었습니다.`, 'info');
  };

  // Wishlist Logic
  const performToggleWishlist = (productId: string) => {
    const isWished = wishlistRef.current.includes(productId);
    const prod = productsData.find((p) => p.id === productId);
    const name = prod ? prod.name : '상품';

    if (isWished) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      addToast(`'${name}' 좋아요 목록에서 삭제되었습니다.`);
    } else {
      setWishlist((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
      addToast(`'${name}' 좋아요 목록에 추가되었습니다.`, 'heart');
    }
  };

  const handleToggleWishlist = (productId: string) => {
    if (!isAuthenticated) {
      requireMemberLogin('좋아요 기능은 로그인 후 이용할 수 있습니다.', () =>
        performToggleWishlist(productId)
      );
      return;
    }
    performToggleWishlist(productId);
  };

  const isWishlisted = (productId: string) => isAuthenticated && wishlist.includes(productId);

  // Snap Like Logic (Login Required, matches Wishlist behavior)
  const performToggleSnapLike = (snapId: string) => {
    const isLiked = likedSnapsRef.current.includes(snapId);
    if (isLiked) {
      setLikedSnaps((prev) => prev.filter((id) => id !== snapId));
      addToast('스냅 좋아요가 취소되었습니다.');
    } else {
      setLikedSnaps((prev) => (prev.includes(snapId) ? prev : [...prev, snapId]));
      addToast('스냅에 좋아요를 눌렀습니다.', 'heart');
    }
  };

  const handleToggleSnapLike = (snapId: string) => {
    if (!isAuthenticated) {
      requireMemberLogin('좋아요 기능은 로그인 후 이용할 수 있습니다.', () =>
        performToggleSnapLike(snapId)
      );
      return;
    }
    performToggleSnapLike(snapId);
  };

  const isSnapLiked = (snapId: string) => isAuthenticated && likedSnaps.includes(snapId);

  // Cart Logic
  const performAddToCart = (
    product: Product,
    selectedColor?: string,
    selectedSize?: string,
    qty: number = 1
  ) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                product: product.isTimeSale ? product : item.product,
                qty: item.qty + qty
              }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          product,
          qty,
          selectedColor: selectedColor || product.colors[0],
          selectedSize: selectedSize || product.sizes[0]
        }
      ];
    });

    addToast(`'${product.name}' 장바구니에 담겼습니다.`, 'bag');
  };

  const handleAddToCart = (
    product: Product,
    selectedColor?: string,
    selectedSize?: string,
    qty: number = 1
  ): boolean => {
    if (!isAuthenticated) {
      requireMemberLogin('장바구니 기능은 로그인 후 이용할 수 있습니다.', () =>
        performAddToCart(product, selectedColor, selectedSize, qty)
      );
      return false;
    }
    performAddToCart(product, selectedColor, selectedSize, qty);
    return true;
  };

  const handleUpdateCartQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.qty + delta;
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    addToast('장바구니에서 상품을 삭제했습니다.');
  };

  // Buy Now flow
  const handleBuyNow = (
    product: Product,
    selectedColor?: string,
    selectedSize?: string,
    qty: number = 1
  ) => {
    if (!isAuthenticated) {
      requireMemberLogin('장바구니 담기 및 주문은 로그인 후 이용할 수 있습니다.', () => {
        performAddToCart(product, selectedColor, selectedSize, qty);
        setSelectedProductDetail(null);
        setIsCheckoutOpen(true);
      });
      return;
    }
    performAddToCart(product, selectedColor, selectedSize, qty);
    setSelectedProductDetail(null);
    setIsCheckoutOpen(true);
  };

  // Gift Coupon Selection & Claiming
  const handleSelectPromoCode = (code: string | null) => {
    if (!code) {
      setAppliedPromoCode(null);
      addToast('기프트 쿠폰 적용이 해제되었습니다.', 'info');
      return;
    }
    const normalized = code.trim().toUpperCase() as PromoCodeKey;
    const tpl = PROMO_CATALOG[normalized];
    if (tpl) {
      setAppliedPromoCode(normalized);
      const label =
        tpl.discountType === 'percent'
          ? `${tpl.discountValue}% 할인`
          : `₩${tpl.discountValue.toLocaleString()} 할인`;
      addToast(`'${tpl.title}' 기프트 쿠폰이 선택되었습니다. (${label})`, 'success');
    }
  };

  const handleUseGiftFromMyPage = (code: string): boolean => {
    const normalized = code.trim().toUpperCase() as PromoCodeKey;
    const tpl = PROMO_CATALOG[normalized];
    if (!tpl) return false;
    setAppliedPromoCode(normalized);
    if (cart.length > 0) {
      setIsCartOpen(true);
      addToast(`'${tpl.title}' 기프트 쿠폰이 장바구니에 적용되었습니다.`, 'success');
    } else {
      addToast(`'${tpl.title}' 기프트 쿠폰이 선택되었습니다. 상품을 담으면 자동 적용됩니다.`, 'success');
    }
    return true;
  };

  const handleClaimGiftCoupon = (code: string) => {
    const normalized = code.trim().toUpperCase() as PromoCodeKey;
    const tpl = PROMO_CATALOG[normalized];

    const performClaim = async () => {
      const res = await claimCoupon(normalized);
      if (res.ok) {
        setAppliedPromoCode(normalized);
        addToast(
          `'${tpl?.title || '기프트 쿠폰'}' 선물을 받았습니다! 장바구니에 자동 적용됩니다.`,
          'success'
        );
      } else if (res.alreadyAvailable) {
        setAppliedPromoCode(normalized);
        addToast(
          `보유 중인 '${tpl?.title || '기프트 쿠폰'}'을 장바구니에 적용했습니다.`,
          'success'
        );
      } else {
        addToast(res.message, 'info');
      }
    };

    if (!isAuthenticated) {
      requireMemberLogin('기프트 쿠폰을 받으려면 로그인이 필요합니다.', () => {
        void performClaim();
      });
      return;
    }

    void performClaim();
  };

  const getGiftStatus = (
    code: PromoCodeKey
  ): 'unclaimed' | 'available' | 'applied' | 'used' => {
    if (!isAuthenticated) return 'unclaimed';
    const found = coupons.find((c) => c.code === code);
    if (!found) return 'unclaimed';
    if (found.status !== 'available') return 'used';
    if (appliedPromoCode === code) return 'applied';
    return 'available';
  };

  // Order Placement
  const handleOrderSuccess = (orderId: string) => {
    setCart([]);
    setAppliedPromoCode(null);
    addToast(`주문이 성공적으로 접수되었습니다. (주문번호: ${orderId})`, 'success');
  };

  // Highlight item for bento
  const highlightProduct = productsData.find((p) => p.id === 'bag-1') || productsData[0] || PRODUCTS[0];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased selection:bg-black selection:text-white flex flex-col">
      {/* 1. Header with announcement, nav links, and Admin Authentication */}
      <Header
        activeNavTab={activeNavTab}
        onSelectNavTab={handleSelectNavTab}
        wishlistCount={isAuthenticated ? wishlist.length : 0}
        cartCount={isAuthenticated ? cart.reduce((sum, item) => sum + item.qty, 0) : 0}
        onOpenWishlist={() => {
          if (!isAuthenticated) {
            requireMemberLogin('좋아요(위시리스트)를 확인하려면 로그인이 필요합니다.', () =>
              setIsWishlistOpen(true)
            );
            return;
          }
          setIsWishlistOpen(true);
        }}
        onOpenCart={() => {
          if (!isAuthenticated) {
            requireMemberLogin('장바구니를 확인하려면 로그인이 필요합니다.', () =>
              setIsCartOpen(true)
            );
            return;
          }
          setIsCartOpen(true);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onClaimGiftCoupon={handleClaimGiftCoupon}
        seasonGiftStatus={getGiftStatus('MONODAY15')}
        isMemberSignedIn={isAuthenticated}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {/* VIEW 1: HOME PAGE */}
        {activeNavTab === 'home' && (
          <HomePage
            onNavigateTab={handleSelectNavTab}
            onOpenPTModal={() => setIsPTOpen(true)}
            onSelectBrand={(brand) => {
              setSelectedBrand(brand);
              handleSelectNavTab('shop');
            }}
            onSelectCategory={(gender, category) => {
              setCurrentGender(gender);
              setCurrentCategory(category);
              handleSelectNavTab('shop');
            }}
            onQuickAddToCart={(prod) => handleAddToCart(prod)}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            highlightProduct={highlightProduct}
            onClaimGiftCoupon={handleClaimGiftCoupon}
            ptGiftStatus={getGiftStatus('MATINKIM15')}
          />
        )}

        {/* VIEW 2: SHOP PAGE (ALL PRODUCTS) */}
        {activeNavTab === 'shop' && (
          <ShopPage
            products={productsData}
            currentGender={currentGender}
            currentCategory={currentCategory}
            selectedBrand={selectedBrand}
            searchQuery={searchQuery}
            onGenderChange={(gender) => {
              setCurrentGender(gender);
              setCurrentCategory('all');
            }}
            onCategoryChange={setCurrentCategory}
            onClearBrand={() => setSelectedBrand(null)}
            onClearSearch={() => setSearchQuery('')}
            onSelectProduct={setSelectedProductDetail}
            onToggleWishlist={handleToggleWishlist}
            onQuickAddToCart={(prod) => handleAddToCart(prod)}
            isWishlisted={isWishlisted}
            isAdmin={isAdmin}
            onOpenAddProductModal={() => setIsAddProductModalOpen(true)}
            onDeleteProduct={handleDeleteProduct}
          />
        )}

        {/* VIEW 3: BEST PAGE (TOP 50 3-DAY RANKING) */}
        {activeNavTab === 'best' && (
          <BestPage
            products={productsData}
            onSelectProduct={setSelectedProductDetail}
            onToggleWishlist={handleToggleWishlist}
            onQuickAddToCart={(prod) => handleAddToCart(prod)}
            isWishlisted={isWishlisted}
            isAdmin={isAdmin}
            onDeleteProduct={handleDeleteProduct}
          />
        )}

        {/* VIEW 4: SALE PAGE (DISCOUNT SPECIAL) */}
        {activeNavTab === 'sale' && (
          <SalePage
            products={productsData}
            onSelectProduct={setSelectedProductDetail}
            onToggleWishlist={handleToggleWishlist}
            onQuickAddToCart={(prod) => handleAddToCart(prod)}
            isWishlisted={isWishlisted}
            isAdmin={isAdmin}
            onDeleteProduct={handleDeleteProduct}
          />
        )}

        {/* VIEW 5: NEW PAGE (24SS NEW ARRIVALS) */}
        {activeNavTab === 'new' && (
          <NewPage
            products={productsData}
            onSelectProduct={setSelectedProductDetail}
            onToggleWishlist={handleToggleWishlist}
            onQuickAddToCart={(prod) => handleAddToCart(prod)}
            isWishlisted={isWishlisted}
            isAdmin={isAdmin}
            onDeleteProduct={handleDeleteProduct}
          />
        )}

        {/* VIEW 6: SNAP PAGE (INTERACTIVE MODEL LOOKBOOK WITH HOVER PRODUCT TAGS) */}
        {activeNavTab === 'snap' && (
          <SnapPage
            allProducts={productsData}
            onSelectProduct={setSelectedProductDetail}
            onAddToCart={(prod) => handleAddToCart(prod)}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onToggleSnapLike={handleToggleSnapLike}
            isSnapLiked={isSnapLiked}
          />
        )}

        {/* VIEW 7: MY PAGE */}
        {activeNavTab === 'mypage' && (
          <MyPage
            key={myPageInitialTab}
            initialTab={myPageInitialTab}
            allProducts={productsData}
            onNavigateShop={() => handleSelectNavTab('shop')}
            onSelectProduct={setSelectedProductDetail}
            onApplyPromoCode={handleUseGiftFromMyPage}
            appliedPromoCode={appliedPromoCode}
            onShowToast={addToast}
            isAdmin={isAdmin}
            onOpenAdminLogin={() => setIsAdminLoginModalOpen(true)}
            onAdminLogout={handleAdminLogout}
            onOpenAddProduct={() => setIsAddProductModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        brands={Array.from(new Set(productsData.map((p) => p.brand))).sort()}
        onGoHome={() => handleSelectNavTab('home')}
        onGoBrandStory={() => {
          setActiveNavTab('home');
          setTimeout(() => {
            const el = document.getElementById('editorial');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }, 80);
        }}
        onGoPT={() => setIsPTOpen(true)}
        onSelectBrand={(brand) => {
          setSelectedBrand(brand);
          handleSelectNavTab('shop');
        }}
        onGoShopAll={() => {
          setSelectedBrand(null);
          handleSelectNavTab('shop');
        }}
        onOpenCustomerService={() => {
          setMyPageInitialTab('cs');
          setActiveNavTab('mypage');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onShowToast={addToast}
      />

      {/* Slide-out Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        allProducts={productsData}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={(product) => handleAddToCart(product)}
        onSelectProduct={setSelectedProductDetail}
      />

      {/* Slide-out Shopping Bag Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveFromCart}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        appliedPromoCode={appliedPromoCode}
        onSelectPromoCode={handleSelectPromoCode}
        onShowToast={addToast}
      />

      {/* Product Detail Modal */}
      {selectedProductDetail && (
        <ProductDetailModal
          product={selectedProductDetail}
          isOpen={Boolean(selectedProductDetail)}
          onClose={() => setSelectedProductDetail(null)}
          onAddToCart={(prod, color, size, qty) => {
            if (!isAuthenticated) {
              requireMemberLogin('장바구니 기능은 로그인 후 이용할 수 있습니다.', () => {
                performAddToCart(prod, color, size, qty);
                setSelectedProductDetail(null);
              });
              return;
            }
            if (handleAddToCart(prod, color, size, qty)) {
              setSelectedProductDetail(null);
            }
          }}
          onBuyNow={handleBuyNow}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted(selectedProductDetail.id)}
        />
      )}

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={productsData}
        onSelectProduct={setSelectedProductDetail}
        onApplySearchFilter={(q) => {
          setSearchQuery(q);
          handleSelectNavTab('shop');
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        appliedPromoCode={appliedPromoCode}
        onSelectPromoCode={handleSelectPromoCode}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* PT Film & Story Modal */}
      <PTModal
        isOpen={isPTOpen}
        onClose={() => setIsPTOpen(false)}
        onExploreCollection={() => {
          setSelectedBrand('Matin Kim');
          handleSelectNavTab('shop');
        }}
        onClaimGiftCoupon={handleClaimGiftCoupon}
        giftStatus={getGiftStatus('MATINKIM15')}
      />

      {/* Admin Login Modal (Password: 1245 or admin123) */}
      <AdminLoginModal
        isOpen={isAdminLoginModalOpen}
        onClose={() => setIsAdminLoginModalOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      {/* GUI Add Product Modal (Admin Only) */}
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        onAddProduct={handleAddProduct}
      />

      {/* Member Login Required Modal (Wishlist / Cart when logged out) */}
      <MemberLoginModal
        isOpen={loginModalState.isOpen}
        reasonMessage={loginModalState.reasonMessage}
        onClose={() => {
          pendingAuthActionRef.current = null;
          setLoginModalState({ isOpen: false, reasonMessage: '' });
        }}
        onSuccess={() => {
          const pending = pendingAuthActionRef.current;
          pendingAuthActionRef.current = null;
          setLoginModalState({ isOpen: false, reasonMessage: '' });
          if (pending) pending();
        }}
        onOpenMyPage={() => {
          pendingAuthActionRef.current = null;
          setLoginModalState({ isOpen: false, reasonMessage: '' });
          setSelectedProductDetail(null);
          handleSelectNavTab('mypage');
        }}
        onShowToast={addToast}
      />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <FirebaseProvider>
        <AppContent />
      </FirebaseProvider>
    </ErrorBoundary>
  );
}
