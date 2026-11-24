import { Product } from './products';

export interface SizeMeasurementRow {
  size: string;
  [key: string]: string | number;
}

export interface ProductReview {
  id: string;
  author: string;
  level: string;
  userSpecs: string; // e.g. "168cm · 52kg" or "178cm · 72kg"
  selectedOption: string; // e.g. "Black / M"
  rating: number;
  date: string;
  content: string;
  likes: number;
  photoUrl?: string;
  tags?: string[];
}

export interface ProductDetailSpec {
  galleryImages: string[];
  descriptionImages: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
  sizeColumns: string[];
  sizeRows: SizeMeasurementRow[];
  modelSpecs: {
    gender: string;
    height: string;
    weight: string;
    wearingSize: string;
  };
  material: string;
  season: string;
  fit: string;
  touch: string;
  transparency: string;
  elasticity: string;
  washingGuide: string[];
  reviews: ProductReview[];
  satisfactionRate: number; // e.g. 96 (%)
  fitFeedback: {
    fitAsExpected: number; // e.g. 84%
    largerThanExpected: number; // e.g. 11%
    smallerThanExpected: number; // e.g. 5%
  };
}

// Category-specific editorial & detail images pools (High resolution fashion photography)
const DETAIL_IMAGE_POOLS = {
  top: [
    {
      title: "LOOKBOOK EDITORIAL #01",
      description: "고밀도 코마사 원사로 편직하여 세탁 후에도 틀어짐 없는 실루엣을 유지합니다.",
      imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "DETAIL & SILHOUETTE #02",
      description: "어깨선이 자연스럽게 드롭되는 세미오버 핏으로 다양한 체형에 감각적으로 어울립니다.",
      imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "FABRIC & FINISH #03",
      description: "넥라인 텐더 가공 및 헤링본 테이프 덧댐 봉제로 늘어남을 방지하고 내구성을 극대화했습니다.",
      imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "STYLING CUT #04",
      description: "단독 착용은 물론 이너 레이어드로도 사계절 활용도 높은 클래식 웨어러블 디자인입니다.",
      imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1200&auto=format&fit=crop"
    }
  ],
  outer: [
    {
      title: "OUTER SILHOUETTE #01",
      description: "구조적인 숄더 라인과 여유 있는 암홀 설계로 두터운 이너 착용 시에도 편안합니다.",
      imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "PREMIUM FABRIC #02",
      description: "울 블렌드 소재의 은은한 광택감과 묵직하게 떨어지는 유려한 드레이프를 자랑합니다.",
      imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "HARDWARE & DETAILS #03",
      description: "천연 소뿔 단추 및 고급 YKK 지퍼 부자재를 적용하여 완성도를 한 단계 끌어올렸습니다.",
      imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "EDITORIAL MOOD #04",
      description: "미니멀한 실루엣에 브랜드 고유의 아방가르드한 절개선 포인트를 조화롭게 배치했습니다.",
      imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1200&auto=format&fit=crop"
    }
  ],
  bottom: [
    {
      title: "PANTS FIT & PROPORTION #01",
      description: "하이웨이스트 패턴과 투턱 디테일로 다리가 더욱 길어 보이는 입체 실루엣을 완성했습니다.",
      imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "TEXTILE CLOSE-UP #02",
      description: "텐션감이 뛰어난 프리미엄 코튼 능직 원단에 피그먼트 워싱 가공으로 빈티지한 결을 살렸습니다.",
      imageUrl: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "HEM & STITCH FINISH #03",
      description: "체인 스티치 마감과 단단한 주머니 심지 덧댐으로 오랜 착용에도 핏이 무너지지 않습니다.",
      imageUrl: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1200&auto=format&fit=crop"
    }
  ],
  dress_skirt: [
    {
      title: "DRAPE & FLOW #01",
      description: "걸을 때마다 우아하게 흩날리는 플리츠 주름과 허리 라인을 슬림하게 잡아주는 패턴 설계입니다.",
      imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "TEXTURE FOCUS #02",
      description: "가볍고 시원한 린넨/비스코스 혼방 소재로 한여름까지 쾌적하게 착용할 수 있습니다.",
      imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "LOOKBOOK MOOD #03",
      description: "블라우스나 니트 가디건과 매치하면 포멀한 룩으로, 티셔츠와 스니커즈와는 캐주얼하게 연출됩니다.",
      imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1200&auto=format&fit=crop"
    }
  ],
  shoes: [
    {
      title: "FOOTWEAR ARCHITECTURE #01",
      description: "인체공학적 라스트 설계와 충격 흡수 오솔라이트 인솔로 장시간 보행에도 발의 피로도가 적습니다.",
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "OUTSOLE & GRIP #02",
      description: "미끄럼 방지 접지력을 제공하는 하이그립 비브람 러버 아웃솔이 안전한 보행을 지원합니다.",
      imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "LEATHER GRAIN #03",
      description: "천연 소가죽 스웨이드와 메쉬 패널의 하이브리드 조합으로 통기성과 내구성을 동시에 확보했습니다.",
      imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop"
    }
  ],
  bag: [
    {
      title: "LEATHER TEXTURE & FORM #01",
      description: "은은한 오일 광택이 감도는 비건 레더 소재로 스크래치에 강하고 가벼운 무게감을 선사합니다.",
      imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "INTERNAL STORAGE SYSTEM #02",
      description: "스마트폰, 쿠션, 지갑, 텀블러까지 깔끔하게 수납할 수 있는 파티션 내부 포켓이 내장되어 있습니다.",
      imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "STRAP & HARDWARE #03",
      description: "체형에 맞게 숄더백부터 크로스바디까지 길이 조절이 자유로운 메탈 버클 스트랩을 적용했습니다.",
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop"
    }
  ],
  acc: [
    {
      title: "ACCESSORY CRAFTSMANSHIP #01",
      description: "925 실버 베이스에 18K 화이트 골드 도금 처리로 변색을 방지하고 알레르기 반응을 최소화했습니다.",
      imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "STYLING POINT #02",
      description: "단조로운 데일리 룩에 은은한 엣지를 더해주는 모던하고 조형적인 쉐입의 시그니처 아이템입니다.",
      imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop"
    }
  ]
};

