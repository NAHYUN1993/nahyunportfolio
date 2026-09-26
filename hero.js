/* A small, dependency-free controller for the portfolio's one focal sequence. */
(() => {
  'use strict';
  const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n));
  const smooth = (a, b, n) => {
    const t = clamp((n - a) / (b - a));
    return t * t * (3 - 2 * t);
  };

  // Real rendered head poses, selected by cursor direction. No mesh deformation.
  function makeGaze(container, stage) {
    const names = ['up-left', 'up', 'up-right', 'left', 'center', 'right', 'down-left', 'down', 'down-right'];
    const poses = new Map();
    let active = true, selected = 'center', x = 0, y = 0, frame = 0;
    let pointer = null;
    names.filter(name => name !== 'center').forEach(name => {
      const img = new Image();
      img.alt = ''; img.decoding = 'async';
      img.src = `assets/character/gaze/${name}.webp`;
      img.onload = () => { poses.set(name, img); schedule(); };
      container.append(img);
    });
    function select(name) {
      if (name === selected) return;
      if (name !== 'center' && !poses.has(name)) return;
      for (const [key, img] of poses) img.classList.toggle('is-active', key === name);
      selected = name;
      container.dataset.pose = name;
    }
    function axis(value, previous) {
      // Hysteresis keeps a cursor near a boundary from flickering between poses.
      if (previous === -1 && value < -.20) return -1;
      if (previous === 1 && value > .20) return 1;
      return value < -.34 ? -1 : value > .34 ? 1 : 0;
    }
    function draw() {
      frame = 0;
      if (!active || !pointer || document.hidden) return;
      const r = container.getBoundingClientRect();
      const dx = (pointer.x - (r.left + r.width * .487)) / (stage.clientWidth * .42);
      const dy = (pointer.y - (r.top + r.height * .345)) / (stage.clientHeight * .45);
      x = axis(dx, x); y = axis(dy, y);
      select(names[(y + 1) * 3 + x + 1]);
    }
    function schedule() { if (!frame && active) frame = requestAnimationFrame(draw); }
    stage.addEventListener('pointermove', e => {
      if (!active || e.pointerType === 'touch') return;
      pointer = { x: e.clientX, y: e.clientY }; schedule();
    }, { passive: true });
    stage.addEventListener('pointerleave', () => { pointer = null; x = y = 0; select('center'); });
    return {
      setActive(value) {
        if (active === value) return;
        active = value;
        if (!value) { cancelAnimationFrame(frame); frame = 0; pointer = null; x = y = 0; select('center'); }
        else schedule();
      }
    };
  }

  window.initPortfolioHero = ({ root, project, openProject, openShowreel, esc }) => {
    const config = window.PORTFOLIO_HERO || {};
    const title = config.title || project.title;
    const thumbnail = config.thumbnail || project.thumbnail;
    root.classList.add('character-hero');
    root.innerHTML = `
      <div class="character-stage">
        <div class="character-scene">
          <img class="character-poster" src="assets/character/idle.jpg" width="1920" height="1080" alt="실버 헤드셋을 쓰고 맥북 앞에 앉은 이나현의 캐릭터" fetchpriority="high">
          <video id="hero-video" muted playsinline preload="none" aria-hidden="true" tabindex="-1"></video>
          <img class="character-final" src="assets/character/final-5s.jpg" width="1920" height="1080" alt="" aria-hidden="true" style="opacity:0">
          <div class="character-gaze" aria-hidden="true" data-pose="center"></div>
        </div>
        <button class="screen-portal" type="button" aria-label="${esc(title)} 자세히 보기" tabindex="-1" aria-hidden="true" inert>
          <img src="${esc(thumbnail)}" alt="${esc(title)}" decoding="async">
        </button>
        <div class="character-copy">
          <h1><span>LEE</span><span>NAHYUN</span></h1>
          <p>현실을 담고,<br> 상상을 만듭니다.</p>
        </div>
        <div class="character-role">AI Creator &amp;<br> Visual Director<small>AI 영상 · 실사 촬영<br>이미지 · 자막디자인 · 웹앱</small></div>
        <p class="character-cue">아래로 스크롤해<br> 작업을 만나보세요.<span aria-hidden="true">↓</span></p>
        <div class="character-project" aria-hidden="true" inert>
          <div><p>Selected work</p><h2>${esc(title)}</h2></div>
          <button class="character-button" type="button">작품 자세히 보기 <span aria-hidden="true">↗</span></button>
        </div>
        <div class="character-controls">
          <div class="character-links">
            <button class="character-button" id="showreel-open" type="button" aria-haspopup="dialog"><span aria-hidden="true">▶</span> 쇼릴 전체 보기</button>
            <button class="character-motion" type="button">움직임 끄기</button>
          </div>
          <a class="character-button character-skip" href="#featured">작품 바로 보기 <span aria-hidden="true">↓</span></a>
        </div>
      </div>`;
    const stage = root.querySelector('.character-stage');
    const scene = root.querySelector('.character-scene');
    const video = root.querySelector('video');
    const final = root.querySelector('.character-final');
    const gazeContainer = root.querySelector('.character-gaze');
    const portal = root.querySelector('.screen-portal');
    const summary = root.querySelector('.character-project');
    const intro = [...root.querySelectorAll('.character-copy, .character-role, .character-cue')];
    const controls = root.querySelector('.character-controls');
    const header = document.getElementById('topbar');
    const motionButton = root.querySelector('.character-motion');
    const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
    let disabled = motionQuery.matches || !!navigator.connection?.saveData;
    let videoReady = false, desiredTime = 0, frame = 0, gaze = null;
    let geometry = { width: 1, height: 1, sceneWidth: 1, sceneHeight: 1, left: 0, top: 0 };
    const endTime = 4.9;
    // Measured display interior in the final frame of the new 5-second take.
    const screen = { x: 620 / 1920, y: 572 / 1080, w: 610 / 1920, h: 350 / 1080 };
    header.classList.add('on-character');
    function seek() {
      if (!videoReady || video.seeking || disabled) return;
      const t = Math.min(desiredTime, Math.max(0, video.duration - .05));
      if (Math.abs(video.currentTime - t) > .025) video.currentTime = t;
    }
    function paint() {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const range = Math.max(1, root.offsetHeight - stage.offsetHeight);
      const p = disabled ? 0 : clamp(-rect.top / range);
      const visible = rect.bottom > 0 && rect.top < innerHeight;
      const modalOpen = document.body.classList.contains('no-scroll');
      const inactive = !visible || document.hidden || modalOpen;
      root.dataset.progress = p.toFixed(4);
      desiredTime = clamp(p / .72) * endTime;
      if (!inactive) seek();
      const g = geometry;
      const zoom = smooth(.80, .94, p);
      const endScale = Math.max(g.width / (g.sceneWidth * screen.w), g.height / (g.sceneHeight * screen.h)) * 1.008;
      const scale = 1 + (endScale - 1) * zoom;
      const tx = -(screen.x + screen.w / 2 - .5) * g.sceneWidth * endScale * zoom;
      const mobileLift = g.width <= 780 ? Math.min(90, g.height * .11) * smooth(.06, .22, p) * (1 - zoom) : 0;
      const ty = (g.height / 2 - (g.top + g.sceneHeight / 2) - (screen.y + screen.h / 2 - .5) * g.sceneHeight * endScale) * zoom - mobileLift;
      scene.style.transform = `translate3d(${tx}px,${ty}px,0) scale(${scale})`;
      video.style.opacity = videoReady && p > .001 && p < .723 && !disabled ? '1' : '0';
      final.style.opacity = p >= .72 ? '1' : '0';
      const gazeActive = p < .002 && !disabled && !inactive;
      gaze?.setActive(gazeActive);
      gazeContainer.style.visibility = gazeActive ? 'visible' : 'hidden';
      const introOpacity = 1 - smooth(.005, .11, p);
      intro.forEach(el => { el.style.opacity = introOpacity; el.style.visibility = introOpacity < .01 ? 'hidden' : 'visible'; });
      const portalOpacity = smooth(.73, .79, p);
      portal.style.opacity = portalOpacity;
      portal.style.pointerEvents = portalOpacity > .95 ? 'auto' : 'none';
      portal.tabIndex = portalOpacity > .95 ? 0 : -1;
      portal.inert = portalOpacity <= .95;
      portal.setAttribute('aria-hidden', portalOpacity > .95 ? 'false' : 'true');
      // One live thumbnail grows out of the screen. Its image always fits,
      // including portrait works and narrow mobile viewports.
      const screenX = g.left + g.sceneWidth * screen.x;
      const screenY = g.top + g.sceneHeight * screen.y - mobileLift;
      const screenWidth = g.sceneWidth * screen.w;
      const screenHeight = g.sceneHeight * screen.h;
      portal.style.left = `${screenX * (1 - zoom)}px`;
      portal.style.top = `${screenY * (1 - zoom)}px`;
      portal.style.width = `${screenWidth + (g.width - screenWidth) * zoom}px`;
      portal.style.height = `${screenHeight + (g.height - screenHeight) * zoom}px`;
      const summaryOpacity = smooth(.88, .94, p);
      summary.style.opacity = summaryOpacity;
      summary.classList.toggle('is-visible', summaryOpacity > .1);
      summary.setAttribute('aria-hidden', summaryOpacity > .1 ? 'false' : 'true');
      summary.inert = summaryOpacity <= .1;
      controls.style.opacity = 1 - smooth(.78, .90, p);
      controls.style.visibility = p > .90 ? 'hidden' : 'visible';
      controls.inert = p > .90;
      header.classList.toggle('is-scrolled', p > .86 || rect.bottom < g.height * .5);
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    function measure() {
      scene.style.transform = 'none';
      const width = stage.clientWidth, height = stage.clientHeight;
      const sceneWidth = scene.offsetWidth, sceneHeight = scene.offsetHeight;
      const left = (width - sceneWidth) / 2, top = height - sceneHeight;
      scene.style.left = `${left}px`;
      geometry = { width, height, sceneWidth, sceneHeight, left, top };
      schedule();
    }
    function fallback() {
      disabled = true;
      root.classList.add('character-static');
      video.pause();
      measure();
    }
    function activate() {
      root.classList.toggle('character-static', disabled);
      if (!disabled) {
        if (!video.getAttribute('src')) {
          video.preload = 'auto';
          video.src = 'assets/character/reveal-5s.mp4';
          video.load();
        }
        if (finePointer && !gaze) {
          gaze = makeGaze(gazeContainer, stage);
        }
      }
      measure();
    }
    video.addEventListener('loadeddata', () => { videoReady = true; schedule(); });
    video.addEventListener('seeked', () => { seek(); schedule(); });
    video.addEventListener('error', fallback);
    portal.querySelector('img').addEventListener('error', () => { portal.querySelector('img').style.visibility = 'hidden'; });
    motionButton.addEventListener('click', fallback);
    root.querySelector('#showreel-open').addEventListener('click', openShowreel);
    portal.addEventListener('click', () => openProject(project.id));
    summary.querySelector('button').addEventListener('click', () => openProject(project.id));
    root.querySelector('.character-skip').addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('featured').scrollIntoView({ behavior: 'instant', block: 'start' });
      history.replaceState(null, '', '#featured');
    });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure, { passive: true });
    document.addEventListener('visibilitychange', schedule);
    document.addEventListener('reel-resume', schedule);
    motionQuery.addEventListener('change', e => { disabled = e.matches; activate(); });
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(measure).observe(stage);
    activate();
  };
})();
