import React, { useState } from 'react';
import { Camera, Heart, ShoppingBag, Eye, Sparkles, MapPin, Tag } from 'lucide-react';
import { SNAP_LOOKS } from '../data/snaps';
import { Product } from '../data/products';

interface SnapPageProps {
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
}

export const SnapPage: React.FC<SnapPageProps> = ({
  allProducts,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [likedSnaps, setLikedSnaps] = useState<Record<string, number>>({});

  const styles = [
    { id: 'all', label: '전체 스냅' },
    { id: 'minimal', label: '미니멀 (Minimal)' },
    { id: 'gorpcore', label: '고프코어 (Gorpcore)' },
    { id: 'street', label: '스트릿 (Street)' },
    { id: 'classic', label: '클래식 (Classic)' }
  ];

  const filteredSnaps = SNAP_LOOKS.filter(
    (snap) => selectedStyle === 'all' || snap.style === selectedStyle
  );

  const handleLikeSnap = (snapId: string, initialLikes: number) => {
    setLikedSnaps((prev) => {
      const current = prev[snapId] !== undefined ? prev[snapId] : initialLikes;
      const isAlready = prev[snapId] !== undefined && prev[snapId] > initialLikes;
      return {
        ...prev,
        [snapId]: isAlready ? initialLikes : current + 1
      };
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 pt-4 sm:pt-5 pb-10 sm:pb-12">
      {/* Banner */}
      <div className="bg-[#111111] text-white px-6 py-5 sm:px-8 sm:py-6 mb-4 border border-[#39393b] rounded-none">
        <div className="max-w-4xl space-y-1.5">
          <div className="inline-flex items-center space-x-2 text-[#cacacb] text-xs font-semibold tracking-wider uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>INTERACTIVE STYLE SNAP &amp; LOOKBOOK</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.92] tracking-tight sm:whitespace-nowrap">
            MONO:DAY REALWAY SNAP
          </h1>
          <p className="text-xs sm:text-sm text-[#cacacb] font-normal leading-relaxed pt-0.5 sm:whitespace-nowrap break-keep">
            모델과 크리에이터들이 착용한 실제 사이트 판매 상품들의 스타일링 룩북입니다.
            <br />
            사진 속 모델이 입고 있는 옷 위로 마우스 커서를 올리면 실시간 착용 상품의 브랜드, 가격, 구매 바로가기 팝업이 나타납니다.
          </p>
        </div>
      </div>

      {/* Style Filter Tabs (Nike filter-chip row) */}
      <div className="flex items-center space-x-2 sm:space-x-3 pt-2 pb-4 border-b border-[#e5e5e5] mb-5 overflow-x-auto">
        {styles.map((st) => (
          <button
            key={st.id}
            onClick={() => setSelectedStyle(st.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer whitespace-nowrap ${
              selectedStyle === st.id
                ? 'bg-[#111111] text-white'
                : 'bg-white text-[#111111] border border-[#cacacb] hover:border-[#111111]'
            }`}
          >
            {st.label}
          </button>
        ))}
      </div>

      {/* Snap Look Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredSnaps.map((snap) => {
          const currentLikes =
            likedSnaps[snap.id] !== undefined ? likedSnaps[snap.id] : snap.likes;
          const isLiked =
            likedSnaps[snap.id] !== undefined && likedSnaps[snap.id] > snap.likes;

          return (
            <div
              key={snap.id}
              className="bg-white border border-[#e5e5e5] rounded-none flex flex-col justify-between"
            >
              {/* Top Model Info Bar */}
              <div className="p-5 border-b border-[#e5e5e5] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-[#707072] uppercase block">
                    {snap.styleLabel}
                  </span>
                  <div className="flex items-center space-x-3 text-xs text-[#707072] font-normal mt-1">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#707072]" />
                      <span>{snap.location}</span>
                    </span>
                    <span>·</span>
                    <span>{snap.modelInfo}</span>
                  </div>
                </div>

                {/* Like Button (Nike pill) */}
                <button
                  onClick={() => handleLikeSnap(snap.id, snap.likes)}
                  className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors border cursor-pointer ${
                    isLiked
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-[#f5f5f5] text-[#111111] border-[#cacacb] hover:border-[#111111]'
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      isLiked ? 'text-white fill-white' : 'text-[#707072]'
                    }`}
                  />
                  <span>{currentLikes}</span>
                </button>
              </div>

              {/* Main Image with Interactive Hotspots */}
              <div className="relative aspect-[3/4] w-full bg-[#111111] overflow-hidden group select-none">
                <img
                  src={snap.image}
                  alt={snap.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />

                {/* Hover Helper Notice on Top-Left */}
                <div className="absolute top-4 left-4 z-10 bg-black/75 text-white text-[11px] px-3.5 py-1.5 rounded-full font-normal flex items-center space-x-1.5 pointer-events-none">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span>옷 위의 포인트를 마우스로 가리켜보세요</span>
                </div>

                {/* Interactive Hotspot Pins */}
                {snap.hotspots.map((hs) => {
                  const product = allProducts.find((p) => p.id === hs.productId);
                  if (!product) return null;

                  const isActive = activeHotspotId === hs.id;
                  const openBelow = hs.y < 38;
                  const alignClass =
                    hs.x < 28
                      ? 'left-0'
                      : hs.x > 72
                      ? 'right-0'
                      : 'left-1/2 -translate-x-1/2';

                  return (
                    <div
                      key={hs.id}
                      style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                        isActive ? 'z-30' : 'z-20'
                      }`}
                      onMouseEnter={() => setActiveHotspotId(hs.id)}
                      onMouseLeave={() => setActiveHotspotId(null)}
                    >
                      {/* Hotspot Dot (clean dot without text) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspotId((prev) => (prev === hs.id ? null : hs.id));
                        }}
                        className="relative w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
                        aria-label={`View ${hs.label}: ${product.name}`}
                      >
                        <span
                          className={`block w-4 h-4 rounded-full transition-all ${
                            isActive
                              ? 'bg-[#111111] ring-2 ring-white scale-115 shadow-lg'
                              : 'bg-white ring-2 ring-black/15 shadow-md hover:scale-115'
                          }`}
                        />
                      </button>

                      {/* Hotspot Floating Product Card Popup (seamless hover bridge touching dot) */}
                      {isActive && (
                        <div
                          className={`absolute z-30 w-64 ${alignClass} ${
                            openBelow ? 'top-full pt-1' : 'bottom-full pb-1'
                          } pointer-events-auto`}
                        >
                          <div className="bg-white rounded-none p-3.5 shadow-xl border border-[#cacacb] text-[#111111]">
                            <div className="flex items-center space-x-3">
                              <img
                                src={product.img1}
                                alt={product.name}
                                referrerPolicy="no-referrer"
                                className="w-12 h-16 object-cover bg-[#f5f5f5] shrink-0"
                              />
                              <div className="min-w-0 flex-1">
                                <span className="text-[9px] font-medium text-[#707072] uppercase block truncate">
                                  {product.brand} · {hs.label}
                                </span>
                                <h4
                                  onClick={() => onSelectProduct(product)}
                                  className="text-xs font-medium text-[#111111] truncate cursor-pointer hover:underline"
                                  title={product.name}
                                >
                                  {product.name}
                                </h4>
                                <div className="flex items-baseline space-x-1.5 mt-1 text-xs">
                                  <span className="font-medium text-[#111111] tabular-nums">
                                    ₩{product.price.toLocaleString()}
                                  </span>
                                  {product.discount > 0 && (
                                    <span className="text-[10px] text-[#d30005] font-medium">
                                      {product.discount}% off
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Quick Actions inside popup (Nike pill buttons) */}
                            <div className="mt-2.5 pt-2 border-t border-[#e5e5e5] grid grid-cols-2 gap-1.5">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectProduct(product);
                                }}
                                className="py-1.5 px-2 bg-[#f5f5f5] hover:bg-[#e5e5e5] text-[#111111] text-[10px] font-medium rounded-full flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                              >
                                <Eye className="w-3 h-3" />
                                <span>상세보기</span>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onAddToCart(product);
                                }}
                                className="py-1.5 px-2 bg-[#111111] hover:bg-black text-white text-[10px] font-medium rounded-full flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                              >
                                <ShoppingBag className="w-3 h-3" />
                                <span>+ 담기</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Breakdown of Outfits Worn in This Snap */}
              <div className="p-5 bg-[#f5f5f5] border-t border-[#e5e5e5]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#111111] uppercase flex items-center space-x-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#707072]" />
                    <span>이 룩의 착용 상품 ({snap.hotspots.length})</span>
                  </span>
                  <span className="text-[11px] text-[#707072]">
                    마우스로 개별 상품을 클릭해보세요
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {snap.hotspots.map((hs) => {
                    const product = allProducts.find((p) => p.id === hs.productId);
                    if (!product) return null;

                    return (
                      <div
                        key={hs.id}
                        onClick={() => onSelectProduct(product)}
                        className="bg-white p-2.5 border border-[#e5e5e5] hover:border-[#111111] transition-colors cursor-pointer flex flex-col justify-between rounded-none"
                      >
                        <div className="flex items-center space-x-2">
                          <img
                            src={product.img1}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="w-8 h-10 object-cover bg-[#f5f5f5] shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="text-[9px] text-[#707072] font-medium block">
                              {hs.label}
                            </span>
                            <p className="text-[11px] font-medium text-[#111111] truncate">
                              {product.brand}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#e5e5e5] text-[10px]">
                          <span className="font-medium text-[#111111]">
                            ₩{product.price.toLocaleString()}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToCart(product);
                            }}
                            className="text-[#707072] hover:text-[#111111] p-0.5"
                            title="장바구니 담기"
                          >
                            <ShoppingBag className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
