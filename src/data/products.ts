export interface Product {
  id: string;
  gender: 'women' | 'men';
  category: 'top' | 'outer' | 'bottom' | 'dress_skirt' | 'shoes' | 'bag' | 'acc';
  musinsaCategoryCode?: string;
  brand: string;
  name: string;
  price: number;
  discount: number;
  img1: string;
  img2: string;
  description: string;
  details: string[];
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isBest?: boolean;
  bestRank: number; // 1 ~ 50
  salesCount3Days: number;
  rankChange: number | 'new' | 'same';
  releaseDate?: string;
  rating: number;
  reviewCount: number;
  isTimeSale?: boolean;
  regularPrice?: number;
  regularDiscount?: number;
}

export interface SubCategory {
  id: string;
  label: string;
}

export const SUBCATEGORIES: Record<'women' | 'men' | 'all', SubCategory[]> = {
  all: [
    { id: 'all', label: '전체' },
    { id: 'top', label: '상의' },
    { id: 'outer', label: '아우터' },
    { id: 'bottom', label: '하의' },
    { id: 'dress_skirt', label: '스커트/원피스' },
    { id: 'shoes', label: '신발' },
    { id: 'bag', label: '가방' },
    { id: 'acc', label: '액세서리' }
  ],
  women: [
    { id: 'all', label: '전체' },
    { id: 'top', label: '상의' },
    { id: 'outer', label: '아우터' },
    { id: 'bottom', label: '하의' },
    { id: 'dress_skirt', label: '스커트/원피스' },
    { id: 'shoes', label: '신발' },
    { id: 'bag', label: '가방' },
    { id: 'acc', label: '액세서리' }
  ],
  men: [
    { id: 'all', label: '전체' },
    { id: 'top', label: '상의' },
    { id: 'outer', label: '아우터' },
    { id: 'bottom', label: '하의' },
    { id: 'shoes', label: '신발' },
    { id: 'bag', label: '가방' },
    { id: 'acc', label: '액세서리' }
  ]
};

