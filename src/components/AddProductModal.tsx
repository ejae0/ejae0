import React, { useState } from 'react';
import { X, PlusCircle, Sparkles, Check, AlertCircle } from 'lucide-react';
import { Product } from '../data/products';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: Product) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  onAddProduct
}) => {
  const [gender, setGender] = useState<'women' | 'men'>('women');
  const [categorySelection, setCategorySelection] = useState<string>('top');
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState<string>('89000');
  const [discount, setDiscount] = useState<string>('0');
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const SAMPLE_IMAGES: Record<string, { img1: string; img2: string }> = {
    top: {
      img1: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'
    },
    outer: {
      img1: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop'
    },
    bottom: {
      img1: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop'
    },
    skirt: {
      img1: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop'
    },
    dress: {
      img1: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop'
    },
    shoes: {
      img1: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop'
    },
    bag: {
      img1: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop'
    },
    acc: {
      img1: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop'
    }
  };

  const handleApplySampleImage = () => {
    const sample = SAMPLE_IMAGES[categorySelection] || SAMPLE_IMAGES.top;
    setImg1(sample.img1);
    setImg2(sample.img2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!brand.trim()) {
      setErrorMsg('브랜드명을 입력해주세요.');
      return;
    }
    if (!name.trim()) {
      setErrorMsg('상품명을 입력해주세요.');
      return;
    }
    const numPrice = parseInt(price, 10);
    if (isNaN(numPrice) || numPrice <= 0) {
      setErrorMsg('유효한 정가 가격을 입력해주세요.');
      return;
    }
    const numDiscount = Math.max(0, Math.min(99, parseInt(discount, 10) || 0));
    if (!img1.trim()) {
      setErrorMsg('메인 이미지 URL을 입력해주세요. (샘플 이미지 추천 버튼을 이용할 수 있습니다)');
      return;
    }

    const resolvedCategory: Product['category'] =
      categorySelection === 'skirt' || categorySelection === 'dress'
        ? 'dress_skirt'
        : (categorySelection as Product['category']);

    let defaultSizes = ['FREE'];
    if (resolvedCategory === 'shoes') {
      defaultSizes = ['240', '250', '260', '270', '280'];
    } else if (resolvedCategory === 'top' || resolvedCategory === 'outer' || resolvedCategory === 'bottom') {
      defaultSizes = ['S', 'M', 'L', 'XL'];
    } else if (resolvedCategory === 'dress_skirt') {
      defaultSizes = ['S', 'M', 'FREE'];
    }

    const newProd: Product = {
      id: `custom-prod-${Date.now()}`,
      gender,
      category: resolvedCategory,
      musinsaCategoryCode:
        resolvedCategory === 'top'
          ? '001'
          : resolvedCategory === 'outer'
          ? '002'
          : resolvedCategory === 'bottom'
          ? '003'
          : resolvedCategory === 'bag'
          ? '004'
          : resolvedCategory === 'dress_skirt'
          ? '100'
          : resolvedCategory === 'shoes'
          ? '103'
          : '101',
      brand: brand.trim(),
      name: name.trim(),
      price: numPrice,
      discount: numDiscount,
      img1: img1.trim(),
      img2: img2.trim() || img1.trim(),
      description: `${brand.trim()}의 신규 입점 상품 ${name.trim()}입니다. 감각적인 소재와 완성도 높은 실루엣을 제공합니다.`,
      details: [
        '관리자 GUI 등록 신규 공식 입점 상품',
        '엄격한 검수를 거친 100% 정품 보증',
        '사계절 편안하게 활용 가능한 웨어러블 디자인'
      ],
      colors: ['Classic Black', 'Muted Grey'],
      sizes: defaultSizes,
      isNew: true,
      isBest: false,
      bestRank: 999,
      salesCount3Days: 450,
      rankChange: 'new',
      releaseDate: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
      rating: 5.0,
      reviewCount: 1
    };

    onAddProduct(newProd);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="bg-white w-full max-w-2xl rounded-none shadow-2xl border border-[#cacacb] overflow-hidden relative my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] bg-[#f5f5f5]">
          <div className="flex items-center space-x-2 text-[#111111] font-semibold text-sm">
            <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center">
              <PlusCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#111111]">신규 상품 등록 (Add Product)</h3>
              <p className="text-[11px] text-[#707072] font-normal">
                관리자 권한으로 카탈로그에 새로운 상품을 직접 등록합니다.
              </p>
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

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* Row 1: Gender & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#707072] uppercase tracking-wider mb-1.5">
                구분 (Gender) <span className="text-[#d30005]">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGender('women')}
                  className={`py-2 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                    gender === 'women'
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#111111] border-[#cacacb] hover:border-[#111111]'
                  }`}
                >
                  여성 (women)
                </button>
                <button
                  type="button"
                  onClick={() => setGender('men')}
                  className={`py-2 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                    gender === 'men'
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#111111] border-[#cacacb] hover:border-[#111111]'
                  }`}
                >
                  남성 (men)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#707072] uppercase tracking-wider mb-1.5">
                세부 카테고리 (Category) <span className="text-[#d30005]">*</span>
              </label>
              <select
                value={categorySelection}
                onChange={(e) => setCategorySelection(e.target.value)}
                className="w-full text-xs font-medium px-4 py-2 border border-[#cacacb] rounded-full bg-white focus:outline-none focus:border-[#111111] cursor-pointer"
              >
                <option value="top">상의 (Top)</option>
                <option value="outer">아우터 (Outer)</option>
                <option value="bottom">하의 (Bottom)</option>
                <option value="skirt">스커트 (Skirt)</option>
                <option value="dress">원피스 (Dress)</option>
                <option value="shoes">신발 (Shoes)</option>
                <option value="bag">가방 (Bag)</option>
                <option value="acc">액세서리 (Accessory)</option>
              </select>
            </div>
          </div>

          {/* Row 2: Brand & Product Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#707072] uppercase tracking-wider mb-1.5">
                브랜드명 (Brand) <span className="text-[#d30005]">*</span>
              </label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="예: MILLO, DUNST, MARDI MERCREDI"
                required
                className="w-full text-xs px-4 py-2 border border-[#cacacb] rounded-full focus:outline-none focus:border-[#111111]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#707072] uppercase tracking-wider mb-1.5">
                상품명 (Product Name) <span className="text-[#d30005]">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="예: 오버핏 울 싱글 블레이저 자켓"
                required
                className="w-full text-xs px-4 py-2 border border-[#cacacb] rounded-full focus:outline-none focus:border-[#111111]"
              />
            </div>
          </div>

          {/* Row 3: Price & Discount */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#707072] uppercase tracking-wider mb-1.5">
                정가 가격 (KRW) <span className="text-[#d30005]">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1000"
                  step="100"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="89000"
                  required
                  className="w-full text-xs px-4 py-2 border border-[#cacacb] rounded-full focus:outline-none focus:border-[#111111] pr-8 font-mono"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#707072]">원</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#707072] uppercase tracking-wider mb-1.5">
                할인율 (Discount %)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="99"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="0"
                  className="w-full text-xs px-4 py-2 border border-[#cacacb] rounded-full focus:outline-none focus:border-[#111111] pr-8 font-mono"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#707072]">%</span>
              </div>
            </div>
          </div>

          {/* Row 4: Image URLs + Quick Sample Fill Button */}
          <div className="space-y-3 border-t border-[#e5e5e5] pt-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                상품 이미지 설정
              </span>
              <button
                type="button"
                onClick={handleApplySampleImage}
                className="inline-flex items-center space-x-1 text-[11px] font-medium text-[#111111] bg-[#f5f5f5] hover:bg-[#e5e5e5] border border-[#cacacb] px-3 py-1 rounded-full transition-colors cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-[#111111]" />
                <span>카테고리 맞춤 고화질 이미지 채우기</span>
              </button>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#707072] mb-1">
                메인 이미지 URL (Main Image URL) <span className="text-[#d30005]">*</span>
              </label>
              <input
                type="url"
                value={img1}
                onChange={(e) => setImg1(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                required
                className="w-full text-xs px-4 py-2 border border-[#cacacb] rounded-full focus:outline-none focus:border-[#111111] font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#707072] mb-1">
                호버 이미지 URL (Hover Image URL, 선택)
              </label>
              <input
                type="url"
                value={img2}
                onChange={(e) => setImg2(e.target.value)}
                placeholder="https://images.unsplash.com/... (미입력 시 메인 이미지와 동일)"
                className="w-full text-xs px-4 py-2 border border-[#cacacb] rounded-full focus:outline-none focus:border-[#111111] font-mono"
              />
            </div>

            {/* Image Preview */}
            {img1 && (
              <div className="flex items-center space-x-4 bg-[#f5f5f5] p-2.5 border border-[#e5e5e5]">
                <div className="w-14 h-16 overflow-hidden bg-white border border-[#cacacb] shrink-0">
                  <img
                    src={img1}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] text-[#707072] truncate flex-1 font-mono">
                  <span className="text-[#007d48] font-medium block">이미지 미리보기 성공</span>
                  <span className="truncate block">{img1}</span>
                </div>
              </div>
            )}
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="flex items-center space-x-1.5 text-xs text-[#d30005] bg-[#f5f5f5] p-2.5 border border-[#d30005]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Action Buttons (Nike pill buttons) */}
          <div className="pt-3 border-t border-[#e5e5e5] flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs text-[#707072] hover:text-[#111111] font-medium transition-colors cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-xs bg-[#111111] text-white rounded-full font-medium hover:bg-black transition-all cursor-pointer shadow-sm flex items-center space-x-1.5 active:scale-95"
            >
              <Check className="w-4 h-4" />
              <span>상품 등록 완료</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
