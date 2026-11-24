import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onApplySearchFilter: (query: string) => void;
}

const TRENDING_SEARCHES = [
  '마르디 메르크디',
  '던스트 아우터',
  '스탠드오일',
  '살로몬 XT-6',
  '아모멘토 셔츠',
  '렉토 와이드 데님',
  '트렌치코트'
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onApplySearchFilter
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const searchResults = trimmed
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(trimmed) ||
            p.brand.toLowerCase().includes(trimmed) ||
            p.description.toLowerCase().includes(trimmed) ||
            p.category.toLowerCase().includes(trimmed)
        )
        .slice(0, 5)
    : [];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'Enter' && query.trim()) {
      onApplySearchFilter(query.trim());
      onClose();
    }
  };

  const handleTrendingClick = (tag: string) => {
    setQuery(tag);
    onApplySearchFilter(tag);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 transition-opacity duration-300">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="bg-white w-full max-w-2xl p-6 sm:p-8 rounded-none border border-[#cacacb] shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
          aria-label="Close search"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-xs font-semibold tracking-widest text-[#707072] uppercase mb-4">
          SEARCH MONO:DAY
        </h3>

        {/* Input Bar (Nike search-pill input) */}
        <div className="relative border-b-2 border-[#111111] pb-3">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="감각적인 브랜드, 상품명, 키워드를 검색해보세요."
            className="w-full text-base sm:text-lg focus:outline-none pr-10 font-normal text-[#111111] placeholder:text-[#9e9ea0]"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="absolute right-0 top-1 text-[#707072] hover:text-[#111111] p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <Search className="w-5 h-5 absolute right-0 top-1 text-[#707072] pointer-events-none" />
          )}
        </div>

        {/* Live Search Results */}
        {query.trim() && (
          <div className="mt-4 border-b border-[#e5e5e5] pb-4">
            <span className="text-[11px] font-medium text-[#707072] tracking-wider uppercase block mb-3">
              MATCHING PRODUCTS ({searchResults.length})
            </span>
            {searchResults.length === 0 ? (
              <p className="text-xs text-[#707072] py-3">일치하는 검색 결과가 없습니다.</p>
            ) : (
              <div className="space-y-2">
                {searchResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onSelectProduct(item);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2 rounded-none hover:bg-[#f5f5f5] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center space-x-3 overflow-hidden">
                      <img
                        src={item.img1}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-12 object-cover bg-[#f5f5f5] shrink-0 border border-[#e5e5e5]"
                      />
                      <div className="truncate">
                        <span className="text-[10px] font-medium text-[#707072] uppercase">
                          {item.brand}
                        </span>
                        <h4 className="text-xs font-medium text-[#111111] truncate">{item.name}</h4>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#111111] shrink-0 ml-3 tabular-nums">
                      ₩{item.price.toLocaleString()}
                    </span>
                  </div>
                ))}
                <button
                  onClick={() => {
                    onApplySearchFilter(query.trim());
                    onClose();
                  }}
                  className="w-full text-center text-xs text-[#111111] font-semibold pt-2 flex items-center justify-center space-x-1 hover:underline cursor-pointer"
                >
                  <span>"{query}" 전체 검색 결과 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Trending Searches (Nike filter-chip pills) */}
        <div className="mt-6 space-y-3">
          <span className="text-[11px] font-semibold text-[#707072] tracking-wider uppercase block">
            TRENDING SEARCHES
          </span>
          <div className="flex flex-wrap gap-2">
            {TRENDING_SEARCHES.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTrendingClick(tag)}
                className="text-xs bg-[#f5f5f5] hover:bg-[#111111] hover:text-white border border-[#cacacb] hover:border-[#111111] px-4 py-1.5 rounded-full transition-colors font-medium text-[#111111] cursor-pointer"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
