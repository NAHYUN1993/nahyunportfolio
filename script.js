/* ============================================================
   LEE NAHYUN Portfolio — script.js
   Sidebar Layout (migrated from portfolio3 carousel)
   ============================================================ */

/* ── Project Data ── */
const projects = [
{
  id: 309, type: 'video', category: 'commercial', categoryLabel: 'AI 영상 · SNS 캐러셀',
  title: '퓨어솔루션 — 이어지는 초록의 일상',
  desc: "하나의 파노라마를 네 장으로 나눠, 넘길 때마다 장면이 이어지는 콜라주형 콘텐츠",
  brief: "캐러셀의 흐름을 활용한 제품·식물의 일상 구성: 네 장으로 연결된 화면\nAI 영상·콜라주 결합 및 이미지·인물의 경계 교차 배치로 다음 장까지 이어지는 시각적 흐름 설계",
  process: [
    {
        "title": "식물을 돌보는 일상을 콜라주로 구성",
        "desc": "초록색 배경에 식물과 함께하는 인물·물주기·관리·제품 사용 장면 배치\n식물을 돌보는 일상의 여러 순간을 통해 관리 도구로서의 제품 소개"
    },
    {
        "title": "파노라마의 경계를 잇는 인물과 오브제 배치",
        "desc": "인물·식물·제품을 하나의 넓은 화면에 연결한 뒤 네 장으로 분할\n일부 요소를 장의 경계에 걸쳐 배치해 넘길 때마다 하나의 장면을 이어 살펴보는 경험 구성"
    },
    {
        "title": "관리 장면과 제품 사용 순서 연결",
        "desc": "식물 관리 장면에 제품 투입·희석 장면을 이어 배치\n별도 설명 화면 대신 관리 행동의 다음 순서로 제품 사용법 전달\n패키지·브랜드 제시로 제품 기억 유도"
    }
],
  orientation: 'panorama', videoSrc: 'videos/pure-solution.mp4',
  poster: 'images/pure-solution/panorama.jpg', thumbnail: 'images/pure-solution/panorama.jpg',
  carousel: [1, 2, 3, 4].map(n => `images/pure-solution/slide-${n}.webp`), tools: []
},
{
  "id": 305,
  "type": "video",
  "category": "commercial",
  "categoryLabel": "커머셜 AI 영상",
  "title": "넌마늘난양파",
  "desc": "시기별 제품 선택과 넌마늘난양파·납작이의 조합을 타이포그래피로 전달한 네이버 숏클립 홍보 영상",
  "brief": "네이버 숏클립용 제품 홍보 영상 기획\n시기·제품 특성에 따른 ‘넌마늘난양파’와 ‘납작이’의 조합 사용법 소개\n단순 제품 나열 대신 선택 시기·각 제품의 쓰임·함께 활용하는 이점 전달",
  "processLabel": "제작 과정",

  "process": [
    {
        "title": "농작업 맥락을 담은 장면 이미지 제작",
        "desc": "GPT로 밭에 놓인 제품·비료를 뿌리는 손·자라는 작물·굵은 알 장면 제작\n패키지뿐 아니라 사용 상황·기대 결과를 함께 담아 농업용 제품의 쓰임 구체화"
    },
    {
        "title": "제품 사용 시기에 따른 영상 흐름 구성",
        "desc": "GPT 생성 이미지를 Kling으로 영상화\n밑거름부터 알이 굵어지는 시기까지의 흐름에 두 제품 배치\n작물·비료 살포·수확물 장면과 카피를 연결해 제품별 사용 시기 전달"
    },
    {
        "title": "핵심 단어를 부각하는 타이포그래피 연출",
        "desc": "‘밑거름’·‘납작이 플러스’·‘굵은 알’ 등 제품 선택 핵심 단어 확대 및 노란색·초록색 강조\n핵심 단어와 보조 문구의 크기·색 차이로 짧은 숏클립에서도 제품명·사용 시기 우선 전달"
    }
],

  "orientation": "vertical",
  "videoSrc": "videos/garlic-flat.mp4",
  "poster": "images/posters/garlic-flat-v6.jpg",
  "thumbnail": "images/posters/garlic-flat-v6.jpg",
  "tools": ["ChatGPT", "Kling"],
  "badgeLabel": ""
},
{
  "id": 306,
  "type": "video",
  "category": "commercial",
  "categoryLabel": "커머셜 AI 영상",
  "title": "해충박살",
  "desc": "야외 뉴스 인터뷰에 등장한 인형탈 벌레 캐릭터로 유쾌하게 풀어낸 제품 광고",
  "brief": "벌레의 징그러운 모습보다 캐릭터의 익살스러움을 앞세운 해충 광고 기획\n인형탈을 쓴 사람으로 벌레를 의인화하고 뉴스 인터뷰 취재 대상으로 설정\n벌레의 입장에서 해충 제거 제품을 바라보는 반전으로 유쾌한 관심 유도",
  "processLabel": "제작 과정",

  process: [
    {
        "title": "인형탈 캐릭터와 농장 배경 제작",
        "desc": "GPT로 인형탈을 쓴 사람 형태의 벌레 캐릭터 이미지 생성\n고추 농장에 초록 인형탈을 배치해 실제 재배 현장에서 벌레가 사람처럼 불평하는 상황 구성"
    },
    {
        "title": "뉴스 자막을 활용한 가상 인터뷰 구성",
        "desc": "화면 상단 NEWS 표시·대상의 이름·직함 자막으로 뉴스 형식 구성\n농장을 맛집처럼 소개하던 ‘진딧물’이 제품 때문에 접근하기 어렵다고 불평하는 인터뷰 설정\n해충의 불만을 제품 장점으로 전환하는 반전 구성"
    },
    {
        "title": "불평에서 퇴장과 제품 등장으로 연결",
        "desc": "Kling으로 캐릭터 이미지 영상화\n인터뷰 후 등을 돌려 농장 밖으로 걸어가는 캐릭터와 제품 확대 컷을 연결\n진지한 인터뷰 형식에 표정·몸짓·강조 자막을 더해 유머 강화"
    }
],
  "orientation": "vertical",
  "videoSrc": "videos/pest-buster.mp4",
  "poster": "images/posters/pest-buster.jpg",
  "thumbnail": "images/posters/pest-buster.jpg",
  "tools": ["ChatGPT", "Kling"],
  "badgeLabel": ""
},
{
  "id": 307,
  "type": "video",
  "category": "commercial",
  "categoryLabel": "커머셜 AI 영상",
  "title": "효소아미노",
  "desc": "관행과 새로운 해법을 아빠와 딸로 표현하고, 영화의 한 장면처럼 풀어낸 제품 광고",
  "brief": "익숙한 농사 관행과 새로운 해법의 만남을 아빠·딸로 의인화\n아빠는 오래된 방식, 딸은 새 영양제를 통한 변화의 상징으로 설정\n기능 설명 대신 익숙한 방식을 벗어나 새로운 선택을 받아들이는 이야기로 효소아미노 소개",
  "processLabel": "제작 과정",

    process: [
  {
    "title": "아빠와 딸의 대화로 구성한 제품 이야기",
    "desc": "익숙한 농사 관행은 아빠, 새로운 해법은 딸로 의인화\n기능 나열 대신 새로운 선택을 받아들이는 두 인물의 대화를 영화 속 한 장면처럼 구성"
  },
  {
    "title": "컷별 인물 이미지의 일관성 조정",
    "desc": "Nano Banana로 컷별 얼굴 일관성 조정\n대화 시점이 바뀌어도 아빠·딸이 같은 인물로 보이도록 이미지 정리"
  },
  {
    "title": "대사와 입 모양을 고려한 영상 모델 선택",
    "desc": "대화 장면의 설득력을 위해 당시 대사에 맞는 자연스러운 입 모양을 구현한 Kling 선택\n인물의 대사 장면을 영상화하고 아빠·딸의 관계를 통해 제품 이야기 연결"
  }
],
  "orientation": "horizontal",
  "videoSrc": "videos/enzyme-amino.mp4",
  "poster": "images/posters/enzyme-amino.jpg",
  "thumbnail": "images/posters/enzyme-amino.jpg",
  "tools": ["Nano Banana", "Kling"],
  "badgeLabel": ""
},
{
  "id": 308,
  "type": "video",
  "category": "commercial",
  "categoryLabel": "커머셜 AI 영상",
  "title": "분갈이흙",
  "desc": "초록색 톤의 공간별 식물 연출과 모종삽·제품 컷을 연결한 숏폼 광고",
  "brief": "식물 생장에 필요한 ‘그럴듯한 화분’과 ‘좋은 흙’의 대비에서 출발\n익숙한 화분을 없애고 시선을 멈추게 할 낯선 재배 환경 구상\n레몬 껍질·구두·세탁기를 재배 공간으로 바꿔 ‘어디에’보다 ‘무엇에’ 심었는지로 관심 전환\n기능·역할의 직접 설명 대신 엉뚱한 장소에서도 자라는 식물로 분갈이흙 기억 유도",
  "processLabel": "제작 과정",

  process: [
    {
        "title": "색상 코드로 통일한 낯선 재배 공간",
        "desc": "원하는 색상 코드·공간·소품을 프롬프트에 명시해 GPT Image 2 이미지 생성\n구두·서랍·은색 용기·유리잔을 재배 공간으로 전환하고 초록색 계열 색감 유지"
    },
    {
        "title": "제품 패키지의 글자 확인과 보정",
        "desc": "식물 생장 장면 뒤에 분갈이흙 패키지·모종삽 배치\n패키지 글자가 깨지지 않도록 생성하고 손상 부분을 Photoshop으로 직접 수정해 제품명 가독성 확보"
    },
    {
        "title": "낯선 장면에서 흙과 제품으로 시선 전환",
        "desc": "완성 이미지를 Kling으로 영상화\n전반부의 다양한 사물 속 식물에서 후반부의 흙을 담은 삽·열린 제품 봉투 근접 컷으로 연결\n‘어디에 심든’ → ‘흙이 좋으면’ 카피로 재배 용기에서 흙으로 관심 전환"
    }
],
  "orientation": "vertical",
  "videoSrc": "videos/potting-soil.mp4",
  "poster": "images/posters/potting-soil.jpg",
  "thumbnail": "images/posters/potting-soil.jpg",
  "tools": ["GPT Image 2", "Photoshop", "Kling"],
  "badgeLabel": ""
},
  /* ─────────────────────────────────────────────────────────
     AI 영상 아트필름
  ───────────────────────────────────────────────────────── */
  /* ─────────────────────────────────────────────────────────
     AI 영상 커머셜
  ───────────────────────────────────────────────────────── */
  {
    id: 3,
    type: 'video',
    category: 'commercial',
    categoryLabel: '시즌 캠페인',
    title: '크리스마스 시즌 캠페인',
    desc: "자사 마스코트 토끼 캐릭터의 산타 코스튬 변형과 실제 제품 합성을 결합한 크리스마스 시즌 캠페인",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/시즌캠페인_크리스마스.png',
    badge: 'company',
    badgeLabel: '회사 프로젝트',
    tools: ['Nano Banana', 'ComfyUI', 'Kling', 'Premiere Pro'],
    driveId: '1qtkc4js6sA5ZEvdF8BUB8N1gLcI8tB6B',
    orientation: 'vertical',
    processMedia: [
      { src: 'images/process/christmas/product-composite.png', caption: 'Qwen Image Edit · 캐릭터와 실제 제품 이미지를 입력한 합성 워크플로' },
      { src: 'images/process/christmas/angles-setup-01.png', caption: 'Multiple Angles LoRA · 카메라 각도별 프롬프트 설정' },
      { src: 'images/process/christmas/angles-result-01.png', caption: '다각도 생성 결과 · 클로즈업·하이앵글·측면' },
      { src: 'images/process/christmas/angles-setup-02.png', caption: '두 번째 캐릭터 이미지에 적용한 다각도 워크플로' },
      { src: 'images/process/christmas/angles-result-02.png', caption: '두 번째 이미지의 다각도 생성 결과' },
    ],
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_01.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_02.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_03.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_04.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_07.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_06.png'
    ],
    brief: "마스코트 토끼 캐릭터의 IP 가치를 활용한 시즌 브랜디드 콘텐츠 제작\nAI 캐릭터 생성·실제 제품 합성으로 캐릭터 정체성을 유지한 상업용 영상 완성",

  process: [
    {
        "title": "산타 마스코트와 시든 트리의 상황 설정",
        "desc": "Nano Banana로 토끼 캐릭터 기본 이미지 생성 및 산타 코스튬 적용\n장식은 있지만 잎이 처진 트리·캐릭터의 놀란 표정을 배치해 크리스마스 분위기 속 식물 문제 제시"
    },
    {
        "title": "ComfyUI에서 실제 제품 이미지 합성",
        "desc": "ComfyUI의 Qwen Image Edit 2509에 캐릭터·실제 식물 영양제 이미지 입력\n프롬프트 기반 장면 합성으로 산타 마스코트 이야기와 실제 판매 제품 연결"
    },
    {
        "title": "다각도 생성으로 장면 구성 확장",
        "desc": "Multiple Angles LoRA를 적용한 ComfyUI 워크플로로 클로즈업·측면·하이앵글 이미지 생성\n캐릭터 반응 근접 컷과 트리·실내 공간 컷을 준비해 동일 장소 내 시점 변화 구성"
    },
    {
        "title": "트리의 변화와 제품을 연결한 영상화",
        "desc": "프리픽 Kling 영상화 및 Premiere Pro 편집\n산타의 선물 주머니 → 트리를 감싸는 초록빛 → 밝게 빛나는 트리 → 제품 컷으로 연결\n식물의 회복을 크리스마스 선물처럼 표현"
    }
]
  },
  {
    id: 4,
    type: 'video',
    category: 'artfilm',
    categoryLabel: '공모전',
    title: 'AI로 다시 태어난 한복, 그리고 한식',
    desc: "이도 식당 네이밍의 모티브인 세종대왕(이도)을 화자로 설정한 공모전 영상\n이름 도용에 분노한 왕이 맛에 감동하는 반전 서사",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/공모전_한복한식.png',
    badge: 'contest',
    badgeLabel: '',
    tools: ['Midjourney', 'Nano Banana', 'Photoshop', 'Kling'],
    driveId: '1lDDOm36ZfYtygXeCRUZEDgXU_cjzabI0',
    orientation: 'horizontal',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/한복한식/한복한식 주요장면_01.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/한복한식/한복한식 주요장면_02.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/한복한식/한복한식 주요장면_03.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/한복한식/한복한식 주요장면_04.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/한복한식/한복한식 주요장면_05.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/한복한식/한복한식 주요장면_06.png'
    ],
    brief: "브랜드 네이밍 기반 세종대왕 페르소나·조선 시대 배경으로 한복·한식의 문화적 가치를 현대적 영상 언어로 재해석\n식당 이름에 대한 분노 → 맛에 대한 감동의 반전으로 시청자 흥미 유발 및 브랜드 메시지 전달",
    process: [
      { title: '컨셉 아트 및 톤앤매너 기획', desc: "미드저니로 웅장하고 고전적인 사극 배경·인물 베이스 이미지 생성\n시각적 기준 수립 및 시안 제작" },
      { title: '스토리보드 기반 씬 생성', desc: "스토리보드 기반 나노바나나 세부 컷 생성\n인물 앵글·씬 연속성 유지" },
      { title: 'AI 한계 극복 및 에셋 합성', desc: "주최 측 지정 한복 패턴·디테일 구현을 위한 포토샵 활용\n마스킹·합성 및 제공 의상 에셋 치환으로 시각적 일관성 유지" },
      { title: '모션 부여 및 최종 편집', desc: "프리픽 Kling 영상화 및 프리미어 프로 오디오 믹싱·최종 마스터링" }
    ]
  },
  {
    id: 7,
    type: 'video',
    category: 'artfilm',
    categoryLabel: '공모전',
    title: '토너패드 광고 메디힐 공모전',
    desc: "1mm의 빈틈도 허락하지 않는 완벽주의자 관점의 브랜드 필름\n기존 뷰티 광고의 감성적 클리셰를 배제하고, 네모 패드의 얼굴 굴곡 밀착 장면과 3-Step 루틴을 중심으로 시각적 카타르시스 연출",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/공모전_메디힐.png',
    badge: 'contest',
    badgeLabel: '',
    tools: ['NotebookLM', 'Midjourney', 'Nano Banana', 'ComfyUI', 'Kling', 'Premiere Pro'],
    driveId: '1eSSpwG9XS92l4zofZlsaio4MO2V_PiHY',
    orientation: 'horizontal',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/메디힐/메디힐 주요장면_01.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/메디힐/메디힐 주요장면_02.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/메디힐/메디힐 주요장면_03.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/메디힐/메디힐 주요장면_04.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/메디힐/메디힐 주요장면_05.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/메디힐/메디힐 주요장면_06.png'
    ],
    brief: "토너패드 입문자의 활용법 인지 부족으로 제품 효능 100% 활용에 한계\n얼굴의 넓은 면적을 빈틈없이 덮는 구조적 형태에 대한 수요 확인\n팩토 → 흡토 → 닦토의 3단계 루틴을 직관적으로 연출\n네모 패드의 직각 형태가 곡선의 얼굴 면적에 빈틈없이 맞물리는 순간 강조",
    process: [
    {
        "title": "빈틈에 예민한 인물로 제품 콘셉트 구체화",
        "desc": "NotebookLM으로 뷰티 시장 리서치 정리 및 완벽주의자의 성격·네모 패드 밀착력 연결\n식빵을 다 덮지 못하는 둥근 햄·모서리에 닿지 못하는 로봇청소기로 일상의 ‘빈틈’ 제시\n제품 등장으로 빈틈에 대한 불만을 해소하는 구조 설계"
    },
    {
        "title": "핑크 공간과 민트 제품의 색채 대비",
        "desc": "Midjourney로 인물·공간 콘셉트 이미지 제작\n핑크색 방에 이끼·작은 꽃이 자라는 비현실적 공간과 민트색 패키지의 색채 대비 구성\n같은 공간에서 굳은 표정 → 만족스러운 미소의 변화 표현"
    },
    {
        "title": "인물의 일관성과 패드 밀착 장면 제작",
        "desc": "Nano Banana로 주요 장면 생성 및 인물의 얼굴·의상·조명 톤 통일\n패드가 볼에 닿기 전·후 근접 컷으로 네모 형태와 얼굴 굴곡의 관계 전달\n피부·패드 표면 확대 컷으로 밀착감·수분감 강조"
    },
    {
        "title": "ComfyUI를 활용한 다각도 이미지 생성",
        "desc": "qwen_Multiple_angle 워크플로로 인물·제품의 여러 카메라 앵글 일괄 생성\n정면 사용 장면과 볼·패드 근접 컷을 준비해 전체 동작·제품 디테일 교차 전달"
    },
    {
        "title": "실제 제품 에셋으로 패키지 보정",
        "desc": "AI 생성 이미지의 왜곡된 로고·텍스트 영역에 실제 제품 에셋 합성\n인물 사용 장면과 용기·뚜껑·패드를 꺼내는 마지막 컷까지 패키지 보정 및 브랜드 식별성 확보"
    },
    {
        "title": "세 가지 사용법과 표정 변화를 연결한 편집",
        "desc": "프리픽 Kling 영상화 및 Premiere Pro 컷 연결·오디오 믹싱·자막 작업\n‘팩토 → 흡토 → 닦토’ 자막과 사용 동작 연결\n도입의 불만스러운 표정 → 사용 후 미소로 편집하고 마지막 용기·패드 컷으로 브랜드 제시"
    }
]
  },

  /* ─────────────────────────────────────────────────────────
     AI 영상 시네마틱
  ───────────────────────────────────────────────────────── */
  {
    id: 6,
    type: 'video',
    category: 'cinematic',
    categoryLabel: '단편 영화',
    title: '개물림사고주의',
    desc: "인간의 탐욕(순혈주의 펫샵)이 부른 좀비 바이러스 사태 속에서, 순수함을 간직한 아이들과 실험체 강아지들이 연대하여 재난을 극복해 나가는 SF 스릴러",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/단편영화_개물림사고주의.png',
    badge: 'team',
    badgeLabel: '팀 프로젝트',
    tools: ['Kling', 'Premiere Pro'],
    driveId: '1k3vUbi10fCBuQrny8BzC4N006jmxTZ9h',
    orientation: 'horizontal',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/개물림사고주의/개물림사고주의 주요장면_01.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/개물림사고주의/개물림사고주의 주요장면_02.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/개물림사고주의/개물림사고주의 주요장면_03.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/개물림사고주의/개물림사고주의 주요장면_04.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/개물림사고주의/개물림사고주의 주요장면_05.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/개물림사고주의/개물림사고주의 주요장면_06.png'
    ],
    brief: "인간의 이기적 욕망이 초래한 재난 상황 속에서 연대와 극복이라는 메시지 전달",
    process: [
      { title: 'AI 립싱크 구현', desc: "Kling의 디지털 캐릭터 기능을 적극 활용\n인물 이미지 에셋에 더빙 오디오 소스를 결합하여 캐릭터의 입 모양과 미세한 안면 근육이 자연스럽게 움직이도록 구현" },
      { title: '서사 편집', desc: "팀원들이 분업으로 생성한 대량의 AI 영상·이미지 에셋을 Premiere Pro에서 하나의 완결된 서사 흐름으로 편집" }
    ]
  },
  {
    id: 103,
    type: 'video',
    category: 'cinematic',
    categoryLabel: 'SF 단편 영화',
    title: '얼어붙은 아마존',
    desc: "기후 위기로 얼어붙은 아마존 디스토피아 세계관을 배경으로, 인류 생존의 열쇠인 코어를 고치기 위한 여정을 다룬 시네마틱 SF 단편 영화",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/아마존.png',
    badge: 'personal',
    badgeLabel: '개인 필름',
    tools: ['Midjourney', 'Runway', 'Premiere Pro'],
    driveId: '11i8xV-new7gxnxQ571zmbRbqTqm3P1Lf',
    orientation: 'horizontal',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/아마존/1.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/아마존/2.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/아마존/3.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/아마존/4.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/아마존/5.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/아마존/6.png'
    ],
    brief: "기후 위기로 얼어붙은 아마존 디스토피아 세계관 설정\n인류 생존의 열쇠인 코어를 고치는 여정과 모든 것이 시뮬레이션이었다는 반전 기획",
    process: [
      { title: '시네마틱 내러티브 및 극적 반전 기획', desc: "열대우림의 빙하기라는 시각적 모순으로 낯설고 웅장한 디스토피아 설계\n마지막 순간 디지털 글리치와 함께 현실로 전환되는 반전 스토리보드 구성" },
      { title: '프롬프트 기반 장엄한 스케일 연출', desc: "SF 특유의 스케일·디테일 묘사를 위한 렌즈 구경·조명·색감 제어\n전문 촬영·카메라 룩다운 프롬프트 설계" }
    ]
  },

  /* ─────────────────────────────────────────────────────────
     실사 숏폼
  ───────────────────────────────────────────────────────── */
  {
    id: 207,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '비료 회사 직원의 농사짓기 프로젝트',
    desc: "외부 섭외의 한계를 보완하기 위해 제작자가 직접 농사에 참여하는 오리지널 리얼리티 포맷 기획\n단일 영상 최고 조회수 40만 회 달성 및 전사 '도전왕' 1위를 수상한 채널 턴어라운드 프로젝트",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/농사짓기프로젝트_썸네일.png',
    badge: 'company',
    badgeLabel: '사내 도전왕 1위',
    tools: ['iPhone 13', 'Premiere Pro'],
    youtubeId: 'ucorOvw9rcc',
    orientation: 'horizontal',
    scenes: [],
    brief: "외부 섭외의 한계 보완을 위한 제작자 직접 참여형 농사 리얼리티 포맷 기획\n날것의 스토리텔링·세대 간 유쾌한 티키타카로 제품의 실제 효능 전달 및 오락성·신뢰도 극대화\n단일 영상 최고 조회수 40만 회 달성·돌파\n채널 기여도와 혁신·성과를 인정받아 전사 ‘도전왕’ 부문 1위 수상",
    process: [
      { title: '01 오리지널 IP 기획', desc: "기존 외부 인력 섭외 방식의 제품 실증 영상은 스케줄링의 한계와 작위적인 연출로 인해 시청자의 지속적인 공감대 형성과 채널 충성도 제고에 한계 발생\n프로 농사꾼 아빠와 함께 직접 농사를 짓는 '리얼리티 다큐·예능 포맷'으로 전환" },
      { title: '02 세대 간 티키타카 서사 설계', desc: "새로운 방식을 추구하는 비료 회사 직원 딸과 전통만을 고집하는 아빠의 유쾌한 충돌을 핵심 서사로 활용\n시청자의 심리적 진입 장벽 완화" },
      { title: "03 채널 성장과 시청자 반응", desc: "제품 홍보와 함께 시청자와의 강한 정서적 유대감을 형성\n브랜드 유튜브 채널의 구독자 급증과 고관여 시청자의 자발적인 자사 제품 문의로 이어지도록 유도" }
    ]
  },
  {
    id: 201,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '블루밍버블',
    desc: "식물과 교감하는 일상을 따뜻한 영상 톤으로 표현하고, 핵심 타겟인 식집사의 공감대를 형성한 실사 콘텐츠",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/블루밍버블.png',
    badge: 'company',
    badgeLabel: '실사 콘텐츠',
    tools: ['SONY A7M4', 'Premiere Pro'],
    driveId: '1xfMZ9DcIq4ZN_bj7tENJ9IKuaJrU8bT5',
    orientation: 'horizontal',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/블루밍버블/시퀀스 01.00_02_00_01.스틸 039.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/블루밍버블/시퀀스 01.00_02_02_14.스틸 040.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/블루밍버블/시퀀스 01.00_02_03_03.스틸 041.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/블루밍버블/시퀀스 01.00_02_03_12.스틸 042.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/블루밍버블/시퀀스 01.00_02_05_01.스틸 043.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/블루밍버블/시퀀스 01.00_02_07_13.스틸 044.png'
    ],
    brief: "식물과 교감하는 일상을 따뜻한 무드로 담아내어 타겟 시청자(식집사)의 깊은 공감대를 이끌어낸 감성 콘텐츠",
    process: []
  },
  {
    id: 202,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: 'HOW TO 뿌리영양제',
    desc: "제품의 올바른 사용법을 직관적인 촬영 앵글로 전달한 사용 가이드 영상",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/뿌리영양제.png',
    badge: 'company',
    badgeLabel: '가이드',
    tools: ['SONY A7M4', 'Premiere Pro'],
    driveId: '1i6yHs4zkGyhTsg-LQYjTQzSs2kai3eYU',
    orientation: 'vertical',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/뿌리영양제/시퀀스 01.00_03_30_22.스틸 033.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/뿌리영양제/시퀀스 01.00_03_33_08.스틸 034.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/뿌리영양제/시퀀스 01.00_03_34_07.스틸 035.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/뿌리영양제/시퀀스 01.00_03_36_05.스틸 036.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/뿌리영양제/시퀀스 01.00_03_37_22.스틸 037.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/뿌리영양제/시퀀스 01.00_03_44_11.스틸 038.png'
    ],
    brief: "제품의 올바른 사용법을 직관적인 촬영 앵글로 전달한 사용 가이드 영상",
    process: []
  },
  {
    id: 203,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '다이소 식물 아이템 리뷰',
    desc: "SNS 트렌드를 반영한 다이소 아이템 직접 구매 및 활용 과정 중심의 바이럴 콘텐츠 기획",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/다이소.png',
    badge: 'company',
    badgeLabel: '바이럴',
    tools: ['SONY A7M4', 'Premiere Pro'],
    driveId: '1oFDI3Byt37doGDW5cyWupMHD8Hd9KqF7',
    orientation: 'vertical',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/다이소/시퀀스 01.00_01_32_15.스틸 027.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/다이소/시퀀스 01.00_01_34_03.스틸 028.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/다이소/시퀀스 01.00_01_37_23.스틸 029.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/다이소/시퀀스 01.00_01_45_09.스틸 030.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/다이소/시퀀스 01.00_01_50_05.스틸 031.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/다이소/시퀀스 01.00_01_55_18.스틸 032.png'
    ],
    brief: "제품 홍보와 함께 SNS 트렌드를 파악하고 타사 아이템과의 시너지를 연구해 제작한 콘텐츠",
    process: []
  },
  {
    id: 204,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '식물살리기 60일 프로젝트',
    desc: "제품 투여 후 식물이 회복되는 60일간의 과정을 기록한 리얼리티 다큐멘터리",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/식물살리기.png',
    badge: 'company',
    badgeLabel: '다큐멘터리',
    tools: ['SONY A7M4', 'Premiere Pro'],
    driveId: '1jxEVFvKeHQE2-xII4eEH3Btz4DzFAcWy',
    orientation: 'vertical',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/식물살리기/시퀀스 01.00_00_38_08.스틸 019.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/식물살리기/시퀀스 01.00_00_41_03.스틸 020.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/식물살리기/시퀀스 01.00_00_41_20.스틸 021.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/식물살리기/시퀀스 01.00_00_50_20.스틸 022.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/식물살리기/시퀀스 01.00_00_57_19.스틸 024.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/식물살리기/시퀀스 01.00_01_07_20.스틸 026.png'
    ],
    brief: "죽어가는 식물에 자사 제품 투여 후 60일간 회복 과정의 파트별 기록\n사내 연구진(박사)의 식물학적 자문을 더해 과학적 근거·실제 기록으로 효능 검증",
    process: [
      { title: '사내 전문가 자문 (R&D Collaboration)', desc: "시각적 관찰을 넘어 박사 연구진과 소통하며 생장 상태 진단\n텍스트·내러티브의 전문성 강화" },
      { title: '비주얼 스토리텔링 및 교차 편집', desc: "60일간의 전후(Before & After) 장면 교차 편집\n극적 전후 대비를 통한 시각적 카타르시스 연출" }
    ]
  },
  {
    id: 205,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '식물편집샵 대표 인터뷰',
    desc: "업계 전문가의 인사이트를 바탕으로 브랜드의 권위와 전문성을 전달한 인터뷰 영상",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/유니크플랜트.png',
    badge: 'company',
    badgeLabel: '인터뷰',
    tools: ['SONY A7M4', 'Premiere Pro'],
    driveId: '1W2uaNmzFF5gXUSpl_kz1W-K6zqlxhVCZ',
    orientation: 'vertical',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/유니크플랜트/시퀀스 01.00_00_00_00.스틸 005.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/유니크플랜트/시퀀스 01.00_00_02_05.스틸 006.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/유니크플랜트/시퀀스 01.00_00_06_23.스틸 007.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/유니크플랜트/시퀀스 01.00_00_11_11.스틸 008.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/유니크플랜트/시퀀스 01.00_00_15_08.스틸 009.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/유니크플랜트/시퀀스 01.00_00_17_21.스틸 010.png'
    ],
    brief: "업계 전문가 인터뷰를 통해 브랜드 가치와 제품 안정성 및 효용성을 교차 증명한 영상",
    process: []
  },
  {
    id: 206,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '이지코트 제품 소개 ASMR',
    desc: "제품 고유의 질감과 소리를 백색소음으로 활용한 시청각 중심의 ASMR 홍보 영상",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/이지코트.png',
    badge: 'company',
    badgeLabel: 'ASMR',
    tools: ['SONY A7M4', 'Premiere Pro'],
    driveId: '1ptineNnf4KlaojxJwMm1sQcbCl1dIXkg',
    orientation: 'vertical',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/이지코트/시퀀스 01.00_00_21_03.스틸 011.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/이지코트/시퀀스 01.00_00_22_17.스틸 012.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/이지코트/시퀀스 01.00_00_23_07.스틸 013.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/이지코트/시퀀스 01.00_00_24_09.스틸 014.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/이지코트/시퀀스 01.00_00_24_16.스틸 015.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/이지코트/시퀀스 01.00_00_29_11.스틸 017.png'
    ],
    brief: "제품 고유의 질감과 소리를 백색소음으로 활용한 시청각 중심의 ASMR 홍보 영상",
    process: []
  },
  /* ─────────────────────────────────────────────────────────
     신규 추가 (2026) - 로컬 호스팅 영상
  ───────────────────────────────────────────────────────── */
  {
    id: 301,
    type: 'video',
    category: 'artfilm',
    categoryLabel: '공모전',
    title: 'LG유플러스 유쓰 AI 쇼츠 페스티벌 우수상',
    desc: "「AI로 표현하는 가장 나다운 순간」을 주제로 상반된 취향과 모순적인 자아를 시각화한 숏폼\nLG유플러스 유쓰 AI 쇼츠 페스티벌 우수상 수상",
    videoSrc: './videos/lg-youth-festival.mp4',
    poster: './images/posters/lg-youth-festival.jpg',
    thumbnail: './images/posters/lg-youth-festival.jpg',
    badge: 'award',
    badgeLabel: '우수상',
    tools: ['ChatGPT', 'Higgsfield Soul', 'Kling', 'Seedance 2.0'],
    orientation: 'vertical',
    scenes: [],
    brief: "공모전 주제: 「AI로 표현하는 가장 '나다운' 순간」\n서로 짝이 맞지 않는 취향을 통해 ‘나다움’ 탐색\n하늘색 선호와 빨간색 구매, 게으름과 좋아하는 대상을 위한 왕복 여덟 시간 운전, 비범한 취향과 평범한 자신 사이의 모순 발견\n모순을 좋아하는 사람이 아닌 모순으로 만들어진 사람이라는 자각\n한여름의 눈사람 같은 이미지에 아름다움보다 동질감으로 공감\n장점 대신 커피 향 선호·커피 음용 불가, 책 구매·읽지 않음, 앞장서기·주목받을 때의 부끄러움, 잘하다 마지막에 무너뜨리는 모습을 표현\n핵심 문구: ‘무너지면 주워 먹는 사람’\n앞선 세 가지의 ‘못 하는 것’과 달리 마지막에서 방향 전환\n극복·재건 대신 무너진 것을 주워 먹는 태도로 자신과 인생을 대하는 방식 표현",
    process: [
      { title: '인물 생성', desc: "챗지피티로 프롬프트를 설계하고 힉스필드 소울 모델로 인물 이미지를 생성" },
      { title: '셀피 POV 앵글 설계', desc: "광고 톤을 걷어내고 인스타그램에 직접 올리는 셀피처럼 보이도록 전체 컷을 구성\n화면 밖 팔 각도와 시선 처리로 찍는 사람과 찍히는 사람이 같다는 감각을 유지" },
      { title: '컷 전환과 카메라 무빙', desc: "클링과 씨댄스 2.0으로 영상화\n짧은 러닝타임에서 늘어지지 않도록 컷 전환과 무빙에 변화 부여" }
    ]
  },
  {
    id: 302,
    type: 'video',
    category: 'commercial',
    categoryLabel: '커머셜 AI 영상',
    title: '그로잉버블',
    desc: "타사 제품 42개 분량과 자사 제품 한 알의 차이를 극단적인 수량 대비로 보여주는 광고",
    videoSrc: './videos/growing-bubble.mp4',
    poster: './images/posters/growing-bubble.jpg',
    thumbnail: './images/posters/growing-bubble.jpg',
    badge: 'company',
    badgeLabel: '제품 광고',
    tools: ['Nano Banana', 'Kling'],
    orientation: 'vertical',
    scenes: [],
    brief: "타사 제품 42개 분량을 자사 제품 한 알로 대체하는 장점의 직관적 전달\n말로 설명하는 대신 ‘42개 대 한 알’의 극단적 수량 차이 시각화\n많은 양과 작은 한 알의 대비 자체로 제품 강점 표현",

  process: [
    {
        "title": "온실과 마스코트의 시각적 설정",
        "desc": "Nano Banana로 회사 대표 마스코트 생성 및 식물이 가득한 온실·파스텔 톤 장치에 배치\n소개 역할을 넘어 여러 병을 한 알로 바꾸고 직접 사용하는 행동 주체로 캐릭터 설정"
    },
    {
        "title": "여러 병이 한 알로 바뀌는 키프레임 구성",
        "desc": "타사 제품 42개 분량과 자사 제품 한 알의 메시지를 병이 담긴 바구니·장치에서 나온 한 알의 대비로 표현\nNano Banana로 병을 담는 손·장치 입구·완성된 한 알의 키프레임 제작\n장면의 흐름을 통한 수량 차이 전달"
    },
    {
        "title": "용해와 물주기로 이어지는 영상화",
        "desc": "컷별 키프레임을 Kling으로 영상화\n완성된 한 알을 투명한 물에 넣는 장면 → 물뿌리개로 식물에 주는 장면 연결\n압축된 제품의 장점·실제 사용법을 하나의 이야기로 구성"
    }
]
  },
  {
    id: 303,
    type: 'video',
    category: 'commercial',
    categoryLabel: '커머셜 AI 영상',
    title: '닥터조 뿌리는 식물영양제',
    desc: "판타지 숲에서 레몬 정원으로 이어지는 세계관과 제품 컷을 연계한 스프레이 영양제 광고",
    videoSrc: './videos/drjoe-spray.mp4',
    poster: './images/posters/drjoe-spray.jpg',
    thumbnail: './images/posters/drjoe-spray.jpg',
    badge: 'company',
    badgeLabel: '제품 광고',
    tools: ['ChatGPT', 'Nano Banana', 'Kling', 'Seedance'],
    orientation: 'vertical',
    scenes: [],
    brief: "레몬코어 트렌드를 제품 세계관에 적용\n성분·사용법 설명보다 사용 편의성과 효능에 대한 직관적 인상 전달을 목표로 설정",

  process: [
    {
        "title": "기존 마스코트의 공간·의상 변형",
        "desc": "기존 회사 마스코트 기반 GPT 이미지 생성 및 GPT·Nano Banana 수정\n어두운 숲을 걷는 토끼 → 빛나는 열매 발견 → 레몬 모티프 의상 등장으로 구성\n숲·레몬 정원을 같은 캐릭터의 여정으로 연결"
    },
    {
        "title": "시든 식물과 풍성한 열매의 대비",
        "desc": "축 처진 나무를 보는 캐릭터 표정 → 제품 분사구 → 레몬이 열린 나무 순서로 배치\n식물 상태·제품 사용·변화의 전후 대비로 설명 문구 대신 효능 기대 전달"
    },
    {
        "title": "분사 장면에서 제품 컷으로 연결",
        "desc": "수정 이미지를 Kling·Seedance로 영상화\n분사구 근접 컷과 풍성해진 레몬 정원 연결\n마지막에 같은 색감·배경의 실제 패키지를 배치해 판타지 장면에서 제품 소개로 전환"
    }
]
  },
  {
    id: 304,
    type: 'video',
    category: 'commercial',
    categoryLabel: '커머셜 AI 영상',
    title: '버그올킬',
    desc: "젤리 질감의 벌레 캐릭터 세계관과 스프레이 사용 장면을 연결한 살충제 광고",
    videoSrc: './videos/bug-all-kill.mp4',
    poster: './images/posters/bug-all-kill.jpg',
    thumbnail: './images/posters/bug-all-kill.jpg',
    badge: 'company',
    badgeLabel: '제품 광고',
    tools: ['Nano Banana', 'Kling', 'Seedance 2.0'],
    orientation: 'vertical',
    scenes: [],
    brief: "거부감을 유발하는 벌레를 반투명 젤리 질감의 캐릭터로 재해석해 시청 이탈 완화\n제품 사용 장면을 세계관 속 사건으로 배치해 광고 톤 유지",

  process: [
    {
        "title": "젤리 질감으로 해충 이미지 재해석",
        "desc": "Nano Banana로 반투명 젤리 질감의 벌레·버섯·꽃 배경 제작\n작은 눈·둥근 형태·밝은 색으로 귀여운 해충 캐릭터 구성\n캐릭터와 주변 식물을 같은 재질의 세계로 통일"
    },
    {
        "title": "분사와 입자 반응을 연결한 연출",
        "desc": "Kling·Seedance 2.0 이미지 영상화\n분사구의 액체·벌레 위 물방울 근접 컷 → 색색의 입자 확산 장면 연결\n사실적인 해충 묘사 대신 젤리 세계의 사건으로 제품 작용 표현"
    },
    {
        "title": "제품이 읽히는 마지막 장면 구성",
        "desc": "캐릭터·입자 움직임 뒤에 제품 패키지를 중앙에 배치하고 천천히 접근하는 컷 구성\n화려한 배경을 유지하며 제품명·패키지로 시선 집중\n앞선 분사 장면과 실제 제품 연결"
    }
]
  }
];

