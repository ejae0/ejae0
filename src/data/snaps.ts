export interface SnapHotspot {
  id: string;
  productId: string;
  label: string;
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
}

export interface SnapLook {
  id: string;
  title: string;
  style: 'minimal' | 'street' | 'casual' | 'classic' | 'gorpcore';
  styleLabel: string;
  gender: 'women' | 'men' | 'unisex';
  image: string;
  modelInfo: string;
  location: string;
  likes: number;
  description: string;
  hotspots: SnapHotspot[];
}

export const SNAP_LOOKS: SnapLook[] = [
  {
    id: 'snap-1',
    title: '성수동 감성의 오버사이즈 트렌치 & 와이드 데님',
    style: 'minimal',
    styleLabel: '미니멀 (Minimal)',
    gender: 'women',
    image: '/src/assets/images/snap_street_minimal_1793686476340.jpg',
    modelInfo: '167cm · 49kg · 상의 S / 하의 26',
    location: '성수동 연무장길',
    likes: 842,
    description: '클래식한 베이지 트렌치코트에 자연스러운 워싱의 커브드 데님과 레트로 스니커즈를 매치한 시티 캐주얼 룩입니다.',
    hotspots: [
      {
        id: 'hs-1-outer',
        productId: 'outer-1',
        label: '아우터',
        x: 48,
        y: 45
      },
      {
        id: 'hs-1-bag',
        productId: 'bag-1',
        label: '가방',
        x: 35,
        y: 48
      },
      {
        id: 'hs-1-bottom',
        productId: 'bottom-1',
        label: '팬츠',
        x: 55,
        y: 72
      },
      {
        id: 'hs-1-shoes',
        productId: 'shoes-3',
        label: '신발',
        x: 62,
        y: 92
      }
    ]
  },
  {
    id: 'snap-2',
    title: '어반 고프코어 쉘 자켓 & 테크니컬 트레일 룩',
    style: 'gorpcore',
    styleLabel: '고프코어 (Gorpcore)',
    gender: 'men',
    image: '/src/assets/images/snap_city_gorpcore_1793686476769.jpg',
    modelInfo: '182cm · 72kg · 상의 L / 하의 L',
    location: '한남동 카페거리',
    likes: 1290,
    description: '기능성 타슬란 원단의 유틸리티 쉘 자켓과 루즈한 테이퍼드 치노에 살로몬 XT-6를 매치한 대표적인 시티 고프코어 스타일링.',
    hotspots: [
      {
        id: 'hs-2-outer',
        productId: 'outer-3',
        label: '아우터',
        x: 50,
        y: 38
      },
      {
        id: 'hs-2-bag',
        productId: 'bag-3',
        label: '가방',
        x: 33,
        y: 65
      },
      {
        id: 'hs-2-bottom',
        productId: 'bottom-3',
        label: '팬츠',
        x: 52,
        y: 68
      },
      {
        id: 'hs-2-shoes',
        productId: 'shoes-1',
        label: '신발',
        x: 60,
        y: 88
      }
    ]
  },
  {
    id: 'snap-3',
    title: '콰이어트 럭셔리 카멜 울 코트 & 버터 레더백',
    style: 'classic',
    styleLabel: '클래식 (Classic)',
    gender: 'women',
    image: '/src/assets/images/hero_quiet_luxury_1793684667332.jpg',
    modelInfo: '172cm · 52kg · 상의 M / 하의 S',
    location: '삼청동 미술관길',
    likes: 954,
    description: '미니멀한 직선 라인의 롱 카멜 코트에 버터 컬러 숄더백으로 부드러운 포인트를 준 우아한 톤온톤 스타일링입니다.',
    hotspots: [
      {
        id: 'hs-3-outer',
        productId: 'outer-1',
        label: '코트',
        x: 62,
        y: 42
      },
      {
        id: 'hs-3-bottom',
        productId: 'bottom-2',
        label: '슬랙스',
        x: 66,
        y: 74
      },
      {
        id: 'hs-3-bag',
        productId: 'bag-2',
        label: '백',
        x: 75,
        y: 66
      }
    ]
  },
  {
    id: 'snap-4',
    title: '러프 & 시크 스트릿 레더 셋업 스타일링',
    style: 'street',
    styleLabel: '스트릿 (Street)',
    gender: 'unisex',
    image: '/src/assets/images/pt_matin_kim_campaign_1793684668781.jpg',
    modelInfo: '175cm / 173cm · 26FW 쇼케이스 룩북',
    location: '문래동 창작촌',
    likes: 1540,
    description: '마틴킴 특유의 메탈릭 하드웨어와 디스트레스드 레더 자켓으로 완성한 자유롭고 거친 인더스트리얼 스트릿 룩.',
    hotspots: [
      {
        id: 'hs-4-cardcase',
        productId: 'acc-1',
        label: '아코디언 지갑',
        x: 38,
        y: 52
      },
      {
        id: 'hs-4-belt',
        productId: 'acc-4',
        label: '메탈 벨트',
        x: 43,
        y: 58
      },
      {
        id: 'hs-4-outer',
        productId: 'outer-4',
        label: '블레이저',
        x: 58,
        y: 42
      }
    ]
  },
  {
    id: 'snap-5',
    title: '모던 테일러링 차콜 울 코트 & 니트 앙상블',
    style: 'minimal',
    styleLabel: '미니멀 (Minimal)',
    gender: 'women',
    image: '/src/assets/images/editorial_bento_dunst_1793684669027.jpg',
    modelInfo: '170cm · 50kg · 던스트 룩북 스튜디오',
    location: '한남동 던스트 쇼룸',
    likes: 1110,
    description: '고급스러운 차콜 멜란지 울 코트와 실키한 셔츠 레이어드로 연출한 군더더기 없는 도회적 미니멀리즘.',
    hotspots: [
      {
        id: 'hs-5-outer',
        productId: 'outer-1',
        label: '아우터',
        x: 52,
        y: 46
      },
      {
        id: 'hs-5-top',
        productId: 'top-5',
        label: '셔츠',
        x: 50,
        y: 35
      },
      {
        id: 'hs-5-bottom',
        productId: 'bottom-2',
        label: '슬랙스',
        x: 50,
        y: 78
      }
    ]
  }
];
