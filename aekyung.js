/* ============================================================
   애경산업 영상제작자 지원용 섹션 — aekyung.js
   성과 띠 · 대표 작업 5편 · 경력을 그린다. 히어로·쇼릴은 script.js/hero.js 그대로.
   이전 전체 버전: git 태그 ver2, 폴더 ../nahyunportfolio_ver2
   ============================================================ */
(() => {
'use strict';

const P3 = 'https://nahyun1993.github.io/portfolio3/images';

/* ── 성과 띠: 경력기술서와 같은 숫자를 쓴다 ── */
const stats = [
  { num: '96.5만', label: '숏폼 최고 조회수', note: '2026.10 기준', href: 'https://www.youtube.com/shorts/GnN6MW0CD2Q' },
  { num: '279%', label: '집중 조명 제품 구매율', note: '전년 대비' },
  { num: '8천 → 2만', label: '유튜브 구독자', note: '150% 성장' },
  { num: '200 → 4천', label: '인스타그램 팔로워', note: '1,900% 성장' }
];

/* ── 대표 작업 ──
   layout: 'wide'(가로 16:9) · 'pano'(파노라마) · 'tall'(세로 9:16)
   processMedia가 비어 있으면 상세에 '과정 자료 자리'가 표시된다. */
const works = [
  {
    id: 'medihel',
    layout: 'wide',
    tags: ['뷰티', 'AI 제작'],
    title: '메디힐 토너패드',
    meta: '가로 브랜드 필름 · 메디힐 공모전 출품작',
    line: '입문자에게 3단계 루틴을 알려주는 토너패드 브랜드 필름',
    thumb: `${P3}/Thumbnails/공모전_메디힐.png`,
    driveId: '1eSSpwG9XS92l4zofZlsaio4MO2V_PiHY',
    goal: '토너패드 입문자에게 올바른 사용법을 알려주기 위해 기획한 브랜드 필름입니다. 네모난 패드가 얼굴 곡면에 빈틈없이 밀착된다는 구조적 특징을 핵심 USP로 잡았습니다. 여기에 팩토 → 닦토 → 흡토 3단계 루틴을 한 편 안에서 자연스럽게 익힐 수 있도록 구성했습니다.',
    process: [
      '뷰티 시장 리서치를 NotebookLM으로 분석하고, 상반된 키워드를 충돌시켜 \'완벽주의자의 뷰티 오브제\' 컨셉을 도출했습니다.',
      'Midjourney로 톤앤무드와 인물 페르소나를 설정했습니다.',
      'Nano Banana로 장면 간 인물·의상·조명의 일관성을 유지했습니다.',
      'ComfyUI 워크플로우로 다양한 카메라 앵글을 일괄 생성했습니다.',
      'AI가 왜곡한 로고와 텍스트 영역에 실제 제품 에셋을 합성했습니다.',
      'Kling으로 영상화하고 Premiere Pro에서 최종 편집했습니다.'
    ],
    results: [],
    processMedia: [1, 2, 3, 4, 5, 6].map(n => `${P3}/주요장면/메디힐/메디힐 주요장면_0${n}.png`),
    tools: ['NotebookLM', 'Midjourney', 'Nano Banana', 'ComfyUI', 'Kling', 'Premiere Pro']
  },
  {
    id: 'pure-solution',
    layout: 'pano',
    tags: ['인스타그램 캐러셀', 'AI 제작'],
    title: '퓨어솔루션 캐러셀',
    meta: '닥터조 인스타그램 · 4장 파노라마 캐러셀',
    line: '넘길 때마다 장면이 이어지는 파노라마 캐러셀',
    video: 'videos/pure-solution.mp4',
    poster: 'images/posters/pure-solution.jpg',
    slides: [1, 2, 3, 4].map(n => `images/pure-solution/slide-${n}.webp`),
    goal: '최근 인스타그램에서 캐러셀 형식이 주목받는 이유에 집중했습니다. 캐러셀은 한 게시물 안에 여러 장면을 담아 이야기를 이어갈 수 있고, 사용자가 넘길수록 체류 시간도 늘어납니다. 퓨어솔루션이 일상 속 식물 관리에 녹아드는 흐름은 한 장의 이미지보다 이어지는 장면으로 보여줄 때 더 잘 전달된다고 판단했습니다. 그래서 \'다음 장이 궁금해서 넘기게 되는 캐러셀\'을 목표로 삼았습니다.',
    process: [
      '하나의 파노라마를 4장으로 나누고, 인물과 오브제가 장의 경계를 넘나들도록 배치했습니다.',
      '화면이 다음 장에서 이어지기 때문에, 넘기는 행위 자체가 콘텐츠가 되도록 설계했습니다.'
    ],
    results: [
      { n: '16,745', label: '조회수' },
      { n: '422', label: '외부링크 클릭' },
      { n: '2.5%', label: '클릭률' },
      { n: '76', label: '저장' },
      { n: '54', label: '좋아요' }
    ],
    processMedia: [],
    tools: []
  },
  {
    id: 'desk-tour',
    layout: 'tall',
    tags: ['인스타그램 릴스', '실사 촬영'],
    title: '왓츠 온 마이 데스크',
    meta: '닥터조 인스타그램 · 53초 릴스',
    line: '직원 책상 투어로 보여준 스틱형 영양제의 USP',
    video: 'videos/desk-tour.mp4',
    poster: 'images/posters/desk-tour.jpg',
    goal: '스틱형 개별 포장의 장점을 실제 사용 장면으로 보여주기 위해 기획했습니다. 특히 식물마다 필요한 시비량에 맞춰 정량을 넣을 수 있다는 점, 한 번 쓸 만큼만 뜯어 쓰기 때문에 개봉 후 습기로 내용물이 상할 걱정이 없다는 점에 주목했습니다. 이 장점은 제품 컷보다 식물을 직접 키우는 사람의 일상에서 더 설득력 있게 전달된다고 판단해, 직원의 책상을 무대로 삼았습니다.',
    process: [
      '\'왓츠 인 마이 백\' 형식을 책상으로 옮긴 데스크 투어 포맷을 기획했습니다.',
      '직원 두 명을 각각 \'식물에 진심인 사람\'과 \'초보 식집사\'라는 캐릭터로 설정해, 서로 다른 고객층을 대변하게 했습니다.',
      '\'식물 소개 → 고민 → 제품으로 해결\' 흐름으로 구성하고, USP는 자막 한 줄로 압축했습니다(\'뜯어서 몇 알씩\', \'6개월 지속\').',
      '마지막 장면을 "식물 키우세요?"라는 질문으로 끝내 댓글 참여를 유도했습니다.'
    ],
    results: [
      { n: '9,841', label: '조회수' },
      { n: '122', label: '좋아요' },
      { n: '47', label: '저장' }
    ],
    link: 'https://www.instagram.com/reel/DA0OmOIqINq/',
    processMedia: [],
    tools: []
  },
  {
    id: 'potting-soil',
    layout: 'tall',
    tags: ['숏폼 광고', 'AI 제작'],
    title: '분갈이흙',
    meta: '세로 숏폼 광고 · 10초',
    line: '\'섞을 필요 없이 한 번에\'를 10초에 담은 숏폼 광고',
    video: 'videos/potting-soil.mp4',
    poster: 'images/posters/potting-soil.jpg',
    goal: '분갈이를 처음 하는 사람에게는 흙 배합이 가장 큰 진입 장벽이라고 봤습니다. \'섞을 필요 없이 한 번에\'라는 올인원 USP를 10초 안에 전달하는 것을 목표로 삼았습니다.',
    process: [
      '구두, 세탁기, 칵테일 잔처럼 엉뚱한 오브제에 식물을 심어 \'어디에 심든 잘 자란다\'는 메시지를 시각화했습니다.',
      '전체 화면을 그린 톤으로 통일해 브랜드 컬러를 각인시켰습니다.',
      '줌 전환으로 제품 컷에 시선을 모으고, 자막 리듬에 맞춰 USP를 짧게 끊어 배치했습니다.'
    ],
    results: [
      { n: '20,393', label: '조회수' },
      { n: '88', label: '좋아요' },
      { n: '103', label: '저장' }
    ],
    processMedia: [],
    tools: []
  },
  {
    id: 'bug-all-kill',
    layout: 'tall',
    tags: ['홈케어', 'AI 제작'],
    title: '버그올킬',
    meta: '세로 숏폼 광고 · 살충제',
    line: '벌레를 젤리 캐릭터로 바꿔 혐오감을 낮춘 살충제 광고',
    video: 'videos/bug-all-kill.mp4',
    poster: 'images/posters/bug-all-kill.jpg',
    goal: '살충제 광고에서 시청 이탈을 부르는 가장 큰 요인을 벌레에 대한 혐오감으로 봤습니다. 혐오감을 낮추면서도 제품의 강력함은 유지하는 것을 목표로 삼았습니다.',
    process: [
      'Nano Banana로 벌레를 반투명 젤리 질감의 캐릭터로 재해석하고, 배경과 함께 하나의 세계관으로 묶었습니다.',
      'Kling과 Seedance 2.0으로 파티클이 터지고 퍼지는 장면을 만들어 짧은 러닝타임에도 시각적 밀도를 유지했습니다.',
      '제품 컷은 편집 속도를 늦추고 카메라가 천천히 다가가도록 해서, 말랑한 세계관과 대비되는 무게감을 주었습니다.'
    ],
    results: [
      { n: '7,033', label: '조회수' },
      { n: '59', label: '좋아요' },
      { n: '27', label: '저장' }
    ],
    processMedia: [],
    tools: ['Nano Banana', 'Kling', 'Seedance 2.0']
  }
];

/* ── 경력: 경력기술서 표현 그대로 ── */
const career = [
  {
    company: '㈜누보',
    role: '커뮤니케이션본부 브랜드기획팀 · 매니저',
    period: '2년 5개월',
    points: [
      '유튜브 콘텐츠 기획, 촬영, 편집 및 업로드',
      '제품 중심 숏폼 콘텐츠, 현장 촬영, 제품 소개 영상 기획 및 제작',
      '인스타그램 콘텐츠 제작 및 채널 운영',
      '농사 콘텐츠 프로젝트 총괄 · 전사 \'도전왕\' 1등 수상'
    ]
  },
  {
    company: '가족미디어 / 이엘미디어컴퍼니',
    role: '기술국 종합편집실 · 감독',
    period: '6년 9개월',
    points: [
      '예능·교양·다큐 등 방송 프로그램의 자막 디자인 및 대판 디자인',
      '프로그램 분위기에 맞춘 디자인 연출 및 그래픽 요소 기획'
    ]
  },
  {
    company: '미디컴',
    role: '조연출',
    period: '2년 5개월',
    points: [
      '촬영 현장 운영 및 지원',
      '방송용 예고편 제작'
    ]
  }
];

/* ── RENDER ── */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function renderStats() {
  $('#ak-stats').innerHTML = stats.map(s => {
    const body = `
      <span class="ak-stat-num">${esc(s.num)}</span>
      <span class="ak-stat-label">${esc(s.label)}</span>
      <span class="ak-stat-note">${esc(s.note)}${s.href ? ' · 영상 보기 ↗' : ''}</span>`;
    return s.href
      ? `<li><a class="ak-stat" href="${s.href}" target="_blank" rel="noopener">${body}</a></li>`
      : `<li><div class="ak-stat">${body}</div></li>`;
  }).join('');
}

function cardMedia(w) {
  if (w.video) {
    return `<video class="ak-card-video" src="${w.video}" poster="${w.poster}" muted loop playsinline preload="none" aria-hidden="true"></video>`;
  }
  return `<img src="${esc(w.thumb)}" alt="" loading="lazy"><span class="ak-card-play" aria-hidden="true">▶</span>`;
}

function cardResults(w) {
  if (!w.results.length) return '';
  return `<p class="ak-card-results">${w.results.slice(0, 3).map(r => `<span><b>${esc(r.n)}</b> ${esc(r.label)}</span>`).join('')}</p>`;
}

function renderWorks() {
  const block = (w, i) => `
    <article class="ak-card ak-card--${w.layout}">
      <button class="ak-card-hit" type="button" data-ak-work="${w.id}" aria-label="${esc(w.title)} 자세히 보기">
        <div class="ak-card-media">${cardMedia(w)}</div>
        <div class="ak-card-body">
          <p class="ak-card-tags"><span class="ak-card-num">${String(i + 1).padStart(2, '0')}</span>${w.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</p>
          <h3 class="ak-card-title">${esc(w.title)}</h3>
          <p class="ak-card-line">${esc(w.line)}</p>
          ${cardResults(w)}
          <span class="ak-card-more">목표 · 과정 · 결과 보기 →</span>
        </div>
      </button>
    </article>`;
  const indexed = works.map((w, i) => [w, i]);
  const wide = indexed.filter(([w]) => w.layout !== 'tall');
  const tall = indexed.filter(([w]) => w.layout === 'tall');
  $('#ak-grid').innerHTML = wide.map(([w, i]) => block(w, i)).join('')
    + `<div class="ak-tall-row">${tall.map(([w, i]) => block(w, i)).join('')}</div>`;
}

function renderCareer() {
  $('#ak-career').innerHTML = career.map(c => `
    <li class="ak-career-item">
      <div class="ak-career-head">
        <h3>${esc(c.company)}</h3>
        <p>${esc(c.role)} · ${esc(c.period)}</p>
      </div>
      <ul>${c.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
    </li>`).join('');
}

/* 화면에 보이는 카드 영상만 재생한다 */
function watchCardVideos() {
  if (reduceMotion) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const v = e.target;
      if (e.isIntersecting && !sheet.classList.contains('is-open')) { v.preload = 'auto'; v.play().catch(() => {}); }
      else v.pause();
    });
  }, { threshold: 0.35 });
  document.querySelectorAll('.ak-card-video').forEach(v => io.observe(v));
}