/* ── AI Image Files ── */
const characterFiles = [
  "1.png","2.png","3.png","4.png","5.png",
  "6.png","7.png","8.png","9.png","10.png"
];

const conceptArtFiles = [
  "Generated Image October 22, 2025 - 9_37PM.png",
  "dan_asa_43_--ar_34_--profile_aak7s7r_--v_7_ca0fc045-1541-4fad-b410-635c7f3c14a2_3.png",
  "dan_asa_44_--ar_34_--profile_aak7s7r_--v_7_29add57e-eecf-4e2d-8729-d797ce48c5f6_0.png",
  "dan_asa_44_--ar_34_--profile_aak7s7r_--v_7_29add57e-eecf-4e2d-8729-d797ce48c5f6_1.png",
  "dan_asa_A_cyberpunk_street_samurai_standing_in_rain_neon_city_2b87b794-9fd1-4204-8cc5-417cca4e9f3d_2.png",
  "dan_asa_Dynamic_action_shot_of_the_Northern_Grand_Duke_in_bat_7896ddfd-1666-420f-bfeb-6032ec42cc4f_0.png",
  "dan_asa_Dynamic_chibi_style_medium_shot._The_girl_scientist_h_a2d9b045-5462-4b80-969b-62c2d3562651_3.png",
  "dan_asa_Girl_napping_under_the_giant_tree_made_of_yellow_fold_94689d38-f1e0-4b3f-8a5a-eba92f716ed2_3.png",
  "dan_asa_Gritty_cinematic_live-action_concert_photography_styl_b23f31f7-e09d-4118-97cc-1786e817d5c2_2.png",
  "dan_asa_Joseon_dynasty_dark_fantasy_secret_royal_inspector_sp_e1ffe60d-7d13-4fb1-8ee4-8c708cef87e9_3.png",
  "dan_asa_Medium_shot_dynamic_interaction._3D_illustration._SD__6453d748-2b74-45bd-bd4c-b2e25d8730cc_2.png",
  "dan_asa_Wide_angle_mysterious_and_bizarre_atmosphere._3D_art__63d86714-5964-4d20-b74a-63a23dabec71_0.png",
  "dan_asa_a_woman_exiting_a_night_cafe_motion_blur_on_backgroun_582de1aa-dd57-4e57-9212-305fe0cf0ab1_0.png",
  "dan_asa_chibi_style_full_body_shot._Dark_corner_of_the_labora_c078b8a8-3257-4ccc-b255-bca23a13036b_1.png",
  "u4162569224_An_immense_and_vast_bright_red_minimalist_living__f9ff00a1-d1a0-409a-bd5f-71bd029bb213_3.png"
];

