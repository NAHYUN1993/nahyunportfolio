/* ============================================================
   LEE NAHYUN Portfolio — script.js
   Sidebar Layout (migrated from portfolio3 carousel)
   ============================================================ */

/* ── Project Data ── */
const projects = [
  /* ─────────────────────────────────────────────────────────
     AI 영상 아트필름
  ───────────────────────────────────────────────────────── */
  {
    id: 105,
    type: 'video',
    category: 'artfilm',
    categoryLabel: '아트필름',
    title: '내면세계',
    desc: '치열하게 노력하고 연대하며 살아가고 있지만, 마음 깊은 곳에서는 햇살 좋은 잔디밭에서 걱정 없이 쉬는 평화로운 삶을 꿈꾸고 있습니다',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/내면세계_썸네일.png',
    badge: 'personal',
    badgeLabel: '',  // no badge
    tools: ['Midjourney', 'Nano Banana', 'Kling'],
    driveId: '1lPxq8sHWjQTRwpkS9FEqfsgCi_zoY83V',
    orientation: 'horizontal',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/내면세계/내면세계01.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/내면세계/내면세계02.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/내면세계/내면세계03.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/내면세계/내면세계04.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/내면세계/내면세계05.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/내면세계/내면세계06.png'
    ],
    brief: '기획의도: 뮈에르 커뮤니티 과제. 치열하게 노력하고 연대하며 살아가고 있지만, 마음 깊은 곳에서는 햇살 좋은 잔디밭에서 걱정 없이 쉬는 평화로운 삶을 꿈꾸는 내면세계를 표현함.',
    process: []
  },
  /* ─────────────────────────────────────────────────────────
     AI 영상 커머셜
  ───────────────────────────────────────────────────────── */
  {
    id: 1,
    type: 'video',
    category: 'commercial',
    categoryLabel: '커머셜 AI 영상',
    title: '작물 영양제 기능 홍보 · 네이버 숏클립 커머셜',
    desc: '작물 영양제의 핵심 성분과 효능을 직관적으로 시각화하고, 고도화된 프롬프트 엔지니어링으로 한글 텍스트 깨짐을 원천 차단하여 후반 리터칭 없이 상업용 숏폼 에셋을 구축한 커머스 영상.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/작물영양제 기능 홍보.png',
    badge: 'company',
    badgeLabel: '커머스 프로젝트',
    tools: ['Antigravity', 'Nano Banana', 'Premiere Pro', 'Kling', 'Obsidian'],
    driveId: '1EClMUBheaXkb-DgJTsscnEIPpK80AA0S',
    orientation: 'horizontal',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/작물영양제기능홍보/작물영양제 주요장면_01.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/작물영양제기능홍보/작물영양제 주요장면_02.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/작물영양제기능홍보/작물영양제 주요장면_03.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/작물영양제기능홍보/작물영양제 주요장면_04.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/작물영양제기능홍보/작물영양제 주요장면_05.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/작물영양제기능홍보/작물영양제 주요장면_06.png'
    ],
    brief: '제품의 성분과 기능을 모바일 세로형(9:16) 네이버 숏클립 시청 환경에 맞춰 가장 빠르고 직관적으로 전달할 수 있도록 정보 밀도를 높여 기획함. 상업용 커머스 영상에서 가장 중요한 제품 패키지와 한글 로고의 정확성을 AI 생성 단계에서부터 완벽하게 구현하는 것을 최우선 기술 과제로 설정함.',
    process: [
      { title: '핵심 기능 및 셀링 포인트 기획', desc: '작물 영양제의 특정 영양분과 그것이 작물에 미치는 긍정적 효과를, 네이버 숏클립 시청자의 구매 전환으로 직관적으로 유도할 수 있도록 스토리보드를 구성함.' },
      { title: '한글 왜곡 방어 및 최적화 프롬프트 설계', desc: 'AI 생성 시 필연적으로 발생하는 한글 텍스트 왜곡 및 패키지 형태 일그러짐 현상을 방어하기 위해 안티그래비티 환경에서 심층 리서치를 진행함. 제품 패키지의 비율과 한글 타이포그래피를 고정할 수 있는 최적의 프롬프트 구문과 네거티브 프롬프트를 자체 설계함.' },
      { title: '후반 작업 없는 고품질 에셋 생성', desc: '자체 설계한 프롬프트를 나노바나나2 모델에 적용함. 한글 텍스트 및 패키지 왜곡이 전혀 없는 상업용 수준의 고품질 제품 이미지를 한 번에 추출함. 별도의 포토샵 리터칭 없이 상업용 숏폼 에셋으로 즉시 활용 가능하게 하여 생산 효율성을 극대화함.' }
    ]
  },
  {
    id: 2,
    type: 'video',
    category: 'commercial',
    categoryLabel: '커머셜 AI 영상',
    title: '5분 분갈이 챌린지 · 올인원 원예 제품 사용 가이드',
    desc: '복잡한 분갈이 공정을 5분 미션이라는 게이미피케이션 요소로 재해석하여, 초보자의 심리적 장벽을 낮추고 제품의 올인원 편의성을 극대화한 숏폼 영상.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/분갈이흙2.png',
    badge: 'company',
    badgeLabel: '커머스 프로젝트',
    tools: ['Nano Banana', 'Photoshop', 'Kling', 'Premiere Pro'],
    driveId: '1kzPULkIVpHz7PnBzJW3cBCNiU-EnxxV8',
    orientation: 'vertical',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_01.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_02.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_03.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_04.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_05.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_06.png'
    ],
    brief: '가드닝 입문자들은 분갈이를 취미가 아닌 복잡하고 실패하기 쉬운 노동으로 인식하는 경향이 있어 이를 해소할 강력한 트리거가 필요함. 제품의 USP인 간편함을 텍스트가 아닌 영상 언어로 증명하기 위해 시간 제한 챌린지 형식을 차용함.',
    process: [
      { title: '일관성 확보 및 컷 생성', desc: '캐릭터 시트를 우선 제작하여 컷마다 인물 생김새가 달라지는 AI의 무작위성을 통제함. 확정된 캐릭터 페르소나를 기반으로 분갈이 공정별 주요 장면을 생성함.' },
      { title: '디테일 보정', desc: '생성형 AI 특성상 제품 패키지의 로고나 텍스트가 왜곡되는 현상이 발생하여, 포토샵을 활용한 이미지 합성 및 리터칭으로 왜곡된 제품 영역에 실제 고화질 제품 이미지를 합성함.' },
      { title: '영상화 및 컷 편집', desc: '보정 완료된 이미지를 클링 모델로 생성. 프리미어 프로에서 컷 연결.' }
    ]
  },
  {
    id: 3,
    type: 'video',
    category: 'commercial',
    categoryLabel: '시즌 캠페인',
    title: '크리스마스 시즌 캠페인',
    desc: '자사 마스코트 토끼 캐릭터에 크리스마스 산타 코스튬을 적용한 시즌 베리에이션을 생성하고, 실제 자사 제품을 정교하게 합성하여 완성도 높은 숏폼 캠페인 필름을 제작함.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/시즌캠페인_크리스마스.png',
    badge: 'company',
    badgeLabel: '회사 프로젝트',
    tools: ['Nano Banana', 'ComfyUI', 'Kling', 'Premiere Pro'],
    driveId: '1qtkc4js6sA5ZEvdF8BUB8N1gLcI8tB6B',
    orientation: 'vertical',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_01.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_02.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_03.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_04.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_07.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/크리스마스/크리스마스 주요장면_06.png'
    ],
    brief: '마스코트 토끼 캐릭터의 IP 가치를 활용하여 시즌에 맞는 브랜디드 콘텐츠를 제작함. AI 기반 캐릭터 생성과 실제 제품 합성을 결합하여, 캐릭터의 아이덴티티를 유지하면서 상업적 완성도를 확보함.',
    process: [
      { title: '캐릭터 시트 및 페르소나 구축', desc: '나노바나나를 활용해 기본 캐릭터 시트를 생성. 다양한 카메라 앵글과 표정 변화에 대응할 시각 에셋을 확보함.' },
      { title: '시즌 베리에이션 및 코스튬 적용', desc: '산타 코스튬 모티프를 적용하여 버전 변형. 캐릭터 고유의 아이덴티티를 완벽하게 유지함.' },
      { title: 'AI 한계 극복 및 제품 합성', desc: 'ComfyUI의 qwen_image_edit 노드를 활용해 캐릭터 영역에 실제 식물 영양제 제품 이미지를 이질감 없이 자연스럽게 합성함.' },
      { title: '다각도 장면 일괄 생성 (Multiple Angle LoRA)', desc: 'qwen_Multiple_angle LoRA 모델을 적용하는 워크플로를 설계하여, 캐릭터의 각기 다른 다양한 앵글과 장면을 한 번에 생성하는 자동화 작업을 진행함.' },
      { title: '모션 부여 및 편집 마무리', desc: '프리픽 Kling 모델로 영상화 및 프리미어 프로에서 편집 마무리.' }
    ]
  },
  {
    id: 4,
    type: 'video',
    category: 'commercial',
    categoryLabel: '광고 AI 영상',
    title: 'AI로 다시 태어난 한복, 그리고 한식',
    desc: '브랜드 이름(이도 식당)의 모티브인 세종대왕(이도)을 화자로 등장시켜 드라마틱한 스토리텔링을 부여. "이름을 도용당해 화가 난 왕이 맛을 보고 감동한다"는 반전 서사 영상.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/공모전_한복한식.png',
    badge: 'contest',
    badgeLabel: '공모전 출품작',
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
    brief: '브랜드 네이밍에서 출발한 세종대왕 페르소나와 조선 시대 배경을 통해 한복과 한식의 문화적 가치를 현대적 영상 언어로 재해석함. 왕이 식당 이름에 분노하다가 맛에 감동한다는 반전 내러티브를 중심으로, 시청자의 흥미를 유발하면서 브랜드 메시지를 자연스럽게 전달하는 구조를 설계함.',
    process: [
      { title: '컨셉 아트 및 톤앤매너 기획', desc: '미드저니를 활용해 사극 특유의 웅장하고 고전적인 시대적 배경과 인물 베이스 이미지를 생성함. 시각적 기준점을 설정하고 프로토타이핑을 수행함.' },
      { title: '스토리보드 기반 씬 생성', desc: '사전 기획된 스토리보드 서사에 맞춰 나노바나나 모델로 세부 컷을 생성함. 인물의 앵글과 씬의 연속성을 안정적으로 유지함.' },
      { title: 'AI 한계 극복 및 에셋 합성', desc: '주최측이 요구한 특정 한복 패턴과 디테일 구현을 위해 포토샵 활용. 마스킹 및 이미지 합성 작업 수행, 의상을 제공 에셋으로 치환하여 시각적 일관성을 확보함.' },
      { title: '모션 부여 및 최종 편집', desc: '프리픽 Kling 모델로 영상화하고, 프리미어 프로에서 오디오 믹싱 등 최종 마스터.' }
    ]
  },
  {
    id: 101,
    type: 'video',
    category: 'commercial',
    categoryLabel: '브랜드 커머셜',
    title: '나노바나나',
    desc: '초고성능 인공지능 이미지 생성 기술인 나노바나나의 압도적인 스타일 베리에이션 능력을 직관적으로 증명하기 위한 테크 커머셜 필름.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/나노바나나.png',
    badge: 'company',
    badgeLabel: '커머스 프로젝트',
    tools: ['Nano Banana', 'Premiere Pro'],
    driveId: '1UionJ84Kyz9OjvfQot6yiUt0piYegRUt',
    orientation: 'horizontal',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/나노바나나/1.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/나노바나나/2.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/나노바나나/3.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/나노바나나/4.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/나노바나나/5.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/나노바나나/6.png'
    ],
    brief: '바나나를 핵심 오브제로 고정하고, 이를 중심으로 인공지능이 구현할 수 있는 무한한 화풍의 변환 과정을 속도감 있게 보여주어 기술의 혁신성과 상업적 활용 가치를 어필함.',
    process: [
      { title: '핵심 오브제 기반 다중 화풍 실험 기획', desc: '바나나라는 하나의 확고한 피사체를 중심으로, 인공지능이 구현할 수 있는 다양한 시각적 스타일을 실험하기 위한 스토리보드 기획. 하이엔드 전자기기 광고의 세련된 연출 문법을 차용하여, 각기 다른 화풍의 결과물들이 이질감 없이 연결되도록 구성함.' },
      { title: '초정밀 형태 고정 프롬프트 설계', desc: '나노바나나 기술의 스타일 해석 능력과 정밀한 제어력을 시각화하는 데 집중함. 원본 바나나의 형태와 위치는 완벽하게 고정한 상태에서, 극단적으로 다른 화풍으로만 변환시키는 고난이도 프롬프트 구조를 자체 설계하여 기술의 범용성을 증명함.' }
    ]
  },
  {
    id: 102,
    type: 'video',
    category: 'commercial',
    categoryLabel: '인스타 밈 콘텐츠',
    title: '오션아이 밈 챌린지 (AI 커버)',
    desc: '인스타그램 바이럴 오션아이 밈을 AI 숏폼 영상으로 완벽하게 재현. 손가락의 해부학적 구조와 자연스러운 윙크 모션을 왜곡 없이 구현함.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/오션아이.png',
    badge: 'personal',
    badgeLabel: '숏폼 프로젝트',
    tools: ['ComfyUI', 'Kling', 'Premiere Pro'],
    driveId: '1vkH7IVE0fJ6ya444eaZ3OcL1wX1Ak6uX',
    orientation: 'vertical',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/오션아이/Gemini_Generated_Image_ksq91hksq91hksq9.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/오션아이/막컷_upscayl_2x_upscayl-standard-4x.png'
    ],
    brief: '인스타그램 릴스 등에서 바이럴되는 오션아이(손을 모아 만든 틈 사이로 윙크하는 모습) 밈을 AI 생성 기술로 완벽하게 재현하여 숏폼 시청자들의 자연스러운 인게이지먼트를 유도함.',
    process: [
      { title: '숏폼 타겟팅 기획', desc: '기존 실사 위주의 밈 챌린지 틈새에서 시각적 차별화를 주기 위해 매력적인 AI 가상 모델 기획. 스크롤을 멈추게 하는 9:16 모바일 풀사이즈 클로즈업 앵글을 설정함.' }
    ]
  },
  {
    id: 7,
    type: 'video',
    category: 'commercial',
    categoryLabel: '광고 AI 영상',
    title: '토너패드 광고 메디힐 공모전',
    desc: '기존 뷰티 광고의 감성적 클리셰를 배제하고, 1mm의 빈틈도 허락하지 않는 완벽주의자의 시선에서 네모 패드가 얼굴 굴곡에 완벽히 밀착되는 시각적 카타르시스와 3-Step 루틴을 직관적으로 연출한 브랜드 필름.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/공모전_메디힐.png',
    badge: 'contest',
    badgeLabel: '공모전 출품작',
    tools: ['Midjourney', 'Nano Banana', 'ComfyUI', 'Kling'],
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
    brief: '주 타겟인 토너패드 입문자들은 정확한 활용법을 인지하지 못해 제품의 효능을 100% 누리지 못하고 있음. 또한, 얼굴의 넓은 면적을 빈틈없이 커버할 수 있는 구조적 형태에 대한 니즈가 존재함. 팩토 → 닦토 → 흡토로 이어지는 3단계 루틴을 직관적 연출하고, 네모 패드의 직각 형태가 곡선의 얼굴 면적에 빈틈없이 맞물리는 순간을 강조함.',
    process: [
      { title: '데이터 분석 및 키워드 충돌 아이데이션', desc: '방대한 뷰티 시장 리서치 자료를 NotebookLM에 학습시켜 인사이트를 신속하게 분석함. 도출된 핵심 키워드를 바탕으로 상충되는 개념을 의도적으로 충돌시키는 크리에이티브 방법론을 통해 완벽주의자의 뷰티 오브제라는 차별화된 메인 컨셉을 발전시킴.' },
      { title: '톤앤무드 기획 및 캐릭터 페르소나 구축', desc: '미드저니를 활용하여 프로젝트의 톤앤무드를 결정하는 고해상도 컨셉 아트를 생성함. 완벽주의자 캐릭터의 시각적 페르소나를 확립하고, 최적의 레퍼런스를 구축함.' },
      { title: '시각적 일관성 확보 및 씬 생성', desc: '나노바나나를 활용하여 스토리보드의 주요 장면들을 생김새·복장·조명 톤 일관성을 유지하며 생성함.' },
      { title: '다각도 시퀀스 자동화 및 일괄 생성', desc: 'qwen_Multiple_angle 워크플로우로 단일 프롬프트 입력만으로 다양한 카메라 앵글 시퀀스를 자동 출력하는 일괄 처리 기능을 구현함.' },
      { title: 'AI 한계 보정 및 브랜드 에셋 합성', desc: '제품 로고 및 텍스트 왜곡 문제를 해결하기 위해 AI 생성 이미지 내 왜곡된 영역에 실제 고화질 제품 에셋을 완벽하게 합성하여 무결성을 확보함.' },
      { title: '이미지 영상화 및 마스터 편집', desc: '이미지를 프리픽 Kling 모델로 영상화. 프리미어 프로에서 컷 연결, 오디오 믹싱, 자막 작업을 진행함.' }
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
    desc: '인간의 탐욕(순혈주의 펫샵)이 부른 좀비 바이러스 사태 속에서, 순수함을 간직한 아이들과 실험체 강아지들이 연대하여 재난을 극복해 나가는 SF 스릴러.',
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
    brief: '인간의 이기적 욕망이 초래한 재난 상황 속에서 연대와 극복이라는 메시지를 담음.',
    process: [
      { title: 'AI 립싱크 구현', desc: 'Kling의 디지털 캐릭터 기능을 적극 활용. 인물 이미지 에셋에 더빙 오디오 소스를 결합하여 캐릭터의 입 모양과 미세한 안면 근육이 자연스럽게 움직이도록 구현함.' },
      { title: '서사 편집', desc: '팀원들이 분업으로 생성한 대량의 AI 영상·이미지 에셋을 Premiere Pro에서 하나의 완결된 서사 흐름으로 편집함.' }
    ]
  },
  {
    id: 103,
    type: 'video',
    category: 'cinematic',
    categoryLabel: 'SF 단편 영화',
    title: '얼어붙은 아마존',
    desc: '기후 위기로 얼어붙은 아마존 디스토피아 세계관을 배경으로, 인류 생존의 열쇠인 코어를 고치기 위한 여정을 다룬 시네마틱 SF 단편 영화.',
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
    brief: '기후 위기로 인해 얼어붙어버린 아마존이라는 디스토피아적 세계관과, 인류 생존의 열쇠인 코어를 고치기 위한 여정, 그리고 이것이 모두 시뮬레이션이었다는 극적 반전을 담은 단편 영화 기획.',
    process: [
      { title: '시네마틱 내러티브 및 극적 반전 기획', desc: '열대우림의 빙하기라는 시각적 모순을 통해 낯설고도 웅장한 디스토피아 배경을 설계함. 최후의 순간 디지털 글리치 효과와 함께 현실로 전환되는 반전 스토리보드를 밀도 있게 구성함.' },
      { title: '프롬프트 기반 장엄한 스케일 연출', desc: 'SF 장르 특유의 스케일과 디테일 묘사를 위해, 렌즈 구경, 조명, 색감 등을 제어하는 전문적인 촬영/카메라 룩다운 프롬프트 엔지니어링 수행.' }
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
    desc: '외부 섭외의 한계를 돌파하기 위해 제작자가 직접 농사에 참여하는 오리지널 리얼리티 포맷을 기획. 단일 영상 최고 조회수 40만 회 달성 및 전사 \'도전왕\' 1위 수상한 채널 턴어라운드 프로젝트.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/농사짓기프로젝트_썸네일.png',
    badge: 'company',
    badgeLabel: '40만 조회 · 도전왕 1위',
    tools: ['iPhone 13', 'Premiere Pro'],
    youtubeId: 'ucorOvw9rcc',
    orientation: 'horizontal',
    scenes: [],
    brief: `외부 섭외의 한계를 돌파하기 위해 제작자가 직접 농사에 참여하는 오리지널 리얼리티 포맷을 기획하여, 단일 영상 최고 조회수 40만 회 달성 및 전사 '도전왕' 1위을 수상한 채널 턴어라운드 프로젝트. 제품의 실제 효능을 날것의 스토리텔링과 세대 간의 유쾌한 티키타카로 풀어내어 콘텐츠의 오락성과 신뢰도를 동시에 극대화함. 단일 콘텐츠 기준 최고 조회수 40만회 돌파. 압도적인 채널 기여도를 인정받아 전사 혁신 및 성과 평가 '도전왕' 부문 1등 수상.`,
    process: [
      { title: '01 오리지널 IP 기획', desc: '기존 외부 인력 섭외 방식의 제품 실증 영상은 스케줄링의 한계와 작위적인 연출로 인해 시청자의 지속적인 공감대 형성과 채널 충성도 확보에 어려움이 존재함. 프로 농사꾼 아빠와 함께 직접 농사를 짓는 \'리얼리티 다큐·예능 포맷\'으로 전환함.' },
      { title: '02 세대 간 티키타카 서사 설계', desc: '새로운 방식을 추구하는 비료 회사 직원 딸과 전통만을 고집하는 아빠의 유쾌한 충돌을 스토리텔링 엔진으로 활용. 시청자의 방어심리적 장벽을 허물었음.' },
      { title: '03.', desc: '단순 제품 홍보를 넘어 시청자와의 강한 정서적 유대감을 형성함. 이를 통해 브랜드 유튜브 채널의 구독자 급증 및 자사 제품에 대한 고관여 시청자의 자발적 인바운드 관심을 유도함.' }
    ]
  },
  {
    id: 201,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '블루밍버블',
    desc: '식물과 교감하는 일상을 따뜻한 무드로 담아내어 타겟 시청자(식집사)의 깊은 공감대를 이끌어낸 감성 콘텐츠.',
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
    brief: '식물과 교감하는 일상을 따뜻한 무드로 담아내어 타겟 시청자(식집사)의 깊은 공감대를 이끌어낸 감성 콘텐츠',
    process: []
  },
  {
    id: 202,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: 'HOW TO 뿌리영양제',
    desc: '제품의 올바른 사용법을 직관적인 앵글로 담아내어 시청자의 편의성을 높인 실용적 가이드 영상.',
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
    brief: '제품의 올바른 사용법을 직관적인 앵글로 담아내어 시청자의 편의성을 높인 실용적 가이드 영상.',
    process: []
  },
  {
    id: 203,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '다이소 식물 아이템 리뷰',
    desc: 'SNS 트렌드를 반영하여 화제성 높은 타사(다이소) 아이템을 직접 구매 후, 활용하는 모습을 기획한 바이럴 콘텐츠.',
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
    brief: '단순 제품 홍보를 넘어 SNS 트렌드를 파악하고 타사 아이템과의 시너지를 연구해 제작한 콘텐츠.',
    process: []
  },
  {
    id: 204,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '식물살리기 60일 프로젝트',
    desc: '죽어가는 식물에 제품을 투여하여 60일간 소생하는 과정을 기록한 리얼리티 다큐멘터리.',
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
    brief: '죽어가는 식물에 자사 제품을 투여하여 60일간 소생하는 과정을 파트별로 기록하고, 사내 연구진원(박사)의 식물학적 자문을 더해 압도적인 효능을 과학적이고 진정성 있게 증명함.',
    process: [
      { title: '사내 전문가 자문 (R&D Collaboration)', desc: '단순한 시각적 관찰에 그치지 않고, 박사 연구진과의 소통을 통해 생장 상태를 진단하여 텍스트와 내러티브의 전문성을 극대화함.' },
      { title: '비주얼 스토리텔링 및 교차 편집', desc: '60일이라는 장기를 전후(Before & After)의 극적 컷으로 교차시켜 시각적 카타르시스를 선사함.' }
    ]
  },
  {
    id: 205,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '식물편집샵 대표 인터뷰',
    desc: '업계 전문가의 인사이트를 담아내어 브랜드의 권위를 높이고 전문성을 강조한 인터뷰 영상.',
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
    brief: '업계 전문가 인터뷰를 통해 브랜드 가치와 제품 안정성 및 효용성을 교차 증명한 영상.',
    process: []
  },
  {
    id: 206,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '오리지널 영상 - 실사',
    title: '이지코트 제품 소개 ASMR',
    desc: '제품 특유의 질감과 소리를 백색소음으로 활용해 시청각적 쾌감을 동시에 자극하는 감각적인 제품 홍보 영상.',
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
    brief: '제품 특유의 질감과 소리를 백색소음으로 활용해 시청각적 쾌감을 동시에 자극하는 감각적인 제품 홍보 영상.',
    process: []
  },
  /* ─────────────────────────────────────────────────────────
     신규 추가 (2026) - 로컬 호스팅 영상
  ───────────────────────────────────────────────────────── */
  {
    id: 301,
    type: 'video',
    category: 'artfilm',
    categoryLabel: '아트필름',
    title: 'LG 유쓰 AI 쇼츠 페스티벌 우수상',
    desc: 'AI로 생성한 인물이 스스로를 소개하는 형식. 서로 모순되는 자기 인식을 짧은 문장과 셀피 앵글로 이어 붙여 한 사람의 결을 보여준 숏폼.',
    videoSrc: './videos/lg-youth-festival.mp4',
    poster: './images/posters/lg-youth-festival.jpg',
    thumbnail: './images/posters/lg-youth-festival.jpg',
    badge: 'award',
    badgeLabel: '우수상',
    tools: [],
    orientation: 'vertical',
    scenes: [],
    brief: 'LG 유쓰 AI 쇼츠 페스티벌 출품작. 커피 향은 좋아하지만 커피는 못 마시는 사람, 앞장서는 사람이지만 주목받으면 부끄러운 사람. 한 인물 안의 상반된 면을 병렬로 나열하는 구조로 짧은 러닝타임 안에서 캐릭터를 각인시킴.',
    process: []
  },
  {
    id: 302,
    type: 'video',
    category: 'commercial',
    categoryLabel: '커머셜 AI 영상',
    title: '그로잉버블',
    desc: '온실을 배경으로 3D 캐릭터가 식물을 키우는 과정을 파스텔 톤으로 담은 브랜드 숏폼. 실제 집행된 광고.',
    videoSrc: './videos/growing-bubble.mp4',
    poster: './images/posters/growing-bubble.jpg',
    thumbnail: './images/posters/growing-bubble.jpg',
    badge: 'company',
    badgeLabel: '집행 광고',
    tools: [],
    orientation: 'vertical',
    scenes: [],
    brief: '브랜드 마스코트 캐릭터와 제품 세계관을 하나의 온실 공간으로 묶어, 제품 사용 결과를 캐릭터의 행동으로 보여주는 구성. 파스텔 톤 아트디렉션으로 제품군 전체의 시각적 일관성을 유지함.',
    process: []
  },
  {
    id: 303,
    type: 'video',
    category: 'commercial',
    categoryLabel: '커머셜 AI 영상',
    title: '닥터조 뿌리는 식물영양제',
    desc: '판타지 숲에서 레몬 정원으로 이어지는 세계관을 만들고, 그 끝에 제품 컷을 배치한 스프레이 영양제 광고.',
    videoSrc: './videos/drjoe-spray.mp4',
    poster: './images/posters/drjoe-spray.jpg',
    thumbnail: './images/posters/drjoe-spray.jpg',
    badge: 'company',
    badgeLabel: '제품 광고',
    tools: [],
    orientation: 'vertical',
    scenes: [],
    brief: '제품의 효능(뿌리면 자란다)을 설명 대신 장면으로 번역함. 어두운 숲에서 빛나는 열매를 거쳐 만개한 레몬 정원으로 이어지는 시퀀스로 변화의 폭을 시각화하고, 마지막에 제품 패키지를 배치해 메시지를 닫음.',
    process: []
  },
  {
    id: 304,
    type: 'video',
    category: 'commercial',
    categoryLabel: '커머셜 AI 영상',
    title: '버그올킬',
    desc: '젤리 질감의 벌레 캐릭터로 이루어진 월드를 만들고, 스프레이 사용 장면으로 이어지는 살충제 광고. 실제 집행된 광고.',
    videoSrc: './videos/bug-all-kill.mp4',
    poster: './images/posters/bug-all-kill.jpg',
    thumbnail: './images/posters/bug-all-kill.jpg',
    badge: 'company',
    badgeLabel: '집행 광고',
    tools: [],
    orientation: 'vertical',
    scenes: [],
    brief: '살충제 광고에서 거부감을 만드는 요소인 벌레를, 반투명 젤리 질감의 캐릭터로 재해석해 시청 이탈을 낮춤. 제품 사용 장면을 세계관 안의 사건처럼 배치해 광고 톤을 유지함.',
    process: []
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
  "dan_asa_Extreme_close-up_macro_shot_of_fingers_spreading_a_th_da1b01db-46dc-4189-b9d9-686358d9f531_2 (1).png",
  "u4162569224_A_round_yellow_skincare_product_in_a_transparent__1019f9b1-edac-4697-a52f-cf01d5c8152f_0.png",
  "u4162569224_A_transparent_glass_jar_of_cream_with_light_pink__ec4a9f45-5dc6-4bd9-a9c2-8cc5a7ccb476_2.png",
  "u4162569224_Close-up_of_a_hand_with_clear_essence_dripping_on_d8131e6c-9416-4c20-ba19-51ec1d38e99e_1.png",
  "u4162569224_The_image_shows_a_girl_sitting_on_the_lid_of_a_ro_6753e44c-62a8-4b9a-9ac3-0fcedd282a9a_1.png",
  "u4162569224_httpss.mj.runY8YVPJb6k0Y_A_tube-shaped_cream_prod_02780557-9b1f-480e-8cec-bfbdc1b78a94_3.png",
  "분갈이흙.png",
  "이지코트.png",
  "자산 1.png",
  "자산 2.png",
  "자산 3.png",
  "퓨어솔루션.png",
  "프리미엄 고형비료.png",
  "프리미엄 복합비료.png"
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
    desc: '유튜브 스튜디오 기본 제공 지표의 한계를 넘어, VPH(시간당 조회수)와 아웃라이어(Outlier) 등 핵심 성장 지표를 수치화하고 타 채널 비교 및 키워드 분석까지 통합한 데이터 기반의 콘텐츠 기획 환경.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/웹앱/유튜브 성과지표 01.png',
    badge: 'company',
    badgeLabel: 'Web App',
    tools: ['YouTube API', 'Claude OPUS'],
    images: [
      'https://nahyun1993.github.io/portfolio3/images/웹앱/유튜브 성과지표 01.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/유튜브 성과지표 02.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/유튜브 성과지표 03.png'
    ],
    brief: '단순한 직관이나 감에 의존하는 콘텐츠 기획에서 벗어나, 객관적인 데이터 기반으로 채널의 고속 성장을 견인할 자체적인 분석 시스템이 필요했음. 이에 유튜브 API와 AI를 결합하여 영상의 폭발력과 시청자 반응을 입체적으로 측정할 수 있는 커스텀 대시보드를 개발함.',
    process: [
      { title: '유튜브 API 연동 및 심층 데이터 추출', desc: '유튜브 스튜디오 고급 모드에서도 직관적으로 확인하기 어려운 로우 데이터(Raw Data)를 API를 통해 직접 연동 및 추출하는 파이프라인을 설계함.' },
      { title: '핵심 성장 지표 및 아웃라이어 수치화', desc: '영상의 초기 폭발력을 증명하는 VPH(Views Per Hour), 채널 평균 대비 성과를 보여주는 아웃라이어(Outlier) 지수, 그리고 실질적인 시청자 참여율 등을 자동으로 계산하는 AI 기반 분석 로직을 구현함.' },
      { title: '다차원 종합 랭킹 및 스코어링 시스템 도입', desc: '월별 조회수, 시청 몰입도(체류시간), 전환율 데이터를 종합하여 콘텐츠별 등수를 매기는 자체 스코어링 시스템을 구축함.' },
      { title: '타 채널 비교 및 타겟 키워드 분석', desc: '자사 채널뿐만 아니라 경쟁사 채널의 퍼포먼스를 비교 분석하고, 트렌드 키워드를 추출하는 기능을 대시보드에 통합함.' }
    ]
  },
  {
    id: 402,
    type: 'dashboard',
    category: 'dashboard',
    categoryLabel: '대시보드',
    title: 'InsightTube 대시보드',
    desc: 'YouTube Data API 기반 크리에이터/채널 성장 지표 분석 웹앱. 채널 URL 하나만으로 VPH, 참여율, 아웃라이어 등 핵심 성장 지표를 원클릭으로 추출하고 시각화.',
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
    brief: '감에 의존하는 콘텐츠 기획의 한계: 성공적인 콘텐츠 전략을 세우기 위해 경쟁 채널 분석이 필수적이나, 기존에는 영상마다 일일이 조회수, 업로드 시간, 댓글 수를 확인하고 엑셀로 수작업 계산을 해야 하는 리소스 낭비가 심했음.',
    process: [
      { title: '원클릭 데이터 파이프라인', desc: 'YouTube Data API v3를 연동하여, 사용자가 채널 URL만 입력하면 즉시 채널의 전체 메타데이터를 수집 및 분석하는 자동화 환경 구축.' },
      { title: '콘텐츠 성과 측정', desc: '단순히 총조회수가 아닌, 영상의 폭발력을 보여주는 평균 VPH와 시청자 반응을 나타내는 참여율을 공식화하여 계산.' },
      { title: '아웃라이어 탐지 로직', desc: '채널의 평균 조회수 대비 기형적으로 높은 성과를 낸 아웃라이어를 자동으로 필터링하여, 벤치마킹할 핵심 콘텐츠를 빠르게 도출.' },
      { title: '패턴 및 텍스트 분석', desc: '시간대별/요일별 업로드 패턴과 고성과 영상의 제목/콘텐츠 특징을 한눈에 파악할 수 있도록 대시보드 형태로 제공.' }
    ]
  },
  {
    id: 403,
    type: 'dashboard',
    category: 'dashboard',
    categoryLabel: '브라우저 확장',
    title: 'QuickPrompt 브라우저 확장 프로그램',
    desc: '단 번의 클릭으로 원하는 프롬프트를 입력창에 즉시 주입하는 브라우저 확장 프로그램.',
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
    brief: '반복되는 프롬프트 입력의 번거로움을 없애고, 단 한 번의 클릭으로 원하는 프롬프트를 입력창에 즉시 주입하는 브라우저 확장 프로그램. 제미나이, 미드저니 등 다양한 생성형 AI 플랫폼 활용이 늘어나면서 자주 쓰는 프롬프트를 매번 복사/붙여넣기 해야 하는 번거로움을 해소함.',
    process: [
      { title: 'AI 에이전트 주도 개발', desc: '기존의 전통적인 하드코딩 방식이 아닌, 구글의 안티그래비티를 활용해 프로젝트를 완성함.' },
      { title: '프롬프트 엔지니어링 및 바이브 코딩 적용', desc: 'AI에게 어떤 기능이 필요한지, 플로팅 UI는 어떻게 띄울지, 입력창 타겟팅은 어떻게 할지 등 요구사항을 프롬프트로 지시함.' },
      { title: '플로팅 UI를 통한 접근성 극대화', desc: '화면 어느 곳에서나 즉각적으로 접근할 수 있는 플로팅 버튼을 구현하여 사용자의 동선을 최소화함.' },
      { title: '원클릭 프롬프트 주입', desc: '플로팅 메뉴에서 사전에 등록해 둔 프롬프트를 선택하면, 현재 활성화된 웹페이지의 입력창에 텍스트가 자동으로 삽입되도록 구현.' },
      { title: '빠른 실행 환경', desc: '웹페이지 이동 없이 현재 창에서 오버레이 형태로 동작하여 끊김 없는 사용자 경험 제공.' }
    ]
  },
  {
    id: 404,
    type: 'dashboard',
    category: 'dashboard',
    categoryLabel: 'AI 에이전트 시스템',
    title: 'AI 개인 비서 시스템',
    desc: 'Gemini API를 두뇌로, Oracle Cloud를 서버로, Discord를 인터페이스로, Notion을 데이터베이스로 연결하여 구축한 개인 맞춤형 AI 비서 시스템.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/웹앱/AI 개인 비서 시스템01.png',
    badge: 'personal',
    badgeLabel: 'AI Agent',
    tools: ['Claude OPUS', 'Gemini API', 'Oracle Cloud', 'Discord API', 'Notion API'],
    images: [
      'https://nahyun1993.github.io/portfolio3/images/웹앱/AI 개인 비서 시스템01.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/AI 개인 비서 시스템02.png',
      'https://nahyun1993.github.io/portfolio3/images/웹앱/AI 개인 비서 시스템03.png'
    ],
    brief: 'Discord 채널을 통해 자연어로 명령을 입력하면 → Gemini AI가 의도를 분석하고 → Notion 데이터베이스에 일정/메모/할 일을 자동 저장/조회하는 통합 워크플로우를 구현. Oracle Cloud 서버에서 24시간 상시 운영.',
    process: [
      { title: '멀티 API 통합 아키텍처 설계', desc: 'Gemini API + Oracle Cloud + Discord API + Notion API 4개의 외부 서비스를 하나의 파이프라인으로 연결하는 통합 아키텍처를 설계 및 구현함.' },
      { title: '자연어 명령 → 자동화 워크플로우', desc: 'Discord 채널을 통해 자연어로 명령을 입력하면 Gemini AI가 의도를 분석하고 Notion 데이터베이스에 일정/메모/할 일을 자동 저장·조회하는 통합 워크플로우 구현.' },
      { title: '24시간 상시 운영 서버', desc: 'Oracle Cloud 서버에서 24시간 무중단으로 운영. 언제 어디서나 Discord 메시지 하나로 AI 비서 기능을 즉시 활용 가능.' }
    ]
  }
];

/* ── Tech Stack ── */
const techStack = [
  'Nano Banana',
  'Midjourney',
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
  { id: 'work',   label: '작업' },
  { id: 'images', label: '이미지' },
  { id: 'motion', label: '자막디자인' },
  { id: 'tools',  label: '웹앱' },
  { id: 'about',  label: '소개' }
];

/* 구 URL 앵커 호환: 예전 섹션 id로 들어와도 새 섹션으로 보냄 */
const ANCHOR_ALIAS = {
  cinematic: 'work', artfilm: 'work', commercial: 'work', liveaction: 'work',
  subtitle: 'motion', 'ai-image': 'images', photography: 'images', dashboard: 'tools'
};

const FEATURED_IDS = [301, 207, 302];

const WORK_FILTERS = [
  { key: 'all',        label: '전체' },
  { key: 'commercial', label: '커머셜' },
  { key: 'cinematic',  label: '시네마틱' },
  { key: 'artfilm',    label: '아트필름' },
  { key: 'liveaction', label: '실사' }
];

const IMAGE_FILTERS = [
  { key: 'all',           label: '전체' },
  { key: 'character',     label: '캐릭터 일관성' },
  { key: 'concept-art',   label: '컨셉 아트' },
  { key: 'portrait',      label: '인물' },
  { key: 'product-image', label: '제품' },
  { key: 'photography',   label: '실사 사진' }
];

const CDN = 'https://nahyun1993.github.io/portfolio3/images/';

/* ── State ── */
let workFilter = 'all';
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
  return allProjects().find(p => String(p.id) === String(id));
}