/* ── DETAIL SHEET ── */
const sheet = $('#ak-sheet');
const panel = $('#ak-sheet-panel');
let lastFocus = null;

function sheetMedia(w) {
  if (w.driveId) {
    return `<div class="ak-sm ak-sm--wide"><iframe src="https://drive.google.com/file/d/${w.driveId}/preview" allow="autoplay; fullscreen" allowfullscreen title="${esc(w.title)} 영상"></iframe></div>`;
  }
  if (w.layout === 'pano') {
    return `
      <div class="ak-sm ak-sm--pano"><video src="${w.video}" poster="${w.poster}" controls muted autoplay loop playsinline></video></div>
      <div class="ak-slides" aria-label="캐러셀 4장">${w.slides.map((s, i) => `<figure><img src="${s}" alt="캐러셀 ${i + 1}장" loading="lazy"><figcaption>${i + 1} / ${w.slides.length}</figcaption></figure>`).join('')}</div>`;
  }
  return `<div class="ak-sm ak-sm--tall"><video src="${w.video}" poster="${w.poster}" controls autoplay playsinline></video></div>`;
}

function sheetProcessMedia(w) {
  if (!w.processMedia.length) {
    return `<div class="ak-pm-empty">과정 자료 자리 · 기획안, 콘티, 촬영 현장, 인사이트 캡처를 넣을 곳</div>`;
  }
  return `<div class="ak-pm-grid">${w.processMedia.map((src, i) => `<img src="${esc(src)}" alt="${esc(w.title)} 과정 자료 ${i + 1}" loading="lazy">`).join('')}</div>`;
}