const portraitFiles = [
  "Gemini_Generated_Image_gokefzgokefzgoke.png",
  "dan_asa_4_--ar_34_--profile_aak7s7r_--v_7_4f3a9463-fa4f-4a3e-a0d2-bfd7c01e2cc8_3.png",
  "dan_asa_7_--ar_34_--profile_fej1ho2_--v_7_42cea9d2-ed2a-433f-b252-44046aa6f359_1.png",
  "dan_asa_A_medium_shot_perfectly_symmetrical_whimsical_photogr_1457764e-7a6b-412c-b917-b65e5db1376b_3.png",
  "dan_asa_A_perfectly_symmetrical_whimsical_photograph_with_a_s_d62e1cc0-a914-4345-9290-6fbcb3a3c0dd_3 (1).png",
  "dan_asa_Complete_full_body_shot_of_a_Korean_female_model_stan_35ef9073-316f-497e-a722-2fa7354b16a9_1.png",
  "dan_asa_a_cute_young_woman_shot_from_a_high_angle_with_clean__8af453d2-9d79-4ae4-b5a1-9eaea94b8f17_1.png",
  "dan_asa_httpss.mj.runDK_0qit0QRw_A_giant_marmalade_cats_paw_i_08195733-7c95-4bde-885f-cb10f582e141_1 (1).png",
  "dan_asa_httpss.mj.runInuSrNiW27A_A_medium_shot_perfectly_symm_a1dfaf3e-1593-4a1c-8e42-48e6ada8d0b1_2.png",
  "dan_asa_httpss.mj.runha4QAPybG28_Copy_Block_Full_body_studio__294c1e0c-6a81-4961-9a99-6575ad1fb284_1 (1).png",
  "dan_asa_two_high_school_girls_walking_in_a_school_hallway_one_ff43d0c4-a738-4e42-932b-72b4b8622ea1_0 (2).png",
  "u4162569224_K-beauty_pop-up_opening_event_soft_pink_and_chrom_3aef15e5-74e8-4870-95a8-9eb03b789bc0_1.png",
  "u4162569224_httpss.mj.run6lrl0WpAU4U_Over-the-shoulder_shot_o_d75e6a3b-de41-4cdc-a159-a6d19072fed6_1.png",
  "u4162569224_httpss.mj.runFMK5_73pq_M_Dynamic_advertising_shoo_cdd96ca1-211c-43ee-bebf-13f0a63c2519_3.png",
  "u4162569224_portrait_of_a_young_Korean_influencer_long_straig_adfb86f8-1ea2-46a0-bb54-975a28cd9e70_2.png"
];