/* ═══════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════ */
function renderNav() {
  const links = SECTIONS.map(s => `<a href="#${s.id}" data-nav="${s.id}">${s.label}</a>`).join('');
  byId('nav-links').innerHTML = links;
  byId('menu-links').innerHTML = links;

  document.querySelectorAll('[data-nav]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
      goTo(a.dataset.nav);
    });
  });

  byId('menu-toggle').addEventListener('click', () => {
    document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
  });
}

function openMenu() {
  document.body.classList.add('menu-open');
  byId('menu-toggle').setAttribute('aria-expanded', 'true');
}
function closeMenu() {
  document.body.classList.remove('menu-open');
  byId('menu-toggle').setAttribute('aria-expanded', 'false');
}

function goTo(id) {
  const target = byId(ANCHOR_ALIAS[id] || id);
  if (!target) return;
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  history.replaceState(null, '', '#' + (ANCHOR_ALIAS[id] || id));
}

function watchActiveSection() {
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
  /* 히어로는 대표작 3편과 겹치지 않는 영상을 쓴다 */
  const lead = findProject(304);
  byId('hero').innerHTML = `
    <div class="hero-copy">
      <p class="hero-role">AI Creator &amp; Visual Director</p>
      <h1 class="hero-name">LEE<br>NAHYUN</h1>
      <p class="hero-lead">AI로 생성한 영상부터 카메라로 찍은 실사까지, 브랜드가 파는 장면을 만듭니다.</p>
      <div class="hero-cta">
        <button class="btn btn-primary" data-nav="work">작업 보기</button>
        <a class="btn btn-ghost" href="mailto:yk6838@gmail.com">yk6838@gmail.com</a>
      </div>
    </div>
    <div class="hero-media">
      <div class="hero-frame" data-open="${lead ? lead.id : ''}">
        <img src="${lead ? lead.poster : ''}" alt="${lead ? esc(lead.title) : ''} 광고 스틸" fetchpriority="high" width="720" height="1280">
        ${lead && lead.videoSrc ? `<video src="${lead.videoSrc}" muted loop playsinline preload="none" aria-hidden="true"></video>` : ''}
      </div>
    </div>
  `;
  byId('hero').querySelector('[data-nav]').addEventListener('click', () => goTo('work'));
  const frame = byId('hero').querySelector('.hero-frame');
  frame.addEventListener('click', () => openModal(304));
  if (!reduceMotion) {
    const v = frame.querySelector('video');
    if (v) {
      const io = new IntersectionObserver((en) => {
        en.forEach(e => {
          if (e.isIntersecting) { v.preload = 'auto'; v.play().then(() => frame.classList.add('is-playing')).catch(() => {}); }
          else { v.pause(); }
        });
      }, { threshold: 0.4 });
      io.observe(frame);
    }
  }
}