// Realistic Korean reviews pool
const REVIEW_COMMENTS = [
  {
    content: "배송도 하루 만에 칼같이 도착하고 실물 퀄리티가 사진보다 훨씬 뛰어납니다! 원단이 탄탄해서 세탁 후에도 목 늘어남이나 변형이 전혀 없고 핏이 예술이에요. 무신사 랭킹 믿고 사길 잘했습니다.",
    tags: ["품질 만족", "배송 빠름", "정사이즈"],
    rating: 5
  },
  {
    content: "핏이 과하지 않은 적당한 세미오버핏이라 데일리로 어디든 편하게 걸치기 좋아요. 어깨 라인이 자연스럽게 떨어져서 체형 보완도 확실합니다. 다른 색상도 추가 구매하려구요!",
    tags: ["핏이 예쁨", "체형 보완", "색상 일치"],
    rating: 5
  },
  {
    content: "원단 촉감이 부드럽고 가벼우면서도 형태를 단단하게 잡아줍니다. 봉제 마감이나 스티치 부분도 꼼꼼하게 처리되어 있어 가격 대비 가성비 최고라고 생각합니다.",
    tags: ["원단 최고", "가성비 굿"],
    rating: 5
  },
  {
    content: "키 174cm 몸무게 67kg 기준 M 사이즈 입으니 소매랑 기장 딱 좋습니다. 살짝 여유 있게 입으실 분들은 한 사이즈 업하시는 것도 추천드려요. 색감이 너무 고급스럽습니다.",
    tags: ["정사이즈", "색상 고급스러움"],
    rating: 4
  },
  {
    content: "포장도 비닐 2중 패키징으로 아주 정성스럽게 왔어요. 착용감 편하고 계절 타지 않고 오래 입을 수 있는 기본템이라 아주 만족스럽습니다.",
    tags: ["포장 꼼꼼", "착용감 편함"],
    rating: 5
  }
];

