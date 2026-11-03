/* ============================================================
   Blue portfolio — project evidence and accessible case reader
   3D → 자동화 → 캐릭터 연구 → 콘텐츠 순서로 작업을 소개한다.
   이전 전체 버전: git 태그 ver2, 폴더 ../nahyunportfolio_ver2
   ============================================================ */
(() => {
'use strict';

const P3 = 'https://nahyun1993.github.io/portfolio3/images';

/* ── 대표 작업 ──
   layout: 'lead'(맨 위 큰 가로 카드) · 'wide'(가로 16:9) · 'pano'(파노라마) · 'tall'(세로 9:16)
   processMedia: 이미지 경로 문자열, 또는 { src, cap, wide } (cap = 캡션, wide = 한 줄 전체) */
const OT = 'images/onetake';
const works = [
{
  "id": "out-of-frame",
  "layout": "wide",
  "tags": [
    "AI 아이돌",
    "콘셉트 트레일러"
  ],
  "title": "OUT OF FRAME — 아이돌 콘셉트 트레일러",
  "meta": "개인 프로젝트 · 21.5초 · 1920×1080 · 24fps",
  "line": "하나의 캐릭터와 세 공간을 연결하며, 정해진 틀을 벗어나려는 태도를 짧은 행동과 시선으로 표현",
  "role": "콘셉트 기획 · 공간·소품 아트 디렉션 · 레퍼런스 설계 · 생성 결과 선별 · 컷 편집",
  "outcome": "수영장·붉은 코트·작업실을 잇는 21.5초 콘셉트 트레일러 완성",
  "video": "videos/out-of-frame.mp4",
  "poster": "images/out-of-frame/poster.jpg",
  "goal": "앨범 공개 전, 낯선 상황에서도 자기 기준으로 행동하는 아티스트의 인상 전달\n공간별 행동·시선으로 캐릭터의 태도 표현\n마지막 질문으로 다음 이야기에 대한 궁금증 유도",
  "conceptBeats": [
    "수영장 · 정장 차림으로 분홍색 회전식 전화기를 태연하게 다루는 인물\n장소·복장·행동의 불일치로 낯선 일상과 캐릭터의 태연함 표현",
    "붉은 코트 · 이미 선이 그어진 공간에 직접 원을 그리는 행동\n외부 규칙과 스스로 만드는 경계의 양면성 표현\n손을 털며 다음 장면으로 전환",
    "작업실 · 겹친 반투명 천 사이로 드러나는 얼굴과 시선\n마지막 “그다음은?”으로 이후를 스스로 선택하는 태도 표현\n앞으로 공개될 아티스트의 이야기에 대한 기대 유도"
  ],
  "process": [
    "공간 기획 · Midjourney의 blue anime, ghost, wes anderson, moodboard #34 등 무드보드 단독·조합 탐색\n수영장·붉은 코트·반투명 천이 있는 작업실 선정\n수영장 색감에 맞춘 분홍색 회전식 전화기 배치",
    "캐릭터 레퍼런스 · 안면 계측 연구의 캐릭터 B를 출발점으로 얼굴·헤어·의상 캐릭터 시트 적용\n인물 시트와 공간 이미지를 별도 레퍼런스로 제공해 서로 다른 장소의 동일 인물 설계",
    "R2V 연출 설계 · 인물·공간 정의, 유지할 특징, 샷별 시간·행동·구도·카메라 움직임·사운드로 프롬프트 구분\n10초 단위 생성\n수중 시점·코트 부감·천 사이의 시선 등 공간별 구도 배치",
    "드래프트 검토 · Seedance 2.5 Draft의 얼굴·의상·공간 거리감·행동 의미·전환 검토\n작업실 수정안과 원본 비교 후 원본 선택\n채택한 드래프트 ID로 1080p 파이널 출력\n수영장은 Higgsfield, 코트·작업실은 Comfy Cloud에서 제작",
    "최종 편집 · 수영장의 소매 정리·분필 줍기 삭제 후 수중 샷에서 선 긋기로 직접 연결\n코트에서 손을 털고 뻗기 직전에 잘라 작업실로 전환\n원본 대사·현장음 유지, 엔딩 타이틀 제거로 21.5초 압축"
  ],
  "results": [],
  "processMedia": [
    {
      "src": "images/out-of-frame/character-sheet.png",
      "cap": "동일 인물의 얼굴·헤어·의상 기준을 정리한 캐릭터 시트",
      "wide": true
    },
    {
      "src": "images/out-of-frame/pool.webp",
      "cap": "공간 레퍼런스 01 · 수영장"
    },
    {
      "src": "images/out-of-frame/court.webp",
      "cap": "공간 레퍼런스 02 · 붉은 코트"
    },
    {
      "src": "images/out-of-frame/workshop.webp",
      "cap": "공간 레퍼런스 03 · 작업실"
    }
  ],
  "tools": [
    "Midjourney",
    "Seedance 2.5",
    "Higgsfield",
    "Comfy Cloud",
    "FFmpeg"
  ]
},
  {
    id: 'onetake',
    layout: 'lead',
    tags: ['AI 아티스트', '퍼포먼스 영상'],
    title: '프리비즈 기반 AI 퍼포먼스',
    meta: 'AI 아티스트 제작 연구 · 6초 시퀀스 · 1080p',
    role: '카메라 무빙 지정 · Blender 프리비즈 · AI 제작 흐름 설계 · 편집',
    outcome: '카메라와 안무를 통합한 레퍼런스로 6초 원테이크 영상 완성',
    line: 'Blender 프리비즈와 뼈대·깊이 정보를 결합해 카메라와 안무를 함께 제어',
    video: 'videos/onetake.mp4',
    comparison: 'onetake-compare',
    processScreens: [{ src: 'images/process/comfyui-depthpose-workflow.webp', cap: 'ComfyUI 작업 화면 · 안무 영상에서 Depth Anything V2와 DWPose로 깊이·뼈대를 추출하고 합성' }],
    poster: 'images/posters/onetake.jpg',
    goal: "AI 아티스트 퍼포먼스에 연출자가 지정한 카메라 무빙·안무를 반영하는 제어 방식 제작\n아티스트를 따라 접근·후퇴하는 원테이크 퍼포먼스의 몰입감 전달 목표",
    process: [
      'Blender에서 16mm 광각 카메라의 접근·후퇴 경로와 타이밍을 직접 지정하고, 세트와 함께 프리비즈로 제작',
      "ComfyUI의 DWPose로 뼈대, Depth Anything V2로 깊이 추출\n프리비즈 카메라의 깊이 패스에 원근을 맞춰 합성\n카메라 무빙·안무를 하나의 레퍼런스 영상으로 제어",
      "Nano Banana 2로 얼굴·전신 턴어라운드 시트 제작\n캐릭터의 얼굴·의상 유지를 위한 멀티 레퍼런스로 사용",
      'Seedance 2.5 옴니 레퍼런스로 생성 · 480p 드래프트로 카메라와 동작을 먼저 검증하고 1080p로 완성',
      '원곡 음원을 안무 타이밍에 맞춰 싱크'
    ],
    results: [],
    processMedia: [
      ...[1, 2, 3].flatMap(n => [
        { src: `${OT}/step-${n}-0.jpg`, cap: `${n} · Blender 프리비즈 카메라` },
        { src: `${OT}/step-${n}-1.jpg`, cap: `${n} · 깊이 + 뼈대 레퍼런스` },
        { src: `${OT}/step-${n}-2.jpg`, cap: `${n} · 최종 결과` }
      ]),
      { src: `${OT}/turnaround.jpg`, cap: '얼굴·전신 턴어라운드 시트 (Nano Banana 2)', wide: true }
    ],
    musicCredit: '음악: NMIXX – Heavy Serenade',
    tools: ['Blender', 'ComfyUI', 'Depth Anything V2', 'DWPose', 'Nano Banana 2', 'Seedance 2.5', 'Premiere Pro']
  },
{
  "layout": "research",
  "resultLabel": "연구 산출물",
  "processMedia": [],
  "id": "expression-lab",
  "title": "표정 연구",
  "tags": [
    "개인 R&D",
    "FACS · 감정 표현"
  ],
  "meta": "감정명과 FACS 지시 비교 · 표정 라이브러리",
  "line": "장면마다 감정이 달라져도 같은 캐릭터의 표정으로 이어지도록, 감정·강도별 지시와 선택 기준을 정리",
  "role": "표정 비교 실험 · AU·강도 프롬프트 설계 · 결과 선별 · 라이브러리 구성",
  "goal": "향후 AI 캐릭터 영상의 감정·강도 변화에도 같은 인물의 표정을 유지할 지시·선별 기준 마련\n감정명과 얼굴 움직임 단위(AU) 비교\n다음 제작에 활용할 연기 의도별 표현·선택 이유 축적",
  "outcome": "표정 이미지 82장과 프롬프트·연기 의도·선별 이유를 웹 라이브러리로 정리",
  "process": [
    "감정명만 입력한 이미지와 FACS의 얼굴 움직임 단위(AU)를 함께 입력한 이미지 비교",
    "A–E 강도 변화·두 감정의 조합·감정 간 전환 경계 표현 실험",
    "82장을 자체 기준으로 제작 승인 55장·조건부 11장·R&D 참고 16장으로 분류\n이미지별 선택 이유 기록\n후속 제작에서 같은 감정·강도를 다시 지시할 프롬프트·선별 기준 보존"
  ],
  "findings": "모든 감정에서 FACS 지시의 우위가 나타나지는 않음\n테스트 2의 진심 어린 미소는 FACS 지시, 억지웃음은 감정명 지시 결과 선택",
  "results": [
    {
      "n": "82",
      "label": "표정 라이브러리 이미지"
    }
  ],
  "gallery": [
    {
      "src": "images/identity/b-smile-emotion.png",
      "cap": "진심 어린 미소 · 감정명"
    },
    {
      "src": "images/identity/b-smile-facs.png",
      "cap": "진심 어린 미소 · 감정명 + FACS (선택)"
    },
    {
      "src": "images/identity/b-forced-smile-emotion.png",
      "cap": "억지웃음 · 감정명 (선택)"
    },
    {
      "src": "images/identity/b-forced-smile-facs.png",
      "cap": "억지웃음 · 감정명 + FACS"
    }
  ],
  "galleryCaption": "같은 감정의 두 가지 입력 방식 비교 · 선택 이유는 라이브러리에 기록",
  "previewImages": [
    {
      "src": "images/identity/b-smile-emotion.png",
      "cap": "감정명으로 생성한 미소"
    },
    {
      "src": "images/identity/b-smile-facs.png",
      "cap": "FACS를 함께 지시한 미소"
    }
  ],
  "link": "https://facs-expression-library.dan-asa.chatgpt.site/#facs",
  "linkLabel": "표정 연구 사이트 보기 ↗",
  "tools": [
    "FACS",
    "GPT Image 2"
  ]
},
{
  "layout": "research",
  "resultLabel": "연구 산출물",
  "processMedia": [],
  "id": "identity-lab",
  "title": "얼굴 계측 연구",
  "tags": [
    "개인 R&D",
    "안면 계측 · 얼굴 일관성"
  ],
  "meta": "기준 얼굴 계측 · 6개 모델 · 3개 장면 비교",
  "line": "여러 장면에서 같은 얼굴을 유지하기 위해, 기준 얼굴의 비율과 레퍼런스 적용 조건을 비교·정리",
  "role": "안면 계측 · 조건별 생성 실험 · 유사도 비교 · 프롬프트·측정값 정리",
  "goal": "향후 여러 장소·구도·장면에서 같은 AI 캐릭터의 얼굴 일관성을 유지할 기준 마련\n기준 얼굴의 특징·비율을 스펙으로 정리\n이미지 레퍼런스와 함께 적용할 때 인물 유지에 도움이 되는 조건 비교",
  "outcome": "6개 모델의 얼굴 비교 이미지 69장, 모델별 프롬프트와 계측·유사도 기록 정리",
  "process": [
    "기준 얼굴의 특징·비율 계측 및 생성 지시용 스펙 문장 작성",
    "레퍼런스만 / 레퍼런스+스펙 / 스펙만 조건 비교\n6개 모델의 지원 조건에 따라 3개 장면에서 69장 생성",
    "ArcFace 코사인 유사도·안면 계측·비교 이미지 함께 검토\n모델별 결과와 프롬프트 연결"
  ],
  "results": [
    {
      "n": "69",
      "label": "얼굴 비교 이미지"
    },
    {
      "n": "6",
      "label": "비교 모델"
    }
  ],
  "gallery": [
    {
      "src": "images/identity/gptimage2-comparison.jpg",
      "cap": "GPT Image 2 · 레퍼런스 / 레퍼런스+스펙 / 스펙"
    },
    {
      "src": "images/identity/seedream5-comparison.jpg",
      "cap": "Seedream 5.0 Pro · 조건별 얼굴 비교"
    }
  ],
  "galleryLayout": "documents",
  "galleryCaption": "모델별 비교 이미지 · 눌러서 원본 크기로 보기",
  "previewImages": [
    {
      "src": "images/identity/reference-b.webp",
      "cap": "계측 기준 얼굴"
    },
    {
      "src": "images/identity/gptimage2-ref-spec-cafe-1.webp",
      "cap": "레퍼런스와 얼굴 스펙을 적용한 카페 장면"
    }
  ],
  "link": "https://facs-expression-library.dan-asa.chatgpt.site/#anthropometry",
  "linkLabel": "얼굴 계측 연구 사이트 보기 ↗",
  "tools": [
    "ComfyUI",
    "MediaPipe",
    "ArcFace"
  ]
},
{
  "layout": "workflow",
  "results": [],
  "processMedia": [
    {
      "src": "images/workflows/edit-structure.webp",
      "cap": "Whisper Large 전사 → LLM 서사 구성 → EDL·FCPXML·자막·오디오 출력 구조",
      "wide": true
    },
    {
      "src": "images/workflows/edit-mapping.webp",
      "cap": "원본 발화와 편집 구간·선택 의도를 연결한 대응표",
      "wide": true
    }
  ],
  "galleryLayout": "documents",
  "id": "interview-workflow",
  "title": "인터뷰 편집 자동화",
  "tags": [
    "편집 워크플로우",
    "Premiere Pro"
  ],
  "meta": "Whisper Large 전사 → 서사 구성 → Premiere Pro MCP 연동",
  "line": "인터뷰의 핵심 발화로 이야기 흐름을 빠르게 구성하고, Premiere에서 수정 가능한 편집 초안까지 연결",
  "role": "영상의 서사 흐름·발화 선택 기준 설계 · AI 도구를 활용한 구현 · Premiere MCP 연동 · 편집 초안 검토",
  "goal": "긴 인터뷰의 핵심 발화로 도입·전개·마무리를 빠르게 구성해 편집 초안의 공수·시간 절감 목표\n발화 의미와 원본 타임코드를 연결해 이야기 흐름 구성\nPremiere에서 바로 검토·수정 가능한 타임라인으로 이전",
  "outcome": "18분 20초 인터뷰를 14개 구간으로 구성한 약 8분 편집 초안과 Premiere 타임라인·자막·오디오",
  "process": [
    "Whisper Large로 18분 20초 인터뷰 전사\n282개 발화 구간의 텍스트·타임코드 추출\n필요한 내용 탐색을 위한 원본 위치 보존",
    "LLM Editorial Agent로 발화 의미 분석 및 도입·문제·경험·비교·마무리 흐름 구성\n오프닝 발화·문장 끝맺음 검토\n14개 구간을 재배열한 EDL 편집 초안 정리",
    "FCPXML v4로 영상·오디오 트랙의 타임라인 이전 및 문장 단위 자막 연결\nFFmpeg로 오디오 레벨 정리\nPremiere에서 수정 가능한 편집 초안 구성",
    "Premiere Pro MCP 연결 후 편집 명령 실행\n타임라인·자막·오디오 확인\n원본-편집본 대응표와 함께 컷 순서·길이 검토"
  ],
  "gallery": [
    {
      "src": "images/workflows/edit-premiere-mcp.webp",
      "cap": "Premiere Pro 작업 화면 · MCP 패널과 편집 명령 실행 로그"
    },
    {
      "src": "images/workflows/edit-timeline.webp",
      "cap": "Premiere에서 확인한 편집 타임라인 · 영상·자막·오디오 트랙"
    }
  ],
  "galleryCaption": "실제 작업 화면 · 눌러서 원본 크기로 보기",
  "previewImages": [
    {
      "src": "images/workflows/edit-timeline.webp",
      "cap": "인터뷰 편집 자동화의 Premiere 타임라인"
    }
  ],
  "previewType": "screen",
  "tools": [
    "Whisper Large",
    "LLM Editorial Agent",
    "Premiere Pro MCP",
    "FCPXML v4",
    "FFmpeg"
  ],
  "toolRoles": [
    {
      "tool": "Whisper Large",
      "use": "음성 전사 · 발화별 텍스트와 타임코드 추출"
    },
    {
      "tool": "LLM Editorial Agent",
      "use": "발화 의미 분석 · 이야기 흐름 구성 · 편집 구간 선택"
    },
    {
      "tool": "FCPXML v4",
      "use": "영상·오디오 편집 구성을 Premiere 타임라인으로 전달"
    },
    {
      "tool": "Premiere Pro + MCP",
      "use": "편집 명령 실행 · 타임라인·자막 검토와 수정"
    },
    {
      "tool": "FFmpeg",
      "use": "오디오 처리 · 레벨 정리"
    }
  ]
},
{
  "layout": "workflow",
  "results": [],
  "processMedia": [
    {
      "src": "images/workflows/board-storyboard.webp",
      "cap": "스토리보드 · 컷별 연출·내레이션·사운드·프롬프트",
      "wide": true
    },
    {
      "src": "images/workflows/board-review.webp",
      "cap": "이미지 시안 비교 · 승인·모델 선택·재생성",
      "wide": true
    },
    {
      "src": "images/workflows/board-video-generation.webp",
      "cap": "영상 제작 · 컷별 모션 생성 결과 재생·검토 및 승인",
      "wide": true
    },
    {
      "src": "images/workflows/board-subtitle-generation.webp",
      "cap": "자막 제작 · 회사의 카피·타이포 규칙을 적용한 컷별 자막 시안 생성·검토",
      "wide": true
    }
  ],
  "galleryLayout": "documents",
  "id": "production-board",
  "title": "AI 영상 제작판",
  "tags": [
    "제작 워크플로우",
    "컷별 검토·재생성"
  ],
  "meta": "회사 전용 AI 콘텐츠 제작 도구 · 스토리보드 → 이미지·영상 생성 → 자막 제작",
  "line": "회사의 콘텐츠 구성·연출·카피·자막 규칙을 반영해, 기획부터 이미지·영상·자막 제작까지 연결한 전용 제작판",
  "role": "숏폼 카피 문법·브랜드 자막 가이드 수립 · 제작 파이프라인 설계 · AI 도구를 활용한 웹앱 구현 · 컷별 검토·선별",
  "roleItems": [
    "숏폼 전용 카피 문법 수립 · 질문형 오프닝 배제\n2~4어절의 단정형 선언 및 작물·제품별 생리 특성에 맞는 표현을 제작 규칙으로 정리",
    "브랜드 자막 디자인 가이드 설계 · 누보와 닥터조의 서체 질감 구분\n2줄 자막의 상하 너비 균형·행간·강조색·섀도우 규격 정의",
    "파이프라인·웹앱 구현 · Magnific MCP 등 AI 도구를 연결하는 Flask 검토 화면 제작\n컷별 시안 비교·선별 및 승인 결과의 후속 편집 연결"
  ],
  "goal": "기존 문제 · 컷별 프롬프트·참조 이미지 반복 입력 및 여러 생성 도구의 결과 분산 관리\n늘어지거나 상투적인 AI 카피의 직접 수정 필요\n직접 정립한 ‘숏폼 광고 카피 문법’·‘브랜드 자막 디자인 가이드’를 제작 기준으로 체계화\n규칙 기반 기획부터 이미지·영상·자막 생성·사운드 작업까지 연결\n단계별 시안 비교·직접 검토·승인 후 후속 편집으로 전달하는 파이프라인 구성",
  "outcome": "카피·자막 규칙을 적용한 기획·생성 결과를 한 흐름에서 비교·검토하는 제작판 구축\n승인한 결과를 후속 편집에 연결",
  "process": [
    "카피 규칙 · 질문형 훅·홈쇼핑식 과장 배제 및 2~4어절의 짧은 단정형 문장 사용\n수목의 수세 회복·완효성, 과수의 열과 방지·착색 등 작물·제품의 실제 특성에 맞는 표현 선택\nAntigravity 에이전트의 기준 참조 및 컷별 연출·내레이션·프롬프트 구성\n다음 생성 전 직접 검토",
    "Magnific MCP에 연결된 여러 이미지 모델로 키프레임 시안 생성\nFlask 검토 화면에서 Seedream 등 모델별 결과를 나란히 비교\n역광을 피한 조명·지면 밀착 초로우앵글 등 지정 비주얼 룩과 제품 형태·질감 직접 확인\n컷별 승인 또는 프롬프트 수정 후 재생성",
    "승인 이미지를 Kling 등 영상 모델의 모션 생성 단계로 연결\n원하는 피사체 동작·카메라 움직임 중심의 프롬프트 정리 및 불필요한 부정 표현 제거\n영상 재생으로 피사체 형태·카메라 무빙·입자 움직임의 자연스러움 직접 검토\n승인·재생성 결정",
    "누보 농업·수목 비료는 거친 드라이브러시 캘리그라피, 닥터조 가정원예 제품은 정갈한 고딕 계열로 자막 시안 제작\n2줄 자막의 상하 가로폭 균형·타이트한 행간·라임 #8CE600·옐로우 강조 지정\n글자 외곽에 가깝게 붙는 컴팩트 블랙 섀도우 지정\n투명 PNG의 문구·줄바꿈·색상·섀도우 직접 검토·승인\n승인 영상·자막과 내레이션·BGM 정리 후 프리미어 프로 후속 편집에 연결"
  ],
  "gallery": [
    {
      "src": "images/workflows/board-output.webp",
      "cap": "컷별 영상 생성 결과와 검토·승인 화면"
    }
  ],
  "galleryCaption": "제작 자동화 시스템 · 컷별 생성 결과 검토·승인",
  "previewImages": [
    {
      "src": "images/workflows/board-review.webp",
      "cap": "AI 제작판의 이미지 비교 및 승인 화면"
    }
  ],
  "previewType": "screen",
  "tools": [
    "Antigravity",
    "Magnific MCP",
    "Flask",
    "Z-Image · Nano Banana · Seedream",
    "MiniMax · Kling · Seedance",
    "Python · FFmpeg"
  ],
  "toolRoles": [
    {
      "tool": "Antigravity",
      "use": "제작 규칙을 읽고 단계별 생성 작업을 호출하는 에이전트"
    },
    {
      "tool": "Magnific MCP",
      "use": "이미지·영상·음성·음악 생성 도구 연동"
    },
    {
      "tool": "Flask",
      "use": "스토리보드 확인 · 시안 승인·반려 · 프롬프트 수정 화면"
    },
    {
      "tool": "이미지·자막 생성 모델",
      "use": "Z-Image · Nano Banana · Seedream 등 시안 비교\n자막 모델의 ‘GPT 2.5’는 제작판 설정에 저장된 표기"
    },
    {
      "tool": "MiniMax · Kling · Seedance",
      "use": "승인한 이미지에서 영상 생성"
    },
    {
      "tool": "Python · FFmpeg",
      "use": "결과 파일 다운로드 · 영상 조립"
    }
  ]
},
  {
    id: 'lg-youth',
    layout: 'tall',
    tags: ['공모전', 'AI 숏폼'],
    title: '가장 나다운 순간',
    meta: 'Google·LG U+ 유쓰 AI 쇼츠 페스티벌 출품작 · 세로 숏폼',
    line: '상반된 취향을 가진 인물의 성격을 셀피 시점과 짧은 반전으로 표현',
    role: '콘셉트 기획 · 인물 이미지 생성 · 셀피 시점 연출 · AI 영상 제작',
    outcome: 'Google·LG U+ 유쓰 AI 쇼츠 페스티벌 우수상 수상',
    video: 'videos/lg-youth-festival.mp4',
    poster: 'images/posters/lg-youth-festival.jpg',
    goal: "Google·LG U+ 유쓰 AI 쇼츠 페스티벌 우수상 수상작\n브랜드·‘나다움’ 주제에 맞춘 일상의 모순·서투름 중심 셀피 연출\n상반된 취향·서툰 순간을 ‘무너지면 주워 먹는 사람’의 태도로 표현\n모순된 모습까지 나로 인정하는 나다움의 의미 전달\n시청자 자신의 모순된 모습에 대한 애정 유도 목표",
    process: [
      "정해진 답이 없는 ‘나다움’의 해석을 위해 제작보다 기획에 더 많은 시간 투입\n좋아하는 것과 실제 행동이 어긋나는 순간 회고\n모순·서툶을 대하는 태도를 이야기의 중심으로 설정",
      "주최 브랜드 LG유플러스 유쓰·‘심플리 유플러스’ 슬로건·취향과 일상을 담는 부문 설명 검토\n기술 과시형의 화려한 연출 축소\n일상적·정서적 톤 선택",
      'ChatGPT로 이미지 프롬프트를 정리하고 Higgsfield Soul로 인물 이미지 생성',
      '화면 밖 팔의 방향과 시선으로 셀피 시점을 구성하고, 인물의 외형과 스타일을 장면의 공통 기준으로 사용',
      'Kling과 Seedance 2.0으로 영상화하고 컷 전환과 카메라 무빙에 변화를 주어 짧은 이야기로 완성'
    ],
    results: [{ n: '우수상', label: 'Google·LG U+ 유쓰 AI 쇼츠 페스티벌' }],
    resultLabel: '수상 결과',
    certificate: { src: 'images/awards/youth-festival-certificate.png', caption: 'Google·LG U+ 공동 주최 · 유쓰 AI 쇼츠 페스티벌 우수상 · 2026.09.23' },
    processMedia: [],
    tools: ['ChatGPT', 'Higgsfield Soul', 'Kling', 'Seedance 2.0']
  },
  {
    id: 'pure-solution',
    layout: 'pano',
    tags: ['인스타그램 캐러셀', 'AI 제작'],
    title: '퓨어솔루션 캐러셀',
    meta: '닥터조 인스타그램 · 4장 파노라마 캐러셀',
    role: '캐러셀 기획 · 이미지 생성 · 파노라마 구성 · 인물·오브제 배치 · 광고 집행',
    outcome: '4장의 연결된 비주얼로 제품을 소개하고 외부링크 클릭 422건 기록',
    line: '식집사의 하루를 따라 넘기며 제품 사용 장면을 만나는 파노라마 캐러셀',
    video: 'videos/pure-solution.mp4',
    poster: 'images/posters/pure-solution.jpg',
    slides: [1, 2, 3, 4].map(n => `images/pure-solution/slide-${n}.webp`),
    goal: "퓨어솔루션을 식집사의 일상 속 관리 루틴으로 소개\n단일 제품 광고보다 식물과 보내는 하루를 순서대로 보여주는 캐러셀 선택\n식물 관찰·돌봄에서 제품 사용으로 연결해 생활 속 쓰임의 자연스러운 발견 유도",
    process: [
      "첫 장 · 식물과 함께하는 공간·인물로 식집사의 일상 소개\n다음 장 · 물주기·식물 돌봄 행동으로 연결",
      "돌봄 장면에 제품을 넣고 희석하는 사용 모습 배치\n제품 설명을 분리하지 않고 앞선 식물 관리 행동의 다음 순서로 연결\n마지막 패키지·브랜드 노출로 제품 기억 유도",
      "초록 배경·인물·식물·오브제를 하나의 파노라마로 연결 후 4장으로 분할\n장의 경계를 넘는 요소로 다음 화면에 대한 궁금증 유도\n넘기는 순서에 맞춘 식집사의 하루·제품 사용 흐름 배치"
    ],
    results: [
      { n: '16,745', label: '조회수' },
      { n: '422', label: '외부링크 클릭' },
      { n: '76', label: '저장' },
      { n: '54', label: '좋아요' }
    ],
    processMedia: [],
    tools: []
  },
  {
    id: 'potting-soil',
    layout: 'tall',
    tags: ['인스타그램 광고', 'AI 숏폼'],
    title: '분갈이흙',
    meta: '인스타그램 유료 광고 · 세로 숏폼',
    line: '낯선 사물에서 자라는 식물로 시선을 끌고, 관심을 흙으로 옮기는 숏폼 광고',
    role: '광고 기획 · 이미지 생성 · 영상화 · 편집 · 인스타그램 광고 집행',
    outcome: "유료 광고 20일간(2026.09.21~10.10) 4개 캠페인에 총 ₩199,607 집행\n노출 22,451회 · 조회 20,250회 · 스토어 유입(링크 클릭) 1,332회 기록\n링크 클릭률(CTR) 가중평균 5.93% · 링크 클릭 1회당 비용 약 ₩150",
    video: 'videos/potting-soil.mp4',
    poster: 'images/posters/potting-soil.jpg',
    goal: "식물 성장에 필요한 것은 화분보다 좋은 흙이라는 메시지의 숏폼 광고\n낯선 사물에서 자라는 식물로 시선 확보 후 흙으로 관심 전환 목표",
    process: [
      "프롬프트에 원하는 색상 코드·공간·소품을 지정해 GPT Image 2로 이미지 생성\n구두·서랍·은색 용기·유리잔 등 서로 다른 사물을 식물 재배 공간으로 전환\n초록색 계열의 색감 연결",
      "식물 성장 장면 뒤에 분갈이흙 패키지·모종삽 배치\n제품 컷 생성 시 패키지 글자 깨짐 방지\n깨진 글자는 Photoshop으로 직접 수정해 제품명 가독성 확보",
      "완성 이미지를 Kling으로 영상화\n앞부분은 다양한 사물에서 자라는 식물로 시선 유도\n뒷부분은 흙을 담은 삽·열린 제품 봉투를 근접 노출\n‘어디에 심든’에서 ‘흙이 좋으면’으로 이어지는 카피로 재배 용기에서 흙으로 관심 전환"
    ],
    results: [
      { n: '20,250', label: '조회수' },
      { n: '1,332', label: '스토어 유입' },
      { n: '5.93%', label: '링크 클릭률' }
    ],
    resultLabel: '광고 성과',
    metricNote: '인스타그램 유료 광고 · 같은 영상으로 집행한 4개 캠페인 합계 · CTR = 링크 클릭 ÷ 노출',
    fix: {
      problem: "AI 생성 이미지의 패키지 제품명 깨짐으로 정확한 브랜드 식별 어려움",
      fix: "Photoshop으로 패키지 글자 보정",
      result: "제품명이 읽히는 이미지를 최종 영상에 사용"
    },
    processMedia: [],
    tools: ['GPT Image 2', 'Photoshop', 'Kling']
  },
  {
    id: 'bug-all-kill',
    layout: 'tall',
    tags: ['제품 광고', 'AI 숏폼'],
    title: '버그올킬',
    meta: '살충제 제품 광고 · 세로 숏폼',
    line: '젤리 질감의 벌레 캐릭터 세계관과 스프레이 사용 장면을 연결한 살충제 광고',
    role: '광고 기획 · 캐릭터 이미지 생성 · 영상화 · 편집 · 광고 집행',
    outcome: '젤리 캐릭터 세계관 안에서 제품의 작용과 패키지를 보여주는 세로 숏폼 광고 완성',
    video: 'videos/bug-all-kill.mp4',
    poster: 'images/posters/bug-all-kill.jpg',
    goal: "살충제 광고의 벌레를 반투명 젤리 캐릭터로 전환\n벌레에 대한 거부감 완화·시청 지속 유도 목표",
    process: [
      "Nano Banana로 반투명 젤리 질감의 벌레·버섯·꽃 배경 제작\n작은 눈·둥근 형태·밝은 색으로 해충을 귀여운 캐릭터로 전환\n캐릭터와 주변 식물을 같은 재질의 세계로 구성",
      "Kling·Seedance 2.0으로 이미지 영상화\n분사구의 액체·벌레 위로 떨어지는 물방울 근접 노출 후 색색의 입자가 퍼지는 장면으로 연결\n사실적인 해충 묘사 대신 젤리 세계의 사건으로 제품 작용 표현",
      "캐릭터·입자 움직임 뒤에 제품 패키지를 화면 중심에 두고 천천히 접근하는 컷 배치\n화려한 배경 유지 및 제품명·패키지로 시선 집중\n앞선 분사 장면과 실제 제품의 연결 유도"
    ],
    results: [],
    processMedia: [],
    tools: ['Nano Banana', 'Kling', 'Seedance 2.0']
  }
];

/* 작품 소개 탭의 '핵심 연출 판단' — 제작 과정에 있던 판단을 앞으로 꺼낸다. */
const decisions = {
  'out-of-frame': [
    "수영장 · 정장 차림으로 물가에서 분홍색 전화기를 태연하게 다루는 행동\n낯선 상황에도 당황하지 않는 인물 표현",
    "붉은 코트 · 이미 그어진 선 위에 자기만의 원을 그리는 행동\n주어진 규칙 대신 자기 기준을 세우는 인물 표현",
    "작업실 · 반투명 천 사이의 시선과 “그다음은?”이라는 질문\n다음 장면을 스스로 고르는 인물 표현 및 다음 이야기에 대한 기대 유도",
    "편집 · 소매 정리·분필 줍기 등 설명적 동작을 덜어내 21.5초로 압축"
  ],
  'onetake': [
    "카메라 · Blender에서 16mm 광각 카메라의 접근·후퇴 경로와 타이밍 직접 지정",
    "동작 · 안무 영상의 뼈대·깊이를 프리비즈 카메라의 깊이 패스에 합성\n카메라 무빙·안무를 하나의 레퍼런스로 제어",
    "검증 순서 · 480p 드래프트에서 카메라·동작 확인 후 1080p 완성"
  ],
  'lg-youth': [
    "주제 해석 · 좋아하는 것과 실제 행동이 어긋나는 순간의 모순·서투름을 대하는 태도를 나다움으로 해석",
    "톤 · 기술 과시형의 화려한 연출 축소\n주최 브랜드의 슬로건·부문 설명에 맞춘 일상적·정서적 톤 선택",
    "시점 · 화면 밖 팔 방향·시선으로 셀피 시점 구성\n상반된 취향을 짧은 반전으로 표현"
  ],
  'potting-soil': [
    "재배 공간 · 화분 대신 레몬 껍질·구두·세탁기 등 식물과 어울리지 않는 사물을 재배 공간으로 전환",
    "색감 · 프롬프트에 색상 코드를 지정해 서로 다른 사물을 초록 계열로 연결",
    "카피 · “어디에 심든 → 흙이 좋으면 → 잘 자라니까”로 재배 용기에서 흙으로 관심 전환"
  ],
  'bug-all-kill': [
    "캐릭터 · 작은 눈·둥근 형태·밝은 색으로 해충을 귀여운 젤리 캐릭터로 재해석",
    "제품 작용 · 사실적인 해충 묘사 대신 젤리 세계의 사건으로 분사·입자 확산 표현",
    "마무리 · 화려한 배경 유지 및 마지막 패키지의 화면 중앙 배치로 제품명에 시선 집중"
  ],
  'pure-solution': [
    "형식 · 단일 제품 광고보다 식물과 보내는 하루를 순서대로 보여주는 캐러셀 선택",
    "제품 노출 · 제품 설명을 분리하지 않고 물주기·식물 돌봄 다음 순서에 제품 희석·사용 장면 배치",
    "연결 · 인물·식물·오브제를 하나의 파노라마로 연결 후 4장으로 분할\n장의 경계를 넘는 요소로 다음 장에 대한 궁금증 유도"
  ]
};
/* 작품 소개 탭의 '결과와 근거' 보충 — 결과를 어떻게 확인했는지. */
const evidence = {
  'out-of-frame': {
    checks: ["드래프트의 얼굴·의상·공간 거리감·행동 의미 검토 후 채택본 선별\n작업실 수정안과 원본 비교 후 원본 선택"],
    research: [
      { label: '연구에서 확인한 점', text: "얼굴 계측 연구에서 얼굴 스펙 문장의 모델별 효과 차이 확인\n같은 인물 유지의 핵심 조건으로 이미지 레퍼런스 확인" },
      { label: '선택한 제작 조건', text: "얼굴 수치·스펙 문장 대신 연구의 캐릭터 B를 출발점으로 한 이미지 레퍼런스로 캐릭터 시트 제작\n인물 시트·공간 이미지를 별도 레퍼런스로 제공" },
      { label: '적용한 장면', text: "수영장·붉은 코트·작업실의 서로 다른 세 공간에 동일 인물 적용" }
    ]
  }
};
/* 작품 소개 탭의 '남은 한계' — 확인된 내용만 채운다. 비어 있으면 표시하지 않는다. */
const limits = {
  'onetake': "빠른 인물 동작·카메라 무빙 구간의 얼굴·디테일 뭉개짐"
};
/* 비교 영상 아래 판정 — 의도대로 유지된 것 · 남은 오차 · 다음 수정 조건 */
const compareReview = {
  'onetake': [
    { title: '의도대로 유지된 것', items: [
      "원거리 → 근접 → 로우 앵글 → 다시 원거리로 이어지는 카메라 경로·타이밍이 6초 내내 가이드와 일치",
      "팔 올리기·얼굴 앞 손동작·앉았다 일어나기 등 주요 포즈의 등장 시점이 가이드와 일치",
      "카메라 이동에 맞춘 기둥 세트 배치·원근 유지"
    ] },
    { title: '남은 오차', items: [
      "약 1.3초 지점의 동작 차이 · 가이드는 양팔을 옆으로 뻗기, 완성본은 팔을 굽혀 가슴 앞으로 모으기",
      "빠른 인물 동작·카메라 접근 구간의 얼굴·디테일 뭉개짐"
    ] },
    { title: '다음 제작에서 수정할 조건', items: [
      "팔을 크게 뻗는 동작의 뼈대가 더 뚜렷하게 보이도록 가이드 영상 조정 예정",
      "빠르게 다가가는 근접 구간을 드래프트 단계에서 별도 분리·재생성 예정",
      "빠른 구간의 뭉개짐 완화를 위한 해상도·생성 길이 조건 조정 예정"
    ] }
  ]
};
const FEATURED = ['lead', 'wide', 'tall', 'pano'];

const briefs = {
  'onetake': { purpose: '원하는 카메라 무빙과 안무를 함께 제어', process: '카메라 무빙 직접 지정 → Depth·Pose → AI 생성', result: '6초 원테이크 · 1080p 완성' },
  'out-of-frame': { purpose: '태도와 시선으로 솔로 아이돌의 콘셉트 소개', process: '인물·공간 레퍼런스 설계 → 생성·선별 → 편집', result: '세 공간을 연결한 21.5초 트레일러' },
  'lg-youth': { purpose: 'LG유플러스 유쓰 공모전의 나다움 주제 표현', process: '셀피 시점 연출 → 인물 생성 → 숏폼 구성', result: 'Google·LG U+ 유쓰 AI 쇼츠 페스티벌 우수상' },
  'potting-soil': { purpose: '화분보다 흙이 식물을 키운다는 메시지 전달', process: '낯선 재배 공간 이미지 → 글자 보정 → 영상화·카피', result: '조회 20,250회 · 스토어 유입 1,332회 · 지출 ₩199,607' },
  'bug-all-kill': { purpose: '벌레에 대한 거부감 완화·시청 지속 유도', process: '젤리 캐릭터 재해석 → 분사 장면 영상화 → 제품 컷', result: '젤리 세계관의 살충제 숏폼 광고' },
  'pure-solution': { purpose: '식집사의 일상에서 제품의 쓰임을 자연스럽게 소개', process: '인물·오브제가 이어지는 4장 파노라마 구성', result: '조회수 16,745 · 외부링크 클릭 422건' },
  'expression-lab': { purpose: '이후 제작에서 표정 일관성을 유지할 기준 마련', process: '감정명·FACS 비교 → 강도·복합 감정 실험', result: '표정 이미지 82장과 선별 이유 정리' },
  'identity-lab': { purpose: '여러 장면에서 같은 얼굴을 유지할 기준 마련', process: '얼굴 계측 → 스펙·레퍼런스 조합 → 모델 비교', result: '6개 모델 · 비교 이미지 69장' },
  'interview-workflow': { purpose: '이야기 흐름을 빠르게 구성하고 편집 공수 절감', process: 'Whisper 전사 → 서사 구성 → Premiere MCP', result: '14개 구간으로 구성한 약 8분 편집 초안' },
  'production-board': { purpose: '프롬프트 입력과 참조 이미지 첨부의 반복 감소', process: '회사 제작 기준 반영 → 단계별 생성 → 직접 검토·승인', result: '스토리보드·이미지·영상·자막 생성 자동화' }
};
/* 확인 가능한 제작 기록을 기준으로 개선 전후와 연구의 쓰임을 설명한다. */
const caseNotes = {
  'interview-workflow': {
    before: "원본 재생을 통한 발화 탐색\n구간 선택·순서 구성·타임라인 배치를 각각 진행하는 편집 초안 단계",
    after: "타임코드가 연결된 전사문에서 발화 선택\n편집 구성·자막·오디오를 Premiere에서 수정 가능한 초안으로 연결",
    proof: '편집 초안 구성 약 1시간 30분 · 기존 경험상 약 4~5시간 (1건 적용)',
    performance: { title: '인터뷰 편집 초안 구성 약 1시간 30분', description: "발화 선택·이야기 구성·타임라인 연결 자동화\n결과 검토를 포함한 편집 초안 구성 약 1시간 30분\n같은 단계의 기존 수작업 경험치 약 4~5시간 대비 약 60~70% 단축", basis: "비교 기준 · 인터뷰 1건 적용\n기존 4~5시간은 경험에 따른 추정\n분량·난이도가 같은 작업 간 비교는 아님\n결과 검토 시간 포함 · 수정 시간 제외" },
    stats: [{ n: '282개', label: '원본 발화 구간' }, { n: '14개', label: '선택·재배열 구간' }, { n: '약 8분', label: '편집 초안 길이' }],
    scope: "초안 구성·편집 도구 연동 구현\n발화 의미·연결 및 컷 순서·길이는 직접 검토"
  },
  'production-board': {
    before: "컷별 프롬프트 입력·참조 이미지 첨부 반복\n이미지·영상 생성, 시안 비교·승인, 자막 제작을 여러 도구에서 분산 관리",
    after: "회사의 콘텐츠 구성·연출·제품 표현·카피·자막 규칙을 제작 기준으로 반영\n반복 입력·첨부 감소 및 스토리보드부터 이미지·영상·자막 생성까지 연결",
    proof: '프롬프트 입력과 참조 이미지 첨부의 반복 감소',
    beforeLabel: '개선 전 · 반복 입력·분산 관리',
    afterLabel: '구현 후 · 제작 기준을 반영한 자동화',
    scope: "생성 결과의 자동 확정 없이 컷별 연출·브랜드 적합성 직접 확인 후 승인",
    detail: {
      before: "컷별 프롬프트·참조 이미지 반복 업로드 및 여러 도구의 생성 결과 분산 관리\n늘어지거나 상투적인 카피·브랜드 기준에 맞지 않는 자막 수동 수정",
      after: "직접 정립한 카피 문법·자막 가이드를 제작 규칙으로 적용\n규칙 적용 → 시안 비교 → 직접 검토·승인 → 후속 편집 연결\n반복 입력·결과 정리 단계 감소 및 브랜드 적합성 판단 기준 마련",
      beforeLabel: '개선 전 · 반복 입력과 수동 수정',
      afterLabel: '구현 후 · 규칙 적용과 단계별 검토',
      scope: "규칙 지정 후에도 생성 결과 직접 확인\n컷별 승인·재생성 결정"
    }
  },
  'expression-lab': {
    proof: '표정 이미지 82장 · 프롬프트와 선택 이유 기록',
    application: "진심 어린 미소·억지웃음의 지시 방식별 결과 차이 확인\n감정·강도에 맞는 표정으로 캐릭터의 연기 의도를 전달할 선택 기준 정리",
    scope: "정지 이미지의 표정 비교 결과\n영상의 표정 전환·시간에 따른 일관성은 별도 검증 필요"
  },
  'identity-lab': {
    proof: '6개 모델 · 비교 이미지 69장 · 얼굴 유사도와 계측 기록',
    application: "컷·장소가 달라져도 같은 인물로 보이는 얼굴 일관성이 캐릭터 영상 연속성의 핵심\n무조건적인 스펙 추가 대신 모델별 비교 결과에 맞춘 이미지 레퍼런스·스펙 조합 선택 기준 마련",
    findings: "이번 이미지 실험의 GPT Image 2 평균 얼굴 유사도 · 레퍼런스만 0.72 → 스펙 병용 0.78\nQwen은 0.80 → 0.74로 하락\n스펙 추가 효과의 모델별 차이 확인",
    scope: "기준 얼굴 1명의 정지 이미지 비교 결과\n영상 전 구간의 얼굴 유지는 별도 검증 필요",
    applied: {
      work: 'out-of-frame',
      label: 'OUT OF FRAME 트레일러의 캐릭터',
      steps: [
        { label: '연구에서 확인한 점', text: "얼굴 스펙 문장의 모델별 효과 차이 · GPT Image 2는 0.72 → 0.78, Qwen은 0.80 → 0.74\n같은 인물 유지의 핵심 조건으로 이미지 레퍼런스 확인" },
        { label: '선택한 제작 조건', text: "얼굴 수치·스펙 문장 대신 연구의 캐릭터 B를 출발점으로 한 이미지 레퍼런스로 캐릭터 시트 제작\n인물 시트·공간 이미지를 별도 레퍼런스로 제공" },
        { label: '완성 영상에 적용한 장면', text: "OUT OF FRAME의 수영장·붉은 코트·작업실의 서로 다른 세 공간에 동일 인물 적용" }
      ]
    }
  }
};
function changeMarkup(note) {
  return note?.before ? `<section class="case-change"><h3>개선 전후</h3><dl class="change-comparison"><div><dt>${esc(note.beforeLabel || '개선 전 · 나뉜 작업')}</dt><dd>${copyList(note.before)}</dd></div><div><dt>${esc(note.afterLabel || '구현 후 · 연결한 작업')}</dt><dd>${copyList(note.after)}</dd></div></dl></section>` : '';
}
const stepTitles = {
  'onetake': ['카메라 무빙 직접 지정', 'ComfyUI에서 뼈대·깊이 추출과 합성', '캐릭터 멀티 레퍼런스', '드래프트 검토와 최종 생성', '음원과 안무 싱크'],
  'out-of-frame': ['공간과 소품 기획', '캐릭터 레퍼런스', '장면별 행동·카메라 연출', '드래프트 검토와 최종 출력', '행동의 시작과 끝을 고르는 편집'],
  'lg-youth': ['나다움의 해석', '주제·브랜드에 맞춘 톤 결정', '인물 이미지 생성', '셀피 시점 연출', '영상 생성과 컷 구성'],
  'potting-soil': ['색상 코드로 통일한 낯선 재배 공간', '제품 패키지의 글자 확인과 보정', '낯선 장면에서 흙과 제품으로 시선 전환'],
  'bug-all-kill': ['젤리 질감으로 해충 이미지 재해석', '분사와 입자 반응을 연결한 연출', '제품이 읽히는 마지막 장면 구성'],
  'pure-solution': ['식집사의 하루로 시작', '관리 루틴 안에서 제품 노출', '캐러셀을 선택한 이유와 연결 방식'],
  'expression-lab': ['감정명과 FACS 비교', '강도·복합 감정 실험', '표정 선별과 라이브러리 정리'],
  'identity-lab': ['기준 얼굴 계측', '조건별·모델별 이미지 생성', '계측·유사도·이미지 비교'],
  'interview-workflow': ['음성 전사', '발화 선택과 편집 구성', '타임라인·자막·오디오 출력', 'Premiere Pro MCP 연동과 검토'],
  'production-board': ['직접 정의한 카피 문법 기반 스토리보드 기획', '멀티 모델 키프레임 생성과 시안 비교', '비디오 모션 생성과 물리적 자연스러움 검토', '브랜드 자막 제작과 후속 편집 연결']
};

/* ── RENDER ── */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// Line-separated fragments share the same semantic list in every detail view.
function copyList(text, extraClass = '') {
  const items = String(text).split('\n').map(item => item.trim()).filter(Boolean);
  return `<ul class="copy-list${extraClass ? ` ${esc(extraClass)}` : ''}">${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;
}
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function cardMedia(w) {
  if (w.video) return `<video class="ak-card-video" src="${esc(w.video)}" poster="${esc(w.poster)}" muted loop playsinline preload="none" aria-hidden="true"></video>`;
  const images = w.previewImages || [{ src: w.thumb, cap: w.title }];
  return images.map(m => `<img src="${esc(m.src)}" alt="${esc(m.cap)}" loading="lazy">`).join('');
}
function briefMarkup(w) {
  const b = briefs[w.id];
  return `<dl class="work-brief"><div><dt>목적</dt><dd>${esc(b.purpose)}</dd></div><div><dt>과정</dt><dd>${esc(b.process)}</dd></div><div><dt>결과</dt><dd>${esc(b.result)}</dd></div></dl>`;
}
function renderWorks() {
  const labels = { onetake: 'Blender 3D 프리비즈 · 카메라·안무 제어', 'out-of-frame': '캐릭터의 태도와 분위기를 담은 AI 트레일러', 'interview-workflow': '음성 전사 · 편집 자동화', 'production-board': '생성 · 승인 · 재생성', 'expression-lab': '표정 · 감정 표현', 'identity-lab': '얼굴 일관성 · 모델 비교', 'lg-youth': '나다움을 셀피 시점으로 풀어낸 AI 숏폼', 'pure-solution': '식집사의 일상에 제품을 담은 AI 캐러셀', 'potting-soil': '공간별 식물 연출로 제품을 소개하는 AI 숏폼', 'bug-all-kill': '젤리 캐릭터로 제품의 효과를 보여주는 AI 광고' };
  const block = w => `<article class="project-card">
    <button class="ak-card-hit project-hit" type="button" data-ak-work="${w.id}" aria-label="${esc(w.title)} 자세히 보기">
      <div class="project-media${w.previewImages?.length > 1 ? ' project-media--pair' : ''}">${cardMedia(w)}${w.id === 'lg-youth' ? '<span class="project-badge">🏅 Google·LG U+ 유쓰 AI 쇼츠 페스티벌 · 우수상</span>' : ''}<span class="project-open" aria-hidden="true">${w.video ? '▶' : '↗'}</span></div>
      <div class="project-copy"><div><h3>${esc(w.title)}</h3><p class="project-category">${esc(labels[w.id])}</p></div><span class="project-link">자세히 ↗</span></div>
    </button>${caseNotes[w.id] ? `<div class="project-context">${caseNotes[w.id].proof ? `<p class="project-proof">${esc(caseNotes[w.id].proof)}</p>` : ''}${caseNotes[w.id].applied ? `<p class="project-change"><b>적용</b>${esc(caseNotes[w.id].applied.label)}</p>` : ''}${caseNotes[w.id].before ? `<div class="project-change"><b>개선 전</b>${copyList(caseNotes[w.id].before)}</div><div class="project-change"><b>구현 후</b>${copyList(caseNotes[w.id].after)}</div>` : ''}</div>` : ''}</article>`;
  const render = (target, ids) => { $(target).innerHTML = ids.map(id => block(works.find(w => w.id === id))).join(''); };
  render('#ak-grid', ['onetake', 'out-of-frame']);
  render('#ak-vertical', ['lg-youth', 'pure-solution', 'potting-soil', 'bug-all-kill']);
  render('#ak-workflows', ['interview-workflow', 'production-board']);
  render('#ak-research', ['expression-lab', 'identity-lab']);
}

function watchCardVideos() {
  if (reduceMotion) return;
  document.querySelectorAll('.ak-card-hit').forEach(button => {
    const v = button.querySelector('video');
    if (!v) return;
    button.addEventListener('pointerenter', () => { if (matchMedia('(hover: hover)').matches) v.play().catch(() => {}); });
    button.addEventListener('pointerleave', () => v.pause());
    button.addEventListener('blur', () => v.pause());
  });
}

/* ── DETAIL SHEET ── */
const sheet = $('#ak-sheet');
const panel = $('#ak-sheet-panel');
let lastFocus = null;

function sheetMedia(w) {
  if (w.gallery) {
    return `<div class="ak-identity-gallery${w.galleryLayout === 'documents' ? ' ak-identity-gallery--documents' : ''}">${w.gallery.map(m => `<figure><a href="${m.src}" target="_blank" rel="noopener" aria-label="${esc(m.cap)} 크게 보기"><img src="${m.src}" alt="${esc(m.cap)}" loading="lazy"></a><figcaption>${esc(m.cap)}</figcaption></figure>`).join('')}</div><p class="ak-media-caption">${esc(w.galleryCaption)}</p>`;
  }
  if (w.driveId) {
    return `<div class="ak-sm ak-sm--wide"><iframe src="https://drive.google.com/file/d/${w.driveId}/preview" allow="autoplay; fullscreen" allowfullscreen title="${esc(w.title)} 영상"></iframe></div><a class="ak-ext" href="https://drive.google.com/file/d/${w.driveId}/preview" target="_blank" rel="noopener">영상 새 창에서 보기 ↗</a>`;
  }
  if (w.layout === 'lead' || w.layout === 'wide') {
    return `<div class="ak-sm ak-sm--wide"><video src="${w.video}" poster="${w.poster}" controls loop playsinline></video></div>`;
  }
  if (w.layout === 'pano') {
    return `
      <div class="ak-sm ak-sm--pano"><video src="${w.video}" poster="${w.poster}" controls muted loop playsinline></video></div>
      <div class="ak-slides" aria-label="캐러셀 4장">${w.slides.map((s, i) => `<figure><a href="${s}" target="_blank" rel="noopener" aria-label="캐러셀 ${i + 1}장 크게 보기"><img src="${s}" alt="캐러셀 ${i + 1}장" loading="lazy"></a><figcaption>${i + 1} / ${w.slides.length} · 눌러서 크게 보기 ↗</figcaption></figure>`).join('')}</div>`;
  }
  return `<div class="ak-sm ak-sm--tall"><video src="${w.video}" poster="${w.poster}" controls playsinline></video></div>`;
}

function sheetProcessMedia(w) {
  if (!w.processMedia.length) return '';
  return `<div class="ak-pm-grid">${w.processMedia.map((m, i) => {
    const { src, cap = '', wide = false } = typeof m === 'string' ? { src: m } : m;
    return `<figure class="ak-pm${wide ? ' ak-pm--wide' : ''}"><a href="${esc(src)}" target="_blank" rel="noopener" aria-label="${esc(cap || `${w.title} 과정 자료 ${i + 1}`)} 크게 보기"><img src="${esc(src)}" alt="${esc(cap || `${w.title} 과정 자료 ${i + 1}`)}" loading="lazy"></a>${cap ? `<figcaption>${esc(cap)}</figcaption>` : ''}</figure>`;
  }).join('')}</div>`;
}

function sheetComparison(w) {
  if (!w.comparison) return '';
  const layout = 'horizontal';
  return `<figure class="ak-comparison" data-layout="${layout}">
    <figcaption>Depth·Pose 가이드와 완성 영상 비교</figcaption>
    <div class="ak-comparison-player">
      <video data-comparison="${w.comparison}" src="videos/${w.comparison}-${layout}.mp4" poster="images/posters/${w.comparison}-${layout}.jpg" controls muted playsinline preload="metadata" aria-label="Depth·Pose 가이드와 AI 완성 영상 동시 비교"></video>
      <span class="ak-comparison-label ak-comparison-label--guide" aria-hidden="true">Depth · Pose 가이드</span>
      <span class="ak-comparison-label ak-comparison-label--final" aria-hidden="true">AI 완성 영상</span>
    </div>
    <p class="ak-comparison-note">같은 시점에서 재생 · 속도 변경 없음 · 5.7초 가이드의 끝 장면을 약 0.3초 유지</p>
    ${(compareReview[w.id] || []).map(g => `<section class="ak-compare-review"><h4>${esc(g.title)}</h4><ul>${g.items.map(t => `<li>${esc(t)}</li>`).join('')}</ul></section>`).join('')}
  </figure>`;
}

function featuredSummary(w) {
  const d = decisions[w.id] || [];
  const ev = evidence[w.id] || {};
  const stats = w.results.length ? `<ul class="ak-res" aria-label="${esc(w.resultLabel || '게시 성과')}">${w.results.slice(0, 3).map(r => `<li><b>${esc(r.n)}</b><span>${esc(r.label)}</span></li>`).join('')}</ul>` : '';
  const cert = w.certificate ? `<figure class="case-certificate"><a href="${esc(w.certificate.src)}" target="_blank" rel="noopener" aria-label="이나현 우수상 상장 크게 보기"><img src="${esc(w.certificate.src)}" alt="이나현 · Google·LG U+ 유쓰 AI 쇼츠 페스티벌 우수상 상장" loading="lazy"></a><figcaption>${esc(w.certificate.caption)}<br>상장 크게 보기 ↗</figcaption></figure>` : '';
  return `<h3>제작 목적</h3>${copyList(w.goal)}
    ${d.length ? `<section class="case-decisions"><h3>핵심 연출 판단</h3><ul>${d.map(t => { const [k, ...v] = t.split(' · '); return `<li><b>${esc(k)}</b>${copyList(v.join(' · '))}</li>`; }).join('')}</ul></section>` : ''}
    <h3>담당 역할</h3>${copyList(w.role)}
    <section class="case-evidence"><h3>결과와 근거</h3>${copyList(w.outcome)}${(ev.checks || []).map(t => copyList(t)).join('')}${stats}${w.metricNote ? `<p class="case-metric-note">${esc(w.metricNote)}</p>` : ''}${cert}${w.fix ? `<div class="case-research-link"><p class="case-research-title">AI 결과 수정</p><ol><li><b>문제</b>${copyList(w.fix.problem)}</li><li><b>수정</b>${copyList(w.fix.fix)}</li><li><b>결과</b>${copyList(w.fix.result)}</li></ol></div>` : ''}${ev.research ? `<div class="case-research-link"><p class="case-research-title">캐릭터 연구 적용</p><ol>${ev.research.map(r => `<li><b>${esc(r.label)}</b>${copyList(r.text)}</li>`).join('')}</ol></div>` : ''}</section>
    ${limits[w.id] ? `<section class="case-limits"><h3>남은 한계</h3>${copyList(limits[w.id])}</section>` : ''}`;
}

function openSheet(id) {
  const w = works.find(x => x.id === id);
  if (!w) return;
  const note = caseNotes[w.id]?.detail || caseNotes[w.id];
  lastFocus = document.activeElement;
  document.querySelectorAll('.ak-card-video').forEach(v => v.pause());

  panel.className = 'ak-sheet-panel case-reader';
  panel.innerHTML = `
    <header class="case-heading"><div><p class="work-choice-kind">${esc(w.tags.join(' · '))}</p><h2 id="ak-sheet-title">${esc(w.title)}</h2><p>${esc(w.meta)}</p></div><button class="case-close" type="button" data-ak-close aria-label="닫고 목록으로 돌아가기">✕ <span>목록으로</span></button></header>
    <div class="case-tabs" role="tablist" aria-label="작품 상세 내용">
      <button type="button" role="tab" id="case-result-tab" aria-controls="case-result" aria-selected="true" data-case-tab="result">작품 소개</button>
      <button type="button" role="tab" id="case-process-tab" aria-controls="case-process" aria-selected="false" tabindex="-1" data-case-tab="process">제작 과정</button>
    </div>
    <div class="case-content">
      <section id="case-result" role="tabpanel" aria-labelledby="case-result-tab" tabindex="0">
        <div class="case-result-layout${w.gallery ? ' case-result-layout--visual-first case-result-layout--summary-first' : ''}"><div class="case-result-media">${sheetMedia(w)}${w.musicCredit ? `<p class="ak-sheet-meta">${esc(w.musicCredit)}</p>` : ''}${sheetComparison(w)}</div><div class="case-result-copy">${FEATURED.includes(w.layout) ? featuredSummary(w) : `<h3>제작 목적</h3>${copyList(w.goal)}<h3>담당 역할</h3>${w.roleItems ? `<section class="case-decisions"><ul>${w.roleItems.map(item => { const [label, ...text] = item.split(' · '); return `<li><b>${esc(label)}</b>${copyList(text.join(' · '))}</li>`; }).join('')}</ul></section>` : `${copyList(w.role)}`}
        ${note?.performance ? `<section class="case-outcome"><h3>${esc(note.performance.title)}</h3>${copyList(note.performance.description)}${note.performance.basis ? `${copyList(note.performance.basis, 'case-metric-note')}` : ''}</section>` : ''}
        ${changeMarkup(note)}
        ${w.outcome ? `<section class="case-outcome"><h3>${w.layout === 'research' ? '연구 산출물' : w.layout === 'workflow' ? '구현 결과' : '작업 결과'}</h3>${copyList(w.outcome)}</section>` : ''}
        ${note?.stats ? `<ul class="ak-res" aria-label="구현 산출물">${note.stats.map(r => `<li><b>${esc(r.n)}</b><span>${esc(r.label)}</span></li>`).join('')}</ul>` : ''}
        ${note?.application ? `<section class="case-application"><h3>영상 품질과의 연결</h3>${copyList(note.application)}</section>` : ''}
        ${w.findings || note?.findings ? `<section class="case-findings"><h3>비교에서 확인한 점</h3>${copyList(w.findings || note.findings)}</section>` : ''}
        ${note?.applied ? `<section class="case-evidence"><h3>완성 영상에 적용</h3><div class="case-research-link case-research-link--flush"><ol>${note.applied.steps.map(r => `<li><b>${esc(r.label)}</b>${copyList(r.text)}</li>`).join('')}</ol></div><button class="case-applied-link" type="button" data-ak-work="${esc(note.applied.work)}">${esc(note.applied.label)} 보기 →</button></section>` : ''}
        ${note?.scope ? `${copyList(note.scope, 'case-scope')}` : ''}
        ${w.results.length ? `<ul class="ak-res" aria-label="${esc(w.resultLabel || '게시 성과')}">${w.results.slice(0, 3).map(r => `<li><b>${esc(r.n)}</b><span>${esc(r.label)}</span></li>`).join('')}</ul>` : ''}
        ${w.certificate ? `<figure class="case-certificate"><a href="${esc(w.certificate.src)}" target="_blank" rel="noopener" aria-label="이나현 우수상 상장 크게 보기"><img src="${esc(w.certificate.src)}" alt="이나현 · Google·LG U+ 유쓰 AI 쇼츠 페스티벌 우수상 상장" loading="lazy"></a><figcaption>${esc(w.certificate.caption)}<br>상장 크게 보기 ↗</figcaption></figure>` : ''}
        ${w.link ? `<a class="ak-ext" href="${w.link}" target="_blank" rel="noopener">${esc(w.linkLabel || '원본 게시물 보기 ↗')}</a>` : ''}`}
        </div></div>
      </section>
      <section id="case-process" role="tabpanel" aria-labelledby="case-process-tab" tabindex="0" hidden>
        ${(w.processScreens || []).map(m => `<figure class="case-work-screen"><a href="${esc(m.src)}" target="_blank" rel="noopener"><img src="${esc(m.src)}" alt="${esc(m.cap)}" loading="lazy"></a><figcaption>${esc(m.cap)}</figcaption></figure>`).join('')}
        ${sheetProcessMedia(w)}
        <p class="case-process-intro">${esc(briefs[w.id].process)}</p>
        ${w.conceptBeats ? `<section class="case-concept"><h3>기획 의도 · 세 공간의 흐름</h3><ol class="ak-steps">${w.conceptBeats.map(p => `<li>${copyList(p)}</li>`).join('')}</ol></section>` : ''}
        <div class="case-process-steps">${w.process.map((p,i) => `<section class="case-process-step"><h3><span>${String(i+1).padStart(2,'0')}</span>${esc(stepTitles[w.id]?.[i] || `단계 ${i+1}`)}</h3>${copyList(p)}</section>`).join('')}</div>
        ${w.toolRoles ? `<section class="case-tool-section"><h3>도구별 역할</h3><dl class="case-tools">${w.toolRoles.map(t => `<div><dt>${esc(t.tool)}</dt><dd>${copyList(t.use)}</dd></div>`).join('')}</dl></section>` : w.tools.length ? `<section class="case-tool-section"><h3>사용 툴</h3><p class="ak-chips">${w.tools.map(t => `<span>${esc(t)}</span>`).join('')}</p></section>` : ''}
      </section>
    </div>`;
  panel.querySelectorAll('video').forEach(video => video.addEventListener('play', () => {
    panel.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  }));
  sheet.classList.add('is-open');
  sheet.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  document.querySelectorAll('body > header, body > nav, body > main, body > footer').forEach(el => { el.inert = true; });
  panel.scrollTop = 0;
  $('.case-close', panel).focus();
}

function closeSheet() {
  if (!sheet.classList.contains('is-open')) return;
  sheet.classList.remove('is-open');
  sheet.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  document.querySelectorAll('body > header, body > nav, body > main, body > footer').forEach(el => { el.inert = false; });
  panel.querySelectorAll('video').forEach(v => v.pause());
  panel.innerHTML = '';
  if (lastFocus) lastFocus.focus();
}

function selectCaseTab(key, focus = false) {
  panel.querySelectorAll('[data-case-tab]').forEach(tab => {
    const active = tab.dataset.caseTab === key;
    tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus();
  });
  panel.querySelectorAll('[role="tabpanel"]').forEach(p => p.hidden = p.id !== `case-${key}`);
  panel.querySelectorAll('video').forEach(v => v.pause());
  panel.querySelector('.case-content').scrollTop = 0;
}
panel.addEventListener('click', e => {
  const tab = e.target.closest('[data-case-tab]');
  if (tab) selectCaseTab(tab.dataset.caseTab, true);
});
panel.addEventListener('keydown', e => {
  const tab = e.target.closest('[data-case-tab]');
  if (!tab || !['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
  e.preventDefault();
  const tabs = [...panel.querySelectorAll('[data-case-tab]')];
  const index = tabs.indexOf(tab);
  const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length-1 : (index + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  selectCaseTab(tabs[next].dataset.caseTab, true);
});

document.addEventListener('click', e => {
  const card = e.target.closest('[data-ak-work]');
  if (card) { openSheet(card.dataset.akWork); return; }
  if (e.target.closest('[data-ak-close]')) closeSheet();
});
document.addEventListener('keydown', e => {
  if (!sheet.classList.contains('is-open')) return;
  if (e.key === 'Escape') { closeSheet(); return; }
  if (e.key !== 'Tab') return;
  const items = [...panel.querySelectorAll('button, a[href], video[controls], iframe, [tabindex="0"]')].filter(el => el.getClientRects().length);
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ── 전체 작업: 접기/펼치기 + 카테고리 탭 ── */
const archive = $('#archive');
const toggle = $('.ak-archive-toggle', archive);
const body = $('#ak-archive-body');

/* 숨겨진 상태에서 계산된 메이슨리 높이를 다시 잡는다(script.js의 layoutAllGrids) */
const relayout = () => requestAnimationFrame(() => window.layoutAllGrids && window.layoutAllGrids());

function setArchive(open) {
  toggle.setAttribute('aria-expanded', String(open));
  body.hidden = !open;
  $('.ak-archive-title', toggle).textContent = open ? '전체 작업 접기' : '전체 작업 보기';
  $('.ak-archive-icon', toggle).textContent = open ? '−' : '+';
  if (open) relayout();
}
setArchive(true);
toggle.addEventListener('click', () => setArchive(body.hidden));

archive.querySelectorAll('[data-ak-tab]').forEach(tab => {
  tab.addEventListener('click', () => {
    archive.querySelectorAll('[data-ak-tab]').forEach(t => t.setAttribute('aria-selected', String(t === tab)));
    archive.querySelectorAll('.ak-panel').forEach(p => { p.hidden = p.id !== tab.dataset.akTab; });
    relayout();
    if (window.innerWidth <= 760) $('.ak-tabs', archive).scrollIntoView({ block: 'start' });
  });
});

/* 상단 메뉴 '전체 작업'이나 예전 주소(#work, #images …)로 들어오면 펼쳐서 보여준다 */
document.addEventListener('click', e => {
  if (e.target.closest('[data-nav="archive"]')) setArchive(true);
}, true);
const OLD_HASH = { work: 'work', cinematic: 'work', artfilm: 'work', commercial: 'work', liveaction: 'work',
  images: 'images', 'ai-image': 'images', photography: 'images', motion: 'motion', subtitle: 'motion', tools: 'tools', dashboard: 'tools' };
const hashTab = OLD_HASH[location.hash.slice(1)];
if (hashTab) {
  setArchive(true);
  archive.querySelector(`[data-ak-tab="${hashTab}"]`).click();
}

const routeAliases = { featured: 'selected', top: 'hero', work: 'archive', images: 'archive', motion: 'archive', tools: 'archive', about: 'about', stack: 'about', cinematic: 'archive', artfilm: 'archive', commercial: 'archive', liveaction: 'archive', subtitle: 'archive', 'ai-image': 'archive', photography: 'archive', dashboard: 'archive' };
function scrollToPortfolioRoute(route) {
  const target = document.getElementById(route);
  if (!target) return;
  const offset = document.querySelector('.site-header').offsetHeight + 24;
  window.scrollTo({ top: route === 'hero' ? 0 : Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset), behavior: reduceMotion ? 'instant' : 'smooth' });
}
window.akNavigate = (id, writeHistory = true, scroll = true) => {
  const route = routeAliases[id] || id || 'selected';
  closeSheet();
  document.querySelectorAll('[data-nav]').forEach(a => { a.classList.toggle('is-active', a.dataset.nav === route); if (a.dataset.nav === route) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
  document.querySelectorAll('.ak-card-video').forEach(v => v.pause());
  if (route === 'archive') { setArchive(true); relayout(); }
  if (writeHistory && location.hash !== `#${route}`) history.pushState(null, '', `#${route}`);
  if (scroll) scrollToPortfolioRoute(route);
};
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-portfolio-route], a.skip-link');
  if (!a) return;
  e.preventDefault(); window.akNavigate(a.dataset.portfolioRoute || 'selected');
});
history.scrollRestoration = 'manual';
window.addEventListener('load', () => requestAnimationFrame(() => scrollToPortfolioRoute(routeAliases[location.hash.slice(1)] || location.hash.slice(1) || 'hero')));
window.addEventListener('popstate', () => window.akNavigate(location.hash.slice(1), false));
window.addEventListener('hashchange', () => window.akNavigate(location.hash.slice(1), false));

renderWorks();
watchCardVideos();
const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
  if (!visible) return;
  document.querySelectorAll('[data-nav]').forEach(a => {
    const active = a.dataset.nav === visible.target.id;
    a.classList.toggle('is-active', active);
    if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
  });
}, { rootMargin: '-15% 0px -65% 0px' });
['hero', 'selected', 'workflows', 'research', 'archive'].forEach(id => sectionObserver.observe(document.getElementById(id)));
})();