export const PRODUCTS: Product[] = [
  {
    "id": "top-1",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "Mardi Mercredi",
    "name": "SWEATSHIRT FLOWERMARDI",
    "price": 87000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "Mardi Mercredi의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 1,
    "salesCount3Days": 2475,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 109
  },
  {
    "id": "top-2",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "UNIFORM BRIDGE",
    "name": "1960s Heavyweight Sweatshirt",
    "price": 93000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "UNIFORM BRIDGE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 2,
    "salesCount3Days": 2450,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 138
  },
  {
    "id": "top-3",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "COOR",
    "name": "Cashmere Blend Minimal Knit",
    "price": 126000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    "description": "COOR의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 3,
    "salesCount3Days": 2425,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 167
  },
  {
    "id": "top-4",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "SATUR",
    "name": "Classic Logo Short Sleeve Tee",
    "price": 69000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    "description": "SATUR의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 4,
    "salesCount3Days": 2400,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 196
  },
  {
    "id": "top-5",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "Marithé François Girbaud",
    "name": "Sheer Cotton Button Shirt",
    "price": 162000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "description": "Marithé François Girbaud의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 5,
    "salesCount3Days": 2375,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 225
  },
  {
    "id": "top-6",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "ANDERSSON BELL",
    "name": "Boucle Texture Oversized Cardigan",
    "price": 175000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "ANDERSSON BELL의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 6,
    "salesCount3Days": 2350,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 254
  },
  {
    "id": "top-7",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "AMOMENTO",
    "name": "Paper Touch Pocket Shirt",
    "price": 79000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "AMOMENTO의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 7,
    "salesCount3Days": 2245,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 283
  },
  {
    "id": "top-8",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "THOMAS MORE",
    "name": "Washed Waffle L/S T-Shirt",
    "price": 101000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    "description": "THOMAS MORE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 8,
    "salesCount3Days": 2220,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 312
  },
  {
    "id": "top-9",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "POLYTERU",
    "name": "Ribbed Half Zip-up Knit",
    "price": 142000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    "description": "POLYTERU의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 9,
    "salesCount3Days": 2195,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 341
  },
  {
    "id": "top-10",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "INSILENCE",
    "name": "Arch Logo Heavyweight Hoodie",
    "price": 92000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "description": "INSILENCE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 10,
    "salesCount3Days": 2170,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 370
  },
  {
    "id": "top-11",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "COVERNAT",
    "name": "Over-fit Cotton Poplin Shirt",
    "price": 112000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "COVERNAT의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 11,
    "salesCount3Days": 2145,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 399
  },
  {
    "id": "top-12",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "thisisneverthat",
    "name": "Crop Knit Vest [Butter Cream]",
    "price": 93000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "thisisneverthat의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 12,
    "salesCount3Days": 2120,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 428
  },
  {
    "id": "top-13",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "DRAW FIT",
    "name": "Fine Merino Wool Turtleneck",
    "price": 114000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    "description": "DRAW FIT의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 13,
    "salesCount3Days": 2015,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 457
  },
  {
    "id": "top-14",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "YALE",
    "name": "Vintage Washed Graphic T-shirt",
    "price": 52000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    "description": "YALE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 14,
    "salesCount3Days": 1990,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 486
  },
  {
    "id": "top-15",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "MUSINSA STANDARD",
    "name": "Cable Knit Pullover Sweater",
    "price": 147000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "description": "MUSINSA STANDARD의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 15,
    "salesCount3Days": 1965,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 515
  },
  {
    "id": "top-16",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "POTTERY",
    "name": "SWEATSHIRT FLOWERMARDI [Ver.2]",
    "price": 99000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "POTTERY의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 16,
    "salesCount3Days": 1940,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 544
  },
  {
    "id": "top-17",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "BROWNYARD",
    "name": "1960s Heavyweight Sweatshirt [Ver.2]",
    "price": 77000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "BROWNYARD의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 17,
    "salesCount3Days": 1915,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 573
  },
  {
    "id": "top-18",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "NOIR",
    "name": "Cashmere Blend Minimal Knit [Ver.2]",
    "price": 138000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    "description": "NOIR의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 18,
    "salesCount3Days": 1890,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 602
  },
  {
    "id": "top-19",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "BELIER",
    "name": "Classic Logo Short Sleeve Tee [Ver.2]",
    "price": 53000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    "description": "BELIER의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 19,
    "salesCount3Days": 1785,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 631
  },
  {
    "id": "top-20",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "ADER ERROR",
    "name": "Sheer Cotton Button Shirt [Ver.2]",
    "price": 174000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "description": "ADER ERROR의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 20,
    "salesCount3Days": 1760,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 660
  },
  {
    "id": "top-21",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "Mardi Mercredi",
    "name": "Boucle Texture Oversized Cardigan [Ver.2]",
    "price": 159000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "Mardi Mercredi의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 21,
    "salesCount3Days": 1735,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 689
  },
  {
    "id": "top-22",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "UNIFORM BRIDGE",
    "name": "Paper Touch Pocket Shirt [Ver.2]",
    "price": 91000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "UNIFORM BRIDGE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 22,
    "salesCount3Days": 1710,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 718
  },
  {
    "id": "top-23",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "COOR",
    "name": "Washed Waffle L/S T-Shirt [Ver.2]",
    "price": 113000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    "description": "COOR의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 23,
    "salesCount3Days": 1685,
    "rankChange": 2,
    "releaseDate": "2026.10.07",
    "rating": 4.7,
    "reviewCount": 747
  },
  {
    "id": "top-24",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "SATUR",
    "name": "Ribbed Half Zip-up Knit [Ver.2]",
    "price": 126000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    "description": "SATUR의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 24,
    "salesCount3Days": 1660,
    "rankChange": -1,
    "releaseDate": "2026.10.06",
    "rating": 4.7,
    "reviewCount": 776
  },
  {
    "id": "top-25",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "Marithé François Girbaud",
    "name": "Arch Logo Heavyweight Hoodie [Ver.2]",
    "price": 104000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "description": "Marithé François Girbaud의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 25,
    "salesCount3Days": 1555,
    "rankChange": -2,
    "releaseDate": "2026.10.05",
    "rating": 4.7,
    "reviewCount": 805
  },
  {
    "id": "top-26",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "ANDERSSON BELL",
    "name": "Over-fit Cotton Poplin Shirt [Ver.2]",
    "price": 96000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "ANDERSSON BELL의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 26,
    "salesCount3Days": 1530,
    "rankChange": "new",
    "releaseDate": "2026.10.04",
    "rating": 4.7,
    "reviewCount": 834
  },
  {
    "id": "top-27",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "AMOMENTO",
    "name": "Crop Knit Vest [Butter Cream] [Ver.2]",
    "price": 105000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "AMOMENTO의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 27,
    "salesCount3Days": 1505,
    "rankChange": 3,
    "releaseDate": "2026.10.03",
    "rating": 4.7,
    "reviewCount": 863
  },
  {
    "id": "top-28",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "THOMAS MORE",
    "name": "Fine Merino Wool Turtleneck [Ver.2]",
    "price": 98000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    "description": "THOMAS MORE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 28,
    "salesCount3Days": 1480,
    "rankChange": "same",
    "releaseDate": "2026.10.30",
    "rating": 4.7,
    "reviewCount": 892
  },
  {
    "id": "top-29",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "POLYTERU",
    "name": "Vintage Washed Graphic T-shirt [Ver.2]",
    "price": 64000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    "description": "POLYTERU의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 29,
    "salesCount3Days": 1455,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 921
  },
  {
    "id": "top-30",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "INSILENCE",
    "name": "Cable Knit Pullover Sweater [Ver.3]",
    "price": 159000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "description": "INSILENCE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 30,
    "salesCount3Days": 1430,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 100
  },
  {
    "id": "top-31",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "COVERNAT",
    "name": "SWEATSHIRT FLOWERMARDI [Ver.3]",
    "price": 83000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "COVERNAT의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 31,
    "salesCount3Days": 1325,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 129
  },
  {
    "id": "top-32",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "thisisneverthat",
    "name": "1960s Heavyweight Sweatshirt [Ver.3]",
    "price": 89000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "thisisneverthat의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 32,
    "salesCount3Days": 1300,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 158
  },
  {
    "id": "top-33",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "DRAW FIT",
    "name": "Cashmere Blend Minimal Knit [Ver.3]",
    "price": 122000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    "description": "DRAW FIT의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 33,
    "salesCount3Days": 1275,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 187
  },
  {
    "id": "top-34",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "YALE",
    "name": "Classic Logo Short Sleeve Tee [Ver.3]",
    "price": 65000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    "description": "YALE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 34,
    "salesCount3Days": 1250,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 216
  },
  {
    "id": "top-35",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "MUSINSA STANDARD",
    "name": "Sheer Cotton Button Shirt [Ver.3]",
    "price": 158000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "description": "MUSINSA STANDARD의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 35,
    "salesCount3Days": 1225,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 245
  },
  {
    "id": "top-36",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "POTTERY",
    "name": "Boucle Texture Oversized Cardigan [Ver.3]",
    "price": 171000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "POTTERY의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 36,
    "salesCount3Days": 1200,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 274
  },
  {
    "id": "top-37",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "BROWNYARD",
    "name": "Paper Touch Pocket Shirt [Ver.3]",
    "price": 103000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "BROWNYARD의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 37,
    "salesCount3Days": 1095,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 303
  },
  {
    "id": "top-38",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "NOIR",
    "name": "Washed Waffle L/S T-Shirt [Ver.3]",
    "price": 97000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    "description": "NOIR의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 38,
    "salesCount3Days": 1070,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 332
  },
  {
    "id": "top-39",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "BELIER",
    "name": "Ribbed Half Zip-up Knit [Ver.3]",
    "price": 138000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    "description": "BELIER의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 39,
    "salesCount3Days": 1045,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 361
  },
  {
    "id": "top-40",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "ADER ERROR",
    "name": "Arch Logo Heavyweight Hoodie [Ver.3]",
    "price": 88000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "description": "ADER ERROR의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 40,
    "salesCount3Days": 1020,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 390
  },
  {
    "id": "top-41",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "Mardi Mercredi",
    "name": "Over-fit Cotton Poplin Shirt [Ver.3]",
    "price": 108000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "Mardi Mercredi의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 41,
    "salesCount3Days": 995,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 419
  },
  {
    "id": "top-42",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "UNIFORM BRIDGE",
    "name": "Crop Knit Vest [Butter Cream] [Ver.3]",
    "price": 89000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "UNIFORM BRIDGE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 42,
    "salesCount3Days": 970,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 448
  },
  {
    "id": "top-43",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "COOR",
    "name": "Fine Merino Wool Turtleneck [Ver.3]",
    "price": 110000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    "description": "COOR의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 43,
    "salesCount3Days": 945,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 477
  },
  {
    "id": "top-44",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "SATUR",
    "name": "Vintage Washed Graphic T-shirt [Ver.3]",
    "price": 76000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    "description": "SATUR의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 44,
    "salesCount3Days": 840,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 506
  },
  {
    "id": "top-45",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "Marithé François Girbaud",
    "name": "Cable Knit Pullover Sweater [Ver.4]",
    "price": 143000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "description": "Marithé François Girbaud의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 45,
    "salesCount3Days": 815,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 535
  },
  {
    "id": "top-46",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "ANDERSSON BELL",
    "name": "SWEATSHIRT FLOWERMARDI [Ver.4]",
    "price": 95000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "ANDERSSON BELL의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 46,
    "salesCount3Days": 790,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 564
  },
  {
    "id": "top-47",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "AMOMENTO",
    "name": "1960s Heavyweight Sweatshirt [Ver.4]",
    "price": 73000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "AMOMENTO의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 47,
    "salesCount3Days": 765,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 593
  },
  {
    "id": "top-48",
    "gender": "men",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "THOMAS MORE",
    "name": "Cashmere Blend Minimal Knit [Ver.4]",
    "price": 134000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    "description": "THOMAS MORE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 48,
    "salesCount3Days": 740,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 622
  },
  {
    "id": "top-49",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "POLYTERU",
    "name": "Classic Logo Short Sleeve Tee [Ver.4]",
    "price": 49000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    "description": "POLYTERU의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 49,
    "salesCount3Days": 715,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 651
  },
  {
    "id": "top-50",
    "gender": "women",
    "category": "top",
    "musinsaCategoryCode": "001",
    "brand": "INSILENCE",
    "name": "Sheer Cotton Button Shirt [Ver.4]",
    "price": 170000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    "description": "INSILENCE의 시그니처 감성을 담은 24SS 상의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "상의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 610,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 680
  },
  {
    "id": "outer-1",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DUNST",
    "name": "UNISEX CLASSIC DOUBLE BREASTED TRENCH COAT",
    "price": 310000,
    "discount": 20,
    "img1": "/src/assets/images/editorial_bento_dunst_1793684669027.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 1,
    "salesCount3Days": 575,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 109
  },
  {
    "id": "outer-2",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "LOW CLASSIC",
    "name": "UNISEX BALMACAAN COAT [KHAKI]",
    "price": 342000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 2,
    "salesCount3Days": 588,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 138
  },
  {
    "id": "outer-3",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DUNST FOR MEN",
    "name": "Utility Pocket Shell Jacket [Black]",
    "price": 287000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST FOR MEN의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 3,
    "salesCount3Days": 601,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 167
  },
  {
    "id": "outer-4",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "POLYTERU",
    "name": "Minimal Wool Crop Blazer [Black]",
    "price": 368000,
    "discount": 15,
    "img1": "/src/assets/images/hero_quiet_luxury_1793684667332.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "POLYTERU의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 4,
    "salesCount3Days": 614,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 196
  },
  {
    "id": "outer-5",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "INSILENCE",
    "name": "Over-size Wool Double Trench Coat",
    "price": 373000,
    "discount": 25,
    "img1": "/src/assets/images/hero_spring_collection_1793684668384.jpg",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "INSILENCE의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 5,
    "salesCount3Days": 627,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 225
  },
  {
    "id": "outer-6",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "BELIER",
    "name": "Balmacaan Short Wool Jacket",
    "price": 294000,
    "discount": 10,
    "img1": "/src/assets/images/editorial_bento_dunst_1793684669027.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "BELIER의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 640,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 254
  },
  {
    "id": "outer-7",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "FACADE PATTERN",
    "name": "Minimalist Suede Trucker Jacket",
    "price": 328000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    "description": "FACADE PATTERN의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 573,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 283
  },
  {
    "id": "outer-8",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "AMOMENTO",
    "name": "Grandad Collar Quilted Jacket",
    "price": 380000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop",
    "description": "AMOMENTO의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 586,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 312
  },
  {
    "id": "outer-9",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "COOR",
    "name": "Structured Trench Parka [Sand]",
    "price": 312000,
    "discount": 25,
    "img1": "/src/assets/images/hero_quiet_luxury_1793684667332.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "COOR의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 599,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 341
  },
  {
    "id": "outer-10",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DOFF JASON",
    "name": "Vintage Leather Biker Jacket",
    "price": 357000,
    "discount": 20,
    "img1": "/src/assets/images/hero_spring_collection_1793684668384.jpg",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "DOFF JASON의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 612,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 370
  },
  {
    "id": "outer-11",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "LAFUDGESTORE",
    "name": "Semi-Over Wool Single Blazer",
    "price": 239000,
    "discount": 15,
    "img1": "/src/assets/images/editorial_bento_dunst_1793684669027.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "LAFUDGESTORE의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 625,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 399
  },
  {
    "id": "outer-12",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "MUSINSA STANDARD",
    "name": "Cropped Tweed Collarless Jacket",
    "price": 272000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    "description": "MUSINSA STANDARD의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 638,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 428
  },
  {
    "id": "outer-13",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "BARBOUR",
    "name": "Reversible Windbreaker Blouson",
    "price": 205000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop",
    "description": "BARBOUR의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 571,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 457
  },
  {
    "id": "outer-14",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "THE NORTH FACE",
    "name": "Handmade Cashmere Blend Robe Coat",
    "price": 428000,
    "discount": 25,
    "img1": "/src/assets/images/hero_quiet_luxury_1793684667332.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "THE NORTH FACE의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 584,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 486
  },
  {
    "id": "outer-15",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "thisisneverthat",
    "name": "UNISEX CLASSIC DOUBLE BREASTED TRENCH COAT [Ver.2]",
    "price": 310000,
    "discount": 5,
    "img1": "/src/assets/images/hero_spring_collection_1793684668384.jpg",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "thisisneverthat의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 597,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 515
  },
  {
    "id": "outer-16",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DUNST",
    "name": "UNISEX BALMACAAN COAT [KHAKI] [Ver.2]",
    "price": 342000,
    "discount": 15,
    "img1": "/src/assets/images/editorial_bento_dunst_1793684669027.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 610,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 544
  },
  {
    "id": "outer-17",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "LOW CLASSIC",
    "name": "Utility Pocket Shell Jacket [Black] [Ver.2]",
    "price": 287000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 623,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 573
  },
  {
    "id": "outer-18",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DUNST FOR MEN",
    "name": "Minimal Wool Crop Blazer [Black] [Ver.2]",
    "price": 368000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST FOR MEN의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 636,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 602
  },
  {
    "id": "outer-19",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "POLYTERU",
    "name": "Over-size Wool Double Trench Coat [Ver.2]",
    "price": 373000,
    "discount": 25,
    "img1": "/src/assets/images/hero_quiet_luxury_1793684667332.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "POLYTERU의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 569,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 631
  },
  {
    "id": "outer-20",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "INSILENCE",
    "name": "Balmacaan Short Wool Jacket [Ver.2]",
    "price": 294000,
    "discount": 15,
    "img1": "/src/assets/images/hero_spring_collection_1793684668384.jpg",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "INSILENCE의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 582,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 660
  },
  {
    "id": "outer-21",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "BELIER",
    "name": "Minimalist Suede Trucker Jacket [Ver.2]",
    "price": 328000,
    "discount": 10,
    "img1": "/src/assets/images/editorial_bento_dunst_1793684669027.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "BELIER의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 595,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 689
  },
  {
    "id": "outer-22",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "FACADE PATTERN",
    "name": "Grandad Collar Quilted Jacket [Ver.2]",
    "price": 380000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    "description": "FACADE PATTERN의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 608,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 718
  },
  {
    "id": "outer-23",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "AMOMENTO",
    "name": "Structured Trench Parka [Sand] [Ver.2]",
    "price": 312000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop",
    "description": "AMOMENTO의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 621,
    "rankChange": 2,
    "releaseDate": "2026.10.07",
    "rating": 4.7,
    "reviewCount": 747
  },
  {
    "id": "outer-24",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "COOR",
    "name": "Vintage Leather Biker Jacket [Ver.2]",
    "price": 357000,
    "discount": 25,
    "img1": "/src/assets/images/hero_quiet_luxury_1793684667332.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "COOR의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 634,
    "rankChange": -1,
    "releaseDate": "2026.10.06",
    "rating": 4.7,
    "reviewCount": 776
  },
  {
    "id": "outer-25",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DOFF JASON",
    "name": "Semi-Over Wool Single Blazer [Ver.2]",
    "price": 239000,
    "discount": 15,
    "img1": "/src/assets/images/hero_spring_collection_1793684668384.jpg",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "DOFF JASON의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 567,
    "rankChange": -2,
    "releaseDate": "2026.10.05",
    "rating": 4.7,
    "reviewCount": 805
  },
  {
    "id": "outer-26",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "LAFUDGESTORE",
    "name": "Cropped Tweed Collarless Jacket [Ver.2]",
    "price": 272000,
    "discount": 10,
    "img1": "/src/assets/images/editorial_bento_dunst_1793684669027.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "LAFUDGESTORE의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 580,
    "rankChange": "new",
    "releaseDate": "2026.10.04",
    "rating": 4.7,
    "reviewCount": 834
  },
  {
    "id": "outer-27",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "MUSINSA STANDARD",
    "name": "Reversible Windbreaker Blouson [Ver.2]",
    "price": 205000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    "description": "MUSINSA STANDARD의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 593,
    "rankChange": 3,
    "releaseDate": "2026.10.03",
    "rating": 4.7,
    "reviewCount": 863
  },
  {
    "id": "outer-28",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "BARBOUR",
    "name": "Handmade Cashmere Blend Robe Coat [Ver.3]",
    "price": 428000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop",
    "description": "BARBOUR의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 606,
    "rankChange": "same",
    "releaseDate": "2026.10.30",
    "rating": 4.7,
    "reviewCount": 892
  },
  {
    "id": "outer-29",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "THE NORTH FACE",
    "name": "UNISEX CLASSIC DOUBLE BREASTED TRENCH COAT [Ver.3]",
    "price": 310000,
    "discount": 20,
    "img1": "/src/assets/images/hero_quiet_luxury_1793684667332.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "THE NORTH FACE의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 619,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 921
  },
  {
    "id": "outer-30",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "thisisneverthat",
    "name": "UNISEX BALMACAAN COAT [KHAKI] [Ver.3]",
    "price": 342000,
    "discount": 5,
    "img1": "/src/assets/images/hero_spring_collection_1793684668384.jpg",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "thisisneverthat의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 632,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 100
  },
  {
    "id": "outer-31",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DUNST",
    "name": "Utility Pocket Shell Jacket [Black] [Ver.3]",
    "price": 287000,
    "discount": 10,
    "img1": "/src/assets/images/editorial_bento_dunst_1793684669027.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 565,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 129
  },
  {
    "id": "outer-32",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "LOW CLASSIC",
    "name": "Minimal Wool Crop Blazer [Black] [Ver.3]",
    "price": 368000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 578,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 158
  },
  {
    "id": "outer-33",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DUNST FOR MEN",
    "name": "Over-size Wool Double Trench Coat [Ver.3]",
    "price": 373000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST FOR MEN의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 591,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 187
  },
  {
    "id": "outer-34",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "POLYTERU",
    "name": "Balmacaan Short Wool Jacket [Ver.3]",
    "price": 294000,
    "discount": 15,
    "img1": "/src/assets/images/hero_quiet_luxury_1793684667332.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "POLYTERU의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 604,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 216
  },
  {
    "id": "outer-35",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "INSILENCE",
    "name": "Minimalist Suede Trucker Jacket [Ver.3]",
    "price": 328000,
    "discount": 20,
    "img1": "/src/assets/images/hero_spring_collection_1793684668384.jpg",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "INSILENCE의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 617,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 245
  },
  {
    "id": "outer-36",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "BELIER",
    "name": "Grandad Collar Quilted Jacket [Ver.3]",
    "price": 380000,
    "discount": 10,
    "img1": "/src/assets/images/editorial_bento_dunst_1793684669027.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "BELIER의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 630,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 274
  },
  {
    "id": "outer-37",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "FACADE PATTERN",
    "name": "Structured Trench Parka [Sand] [Ver.3]",
    "price": 312000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    "description": "FACADE PATTERN의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 563,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 303
  },
  {
    "id": "outer-38",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "AMOMENTO",
    "name": "Vintage Leather Biker Jacket [Ver.3]",
    "price": 357000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop",
    "description": "AMOMENTO의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 576,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 332
  },
  {
    "id": "outer-39",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "COOR",
    "name": "Semi-Over Wool Single Blazer [Ver.3]",
    "price": 239000,
    "discount": 25,
    "img1": "/src/assets/images/hero_quiet_luxury_1793684667332.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "COOR의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 589,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 361
  },
  {
    "id": "outer-40",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DOFF JASON",
    "name": "Cropped Tweed Collarless Jacket [Ver.3]",
    "price": 272000,
    "discount": 10,
    "img1": "/src/assets/images/hero_spring_collection_1793684668384.jpg",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "DOFF JASON의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 602,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 390
  },
  {
    "id": "outer-41",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "LAFUDGESTORE",
    "name": "Reversible Windbreaker Blouson [Ver.3]",
    "price": 205000,
    "discount": 15,
    "img1": "/src/assets/images/editorial_bento_dunst_1793684669027.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "LAFUDGESTORE의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 615,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 419
  },
  {
    "id": "outer-42",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "MUSINSA STANDARD",
    "name": "Handmade Cashmere Blend Robe Coat [Ver.4]",
    "price": 428000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    "description": "MUSINSA STANDARD의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 628,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 448
  },
  {
    "id": "outer-43",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "BARBOUR",
    "name": "UNISEX CLASSIC DOUBLE BREASTED TRENCH COAT [Ver.4]",
    "price": 310000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop",
    "description": "BARBOUR의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 641,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 477
  },
  {
    "id": "outer-44",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "THE NORTH FACE",
    "name": "UNISEX BALMACAAN COAT [KHAKI] [Ver.4]",
    "price": 342000,
    "discount": 15,
    "img1": "/src/assets/images/hero_quiet_luxury_1793684667332.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "THE NORTH FACE의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 574,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 506
  },
  {
    "id": "outer-45",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "thisisneverthat",
    "name": "Utility Pocket Shell Jacket [Black] [Ver.4]",
    "price": 287000,
    "discount": 5,
    "img1": "/src/assets/images/hero_spring_collection_1793684668384.jpg",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "thisisneverthat의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 587,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 535
  },
  {
    "id": "outer-46",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DUNST",
    "name": "Minimal Wool Crop Blazer [Black] [Ver.4]",
    "price": 368000,
    "discount": 15,
    "img1": "/src/assets/images/editorial_bento_dunst_1793684669027.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 600,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 564
  },
  {
    "id": "outer-47",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "LOW CLASSIC",
    "name": "Over-size Wool Double Trench Coat [Ver.4]",
    "price": 373000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 613,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 593
  },
  {
    "id": "outer-48",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "DUNST FOR MEN",
    "name": "Balmacaan Short Wool Jacket [Ver.4]",
    "price": 294000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST FOR MEN의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 626,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 622
  },
  {
    "id": "outer-49",
    "gender": "men",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "POLYTERU",
    "name": "Minimalist Suede Trucker Jacket [Ver.4]",
    "price": 328000,
    "discount": 20,
    "img1": "/src/assets/images/hero_quiet_luxury_1793684667332.jpg",
    "img2": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    "description": "POLYTERU의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 639,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 651
  },
  {
    "id": "outer-50",
    "gender": "women",
    "category": "outer",
    "musinsaCategoryCode": "002",
    "brand": "INSILENCE",
    "name": "Grandad Collar Quilted Jacket [Ver.4]",
    "price": 380000,
    "discount": 25,
    "img1": "/src/assets/images/hero_spring_collection_1793684668384.jpg",
    "img2": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    "description": "INSILENCE의 시그니처 감성을 담은 24SS 아우터 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "아우터 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 572,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 680
  },
  {
    "id": "bottom-1",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "RECTO",
    "name": "Curved Wide Fit Denim Pants",
    "price": 240000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "RECTO의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 1,
    "salesCount3Days": 575,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 109
  },
  {
    "id": "bottom-2",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "GROVE",
    "name": "Double Tuck Wide Slacks [Charcoal]",
    "price": 162000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "GROVE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 2,
    "salesCount3Days": 588,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 138
  },
  {
    "id": "bottom-3",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "BEAMS",
    "name": "Two Tuck Tapered Chino Pants",
    "price": 197000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "BEAMS의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 3,
    "salesCount3Days": 601,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 167
  },
  {
    "id": "bottom-4",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "THOMAS MORE",
    "name": "Paper Easy Wide Pants",
    "price": 109000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "THOMAS MORE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 4,
    "salesCount3Days": 614,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 196
  },
  {
    "id": "bottom-5",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "UNIFORM BRIDGE",
    "name": "Straight Fit Trousers [Ecru]",
    "price": 222000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "UNIFORM BRIDGE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 5,
    "salesCount3Days": 627,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 225
  },
  {
    "id": "bottom-6",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "MUSINSA STANDARD",
    "name": "Cotton Fatigue Pants [Olive]",
    "price": 104000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "MUSINSA STANDARD의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 640,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 254
  },
  {
    "id": "bottom-7",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "MODIFIED",
    "name": "Vintage Selvedge Raw Denim",
    "price": 128000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "MODIFIED의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 573,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 283
  },
  {
    "id": "bottom-8",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "PLAC",
    "name": "One-Tuck Wool Blend Slacks",
    "price": 131000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "PLAC의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 586,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 312
  },
  {
    "id": "bottom-9",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "BRANDED",
    "name": "Utility Cargo Parachute Pants",
    "price": 133000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "BRANDED의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 599,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 341
  },
  {
    "id": "bottom-10",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "FATALISM",
    "name": "Semi-Wide Washed Blue Jeans",
    "price": 103000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "FATALISM의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 612,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 370
  },
  {
    "id": "bottom-11",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "FACADE PATTERN",
    "name": "Comfort Elastic Banding Slacks",
    "price": 99000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "FACADE PATTERN의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 625,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 399
  },
  {
    "id": "bottom-12",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "LOW CLASSIC",
    "name": "High-rise Wide Linen Pants",
    "price": 152000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 638,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 428
  },
  {
    "id": "bottom-13",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "COOR",
    "name": "Curved Wide Fit Denim Pants [Ver.2]",
    "price": 244000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "COOR의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 571,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 457
  },
  {
    "id": "bottom-14",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "POTTERY",
    "name": "Double Tuck Wide Slacks [Charcoal] [Ver.2]",
    "price": 138000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "POTTERY의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 584,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 486
  },
  {
    "id": "bottom-15",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "COVERNAT",
    "name": "Two Tuck Tapered Chino Pants [Ver.2]",
    "price": 201000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "COVERNAT의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 597,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 515
  },
  {
    "id": "bottom-16",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "RECTO",
    "name": "Paper Easy Wide Pants [Ver.2]",
    "price": 113000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "RECTO의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 610,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 544
  },
  {
    "id": "bottom-17",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "GROVE",
    "name": "Straight Fit Trousers [Ecru] [Ver.2]",
    "price": 226000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "GROVE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 623,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 573
  },
  {
    "id": "bottom-18",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "BEAMS",
    "name": "Cotton Fatigue Pants [Olive] [Ver.2]",
    "price": 108000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "BEAMS의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 636,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 602
  },
  {
    "id": "bottom-19",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "THOMAS MORE",
    "name": "Vintage Selvedge Raw Denim [Ver.2]",
    "price": 132000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "THOMAS MORE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 569,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 631
  },
  {
    "id": "bottom-20",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "UNIFORM BRIDGE",
    "name": "One-Tuck Wool Blend Slacks [Ver.2]",
    "price": 135000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "UNIFORM BRIDGE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 582,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 660
  },
  {
    "id": "bottom-21",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "MUSINSA STANDARD",
    "name": "Utility Cargo Parachute Pants [Ver.2]",
    "price": 109000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "MUSINSA STANDARD의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 595,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 689
  },
  {
    "id": "bottom-22",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "MODIFIED",
    "name": "Semi-Wide Washed Blue Jeans [Ver.2]",
    "price": 107000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "MODIFIED의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 608,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 718
  },
  {
    "id": "bottom-23",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "PLAC",
    "name": "Comfort Elastic Banding Slacks [Ver.2]",
    "price": 103000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "PLAC의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 621,
    "rankChange": 2,
    "releaseDate": "2026.10.07",
    "rating": 4.7,
    "reviewCount": 747
  },
  {
    "id": "bottom-24",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "BRANDED",
    "name": "High-rise Wide Linen Pants [Ver.3]",
    "price": 156000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "BRANDED의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 634,
    "rankChange": -1,
    "releaseDate": "2026.10.06",
    "rating": 4.7,
    "reviewCount": 776
  },
  {
    "id": "bottom-25",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "FATALISM",
    "name": "Curved Wide Fit Denim Pants [Ver.3]",
    "price": 248000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "FATALISM의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 567,
    "rankChange": -2,
    "releaseDate": "2026.10.05",
    "rating": 4.7,
    "reviewCount": 805
  },
  {
    "id": "bottom-26",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "FACADE PATTERN",
    "name": "Double Tuck Wide Slacks [Charcoal] [Ver.3]",
    "price": 142000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "FACADE PATTERN의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 580,
    "rankChange": "new",
    "releaseDate": "2026.10.04",
    "rating": 4.7,
    "reviewCount": 834
  },
  {
    "id": "bottom-27",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "LOW CLASSIC",
    "name": "Two Tuck Tapered Chino Pants [Ver.3]",
    "price": 205000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 593,
    "rankChange": 3,
    "releaseDate": "2026.10.03",
    "rating": 4.7,
    "reviewCount": 863
  },
  {
    "id": "bottom-28",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "COOR",
    "name": "Paper Easy Wide Pants [Ver.3]",
    "price": 89000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "COOR의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 606,
    "rankChange": "same",
    "releaseDate": "2026.10.30",
    "rating": 4.7,
    "reviewCount": 892
  },
  {
    "id": "bottom-29",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "POTTERY",
    "name": "Straight Fit Trousers [Ecru] [Ver.3]",
    "price": 230000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "POTTERY의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 619,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 921
  },
  {
    "id": "bottom-30",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "COVERNAT",
    "name": "Cotton Fatigue Pants [Olive] [Ver.3]",
    "price": 112000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "COVERNAT의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 632,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 100
  },
  {
    "id": "bottom-31",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "RECTO",
    "name": "Vintage Selvedge Raw Denim [Ver.3]",
    "price": 136000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "RECTO의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 565,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 129
  },
  {
    "id": "bottom-32",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "GROVE",
    "name": "One-Tuck Wool Blend Slacks [Ver.3]",
    "price": 139000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "GROVE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 578,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 158
  },
  {
    "id": "bottom-33",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "BEAMS",
    "name": "Utility Cargo Parachute Pants [Ver.3]",
    "price": 113000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "BEAMS의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 591,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 187
  },
  {
    "id": "bottom-34",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "THOMAS MORE",
    "name": "Semi-Wide Washed Blue Jeans [Ver.3]",
    "price": 111000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "THOMAS MORE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 604,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 216
  },
  {
    "id": "bottom-35",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "UNIFORM BRIDGE",
    "name": "Comfort Elastic Banding Slacks [Ver.3]",
    "price": 79000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "UNIFORM BRIDGE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 617,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 245
  },
  {
    "id": "bottom-36",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "MUSINSA STANDARD",
    "name": "High-rise Wide Linen Pants [Ver.4]",
    "price": 160000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "MUSINSA STANDARD의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 630,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 274
  },
  {
    "id": "bottom-37",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "MODIFIED",
    "name": "Curved Wide Fit Denim Pants [Ver.4]",
    "price": 252000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "MODIFIED의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 563,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 303
  },
  {
    "id": "bottom-38",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "PLAC",
    "name": "Double Tuck Wide Slacks [Charcoal] [Ver.4]",
    "price": 146000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "PLAC의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 576,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 332
  },
  {
    "id": "bottom-39",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "BRANDED",
    "name": "Two Tuck Tapered Chino Pants [Ver.4]",
    "price": 209000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "BRANDED의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 589,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 361
  },
  {
    "id": "bottom-40",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "FATALISM",
    "name": "Paper Easy Wide Pants [Ver.4]",
    "price": 93000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "FATALISM의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 602,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 390
  },
  {
    "id": "bottom-41",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "FACADE PATTERN",
    "name": "Straight Fit Trousers [Ecru] [Ver.4]",
    "price": 234000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "FACADE PATTERN의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 615,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 419
  },
  {
    "id": "bottom-42",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "LOW CLASSIC",
    "name": "Cotton Fatigue Pants [Olive] [Ver.4]",
    "price": 88000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 628,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 448
  },
  {
    "id": "bottom-43",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "COOR",
    "name": "Vintage Selvedge Raw Denim [Ver.4]",
    "price": 140000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "COOR의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 641,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 477
  },
  {
    "id": "bottom-44",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "POTTERY",
    "name": "One-Tuck Wool Blend Slacks [Ver.4]",
    "price": 143000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "POTTERY의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 574,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 506
  },
  {
    "id": "bottom-45",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "COVERNAT",
    "name": "Utility Cargo Parachute Pants [Ver.4]",
    "price": 117000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "COVERNAT의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 587,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 535
  },
  {
    "id": "bottom-46",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "RECTO",
    "name": "Semi-Wide Washed Blue Jeans [Ver.4]",
    "price": 115000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "RECTO의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 600,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 564
  },
  {
    "id": "bottom-47",
    "gender": "men",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "GROVE",
    "name": "Comfort Elastic Banding Slacks [Ver.4]",
    "price": 83000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "GROVE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 613,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 593
  },
  {
    "id": "bottom-48",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "BEAMS",
    "name": "High-rise Wide Linen Pants [Ver.5]",
    "price": 164000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "description": "BEAMS의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 626,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 622
  },
  {
    "id": "bottom-49",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "THOMAS MORE",
    "name": "Curved Wide Fit Denim Pants [Ver.5]",
    "price": 228000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "description": "THOMAS MORE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 639,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 651
  },
  {
    "id": "bottom-50",
    "gender": "women",
    "category": "bottom",
    "musinsaCategoryCode": "003",
    "brand": "UNIFORM BRIDGE",
    "name": "Double Tuck Wide Slacks [Charcoal] [Ver.5]",
    "price": 150000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
    "description": "UNIFORM BRIDGE의 시그니처 감성을 담은 24SS 하의 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "하의 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 572,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 680
  },
  {
    "id": "bag-1",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "STAND OIL",
    "name": "Chubby Bag [Classic Black]",
    "price": 131000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "STAND OIL의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 1,
    "salesCount3Days": 575,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 109
  },
  {
    "id": "bag-2",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "Atelier de LUMEN",
    "name": "Fantine Shoulder Bag [Butter]",
    "price": 242000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "Atelier de LUMEN의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 2,
    "salesCount3Days": 588,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 138
  },
  {
    "id": "bag-3",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "OSOI",
    "name": "EI 23L Helmet Bag [Olive]",
    "price": 246000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "OSOI의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 3,
    "salesCount3Days": 601,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 167
  },
  {
    "id": "bag-4",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "ARCHIVÉPKÉ",
    "name": "Toni Mini Shoulder Bag [Cream]",
    "price": 308000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "ARCHIVÉPKÉ의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 4,
    "salesCount3Days": 614,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 196
  },
  {
    "id": "bag-5",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "BLANKOF",
    "name": "Fling Bag [Deep Moss]",
    "price": 203000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "BLANKOF의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 5,
    "salesCount3Days": 627,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 225
  },
  {
    "id": "bag-6",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "VUNQUE",
    "name": "Toque Mini Cross Bag [Charcoal]",
    "price": 261000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "VUNQUE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 640,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 254
  },
  {
    "id": "bag-7",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "PORTER",
    "name": "Post Bag Unisex [Olive Khaki]",
    "price": 139000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "PORTER의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 573,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 283
  },
  {
    "id": "bag-8",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "FREITAG",
    "name": "Tanker 2Way Helmet Bag Black",
    "price": 410000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "FREITAG의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 586,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 312
  },
  {
    "id": "bag-9",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "JANSPORT",
    "name": "Nylon Daypack 25L Backpack",
    "price": 122000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "JANSPORT의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 599,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 341
  },
  {
    "id": "bag-10",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "THE NORTH FACE",
    "name": "Croissant Small Leather Bag",
    "price": 428000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "THE NORTH FACE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 612,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 370
  },
  {
    "id": "bag-11",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "Matin Kim",
    "name": "Canvas Logo Eco Tote Bag",
    "price": 65000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "Matin Kim의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 625,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 399
  },
  {
    "id": "bag-12",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "LEMAIRE",
    "name": "Big Silky Hobo Bag Silver",
    "price": 162000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "LEMAIRE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 638,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 428
  },
  {
    "id": "bag-13",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "EMIS",
    "name": "Chubby Bag [Classic Black] [Ver.2]",
    "price": 135000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "EMIS의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 571,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 457
  },
  {
    "id": "bag-14",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "STAND OIL",
    "name": "Fantine Shoulder Bag [Butter] [Ver.2]",
    "price": 218000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "STAND OIL의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 584,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 486
  },
  {
    "id": "bag-15",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "Atelier de LUMEN",
    "name": "EI 23L Helmet Bag [Olive] [Ver.2]",
    "price": 250000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "Atelier de LUMEN의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 597,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 515
  },
  {
    "id": "bag-16",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "OSOI",
    "name": "Toni Mini Shoulder Bag [Cream] [Ver.2]",
    "price": 312000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "OSOI의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 610,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 544
  },
  {
    "id": "bag-17",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "ARCHIVÉPKÉ",
    "name": "Fling Bag [Deep Moss] [Ver.2]",
    "price": 207000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "ARCHIVÉPKÉ의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 623,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 573
  },
  {
    "id": "bag-18",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "BLANKOF",
    "name": "Toque Mini Cross Bag [Charcoal] [Ver.2]",
    "price": 265000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "BLANKOF의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 636,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 602
  },
  {
    "id": "bag-19",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "VUNQUE",
    "name": "Post Bag Unisex [Olive Khaki] [Ver.2]",
    "price": 143000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "VUNQUE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 569,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 631
  },
  {
    "id": "bag-20",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "PORTER",
    "name": "Tanker 2Way Helmet Bag Black [Ver.2]",
    "price": 414000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "PORTER의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 582,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 660
  },
  {
    "id": "bag-21",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "FREITAG",
    "name": "Nylon Daypack 25L Backpack [Ver.2]",
    "price": 98000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "FREITAG의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 595,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 689
  },
  {
    "id": "bag-22",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "JANSPORT",
    "name": "Croissant Small Leather Bag [Ver.2]",
    "price": 432000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "JANSPORT의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 608,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 718
  },
  {
    "id": "bag-23",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "THE NORTH FACE",
    "name": "Canvas Logo Eco Tote Bag [Ver.2]",
    "price": 69000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "THE NORTH FACE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 621,
    "rankChange": 2,
    "releaseDate": "2026.10.07",
    "rating": 4.7,
    "reviewCount": 747
  },
  {
    "id": "bag-24",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "Matin Kim",
    "name": "Big Silky Hobo Bag Silver [Ver.3]",
    "price": 166000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "Matin Kim의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 634,
    "rankChange": -1,
    "releaseDate": "2026.10.06",
    "rating": 4.7,
    "reviewCount": 776
  },
  {
    "id": "bag-25",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "LEMAIRE",
    "name": "Chubby Bag [Classic Black] [Ver.3]",
    "price": 139000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "LEMAIRE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 567,
    "rankChange": -2,
    "releaseDate": "2026.10.05",
    "rating": 4.7,
    "reviewCount": 805
  },
  {
    "id": "bag-26",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "EMIS",
    "name": "Fantine Shoulder Bag [Butter] [Ver.3]",
    "price": 222000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "EMIS의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 580,
    "rankChange": "new",
    "releaseDate": "2026.10.04",
    "rating": 4.7,
    "reviewCount": 834
  },
  {
    "id": "bag-27",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "STAND OIL",
    "name": "EI 23L Helmet Bag [Olive] [Ver.3]",
    "price": 254000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "STAND OIL의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 593,
    "rankChange": 3,
    "releaseDate": "2026.10.03",
    "rating": 4.7,
    "reviewCount": 863
  },
  {
    "id": "bag-28",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "Atelier de LUMEN",
    "name": "Toni Mini Shoulder Bag [Cream] [Ver.3]",
    "price": 288000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "Atelier de LUMEN의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 606,
    "rankChange": "same",
    "releaseDate": "2026.10.30",
    "rating": 4.7,
    "reviewCount": 892
  },
  {
    "id": "bag-29",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "OSOI",
    "name": "Fling Bag [Deep Moss] [Ver.3]",
    "price": 211000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "OSOI의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 619,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 921
  },
  {
    "id": "bag-30",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "ARCHIVÉPKÉ",
    "name": "Toque Mini Cross Bag [Charcoal] [Ver.3]",
    "price": 269000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "ARCHIVÉPKÉ의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 632,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 100
  },
  {
    "id": "bag-31",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "BLANKOF",
    "name": "Post Bag Unisex [Olive Khaki] [Ver.3]",
    "price": 147000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "BLANKOF의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 565,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 129
  },
  {
    "id": "bag-32",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "VUNQUE",
    "name": "Tanker 2Way Helmet Bag Black [Ver.3]",
    "price": 418000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "VUNQUE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 578,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 158
  },
  {
    "id": "bag-33",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "PORTER",
    "name": "Nylon Daypack 25L Backpack [Ver.3]",
    "price": 102000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "PORTER의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 591,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 187
  },
  {
    "id": "bag-34",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "FREITAG",
    "name": "Croissant Small Leather Bag [Ver.3]",
    "price": 436000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "FREITAG의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 604,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 216
  },
  {
    "id": "bag-35",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "JANSPORT",
    "name": "Canvas Logo Eco Tote Bag [Ver.3]",
    "price": 45000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "JANSPORT의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 617,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 245
  },
  {
    "id": "bag-36",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "THE NORTH FACE",
    "name": "Big Silky Hobo Bag Silver [Ver.4]",
    "price": 170000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "THE NORTH FACE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 630,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 274
  },
  {
    "id": "bag-37",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "Matin Kim",
    "name": "Chubby Bag [Classic Black] [Ver.4]",
    "price": 143000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "Matin Kim의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 563,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 303
  },
  {
    "id": "bag-38",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "LEMAIRE",
    "name": "Fantine Shoulder Bag [Butter] [Ver.4]",
    "price": 226000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "LEMAIRE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 576,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 332
  },
  {
    "id": "bag-39",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "EMIS",
    "name": "EI 23L Helmet Bag [Olive] [Ver.4]",
    "price": 258000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "EMIS의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 589,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 361
  },
  {
    "id": "bag-40",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "STAND OIL",
    "name": "Toni Mini Shoulder Bag [Cream] [Ver.4]",
    "price": 292000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "STAND OIL의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 602,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 390
  },
  {
    "id": "bag-41",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "Atelier de LUMEN",
    "name": "Fling Bag [Deep Moss] [Ver.4]",
    "price": 215000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "Atelier de LUMEN의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 615,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 419
  },
  {
    "id": "bag-42",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "OSOI",
    "name": "Toque Mini Cross Bag [Charcoal] [Ver.4]",
    "price": 245000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "OSOI의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 628,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 448
  },
  {
    "id": "bag-43",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "ARCHIVÉPKÉ",
    "name": "Post Bag Unisex [Olive Khaki] [Ver.4]",
    "price": 151000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "ARCHIVÉPKÉ의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 641,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 477
  },
  {
    "id": "bag-44",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "BLANKOF",
    "name": "Tanker 2Way Helmet Bag Black [Ver.4]",
    "price": 422000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "BLANKOF의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 574,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 506
  },
  {
    "id": "bag-45",
    "gender": "men",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "VUNQUE",
    "name": "Nylon Daypack 25L Backpack [Ver.4]",
    "price": 106000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "VUNQUE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 587,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 535
  },
  {
    "id": "bag-46",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "PORTER",
    "name": "Croissant Small Leather Bag [Ver.4]",
    "price": 440000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "PORTER의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 600,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 564
  },
  {
    "id": "bag-47",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "FREITAG",
    "name": "Canvas Logo Eco Tote Bag [Ver.4]",
    "price": 49000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "FREITAG의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 613,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 593
  },
  {
    "id": "bag-48",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "JANSPORT",
    "name": "Big Silky Hobo Bag Silver [Ver.5]",
    "price": 174000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    "description": "JANSPORT의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 626,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 622
  },
  {
    "id": "bag-49",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "THE NORTH FACE",
    "name": "Chubby Bag [Classic Black] [Ver.5]",
    "price": 119000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "description": "THE NORTH FACE의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 639,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 651
  },
  {
    "id": "bag-50",
    "gender": "women",
    "category": "bag",
    "musinsaCategoryCode": "004",
    "brand": "Matin Kim",
    "name": "Fantine Shoulder Bag [Butter] [Ver.5]",
    "price": 230000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    "description": "Matin Kim의 시그니처 감성을 담은 24SS 가방 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "가방 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 572,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 680
  },
  {
    "id": "dress_skirt-1",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "NOHANT",
    "name": "Classic Wool Pleated Long Skirt",
    "price": 200000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "NOHANT의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 1,
    "salesCount3Days": 575,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 109
  },
  {
    "id": "dress_skirt-2",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "SJSJ",
    "name": "Structured Sleeveless Linen Dress",
    "price": 349000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "SJSJ의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 2,
    "salesCount3Days": 588,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 138
  },
  {
    "id": "dress_skirt-3",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "RECTO",
    "name": "Asymmetric Wrap Pleats Midi Skirt",
    "price": 256000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "RECTO의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 3,
    "salesCount3Days": 601,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 167
  },
  {
    "id": "dress_skirt-4",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "DUNST",
    "name": "Pleated Shirt Dress [Navy]",
    "price": 218000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 4,
    "salesCount3Days": 614,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 196
  },
  {
    "id": "dress_skirt-5",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "LOW CLASSIC",
    "name": "Belted Layered Pleat Skirt [Khaki]",
    "price": 272000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 5,
    "salesCount3Days": 627,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 225
  },
  {
    "id": "dress_skirt-6",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "SIE",
    "name": "Long Knit Rib Dress [Melange]",
    "price": 214000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "SIE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 640,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 254
  },
  {
    "id": "dress_skirt-7",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "GROVE",
    "name": "Silky Slip Maxi Dress [Black]",
    "price": 215000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "GROVE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 573,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 283
  },
  {
    "id": "dress_skirt-8",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "FACADE PATTERN",
    "name": "Mermaid Denim Long Skirt",
    "price": 160000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "FACADE PATTERN의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 586,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 312
  },
  {
    "id": "dress_skirt-9",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "Marithé François Girbaud",
    "name": "Shirring Volume Mini Dress",
    "price": 213000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "Marithé François Girbaud의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 599,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 341
  },
  {
    "id": "dress_skirt-10",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "AMOMENTO",
    "name": "Tiered Cotton Flared Skirt",
    "price": 137000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "AMOMENTO의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 612,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 370
  },
  {
    "id": "dress_skirt-11",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "LENINA",
    "name": "Square Neck A-line Summer Dress",
    "price": 265000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "LENINA의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 625,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 399
  },
  {
    "id": "dress_skirt-12",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "TILL I DIE",
    "name": "H-line Slit Wool Midi Skirt",
    "price": 182000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "TILL I DIE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 638,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 428
  },
  {
    "id": "dress_skirt-13",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "NOHANT",
    "name": "Classic Wool Pleated Long Skirt [Ver.2]",
    "price": 204000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "NOHANT의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 571,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 457
  },
  {
    "id": "dress_skirt-14",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "SJSJ",
    "name": "Structured Sleeveless Linen Dress [Ver.2]",
    "price": 325000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "SJSJ의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 584,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 486
  },
  {
    "id": "dress_skirt-15",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "RECTO",
    "name": "Asymmetric Wrap Pleats Midi Skirt [Ver.2]",
    "price": 260000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "RECTO의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 597,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 515
  },
  {
    "id": "dress_skirt-16",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "DUNST",
    "name": "Pleated Shirt Dress [Navy] [Ver.2]",
    "price": 222000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 610,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 544
  },
  {
    "id": "dress_skirt-17",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "LOW CLASSIC",
    "name": "Belted Layered Pleat Skirt [Khaki] [Ver.2]",
    "price": 276000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 623,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 573
  },
  {
    "id": "dress_skirt-18",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "SIE",
    "name": "Long Knit Rib Dress [Melange] [Ver.2]",
    "price": 218000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "SIE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 636,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 602
  },
  {
    "id": "dress_skirt-19",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "GROVE",
    "name": "Silky Slip Maxi Dress [Black] [Ver.2]",
    "price": 219000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "GROVE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 569,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 631
  },
  {
    "id": "dress_skirt-20",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "FACADE PATTERN",
    "name": "Mermaid Denim Long Skirt [Ver.2]",
    "price": 164000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "FACADE PATTERN의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 582,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 660
  },
  {
    "id": "dress_skirt-21",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "Marithé François Girbaud",
    "name": "Shirring Volume Mini Dress [Ver.2]",
    "price": 189000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "Marithé François Girbaud의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 595,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 689
  },
  {
    "id": "dress_skirt-22",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "AMOMENTO",
    "name": "Tiered Cotton Flared Skirt [Ver.2]",
    "price": 141000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "AMOMENTO의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 608,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 718
  },
  {
    "id": "dress_skirt-23",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "LENINA",
    "name": "Square Neck A-line Summer Dress [Ver.2]",
    "price": 269000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "LENINA의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 621,
    "rankChange": 2,
    "releaseDate": "2026.10.07",
    "rating": 4.7,
    "reviewCount": 747
  },
  {
    "id": "dress_skirt-24",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "TILL I DIE",
    "name": "H-line Slit Wool Midi Skirt [Ver.3]",
    "price": 186000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "TILL I DIE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 634,
    "rankChange": -1,
    "releaseDate": "2026.10.06",
    "rating": 4.7,
    "reviewCount": 776
  },
  {
    "id": "dress_skirt-25",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "NOHANT",
    "name": "Classic Wool Pleated Long Skirt [Ver.3]",
    "price": 208000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "NOHANT의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 567,
    "rankChange": -2,
    "releaseDate": "2026.10.05",
    "rating": 4.7,
    "reviewCount": 805
  },
  {
    "id": "dress_skirt-26",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "SJSJ",
    "name": "Structured Sleeveless Linen Dress [Ver.3]",
    "price": 329000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "SJSJ의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 580,
    "rankChange": "new",
    "releaseDate": "2026.10.04",
    "rating": 4.7,
    "reviewCount": 834
  },
  {
    "id": "dress_skirt-27",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "RECTO",
    "name": "Asymmetric Wrap Pleats Midi Skirt [Ver.3]",
    "price": 264000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "RECTO의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 593,
    "rankChange": 3,
    "releaseDate": "2026.10.03",
    "rating": 4.7,
    "reviewCount": 863
  },
  {
    "id": "dress_skirt-28",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "DUNST",
    "name": "Pleated Shirt Dress [Navy] [Ver.3]",
    "price": 198000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 606,
    "rankChange": "same",
    "releaseDate": "2026.10.30",
    "rating": 4.7,
    "reviewCount": 892
  },
  {
    "id": "dress_skirt-29",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "LOW CLASSIC",
    "name": "Belted Layered Pleat Skirt [Khaki] [Ver.3]",
    "price": 280000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 619,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 921
  },
  {
    "id": "dress_skirt-30",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "SIE",
    "name": "Long Knit Rib Dress [Melange] [Ver.3]",
    "price": 222000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "SIE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 632,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 100
  },
  {
    "id": "dress_skirt-31",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "GROVE",
    "name": "Silky Slip Maxi Dress [Black] [Ver.3]",
    "price": 223000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "GROVE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 565,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 129
  },
  {
    "id": "dress_skirt-32",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "FACADE PATTERN",
    "name": "Mermaid Denim Long Skirt [Ver.3]",
    "price": 168000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "FACADE PATTERN의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 578,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 158
  },
  {
    "id": "dress_skirt-33",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "Marithé François Girbaud",
    "name": "Shirring Volume Mini Dress [Ver.3]",
    "price": 193000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "Marithé François Girbaud의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 591,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 187
  },
  {
    "id": "dress_skirt-34",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "AMOMENTO",
    "name": "Tiered Cotton Flared Skirt [Ver.3]",
    "price": 145000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "AMOMENTO의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 604,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 216
  },
  {
    "id": "dress_skirt-35",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "LENINA",
    "name": "Square Neck A-line Summer Dress [Ver.3]",
    "price": 245000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "LENINA의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 617,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 245
  },
  {
    "id": "dress_skirt-36",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "TILL I DIE",
    "name": "H-line Slit Wool Midi Skirt [Ver.4]",
    "price": 190000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "TILL I DIE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 630,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 274
  },
  {
    "id": "dress_skirt-37",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "NOHANT",
    "name": "Classic Wool Pleated Long Skirt [Ver.4]",
    "price": 212000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "NOHANT의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 563,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 303
  },
  {
    "id": "dress_skirt-38",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "SJSJ",
    "name": "Structured Sleeveless Linen Dress [Ver.4]",
    "price": 333000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "SJSJ의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 576,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 332
  },
  {
    "id": "dress_skirt-39",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "RECTO",
    "name": "Asymmetric Wrap Pleats Midi Skirt [Ver.4]",
    "price": 268000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "RECTO의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 589,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 361
  },
  {
    "id": "dress_skirt-40",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "DUNST",
    "name": "Pleated Shirt Dress [Navy] [Ver.4]",
    "price": 202000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "DUNST의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 602,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 390
  },
  {
    "id": "dress_skirt-41",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "LOW CLASSIC",
    "name": "Belted Layered Pleat Skirt [Khaki] [Ver.4]",
    "price": 284000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "LOW CLASSIC의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 615,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 419
  },
  {
    "id": "dress_skirt-42",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "SIE",
    "name": "Long Knit Rib Dress [Melange] [Ver.4]",
    "price": 198000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "SIE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 628,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 448
  },
  {
    "id": "dress_skirt-43",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "GROVE",
    "name": "Silky Slip Maxi Dress [Black] [Ver.4]",
    "price": 227000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "GROVE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 641,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 477
  },
  {
    "id": "dress_skirt-44",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "FACADE PATTERN",
    "name": "Mermaid Denim Long Skirt [Ver.4]",
    "price": 172000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "FACADE PATTERN의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 574,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 506
  },
  {
    "id": "dress_skirt-45",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "Marithé François Girbaud",
    "name": "Shirring Volume Mini Dress [Ver.4]",
    "price": 197000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "Marithé François Girbaud의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 587,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 535
  },
  {
    "id": "dress_skirt-46",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "AMOMENTO",
    "name": "Tiered Cotton Flared Skirt [Ver.4]",
    "price": 149000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "AMOMENTO의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 600,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 564
  },
  {
    "id": "dress_skirt-47",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "LENINA",
    "name": "Square Neck A-line Summer Dress [Ver.4]",
    "price": 249000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "description": "LENINA의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 613,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 593
  },
  {
    "id": "dress_skirt-48",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "TILL I DIE",
    "name": "H-line Slit Wool Midi Skirt [Ver.5]",
    "price": 194000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "TILL I DIE의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 626,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 622
  },
  {
    "id": "dress_skirt-49",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "NOHANT",
    "name": "Classic Wool Pleated Long Skirt [Ver.5]",
    "price": 188000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "description": "NOHANT의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 639,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 651
  },
  {
    "id": "dress_skirt-50",
    "gender": "women",
    "category": "dress_skirt",
    "musinsaCategoryCode": "100",
    "brand": "SJSJ",
    "name": "Structured Sleeveless Linen Dress [Ver.5]",
    "price": 337000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    "description": "SJSJ의 시그니처 감성을 담은 24SS 스커트/원피스 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "스커트/원피스 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 572,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 680
  },
  {
    "id": "acc-1",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "Matin Kim",
    "name": "ACCORDION CARD CASE [MATTE BLACK]",
    "price": 80000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "Matin Kim의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 1,
    "salesCount3Days": 575,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 109
  },
  {
    "id": "acc-2",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "A.P.C.",
    "name": "Item Logo Cotton Cap [Navy]",
    "price": 169000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "A.P.C.의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 2,
    "salesCount3Days": 588,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 138
  },
  {
    "id": "acc-3",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "EMIS",
    "name": "Leather Minimal Bifold Wallet",
    "price": 227000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "EMIS의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 3,
    "salesCount3Days": 601,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 167
  },
  {
    "id": "acc-4",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "ADER ERROR",
    "name": "METAL BUCKLE LEATHER BELT [SILVER]",
    "price": 108000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "ADER ERROR의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 4,
    "salesCount3Days": 614,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 196
  },
  {
    "id": "acc-5",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "NONFICTION",
    "name": "Root Cap [Charcoal Navy]",
    "price": 72000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "NONFICTION의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 5,
    "salesCount3Days": 627,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 225
  },
  {
    "id": "acc-6",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "TAMBURINS",
    "name": "Classic Corduroy Ball Cap",
    "price": 74000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "TAMBURINS의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 640,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 254
  },
  {
    "id": "acc-7",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "BLANKOF",
    "name": "Silver 925 Chunky Chain Necklace",
    "price": 138000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "BLANKOF의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 573,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 283
  },
  {
    "id": "acc-8",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "ANDERSSON BELL",
    "name": "Square Acetate Sunglasses [Black]",
    "price": 272000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "ANDERSSON BELL의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 586,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 312
  },
  {
    "id": "acc-9",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "LEMAIRE",
    "name": "Soft Cashmere Fringe Muffler",
    "price": 143000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "LEMAIRE의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 599,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 341
  },
  {
    "id": "acc-10",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "GENTLE MONSTER",
    "name": "Leather Keyring with Metal Carabiner",
    "price": 50000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "GENTLE MONSTER의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 612,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 370
  },
  {
    "id": "acc-11",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "Matin Kim",
    "name": "Silk Square Pattern Scarf",
    "price": 98000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "Matin Kim의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 625,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 399
  },
  {
    "id": "acc-12",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "A.P.C.",
    "name": "ACCORDION CARD CASE [MATTE BLACK] [Ver.2]",
    "price": 72000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "A.P.C.의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 638,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 428
  },
  {
    "id": "acc-13",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "EMIS",
    "name": "Item Logo Cotton Cap [Navy] [Ver.2]",
    "price": 161000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "EMIS의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 571,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 457
  },
  {
    "id": "acc-14",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "ADER ERROR",
    "name": "Leather Minimal Bifold Wallet [Ver.2]",
    "price": 219000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "ADER ERROR의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 584,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 486
  },
  {
    "id": "acc-15",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "NONFICTION",
    "name": "METAL BUCKLE LEATHER BELT [SILVER] [Ver.2]",
    "price": 100000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "NONFICTION의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 597,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 515
  },
  {
    "id": "acc-16",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "TAMBURINS",
    "name": "Root Cap [Charcoal Navy] [Ver.2]",
    "price": 92000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "TAMBURINS의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 610,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 544
  },
  {
    "id": "acc-17",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "BLANKOF",
    "name": "Classic Corduroy Ball Cap [Ver.2]",
    "price": 66000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "BLANKOF의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 623,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 573
  },
  {
    "id": "acc-18",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "ANDERSSON BELL",
    "name": "Silver 925 Chunky Chain Necklace [Ver.2]",
    "price": 158000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "ANDERSSON BELL의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 636,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 602
  },
  {
    "id": "acc-19",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "LEMAIRE",
    "name": "Square Acetate Sunglasses [Black] [Ver.2]",
    "price": 264000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "LEMAIRE의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 569,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 631
  },
  {
    "id": "acc-20",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "GENTLE MONSTER",
    "name": "Soft Cashmere Fringe Muffler [Ver.2]",
    "price": 135000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "GENTLE MONSTER의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 582,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 660
  },
  {
    "id": "acc-21",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "Matin Kim",
    "name": "Leather Keyring with Metal Carabiner [Ver.2]",
    "price": 42000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "Matin Kim의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 595,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 689
  },
  {
    "id": "acc-22",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "A.P.C.",
    "name": "Silk Square Pattern Scarf [Ver.3]",
    "price": 90000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "A.P.C.의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 608,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 718
  },
  {
    "id": "acc-23",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "EMIS",
    "name": "ACCORDION CARD CASE [MATTE BLACK] [Ver.3]",
    "price": 92000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "EMIS의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 621,
    "rankChange": 2,
    "releaseDate": "2026.10.07",
    "rating": 4.7,
    "reviewCount": 747
  },
  {
    "id": "acc-24",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "ADER ERROR",
    "name": "Item Logo Cotton Cap [Navy] [Ver.3]",
    "price": 153000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "ADER ERROR의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 634,
    "rankChange": -1,
    "releaseDate": "2026.10.06",
    "rating": 4.7,
    "reviewCount": 776
  },
  {
    "id": "acc-25",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "NONFICTION",
    "name": "Leather Minimal Bifold Wallet [Ver.3]",
    "price": 239000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "NONFICTION의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 567,
    "rankChange": -2,
    "releaseDate": "2026.10.05",
    "rating": 4.7,
    "reviewCount": 805
  },
  {
    "id": "acc-26",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "TAMBURINS",
    "name": "METAL BUCKLE LEATHER BELT [SILVER] [Ver.3]",
    "price": 92000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "TAMBURINS의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 580,
    "rankChange": "new",
    "releaseDate": "2026.10.04",
    "rating": 4.7,
    "reviewCount": 834
  },
  {
    "id": "acc-27",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "BLANKOF",
    "name": "Root Cap [Charcoal Navy] [Ver.3]",
    "price": 84000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "BLANKOF의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 593,
    "rankChange": 3,
    "releaseDate": "2026.10.03",
    "rating": 4.7,
    "reviewCount": 863
  },
  {
    "id": "acc-28",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "ANDERSSON BELL",
    "name": "Classic Corduroy Ball Cap [Ver.3]",
    "price": 58000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "ANDERSSON BELL의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 606,
    "rankChange": "same",
    "releaseDate": "2026.10.30",
    "rating": 4.7,
    "reviewCount": 892
  },
  {
    "id": "acc-29",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "LEMAIRE",
    "name": "Silver 925 Chunky Chain Necklace [Ver.3]",
    "price": 150000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "LEMAIRE의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 619,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 921
  },
  {
    "id": "acc-30",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "GENTLE MONSTER",
    "name": "Square Acetate Sunglasses [Black] [Ver.3]",
    "price": 284000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "GENTLE MONSTER의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 632,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 100
  },
  {
    "id": "acc-31",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "Matin Kim",
    "name": "Soft Cashmere Fringe Muffler [Ver.3]",
    "price": 127000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "Matin Kim의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 565,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 129
  },
  {
    "id": "acc-32",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "A.P.C.",
    "name": "Leather Keyring with Metal Carabiner [Ver.3]",
    "price": 62000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "A.P.C.의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 578,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 158
  },
  {
    "id": "acc-33",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "EMIS",
    "name": "Silk Square Pattern Scarf [Ver.4]",
    "price": 82000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "EMIS의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 591,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 187
  },
  {
    "id": "acc-34",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "ADER ERROR",
    "name": "ACCORDION CARD CASE [MATTE BLACK] [Ver.4]",
    "price": 84000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "ADER ERROR의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 604,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 216
  },
  {
    "id": "acc-35",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "NONFICTION",
    "name": "Item Logo Cotton Cap [Navy] [Ver.4]",
    "price": 145000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "NONFICTION의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 617,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 245
  },
  {
    "id": "acc-36",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "TAMBURINS",
    "name": "Leather Minimal Bifold Wallet [Ver.4]",
    "price": 231000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "TAMBURINS의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 630,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 274
  },
  {
    "id": "acc-37",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "BLANKOF",
    "name": "METAL BUCKLE LEATHER BELT [SILVER] [Ver.4]",
    "price": 112000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "BLANKOF의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 563,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 303
  },
  {
    "id": "acc-38",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "ANDERSSON BELL",
    "name": "Root Cap [Charcoal Navy] [Ver.4]",
    "price": 76000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "ANDERSSON BELL의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 576,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 332
  },
  {
    "id": "acc-39",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "LEMAIRE",
    "name": "Classic Corduroy Ball Cap [Ver.4]",
    "price": 78000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "LEMAIRE의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 589,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 361
  },
  {
    "id": "acc-40",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "GENTLE MONSTER",
    "name": "Silver 925 Chunky Chain Necklace [Ver.4]",
    "price": 142000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "GENTLE MONSTER의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 602,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 390
  },
  {
    "id": "acc-41",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "Matin Kim",
    "name": "Square Acetate Sunglasses [Black] [Ver.4]",
    "price": 276000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "Matin Kim의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 615,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 419
  },
  {
    "id": "acc-42",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "A.P.C.",
    "name": "Soft Cashmere Fringe Muffler [Ver.4]",
    "price": 119000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "A.P.C.의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 628,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 448
  },
  {
    "id": "acc-43",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "EMIS",
    "name": "Leather Keyring with Metal Carabiner [Ver.4]",
    "price": 54000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "EMIS의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 641,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 477
  },
  {
    "id": "acc-44",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "ADER ERROR",
    "name": "Silk Square Pattern Scarf [Ver.5]",
    "price": 102000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "ADER ERROR의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 574,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 506
  },
  {
    "id": "acc-45",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "NONFICTION",
    "name": "ACCORDION CARD CASE [MATTE BLACK] [Ver.5]",
    "price": 76000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "NONFICTION의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 587,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 535
  },
  {
    "id": "acc-46",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "TAMBURINS",
    "name": "Item Logo Cotton Cap [Navy] [Ver.5]",
    "price": 165000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "TAMBURINS의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 600,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 564
  },
  {
    "id": "acc-47",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "BLANKOF",
    "name": "Leather Minimal Bifold Wallet [Ver.5]",
    "price": 223000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "BLANKOF의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 613,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 593
  },
  {
    "id": "acc-48",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "ANDERSSON BELL",
    "name": "METAL BUCKLE LEATHER BELT [SILVER] [Ver.5]",
    "price": 104000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "ANDERSSON BELL의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "ONE SIZE"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 626,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 622
  },
  {
    "id": "acc-49",
    "gender": "men",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "LEMAIRE",
    "name": "Root Cap [Charcoal Navy] [Ver.5]",
    "price": 68000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "description": "LEMAIRE의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 639,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 651
  },
  {
    "id": "acc-50",
    "gender": "women",
    "category": "acc",
    "musinsaCategoryCode": "101",
    "brand": "GENTLE MONSTER",
    "name": "Classic Corduroy Ball Cap [Ver.5]",
    "price": 70000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
    "description": "GENTLE MONSTER의 시그니처 감성을 담은 24SS 액세서리 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "액세서리 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "FREE"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 572,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 680
  },
  {
    "id": "shoes-1",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "SALOMON",
    "name": "XT-6 Black/Phantom",
    "price": 272000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "SALOMON의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "250",
      "255",
      "260",
      "265",
      "270",
      "275",
      "280"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 1,
    "salesCount3Days": 575,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 109
  },
  {
    "id": "shoes-2",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "AUTRY",
    "name": "Medalist Low Leather White/Navy",
    "price": 289000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "AUTRY의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 2,
    "salesCount3Days": 588,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 138
  },
  {
    "id": "shoes-3",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "NEW BALANCE",
    "name": "1906R Silver Metallic White",
    "price": 197000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "NEW BALANCE의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245",
      "250"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 3,
    "salesCount3Days": 601,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 167
  },
  {
    "id": "shoes-4",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "KEEN",
    "name": "Jasper Rocks SP Sneakers",
    "price": 189000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "KEEN의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "260",
      "265",
      "270",
      "275",
      "280"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 4,
    "salesCount3Days": 614,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 196
  },
  {
    "id": "shoes-5",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "ADIDAS",
    "name": "Dallas Vintage Low Leather White",
    "price": 262000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "ADIDAS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "260",
      "265",
      "270",
      "275"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 5,
    "salesCount3Days": 627,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 225
  },
  {
    "id": "shoes-6",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "NIKE",
    "name": "ACS Pro White / Vanilla Ice",
    "price": 286000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "NIKE의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245",
      "250"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 640,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 254
  },
  {
    "id": "shoes-7",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "ASICS",
    "name": "Samba OG Cloud White / Core Black",
    "price": 139000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "ASICS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270"
    ],
    "isNew": false,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 573,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 283
  },
  {
    "id": "shoes-8",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "CLARKS",
    "name": "Gel-Kayano 14 Cream/Black",
    "price": 191000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "CLARKS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "isNew": true,
    "isBest": true,
    "bestRank": 50,
    "salesCount3Days": 586,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 312
  },
  {
    "id": "shoes-9",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "DR.MARTENS",
    "name": "Wallabee Suede Boot Maple",
    "price": 262000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "DR.MARTENS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "255",
      "260",
      "265",
      "270"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 599,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 341
  },
  {
    "id": "shoes-10",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "MIZUNO",
    "name": "1461 Smooth 3-Eye Shoe Black",
    "price": 218000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "MIZUNO의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 612,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 370
  },
  {
    "id": "shoes-11",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "SALOMON",
    "name": "Boston Oiled Leather Clogs Habana",
    "price": 249000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "SALOMON의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 625,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 399
  },
  {
    "id": "shoes-12",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "AUTRY",
    "name": "XT-6 Black/Phantom [Ver.2]",
    "price": 264000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "AUTRY의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "250",
      "255",
      "260",
      "265",
      "270",
      "275",
      "280"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 638,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 428
  },
  {
    "id": "shoes-13",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "NEW BALANCE",
    "name": "Medalist Low Leather White/Navy [Ver.2]",
    "price": 281000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "NEW BALANCE의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 571,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 457
  },
  {
    "id": "shoes-14",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "KEEN",
    "name": "1906R Silver Metallic White [Ver.2]",
    "price": 189000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "KEEN의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245",
      "250"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 584,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 486
  },
  {
    "id": "shoes-15",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "ADIDAS",
    "name": "Jasper Rocks SP Sneakers [Ver.2]",
    "price": 181000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "ADIDAS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "260",
      "265",
      "270",
      "275",
      "280"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 597,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 515
  },
  {
    "id": "shoes-16",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "NIKE",
    "name": "Dallas Vintage Low Leather White [Ver.2]",
    "price": 282000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "NIKE의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "260",
      "265",
      "270",
      "275"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 610,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 544
  },
  {
    "id": "shoes-17",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "ASICS",
    "name": "ACS Pro White / Vanilla Ice [Ver.2]",
    "price": 278000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "ASICS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245",
      "250"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 623,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 573
  },
  {
    "id": "shoes-18",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "CLARKS",
    "name": "Samba OG Cloud White / Core Black [Ver.2]",
    "price": 159000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "CLARKS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 636,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 602
  },
  {
    "id": "shoes-19",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "DR.MARTENS",
    "name": "Gel-Kayano 14 Cream/Black [Ver.2]",
    "price": 183000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "DR.MARTENS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 569,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 631
  },
  {
    "id": "shoes-20",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "MIZUNO",
    "name": "Wallabee Suede Boot Maple [Ver.2]",
    "price": 254000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "MIZUNO의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "255",
      "260",
      "265",
      "270"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 582,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 660
  },
  {
    "id": "shoes-21",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "SALOMON",
    "name": "1461 Smooth 3-Eye Shoe Black [Ver.2]",
    "price": 210000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "SALOMON의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 595,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 689
  },
  {
    "id": "shoes-22",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "AUTRY",
    "name": "Boston Oiled Leather Clogs Habana [Ver.3]",
    "price": 241000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "AUTRY의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 608,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 718
  },
  {
    "id": "shoes-23",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "NEW BALANCE",
    "name": "XT-6 Black/Phantom [Ver.3]",
    "price": 284000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "NEW BALANCE의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "250",
      "255",
      "260",
      "265",
      "270",
      "275",
      "280"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 621,
    "rankChange": 2,
    "releaseDate": "2026.10.07",
    "rating": 4.7,
    "reviewCount": 747
  },
  {
    "id": "shoes-24",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "KEEN",
    "name": "Medalist Low Leather White/Navy [Ver.3]",
    "price": 273000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "KEEN의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 634,
    "rankChange": -1,
    "releaseDate": "2026.10.06",
    "rating": 4.7,
    "reviewCount": 776
  },
  {
    "id": "shoes-25",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "ADIDAS",
    "name": "1906R Silver Metallic White [Ver.3]",
    "price": 209000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "ADIDAS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245",
      "250"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 567,
    "rankChange": -2,
    "releaseDate": "2026.10.05",
    "rating": 4.7,
    "reviewCount": 805
  },
  {
    "id": "shoes-26",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "NIKE",
    "name": "Jasper Rocks SP Sneakers [Ver.3]",
    "price": 173000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "NIKE의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "260",
      "265",
      "270",
      "275",
      "280"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 580,
    "rankChange": "new",
    "releaseDate": "2026.10.04",
    "rating": 4.7,
    "reviewCount": 834
  },
  {
    "id": "shoes-27",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "ASICS",
    "name": "Dallas Vintage Low Leather White [Ver.3]",
    "price": 274000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "ASICS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "260",
      "265",
      "270",
      "275"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 593,
    "rankChange": 3,
    "releaseDate": "2026.10.03",
    "rating": 4.7,
    "reviewCount": 863
  },
  {
    "id": "shoes-28",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "CLARKS",
    "name": "ACS Pro White / Vanilla Ice [Ver.3]",
    "price": 270000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "CLARKS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245",
      "250"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 606,
    "rankChange": "same",
    "releaseDate": "2026.10.30",
    "rating": 4.7,
    "reviewCount": 892
  },
  {
    "id": "shoes-29",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "DR.MARTENS",
    "name": "Samba OG Cloud White / Core Black [Ver.3]",
    "price": 151000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "DR.MARTENS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 619,
    "rankChange": 1,
    "releaseDate": "2026.10.29",
    "rating": 4.7,
    "reviewCount": 921
  },
  {
    "id": "shoes-30",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "MIZUNO",
    "name": "Gel-Kayano 14 Cream/Black [Ver.3]",
    "price": 203000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "MIZUNO의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 632,
    "rankChange": 2,
    "releaseDate": "2026.10.28",
    "rating": 4.7,
    "reviewCount": 100
  },
  {
    "id": "shoes-31",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "SALOMON",
    "name": "Wallabee Suede Boot Maple [Ver.3]",
    "price": 246000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "SALOMON의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "255",
      "260",
      "265",
      "270"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 565,
    "rankChange": -1,
    "releaseDate": "2026.10.27",
    "rating": 4.7,
    "reviewCount": 129
  },
  {
    "id": "shoes-32",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "AUTRY",
    "name": "1461 Smooth 3-Eye Shoe Black [Ver.3]",
    "price": 230000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "AUTRY의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 578,
    "rankChange": -2,
    "releaseDate": "2026.10.26",
    "rating": 4.7,
    "reviewCount": 158
  },
  {
    "id": "shoes-33",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "NEW BALANCE",
    "name": "Boston Oiled Leather Clogs Habana [Ver.4]",
    "price": 233000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "NEW BALANCE의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 591,
    "rankChange": "new",
    "releaseDate": "2026.10.25",
    "rating": 4.7,
    "reviewCount": 187
  },
  {
    "id": "shoes-34",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "KEEN",
    "name": "XT-6 Black/Phantom [Ver.4]",
    "price": 276000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "KEEN의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "250",
      "255",
      "260",
      "265",
      "270",
      "275",
      "280"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 604,
    "rankChange": 3,
    "releaseDate": "2026.10.24",
    "rating": 4.7,
    "reviewCount": 216
  },
  {
    "id": "shoes-35",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "ADIDAS",
    "name": "Medalist Low Leather White/Navy [Ver.4]",
    "price": 265000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "ADIDAS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 617,
    "rankChange": "same",
    "releaseDate": "2026.10.23",
    "rating": 4.7,
    "reviewCount": 245
  },
  {
    "id": "shoes-36",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "NIKE",
    "name": "1906R Silver Metallic White [Ver.4]",
    "price": 201000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "NIKE의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245",
      "250"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 630,
    "rankChange": 1,
    "releaseDate": "2026.10.22",
    "rating": 4.7,
    "reviewCount": 274
  },
  {
    "id": "shoes-37",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "ASICS",
    "name": "Jasper Rocks SP Sneakers [Ver.4]",
    "price": 193000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "ASICS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "260",
      "265",
      "270",
      "275",
      "280"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 563,
    "rankChange": 2,
    "releaseDate": "2026.10.21",
    "rating": 4.7,
    "reviewCount": 303
  },
  {
    "id": "shoes-38",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "CLARKS",
    "name": "Dallas Vintage Low Leather White [Ver.4]",
    "price": 266000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "CLARKS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "260",
      "265",
      "270",
      "275"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 576,
    "rankChange": -1,
    "releaseDate": "2026.10.20",
    "rating": 4.7,
    "reviewCount": 332
  },
  {
    "id": "shoes-39",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "DR.MARTENS",
    "name": "ACS Pro White / Vanilla Ice [Ver.4]",
    "price": 290000,
    "discount": 25,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "DR.MARTENS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245",
      "250"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 589,
    "rankChange": -2,
    "releaseDate": "2026.10.19",
    "rating": 4.7,
    "reviewCount": 361
  },
  {
    "id": "shoes-40",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "MIZUNO",
    "name": "Samba OG Cloud White / Core Black [Ver.4]",
    "price": 143000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "MIZUNO의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 602,
    "rankChange": "new",
    "releaseDate": "2026.10.18",
    "rating": 4.7,
    "reviewCount": 390
  },
  {
    "id": "shoes-41",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "SALOMON",
    "name": "Gel-Kayano 14 Cream/Black [Ver.4]",
    "price": 195000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "SALOMON의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 615,
    "rankChange": 3,
    "releaseDate": "2026.10.17",
    "rating": 4.7,
    "reviewCount": 419
  },
  {
    "id": "shoes-42",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "AUTRY",
    "name": "Wallabee Suede Boot Maple [Ver.4]",
    "price": 238000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "AUTRY의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "255",
      "260",
      "265",
      "270"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 628,
    "rankChange": "same",
    "releaseDate": "2026.10.16",
    "rating": 4.7,
    "reviewCount": 448
  },
  {
    "id": "shoes-43",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "NEW BALANCE",
    "name": "1461 Smooth 3-Eye Shoe Black [Ver.4]",
    "price": 222000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "NEW BALANCE의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 641,
    "rankChange": 1,
    "releaseDate": "2026.10.15",
    "rating": 4.7,
    "reviewCount": 477
  },
  {
    "id": "shoes-44",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "KEEN",
    "name": "Boston Oiled Leather Clogs Habana [Ver.5]",
    "price": 253000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "KEEN의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 574,
    "rankChange": 2,
    "releaseDate": "2026.10.14",
    "rating": 4.7,
    "reviewCount": 506
  },
  {
    "id": "shoes-45",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "ADIDAS",
    "name": "XT-6 Black/Phantom [Ver.5]",
    "price": 268000,
    "discount": 5,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "ADIDAS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "250",
      "255",
      "260",
      "265",
      "270",
      "275",
      "280"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 587,
    "rankChange": -1,
    "releaseDate": "2026.10.13",
    "rating": 4.7,
    "reviewCount": 535
  },
  {
    "id": "shoes-46",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "NIKE",
    "name": "Medalist Low Leather White/Navy [Ver.5]",
    "price": 285000,
    "discount": 15,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "NIKE의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 600,
    "rankChange": -2,
    "releaseDate": "2026.10.12",
    "rating": 4.7,
    "reviewCount": 564
  },
  {
    "id": "shoes-47",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "ASICS",
    "name": "1906R Silver Metallic White [Ver.5]",
    "price": 193000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "ASICS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245",
      "250"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 613,
    "rankChange": "new",
    "releaseDate": "2026.10.11",
    "rating": 4.7,
    "reviewCount": 593
  },
  {
    "id": "shoes-48",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "CLARKS",
    "name": "Jasper Rocks SP Sneakers [Ver.5]",
    "price": 185000,
    "discount": 20,
    "img1": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "description": "CLARKS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey"
    ],
    "sizes": [
      "260",
      "265",
      "270",
      "275",
      "280"
    ],
    "isNew": true,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 626,
    "rankChange": 3,
    "releaseDate": "2026.10.10",
    "rating": 4.7,
    "reviewCount": 622
  },
  {
    "id": "shoes-49",
    "gender": "men",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "DR.MARTENS",
    "name": "Dallas Vintage Low Leather White [Ver.5]",
    "price": 258000,
    "discount": 10,
    "img1": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    "description": "DR.MARTENS의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream"
    ],
    "sizes": [
      "260",
      "265",
      "270",
      "275"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 639,
    "rankChange": "same",
    "releaseDate": "2026.10.09",
    "rating": 4.7,
    "reviewCount": 651
  },
  {
    "id": "shoes-50",
    "gender": "women",
    "category": "shoes",
    "musinsaCategoryCode": "103",
    "brand": "MIZUNO",
    "name": "ACS Pro White / Vanilla Ice [Ver.5]",
    "price": 282000,
    "discount": 0,
    "img1": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "img2": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
    "description": "MIZUNO의 시그니처 감성을 담은 24SS 신발 컬렉션 상품입니다. 뛰어난 내구성과 완성도 높은 실루엣으로 일상 속 자연스러운 스타일링을 제안합니다.",
    "details": [
      "신발 부문 무신사 실시간 랭킹 베스트 아이템",
      "프리미엄 원단 및 정밀 봉제 공정 적용",
      "사계절 활용 가능한 데일리 웨어러블 핏",
      "세탁 후 수축 최소화 덤블 텐타 가공 완료"
    ],
    "colors": [
      "Classic Black",
      "Muted Grey",
      "Ecru Cream",
      "Navy Blue"
    ],
    "sizes": [
      "230",
      "235",
      "240",
      "245",
      "250"
    ],
    "isNew": false,
    "isBest": false,
    "bestRank": 50,
    "salesCount3Days": 572,
    "rankChange": 1,
    "releaseDate": "2026.10.08",
    "rating": 4.7,
    "reviewCount": 680
  }
];