// Generates comprehensive details for any product
export function getProductDetailedSpecs(product: Product): ProductDetailSpec {
  const cat = product.category;
  const isShoes = cat === 'shoes';
  const isBag = cat === 'bag';
  const isAcc = cat === 'acc';
  const isBottom = cat === 'bottom';
  const isDressSkirt = cat === 'dress_skirt';
  const isOuter = cat === 'outer';

  // 1. Gallery Images (product img1, img2 + high-res contextual detail angles)
  const pool = DETAIL_IMAGE_POOLS[cat] || DETAIL_IMAGE_POOLS.top;
  const galleryImages = [
    product.img1,
    product.img2,
    pool[0]?.imageUrl || product.img1,
    pool[1]?.imageUrl || product.img2,
    pool[2]?.imageUrl || product.img1
  ].filter(Boolean);

  // 2. Description Images (Full length lookbook cuts)
  const descriptionImages = pool.slice(0, 4);

  // 3. Size Measurement Table (사이즈 실수치)
  let sizeColumns: string[] = [];
  let sizeRows: SizeMeasurementRow[] = [];

  if (isShoes) {
    sizeColumns = ['사이즈 (mm)', '발길이 (cm)', '발볼넓이 (cm)', '굽높이 (cm)', '전체높이 (cm)'];
    const shoeSizes = product.sizes.length > 0 && product.sizes[0] !== 'FREE'
      ? product.sizes
      : ['230', '240', '250', '260', '270', '280'];

    sizeRows = shoeSizes.map((sz) => {
      const num = parseInt(sz) || 250;
      const baseCm = (num / 10).toFixed(1);
      const ballWidth = (8.5 + (num - 230) * 0.03).toFixed(1);
      return {
        size: `${sz} mm`,
        '발길이 (cm)': `${baseCm} cm`,
        '발볼넓이 (cm)': `${ballWidth} cm`,
        '굽높이 (cm)': '3.5 cm',
        '전체높이 (cm)': '11.5 cm'
      };
    });
  } else if (isBottom) {
    sizeColumns = ['사이즈', '총장 (cm)', '허리단면 (cm)', '엉덩이단면 (cm)', '허벅지단면 (cm)', '밑위 (cm)', '밑단단면 (cm)'];
    const sizes = product.sizes.length > 0 && product.sizes[0] !== 'FREE'
      ? product.sizes
      : ['S', 'M', 'L', 'XL'];

    const bottomBase: Record<string, any> = {
      S: { '총장 (cm)': 102, '허리단면 (cm)': 37, '엉덩이단면 (cm)': 50, '허벅지단면 (cm)': 31.5, '밑위 (cm)': 29, '밑단단면 (cm)': 23 },
      M: { '총장 (cm)': 104, '허리단면 (cm)': 39.5, '엉덩이단면 (cm)': 52.5, '허벅지단면 (cm)': 33, '밑위 (cm)': 30, '밑단단면 (cm)': 24 },
      L: { '총장 (cm)': 106, '허리단면 (cm)': 42, '엉덩이단면 (cm)': 55, '허벅지단면 (cm)': 34.5, '밑위 (cm)': 31, '밑단단면 (cm)': 25 },
      XL: { '총장 (cm)': 108, '허리단면 (cm)': 44.5, '엉덩이단면 (cm)': 57.5, '허벅지단면 (cm)': 36, '밑위 (cm)': 32, '밑단단면 (cm)': 26 },
      FREE: { '총장 (cm)': 104, '허리단면 (cm)': 39, '엉덩이단면 (cm)': 53, '허벅지단면 (cm)': 33, '밑위 (cm)': 30, '밑단단면 (cm)': 24 }
    };

    sizeRows = sizes.map((sz) => ({
      size: sz,
      ...(bottomBase[sz] || bottomBase.M)
    }));
  } else if (isDressSkirt) {
    sizeColumns = ['사이즈', '총장 (cm)', '허리단면 (cm)', '엉덩이단면 (cm)', '밑단단면 (cm)'];
    const sizes = product.sizes.length > 0 ? product.sizes : ['S', 'M', 'FREE'];
    const skirtBase: Record<string, any> = {
      S: { '총장 (cm)': 84, '허리단면 (cm)': 34, '엉덩이단면 (cm)': 46, '밑단단면 (cm)': 54 },
      M: { '총장 (cm)': 86, '허리단면 (cm)': 36.5, '엉덩이단면 (cm)': 48.5, '밑단단면 (cm)': 56.5 },
      L: { '총장 (cm)': 88, '허리단면 (cm)': 39, '엉덩이단면 (cm)': 51, '밑단단면 (cm)': 59 },
      FREE: { '총장 (cm)': 85, '허리단면 (cm)': 35, '엉덩이단면 (cm)': 47.5, '밑단단면 (cm)': 55 }
    };

    sizeRows = sizes.map((sz) => ({
      size: sz,
      ...(skirtBase[sz] || skirtBase.FREE)
    }));
  } else if (isBag) {
    sizeColumns = ['구분', '가로 (cm)', '세로 (cm)', '폭/마치 (cm)', '스트랩길이 (cm)', '무게 (g)'];
    sizeRows = [
      {
        size: 'ONE SIZE (FREE)',
        '가로 (cm)': 31.5,
        '세로 (cm)': 23.0,
        '폭/마치 (cm)': 10.5,
        '스트랩길이 (cm)': '70 ~ 115 (조절가능)',
        '무게 (g)': '430g'
      }
    ];
  } else if (isAcc) {
    sizeColumns = ['구분', '총길이/둘레 (cm)', '폭/너비 (cm)', '펜던트/프레임 (mm)', '중량 (g)'];
    sizeRows = [
      {
        size: 'ONE SIZE (FREE)',
        '총길이/둘레 (cm)': 48.0,
        '폭/너비 (cm)': 1.4,
        '펜던트/프레임 (mm)': '15 x 20 mm',
        '중량 (g)': '16.5g'
      }
    ];
  } else {
    // Top or Outer
    sizeColumns = ['사이즈', '총장 (cm)', '어깨너비 (cm)', '가슴단면 (cm)', '소매길이 (cm)'];
    const sizes = product.sizes.length > 0 ? product.sizes : ['S', 'M', 'L', 'XL'];
    const topBase: Record<string, any> = {
      XS: { '총장 (cm)': 65, '어깨너비 (cm)': 49, '가슴단면 (cm)': 54, '소매길이 (cm)': 58 },
      S: { '총장 (cm)': 68, '어깨너비 (cm)': 52, '가슴단면 (cm)': 57, '소매길이 (cm)': 60 },
      M: { '총장 (cm)': 71, '어깨너비 (cm)': 54.5, '가슴단면 (cm)': 60, '소매길이 (cm)': 61.5 },
      L: { '총장 (cm)': 73, '어깨너비 (cm)': 56.5, '가슴단면 (cm)': 62.5, '소매길이 (cm)': 63 },
      XL: { '총장 (cm)': 75, '어깨너비 (cm)': 58.5, '가슴단면 (cm)': 65, '소매길이 (cm)': 64.5 },
      FREE: { '총장 (cm)': 72, '어깨너비 (cm)': 55, '가슴단면 (cm)': 61, '소매길이 (cm)': 62 }
    };

    if (isOuter) {
      // outer is slightly longer
      topBase.S['총장 (cm)'] += 10;
      topBase.M['총장 (cm)'] += 10;
      topBase.L['총장 (cm)'] += 10;
      topBase.XL['총장 (cm)'] += 10;
      topBase.FREE['총장 (cm)'] += 10;
    }

    sizeRows = sizes.map((sz) => ({
      size: sz,
      ...(topBase[sz] || topBase.M)
    }));
  }

  // 4. Model specs
  const isWomen = product.gender === 'women';
  const modelSpecs = isWomen
    ? {
        gender: '여성 모델',
        height: '172 cm',
        weight: '49 kg',
        wearingSize: product.sizes[0] || 'S'
      }
    : {
        gender: '남성 모델',
        height: '185 cm',
        weight: '72 kg',
        wearingSize: product.sizes[1] || product.sizes[0] || 'L'
      };

  // 5. Fabric & details
  const material = isShoes
    ? '천연 소가죽 (Cowhide) 70%, 고밀도 메쉬 (Mesh) 30% / 비브람 러버 솔'
    : isBag
    ? '프리미엄 비건 에코 레더 (PU 100%) / 코튼 안감 100%'
    : isAcc
    ? '925 Sterling Silver / 18K White Gold Plated'
    : isBottom
    ? '코튼 (Cotton) 98%, 폴리우레탄 (Polyurethane) 2% (바이오 워싱)'
    : isOuter
    ? '울 (Wool) 80%, 나일론 (Nylon) 20% / 친환경 벰베르크 안감'
    : '코마사 면 (Combed Cotton) 100% (덤블/텐타 수축방지 가공)';

  // 6. User Reviews
  const firstColor = product.colors[0] || 'Default';
  const firstSize = product.sizes[0] || 'FREE';
  const sampleAuthors = [
    { name: 'm***9', level: 'LV.6 마니아', specs: isWomen ? '164cm · 50kg' : '176cm · 68kg' },
    { name: 'daily_looker', level: 'LV.5 스타일러', specs: isWomen ? '168cm · 52kg' : '182cm · 74kg' },
    { name: 'mono_chic', level: 'LV.4 쇼퍼', specs: isWomen ? '160cm · 46kg' : '172cm · 64kg' },
    { name: 'k_ootd', level: 'LV.7 인플루언서', specs: isWomen ? '170cm · 53kg' : '179cm · 71kg' }
  ];

  const reviewPhotos = [
    pool[0]?.imageUrl,
    product.img1,
    pool[1]?.imageUrl,
    product.img2
  ].filter(Boolean);

  const reviews: ProductReview[] = sampleAuthors.map((author, idx) => {
    const template = REVIEW_COMMENTS[idx % REVIEW_COMMENTS.length];
    return {
      id: `rev-${product.id}-${idx}`,
      author: author.name,
      level: author.level,
      userSpecs: author.specs,
      selectedOption: `${firstColor} / ${product.sizes[idx % product.sizes.length] || firstSize}`,
      rating: template.rating,
      date: `2026.10.${28 - idx * 2}`,
      content: template.content,
      likes: 18 + idx * 7,
      photoUrl: reviewPhotos[idx % reviewPhotos.length],
      tags: template.tags
    };
  });

  return {
    galleryImages,
    descriptionImages,
    sizeColumns,
    sizeRows,
    modelSpecs,
    material,
    season: '2026 S/S (사계절 착용 가능)',
    fit: isBottom ? '와이드 스트레이트 핏' : isOuter ? '오버사이즈 드롭숄더 핏' : '세미오버 레귤러 핏',
    touch: '부드럽고 톡톡한 텍스처',
    transparency: '비침 없음',
    elasticity: isShoes || isBag || isAcc ? '해당 없음' : '약간 있음 (편안한 신축성)',
    washingGuide: [
      '첫 1~2회 세탁 시 드라이클리닝 권장',
      '30도 이하 미온수에서 중성세제로 단독 손세탁 권장',
      '기계 건조기(열건조) 사용 금지 (자연 그늘 건조)',
      '다림질 시 저온에서 천을 덧대어 사용'
    ],
    reviews,
    satisfactionRate: 98,
    fitFeedback: {
      fitAsExpected: 86,
      largerThanExpected: 10,
      smallerThanExpected: 4
    }
  };
}
