import React, { useState, useMemo } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  Star,
  Ruler,
  Truck,
  RefreshCw,
  Sparkles,
  ThumbsUp,
  ShieldCheck,
  Layers,
  MessageSquare,
  Info
} from 'lucide-react';
import { Product } from '../data/products';
import { getProductDetailedSpecs, ProductReview } from '../data/productDetailHelper';
import { useAuth } from '../contexts/AuthContext';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, selectedColor: string, selectedSize: string, qty: number) => void;
  onBuyNow: (product: Product, selectedColor: string, selectedSize: string, qty: number) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}

type TabType = 'editorial' | 'measurements' | 'reviews' | 'shipping';

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted
}) => {
  const { isAuthenticated, profile, reviews: userFirestoreReviews, createReview } = useAuth();

  if (!isOpen || !product) return null;

  const specs = useMemo(() => getProductDetailedSpecs(product), [product]);

  const [activeImg, setActiveImg] = useState<string>(product.img1);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || 'Default');
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'FREE');
  const [qty, setQty] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<TabType>('editorial');

  const [reviewsList, setReviewsList] = useState<ProductReview[]>(specs.reviews);
  const [showWriteReview, setShowWriteReview] = useState<boolean>(false);
  const [newReviewText, setNewReviewText] = useState<string>('');
  const [newReviewRating, setNewReviewRating] = useState<number>(5);
  const [newReviewUserSpecs, setNewReviewUserSpecs] = useState<string>('172cm · 65kg');

  const formattedPrice = product.price.toLocaleString();
  const originalPrice =
    product.discount > 0
      ? Math.round(product.price / (1 - product.discount / 100)).toLocaleString()
      : null;

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize, qty);
  };

  const handleBuy = () => {
    onBuyNow(product, selectedColor, selectedSize, qty);
  };

  const handleLikeReview = (reviewId: string) => {
    setReviewsList((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  const myProductReviews: ProductReview[] = useMemo(
    () =>
      userFirestoreReviews
        .filter((r) => r.productId === product.id)
        .map((r) => ({
          id: r.id,
          author: profile?.name || '나의 구매후기',
          level: profile?.membershipTier || 'WELCOME',
          userSpecs: r.userSpecs,
          selectedOption: r.selectedOption,
          rating: r.rating,
          date: 'MY PAGE 연동',
          content: r.content,
          likes: 0,
          photoUrl: r.productImage || product.img1,
          tags: ['MY PAGE 후기'],
        })),
    [userFirestoreReviews, product.id, product.img1, profile]
  );

  const combinedReviews = useMemo(() => {
    const existingIds = new Set(myProductReviews.map((r) => r.id));
    return [...myProductReviews, ...reviewsList.filter((r) => !existingIds.has(r.id))];
  }, [myProductReviews, reviewsList]);

  const handleSubmitNewReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;

    if (isAuthenticated && profile) {
      await createReview({
        productId: product.id,
        productName: product.name,
        productBrand: product.brand,
        productImage: product.img1,
        orderId: '',
        selectedOption: `${selectedColor} / ${selectedSize}`,
        userSpecs: newReviewUserSpecs || profile.bodySpecs || '170cm · 60kg',
        rating: newReviewRating,
        content: newReviewText,
      });
    } else {
      const newRev: ProductReview = {
        id: `custom-rev-${Date.now()}`,
        author: '나의 구매후기',
        level: 'LV.4 쇼퍼',
        userSpecs: newReviewUserSpecs || '170cm · 60kg',
        selectedOption: `${selectedColor} / ${selectedSize}`,
        rating: newReviewRating,
        date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
        content: newReviewText,
        likes: 1,
        photoUrl: product.img1,
        tags: ['실구매 인증', '만족']
      };
      setReviewsList((prev) => [newRev, ...prev]);
    }

    setNewReviewText('');
    setShowWriteReview(false);
  };

  const categoryNameMap: Record<string, string> = {
    top: '상의 (Top)',
    outer: '아우터 (Outer)',
    bottom: '하의 (Bottom)',
    dress_skirt: '스커트/원피스 (Dress & Skirt)',
    shoes: '신발 (Shoes)',
    bag: '가방 (Bag)',
    acc: '액세서리 (Acc)'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="bg-white w-full max-w-5xl rounded-none shadow-2xl overflow-hidden relative my-auto border border-[#cacacb] flex flex-col max-h-[94vh]">
        {/* Sticky Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] bg-white shrink-0 z-30">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono font-medium tracking-widest text-[#707072] uppercase">
              {product.brand}
            </span>
            <span className="text-[#cacacb]">/</span>
            <span className="text-xs font-medium text-[#111111]">
              {categoryNameMap[product.category] || product.category}
            </span>
            {product.musinsaCategoryCode && (
              <span className="hidden sm:inline-block bg-[#f5f5f5] text-[#707072] px-2.5 py-0.5 rounded-full text-[11px] font-mono">
                무신사 코드: {product.musinsaCategoryCode}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onToggleWishlist(product.id)}
              className="w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center transition-colors cursor-pointer text-[#111111]"
              aria-label="Wishlist"
            >
              <Heart
                className={`w-4 h-4 ${
                  isWishlisted ? 'text-[#d30005] fill-[#d30005]' : 'text-[#111111]'
                }`}
              />
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1">
          {/* Section 1: Top Hero Gallery & Purchase Module (2-Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-8 border-b border-[#e5e5e5]">
            {/* Gallery (Left: 7 cols) */}
            <div className="md:col-span-7 flex flex-col space-y-3">
              {/* Main Image (Nike product-card-image: #f5f5f5 square, rounded 0px) */}
              <div className="relative aspect-square w-full rounded-none overflow-hidden bg-[#f5f5f5] border border-[#e5e5e5]">
                <img
                  src={activeImg}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />

                {/* Promo Badges (Nike badge-promo: white pill, hairline border) */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                  {product.discount > 0 && (
                    <span className="bg-white border border-[#cacacb] text-[#d30005] text-xs font-medium px-3 py-1 rounded-full">
                      {product.discount}% off
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-white border border-[#cacacb] text-[#111111] text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-[#111111]" />
                      <span>24SS New</span>
                    </span>
                  )}
                  {product.bestRank <= 50 && (
                    <span className="bg-[#111111] text-white text-[11px] font-mono px-2.5 py-0.5 rounded-full">
                      BEST #{product.bestRank}
                    </span>
                  )}
                </div>
              </div>

              {/* Multi-angle Gallery Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto pb-1">
                {specs.galleryImages.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(imgUrl)}
                    className={`relative w-16 h-20 rounded-none overflow-hidden border transition-all shrink-0 cursor-pointer bg-[#f5f5f5] ${
                      activeImg === imgUrl
                        ? 'border-[#111111] ring-1 ring-[#111111]'
                        : 'border-[#e5e5e5] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Gallery view ${i + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase & Options Form (Right: 5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-5">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#707072] uppercase block mb-1">
                  {product.brand}
                </span>
                <h1 className="text-2xl sm:text-3xl font-medium text-[#111111] leading-tight">
                  {product.name}
                </h1>

                {/* Rating & Review counter */}
                <div className="flex items-center space-x-3 mt-2.5 text-xs text-[#707072]">
                  <div className="flex items-center text-[#111111] font-medium">
                    <Star className="w-3.5 h-3.5 fill-[#111111] text-[#111111] mr-1" />
                    <span>{product.rating}</span>
                  </div>
                  <span>·</span>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className="underline text-[#111111] cursor-pointer"
                  >
                    구매후기 {product.reviewCount.toLocaleString()}건
                  </button>
                  <span>·</span>
                  <span className="text-[#007d48] font-medium">만족도 {specs.satisfactionRate}%</span>
                </div>

                {/* Price (Nike sale styling) */}
                <div className="flex items-baseline space-x-3 mt-4 border-t border-b border-[#e5e5e5] py-3.5">
                  <span className="text-2xl sm:text-3xl font-medium text-[#111111] tabular-nums">
                    ₩{formattedPrice}
                  </span>
                  {product.discount > 0 && (
                    <>
                      <span className="text-sm text-[#d30005] font-medium">
                        {product.discount}% off
                      </span>
                      {originalPrice && (
                        <span className="text-xs text-[#707072] line-through tabular-nums">
                          ₩{originalPrice}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {/* Color Selector (Nike pill chips) */}
                <div className="mt-4">
                  <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#707072] mb-2">
                    <span>COLOR</span>
                    <span className="text-[#111111] font-medium">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-1.5 text-xs rounded-full border transition-all cursor-pointer ${
                          selectedColor === color
                            ? 'border-[#111111] bg-[#111111] text-white font-medium'
                            : 'border-[#cacacb] bg-white text-[#111111] hover:border-[#111111]'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selector with Quick Size Guide trigger */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#707072] mb-2">
                    <span>
                      SIZE : <span className="text-[#111111] font-mono font-medium">{selectedSize}</span>
                    </span>
                    <button
                      onClick={() => setActiveTab('measurements')}
                      className="text-[#707072] hover:text-[#111111] flex items-center space-x-1 underline cursor-pointer"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      <span>실수치 표 보기</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                          selectedSize === size
                            ? 'border-[#111111] bg-[#111111] text-white font-medium'
                            : 'border-[#cacacb] bg-white text-[#111111] hover:border-[#111111]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-[#e5e5e5]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#707072]">
                    주문 수량
                  </span>
                  <div className="flex items-center border border-[#cacacb] rounded-full overflow-hidden bg-white">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="px-3.5 py-1 text-sm text-[#111111] hover:bg-[#f5f5f5] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-mono font-medium text-[#111111]">{qty}</span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="px-3.5 py-1 text-sm text-[#111111] hover:bg-[#f5f5f5] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total Price Calculation */}
                <div className="flex items-center justify-between mt-4 bg-[#f5f5f5] p-3 rounded-none border border-[#e5e5e5]">
                  <span className="text-xs text-[#707072] font-medium">총 상품금액</span>
                  <span className="text-base font-medium text-[#111111] tabular-nums">
                    ₩{(product.price * qty).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons (Nike button-primary and button-secondary pills) */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#e5e5e5]">
                {/* Secondary Pill Button */}
                <button
                  onClick={handleAdd}
                  className="py-3.5 px-4 bg-[#f5f5f5] hover:bg-[#e5e5e5] text-[#111111] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center space-x-2 cursor-pointer rounded-full"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>장바구니</span>
                </button>
                {/* Primary Pill Button */}
                <button
                  onClick={handleBuy}
                  className="py-3.5 px-4 bg-[#111111] hover:bg-black text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer rounded-full active:scale-95 shadow-sm"
                >
                  <span>바로 구매하기</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Full Sticky Tabs Navigation */}
          <div className="sticky top-0 z-20 bg-white border-b border-[#e5e5e5] px-6 sm:px-8">
            <div className="flex space-x-8 text-xs font-medium tracking-normal">
              <button
                onClick={() => setActiveTab('editorial')}
                className={`py-3.5 transition-all border-b-2 cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'editorial'
                    ? 'border-[#111111] text-[#111111] font-semibold'
                    : 'border-transparent text-[#707072] hover:text-[#111111]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>상품 설명 &amp; 상세 룩북 ({specs.descriptionImages.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('measurements')}
                className={`py-3.5 transition-all border-b-2 cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'measurements'
                    ? 'border-[#111111] text-[#111111] font-semibold'
                    : 'border-transparent text-[#707072] hover:text-[#111111]'
                }`}
              >
                <Ruler className="w-4 h-4" />
                <span>사이즈 실수치 표 (실측 cm)</span>
              </button>

              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-3.5 transition-all border-b-2 cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'reviews'
                    ? 'border-[#111111] text-[#111111] font-semibold'
                    : 'border-transparent text-[#707072] hover:text-[#111111]'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>구매자 리뷰 ({combinedReviews.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('shipping')}
                className={`py-3.5 transition-all border-b-2 cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'shipping'
                    ? 'border-[#111111] text-[#111111] font-semibold'
                    : 'border-transparent text-[#707072] hover:text-[#111111]'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>배송 &amp; 교환 안내</span>
              </button>
            </div>
          </div>

          {/* Section 3: Tab Content Panes */}
          <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-10">
            {/* TAB 1: EDITORIAL & DETAIL IMAGES */}
            {activeTab === 'editorial' && (
              <div className="space-y-8">
                {/* Intro Summary & Spec Grid */}
                <div className="bg-[#f5f5f5] p-6 border border-[#e5e5e5] rounded-none space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-[#111111] uppercase tracking-wider">
                    <Info className="w-4 h-4" />
                    <span>PRODUCT ESSENTIALS &amp; FABRIC SPECIFICATIONS</span>
                  </div>
                  <p className="text-sm text-[#111111] leading-relaxed font-normal">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#e5e5e5] text-xs">
                    <div>
                      <span className="text-[#707072] block text-[11px]">소재 혼용율</span>
                      <span className="font-medium text-[#111111] mt-0.5 block">{specs.material}</span>
                    </div>
                    <div>
                      <span className="text-[#707072] block text-[11px]">실루엣 / 핏</span>
                      <span className="font-medium text-[#111111] mt-0.5 block">{specs.fit}</span>
                    </div>
                    <div>
                      <span className="text-[#707072] block text-[11px]">신축성</span>
                      <span className="font-medium text-[#111111] mt-0.5 block">{specs.elasticity}</span>
                    </div>
                    <div>
                      <span className="text-[#707072] block text-[11px]">촉감 / 비침</span>
                      <span className="font-medium text-[#111111] mt-0.5 block">{specs.touch} · {specs.transparency}</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Description Images */}
                <div className="space-y-10">
                  <div className="text-center space-y-1 border-b border-[#e5e5e5] pb-4">
                    <span className="text-xs tracking-widest text-[#707072] uppercase font-medium">
                      MONO:DAY EDITORIAL CUTS
                    </span>
                    <h3 className="text-xl font-medium text-[#111111]">
                      상세 룩북 및 디테일 컷
                    </h3>
                  </div>

                  {specs.descriptionImages.map((descImg, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="relative overflow-hidden bg-[#f5f5f5] border border-[#e5e5e5] rounded-none">
                        <img
                          src={descImg.imageUrl}
                          alt={descImg.title}
                          referrerPolicy="no-referrer"
                          className="w-full object-cover max-h-[600px]"
                        />
                        <div className="absolute top-3 left-3 bg-[#111111] text-white text-[11px] px-3 py-1 rounded-full">
                          {descImg.title}
                        </div>
                      </div>
                      <p className="text-xs text-[#707072] font-normal px-1 leading-relaxed">
                        · {descImg.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Washing Instructions */}
                <div className="bg-[#f5f5f5] p-6 border border-[#e5e5e5] rounded-none space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    세탁 및 취급 시 주의사항
                  </h4>
                  <ul className="space-y-1 text-xs text-[#707072]">
                    {specs.washingGuide.map((guide, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span>·</span>
                        <span>{guide}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 2: SIZE MEASUREMENTS TABLE */}
            {activeTab === 'measurements' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#e5e5e5] gap-2">
                  <div>
                    <span className="text-xs tracking-widest text-[#707072] uppercase font-medium block">
                      ACCURATE MEASUREMENTS
                    </span>
                    <h3 className="text-xl font-medium text-[#111111]">
                      실측 사이즈 표 (단위: cm)
                    </h3>
                  </div>
                  <div className="text-xs text-[#707072]">
                    * 단면 기준 측정
                  </div>
                </div>

                {/* Model Fitting Card */}
                <div className="bg-[#111111] text-white p-5 rounded-none flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#1e1e20] border border-[#39393b] flex items-center justify-center font-mono font-medium text-white text-xs">
                      FIT
                    </div>
                    <div>
                      <span className="text-xs text-[#9e9ea0]">MODEL SPECIFICATION</span>
                      <h4 className="text-sm font-medium text-white">
                        {specs.modelSpecs.gender} : {specs.modelSpecs.height} / {specs.modelSpecs.weight}
                      </h4>
                    </div>
                  </div>
                  <div className="bg-[#1e1e20] border border-[#39393b] px-4 py-1.5 rounded-full text-xs text-white">
                    착용 사이즈 : {specs.modelSpecs.wearingSize}
                  </div>
                </div>

                {/* Measurements Table */}
                <div className="overflow-x-auto border border-[#e5e5e5] bg-white rounded-none">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#f5f5f5] text-[#111111] font-semibold border-b border-[#e5e5e5]">
                      <tr>
                        {specs.sizeColumns.map((col, idx) => (
                          <th key={idx} className="p-3.5 tracking-wider">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e5e5e5] font-mono">
                      {specs.sizeRows.map((row, idx) => {
                        const isCurrentSize =
                          row.size === selectedSize || row.size.includes(selectedSize);
                        return (
                          <tr
                            key={idx}
                            onClick={() => {
                              const matched = product.sizes.find(
                                (s) => row.size.includes(s) || s === row.size
                              );
                              if (matched) setSelectedSize(matched);
                            }}
                            className={`transition-colors cursor-pointer ${
                              isCurrentSize
                                ? 'bg-[#f5f5f5] font-bold text-[#111111]'
                                : 'hover:bg-[#f5f5f5]/60 text-[#707072]'
                            }`}
                          >
                            {specs.sizeColumns.map((col, cIdx) => (
                              <td key={cIdx} className="p-3.5">
                                {cIdx === 0 && isCurrentSize && (
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#111111] mr-2" />
                                )}
                                {row[col] !== undefined ? row[col] : row.size}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Fit Analysis Gauge */}
                <div className="bg-[#f5f5f5] p-6 border border-[#e5e5e5] rounded-none space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    구매 고객 체감 핏 피드백
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between text-[#111111] font-medium mb-1">
                        <span>정사이즈예요</span>
                        <span>{specs.fitFeedback.fitAsExpected}%</span>
                      </div>
                      <div className="h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#111111]"
                          style={{ width: `${specs.fitFeedback.fitAsExpected}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[#707072] mb-1">
                        <span>생각보다 커요 (오버핏)</span>
                        <span>{specs.fitFeedback.largerThanExpected}%</span>
                      </div>
                      <div className="h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#707072]"
                          style={{ width: `${specs.fitFeedback.largerThanExpected}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[#707072] mb-1">
                        <span>생각보다 작아요 (슬림핏)</span>
                        <span>{specs.fitFeedback.smallerThanExpected}%</span>
                      </div>
                      <div className="h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#707072]"
                          style={{ width: `${specs.fitFeedback.smallerThanExpected}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: REVIEWS & RATINGS */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-[#f5f5f5] p-6 border border-[#e5e5e5] rounded-none flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center space-x-5">
                    <div className="text-center pr-6 border-r border-[#e5e5e5]">
                      <span className="text-3xl font-medium text-[#111111] block">
                        {product.rating}
                      </span>
                      <div className="flex items-center justify-center text-[#111111] mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#111111]" />
                        ))}
                      </div>
                      <span className="text-[11px] text-[#707072] font-mono mt-1 block">
                        총 {product.reviewCount}개 리뷰
                      </span>
                    </div>

                    <div className="space-y-1 text-xs">
                      <p className="font-semibold text-[#111111]">
                        구매 고객의 {specs.satisfactionRate}%가 이 상품을 강력 추천합니다.
                      </p>
                      <p className="text-[#707072]">
                        원단 품질 만족도 97% · 사이즈 적합도 94% · 배송 신속도 99%
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowWriteReview((v) => !v)}
                    className="py-2.5 px-5 bg-[#111111] text-white rounded-full text-xs font-medium hover:bg-black transition-colors cursor-pointer shrink-0"
                  >
                    {showWriteReview ? '작성 취소' : '+ 리뷰 작성하기'}
                  </button>
                </div>

                {/* Write Review Form */}
                {showWriteReview && (
                  <form
                    onSubmit={handleSubmitNewReview}
                    className="bg-white p-6 border border-[#111111] space-y-4 rounded-none"
                  >
                    <h4 className="text-sm font-semibold text-[#111111]">구매 상품 포토 리뷰 작성</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#111111] mb-1">
                          별점 선택
                        </label>
                        <select
                          value={newReviewRating}
                          onChange={(e) => setNewReviewRating(Number(e.target.value))}
                          className="w-full text-xs p-2.5 border border-[#cacacb] rounded-none bg-[#f5f5f5]"
                        >
                          <option value={5}>★★★★★ 5점 (아주 만족해요)</option>
                          <option value={4}>★★★★☆ 4점 (만족해요)</option>
                          <option value={3}>★★★☆☆ 3점 (보통이에요)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#111111] mb-1">
                          나의 체형 정보 (키 / 몸무게)
                        </label>
                        <input
                          type="text"
                          value={newReviewUserSpecs}
                          onChange={(e) => setNewReviewUserSpecs(e.target.value)}
                          placeholder="예: 172cm · 65kg"
                          className="w-full text-xs p-2.5 border border-[#cacacb] rounded-none bg-[#f5f5f5]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#111111] mb-1">
                        리뷰 내용
                      </label>
                      <textarea
                        rows={3}
                        value={newReviewText}
                        onChange={(e) => setNewReviewText(e.target.value)}
                        placeholder="착용감, 핏, 소재감에 대한 솔직한 후기를 남겨주세요."
                        className="w-full text-xs p-3 border border-[#cacacb] rounded-none focus:outline-none focus:border-[#111111]"
                        required
                      />
                    </div>

                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        onClick={() => setShowWriteReview(false)}
                        className="px-4 py-2 text-xs border border-[#cacacb] rounded-full font-medium"
                      >
                        취소
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 text-xs bg-[#111111] text-white rounded-full font-medium hover:bg-black cursor-pointer"
                      >
                        등록하기
                      </button>
                    </div>
                  </form>
                )}

                {/* Reviews List */}
                <div className="space-y-4">
                  {combinedReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-5 border border-[#e5e5e5] bg-white rounded-none space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-xs font-semibold text-[#111111]">{rev.author}</span>
                          <span className="text-[10px] bg-[#f5f5f5] text-[#707072] px-2 py-0.5 rounded-full font-mono">
                            {rev.level}
                          </span>
                          <span className="text-xs text-[#707072] font-mono">{rev.userSpecs}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex text-[#111111]">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-[#111111]" />
                            ))}
                          </div>
                          <span className="text-xs text-[#707072] font-mono">{rev.date}</span>
                        </div>
                      </div>

                      <div className="text-[11px] text-[#707072]">
                        구매 옵션: <span className="text-[#111111] font-medium">{rev.selectedOption}</span>
                      </div>

                      {rev.tags && rev.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {rev.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-[#f5f5f5] text-[#111111] px-2.5 py-0.5 rounded-full font-medium"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-4 pt-1">
                        {rev.photoUrl && (
                          <div className="w-16 h-20 overflow-hidden bg-[#f5f5f5] shrink-0 border border-[#e5e5e5] rounded-none">
                            <img
                              src={rev.photoUrl}
                              alt="Review attachment"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <p className="text-xs text-[#111111] leading-relaxed font-normal flex-1">
                          {rev.content}
                        </p>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => handleLikeReview(rev.id)}
                          className="flex items-center space-x-1.5 text-xs text-[#707072] hover:text-[#111111] border border-[#cacacb] px-3 py-1 rounded-full hover:bg-[#f5f5f5] transition-colors cursor-pointer"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>도움이 돼요 {rev.likes}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: SHIPPING & RETURNS */}
            {activeTab === 'shipping' && (
              <div className="space-y-4 text-xs text-[#111111]">
                <div className="bg-[#f5f5f5] p-6 border border-[#e5e5e5] rounded-none space-y-2">
                  <h4 className="font-semibold text-[#111111] flex items-center space-x-2">
                    <Truck className="w-4 h-4" />
                    <span>배송 안내</span>
                  </h4>
                  <ul className="space-y-1 text-[#707072]">
                    <li>· 배송 방법 : CJ대한통운 전담 택배</li>
                    <li>· 배송 비용 : MONO:DAY 전 상품 무료 배송</li>
                    <li>· 배송 기간 : 평일 오후 2시 이전 결제 완료 시 당일 출고 (영업일 기준 1~2일 소요)</li>
                    <li>· 제주 및 도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</li>
                  </ul>
                </div>

                <div className="bg-[#f5f5f5] p-6 border border-[#e5e5e5] rounded-none space-y-2">
                  <h4 className="font-semibold text-[#111111] flex items-center space-x-2">
                    <RefreshCw className="w-4 h-4" />
                    <span>교환 및 반품 안내</span>
                  </h4>
                  <ul className="space-y-1 text-[#707072]">
                    <li>· 신청 기간 : 상품 수령일로부터 7일 이내 신청 가능</li>
                    <li>· 교환/반품 비용 : 단순 변심 시 왕복 택배비 6,000원 (상품 불량 시 전액 무료)</li>
                    <li>· 반품 불가 사유 : 택 분실/훼손, 상품 착용 흔적, 오염, 세탁 또는 수선된 상품</li>
                  </ul>
                </div>

                <div className="bg-[#f5f5f5] p-6 border border-[#e5e5e5] rounded-none space-y-2">
                  <h4 className="font-semibold text-[#111111] flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>정품 및 품질 보증</span>
                  </h4>
                  <p className="text-[#707072] leading-relaxed">
                    MONO:DAY에서 판매되는 모든 제품은 브랜드 공식 라이선스 및 정품 인증을 거친 100% 정품입니다. 위조품일 경우 구매 금액의 200%를 보상해 드립니다.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