const productImageFiles = [
  /* 닥터조 · 홈앤가든 제품 */
  "자산 2.png",
  "자산 1.png",
  "자산 3.png",
  "퓨어솔루션.png",
  "이지코트.png",
  "분갈이흙.png",
  "프리미엄 고형비료.png",
  "프리미엄 복합비료.png",
  /* 일반 제품 컷 */
  "u4162569224_The_image_shows_a_girl_sitting_on_the_lid_of_a_ro_6753e44c-62a8-4b9a-9ac3-0fcedd282a9a_1.png",
  "u4162569224_A_transparent_glass_jar_of_cream_with_light_pink__ec4a9f45-5dc6-4bd9-a9c2-8cc5a7ccb476_2.png",
  "u4162569224_A_round_yellow_skincare_product_in_a_transparent__1019f9b1-edac-4697-a52f-cf01d5c8152f_0.png",
  "u4162569224_httpss.mj.runY8YVPJb6k0Y_A_tube-shaped_cream_prod_02780557-9b1f-480e-8cec-bfbdc1b78a94_3.png",
  "dan_asa_Extreme_close-up_macro_shot_of_fingers_spreading_a_th_da1b01db-46dc-4189-b9d9-686358d9f531_2 (1).png",
  "u4162569224_Close-up_of_a_hand_with_clear_essence_dripping_on_d8131e6c-9416-4c20-ba19-51ec1d38e99e_1.png"
];

