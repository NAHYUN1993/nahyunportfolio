/* ============================================================
   LEE NAHYUN Portfolio — script.js
   Sidebar Layout (migrated from portfolio3 carousel)
   ============================================================ */

/* ── Project Data ── */
const projects = [
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
    badgeLabel: '🏢 회사 프로젝트',
    tools: ['Nano Banana', 'Premiere Pro', 'Kling'],
    driveId: '1EClMUBheaXkb-DgJTsscnEIPpK80AA0S',
    orientation: 'vertical',
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
    badgeLabel: '🏢 회사 프로젝트',
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
      { title: '영상화 및 컷 편집', desc: '보정 완료된 이미지를 클링 모델로 생성. 프리미어 프로에서 컷 연결, 스피드 램핑.' }
    ]
  },
  {
    id: 3,
    type: 'video',
    category: 'commercial',
    categoryLabel: '시즌 캠페인',
    title: '크리스마스 시즌 캠페인 · 마스코트 토끼',
    desc: '자사 마스코트 토끼 캐릭터에 크리스마스 산타 코스튬을 적용한 시즌 베리에이션을 생성하고, 실제 자사 제품을 정교하게 합성하여 완성도 높은 숏폼 캠페인 필름을 제작함.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/시즌캠페인_크리스마스.png',
    badge: 'company',
    badgeLabel: '🏢 회사 프로젝트',
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
      { title: '다각도 장면 일괄 생성 (Multiple Angle LoRA)', desc: 'qwen_Multiple_angle LoRA 모델을 적용하는 자체 워크플로를 설계하여, 캐릭터의 각기 다른 다양한 앵글과 장면을 한 번에 생성하는 자동화 작업을 진행함.' },
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
    badgeLabel: '🏆 공모전 출품작',
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
    title: '나노바나나 AI 기술 시연 커머셜 필름',
    desc: '초고성능 인공지능 이미지 생성 기술인 나노바나나의 압도적인 스타일 베리에이션 능력을 직관적으로 증명하기 위한 테크 커머셜 필름.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/나노바나나.png',
    badge: 'company',
    badgeLabel: '🏢 커머스 프로젝트',
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
      { title: '초정밀 형태 고정 프롬프트 설계', desc: '나노바나나 기술의 스타일 해석 능력과 정밀한 제어력을 시각화하는 데 집중함. 원본 바나나의 형태와 위치는 완벽하게 고정한 상태에서, 극단적으로 다른 화풍으로만 변환시키는 고난이도 프롬프트 구조를 자체 설계하여 기술의 범용성을 증명함.' },
      { title: '고품질 에셋 기반 다이내믹 트랜지션', desc: '나노바나나 기술로 추출된 소수의 고품질 스타일 베리에이션 에셋들을 기반으로 감각적인 영상화를 진행함. 트렌디한 비트에 맞춰 매끄럽게 연결되며 변환되는 시각적 쾌감을 극대화함.' }
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
    badgeLabel: '✨ 숏폼 프로젝트',
    tools: ['ComfyUI', 'Kling', 'Premiere Pro'],
    driveId: '1vkH7IVE0fJ6ya444eaZ3OcL1wX1Ak6uX',
    orientation: 'vertical',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/오션아이/Gemini_Generated_Image_ksq91hksq91hksq9.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/오션아이/막컷_upscayl_2x_upscayl-standard-4x.png'
    ],
    brief: '인스타그램 릴스 등에서 바이럴되는 오션아이(손을 모아 만든 틈 사이로 윙크하는 모습) 밈을 AI 생성 기술로 완벽하게 재현하여 숏폼 시청자들의 자연스러운 인게이지먼트를 유도함.',
    process: [
      { title: '숏폼 타겟팅 기획', desc: '기존 실사 위주의 밈 챌린지 틈새에서 시각적 차별화를 주기 위해 매력적인 AI 가상 모델 기획. 스크롤을 멈추게 하는 9:16 모바일 풀사이즈 클로즈업 앵글을 설정함.' },
      { title: '고난이도 신체 렌더링 최적화', desc: '손가락이 얽힌 형태와 눈동자를 묘사하기 위해 네거티브 프롬프트를 극도로 세밀하게 세팅함. 골격 왜곡을 방어하기 위해 특정 포즈를 강제하는 컨트롤넷(ControlNet) 기반의 뼈대 설계와 심층 리서치를 병행함.' },
      { title: '안면 모션 및 마이크로 디테일 연출', desc: '불쾌한 골짜기 현상을 제거하고 실제 틱톡커/인플루언서의 자연스러운 움직임처럼 보이도록 후반 모션 생성 프롬프트를 최적화함.' }
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
    badgeLabel: '🏆 공모전 출품작',
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
      { title: '다각도 시퀀스 자동화 및 일괄 생성', desc: 'ComfyUI 내에 커스텀 워크플로우를 설계하여 단일 프롬프트 입력만으로 다양한 카메라 앵글 시퀀스를 자동 출력하는 일괄 처리 기능을 구현함.' },
      { title: 'AI 한계 보정 및 브랜드 에셋 합성', desc: '제품 로고 및 텍스트 왜곡 문제를 해결하기 위해 AI 생성 이미지 내 왜곡된 영역에 실제 고화질 제품 에셋을 완벽하게 합성하여 무결성을 확보함.' },
      { title: '이미지 영상화 및 마스터 편집', desc: '이미지를 프리픽 Kling 모델로 영상화. 프리미어 프로에서 컷 연결, 오디오 믹싱, 자막 작업을 진행함.' }
    ]
  },

  /* ─────────────────────────────────────────────────────────
     AI 영상 시네마틱
  ───────────────────────────────────────────────────────── */
  {
    id: 5,
    type: 'video',
    category: 'cinematic',
    categoryLabel: '단편 애니메이션',
    title: '페어리웜',
    desc: '모녀 갈등과 화해라는 보편적 서사를 판타지 세계관으로 풀어낸 단편 애니메이션.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/단편애니메이션_페어리웜.png',
    badge: 'team',
    badgeLabel: '👥 팀 프로젝트',
    tools: ['Nano Banana', 'Kling', 'ElevenLabs', 'Midjourney'],
    driveId: '1_Ufz9Cl5DFbKYD_R6MPaxhATJ8vLGei5',
    orientation: 'horizontal',
    scenes: [
      'https://nahyun1993.github.io/portfolio3/images/주요장면/페어리웜/페어리웜 주요장면_01.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/페어리웜/페어리웜 주요장면_02.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/페어리웜/페어리웜 주요장면_03.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/페어리웜/페어리웜 주요장면_04.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/페어리웜/페어리웜 주요장면_05.png',
      'https://nahyun1993.github.io/portfolio3/images/주요장면/페어리웜/페어리웜 주요장면_06.png'
    ],
    brief: '15세 소녀의 사춘기 갈등과 단절을 이세계 전이라는 메타포로 시각화함. 낯선 세계에서의 조력자 탐험 서사를 거쳐 엄마의 진심을 깨닫고 재회하는 구조. 팀원이 각자 이미지를 생성할 경우 발생하는 캐릭터 불일치를 해결하기 위해, 씬 일괄 생성 파이프라인 구축을 기획함.',
    process: [
      { title: '컨셉 아트 및 톤앤매너 기획', desc: '미드저니를 활용해 메인 캐릭터의 베이스 디자인과 색감 가이드를 수립하여 팀원 간 시각적 합의점을 확보함.' },
      { title: '자동화 파이프라인(빌더) 아키텍처 설계', desc: '구글 AI 스튜디오 환경에서 씬 일괄 생성 빌더를 자체 구축. 나노바나나 API를 자동 호출하여 씬을 일괄 생성하도록 설계하여, 수동 프롬프트 입력 시간을 생략하고 고품질 에셋을 확보함.' },
      { title: '캐릭터 음성 아이덴티티 및 일관성 확보', desc: '팀원들의 각기 다른 오디오 녹음 소스를 일레븐랩스로 보이스 체인지하여 메인 캐릭터 고유의 음성의 일관성을 확보함.' }
    ]
  },
  {
    id: 6,
    type: 'video',
    category: 'cinematic',
    categoryLabel: '단편 영화',
    title: '개물림사고주의',
    desc: '인간의 탐욕(순혈주의 펫샵)이 부른 좀비 바이러스 사태 속에서, 순수함을 간직한 아이들과 실험체 강아지들이 연대하여 재난을 극복해 나가는 SF 스릴러.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/단편영화_개물림사고주의.png',
    badge: 'team',
    badgeLabel: '👥 팀 프로젝트',
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
    brief: '인간의 이기적 욕망이 초래한 재난 상황 속에서 연대와 극복이라는 메시지를 담음. 총괄 편집 리드로서 분업화된 에셋을 모아 완결된 서사 흐름으로 연출하고, AI의 취약점인 대사 처리를 극복함.',
    process: [
      { title: 'AI 립싱크 구현', desc: 'Kling의 디지털 캐릭터 기능을 적극 활용. 인물 이미지 에셋에 더빙 오디오 소스를 결합하여 캐릭터의 입 모양과 미세한 안면 근육이 자연스럽게 움직이도록 구현함.' },
      { title: '서사 편집 및 사운드 디자인', desc: '팀원들이 분업으로 생성한 대량의 AI 영상·이미지 에셋을 Premiere Pro에서 하나의 완결된 서사 흐름으로 편집하고, 사운드를 디자인함.' }
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
    badgeLabel: '🎬 개인 필름',
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
    id: 201,
    type: 'video',
    category: 'liveaction',
    categoryLabel: '실사 콘텐츠',
    title: '블루밍버블',
    desc: '식물과 교감하는 일상을 따뜻한 무드로 담아내어 타겟 시청자(식집사)의 깊은 공감대를 이끌어낸 감성 콘텐츠.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/블루밍버블.png',
    badge: 'company',
    badgeLabel: '🎥 실사 콘텐츠',
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
    categoryLabel: '실사 콘텐츠',
    title: 'HOW TO 뿌리영양제',
    desc: '제품의 올바른 사용법을 직관적인 앵글로 담아내어 시청자의 편의성을 높인 실용적 가이드 영상.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/뿌리영양제.png',
    badge: 'company',
    badgeLabel: '🎥 가이드',
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
    categoryLabel: '실사 콘텐츠',
    title: '다이소 식물 아이템 리뷰',
    desc: 'SNS 트렌드를 반영하여 화제성 높은 타사(다이소) 아이템을 직접 구매 후, 활용하는 모습을 기획한 바이럴 콘텐츠.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/다이소.png',
    badge: 'company',
    badgeLabel: '🎥 바이럴',
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
    categoryLabel: '실사 콘텐츠',
    title: '식물살리기 60일 프로젝트',
    desc: '죽어가는 식물에 제품을 투여하여 60일간 소생하는 과정을 기록한 리얼리티 다큐멘터리.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/식물살리기.png',
    badge: 'company',
    badgeLabel: '🎥 다큐멘터리',
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
    categoryLabel: '실사 콘텐츠',
    title: '식물편집샵 대표 인터뷰',
    desc: '업계 전문가의 인사이트를 담아내어 브랜드의 권위를 높이고 전문성을 강조한 인터뷰 영상.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/유니크플랜트.png',
    badge: 'company',
    badgeLabel: '🎥 인터뷰',
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
    categoryLabel: '실사 콘텐츠',
    title: '이지코트 제품 소개 ASMR',
    desc: '제품 특유의 질감과 소리를 백색소음으로 활용해 시청각적 쾌감을 동시에 자극하는 감각적인 제품 홍보 영상.',
    thumbnail: 'https://nahyun1993.github.io/portfolio3/images/Thumbnails/이지코트.png',
    badge: 'company',
    badgeLabel: '🎥 ASMR',
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
    badgeLabel: '📊 Web App',
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
    badgeLabel: '📊 Web App',
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
    badgeLabel: '🚀 Extension',
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
    badgeLabel: '🤖 AI Agent',
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
  },
  {
    id: 104,
    type: 'video',
    category: 'commercial',
    categoryLabel: '브랜드 커머셜',
    title: '복합 천연 식물 영양제',
    desc: '[스토리텔링 커머스] 세대 공감 서사를 활용한 작물 영양제 홍보 영상. 오래된 관행을 고집하는 아빠와 새로운 혁신(자사 제품)을 권하는 딸의 유쾌한 티격태격 갈등을 통해, 지루한 기능 설명(Feature)을 매력적인 이야기(Story)로 치환하여 제품의 효능을 자연스럽게 전달하는 브랜디드 롱폼 콘텐츠.',
    thumbnail: '',
    badge: 'company',
    badgeLabel: '🏢 회사 프로젝트',
    tools: ['Nano Banana', 'Kling', 'Premiere Pro'],
    driveId: '1N4obvX2d8vgcu0tt4NML0nU0qNELyRTX',
    orientation: 'horizontal',
    scenes: [],
    brief: '단순한 제품 효능 나열식 홍보의 높은 이탈률을 극복하기 위해 스토리텔링 기법을 도입함. \'전통 vs 혁신\'이라는 보편적인 세대 갈등을 코믹하게 풀어내어 시청자의 심리적 방어벽을 낮추고, 서사의 흐름 속에서 자연스럽게 제품의 필요성과 타당성을 설득함.',
    process: [
      { title: '갈등 구조 및 캐릭터 페르소나 기획', desc: '\'고집스러운 아빠\'와 \'합리적인 딸\'이라는 대조적인 캐릭터를 기획하고 일상적인 대화(티격태격) 형태의 스크립트를 작성하여, 시청자의 몰입을 돕고 제품의 셀링 포인트를 극적으로 대비시킴.' },
      { title: '서사 맞춤형 씬 및 에셋 생성 (Nano Banana)', desc: '나노바나나를 활용해 기획된 페르소나에 맞는 두 캐릭터의 기본 시트와 배경을 생성함. 대화의 흐름에 따라 변화하는 캐릭터의 표정과 상황에 맞는 씬을 일관된 화풍으로 추출하여 스토리보드를 시각화함.' },
      { title: '캐릭터 액팅 및 모션 영상화 (Kling)', desc: '생성된 정지 이미지 에셋에 프리픽(Kling)의 AI 비디오 기능을 적용함. 부녀가 티격태격하는 미묘한 감정선과 제스처에 생동감을 부여하여 시트콤 같은 자연스러운 연출을 구현함.' }
    ]
  }
];