function openSheet(id) {
  const w = works.find(x => x.id === id);
  if (!w) return;
  lastFocus = document.activeElement;
  document.querySelectorAll('.ak-card-video').forEach(v => v.pause());

  panel.className = `ak-sheet-panel ak-sheet-panel--${w.layout}`;
  panel.innerHTML = `
    <button class="ak-sheet-close" type="button" data-ak-close aria-label="닫기">✕</button>
    <div class="ak-sheet-media">${sheetMedia(w)}</div>
    <div class="ak-sheet-text">
      <p class="ak-card-tags">${w.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</p>
      <h2 class="ak-sheet-title" id="ak-sheet-title">${esc(w.title)}</h2>
      <p class="ak-sheet-meta">${esc(w.meta)}</p>

      ${w.results.length ? `
      <section class="ak-block">
        <h3>결과</h3>
        <ul class="ak-res">${w.results.map(r => `<li><b>${esc(r.n)}</b><span>${esc(r.label)}</span></li>`).join('')}</ul>
        ${w.link ? `<a class="ak-ext" href="${w.link}" target="_blank" rel="noopener">원본 게시물 보기 ↗</a>` : ''}
      </section>` : ''}

      <section class="ak-block">
        <h3>목표</h3>
        <p>${esc(w.goal)}</p>
      </section>

      <section class="ak-block">
        <h3>과정</h3>
        <ol class="ak-steps">${w.process.map(p => `<li>${esc(p)}</li>`).join('')}</ol>
        ${sheetProcessMedia(w)}
      </section>

      ${w.tools.length ? `
      <section class="ak-block">
        <h3>사용 도구</h3>
        <p class="ak-chips">${w.tools.map(t => `<span>${esc(t)}</span>`).join('')}</p>
      </section>` : ''}
    </div>`;

  sheet.classList.add('is-open');
  sheet.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  panel.scrollTop = 0;
  $('.ak-sheet-close', panel).focus();
}

function closeSheet() {
  if (!sheet.classList.contains('is-open')) return;
  sheet.classList.remove('is-open');
  sheet.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  panel.querySelectorAll('video').forEach(v => v.pause());
  panel.innerHTML = '';
  if (lastFocus) lastFocus.focus();
}

document.addEventListener('click', e => {
  const card = e.target.closest('[data-ak-work]');
  if (card) { openSheet(card.dataset.akWork); return; }
  if (e.target.closest('[data-ak-close]')) closeSheet();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

renderStats();
renderWorks();
renderCareer();
watchCardVideos();
})();