const photographyFiles = [
  "1.png", "2.png", "3.png", "4.jpg", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png",
  "11.png", "12.png", "13.png", "14.jpg", "15.png", "16.png", "17.png", "18.png", "19.JPG", "20.JPG"
];

/* ── Dashboard Projects ── */
const dashboardProjects = [
  {
    id: 401,
    type: 'dashboard',
    category: 'dashboard',
    categoryLabel: '대시보드',
    title: '유튜브 채널 분석 대시보드',
    desc: "VPH(시간당 조회수), 아웃라이어(Outlier) 등 핵심 성장 지표와 타 채널 비교·키워드 분석을 통합한 데이터 기반 콘텐츠 기획 환경",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/웹앱/유튜브 성과지표 01.png',
    badge: 'company',
    badgeLabel: 'Web App',
    tools: ['YouTube API', 'Claude OPUS'],
    images: [
      'https://nahyun1993.github.io/portfolio3/images/웹앱/유튜브 성과지표 01.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/유튜브 성과지표 02.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/유튜브 성과지표 03.png'
    ],
    brief: "직관·감에 의존한 기획을 보완하고 객관적 데이터로 채널 성장을 지원할 자체 분석 시스템 필요\nYouTube API·AI 결합으로 영상의 폭발력·시청자 반응을 여러 지표로 측정하는 커스텀 대시보드 개발",
    process: [
      { title: '유튜브 API 연동 및 심층 데이터 추출', desc: "유튜브 스튜디오 고급 모드에서도 직관적 확인이 어려운 로우 데이터(Raw Data) 추출\nAPI 직접 연동·추출 파이프라인 설계" },
      { title: '핵심 성장 지표 및 아웃라이어 수치화', desc: "초기 폭발력 지표 VPH(Views Per Hour)·채널 평균 대비 아웃라이어(Outlier) 지수·실질 시청자 참여율 자동 계산\nAI 기반 분석 로직 구현" },
      { title: '다차원 종합 랭킹 및 스코어링 시스템 도입', desc: "월별 조회수·시청 몰입도(체류시간)·전환율을 종합한 콘텐츠별 순위 산정\n자체 스코어링 시스템 구축" },
      { title: '타 채널 비교 및 타겟 키워드 분석', desc: "자사·경쟁사 채널 퍼포먼스 비교 및 트렌드 키워드 추출 기능 통합" }
    ]
  },
  {
    id: 402,
    type: 'dashboard',
    category: 'dashboard',
    categoryLabel: '대시보드',
    title: 'InsightTube 대시보드',
    desc: "YouTube Data API 기반 크리에이터·채널 성장 지표 분석 웹앱\n채널 URL 입력을 통한 VPH, 참여율, 아웃라이어 등 핵심 지표 자동 추출 및 시각화",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/웹앱/채널분석01.png',
    badge: 'personal',
    badgeLabel: 'Web App',
    tools: ['YouTube Data API v3', 'Claude OPUS'],
    images: [
      'https://nahyun1993.github.io/portfolio3/images/웹앱/채널분석01.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/채널분석02.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/채널분석03.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/채널분석04.png'
    ],
    brief: "경쟁 채널 분석을 위한 영상별 조회수·업로드 시간·댓글 수 확인 및 엑셀 수작업 집계에 과도한 시간 소요\n감에 의존한 기획의 한계 보완 및 데이터 기반 콘텐츠 전략 수립을 위한 분석 자동화 추진",
    process: [
      { title: '원클릭 데이터 파이프라인', desc: "YouTube Data API v3를 연동하여, 사용자가 채널 URL만 입력하면 채널의 전체 메타데이터를 자동 수집·분석하도록 구현" },
      { title: '콘텐츠 성과 측정', desc: "총조회수와 함께 초기 확산 속도를 나타내는 평균 VPH 및 시청자 참여율을 산출하여 콘텐츠 성과 측정" },
      { title: '아웃라이어 탐지 로직', desc: "채널의 평균 조회수 대비 높은 성과를 낸 아웃라이어를 자동으로 필터링하여, 벤치마킹할 핵심 콘텐츠를 빠르게 도출" },
      { title: '패턴 및 텍스트 분석', desc: "시간대별/요일별 업로드 패턴과 고성과 영상의 제목/콘텐츠 특징을 한눈에 파악할 수 있도록 대시보드 형태로 제공" }
    ]
  },
  {
    id: 403,
    type: 'dashboard',
    category: 'dashboard',
    categoryLabel: '브라우저 확장',
    title: 'QuickPrompt 브라우저 확장 프로그램',
    desc: "등록된 프롬프트를 한 번의 클릭으로 입력창에 삽입하는 브라우저 확장 프로그램",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/웹앱/챗봇01.png',
    badge: 'personal',
    badgeLabel: 'Extension',
    tools: ['Claude OPUS'],
    images: [
      'https://nahyun1993.github.io/portfolio3/images/웹앱/챗봇01.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/챗봇02.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/챗봇03.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/챗봇04.png'
    ],
    brief: "한 번의 클릭으로 원하는 프롬프트를 입력창에 삽입하는 브라우저 확장 프로그램\n제미나이·미드저니 등 생성형 AI 활용 증가에 따른 반복 복사·붙여넣기의 번거로움 해소",
    process: [
      { title: 'AI 에이전트 주도 개발', desc: "직접 코드 작성 대신 구글 안티그래비티를 활용한 프로젝트 완성" },
      { title: '프롬프트 엔지니어링 및 바이브 코딩 적용', desc: "필요 기능·플로팅 UI 표시·입력창 타겟팅 요구사항을 AI에 프롬프트로 전달" },
      { title: "플로팅 UI 기반 접근성 개선", desc: "화면 어디서나 접근 가능한 플로팅 버튼 구현 및 사용자 동선 최소화" },
      { title: '원클릭 프롬프트 주입', desc: "플로팅 메뉴의 사전 등록 프롬프트 선택 시 활성 웹페이지 입력창에 자동 삽입" },
      { title: '빠른 실행 환경', desc: "웹페이지 이동 없이 현재 창의 오버레이로 동작해 기존 작업 흐름 유지" }
    ]
  },
  {
    id: 404,
    type: 'dashboard',
    category: 'dashboard',
    categoryLabel: 'AI 에이전트 시스템',
    title: 'AI 개인 비서 시스템',
    desc: "Gemini API의 의도 분석, Oracle Cloud 서버, Discord 인터페이스, Notion 데이터베이스를 연동한 개인 맞춤형 AI 비서 시스템",
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/웹앱/AI 개인 비서 시스템01.png',
    badge: 'personal',
    badgeLabel: 'AI Agent',
    tools: ['Claude OPUS', 'Gemini API', 'Oracle Cloud', 'Discord API', 'Notion API'],
    images: [
      'https://nahyun1993.github.io/portfolio3/images/웹앱/AI 개인 비서 시스템01.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/AI 개인 비서 시스템02.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/AI 개인 비서 시스템03.png'
    ],
    brief: "Discord 자연어 명령 입력 → Gemini AI 의도 분석 → Notion 일정·메모·할 일 자동 저장·조회\nOracle Cloud 서버 기반 24시간 상시 운영",
    process: [
      { title: '멀티 API 통합 아키텍처 설계', desc: "Gemini API·Oracle Cloud·Discord API·Notion API의 외부 서비스 4개를 단일 파이프라인으로 통합 설계·구현" },
      { title: '자연어 명령 → 자동화 워크플로우', desc: "Discord 자연어 명령 → Gemini AI 의도 분석 → Notion 일정·메모·할 일 자동 저장·조회 워크플로 구현" },
      { title: '24시간 상시 운영 서버', desc: "Oracle Cloud 서버에서 24시간 무중단 운영\n언제 어디서나 Discord 메시지 하나로 AI 비서 기능 활용" }
    ]
  }
];