/* ── Tech Stack ── */
const techStack = [
  { icon: '🍌', name: 'Nano Banana' },
  { icon: '🎨', name: 'Midjourney' },
  { icon: '⚙️', name: 'ComfyUI' },
  { icon: '🎬', name: 'Kling' },
  { icon: '🎙️', name: 'ElevenLabs' },
  { icon: '🎞️', name: 'Premiere Pro' },
  { icon: '📷', name: 'SONY A7M4' },
  { icon: '🌅', name: 'Lightroom' },
  { icon: '🌌', name: 'Antigravity' },
  { icon: '🎥', name: 'VEO' },
  { icon: '🎵', name: 'SUNO' },
  { icon: '✨', name: 'Claude' },
  { icon: '📓', name: 'Obsidian' }
];


/* ── Section Config ── */
const SECTIONS = [
  { id: 'about',      label: 'ABOUT',            num: null },
  { id: 'commercial', label: 'AI 영상 — 커머셜',   num: '01', count: 7 },
  { id: 'cinematic',  label: 'AI 영상 — 시네마틱',  num: '02', count: 3 },
  { id: 'ai-image',   label: 'AI 이미지',          num: '03' },
  { id: 'liveaction', label: '실사 콘텐츠',           num: '04', count: 6 },
  { id: 'photography',label: 'Photography',        num: '05' },
  { id: 'dashboard',  label: '대시보드 & 웹앱',     num: '06', count: 4 }
];

