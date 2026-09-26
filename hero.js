/* A small, dependency-free controller for the portfolio's one focal sequence. */
(() => {
  'use strict';
  const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n));
  const smooth = (a, b, n) => {
    const t = clamp((n - a) / (b - a));
    return t * t * (3 - 2 * t);
  };

  // Eight generated three-second clips, scrubbed forward/backward through real frames.
  // Every route passes through the shared frontal frame; a new target cancels the old one.
  function makeGaze(container, stage) {
    const names = ['up-left', 'up', 'up-right', 'left', 'center', 'right', 'down-left', 'down', 'down-right'];
    const clips = new Map();
    let active = true, target = 'center', current = null, position = 0;
    let x = 0, y = 0, raf = 0, lastTime = 0, starting = false;
    container.dataset.mode = 'video';
    function schedule() {
      if (!raf && active && !document.hidden) raf = requestAnimationFrame(tick);
    }
    function flushSeek() {
      const clip = clips.get(current);
      if (!clip || clip.video.seeking || !clip.ready || starting) return;
      const desired = position * clip.end;
      if (Math.abs(clip.video.currentTime - desired) > .012) clip.video.currentTime = desired;
    }
    names.filter(name => name !== 'center').forEach(name => {
      const video = document.createElement('video');
      video.muted = true; video.playsInline = true; video.preload = 'auto';
      video.setAttribute('aria-hidden', 'true');
      video.tabIndex = -1;
      const clip = { video, ready: false, end: 2.95 };
      clips.set(name, clip);
      video.addEventListener('loadeddata', () => {
        clip.ready = true; clip.end = Math.max(.1, video.duration - .08); schedule();
      });
      video.addEventListener('seeked', () => {
        if (current !== name) return;
        if (starting) { starting = false; lastTime = 0; }
        container.dataset.videoTime = video.currentTime.toFixed(3);
        flushSeek(); schedule();
      });
      video.addEventListener('error', () => {
        clip.ready = false;
        if (current === name) {
          video.classList.remove('is-active'); current = null; position = 0;
          container.dataset.pose = 'center';
        }
      });
      video.src = `assets/character/gaze-motion/${name}.mp4`;
      container.append(video);
    });
    function tick(now) {
      raf = 0;
      if (!active || document.hidden) return;
      const dt = lastTime ? Math.min(40, now - lastTime) : 16;
      lastTime = now;
      if (!current && target !== 'center') {
        const clip = clips.get(target);
        if (!clip?.ready) { lastTime = 0; return; }
        current = target; position = 0;
        starting = clip.video.currentTime > .015;
        if (starting) { clip.video.currentTime = 0; return; }
      }
      if (!current || starting) { lastTime = 0; return; }
      const clip = clips.get(current);
      const goal = target === current ? 1 : 0;
      const step = dt / 420;
      position = goal ? Math.min(1, position + step) : Math.max(0, position - step);
      flushSeek();
      clip.video.classList.toggle('is-active', position > .001);
      container.dataset.pose = current;
      container.dataset.progress = position.toFixed(3);
      if (!goal && position === 0) {
        clip.video.classList.remove('is-active'); current = null;
        container.dataset.pose = 'center';
      }
      if ((current && position !== goal) || (!current && target !== 'center')) schedule();
      else lastTime = 0;
    }
    function axis(value, previous) {
      if (previous === -1 && value < -.20) return -1;
      if (previous === 1 && value > .20) return 1;
      return value < -.34 ? -1 : value > .34 ? 1 : 0;
    }
    stage.addEventListener('pointermove', e => {
      if (!active || e.pointerType === 'touch') return;
      const r = container.getBoundingClientRect();
      x = axis((e.clientX - (r.left + r.width * .487)) / (stage.clientWidth * .42), x);
      y = axis((e.clientY - (r.top + r.height * .345)) / (stage.clientHeight * .45), y);
      const next = names[(y + 1) * 3 + x + 1];
      if (next !== target) { target = next; container.dataset.target = target; schedule(); }
    }, { passive: true });
    stage.addEventListener('pointerleave', () => { x = y = 0; target = 'center'; schedule(); });
    return {
      setActive(value) {
        if (value === active) return;
        active = value;
        if (!value) {
          cancelAnimationFrame(raf); raf = 0; lastTime = 0;
          for (const clip of clips.values()) clip.video.classList.remove('is-active');
          current = null; target = 'center'; position = x = y = 0; starting = false;
          container.dataset.pose = 'center';
        } else schedule();
      }
    };
  }

  window.initPortfolioHero = ({ root, project, openProject, openShowreel, esc }) => {
    const config = window.PORTFOLIO_HERO || {};
    const title = config.title || project.title;
    const thumbnail = config.thumbnail || project.thumbnail || project.poster;
    const isShowreel = String(project.id) === '900';
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
          ${isShowreel ? `<video class="screen-showreel" muted loop playsinline preload="none" poster="${esc(thumbnail)}" aria-hidden="true"></video>` : `<img src="${esc(thumbnail)}" alt="${esc(title)}" decoding="async">`}
        </button>
        <div class="character-copy">
          <h1><span>LEE</span><span>NAHYUN</span></h1>
          <p>현실을 담고,<br> 상상을 만듭니다.</p>
        </div>
        <div class="character-role">AI Creator &amp;<br> Visual Director<small>AI 영상 · 실사 촬영<br>이미지 · 자막디자인 · 웹앱</small></div>
        <p class="character-cue">아래로 스크롤해<br> 작업을 만나보세요.<span aria-hidden="true">↓</span></p>
        <div class="character-project" aria-hidden="true" inert>
          <div><p>${isShowreel ? "Showreel" : "Selected work"}</p><h2>${esc(title)}</h2></div>
          <button class="character-button" type="button">${isShowreel ? "쇼릴 전체 보기" : "작품 자세히 보기"} <span aria-hidden="true">↗</span></button>
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
    const screenVideo = portal.querySelector('video');
    let screenPlaying = false;
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
      portal.style.background = `color-mix(in srgb, #101310 ${100 - zoom * 100}%, var(--paper))`;
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
      if (screenVideo) {
        if (p > .55 && !screenVideo.getAttribute('src') && !disabled) {
          screenVideo.src = project.videoSrc;
          screenVideo.load();
        }
        const shouldPlay = portalOpacity > .05 && !inactive && !disabled;
        if (shouldPlay && !screenPlaying) {
          screenPlaying = true;
          screenVideo.play().catch(() => { screenPlaying = false; });
        } else if (!shouldPlay && screenPlaying) {
          screenPlaying = false;
          screenVideo.pause();
        }
      }
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
    portal.querySelector('img')?.addEventListener('error', () => { portal.querySelector('img').style.visibility = 'hidden'; });
    motionButton.addEventListener('click', fallback);
    const show = callback => {
      screenVideo?.pause(); screenPlaying = false;
      callback(); schedule();
    };
    root.querySelector('#showreel-open').addEventListener('click', () => show(openShowreel));
    portal.addEventListener('click', () => show(() => openProject(project.id)));
    summary.querySelector('button').addEventListener('click', () => show(() => openProject(project.id)));
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