/* ── Tech Stack ── */
const techStack = [
  'Nano Banana',
  'Midjourney',
  'Higgsfield Soul',
  'Seedance 2.0',
  'ChatGPT',
  'ComfyUI',
  'Kling',
  'ElevenLabs',
  'Premiere Pro',
  'SONY A7M4',
  'Lightroom',
  'Antigravity',
  'VEO',
  'SUNO',
  'Claude',
  'Obsidian'
];

/* ── Config ── */
const SECTIONS = [
  { id: 'hero', label: 'LEE NA HYUN' },
  { id: 'selected', label: '대표 영상' },
  { id: 'workflows', label: '제작 자동화' },
  { id: 'research', label: '캐릭터 연구' },
  { id: 'archive', label: '전체 작업' }
];

/* 구 URL 앵커 호환: 예전 섹션 id로 들어와도 새 섹션으로 보냄 */
const ANCHOR_ALIAS = {
  work: 'archive', images: 'archive', motion: 'archive', tools: 'archive', about: 'about',
  cinematic: 'archive', artfilm: 'archive', commercial: 'archive', liveaction: 'archive',
  subtitle: 'archive', 'ai-image': 'archive', photography: 'archive', dashboard: 'archive'
};

/* 드라이브·유튜브로만 연결된 작품의 카드 미리보기(6초, 무음). 상세 재생은 원래 링크 그대로 */
const PREVIEW = {
  3: 'p3', 4: 'p4', 6: 'p6', 103: 'p103',
  201: 'p201', 202: 'p202', 204: 'p204', 205: 'p205', 206: 'p206'
};
/* 수상작은 썸네일 위에 수상 배지를 띄워 다른 카드와 구분한다 */
const AWARDS = { 301: 'LG유플러스 유쓰 AI 쇼츠 페스티벌 우수상', 207: '사내 도전왕 1위' };
const previewOf = p => p.videoSrc || (PREVIEW[p.id] ? `videos/preview/${PREVIEW[p.id]}.mp4` : '');

/* 대표 작업(aekyung.js)에 이미 나온 작품은 전체 작업 목록에서 뺀다 */
const ARCHIVE_EXCLUDE = [301, 309, 206];

// 실사 작업은 데이터와 원본을 보존하고 화면 목록에서만 숨긴다.
const isVisibleProject = p => p && p.category !== 'liveaction';

const FEATURED_IDS = [301, 207, 305];

/* 전체 보기 순서 */
const WORK_ORDER = [
  301,  // LG유플러스 유쓰 우수상
  3,    // ComfyUI 제품 합성·다각도 생성
  304,  // 버그올킬
  302,  // 그로잉버블
  303,  // 닥터조 뿌리는 식물영양제
  309, // 퓨어솔루션 파노라마 캐러셀
  308, 306, 305, // 분갈이흙과 넌마늘난양파 자리 교환
  207, 307,  // 가로 영상 첫 번째: 비료 회사 직원의 농사짓기
  7,    // 메디힐 토너패드
  4, 6, 103, 201, 202, 203, 204, 205, 206
];

function orderedProjects(order) {
  const list = order || WORK_ORDER;
  const rank = (p) => {
    const i = list.indexOf(p.id);
    return i === -1 ? list.length + WORK_ORDER.indexOf(p.id) : i;
  };
  return projects.filter(isVisibleProject).sort((a, b) => rank(a) - rank(b));
}

const WORK_FILTERS = [
  { key: 'ad',       label: '제품 광고' },
  { key: 'guide',    label: '가이드·리뷰' },
  { key: 'contest',  label: '공모전' },
  { key: 'film',     label: '단편 영화' }
];

/* 전체 작업 영상 분류 (AI/실사 대신 콘텐츠 유형으로 나눈다) */
const WORK_KIND = {
  304: 'ad', 308: 'ad', 305: 'ad', 306: 'ad', 307: 'ad', 302: 'ad', 303: 'ad', 3: 'ad',
  202: 'guide', 203: 'guide', 206: 'guide',
  201: 'ad', 204: 'ad',
  207: 'branded', 205: 'branded',
  4: 'contest', 7: 'contest', 301: 'contest',
  6: 'film', 103: 'film'
};

const IMAGE_FILTERS = [
  { key: 'all',           label: '전체' },
  { key: 'product-image', label: '제품' },
  { key: 'character',     label: '캐릭터' },
  { key: 'concept-art',   label: '컨셉 아트' },
  { key: 'portrait',      label: '인물' },
  { key: 'photography',   label: '실사 사진' }
];

const CDN = 'https://nahyun1993.github.io/portfolio3/images/';

/* ── State ── */
let workFilter = WORK_FILTERS[0].key;
const videoPages = new Map();
let imageFilter = 'all';
let imageLimit = 24;
let lastFocused = null;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ── Utils ── */
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const byId = (id) => document.getElementById(id);
const allProjects = () => projects.concat(dashboardProjects);

function findProject(id) {
  if (String(id) === '900') return {
    id: 900, title: 'LEE NAHYUN · SHOWREEL', categoryLabel: 'AI 영상 쇼릴',
    orientation: 'horizontal', videoSrc: 'videos/showreel-v2.mp4?v=4', poster: 'images/posters/showreel-v2.jpg'
  };
  return allProjects().find(p => String(p.id) === String(id));
}

/* ═══════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════ */
function renderNav() {
  const links = SECTIONS.map(s => `<a href="#${s.id}" data-nav="${s.id}">${s.label}</a>`).join('');
  byId('nav-links').innerHTML = links;

  document.querySelectorAll('[data-nav]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
      goTo(a.dataset.nav);
    });
  });

}

function openMenu() {
  document.body.classList.add('menu-open');
  byId('menu-toggle')?.setAttribute('aria-expanded', 'true');
}
function closeMenu() {
  document.body.classList.remove('menu-open');
  byId('menu-toggle')?.setAttribute('aria-expanded', 'false');
}

function goTo(id) {
  if (window.akNavigate) { window.akNavigate(id); return; }
  const target = byId(ANCHOR_ALIAS[id] || id);
  if (!target) return;
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  history.replaceState(null, '', '#' + (ANCHOR_ALIAS[id] || id));
}

function watchActiveSection() {
  if (window.akNavigate) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      document.querySelectorAll('[data-nav]').forEach(a => {
        a.classList.toggle('is-active', a.dataset.nav === en.target.id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  SECTIONS.forEach(s => { const el = byId(s.id); if (el) io.observe(el); });
}

/* ═══════════════════════════════════════════════
   REVEAL (IntersectionObserver, no scroll listeners)
═══════════════════════════════════════════════ */
let revealIO = null;
function observeReveals(root) {
  if (reduceMotion) {
    (root || document).querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
    return;
  }
  if (!revealIO) {
    revealIO = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); revealIO.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  }
  (root || document).querySelectorAll('.reveal:not(.is-in)').forEach(el => revealIO.observe(el));
}

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function renderHero() {
  const project = findProject(window.PORTFOLIO_HERO?.projectId) || findProject(FEATURED_IDS[0]);
  window.initPortfolioHero({
    root: byId('hero'), project, esc,
    openProject: openModal,
    openShowreel: () => openModal(900)
  });
}

/* ═══════════════════════════════════════════════
   FEATURED (asymmetric 1 + 2)
═══════════════════════════════════════════════ */
function renderFeatured() {
  const picks = FEATURED_IDS.map(findProject).filter(isVisibleProject);
  if (!picks.length) return;
  byId('featured').innerHTML = `
    <header class="featured-head"><h2>Selected works<span>.</span></h2><p>실사 촬영부터 AI 영상 제작까지.</p></header>
    <div class="featured-grid">
      ${picks.map((p, i) => `
        <article class="feat reveal ${i === 0 ? 'feat-lead' : ''}" style="--i:${i}" data-open="${p.id}" tabindex="0" role="button">
          <div class="feat-media ${p.orientation === 'vertical' ? 'is-vertical' : 'is-horizontal'}">
            <img src="${p.thumbnail}" alt="${esc(p.title)}" loading="${i === 0 ? 'eager' : 'lazy'}">
            ${p.videoSrc ? `<video src="${p.videoSrc}" muted loop playsinline preload="none" aria-hidden="true"></video>` : ''}
          </div>
          <div class="feat-info">
            ${p.badgeLabel ? `<span class="tag tag-strong">${esc(p.badgeLabel)}</span>` : ''}
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
          </div>
        </article>
      `).join('')}
    </div>
  `;
  wireCards(byId('featured'));
}

/* ═══════════════════════════════════════════════
   WORK
═══════════════════════════════════════════════ */
function renderWork() {
  const section = byId('work');
  section.innerHTML = `
    <div class="chips" id="work-chips" role="tablist" aria-label="영상 세부 카테고리">
      ${WORK_FILTERS.map(f => `<button class="chip${workFilter === f.key ? ' is-on' : ''}" data-filter="${f.key}" role="tab" aria-selected="${workFilter === f.key}">${f.label}</button>`).join('')}
    </div>
    <div class="work-grid" id="work-grid">${workCards()}</div>`;
  section.querySelectorAll('#work-chips .chip').forEach(button => {
    button.addEventListener('click', () => {
      workFilter = button.dataset.filter;
      renderWork();
      section.querySelector(`[data-filter="${workFilter}"]`).focus({ preventScroll: true });
    });
  });
  section.querySelectorAll('[data-video-page]').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.videoGroup;
      const top = section.getBoundingClientRect().top + window.scrollY;
      videoPages.set(key, Number(button.dataset.videoPage));
      renderWork();
      const updated = [...section.querySelectorAll('.video-page-group')].find(el => el.dataset.videoGroup === key);
      updated.querySelector('[aria-current="page"]')?.focus({ preventScroll: true });
      const tabs = document.querySelector('.ak-tabs');
      const header = document.querySelector('.site-header')?.offsetHeight || 0;
      const offset = Math.max(header, parseFloat(getComputedStyle(tabs).top) || 0) + tabs.offsetHeight;
      window.scrollTo({top: Math.max(0, top - offset - 24), behavior: 'instant'});
    });
  });
  wireCards(section);
  observeReveals(section);
  watchWorkGrid();
}