/* ── State ── */
let currentImageFilter = 'all';
let currentModal = null;

/* ═══════════════════════════════════════════════
   RENDER: Sidebar Navigation
═══════════════════════════════════════════════ */
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  const mobileNav = document.getElementById('mobile-nav');

  const makeItem = (s) => `
    <li>
      <a href="#${s.id}" data-section="${s.id}" onclick="scrollToSection('${s.id}');return false;">
        ${s.num ? `<span class="nav-num">${s.num}</span>` : '<span style="width:20px;display:inline-block;"></span>'}
        <span class="nav-label">${s.label}</span>
      </a>
    </li>
  `;

  nav.innerHTML = `<ul>${SECTIONS.map(makeItem).join('')}</ul>`;

  if (mobileNav) {
    mobileNav.innerHTML = `<ul>${SECTIONS.map(s => `
      <li>
        <a href="#${s.id}" data-section="${s.id}" onclick="scrollToSection('${s.id}');return false;">
          <span class="m-nav-dot"></span>
          ${s.label}
        </a>
      </li>
    `).join('')}</ul>`;
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════
   RENDER: About Section
═══════════════════════════════════════════════ */
function renderAbout() {
  const section = document.getElementById('about');
  section.innerHTML = `
    <div class="section-header">
      <div class="section-title">ABOUT</div>
    </div>
    <div class="about-layout">
      <div class="about-left">
        <div class="about-name">LEE NAHYUN</div>
        <div class="about-role">AI Creator & Visual Director</div>
        <p class="about-intro">
          AI 생성 기술과 영상 연출의 교차점에서 작업합니다.<br><br>
          실사 콘텐츠부터 AI 워크플로우 설계까지
          하이브리드 자동화 크리에이티브 워크플로를 설계합니다.
        </p>
        <div class="showreel-wrap">
          <div class="showreel-label">▶ SHOW REEL</div>
          <div class="showreel-frame">
            <iframe
              src="https://drive.google.com/file/d/1J0VQY8UWf6KQcn3aoOCcj0l2zfmb7ptr/preview"
              allow="autoplay"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
      <div class="about-right">
        <div class="about-stack-title">TECH STACK</div>
        <div class="tech-grid">
          ${techStack.map(t => `
            <div class="tech-item">
              <span class="tech-icon">${t.icon}</span>
              <span>${t.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════
   RENDER: Video Section (commercial / cinematic / liveaction)
═══════════════════════════════════════════════ */
function renderVideoSection(sectionId, num, title, subtitle, projectList) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  section.innerHTML = `
    <div class="section-header">
      ${num ? `<div class="section-num">${num}</div>` : ''}
      <div>
        <div class="section-title">${title}</div>
        <div class="section-subtitle">${subtitle}</div>
      </div>
    </div>
    <div class="cards-grid">
      ${projectList.map(p => createVideoCard(p)).join('')}
    </div>
  `;

  section.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

function createVideoCard(p) {
  const badgeHtml = `<span class="badge badge-${p.badge}">${p.badgeLabel}</span>`;
  const thumbHtml = p.thumbnail
    ? `<img class="card-thumbnail" src="${p.thumbnail}" alt="${p.title}" loading="lazy">`
    : `<div class="card-thumbnail-placeholder" style="background:linear-gradient(135deg,rgba(30,40,80,0.8),rgba(20,60,50,0.6));">🎬</div>`;

  return `
    <div class="card" data-id="${p.id}">
      ${thumbHtml}
      <div class="card-body">
        <div class="card-header-row">
          <div class="card-title">${p.title}</div>
          ${badgeHtml}
        </div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-tools">
          ${p.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════
   RENDER: AI Image Section
═══════════════════════════════════════════════ */
function renderImageSection() {
  const section = document.getElementById('ai-image');
  if (!section) return;

  const allImages = [
    ...characterFiles.map(f => ({ src: `https://nahyun1993.github.io/portfolio3/images/AI Image/character/${f}`, cat: 'character', label: '캐릭터 일관성' })),
    ...conceptArtFiles.map(f => ({ src: `https://nahyun1993.github.io/portfolio3/images/AI Image/Concept Art/${f}`, cat: 'concept-art', label: '컨셉 아트' })),
    ...portraitFiles.map(f => ({ src: `https://nahyun1993.github.io/portfolio3/images/AI Image/Portrait/${f}`, cat: 'portrait', label: '인물 이미지' })),
    ...productImageFiles.map(f => ({ src: `https://nahyun1993.github.io/portfolio3/images/AI Image/Product Image/${f}`, cat: 'product-image', label: '제품 이미지' }))
  ];

  const filters = [
    { key: 'all', label: '전체' },
    { key: 'character', label: '캐릭터 일관성' },
    { key: 'concept-art', label: '컨셉 아트' },
    { key: 'portrait', label: '인물 이미지' },
    { key: 'product-image', label: '제품 이미지' }
  ];

  section.innerHTML = `
    <div class="section-header">
      <div class="section-num">03</div>
      <div>
        <div class="section-title">AI 이미지</div>
        <div class="section-subtitle">AI Image Generation</div>
      </div>
    </div>
    <div class="filter-tabs">
      ${filters.map(f => `
        <button class="filter-tab${currentImageFilter === f.key ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>
      `).join('')}
    </div>
    <div class="image-grid" id="image-grid-content">
      ${renderImageGridItems(allImages, currentImageFilter)}
    </div>
  `;

  section.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      currentImageFilter = btn.dataset.filter;
      section.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('image-grid-content').innerHTML = renderImageGridItems(allImages, currentImageFilter);
      attachImageGridEvents();
    });
  });

  attachImageGridEvents();
}

