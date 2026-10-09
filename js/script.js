/**
 * SNEHA AMBALLA — ASYMMETRIC EDITORIAL ORCHESTRATION
 * Features:
 * 1. Shutter boot veil & quantum handshake timeline
 * 2. GPU-Accelerated Fluid Holographic Particle Field
 * 3. Curtain-mask editorial typography entrance
 * 4. Word-by-word statement deblur reveal
 * 5. Synthesized Web Audio API soundscape & feedback (zero audio asset dependencies)
 * 6. Live world clock (Hyderabad, IN)
 * 7. Lenis smooth scroll & 3D camera fly-through
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Fluid Holographic Field
  const field = new window.FluidHolographicField('webgl-canvas');

  // 2. Initialize Lenis Smooth Scroll
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Split statement into animated word spans
  const statementTextEl = document.getElementById('statementText');
  if (statementTextEl) {
    const rawWords = statementTextEl.innerText.trim().split(/\s+/);
    statementTextEl.innerHTML = rawWords
      .map(word => `<span class="word">${word}</span>`)
      .join(' ');
  }

  // Cache DOM elements
  const bootVeil = document.getElementById('bootVeil');
  const bootStatus = document.getElementById('bootStatus');
  const bootCounter = document.getElementById('bootCounter');
  const progressBar = document.getElementById('progressBar');
  const tagAI = document.getElementById('tagAI');
  const tagData = document.getElementById('tagData');
  const tagSoftware = document.getElementById('tagSoftware');
  const editorialFrame = document.getElementById('editorialFrame');
  const identityBadge = document.getElementById('identityBadge');
  const nameSnehaChars = document.querySelectorAll('#nameSneha .char');
  const nameAmballaChars = document.querySelectorAll('#nameAmballa .char');
  const verticalAccentLine = document.querySelector('.vertical-accent-line');
  const statementWords = document.querySelectorAll('#statementText .word');
  const heroActions = document.getElementById('heroActions');
  const exploreBtn = document.getElementById('exploreBtn');
  const heroLayout = document.getElementById('heroLayout');
  const skipBtn = document.getElementById('skipBtn');
  const replayBtn = document.getElementById('replayBtn');
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const clockTime = document.getElementById('clockTime');
  const soundToggle = document.getElementById('soundToggle');
  const soundLabel = document.getElementById('soundLabel');
  const scrollCurrent = document.getElementById('scrollCurrent');

  // ==========================================================================
  // LIVE WORLD CLOCK (Hyderabad, IN)
  // ==========================================================================
  function updateWorldClock() {
    if (!clockTime) return;
    const now = new Date();
    // Format to Asia/Kolkata
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    try {
      const timeStr = new Intl.DateTimeFormat('en-GB', options).format(now);
      clockTime.textContent = timeStr;
    } catch {
      const pad = (n) => String(n).padStart(2, '0');
      clockTime.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    }
  }
  updateWorldClock();
  setInterval(updateWorldClock, 1000);

  // ==========================================================================
  // SYNTHESIZED WEB AUDIO API SOUNDSCAPE
  // Generates studio-grade ambient drone & cyber feedback with zero external files
  // ==========================================================================
  let audioCtx = null;
  let isSoundEnabled = false;
  let ambientDroneGain = null;

  function initAudioEngine() {
    if (audioCtx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    audioCtx = new AudioContextClass();

    // Create Ambient Sub-Bass Drone (55Hz / 110Hz Sine with Lowpass Filter)
    const masterDroneGain = audioCtx.createGain();
    masterDroneGain.gain.setValueAtTime(0, audioCtx.currentTime);

    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(140, audioCtx.currentTime);

    const osc1 = audioCtx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // A1 note

    const osc2 = audioCtx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(110.5, audioCtx.currentTime); // subtle beat frequency

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(masterDroneGain);
    masterDroneGain.connect(audioCtx.destination);

    osc1.start();
    osc2.start();

    ambientDroneGain = masterDroneGain;
  }

  function toggleSound() {
    if (!audioCtx) initAudioEngine();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isSoundEnabled = !isSoundEnabled;

    if (isSoundEnabled) {
      soundToggle.classList.add('active');
      soundLabel.textContent = "SOUND [ON]";
      if (ambientDroneGain) {
        ambientDroneGain.gain.setTargetAtTime(0.045, audioCtx.currentTime, 0.4);
      }
      if (soundToggle) soundToggle.classList.add('active');
      if (soundLabel) soundLabel.textContent = "SOUND [ON]";
      if (soundToggleBtn) {
        soundToggleBtn.classList.add('active');
        const lbl = soundToggleBtn.querySelector('.sound-label');
        if (lbl) lbl.textContent = "AUDIO: ON";
      }
      if (ambientDroneGain) {
        ambientDroneGain.gain.setTargetAtTime(0.015, audioCtx.currentTime, 0.4);
      }
      playSyntheticClick(440, 0.05, 'triangle');
    } else {
      if (soundToggle) soundToggle.classList.remove('active');
      if (soundLabel) soundLabel.textContent = "SOUND [OFF]";
      if (soundToggleBtn) {
        soundToggleBtn.classList.remove('active');
        const lbl = soundToggleBtn.querySelector('.sound-label');
        if (lbl) lbl.textContent = "AUDIO: OFF";
      }
      if (ambientDroneGain) {
        ambientDroneGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.3);
      }
    }
  }

  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggle) soundToggle.addEventListener('click', toggleSound);
  if (soundToggleBtn) soundToggleBtn.addEventListener('click', toggleSound);

  // Initialize audio on first user interaction
  window.addEventListener('pointerdown', () => {
    if (!audioCtx) initAudioEngine();
  }, { once: true });

  function playSyntheticClick(freq = 600, duration = 0.04, type = 'sine') {
    if (!isSoundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {}
  }

  // ==========================================================================
  // GSAP CINEMATIC SHUTTER BOOT TIMELINE
  // ==========================================================================
  let masterTl = gsap.timeline();
  let introCompleted = false;

  function buildCinematicTimeline() {
    masterTl.clear();
    masterTl = gsap.timeline({
      onComplete: () => {
        introCompleted = true;
        enableUserInteractivity();
        document.body.classList.remove('loading');
        const siteHeader = document.getElementById('siteHeader');
        if (siteHeader) siteHeader.classList.add('visible');
      }
    });

    // Initial state setup
    bootVeil.classList.remove('open', 'completed');
    if (editorialFrame) editorialFrame.classList.remove('visible');
    gsap.set(progressBar, { width: '0%' });
    gsap.set(bootCounter, { textContent: '00%' });
    gsap.set([tagAI, tagData, tagSoftware], { className: '-=active' });

    // Elements for Section 01 // HOME
    const homeCatTag = document.getElementById('homeCategoryTag');
    const homeHeadline = document.getElementById('homeHeadline');
    const homeStatement = document.getElementById('homeStatement');
    const homeSkillPills = document.querySelectorAll('#homeSkillPills .skill-pill');
    const homeCtaGroup = document.getElementById('homeCtaGroup');
    const homeScrollInd = document.getElementById('homeScrollIndicator');
    const thinkingPipeline = document.getElementById('thinkingPipeline');
    const pipelineTiers = document.querySelectorAll('.pipeline-tier');
    const thinkingSparkles = document.querySelectorAll('.thinking-sparkle');

    if (homeCatTag) gsap.set(homeCatTag, { opacity: 0, y: 15 });
    if (homeHeadline) gsap.set(homeHeadline, { opacity: 0, y: 25 });
    if (homeStatement) gsap.set(homeStatement, { opacity: 0, y: 18 });
    if (homeSkillPills.length) gsap.set(homeSkillPills, { opacity: 0, y: 12 });
    if (homeCtaGroup) gsap.set(homeCtaGroup, { opacity: 0, y: 18 });
    if (homeScrollInd) gsap.set(homeScrollInd, { opacity: 0, y: 12 });
    if (thinkingPipeline) gsap.set(thinkingPipeline, { opacity: 0, scale: 0.95 });
    if (pipelineTiers.length) gsap.set(pipelineTiers, { opacity: 0, x: 20, yPercent: -50 });
    if (thinkingSparkles.length) gsap.set(thinkingSparkles, { opacity: 0, scale: 0.6 });

    // 0.2s: Laser bar begins moving
    masterTl.call(() => {
      if (bootStatus) bootStatus.textContent = "ESTABLISHING QUANTUM LINK...";
    }, null, 0.2);

    masterTl.to(progressBar, {
      width: "100%",
      duration: 0.85,
      ease: "power2.inOut",
      onUpdate: function() {
        const p = Math.round(this.progress() * 100);
        const pad = p < 10 ? '0' + p : '' + p;
        if (bootCounter) bootCounter.textContent = pad + '%';
      }
    }, 0.2);

    // 0.45s: NEURAL_AI tag activates
    masterTl.call(() => {
      if (bootStatus) bootStatus.textContent = "NEURAL AI INITIALIZED";
      if (tagAI) tagAI.classList.add('active');
      playSyntheticClick(520, 0.05);
    }, null, 0.45);

    // 0.65s: DATA_FABRIC tag activates
    masterTl.call(() => {
      if (bootStatus) bootStatus.textContent = "DATA FABRIC MAPPED";
      if (tagData) tagData.classList.add('active');
      playSyntheticClick(660, 0.05);
    }, null, 0.65);

    // 0.85s: SOFTWARE_CORE tag activates
    masterTl.call(() => {
      if (bootStatus) bootStatus.textContent = "SOFTWARE CORE ONLINE";
      if (tagSoftware) tagSoftware.classList.add('active');
      playSyntheticClick(820, 0.06);
    }, null, 0.85);

    // 1.05s: SHUTTER REVEAL! Shutter splits, particle field awakens
    masterTl.call(() => {
      bootVeil.classList.add('open');
      field.reveal(1.2);
      if (editorialFrame) editorialFrame.classList.add('visible');
      playSyntheticClick(330, 0.12, 'sawtooth');
    }, null, 1.05);

    masterTl.call(() => {
      bootVeil.classList.add('completed');
    }, null, 1.4);

    // 1.15s: Home Section Elements Entrance (Snappy, professional timing)
    if (homeCatTag) {
      masterTl.to(homeCatTag, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 1.15);
    }
    if (homeHeadline) {
      masterTl.to(homeHeadline, { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }, 1.25);
    }
    if (thinkingPipeline) {
      masterTl.to(thinkingPipeline, { opacity: 1, scale: 1, duration: 0.85, ease: "power3.out" }, 1.2);
    }
    if (pipelineTiers.length) {
      masterTl.to(pipelineTiers, { opacity: 1, x: 0, yPercent: -50, duration: 0.6, stagger: 0.06, ease: "power3.out" }, 1.3);
    }
    if (thinkingSparkles.length) {
      masterTl.to(thinkingSparkles, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: "back.out(1.4)" }, 1.35);
    }
    if (homeStatement) {
      masterTl.to(homeStatement, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 1.45);
    }
    if (homeSkillPills.length) {
      masterTl.to(homeSkillPills, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }, 1.55);
    }
    if (homeCtaGroup) {
      masterTl.to(homeCtaGroup, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }, 1.65);
    }
    if (homeScrollInd) {
      masterTl.to(homeScrollInd, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 1.75);
    }
  }

  function skipIntro() {
    if (introCompleted) return;
    masterTl.progress(1);
    bootVeil.classList.add('open', 'completed');
    if (editorialFrame) editorialFrame.classList.add('visible');
    field.reveal(0.3);
    introCompleted = true;
    enableUserInteractivity();
    document.body.classList.remove('loading');
    const siteHeader = document.getElementById('siteHeader');
    if (siteHeader) siteHeader.classList.add('visible');

    const homeCatTag = document.getElementById('homeCategoryTag');
    const homeHeadline = document.getElementById('homeHeadline');
    const thinkingPipeline = document.getElementById('thinkingPipeline');
    const homeStatement = document.getElementById('homeStatement');
    const homeSkillPills = document.querySelectorAll('#homeSkillPills .skill-pill');
    const homeCtaGroup = document.getElementById('homeCtaGroup');
    const homeScrollInd = document.getElementById('homeScrollIndicator');
    const pipelineTiers = document.querySelectorAll('.pipeline-tier');
    const thinkingSparkles = document.querySelectorAll('.thinking-sparkle');

    if (homeCatTag) gsap.set(homeCatTag, { opacity: 1, y: 0 });
    if (homeHeadline) gsap.set(homeHeadline, { opacity: 1, y: 0 });
    if (thinkingPipeline) gsap.set(thinkingPipeline, { opacity: 1, scale: 1 });
    if (pipelineTiers.length) gsap.set(pipelineTiers, { opacity: 1, x: 0, yPercent: -50 });
    if (thinkingSparkles.length) gsap.set(thinkingSparkles, { opacity: 1, scale: 1 });
    if (homeStatement) gsap.set(homeStatement, { opacity: 1, y: 0 });
    if (homeSkillPills.length) gsap.set(homeSkillPills, { opacity: 1, y: 0 });
    if (homeCtaGroup) gsap.set(homeCtaGroup, { opacity: 1, y: 0 });
    if (homeScrollInd) gsap.set(homeScrollInd, { opacity: 1, y: 0 });
    try { sessionStorage.setItem('sneha_boot_done', 'true'); } catch (e) {}
  }

  // Check if returning visitor in same session
  if (sessionStorage.getItem('sneha_boot_done') === 'true') {
    skipIntro();
  } else {
    buildCinematicTimeline();
  }

  const bootSkipBtn = document.getElementById('bootSkipBtn');
  if (bootSkipBtn) bootSkipBtn.addEventListener('click', skipIntro);
  if (skipBtn) skipBtn.addEventListener('click', skipIntro);
  if (bootVeil) {
    bootVeil.addEventListener('click', () => {
      if (!introCompleted) skipIntro();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (!introCompleted && (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter')) {
      skipIntro();
    }
  });

  // Replay Intro
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      introCompleted = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      buildCinematicTimeline();
    });
  }

  // ==========================================================================
  // CUSTOM CURSOR & MAGNETIC BEHAVIOR
  // ==========================================================================
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.16;
    cursorY += (mouseY - cursorY) * 0.16;

    if (cursorRing) {
      cursorRing.style.left = `${cursorX}px`;
      cursorRing.style.top = `${cursorY}px`;
    }

    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover states for cursor expansion
  const interactiveTargets = document.querySelectorAll('button, a, .char, .spec-card');
  interactiveTargets.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  // Character hover sound feedback
  document.querySelectorAll('.char').forEach((charEl, idx) => {
    charEl.addEventListener('mouseenter', () => {
      playSyntheticClick(350 + idx * 45, 0.04);
    });
  });

  function enableUserInteractivity() {
    // 1. Explore button hover: dynamically scatters the fluid holographic particle field!
    if (exploreBtn) {
      exploreBtn.addEventListener('mouseenter', () => {
        field.scatter(1.15);
        playSyntheticClick(580, 0.07, 'triangle');
      });

      // Magnetic pull on button
      exploreBtn.addEventListener('mousemove', (e) => {
        const rect = exploreBtn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - btnCenterX) * 0.35;
        const deltaY = (e.clientY - btnCenterY) * 0.35;

        gsap.to(exploreBtn, {
          x: deltaX,
          y: deltaY,
          duration: 0.25,
          ease: "power2.out"
        });
      });

      exploreBtn.addEventListener('mouseleave', () => {
        gsap.to(exploreBtn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      });
    }

    // 2. Subtle 3D Asymmetric Perspective tilt on mousemove
    window.addEventListener('mousemove', (e) => {
      if (!introCompleted || !heroLayout) return;
      const xPct = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPct = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(heroLayout, {
        rotationY: xPct * 3.5,
        rotationX: -yPct * 3.5,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }

  // ==========================================================================
  // SCROLL-DRIVEN 3D FLY-THROUGH CHOREOGRAPHY
  // ==========================================================================
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // ==========================================================================
    // SECTION 01 & 02: HOME & THINKING PIPELINE ORCHESTRATION
    // ==========================================================================
    const homeSection = document.getElementById('homeSection');
    const homeExploreBtn = document.getElementById('homeExploreBtn');
    const homeConnectBtn = document.getElementById('homeConnectBtn');
    const pipelineTiers = document.querySelectorAll('.pipeline-tier');

    // Smooth ScrollTrigger depth effect on homeSection exit
    if (homeSection) {
      ScrollTrigger.create({
        trigger: "#homeSection",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          if (field) field.setScrollProgress(progress);
          
          const leftCol = document.querySelector('.home-left-col');
          const rightCol = document.getElementById('thinkingPipeline');
          
          if (leftCol) {
            gsap.set(leftCol, {
              y: progress * -60,
              opacity: Math.max(0, 1 - progress * 1.6),
              scale: 1 - progress * 0.08
            });
          }
          if (rightCol) {
            gsap.set(rightCol, {
              y: progress * -40,
              opacity: Math.max(0, 1 - progress * 1.5),
              scale: 1 - progress * 0.06
            });
          }
        }
      });
    }

    // Magnetic pull and micro-interactions for Explore button
    if (homeExploreBtn) {
      homeExploreBtn.addEventListener('mouseenter', () => {
        if (field) field.scatter(1.15);
        playSyntheticClick(580, 0.06, 'triangle');
      });

      homeExploreBtn.addEventListener('mousemove', (e) => {
        const rect = homeExploreBtn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - btnCenterX) * 0.32;
        const deltaY = (e.clientY - btnCenterY) * 0.32;

        gsap.to(homeExploreBtn, {
          x: deltaX,
          y: deltaY,
          duration: 0.25,
          ease: "power2.out"
        });
      });

      homeExploreBtn.addEventListener('mouseleave', () => {
        gsap.to(homeExploreBtn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      });

      homeExploreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        playSyntheticClick(640, 0.08, 'sine');
        const workSec = document.getElementById('workSection');
        if (workSec) {
          if (lenis) {
            lenis.scrollTo(workSec, { duration: 1.2, offset: -20 });
          } else {
            workSec.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }

    // Connect button audio & smooth navigation
    if (homeConnectBtn) {
      homeConnectBtn.addEventListener('mouseenter', () => {
        playSyntheticClick(500, 0.05, 'triangle');
      });

      homeConnectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        playSyntheticClick(680, 0.08, 'sine');
        const contactSec = document.getElementById('contactSection');
        if (contactSec) {
          if (lenis) {
            lenis.scrollTo(contactSec, { duration: 1.4 });
          } else {
            contactSec.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }

    // Pipeline Stage Nodes Hover Feedback
    pipelineTiers.forEach((tier, idx) => {
      tier.addEventListener('mouseenter', () => {
        playSyntheticClick(480 + idx * 60, 0.05, 'triangle');
      });

      tier.addEventListener('click', () => {
        playSyntheticClick(520 + idx * 80, 0.08, 'sine');
      });
    });

    // Interactive Movable Sparkles around Thinking Pipeline
    const thinkingSparklesContainer = document.getElementById('thinkingSparkles');
    if (thinkingSparklesContainer) {
      const sparkles = thinkingSparklesContainer.querySelectorAll('.thinking-sparkle');
      const homeSec = document.getElementById('homeSection');
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Click & hover audio on individual sparkles
      sparkles.forEach((sparkle, idx) => {
        sparkle.addEventListener('mouseenter', () => {
          playSyntheticClick(840 + idx * 65, 0.04, 'triangle');
        });
        sparkle.addEventListener('click', () => {
          playSyntheticClick(1020 + idx * 80, 0.08, 'sine');
          gsap.fromTo(sparkle, 
            { scale: 1.6, filter: 'drop-shadow(0 0 12px #00ffa3) drop-shadow(0 0 20px #ffffff)' }, 
            { scale: 1, filter: 'drop-shadow(0 0 4px rgba(0, 255, 163, 0.55))', duration: 0.6, ease: "elastic.out(1, 0.4)" }
          );
        });
      });

      // Cursor-reactive dynamic floating motion ("Movable")
      if (!prefersReducedMotion && sparkles.length > 0) {
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const handleSparkleMouseMove = (e) => {
          const rect = thinkingSparklesContainer.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          targetX = (e.clientX - centerX) / (window.innerWidth * 0.45);
          targetY = (e.clientY - centerY) / (window.innerHeight * 0.45);
        };

        if (homeSec) {
          homeSec.addEventListener('mousemove', handleSparkleMouseMove, { passive: true });
          homeSec.addEventListener('mouseleave', () => {
            targetX = 0;
            targetY = 0;
          }, { passive: true });
        }

        const animateMovableSparkles = () => {
          mouseX += (targetX - mouseX) * 0.055;
          mouseY += (targetY - mouseY) * 0.055;

          sparkles.forEach((sparkle) => {
            const depth = parseFloat(sparkle.getAttribute('data-depth')) || 0.05;
            const shiftX = mouseX * depth * 260;
            const shiftY = mouseY * depth * 260;
            sparkle.style.transform = `translate3d(calc(-50% + ${shiftX.toFixed(2)}px), calc(-50% + ${shiftY.toFixed(2)}px), 0)`;
          });

          requestAnimationFrame(animateMovableSparkles);
        };
        requestAnimationFrame(animateMovableSparkles);
      }
    }

    // Navbar Links Smooth Scrolling
    const headerNavLinks = document.querySelectorAll('.site-header .nav-link');
    headerNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          playSyntheticClick(540, 0.05, 'triangle');
          
          if (targetId === '#thinkingPipeline') {
            const pipe = document.getElementById('thinkingPipeline');
            if (pipe) {
              if (window.innerWidth <= 1024) {
                if (lenis) lenis.scrollTo(pipe, { duration: 1.2, offset: -80 });
                else pipe.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              gsap.fromTo(pipe, { scale: 0.98 }, { scale: 1.02, duration: 0.35, yoyo: true, repeat: 1, ease: "power2.out" });
            }
          } else {
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
              if (lenis) {
                lenis.scrollTo(targetEl, { duration: 1.2, offset: -30 });
              } else {
                targetEl.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }

          headerNavLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });

    // Scroll-Spy: update active nav link as sections enter viewport
    const spySections = [
      { id: 'contactSection', link: document.querySelector('.site-header .nav-link[data-target="contactSection"]') },
      { id: 'achievementsSection', link: document.querySelector('.site-header .nav-link[data-target="achievementsSection"]') },
      { id: 'toolboxSection', link: document.querySelector('.site-header .nav-link[data-target="toolboxSection"]') },
      { id: 'workSection', link: document.querySelector('.site-header .nav-link[data-target="workSection"]') },
      { id: 'homeSection', link: document.querySelector('.site-header .nav-link[data-target="homeSection"]') }
    ];

    function updateNavScrollSpy() {
      const scrollY = window.scrollY;
      const winH = window.innerHeight;

      if (scrollY < winH * 0.5) {
        headerNavLinks.forEach(l => l.classList.remove('active'));
        const homeLink = document.querySelector('.site-header .nav-link[data-target="homeSection"]');
        if (homeLink) homeLink.classList.add('active');
        return;
      }

      for (let i = 0; i < spySections.length; i++) {
        const item = spySections[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= winH * 0.45 && rect.bottom >= winH * 0.15) {
            headerNavLinks.forEach(l => l.classList.remove('active'));
            if (item.link) item.link.classList.add('active');
            break;
          }
        }
      }
    }

    window.addEventListener('scroll', updateNavScrollSpy, { passive: true });


        // ==========================================================================
    // SECTION 03: HORIZONTAL PROJECTS RAIL & TACTILE CARDS CONTROLLER
    // ==========================================================================
    const workHeaderLine = document.getElementById('workHeaderLine');
    const projectShowcaseViewport = document.getElementById('projectShowcaseViewport');
    const projectShowcaseTrack = document.getElementById('projectShowcaseTrack');
    const projectCards = document.querySelectorAll('.project-card');
    const workAmbientGlow = document.getElementById('workAmbientGlow');
    const workCurrentIndex = document.getElementById('workCurrentIndex');
    const workProgressFill = document.getElementById('workProgressFill');
    const workPrevBtn = document.getElementById('workPrevBtn');
    const workNextBtn = document.getElementById('workNextBtn');
    const workTrackPrevBtn = document.getElementById('workTrackPrevBtn');
    const workTrackNextBtn = document.getElementById('workTrackNextBtn');
    const panoramaTabs = document.querySelectorAll('.panorama-tab-btn');
    const projectFilterPills = document.querySelectorAll('#workCategoryFilters .work-filter-pill');
    const systemArchModal = document.getElementById('systemArchModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const blueprintLightboxModal = document.getElementById('blueprintLightboxModal');
    const blueprintLightboxBackdrop = document.getElementById('blueprintLightboxBackdrop');
    const blueprintLightboxCloseBtn = document.getElementById('blueprintLightboxCloseBtn');
    const blSystemCode = document.getElementById('blSystemCode');
    const blSystemTitle = document.getElementById('blSystemTitle');
    const blModalImg = document.getElementById('blModalImg');
    const blGithubLink = document.getElementById('blGithubLink');
    const blSwitchBtns = document.querySelectorAll('.bl-switch-btn');

    let currentProjectIndex = 0;

    // Section header divider line expansion trigger
    if (workHeaderLine) {
      ScrollTrigger.create({
        trigger: "#workSection",
        start: "top 80%",
        onEnter: () => {
          workHeaderLine.style.width = "100%";
        }
      });
    }

    // Ambient Glow Presets per Project (themed per-project accent)
    const glowThemes = [
      { bg: 'radial-gradient(circle, rgba(0, 229, 153, 0.16) 0%, rgba(0, 229, 153, 0.03) 50%, transparent 75%)', x: '-20%' },
      { bg: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.03) 50%, transparent 75%)', x: '0%' },
      { bg: 'radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, rgba(6, 182, 212, 0.03) 50%, transparent 75%)', x: '20%' }
    ];

    function updateAmbientGlow(index) {
      if (!workAmbientGlow) return;
      const theme = glowThemes[index] || glowThemes[0];
      workAmbientGlow.style.background = theme.bg;
      workAmbientGlow.style.transform = `translate(calc(-50% + ${theme.x}), -50%)`;
    }

    // Update UI telemetry states (tabs, index badge, progress bar)
    function updateProjectState(index) {
      if (index < 0 || index >= projectCards.length) return;
      currentProjectIndex = index;

      // Update Panorama Tabs
      panoramaTabs.forEach((tab, i) => {
        const isActive = i === index;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // Update 01 / 04 Counter Badge
      if (workCurrentIndex) {
        workCurrentIndex.textContent = `0${index + 1}`;
      }

      // Update Progress Bar Fill
      if (workProgressFill) {
        const progressPct = ((index + 1) / projectCards.length) * 100;
        workProgressFill.style.width = `${progressPct}%`;
      }

      // Update Ambient Backdrop Glow
      updateAmbientGlow(index);
    }

    // Smooth programmatic scroll to a specific project card
    function scrollToProject(index) {
      if (index < 0 || index >= projectCards.length || !projectShowcaseTrack) return;
      const targetCard = projectCards[index];
      if (targetCard) {
        const trackRect = projectShowcaseTrack.getBoundingClientRect();
        const cardRect = targetCard.getBoundingClientRect();
        const targetScrollLeft = projectShowcaseTrack.scrollLeft + (cardRect.left - trackRect.left) - 16;
        projectShowcaseTrack.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth'
        });
      }
      updateProjectState(index);
    }

    // Real-time track scroll listener to update index & progress bar
    if (projectShowcaseTrack) {
      projectShowcaseTrack.addEventListener('scroll', () => {
        const trackLeft = projectShowcaseTrack.getBoundingClientRect().left;
        let closestIdx = 0;
        let minDistance = Infinity;

        projectCards.forEach((card, idx) => {
          const cardLeft = card.getBoundingClientRect().left;
          const dist = Math.abs(cardLeft - trackLeft - 20);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        });

        if (closestIdx !== currentProjectIndex) {
          updateProjectState(closestIdx);
        }
      }, { passive: true });

      // Mouse Wheel to Horizontal Scroll Translation (Intuitive on Desktop)
      projectShowcaseTrack.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          projectShowcaseTrack.scrollLeft += e.deltaY * 0.95;
        }
      }, { passive: false });

      // Mouse Click-and-Drag Panning (Grab & Scroll)
      let isTrackDown = false;
      let startTrackX = 0;
      let trackScrollStart = 0;

      projectShowcaseTrack.addEventListener('mousedown', (e) => {
        if (e.target.closest('button, a, input')) return;
        isTrackDown = true;
        projectShowcaseTrack.style.cursor = 'grabbing';
        startTrackX = e.pageX - projectShowcaseTrack.offsetLeft;
        trackScrollStart = projectShowcaseTrack.scrollLeft;
      });

      window.addEventListener('mouseup', () => {
        if (isTrackDown) {
          isTrackDown = false;
          if (projectShowcaseTrack) projectShowcaseTrack.style.cursor = '';
        }
      });

      projectShowcaseTrack.addEventListener('mousemove', (e) => {
        if (!isTrackDown) return;
        e.preventDefault();
        const x = e.pageX - projectShowcaseTrack.offsetLeft;
        const walk = (x - startTrackX) * 1.5;
        projectShowcaseTrack.scrollLeft = trackScrollStart - walk;
      });
    }

    // Panorama Arrow Buttons: Advances smoothly through the project cards
    const handlePrev = () => {
      const prevIdx = (currentProjectIndex - 1 + projectCards.length) % projectCards.length;
      scrollToProject(prevIdx);
      playSyntheticClick(440, 0.04, 'sine');
    };

    const handleNext = () => {
      const nextIdx = (currentProjectIndex + 1) % projectCards.length;
      scrollToProject(nextIdx);
      playSyntheticClick(580, 0.04, 'sine');
    };

    if (workPrevBtn) workPrevBtn.addEventListener('click', handlePrev);
    if (workNextBtn) workNextBtn.addEventListener('click', handleNext);
    if (workTrackPrevBtn) workTrackPrevBtn.addEventListener('click', handlePrev);
    if (workTrackNextBtn) workTrackNextBtn.addEventListener('click', handleNext);

    // Panorama Tab Click Listeners
    panoramaTabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        scrollToProject(idx);
        playSyntheticClick(480 + idx * 80, 0.04, 'triangle');
      });
    });

    // Category Domain Filters
    projectFilterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const filter = pill.getAttribute('data-filter');
        projectFilterPills.forEach(p => p.classList.toggle('active', p === pill));

        // Jump to matching project
        if (filter === 'all' || filter === 'civic') {
          scrollToProject(0);
        } else if (filter === 'rag') {
          scrollToProject(1);
        } else if (filter === 'nl2sql') {
          scrollToProject(2);
        }

        // Highlight matching card with glow ping
        projectCards.forEach(card => {
          const domain = card.getAttribute('data-domain');
          const isMatch = filter === 'all' || domain === filter;
          if (isMatch) {
            gsap.fromTo(card, 
              { scale: 0.98, borderColor: 'rgba(0, 229, 153, 0.9)' },
              { scale: 1, borderColor: 'rgba(0, 229, 153, 0.2)', duration: 0.5, ease: 'power2.out' }
            );
          }
        });

        playSyntheticClick(580, 0.04, 'triangle');
      });
    });

    // Keyboard Arrow Keys Navigation when work section is in view
    window.addEventListener('keydown', (e) => {
      const workSec = document.getElementById('workSection');
      if (!workSec) return;
      const rect = workSec.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
      if (inView) {
        if (e.key === 'ArrowLeft') {
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        }
      }
    });

    // Bug-Free Card Hover Spotlight & 3D Gyroscopic Perspective Tilt
    if (projectCards && projectCards.length > 0) {
      projectCards.forEach((card, index) => {
        // Hover enter
        card.addEventListener('mouseenter', () => {
          if (projectCardsList) projectCardsList.classList.add('has-card-hover');
          updateAmbientGlow(index);
          playSyntheticClick(450 + index * 80, 0.04, 'sine');
        });

        // Mousemove 3D perspective & spotlight tracking with locally declared coordinates
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          // CSS variables for radial spotlight
          card.style.setProperty('--mouse-x', `${mouseX}px`);
          card.style.setProperty('--mouse-y', `${mouseY}px`);

          // Subtle 3D tilt on wider desktop viewports
          if (window.innerWidth > 900) {
            const xPct = (mouseX / rect.width - 0.5) * 2;
            const yPct = (mouseY / rect.height - 0.5) * 2;
            card.style.transform = `perspective(1200px) rotateX(${-yPct * 1.8}deg) rotateY(${xPct * 1.8}deg) translateY(-2px)`;
          }
        });

        // Hover leave
        card.addEventListener('mouseleave', () => {
          if (projectCardsList) projectCardsList.classList.remove('has-card-hover');
          card.style.transform = '';
          updateAmbientGlow(currentProjectIndex);
        });
      });
    }

    // ==========================================================================
    // SYSTEM ARCHITECTURE DEEP-DIVE MODAL CONTROLLER
    // ==========================================================================
    const projectModalData = {
      project1: {
        index: "SYS-01",
        tag: "CIVIC PLATFORM",
        title: "AI-Powered Civic Issue Management Platform",
        subtitle: "A full-stack platform for reporting and managing civic issues, featuring role-based workflows and AI-powered issue categorization and spam screening.",
        github: "https://github.com/Sneha-Amballa/smart-civic-issue-reporting",
        image: "assets/images/cropped-Civic Issue Reporting System Flow.png",
        topology: `
          <div class="topology-flow">
            <div class="top-step highlight-cyan"><span class="top-lbl">01</span><span class="top-val">CITIZEN LOG</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step"><span class="top-lbl">02</span><span class="top-val">ISSUE PAYLOAD</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step highlight-cyan"><span class="top-lbl">03</span><span class="top-val">AI ROUTING</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step"><span class="top-lbl">04</span><span class="top-val">OFFICER DISPATCH</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step highlight-cyan"><span class="top-lbl">05</span><span class="top-val">VERIFIED RESOLUTION</span></div>
          </div>
        `,
        highlights: [
          "Built a full-stack civic issue management platform with React.js, Node.js, Express.js, and PostgreSQL, implementing JWT + OTP authentication and role workflows.",
          "Integrated Sentence Transformers for automated AI department matching, directing municipal complaints to appropriate department officers.",
          "Incorporated document and image attachments, OCR verification for field officers, and real-time incident lifecycle tracking."
        ],
        benchmarks: [
          { val: "AI Routing", lbl: "DEPARTMENT MATCHING & SPAM SCREENING" },
          { val: "PostgreSQL", lbl: "ACID RELATIONAL PERSISTENCE" },
          { val: "3 Roles", lbl: "CITIZEN • OFFICER • ADMIN RBAC" },
          { val: "FastAPI", lbl: "MODULAR AI BACKEND SERVICES" }
        ]
      },
      project2: {
        index: "SYS-02",
        tag: "MULTI-PDF RAG",
        title: "DocuMind — Multi-PDF RAG Assistant",
        subtitle: "An AI research assistant that answers questions from multiple PDFs using hybrid semantic and keyword retrieval for relevant, grounded responses.",
        github: "https://github.com/Sneha-Amballa/DocuMind",
        image: "assets/images/cropped-DocuMind.png",
        topology: `
          <div class="topology-flow">
            <div class="top-step highlight-violet"><span class="top-lbl">01</span><span class="top-val">PDF DOCS</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step"><span class="top-lbl">02</span><span class="top-val">EXTRACTION</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step"><span class="top-lbl">03</span><span class="top-val">CHUNKING</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step highlight-violet"><span class="top-lbl">04</span><span class="top-val">FAISS + BM25</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step highlight-violet"><span class="top-lbl">05</span><span class="top-val">RRF FUSION</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step"><span class="top-lbl">06</span><span class="top-val">LLM SYNTHESIS</span></div>
          </div>
        `,
        highlights: [
          "Built a multi-document RAG assistant that extracts, chunks, embeds, and retrieves relevant research literature passages to answer queries contextually.",
          "Implemented hybrid retrieval fusing dense semantic embeddings (FAISS) with sparse lexical frequency (BM25) to avoid vector search blindspots.",
          "Engineered Reciprocal Rank Fusion (RRF) re-ranking algorithms and conversational memory to synthesize multi-document insights with grounded citations.",
          "Streamlit UI with conversational history, citation grounding, and ultra low-latency response generation using Groq LLMs."
        ],
        benchmarks: [
          { val: "Dual Index", lbl: "FAISS VECTOR + BM25 LEXICAL" },
          { val: "RRF Fusion", lbl: "RECIPROCAL RANK RE-RANKING" },
          { val: "Streamlit", lbl: "REACTIVE SCIENTIFIC UI" },
          { val: "Groq", lbl: "ULTRA LOW-LATENCY INFERENCE" }
        ]
      },
      project3: {
        index: "SYS-03",
        tag: "AI TEXT-TO-SQL",
        title: "Natural Language to SQL Agent",
        subtitle: "An AI-powered application that converts natural-language questions into SQL queries, validates them for safety, and displays database results with visualizations.",
        github: "https://github.com/Sneha-Amballa/Natural_Language_to_SQL",
        image: "assets/images/cropped-project-nl2sql-flow.png",
        topology: `
          <div class="topology-flow">
            <div class="top-step highlight-lime"><span class="top-lbl">01</span><span class="top-val">NL INPUT</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step"><span class="top-lbl">02</span><span class="top-val">LLM AGENT</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step"><span class="top-lbl">03</span><span class="top-val">RAW SQL</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step highlight-lime"><span class="top-lbl">04</span><span class="top-val">AST PARSER</span></div>
            <div class="top-arr">➔</div>
            <div class="top-step highlight-lime"><span class="top-lbl">05</span><span class="top-val">SQLITE ISOLATION</span></div>
          </div>
        `,
        highlights: [
          "Built an AI Text-to-SQL compiler converting complex questions into executable SQL, executing against SQLite with dynamic tabular and chart visualizations.",
          "Abstract Syntax Tree (AST) validation layer using SQLGlot inspects query syntax nodes, guaranteeing only read-only SELECT statements run and blocking destructive queries.",
          "Designed modular agent, tool, and database components with Streamlit UI, retry-based self-healing agent correction, and automated query execution."
        ],
        benchmarks: [
          { val: "AST Check", lbl: "SYNTAX SAFETY COMPILER" },
          { val: "SQLGlot", lbl: "PARSE TREE SANITIZATION" },
          { val: "Read-Only", lbl: "SQLITE QUERY ISOLATION" },
          { val: "Groq", lbl: "ACCELERATED INFERENCE" }
        ]
      }
    };

    function openProjectModal(projectId) {
      const data = projectModalData[projectId];
      if (!data || !systemArchModal) return;

      const modalTag = document.getElementById('modalTag');
      const modalIndex = document.getElementById('modalIndex');
      const modalTitle = document.getElementById('modalTitle');
      const modalSubtitle = document.getElementById('modalSubtitle');
      const modalTopology = document.getElementById('modalTopology');
      const modalHighlights = document.getElementById('modalHighlights');
      const modalBenchmarks = document.getElementById('modalBenchmarks');
      const modalGithubLink = document.getElementById('modalGithubLink');
      const modalDiagramImg = document.getElementById('modalDiagramImg');

      if (modalTag) modalTag.textContent = data.tag;
      if (modalIndex) modalIndex.textContent = data.index;
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
      if (modalTopology) modalTopology.innerHTML = data.topology;
      if (modalDiagramImg && data.image) modalDiagramImg.src = data.image;

      if (modalHighlights) {
        modalHighlights.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');
      }

      if (modalBenchmarks) {
        modalBenchmarks.innerHTML = data.benchmarks.map(b => `
          <div class="bench-card">
            <span class="bench-val">${b.val}</span>
            <span class="bench-lbl">${b.lbl}</span>
          </div>
        `).join('');
      }

      if (modalGithubLink) {
        modalGithubLink.href = data.github;
      }

      systemArchModal.classList.add('active');
      systemArchModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      playSyntheticClick(640, 0.08, 'triangle');
    }

    function closeProjectModal() {
      if (!systemArchModal) return;
      systemArchModal.classList.remove('active');
      systemArchModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      playSyntheticClick(420, 0.05, 'sine');
    }

    // Inspect buttons click listeners
    document.querySelectorAll('.project-inspect-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const projId = btn.getAttribute('data-project-id');
        openProjectModal(projId);
      });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && systemArchModal && systemArchModal.classList.contains('active')) {
        closeProjectModal();
      }
    });

    // ==========================================================================
    // HIGH-RESOLUTION ARCHITECTURE BLUEPRINT LIGHTBOX CONTROLLER
    // ==========================================================================
    const blueprintData = {
      project1: {
        code: "SYS-01 // MUNICIPAL PLATFORM",
        title: "AI-Powered Civic Issue Management Platform Architecture Blueprint",
        image: "assets/images/cropped-Civic Issue Reporting System Flow.png",
        github: "https://github.com/Sneha-Amballa/smart-civic-issue-reporting"
      },
      project2: {
        code: "SYS-02 // DUAL-INDEX RETRIEVAL",
        title: "DocuMind — Multi-PDF RAG Assistant Architecture Blueprint",
        image: "assets/images/cropped-DocuMind.png",
        github: "https://github.com/Sneha-Amballa/DocuMind"
      },
      project3: {
        code: "SYS-03 // COMPILER BLUEPRINT",
        title: "Natural Language to SQL Agent Architecture Blueprint",
        image: "assets/images/cropped-project-nl2sql-flow.png",
        github: "https://github.com/Sneha-Amballa/Natural_Language_to_SQL"
      }
    };

    function openBlueprintLightbox(projId) {
      if (!blueprintLightboxModal) return;
      const data = blueprintData[projId] || blueprintData.project1;

      if (blSystemCode) blSystemCode.textContent = data.code;
      if (blSystemTitle) blSystemTitle.textContent = data.title;
      if (blModalImg) blModalImg.src = data.image;
      if (blGithubLink) blGithubLink.href = data.github;

      blSwitchBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-switch') === projId);
      });

      blueprintLightboxModal.classList.add('active');
      blueprintLightboxModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      playSyntheticClick(720, 0.05, 'triangle');
    }

    function closeBlueprintLightbox() {
      if (!blueprintLightboxModal || !blueprintLightboxModal.classList.contains('active')) return;
      blueprintLightboxModal.classList.remove('active');
      blueprintLightboxModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      playSyntheticClick(400, 0.04, 'sine');
    }

    document.querySelectorAll('.open-blueprint-lightbox-btn').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const projId = trigger.getAttribute('data-project-id') || 'project1';
        openBlueprintLightbox(projId);
      });
    });

    blSwitchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-switch');
        openBlueprintLightbox(targetId);
      });
    });

    if (blueprintLightboxCloseBtn) blueprintLightboxCloseBtn.addEventListener('click', closeBlueprintLightbox);
    if (blueprintLightboxBackdrop) blueprintLightboxBackdrop.addEventListener('click', closeBlueprintLightbox);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && blueprintLightboxModal && blueprintLightboxModal.classList.contains('active')) {
        closeBlueprintLightbox();
      }
    });

    // ==========================================================================
    // TOP READING PROGRESS LINE & SECTION SCROLL SPY
    // ==========================================================================
    const scrollProgressLine = document.getElementById('scrollProgressLine');
    const navLinks = document.querySelectorAll('.site-header .nav-link');

    function updateScrollSpy() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      if (scrollProgressLine) {
        scrollProgressLine.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }

      // Nav link active detection based on section positions
      const sectionDefs = [
        { id: 'homeSection', el: document.getElementById('homeSection') },
        { id: 'thinkingPipeline', el: document.getElementById('thinkingPipeline') },
        { id: 'workSection', el: document.getElementById('workSection') },
        { id: 'toolboxSection', el: document.getElementById('toolboxSection') },
        { id: 'achievementsSection', el: document.getElementById('achievementsSection') },
        { id: 'contactSection', el: document.getElementById('contactSection') }
      ];

      let currentId = 'homeSection';
      sectionDefs.forEach(sec => {
        if (sec.el) {
          const rect = sec.el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            currentId = sec.id;
          }
        }
      });

      navLinks.forEach(link => {
        if (link.getAttribute('data-target') === currentId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', updateScrollSpy, { passive: true });
    updateScrollSpy();

    // ========================================================================
    // Section 04: TOOLBOX // High-Precision Neo-Cyber Ecosystem Controller
    // ========================================================================
    const toolboxSection = document.getElementById('toolboxSection');
    const toolboxHeaderLine = document.getElementById('toolboxHeaderLine');
    const toolboxCards = document.querySelectorAll('.toolbox-card');
    const filterBtns = document.querySelectorAll('.toolbox-filter-btn');
    const pedestals = document.querySelectorAll('.pedestal-group');
    const conduits = document.querySelectorAll('.conduit-line');
    const orbitalEcosystem = document.getElementById('orbitalEcosystem');
    const orbitalSvg = document.getElementById('orbitalSvg');
    const orbitalStatusTxt = document.getElementById('orbitalStatusTxt');
    const snehaCoreGlobe = document.getElementById('snehaCoreGlobe');
    const coreShockwave = document.getElementById('coreShockwave');
    const techHoverHud = document.getElementById('techHoverHud');
    const hudTechName = document.getElementById('hudTechName');
    const hudTechBadge = document.getElementById('hudTechBadge');
    const hudTechDesc = document.getElementById('hudTechDesc');
    const techItems = document.querySelectorAll('.tech-item');

    // Domain to Node / Conduit Mappings
    const domainMapping = {
      'languages': {
        cardId: 'cardLanguages',
        pedestalSel: '.node-languages',
        conduitId: 'conduitLanguages',
        label: 'DOMAIN 01 // CORE PROGRAMMING LANGUAGES & PARADIGMS',
        soundFreq: 520
      },
      'aiml': {
        cardId: 'cardAIML',
        pedestalSel: '.node-aiml',
        conduitId: 'conduitAIML',
        label: 'DOMAIN 02 // NEURAL ARCHITECTURES, LLMs & STATISTICAL ML',
        soundFreq: 580
      },
      'development': {
        cardId: 'cardDevelopment',
        pedestalSel: '.node-development',
        conduitId: 'conduitDev',
        label: 'DOMAIN 03 // FULL-STACK ARCHITECTURES, REACT & ASYNC APIs',
        soundFreq: 640
      },
      'databases': {
        cardId: 'cardDatabases',
        pedestalSel: '.node-databases',
        conduitId: 'conduitDatabases',
        label: 'DOMAIN 04 // PERSISTENCE, ACID SCHEMAS & DOCUMENT STORES',
        soundFreq: 700
      },
      'tools': {
        cardId: 'cardTools',
        pedestalSel: '.node-tools',
        conduitId: 'conduitTools',
        label: 'DOMAIN 05 // DEVOPS, CONTAINERIZATION & WORKFLOW ENGINES',
        soundFreq: 760
      }
    };

    // 1. Interactive Domain Filter System
    let currentFilter = 'all';

    function setDomainFilter(filterKey, playAudio = true) {
      currentFilter = filterKey;

      // Update Filter Button States
      filterBtns.forEach(btn => {
        const match = btn.getAttribute('data-filter') === filterKey;
        btn.classList.toggle('active', match);
        btn.setAttribute('aria-selected', match ? 'true' : 'false');
      });

      // Update Cards
      toolboxCards.forEach(card => {
        const domain = card.getAttribute('data-domain');
        if (filterKey === 'all') {
          card.classList.remove('card-dimmed', 'card-focused');
        } else if (domain === filterKey) {
          card.classList.remove('card-dimmed');
          card.classList.add('card-focused');
        } else {
          card.classList.remove('card-focused');
          card.classList.add('card-dimmed');
        }
      });

      // Update Orbital Pedestals & Conduits
      pedestals.forEach(p => p.classList.remove('pedestal-active'));
      conduits.forEach(c => c.classList.remove('active'));

      if (filterKey === 'all') {
        if (orbitalStatusTxt) {
          orbitalStatusTxt.textContent = 'ECOSYSTEM: ALL 24 NODES ONLINE';
        }
      } else {
        const info = domainMapping[filterKey];
        if (info) {
          document.querySelectorAll(info.pedestalSel).forEach(p => p.classList.add('pedestal-active'));
          const conduitEl = document.getElementById(info.conduitId);
          if (conduitEl) conduitEl.classList.add('active');
          if (orbitalStatusTxt) {
            orbitalStatusTxt.textContent = info.label;
          }
          if (playAudio && typeof playSyntheticClick === 'function') {
            playSyntheticClick(info.soundFreq, 0.05, 'triangle');
          }
        }
      }
    }

    filterBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        const filterKey = btn.getAttribute('data-filter');
        setDomainFilter(filterKey, true);
        if (typeof playSyntheticClick === 'function') {
          playSyntheticClick(460 + idx * 55, 0.04, 'triangle');
        }
      });
    });

    // 2. Pedestals Interactivity (Click & Hover)
    pedestals.forEach(ped => {
      const domain = ped.getAttribute('data-domain');

      ped.addEventListener('click', () => {
        if (domain) {
          setDomainFilter(domain, true);
          // On mobile/tablet, smoothly scroll to target card if stacked
          if (window.innerWidth < 1280) {
            const targetCardId = ped.getAttribute('data-target-card');
            const targetCard = document.getElementById(targetCardId);
            if (targetCard) {
              targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }
        }
      });

      ped.addEventListener('mouseenter', () => {
        const targetCardId = ped.getAttribute('data-target-card');
        if (targetCardId) {
          const targetCard = document.getElementById(targetCardId);
          if (targetCard) targetCard.classList.add('card-active');
        }
        ped.classList.add('pedestal-active');
        if (domain && domainMapping[domain]) {
          const conduitEl = document.getElementById(domainMapping[domain].conduitId);
          if (conduitEl) conduitEl.classList.add('active');
        }
        if (typeof playSyntheticClick === 'function') {
          playSyntheticClick(580, 0.035, 'sine');
        }
      });

      ped.addEventListener('mouseleave', () => {
        const targetCardId = ped.getAttribute('data-target-card');
        if (targetCardId) {
          const targetCard = document.getElementById(targetCardId);
          if (targetCard) targetCard.classList.remove('card-active');
        }
        if (currentFilter !== domain) {
          ped.classList.remove('pedestal-active');
          if (domain && domainMapping[domain]) {
            const conduitEl = document.getElementById(domainMapping[domain].conduitId);
            if (conduitEl) conduitEl.classList.remove('active');
          }
        }
      });
    });

    // 3. Card Hover Highlights Corresponding Pedestal & Conduit
    toolboxCards.forEach(card => {
      const domain = card.getAttribute('data-domain');

      card.addEventListener('mouseenter', () => {
        const info = domainMapping[domain];
        if (info) {
          document.querySelectorAll(info.pedestalSel).forEach(p => p.classList.add('pedestal-active'));
          const conduitEl = document.getElementById(info.conduitId);
          if (conduitEl) conduitEl.classList.add('active');
        }
      });

      card.addEventListener('mouseleave', () => {
        const info = domainMapping[domain];
        if (info && currentFilter !== domain) {
          document.querySelectorAll(info.pedestalSel).forEach(p => p.classList.remove('pedestal-active'));
          const conduitEl = document.getElementById(info.conduitId);
          if (conduitEl) conduitEl.classList.remove('active');
        }
      });

      // Mousemove dynamic spotlight tracking & subtle 3D perspective tilt
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--spotlight-x', `${x}px`);
        card.style.setProperty('--spotlight-y', `${y}px`);

        const tiltX = ((x / rect.width) - 0.5) * 5;
        const tiltY = ((y / rect.height) - 0.5) * -5;
        const baseTrans = card.classList.contains('card-focused') ? 'translateY(-4px) scale(1.01) ' : 'translateY(-3px) ';
        card.style.transform = `${baseTrans}perspective(750px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    // 4. Central Sneha Globe Shockwave Harmonic Pulse
    if (snehaCoreGlobe && coreShockwave) {
      snehaCoreGlobe.addEventListener('click', () => {
        coreShockwave.classList.remove('rippling');
        void coreShockwave.offsetWidth; // force reflow
        coreShockwave.classList.add('rippling');

        // Cascade all 5 conduits in rapid succession
        conduits.forEach((c, idx) => {
          setTimeout(() => c.classList.add('active'), idx * 70);
        });
        setTimeout(() => {
          if (currentFilter === 'all') {
            conduits.forEach(c => c.classList.remove('active'));
          } else {
            conduits.forEach(c => {
              if (c.id !== domainMapping[currentFilter]?.conduitId) {
                c.classList.remove('active');
              }
            });
          }
        }, 1500);

        if (orbitalStatusTxt) {
          orbitalStatusTxt.textContent = 'HARMONIC SYNC // ALL 24 SYSTEMS PULSING';
          setTimeout(() => {
            if (currentFilter === 'all') {
              orbitalStatusTxt.textContent = 'ECOSYSTEM: ALL 24 NODES ONLINE';
            } else {
              orbitalStatusTxt.textContent = domainMapping[currentFilter]?.label || 'ECOSYSTEM: ALL 24 NODES ONLINE';
            }
          }, 2000);
        }

        if (typeof playSyntheticClick === 'function') {
          playSyntheticClick(440, 0.08, 'sine');
          setTimeout(() => playSyntheticClick(660, 0.08, 'sine'), 90);
          setTimeout(() => playSyntheticClick(880, 0.08, 'triangle'), 180);
        }
      });
    }

    // 5. Rich Tech Item Hover Telemetry HUD
    techItems.forEach(item => {
      const techName = item.getAttribute('data-tech') || 'TECHNOLOGY';
      const category = item.getAttribute('data-category') || 'CORE TECH';
      const desc = item.getAttribute('data-desc') || 'Engineered for production reliability';
      const accent = item.getAttribute('data-accent') || '#00e599';

      item.style.setProperty('--tech-accent', accent);

      item.addEventListener('mouseenter', () => {
        if (techHoverHud && hudTechName && hudTechBadge && hudTechDesc) {
          hudTechName.textContent = techName.toUpperCase();
          hudTechBadge.textContent = category.toUpperCase();
          hudTechDesc.textContent = desc;

          const rect = item.getBoundingClientRect();
          const hudX = rect.left + rect.width / 2;
          const hudY = rect.top - 10;

          techHoverHud.style.left = `${hudX}px`;
          techHoverHud.style.top = `${hudY}px`;
          techHoverHud.classList.add('visible');
        }

        // Illuminate parent card's conduit on the orbit
        const parentCard = item.closest('.toolbox-card');
        if (parentCard) {
          const domain = parentCard.getAttribute('data-domain');
          const info = domainMapping[domain];
          if (info) {
            const conduitEl = document.getElementById(info.conduitId);
            if (conduitEl) conduitEl.classList.add('active');
          }
        }

        if (typeof playSyntheticClick === 'function') {
          playSyntheticClick(720, 0.03, 'sine');
        }
      });

      item.addEventListener('mouseleave', () => {
        if (techHoverHud) {
          techHoverHud.classList.remove('visible');
        }

        const parentCard = item.closest('.toolbox-card');
        if (parentCard) {
          const domain = parentCard.getAttribute('data-domain');
          const info = domainMapping[domain];
          if (info && currentFilter !== domain) {
            const conduitEl = document.getElementById(info.conduitId);
            if (conduitEl) conduitEl.classList.remove('active');
          }
        }
      });
    });

    // 6. 3D Parallax Tilt for Orbital SVG
    if (orbitalEcosystem && orbitalSvg) {
      orbitalEcosystem.addEventListener('mousemove', (e) => {
        const rect = orbitalEcosystem.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        orbitalSvg.style.transform = `perspective(1000px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) scale3d(1.025, 1.025, 1.025)`;
      });

      orbitalEcosystem.addEventListener('mouseleave', () => {
        orbitalSvg.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    }

    // 7. GSAP ScrollTrigger Entrance Sequence & Metric Counter Animation
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && toolboxSection) {
      let toolboxTriggered = false;

      ScrollTrigger.create({
        trigger: "#toolboxSection",
        start: "top 76%",
        onEnter: () => {
          if (toolboxTriggered) return;
          toolboxTriggered = true;

          const tbTl = gsap.timeline();

          // 1. Header Line Animates Across
          if (toolboxHeaderLine) {
            tbTl.to(toolboxHeaderLine, {
              width: "100%",
              duration: 1.1,
              ease: "power2.inOut"
            });
          }

          // 2. Headline Typography Reveal
          const tbHeadline = toolboxSection.querySelector('.toolbox-headline');
          const tbSubheadline = toolboxSection.querySelector('.toolbox-subheadline');
          const tbExploringPill = toolboxSection.querySelector('.toolbox-exploring-pill');
          const tbGlyphBadge = toolboxSection.querySelector('.toolbox-glyph-badge');

          if (tbHeadline) {
            tbTl.fromTo(tbHeadline, 
              { y: 25, opacity: 0, filter: "blur(6px)" },
              { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
              "-=0.7"
            );
          }

          if (tbSubheadline) {
            tbTl.fromTo(tbSubheadline,
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
              "-=0.6"
            );
          }

          if (tbExploringPill || tbGlyphBadge) {
            tbTl.fromTo([tbGlyphBadge, tbExploringPill],
              { scale: 0.85, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" },
              "-=0.5"
            );
          }

          // 3. Category Filter Navigation Stagger
          if (filterBtns.length > 0) {
            tbTl.fromTo(filterBtns,
              { y: 15, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.06, ease: "power2.out" },
              "-=0.4"
            );
          }

          // 4. Central Orbital Core Bloom & Pedestals Drop
          if (snehaCoreGlobe) {
            tbTl.fromTo(snehaCoreGlobe,
              { scale: 0.2, opacity: 0, transformOrigin: "center center" },
              { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.8)", transformOrigin: "center center" },
              "-=0.4"
            );
          }

          if (pedestals.length > 0) {
            tbTl.fromTo(pedestals,
              { scale: 0.5, opacity: 0, y: -15, transformOrigin: "center center" },
              { scale: 1, opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "back.out(1.6)", transformOrigin: "center center" },
              "-=0.5"
            );
          }

          // 5. Left & Right Cards Stagger In
          const leftCards = toolboxSection.querySelectorAll('.toolbox-col-left .toolbox-card');
          const rightCards = toolboxSection.querySelectorAll('.toolbox-col-right .toolbox-card');

          if (leftCards.length > 0) {
            tbTl.fromTo(leftCards,
              { x: -35, opacity: 0, scale: 0.96 },
              { x: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
              "-=0.5"
            );
          }

          if (rightCards.length > 0) {
            tbTl.fromTo(rightCards,
              { x: 35, opacity: 0, scale: 0.96 },
              { x: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
              "-=0.6"
            );
          }

          // 6. Statistics Odometer Count-Up Animation
          const statNums = toolboxSection.querySelectorAll('.stat-num[data-target]');
          statNums.forEach(numEl => {
            const targetVal = parseInt(numEl.getAttribute('data-target'), 10) || 0;
            const suffix = numEl.getAttribute('data-suffix') || '';
            const counterObj = { val: 0 };

            tbTl.to(counterObj, {
              val: targetVal,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                numEl.textContent = Math.floor(counterObj.val) + suffix;
              }
            }, "-=0.6");
          });
        }
      });
    }

    // ========================================================================
    // Section 05: Achievements & Certifications Interactions
    // ========================================================================
    
    // Header Line Reveal Triggers
    const achievementsHeaderLine = document.getElementById('achievementsHeaderLine');
    if (achievementsHeaderLine) {
      ScrollTrigger.create({
        trigger: "#achievementsSection",
        start: "top 80%",
        onEnter: () => {
          achievementsHeaderLine.style.width = "100%";
        }
      });
    }

    const certsHeaderLine = document.getElementById('certsHeaderLine');
    if (certsHeaderLine) {
      ScrollTrigger.create({
        trigger: ".certifications-container",
        start: "top 85%",
        onEnter: () => {
          certsHeaderLine.style.width = "100%";
        }
      });
    }

    // Terrain Nodes <-> Milestone Cards Cross-Highlighting
    const terrainNodes = document.querySelectorAll('.terrain-node');
    const milestoneCards = document.querySelectorAll('.milestone-card');

    terrainNodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        const targetCardId = node.getAttribute('data-target-card');
        if (targetCardId) {
          const card = document.getElementById(targetCardId);
          if (card) {
            card.classList.add('card-active');
          }
        }
        node.classList.add('node-active');
        if (typeof playSyntheticClick === 'function') {
          playSyntheticClick(680, 0.04, 'triangle');
        }
      });

      node.addEventListener('mouseleave', () => {
        const targetCardId = node.getAttribute('data-target-card');
        if (targetCardId) {
          const card = document.getElementById(targetCardId);
          if (card) card.classList.remove('card-active');
        }
        node.classList.remove('node-active');
      });
    });

    milestoneCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const nodeNum = card.getAttribute('data-node');
        const node = document.querySelector(`.tn-${nodeNum}`);
        const beacon = document.querySelector(`.bl-${nodeNum}`);
        if (node) node.classList.add('node-active');
        if (beacon) beacon.classList.add('beacon-active');

        if (typeof playSyntheticClick === 'function') {
          playSyntheticClick(720, 0.03, 'sine');
        }
      });

      card.addEventListener('mouseleave', () => {
        const nodeNum = card.getAttribute('data-node');
        const node = document.querySelector(`.tn-${nodeNum}`);
        const beacon = document.querySelector(`.bl-${nodeNum}`);
        if (node) node.classList.remove('node-active');
        if (beacon) beacon.classList.remove('beacon-active');
      });
    });

    // 3D Parallax Tilt for Mountain Stage
    const mountainStage = document.getElementById('mountainStage');
    const mountainSvg = document.getElementById('mountainSvg');
    if (mountainStage && mountainSvg) {
      mountainStage.addEventListener('mousemove', (e) => {
        const rect = mountainStage.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mountainSvg.style.transform = `perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale3d(1.01, 1.01, 1.01)`;
      });

      mountainStage.addEventListener('mouseleave', () => {
        mountainSvg.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    }

    // Section 05 GSAP Entrance & Stats Odometers Animation
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      const achievementsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#achievementsSection",
          start: "top 75%",
          once: true
        }
      });

      achievementsTimeline
        .fromTo('.ridge-main-path', 
          { strokeDashoffset: 1200 }, 
          { strokeDashoffset: 0, duration: 2.2, ease: "power2.out" }
        )
        .from('.terrain-node', {
          scale: 0,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "back.out(1.8)"
        }, "-=1.5")
        .from('.milestone-card', {
          opacity: 0,
          y: 35,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out"
        }, "-=1.0")
        .from('.cert-card', {
          opacity: 0,
          y: 25,
          stagger: 0.08,
          duration: 0.7,
          ease: "power2.out"
        }, "-=0.4");

      // Interactive coupling between milestone cards, pins, and nodes
      const mCards = document.querySelectorAll('.milestone-card');
      const tNodes = document.querySelectorAll('.terrain-node');
      const bLines = document.querySelectorAll('.beacon-line');

      mCards.forEach((card, idx) => {
        card.addEventListener('mouseenter', () => {
          if (tNodes[idx]) tNodes[idx].classList.add('node-active');
          if (bLines[idx]) bLines[idx].classList.add('beacon-active');
        });
        card.addEventListener('mouseleave', () => {
          if (tNodes[idx]) tNodes[idx].classList.remove('node-active');
          if (bLines[idx]) bLines[idx].classList.remove('beacon-active');
        });
      });

      tNodes.forEach((node, idx) => {
        node.addEventListener('mouseenter', () => {
          if (mCards[idx]) mCards[idx].classList.add('card-active');
          if (bLines[idx]) bLines[idx].classList.add('beacon-active');
        });
        node.addEventListener('mouseleave', () => {
          if (mCards[idx]) mCards[idx].classList.remove('card-active');
          if (bLines[idx]) bLines[idx].classList.remove('beacon-active');
        });
      });

      // Stats odometer count up
      ScrollTrigger.create({
        trigger: ".achievements-stats-strip",
        start: "top 85%",
        once: true,
        onEnter: () => {
          const odometers = document.querySelectorAll('.achieve-odometer');
          odometers.forEach(el => {
            const targetVal = parseInt(el.getAttribute('data-target'), 10) || 0;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: targetVal,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.round(obj.val);
              }
            });
          });
        }
      });
    }

    // ========================================================================
    // Section 05: Certifications Horizontal Rail Controller
    // ========================================================================
    const certificationsGrid = document.getElementById('certificationsGrid');
    const certsPrevBtn = document.getElementById('certsPrevBtn');
    const certsNextBtn = document.getElementById('certsNextBtn');
    const certsRailPrevBtn = document.getElementById('certsRailPrevBtn');
    const certsRailNextBtn = document.getElementById('certsRailNextBtn');
    const certsCurrentIndex = document.getElementById('certsCurrentIndex');
    const certsProgressFill = document.getElementById('certsProgressFill');

    if (certificationsGrid) {
      const certCards = Array.from(certificationsGrid.querySelectorAll('.cert-pdf-card'));
      let activeCertIdx = 0;

      function updateActiveCertState(idx, shouldScroll = false) {
        if (idx < 0 || idx >= certCards.length) return;
        activeCertIdx = idx;

        certCards.forEach((c, i) => {
          c.classList.toggle('active', i === idx);
        });

        if (certsCurrentIndex) {
          certsCurrentIndex.textContent = `0${idx + 1}`;
        }

        if (certsProgressFill) {
          const pct = ((idx + 1) / certCards.length) * 100;
          certsProgressFill.style.width = `${pct}%`;
        }

        if (shouldScroll) {
          const targetCard = certCards[idx];
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
          }
        }
      }

      // Prev / Next button navigation
      const handleCertPrev = () => {
        const nextIdx = (activeCertIdx - 1 + certCards.length) % certCards.length;
        updateActiveCertState(nextIdx, true);
        playSyntheticClick(420, 0.04, 'sine');
      };

      const handleCertNext = () => {
        const nextIdx = (activeCertIdx + 1) % certCards.length;
        updateActiveCertState(nextIdx, true);
        playSyntheticClick(540, 0.04, 'sine');
      };

      if (certsPrevBtn) certsPrevBtn.addEventListener('click', handleCertPrev);
      if (certsNextBtn) certsNextBtn.addEventListener('click', handleCertNext);
      if (certsRailPrevBtn) certsRailPrevBtn.addEventListener('click', handleCertPrev);
      if (certsRailNextBtn) certsRailNextBtn.addEventListener('click', handleCertNext);

      // Card hover/click updates active state
      certCards.forEach((card, i) => {
        card.addEventListener('mouseenter', () => updateActiveCertState(i, false));
        card.addEventListener('click', (e) => {
          if (!e.target.closest('button, a')) {
            updateActiveCertState(i, false);
          }
        });
      });

      // Mouse wheel horizontal translation on certificates rail when scrollable
      certificationsGrid.addEventListener('wheel', (e) => {
        if (certificationsGrid.scrollWidth > certificationsGrid.clientWidth) {
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            certificationsGrid.scrollLeft += e.deltaY * 0.9;
          }
        }
      }, { passive: false });

      // Drag to scroll on smaller screens
      let isCertDown = false;
      let startCertX = 0;
      let certScrollStart = 0;

      certificationsGrid.addEventListener('mousedown', (e) => {
        if (e.target.closest('button, a')) return;
        isCertDown = true;
        certificationsGrid.style.cursor = 'grabbing';
        startCertX = e.pageX - certificationsGrid.offsetLeft;
        certScrollStart = certificationsGrid.scrollLeft;
      });

      window.addEventListener('mouseup', () => {
        if (isCertDown) {
          isCertDown = false;
          if (certificationsGrid) certificationsGrid.style.cursor = '';
        }
      });

      certificationsGrid.addEventListener('mousemove', (e) => {
        if (!isCertDown) return;
        e.preventDefault();
        const x = e.pageX - certificationsGrid.offsetLeft;
        const walk = (x - startCertX) * 1.5;
        certificationsGrid.scrollLeft = certScrollStart - walk;
      });

      // Update index badge on scroll when scrollable
      certificationsGrid.addEventListener('scroll', () => {
        const scrollLeft = certificationsGrid.scrollLeft;
        let closestIdx = 0;
        let minDiff = Infinity;
        certCards.forEach((c, i) => {
          const diff = Math.abs(c.offsetLeft - certificationsGrid.offsetLeft - scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = i;
          }
        });
        if (closestIdx !== activeCertIdx) {
          updateActiveCertState(closestIdx, false);
        }
      }, { passive: true });
    }

    // ========================================================================
    // Authentic PDF Certificate Viewer System
    // ========================================================================
    const pdfCertificates = [
      {
        id: 1,
        title: "NPTEL – Machine Learning (Elite Credential)",
        issuer: "IIT Kharagpur / Swayam (Ministry of Education)",
        pdfPath: "assets/certificates/NPTEL_Machine_Learning.pdf",
        fileName: "NPTEL_Machine_Learning.pdf"
      },
      {
        id: 2,
        title: "Postman – API Fundamentals Student Expert",
        issuer: "Postman Official Student Expert",
        pdfPath: "assets/certificates/Postman_Challenge.pdf",
        fileName: "Postman_Challenge.pdf"
      },
      {
        id: 3,
        title: "HackerRank – Python & Problem Solving",
        issuer: "HackerRank Official Assessment",
        pdfPath: "assets/certificates/python basic hackerrank.pdf",
        fileName: "python basic hackerrank.pdf"
      },
      {
        id: 4,
        title: "Masai x IIT Patna – AI/ML Specialization",
        issuer: "Academic Specialization & Honors Credential",
        pdfPath: "assets/certificates/NPTEL_Machine_Learning.pdf",
        fileName: "Masai_IIT_Patna_Credential.pdf"
      }
    ];

    let currentPdfIndex = 0;
    const pdfModal = document.getElementById('pdfViewerModal');
    const pdfModalBackdrop = document.getElementById('pdfModalBackdrop');
    const pdfModalCloseBtn = document.getElementById('pdfModalCloseBtn');
    const pdfViewerIframe = document.getElementById('pdfViewerIframe');
    const pdfModalDocTitle = document.getElementById('pdfModalDocTitle');
    const pdfModalPathDisplay = document.getElementById('pdfModalPathDisplay');
    const pdfOpenExternalBtn = document.getElementById('pdfOpenExternalBtn');
    const pdfDownloadDirectBtn = document.getElementById('pdfDownloadDirectBtn');
    const pdfFallbackNotice = document.getElementById('pdfFallbackNotice');
    const fallbackFilePathDisplay = document.getElementById('fallbackFilePathDisplay');
    const pdfModalTabs = document.querySelectorAll('.pdf-tab-btn');

    function loadPdf(index) {
      if (index < 0 || index >= pdfCertificates.length) return;
      currentPdfIndex = index;
      const cert = pdfCertificates[currentPdfIndex];

      if (pdfModalDocTitle) pdfModalDocTitle.textContent = cert.title;
      if (pdfModalPathDisplay) pdfModalPathDisplay.textContent = cert.pdfPath;
      if (fallbackFilePathDisplay) fallbackFilePathDisplay.textContent = cert.pdfPath;

      if (pdfOpenExternalBtn) {
        pdfOpenExternalBtn.href = cert.pdfPath;
      }
      if (pdfDownloadDirectBtn) {
        pdfDownloadDirectBtn.href = cert.pdfPath;
        pdfDownloadDirectBtn.setAttribute('download', cert.fileName);
      }

      // Update tabs state
      pdfModalTabs.forEach((btn, idx) => {
        if (idx === currentPdfIndex) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Embed PDF directly in the viewer frame
      if (pdfViewerIframe) {
        pdfViewerIframe.style.display = 'block';
        pdfViewerIframe.src = cert.pdfPath + '#toolbar=1&navpanes=0';
      }
      if (pdfFallbackNotice) {
        pdfFallbackNotice.style.display = 'none';
      }
    }

    function openPdfModal(index) {
      if (!pdfModal) return;
      loadPdf(index);

      pdfModal.classList.add('active');
      pdfModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (typeof playSyntheticClick === 'function') {
        playSyntheticClick(880, 0.05, 'triangle');
      }

      if (pdfModalCloseBtn) {
        pdfModalCloseBtn.focus();
      }
    }

    function closePdfModal() {
      if (!pdfModal || !pdfModal.classList.contains('active')) return;
      pdfModal.classList.remove('active');
      pdfModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      if (pdfViewerIframe) {
        pdfViewerIframe.src = 'about:blank';
      }

      if (typeof playSyntheticClick === 'function') {
        playSyntheticClick(440, 0.04, 'sine');
      }
    }

    function nextPdf() {
      const nextIndex = (currentPdfIndex + 1) % pdfCertificates.length;
      loadPdf(nextIndex);
      if (typeof playSyntheticClick === 'function') {
        playSyntheticClick(760, 0.03, 'sine');
      }
    }

    function prevPdf() {
      const prevIndex = (currentPdfIndex - 1 + pdfCertificates.length) % pdfCertificates.length;
      loadPdf(prevIndex);
      if (typeof playSyntheticClick === 'function') {
        playSyntheticClick(680, 0.03, 'sine');
      }
    }

    // Attach click events to Certificate PDF Cards
    const certPdfCards = document.querySelectorAll('.cert-pdf-card');
    certPdfCards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        // Do not trigger modal if user clicked directly on the download link
        if (e.target.closest('.cert-btn-dl')) return;
        openPdfModal(idx);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openPdfModal(idx);
        }
      });

      card.addEventListener('mouseenter', () => {
        if (typeof playSyntheticClick === 'function') {
          playSyntheticClick(640, 0.03, 'sine');
        }
      });
    });

    // Tab switcher in PDF Modal
    pdfModalTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const switchIdx = parseInt(btn.getAttribute('data-switch-cert'), 10) - 1;
        if (!isNaN(switchIdx)) {
          loadPdf(switchIdx);
          if (typeof playSyntheticClick === 'function') {
            playSyntheticClick(720, 0.03, 'sine');
          }
        }
      });
    });

    // Close button & backdrop handlers
    if (pdfModalCloseBtn) pdfModalCloseBtn.addEventListener('click', closePdfModal);
    if (pdfModalBackdrop) pdfModalBackdrop.addEventListener('click', closePdfModal);

    // Keyboard Shortcuts (ESC, ArrowLeft, ArrowRight)
    window.addEventListener('keydown', (e) => {
      if (!pdfModal || !pdfModal.classList.contains('active')) return;

      if (e.key === 'Escape') {
        closePdfModal();
      } else if (e.key === 'ArrowRight') {
        nextPdf();
      } else if (e.key === 'ArrowLeft') {
        prevPdf();
      }
    });

    // Section 06: Contact Form & Globe Parallax Interactions
    const contactHeaderLine = document.getElementById('contactHeaderLine');
    if (contactHeaderLine) {
      ScrollTrigger.create({
        trigger: "#contactSection",
        start: "top 80%",
        onEnter: () => {
          contactHeaderLine.style.width = "100%";
        }
      });
    }


    // Interactive Channel Cards Audio Feedback
    const channelCards = document.querySelectorAll('.channel-card');
    channelCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        if (typeof playSyntheticClick === 'function') {
          playSyntheticClick(680, 0.03, 'sine');
        }
      });
    });

    // Contact Form Interactive Submission
    const portfolioContactForm = document.getElementById('portfolioContactForm');
    const contactSubmitBtn = document.getElementById('contactSubmitBtn');
    const formFeedbackNotice = document.getElementById('formFeedbackNotice');

    if (portfolioContactForm && contactSubmitBtn) {
      portfolioContactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        const subjectInput = document.getElementById('contactSubject');
        const messageInput = document.getElementById('contactMessage');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
          if (formFeedbackNotice) {
            formFeedbackNotice.textContent = "PLEASE COMPLETE ALL REQUIRED TRANSMISSION FIELDS.";
            formFeedbackNotice.className = "form-feedback-notice error";
          }
          if (typeof playSyntheticClick === 'function') {
            playSyntheticClick(280, 0.08, 'sawtooth');
          }
          return;
        }

        // Submitting state
        contactSubmitBtn.disabled = true;
        contactSubmitBtn.style.opacity = '0.75';
        const originalBtnHtml = contactSubmitBtn.innerHTML;
        contactSubmitBtn.innerHTML = `<span>Transmitting Message...</span>`;
        if (typeof playSyntheticClick === 'function') {
          playSyntheticClick(600, 0.05, 'sine');
        }

        // Simulate secure dispatch handshake
        setTimeout(() => {
          contactSubmitBtn.disabled = false;
          contactSubmitBtn.style.opacity = '1';
          contactSubmitBtn.innerHTML = originalBtnHtml;

          if (formFeedbackNotice) {
            formFeedbackNotice.textContent = "✓ TRANSMISSION DISPATCHED // SNEHA WILL RESPOND SHORTLY";
            formFeedbackNotice.className = "form-feedback-notice success";
          }

          if (typeof playSyntheticClick === 'function') {
            playSyntheticClick(880, 0.12, 'triangle');
            setTimeout(() => playSyntheticClick(1100, 0.15, 'sine'), 100);
          }

          // Mailto fallback link
          const mailtoUri = `mailto:amballasneha25@gmail.com?subject=${encodeURIComponent(subjectInput.value || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\n\nMessage:\n${messageInput.value}`)}`;
          window.open(mailtoUri, '_blank');

          portfolioContactForm.reset();

          setTimeout(() => {
            if (formFeedbackNotice) {
              formFeedbackNotice.textContent = "";
              formFeedbackNotice.className = "form-feedback-notice";
            }
          }, 6000);
        }, 1000);
      });
    }

    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.3 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (typeof playSyntheticClick === 'function') {
          playSyntheticClick(720, 0.07, 'triangle');
        }
      });
    }
  }
});