function videoCategoryPages(items, mixed = false) {
  const pages = [];
  if (mixed) {
    for (let start = 0; start < items.length; start += 4) {
      pages.push({format: 'mixed', items: items.slice(start, start + 4)});
    }
    return pages;
  }
  for (const format of ['vertical', 'horizontal']) {
    const list = items.filter(p => (p.orientation === 'vertical' ? 'vertical' : 'horizontal') === format);
    const size = format === 'vertical' ? 8 : 4;
    for (let start = 0; start < list.length; start += size) {
      pages.push({format, items: list.slice(start, start + size)});
    }
  }
  return pages;
}

function workCards() {
  const items = orderedProjects().filter(p => !ARCHIVE_EXCLUDE.includes(p.id) && WORK_KIND[p.id] === workFilter);
  if (!items.length) return `<p class="empty">해당 분류의 공개 작업 없음</p>`;
  const pages = videoCategoryPages(items, workFilter === 'branded');
  const page = Math.min(videoPages.get(workFilter) || 1, pages.length);
  videoPages.set(workFilter, page);
  const current = pages[page - 1];
  const label = WORK_FILTERS.find(filter => filter.key === workFilter).label;
  const button = (target, text, accessible, disabled = false, active = false) => `<button type="button" data-video-group="${workFilter}" data-video-page="${target}" aria-label="${label} ${accessible}" ${disabled ? 'disabled' : ''} ${active ? 'aria-current="page"' : ''}>${text}</button>`;
  return `<section class="video-page-group" data-video-group="${workFilter}" aria-label="${label}">
    <div class="archive-format-row is-${current.format}"${current.format === 'mixed' ? ` style="--mixed-columns:${current.items.map(item => `minmax(0, ${item.orientation === 'vertical' ? 9 / 16 : 16 / 9}fr)`).join(' ')}"` : ''}>${videoCards(current.items)}</div>
    <nav class="video-pagination" aria-label="${label} 페이지">
      ${button(page - 1, '←', '이전 페이지', page === 1)}
      ${pages.map((_, i) => button(i + 1, i + 1, `${i + 1}페이지`, false, page === i + 1)).join('')}
      ${button(page + 1, '→', '다음 페이지', page === pages.length)}
    </nav>
  </section>`;
}

function videoCards(list) {
  return list.map((p, i) => `
    <article class="card reveal${p.orientation === 'panorama' ? ' pure-film' : ''}${AWARDS[p.id] ? ' is-award' : ''}" ${p.id === 309 ? 'id="pure-solution"' : ''} style="--i:${i % 8}" data-open="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)} 자세히 보기">
      <div class="card-media ${p.orientation === 'vertical' ? 'is-vertical' : p.orientation === 'panorama' ? 'is-panorama' : 'is-horizontal'}">
        ${p.thumbnail
          ? `<img src="${p.thumbnail}" alt="${esc(p.title)}" loading="lazy">`
          : `<div class="card-blank"></div>`}
        ${previewOf(p) ? `<video src="${previewOf(p)}" muted loop playsinline preload="none" aria-hidden="true"></video>` : ''}
        ${AWARDS[p.id] ? `<span class="ak-award"><span class="ak-award-mark" aria-hidden="true">🏅</span>${esc(AWARDS[p.id])}</span>` : ''}
      </div>
      <div class="card-info">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc).replace(/\n/g, '<br>')}</p>
        <div class="card-foot">
          <span class="tag">${esc(p.categoryLabel || '')}</span>
          ${p.badgeLabel ? `<span class="tag tag-strong">${esc(p.badgeLabel)}</span>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}
function pureGallery(p) {
  return `<section class="pure-gallery" aria-label="퓨어솔루션 실제 게시 캐러셀">
    <p class="pure-gallery-label">SNS CAROUSEL <span>실제 게시 이미지 · 4:5</span></p>
    <div class="pure-gallery-track" tabindex="0" role="region" aria-label="캐러셀 이미지. 좌우 방향키 또는 스와이프로 넘기기">
      ${p.carousel.map((src, i) => `<img src="${src}" width="1080" height="1350" alt="퓨어솔루션 캐러셀 ${i + 1} / 4" loading="${i ? 'lazy' : 'eager'}">`).join('')}
    </div>
    <div class="pure-gallery-controls"><button type="button" data-gallery-prev aria-label="이전 캐러셀 이미지">←</button><span aria-live="polite">01 / 04</span><button type="button" data-gallery-next aria-label="다음 캐러셀 이미지">→</button></div>
  </section>`;
}
function wirePureGallery(root) {
  const gallery = root.querySelector('.pure-gallery'); if (!gallery) return;
  const track = gallery.querySelector('.pure-gallery-track'), images = [...track.querySelectorAll('img')];
  const prev = gallery.querySelector('[data-gallery-prev]'), next = gallery.querySelector('[data-gallery-next]');
  const index = () => images.reduce((best, img, i) => Math.abs(img.offsetLeft - track.scrollLeft) < Math.abs(images[best].offsetLeft - track.scrollLeft) ? i : best, 0);
  const move = delta => { const img = images[Math.max(0, Math.min(3, index() + delta))]; track.scrollTo({left: img.offsetLeft, behavior: reduceMotion ? 'instant' : 'smooth'}); };
  const update = () => { const n = index(); gallery.querySelector('.pure-gallery-controls span').textContent = `0${n + 1} / 04`; prev.disabled = n === 0; next.disabled = n === 3; };
  prev.addEventListener('click', () => move(-1)); next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', update, {passive:true});
  track.addEventListener('keydown', e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); move(e.key === 'ArrowRight' ? 1 : -1); } });
  update();
}

/* 항목 높이를 8px 행 단위 span으로 환산 (메이슨리) */
// Uniform landscape grids are laid out by CSS, including archive images.
function layoutMasonry(gridId, itemSel) {
  const grid = byId(gridId);
  if (grid) grid.querySelectorAll(itemSel).forEach(el => el.style.removeProperty('--span'));
}

function layoutAllGrids() {
  layoutMasonry('work-grid', '.card');
  layoutMasonry('mosaic', '.mos');
}

let gridRO = null;
function watchMasonry(gridId, itemSel) {
  const grid = byId(gridId);
  if (!grid) return;
  layoutMasonry(gridId, itemSel);
  grid.querySelectorAll('img').forEach(img => {
    if (!img.complete) img.addEventListener('load', () => layoutMasonry(gridId, itemSel), { once: true });
  });
  if (!gridRO) {
    gridRO = new ResizeObserver(() => layoutAllGrids());
    gridRO.observe(document.body);
  }
}

function watchWorkGrid() { watchMasonry('work-grid', '.card'); }
function watchMosaic() { watchMasonry('mosaic', '.mos'); }

function wireCards(root) {
  root.querySelectorAll('[data-open]').forEach(el => {
    if (el.dataset.wired) return;
    el.dataset.wired = '1';
    const id = el.dataset.open;
    const open = () => (String(id).length === 3 && String(id)[0] === '4') ? openDashboardModal(parseInt(id)) : openModal(parseInt(id));
    el.addEventListener('click', open);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    const v = el.querySelector('video');
    if (v && finePointer && !reduceMotion) {
      el.addEventListener('mouseenter', () => { v.preload = 'auto'; v.play().then(() => el.classList.add('is-playing')).catch(() => {}); });
      el.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; el.classList.remove('is-playing'); });
    }
  });
}

/* ═══════════════════════════════════════════════
   IMAGES
═══════════════════════════════════════════════ */
function imageItems() {
  return [
    ...productImageFiles.map(f => ({ src: CDN + 'AI Image/Product Image/' + f, cat: 'product-image', label: '제품 이미지' })),
    ...characterFiles.map(f => ({ src: CDN + 'AI Image/character/' + f, cat: 'character', label: '캐릭터' })),
    ...conceptArtFiles.map(f => ({ src: CDN + 'AI Image/Concept Art/' + f, cat: 'concept-art', label: '컨셉 아트' })),
    { src: 'images/portraits/k-pop-beauty-editorial.png', cat: 'portrait', label: '뷰티 에디토리얼 인물 이미지' },
    ...portraitFiles.map(f => ({ src: CDN + 'AI Image/Portrait/' + f, cat: 'portrait', label: '인물 이미지' })),
    ...photographyFiles.map(f => ({ src: CDN + 'AI Image/Photography/' + f, cat: 'photography', label: '실사 사진' }))
  ];
}

function renderImages() {
  const section = byId('images');
  const items = imageItems();
  section.innerHTML = `
    <header class="sec-head">
      <h2>이미지</h2>
      <p>AI 이미지 · 실사 사진(SONY A7M4)</p>
    </header>
    <div class="chips" id="image-chips" role="tablist">
      ${IMAGE_FILTERS.map(f => `<button class="chip${imageFilter === f.key ? ' is-on' : ''}" data-filter="${f.key}" role="tab" aria-selected="${imageFilter === f.key}">${f.label}</button>`).join('')}
    </div>
    <div class="mosaic" id="mosaic">${mosaicItems(items)}</div>
    <div class="more-wrap" id="more-wrap">${moreButton(items)}</div>
  `;
  section.querySelectorAll('#image-chips .chip').forEach(b => {
    b.addEventListener('click', () => {
      imageFilter = b.dataset.filter;
      section.querySelectorAll('#image-chips .chip').forEach(x => {
        const on = x.dataset.filter === imageFilter;
        x.classList.toggle('is-on', on);
        x.setAttribute('aria-selected', on);
      });
      imageLimit = 24;
      byId('mosaic').innerHTML = mosaicItems(items);
      byId('more-wrap').innerHTML = moreButton(items);
      wireMosaic();
      wireMore(items);
      watchMosaic();
    });
  });
  wireMosaic();
  wireMore(items);
  watchMosaic();
}

function filteredImages(items) {
  return imageFilter === 'all' ? items : items.filter(i => i.cat === imageFilter);
}

function moreButton(items) {
  const total = filteredImages(items).length;
  if (total <= imageLimit) return '';
  return `<button class="btn btn-ghost" id="more-btn">이미지 더 보기 (${total - imageLimit})</button>`;
}

function wireMore(items) {
  const btn = byId('more-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    imageLimit += 24;
    byId('mosaic').innerHTML = mosaicItems(items);
    byId('more-wrap').innerHTML = moreButton(items);
    wireMosaic();
    wireMore(items);
    watchMosaic();
  });
}

function mosaicItems(items) {
  const list = filteredImages(items).slice(0, imageLimit);
  return list.map(i => `
    <button class="mos" data-src="${i.src}" aria-label="${esc(i.label)} 크게 보기">
      <img src="${i.src}" alt="${esc(i.label)}" loading="lazy">
    </button>
  `).join('');
}

function wireMosaic() {
  document.querySelectorAll('.mos').forEach(b => {
    if (b.dataset.wired) return;
    b.dataset.wired = '1';
    b.addEventListener('click', () => openLightbox(b.dataset.src));
  });
}