function renderImageGridItems(allImages, filter) {
  const filtered = filter === 'all' ? allImages : allImages.filter(img => img.cat === filter);
  return filtered.map(img => `
    <img class="image-grid-item" src="${img.src}" alt="${img.label}" loading="lazy" data-src="${img.src}">
  `).join('');
}

function attachImageGridEvents() {
  document.querySelectorAll('.image-grid-item').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.dataset.src || img.src));
  });
}

/* ═══════════════════════════════════════════════
   RENDER: Photography Section
═══════════════════════════════════════════════ */
function renderPhotoSection() {
  const section = document.getElementById('photography');
  if (!section) return;

  section.innerHTML = `
    <div class="section-header">
      <div class="section-num">05</div>
      <div>
        <div class="section-title">Photography</div>
        <div class="section-subtitle">SONY A7M4 & Lightroom</div>
      </div>
    </div>
    <div class="photo-grid">
      ${photographyFiles.map(f => `
        <img class="photo-grid-item" src="https://nahyun1993.github.io/portfolio3/images/AI Image/Photography/${f}" alt="Photography" loading="lazy" data-src="https://nahyun1993.github.io/portfolio3/images/AI Image/Photography/${f}">
      `).join('')}
    </div>
  `;

  section.querySelectorAll('.photo-grid-item').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.dataset.src || img.src));
  });
}