/* ═══════════════════════════════════════════════
   FEATURED (asymmetric 1 + 2)
═══════════════════════════════════════════════ */
function renderFeatured() {
  const picks = FEATURED_IDS.map(findProject).filter(Boolean);
  if (!picks.length) return;
  byId('featured').innerHTML = `
    <h2 class="sr-only">주요 작업</h2>
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
    <header class="sec-head">
      <h2>작업</h2>
      <p>AI 생성 영상과 실사 촬영물 ${projects.length}편. 카드를 열면 기획 의도와 제작 과정이 나옵니다.</p>
    </header>
    <div class="chips" id="work-chips" role="tablist">
      ${WORK_FILTERS.map(f => `<button class="chip${workFilter === f.key ? ' is-on' : ''}" data-filter="${f.key}" role="tab" aria-selected="${workFilter === f.key}">${f.label}</button>`).join('')}
    </div>
    <div class="work-grid" id="work-grid">${workCards()}</div>
  `;
  section.querySelectorAll('#work-chips .chip').forEach(b => {
    b.addEventListener('click', () => {
      workFilter = b.dataset.filter;
      section.querySelectorAll('#work-chips .chip').forEach(x => {
        const on = x.dataset.filter === workFilter;
        x.classList.toggle('is-on', on);
        x.setAttribute('aria-selected', on);
      });
      byId('work-grid').innerHTML = workCards();
      wireCards(byId('work-grid'));
      observeReveals(byId('work-grid'));
      watchWorkGrid();
    });
  });
  wireCards(section);
  watchWorkGrid();
}