/* ═══════════════════════════════════════════════
   MOTION (자막디자인)
═══════════════════════════════════════════════ */
function renderMotion() {
  byId('motion').innerHTML = `
    <header class="sec-head">
      <h2>자막디자인</h2>
      <p>방송·웹 콘텐츠 타이포 모션</p>
    </header>
    <div class="motion-strip">
      <figure class="motion-item reveal" style="--i:0">
        <video src="./images/자막/제목.mp4" poster="./images/posters/자막-제목.jpg" autoplay loop muted playsinline preload="metadata"></video>
      </figure>
      <figure class="motion-item reveal" style="--i:1">
        <video src="./images/자막/연참.mp4" poster="./images/posters/자막-연참.jpg" autoplay loop muted playsinline preload="metadata"></video>
      </figure>
      <figure class="motion-item reveal" style="--i:2">
        <video src="./images/자막/그래프.mp4" poster="./images/posters/자막-그래프.jpg" autoplay loop muted playsinline preload="metadata"></video>
      </figure>
    </div>
    <div class="motion-stills">
      <img class="reveal" style="--i:0" src="./images/자막/자막디자인01.png" alt="자막 디자인 시안" loading="lazy">
      <img class="reveal" style="--i:1" src="./images/자막/자막디자인02.png" alt="자막 디자인 시안" loading="lazy">
    </div>
  `;
  if (reduceMotion) {
    byId('motion').querySelectorAll('video').forEach(v => { v.autoplay = false; v.removeAttribute('autoplay'); v.pause(); });
  }
}

/* ═══════════════════════════════════════════════
   TOOLS (웹앱) - list rows, not cards
═══════════════════════════════════════════════ */
function renderTools() {
  const section = byId('tools');
  section.innerHTML = `
    <header class="sec-head">
      <h2>웹앱</h2>
      <p>영상 기획 지원 · 반복 업무 자동화용 자체 개발 도구</p>
    </header>
    <div class="rows">
      ${dashboardProjects.map((p, i) => `
        <article class="row reveal" style="--i:${i}" data-open="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)} 자세히 보기">
          <div class="row-thumb">${p.thumbnail ? `<img src="${p.thumbnail}" alt="" loading="lazy">` : ''}</div>
          <div class="row-body">
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc).replace(/\n/g, '<br>')}</p>
          </div>
          <div class="row-tools">${p.tools.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        </article>
      `).join('')}
    </div>
  `;
  wireCards(section);
}

/* ═══════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════ */
function renderAbout() {
  byId('about').innerHTML = `
    <header class="sec-head">
      <h2>사용 도구</h2>
    </header>
    <ul class="stack">
      ${techStack.map(t => `<li>${esc(t)}</li>`).join('')}
    </ul>
  `;
}

/* ═══════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════ */
function mediaBlock(p) {
  const vertical = p.orientation === 'vertical';
  const cls = vertical ? 'modal-media is-vertical' : p.orientation === 'panorama' ? 'modal-media is-panorama' : 'modal-media';
  if (p.videoSrc) {
    return `<div class="${cls}"><video src="${p.videoSrc}" poster="${p.poster || ''}" controls autoplay muted playsinline preload="metadata"></video></div>`;
  }
  if (p.youtubeId) {
    return `<div class="${cls}"><iframe src="https://www.youtube.com/embed/${p.youtubeId}" title="${esc(p.title)}" allow="autoplay; fullscreen" allowfullscreen></iframe></div><p class="media-fallback"><a href="https://www.youtube.com/watch?v=${encodeURIComponent(p.youtubeId)}" target="_blank" rel="noopener">YouTube에서 영상 보기 ↗</a></p>`;
  }
  if (p.driveId) {
    return `<div class="${cls}"><iframe src="https://drive.google.com/file/d/${p.driveId}/preview" title="${esc(p.title)}" allow="autoplay" allowfullscreen></iframe></div><p class="media-fallback"><a href="https://drive.google.com/file/d/${encodeURIComponent(p.driveId)}/view" target="_blank" rel="noopener">Google Drive에서 영상 보기 ↗</a><span>재생 오류 시 새 창에서 확인</span></p>`;
  }
  return '';
}

/* 줄바꿈 단위의 개조식 문구를 의미 있는 목록으로 렌더 */
function briefParagraphs(text) {
  return `<ul class="copy-list">${String(text).split('\n').map(t => t.trim()).filter(Boolean)
    .map(t => `<li>${esc(t)}</li>`).join('')}</ul>`;
}

function detailBlock(p) {
  const scenes = (p.scenes && p.scenes.length) ? `
    <section class="modal-block">
      <h4>주요 장면</h4>
      <div class="scene-grid ${p.orientation === 'vertical' ? 'is-vertical' : ''}">
        ${p.scenes.map(s => `<img src="${s}" alt="${esc(p.title)} 장면" loading="lazy" data-lb="${s}">`).join('')}
      </div>
    </section>` : '';

  const shots = (p.images && p.images.length) ? `
    <section class="modal-block">
      <h4>화면</h4>
      <div class="scene-grid">
        ${p.images.map(s => `<img src="${s}" alt="${esc(p.title)} 화면" loading="lazy" data-lb="${s}">`).join('')}
      </div>
    </section>` : '';

  const proc = (p.process && p.process.length) ? `
    <section class="modal-block">
      <h4>${esc(p.processLabel || '제작 과정')}</h4>
      <ol class="process">
        ${p.process.map(s => `<li><strong>${esc(s.title)}</strong>${briefParagraphs(s.desc)}</li>`).join('')}
      </ol>
    </section>` : '';

  return `
    <header class="modal-head">
      <div class="modal-tags">
        <span class="tag">${esc(p.categoryLabel || '')}</span>
        ${p.badgeLabel ? `<span class="tag tag-strong">${esc(p.badgeLabel)}</span>` : ''}
      </div>
      <h3>${esc(p.title)}</h3>
    </header>
    <div class="case-tabs" role="tablist" aria-label="작품 상세 내용">
      <button type="button" role="tab" id="modal-result-tab" aria-controls="modal-result" aria-selected="true" data-modal-tab="result">작품 소개</button>
      <button type="button" role="tab" id="modal-process-tab" aria-controls="modal-process" aria-selected="false" tabindex="-1" data-modal-tab="process">제작 과정</button>
    </div>
    <section id="modal-result" class="modal-tab-panel" role="tabpanel" aria-labelledby="modal-result-tab" tabindex="0">
      ${mediaBlock(p)}
      ${p.brief ? `<section class="modal-block"><h4>기획 의도</h4>${briefParagraphs(p.brief)}</section>` : ''}
      ${scenes}
      ${shots}
      ${p.carousel ? pureGallery(p) : ''}
    </section>
    <section id="modal-process" class="modal-tab-panel" role="tabpanel" aria-labelledby="modal-process-tab" tabindex="0" hidden>
      ${p.processMedia?.length ? `<section class="modal-block"><h4>ComfyUI 작업 화면</h4><div class="modal-process-gallery">${p.processMedia.map(m => `<figure><a href="${esc(m.src)}" target="_blank" rel="noopener"><img src="${esc(m.src)}" alt="${esc(m.caption)}" loading="lazy"></a><figcaption>${esc(m.caption)} · 클릭하여 확대 ↗</figcaption></figure>`).join('')}</div></section>` : ''}
      ${proc}
      ${p.tools?.length ? `<section class="modal-block"><h4>사용 도구</h4><div class="modal-tools">${p.tools.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div></section>` : ''}
      ${!p.process?.length && !p.tools?.length ? '<p>등록된 제작 과정 자료 없음</p>' : ''}
    </section>
  `;
}

function openModal(id) {
  const p = findProject(id);
  if (!p) return;
  lastFocused = document.activeElement;
  byId('hero-video')?.pause();
  const inner = byId('modal-inner');
  inner.innerHTML = `
    <button id="modal-close" class="modal-close" aria-label="닫기">닫기</button>
    <div class="modal-body">${detailBlock(p)}</div>
  `;
  const modal = byId('modal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  const tabs = [...inner.querySelectorAll('[data-modal-tab]')];
  const selectTab = tab => {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    inner.querySelectorAll('[role="tabpanel"]').forEach(panel => {
      panel.hidden = panel.id !== tab.getAttribute('aria-controls');
    });
    inner.querySelectorAll('video').forEach(video => video.pause());
    // Unload embedded players when leaving the result tab to stop playback.
    inner.querySelectorAll('iframe').forEach(frame => {
      if (tab.dataset.modalTab === 'process') {
        frame.dataset.playerSrc = frame.getAttribute('src');
        frame.removeAttribute('src');
      } else if (frame.dataset.playerSrc) {
        frame.src = frame.dataset.playerSrc;
        delete frame.dataset.playerSrc;
      }
    });
    tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      if (tab.getAttribute('aria-selected') !== 'true') selectTab(tab);
    });
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      if (tabs[next] !== tab) selectTab(tabs[next]);
    });
  });
  wirePureGallery(inner);
  byId('modal-close').focus();
  byId('modal-close').addEventListener('click', closeModal);
  inner.querySelectorAll('[data-lb]').forEach(img => img.addEventListener('click', () => openLightbox(img.dataset.lb)));
}

function openDashboardModal(id) { openModal(id); }

function closeModal() {
  const modal = byId('modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  byId('modal-inner').innerHTML = '';
  if (lastFocused) lastFocused.focus();
  document.dispatchEvent(new Event('reel-resume'));
}

/* ── Lightbox ── */
function openLightbox(src) {
  const lb = byId('lightbox');
  const image = new Image();
  image.src = src;
  image.alt = '선택한 포트폴리오 이미지';
  lb.replaceChildren(image);
  lb.classList.add('is-open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}
function closeLightbox() {
  const lb = byId('lightbox');
  lb.classList.remove('is-open');
  lb.setAttribute('aria-hidden', 'true');
  lb.replaceChildren();
  if (!byId('modal').classList.contains('is-open')) document.body.classList.remove('no-scroll');
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
function init() {
  renderNav();
  renderHero();
  /* 포트폴리오: 대표 작업·성과·경력은 aekyung.js가 그린다. 아래는 접힌 '전체 작업' 탭 내용 */
  renderWork();
  renderImages();
  renderMotion();
  renderTools();
  observeReveals();
  watchActiveSection();

  byId('modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });
  byId('lightbox').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && byId('modal').classList.contains('is-open')) {
      const nodes = [...byId('modal').querySelectorAll('button, a[href], video[controls], iframe, [tabindex="0"]')];
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    if (e.key !== 'Escape') return;
    if (byId('lightbox').classList.contains('is-open')) return closeLightbox();
    if (byId('modal').classList.contains('is-open')) return closeModal();
    if (document.body.classList.contains('menu-open')) return closeMenu();
  });

  /* 앵커로 들어온 경우 첫 페인트 전에 위치를 잡아 상단이 번쩍이지 않게 한다 */
  const hash = location.hash.replace('#', '');
  if (window.akNavigate) window.akNavigate(hash || 'hero', false, false);
  else if (hash) goTo(hash);
}

document.addEventListener('DOMContentLoaded', init);