/* ═══════════════════════════════════════════════
   RENDER: Dashboard Section
═══════════════════════════════════════════════ */
function renderDashboardSection() {
  const section = document.getElementById('dashboard');
  if (!section) return;

  const placeholderIcons = { 401: '📊', 402: '📈', 403: '⚡', 404: '🤖' };
  const placeholderClasses = { 401: 'placeholder-chart', 402: 'placeholder-chart', 403: 'placeholder-chart', 404: 'placeholder-robot' };

  section.innerHTML = `
    <div class="section-header">
      <div class="section-num">06</div>
      <div>
        <div class="section-title">대시보드 & 웹앱</div>
        <div class="section-subtitle">Tools, Dashboards & AI Systems</div>
      </div>
    </div>
    <div class="cards-grid">
      ${dashboardProjects.map(p => {
        const thumbHtml = p.thumbnail
          ? `<img class="card-thumbnail" src="${p.thumbnail}" alt="${p.title}" loading="lazy">`
          : `<div class="card-placeholder ${placeholderClasses[p.id] || 'placeholder-chart'}"><span style="font-size:3rem;">${placeholderIcons[p.id] || '📊'}</span></div>`;

        return `
          <div class="card" data-id="d${p.id}">
            ${thumbHtml}
            <div class="card-body">
              <div class="card-header-row">
                <div class="card-title">${p.title}</div>
                <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end;flex-shrink:0;">
                  <span class="badge badge-${p.badge}">${p.badgeLabel}</span>
                </div>
              </div>
              <div class="card-desc">${p.desc}</div>
              <div class="card-tools">
                ${p.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  section.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const rawId = card.dataset.id;
      const numId = parseInt(rawId.replace('d', ''));
      openDashboardModal(numId);
    });
  });
}