function workCards() {
  const list = workFilter === 'all' ? projects : projects.filter(p => p.category === workFilter);
  if (!list.length) return `<p class="empty">이 분류에는 아직 공개한 작업이 없습니다.</p>`;
  return list.map((p, i) => `
    <article class="card reveal" style="--i:${i % 8}" data-open="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)} 자세히 보기">
      <div class="card-media ${p.orientation === 'vertical' ? 'is-vertical' : 'is-horizontal'}">
        ${p.thumbnail
          ? `<img src="${p.thumbnail}" alt="${esc(p.title)}" loading="lazy">`
          : `<div class="card-blank"></div>`}
        ${p.videoSrc ? `<video src="${p.videoSrc}" muted loop playsinline preload="none" aria-hidden="true"></video>` : ''}
      </div>
      <div class="card-info">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="card-foot">
          <span class="tag">${esc(p.categoryLabel || '')}</span>
          ${p.badgeLabel ? `<span class="tag tag-strong">${esc(p.badgeLabel)}</span>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

/* 카드 높이를 8px 행 단위 span으로 환산 (메이슨리) */
function layoutWorkGrid() {
  const grid = byId('work-grid');
  if (!grid) return;
  const gap = parseFloat(getComputedStyle(grid).rowGap) || 0;
  grid.querySelectorAll('.card').forEach(card => {
    card.style.setProperty('--span', Math.ceil((card.getBoundingClientRect().height + gap) / 8));
  });
}

let gridRO = null;
function watchWorkGrid() {
  const grid = byId('work-grid');
  if (!grid) return;
  layoutWorkGrid();
  grid.querySelectorAll('img').forEach(img => {
    if (!img.complete) img.addEventListener('load', layoutWorkGrid, { once: true });
  });
  if (!gridRO) {
    gridRO = new ResizeObserver(() => layoutWorkGrid());
    gridRO.observe(document.body);
  }
}

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
    ...characterFiles.map(f => ({ src: CDN + 'AI Image/character/' + f, cat: 'character', label: '캐릭터 일관성' })),
    ...conceptArtFiles.map(f => ({ src: CDN + 'AI Image/Concept Art/' + f, cat: 'concept-art', label: '컨셉 아트' })),
    ...portraitFiles.map(f => ({ src: CDN + 'AI Image/Portrait/' + f, cat: 'portrait', label: '인물 이미지' })),
    ...productImageFiles.map(f => ({ src: CDN + 'AI Image/Product Image/' + f, cat: 'product-image', label: '제품 이미지' })),
    ...photographyFiles.map(f => ({ src: CDN + 'AI Image/Photography/' + f, cat: 'photography', label: '실사 사진' }))
  ];
}

