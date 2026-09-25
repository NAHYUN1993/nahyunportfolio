/* A small, dependency-free controller for the portfolio's one focal sequence. */
(() => {
  'use strict';
  const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n));
  const smooth = (a, b, n) => {
    const t = clamp((n - a) / (b - a));
    return t * t * (3 - 2 * t);
  };

  // Warp only the interiors of the two eyes. Eyelids, hair and head stay fixed.
  // Positions are measured in the 1920 × 1080 first frame, not viewport pixels.
  function makeGaze(canvas, source, stage) {
    let gl;
    try { gl = canvas.getContext('webgl', { alpha: false, antialias: false }); } catch (_) { return null; }
    if (!gl) return null;
    const vertex = `attribute vec2 p; varying vec2 uv;
      void main(){ uv=vec2((p.x+1.0)*.5,(1.0-p.y)*.5); gl_Position=vec4(p,0.,1.); }`;
    const fragment = `precision mediump float;
      uniform sampler2D image; uniform vec2 gaze; varying vec2 uv;
      float eye(vec2 center, vec2 radius){
        float d=length((uv*vec2(1920.,1080.)-center)/radius);
        return 1.-smoothstep(.30,1.,d);
      }
      void main(){
        float m=max(eye(vec2(850.,370.),vec2(53.,28.)),eye(vec2(1020.,377.),vec2(56.,29.)));
        vec2 offset=gaze*vec2(13./1920.,7./1080.)*m;
        gl_FragColor=texture2D(image,uv-offset);
      }`;
    const shaders = [];
    function shader(type, code) {
      const s = gl.createShader(type);
      gl.shaderSource(s, code); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error('Eye shader unavailable');
      shaders.push(s); return s;
    }
    let program;
    try {
      program = gl.createProgram();
      gl.attachShader(program, shader(gl.VERTEX_SHADER, vertex));
      gl.attachShader(program, shader(gl.FRAGMENT_SHADER, fragment));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
    } catch (_) { return null; }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const location = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    const gazeUniform = gl.getUniformLocation(program, 'gaze');
    let ready = false, active = true, raf = 0;
    let x = 0, y = 0, tx = 0, ty = 0;
    function draw() {
      raf = 0;
      if (!ready || !active || document.hidden) return;
      x += (tx - x) * .18; y += (ty - y) * .18;
      gl.uniform2f(gazeUniform, x, y);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      canvas.dataset.gaze = `${x.toFixed(3)},${y.toFixed(3)}`;
      if (Math.abs(tx - x) + Math.abs(ty - y) > .002) raf = requestAnimationFrame(draw);
    }
    const schedule = () => { if (!raf && active && ready) raf = requestAnimationFrame(draw); };
    const img = new Image();
    img.onload = () => {
      canvas.width = 1920; canvas.height = 1080;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      ready = true; schedule();
    };
    img.src = source;
    stage.addEventListener('pointermove', e => {
      if (!active || e.pointerType === 'touch') return;
      const r = canvas.getBoundingClientRect();
      tx = clamp((e.clientX - (r.left + r.width * .487)) / (stage.clientWidth * .42), -1, 1);
      ty = clamp((e.clientY - (r.top + r.height * .345)) / (stage.clientHeight * .45), -1, 1);
      schedule();
    }, { passive: true });
    stage.addEventListener('pointerleave', () => { tx = ty = 0; schedule(); });
    canvas.addEventListener('webglcontextlost', () => { ready = false; canvas.style.opacity = '0'; });
    return {
      get ready() { return ready; },
      setActive(value) {
        if (value === active) return;
        active = value;
        if (!value) { cancelAnimationFrame(raf); raf = 0; tx = ty = x = y = 0; }
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
          <img class="character-final" src="assets/character/final.jpg" width="1920" height="1080" alt="" aria-hidden="true" style="opacity:0">
          <canvas class="character-gaze" aria-hidden="true"></canvas>
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
    const canvas = root.querySelector('canvas');
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
    const endTime = 11.8;
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
      const zoom = smooth(.80, 1, p);
      const endScale = Math.max(g.width / (g.sceneWidth * .325), g.height / (g.sceneHeight * .338)) * 1.008;
      const scale = 1 + (endScale - 1) * zoom;
      const tx = -(.4907 - .5) * g.sceneWidth * endScale * zoom;
      const mobileLift = g.width <= 780 ? Math.min(90, g.height * .11) * smooth(.06, .22, p) * (1 - zoom) : 0;
      const ty = (g.height / 2 - (g.top + g.sceneHeight / 2) - (.7152 - .5) * g.sceneHeight * endScale) * zoom - mobileLift;
      scene.style.transform = `translate3d(${tx}px,${ty}px,0) scale(${scale})`;
      video.style.opacity = videoReady && p > .001 && p < .723 && !disabled ? '1' : '0';
      final.style.opacity = p >= .72 ? '1' : '0';
      const gazeActive = p < .002 && !disabled && !inactive;
      gaze?.setActive(gazeActive);
      canvas.style.opacity = gazeActive && gaze?.ready ? '1' : '0';
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
      const screenX = g.left + g.sceneWidth * .3282;
      const screenY = g.top + g.sceneHeight * .5462 - mobileLift;
      const screenWidth = g.sceneWidth * .325;
      const screenHeight = g.sceneHeight * .338;
      portal.style.left = `${screenX * (1 - zoom)}px`;
      portal.style.top = `${screenY * (1 - zoom)}px`;
      portal.style.width = `${screenWidth + (g.width - screenWidth) * zoom}px`;
      portal.style.height = `${screenHeight + (g.height - screenHeight) * zoom}px`;
      const summaryOpacity = smooth(.94, 1, p);
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
          video.src = 'assets/character/reveal.mp4';
          video.load();
        }
        if (finePointer && !gaze) {
          gaze = makeGaze(canvas, 'assets/character/idle.jpg', stage);
          // Redraw once the image has uploaded to the GPU, without an idle loop.
          const loaded = new Image(); loaded.onload = schedule; loaded.src = 'assets/character/idle.jpg';
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