/* ═══════════════════════════════════════════════
   MODAL: Video Projects
═══════════════════════════════════════════════ */
function openModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const isVertical = project.orientation === 'vertical';
  const modal = document.getElementById('modal');
  const inner = document.getElementById('modal-inner');

  let mediaHtml = '';
  if (project.driveId) {
    const aspectClass = isVertical ? ' vertical' : '';
    mediaHtml = `
      <div class="modal-video${aspectClass}">
        <iframe src="https://drive.google.com/file/d/${project.driveId}/preview" allow="autoplay" allowfullscreen></iframe>
      </div>
    `;
  }

  let scenesHtml = '';
  if (project.scenes && project.scenes.length > 0) {
    const gridClass = isVertical ? ' vertical' : '';
    scenesHtml = `
      <div class="modal-section">
        <div class="modal-scenes-title">EXTRACT · SCENES</div>
        <div class="modal-scene-grid${gridClass}">
          ${project.scenes.map((s, i) => `<img src="${s}" alt="${project.title} 장면 ${i+1}" loading="lazy">`).join('')}
        </div>
      </div>
    `;
  }

  let processHtml = '';
  if (project.process && project.process.length > 0) {
    processHtml = `
      <div class="modal-section">
        <div class="modal-section-title">WORKFLOW · PROCESS</div>
        <div class="process-steps">
          ${project.process.map((step, i) => `
            <div class="process-step">
              <div class="step-num">${String(i + 1).padStart(2, '0')}</div>
              <div class="step-content">
                <div class="step-title">${step.title}</div>
                <div class="step-desc">${step.desc}</div>
                ${step.image ? `<img class="step-image" src="${step.image}" alt="${step.title}">` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  inner.innerHTML = `
    <button class="modal-back" id="modal-back-btn">← 돌아가기</button>
    <div class="modal-project-num">${project.categoryLabel}</div>
    <h2 class="modal-title">${project.title}</h2>
    <div class="modal-badges">
      <span class="badge badge-${project.badge}">${project.badgeLabel}</span>
    </div>

    ${mediaHtml}

    ${project.brief ? `
    <div class="modal-section">
      <div class="modal-section-title">PROJECT · BRIEF</div>
      <p class="modal-brief">${project.brief}</p>
    </div>
    ` : ''}

    ${scenesHtml}
    ${processHtml}

    ${project.tools && project.tools.length > 0 ? `
    <div class="modal-section">
      <div class="modal-section-title">TOOLS USED</div>
      <div class="modal-tools">
        ${project.tools.map(t => `<span class="modal-tool-badge">${t}</span>`).join('')}
      </div>
    </div>
    ` : ''}
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('modal-back-btn').addEventListener('click', closeModal);
}

/* ── Dashboard Modal ── */
function openDashboardModal(projectId) {
  const project = dashboardProjects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('modal');
  const inner = document.getElementById('modal-inner');

  let galleryHtml = '';
  if (project.images && project.images.length > 0) {
    galleryHtml = `
      <div class="modal-gallery${project.images.length === 1 ? ' single' : ''}">
        ${project.images.map(img => `<img src="${img}" alt="${project.title}" loading="lazy">`).join('')}
      </div>
    `;
  } else {
    galleryHtml = `
      <div style="width:100%;aspect-ratio:16/7;border-radius:12px;background:linear-gradient(135deg,rgba(106,59,170,0.2),rgba(43,87,204,0.15));display:flex;align-items:center;justify-content:center;margin-bottom:32px;font-size:4rem;">🤖</div>
    `;
  }

  let processHtml = '';
  if (project.process && project.process.length > 0) {
    processHtml = `
      <div class="modal-section">
        <div class="modal-section-title">WORKFLOW · PROCESS</div>
        <div class="process-steps">
          ${project.process.map((step, i) => `
            <div class="process-step">
              <div class="step-num">${String(i + 1).padStart(2, '0')}</div>
              <div class="step-content">
                <div class="step-title">${step.title}</div>
                <div class="step-desc">${step.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  inner.innerHTML = `
    <button class="modal-back" id="modal-back-btn">← 돌아가기</button>
    <div class="modal-project-num">${project.categoryLabel}</div>
    <h2 class="modal-title">${project.title}</h2>
    <div class="modal-badges">
      <span class="badge badge-${project.badge}">${project.badgeLabel}</span>
    </div>

    ${galleryHtml}

    <div class="modal-section">
      <div class="modal-section-title">PROJECT · BRIEF</div>
      <p class="modal-brief">${project.brief}</p>
    </div>

    ${processHtml}

    <div class="modal-section">
      <div class="modal-section-title">TOOLS USED</div>
      <div class="modal-tools">
        ${project.tools.map(t => `<span class="modal-tool-badge">${t}</span>`).join('')}
      </div>
    </div>
  `;

  inner.querySelectorAll('.modal-gallery img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('modal-back-btn').addEventListener('click', closeModal);
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    document.getElementById('modal-inner').innerHTML = '';
  }, 300);
}

/* ═══════════════════════════════════════════════
   LIGHTBOX
═══════════════════════════════════════════════ */
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('img');
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════
   INTERSECTION OBSERVER — Active Nav Link
═══════════════════════════════════════════════ */
function initScrollSpy() {
  const sectionEls = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('#sidebar-nav a, #mobile-nav a').forEach(a => {
          a.classList.toggle('active', a.dataset.section === id);
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sectionEls.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════
   STAR CANVAS
═══════════════════════════════════════════════ */
function initStarCanvas() {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const STAR_COUNT = 220;
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const t = Date.now() * 0.001;
    stars.forEach(s => {
      const a = (Math.sin(t * s.speed * 10 + s.phase) + 1) * 0.5 * 0.7 + 0.3;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220,230,255,${a * s.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ═══════════════════════════════════════════════
   NEBULA PARALLAX
═══════════════════════════════════════════════ */
function initParallax() {
  const blobs = document.querySelectorAll('.nebula-blob');
  let rafId = null;

  document.addEventListener('mousemove', (e) => {
    const mx = (e.clientX / window.innerWidth - 0.5) * 2;
    const my = (e.clientY / window.innerHeight - 0.5) * 2;
    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        rafId = null;
        blobs.forEach((blob, i) => {
          const factor = (i + 1) * 8;
          blob.style.marginLeft = (mx * factor) + 'px';
          blob.style.marginTop = (my * factor) + 'px';
        });
      });
    }
  });
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
function init() {
  renderSidebar();
  renderAbout();

  const commercialList = projects.filter(p => p.category === 'commercial');
  const cinematicList  = projects.filter(p => p.category === 'cinematic');
  const liveActionList = projects.filter(p => p.category === 'liveaction');

  renderVideoSection('commercial', '01', 'AI 영상 — 커머셜', 'Brand & Commercial AI Films', commercialList);
  renderVideoSection('cinematic',  '02', 'AI 영상 — 시네마틱', 'Cinematic & Short Films', cinematicList);
  renderImageSection();
  renderVideoSection('liveaction', '04', '실사 콘텐츠', 'Live-Action Contents', liveActionList);
  renderPhotoSection();
  renderDashboardSection();

  initStarCanvas();
  initParallax();
  initScrollSpy();

  /* Modal close on backdrop click */
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) closeModal();
  });

  /* ESC key */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('lightbox').classList.contains('open')) {
        closeLightbox();
      } else {
        closeModal();
      }
    }
  });

  /* Lightbox close */
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });
}

document.addEventListener('DOMContentLoaded', init);