function renderImages() {
  const section = byId('images');
  const items = imageItems();
  section.innerHTML = `
    <header class="sec-head">
      <h2>이미지</h2>
      <p>AI로 생성한 캐릭터와 제품 이미지, 그리고 SONY A7M4로 찍은 실사 사진.</p>
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
    });
  });
  wireMosaic();
  wireMore(items);
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
      <p>정보를 읽히게 만드는 타이포와 모션. 영상 안에서 반복 사용하는 자막 시스템입니다.</p>
    </header>
    <div class="motion-strip">
      <figure class="motion-item reveal" style="--i:0">
        <video src="./images/자막/제목.mp4" autoplay loop muted playsinline preload="metadata"></video>
      </figure>
      <figure class="motion-item reveal" style="--i:1">
        <video src="./images/자막/연참.mp4" autoplay loop muted playsinline preload="metadata"></video>
      </figure>
      <figure class="motion-item reveal" style="--i:2">
        <video src="./images/자막/그래프.mp4" autoplay loop muted playsinline preload="metadata"></video>
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
      <p>영상 기획에 필요한 데이터를 직접 만들려고 붙인 도구들.</p>
    </header>
    <div class="rows">
      ${dashboardProjects.map((p, i) => `
        <article class="row reveal" style="--i:${i}" data-open="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)} 자세히 보기">
          <div class="row-thumb">${p.thumbnail ? `<img src="${p.thumbnail}" alt="" loading="lazy">` : ''}</div>
          <div class="row-body">
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
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
    <div class="about-grid">
      <div class="about-main">
        <h2>소개</h2>
        <p class="about-lead">AI 생성 기술과 영상 연출의 교차점에서 작업합니다.</p>
        <p>실사 촬영과 편집으로 시작해, 지금은 AI 생성 영상과 이미지를 상업용 품질로 끌어올리는 워크플로를 직접 설계하고 운영합니다. 기획부터 생성, 후반, 성과 측정까지 한 사람이 이어붙이는 방식으로 일합니다.</p>
        <p class="about-contact">
          <a href="mailto:yk6838@gmail.com">yk6838@gmail.com</a>
        </p>
      </div>
      <div class="about-side">
        <h3>사용 도구</h3>
        <ul class="stack">
          ${techStack.map(t => `<li>${esc(t)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════ */
function mediaBlock(p) {
  const vertical = p.orientation === 'vertical';
  const cls = vertical ? 'modal-media is-vertical' : 'modal-media';
  if (p.videoSrc) {
    return `<div class="${cls}"><video src="${p.videoSrc}" poster="${p.poster || ''}" controls autoplay muted playsinline preload="metadata"></video></div>`;
  }
  if (p.youtubeId) {
    return `<div class="${cls}"><iframe src="https://www.youtube.com/embed/${p.youtubeId}" title="${esc(p.title)}" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`;
  }
  if (p.driveId) {
    return `<div class="${cls}"><iframe src="https://drive.google.com/file/d/${p.driveId}/preview" title="${esc(p.title)}" allow="autoplay" allowfullscreen></iframe></div>`;
  }
  return '';
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
      <h4>제작 과정</h4>
      <ol class="process">
        ${p.process.map(s => `<li><strong>${esc(s.title)}</strong><span>${esc(s.desc)}</span></li>`).join('')}
      </ol>
    </section>` : '';

  return `
    <header class="modal-head">
      <div class="modal-tags">
        <span class="tag">${esc(p.categoryLabel || '')}</span>
        ${p.badgeLabel ? `<span class="tag tag-strong">${esc(p.badgeLabel)}</span>` : ''}
      </div>
      <h3>${esc(p.title)}</h3>
      ${p.tools && p.tools.length ? `<div class="modal-tools">${p.tools.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>` : ''}
    </header>
    ${p.brief ? `<section class="modal-block"><h4>기획 의도</h4><p>${esc(p.brief)}</p></section>` : ''}
    ${proc}
    ${scenes}
    ${shots}
  `;
}

function openModal(id) {
  const p = findProject(id);
  if (!p) return;
  lastFocused = document.activeElement;
  const inner = byId('modal-inner');
  inner.innerHTML = `
    <button id="modal-close" class="modal-close" aria-label="닫기">닫기</button>
    ${mediaBlock(p)}
    <div class="modal-body">${detailBlock(p)}</div>
  `;
  const modal = byId('modal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
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
}

/* ── Lightbox ── */
function openLightbox(src) {
  const lb = byId('lightbox');
  lb.querySelector('img').src = src;
  lb.classList.add('is-open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}
function closeLightbox() {
  const lb = byId('lightbox');
  lb.classList.remove('is-open');
  lb.setAttribute('aria-hidden', 'true');
  lb.querySelector('img').src = '';
  if (!byId('modal').classList.contains('is-open')) document.body.classList.remove('no-scroll');
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
function init() {
  renderNav();
  renderHero();
  renderFeatured();
  renderWork();
  renderImages();
  renderMotion();
  renderTools();
  renderAbout();
  observeReveals();
  watchActiveSection();

  byId('modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });
  byId('lightbox').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (byId('lightbox').classList.contains('is-open')) return closeLightbox();
    if (byId('modal').classList.contains('is-open')) return closeModal();
    if (document.body.classList.contains('menu-open')) return closeMenu();
  });

  /* 앵커로 들어온 경우 첫 페인트 전에 위치를 잡아 상단이 번쩍이지 않게 한다 */
  const hash = location.hash.replace('#', '');
  if (hash) goTo(hash);
}

document.addEventListener('DOMContentLoaded', init);
