/**
 * FLUID HOLOGRAPHIC PARTICLE FIELD — Three.js GPU-Accelerated Dynamic System
 * Concept: A living, physics-driven holographic particle manifold that
 * dynamically reforms, scatters, ripples with standing waves, and reacts
 * to cursor fluid velocity with spring drag.
 * Award-winning studio-grade creative development.
 */

class FluidHolographicField {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;

    // Simulation parameters
    this.particleCount = 3800;
    this.particles = null;
    this.positions = null;
    this.basePositions = null;
    this.velocities = null;
    this.phases = null;
    this.geometry = null;
    this.material = null;

    // Interaction states
    this.mouseWorld = new THREE.Vector3(0, 0, 0);
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0, speed: 0, lastX: 0, lastY: 0 };
    this.time = 0;
    this.introProgress = 0;
    this.scrollProgress = 0;
    this.pulseEnergy = 0;
    this.scatterFactor = 0;
    this.targetScatter = 0;
    this.isVisible = false;

    // Filament lines
    this.filamentMesh = null;

    this.init();
  }

  init() {
    // 1. Scene setup
    this.scene = new THREE.Scene();

    // 2. Camera setup - Positioned slightly offset for asymmetric editorial tension
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    this.camera.position.set(0.35, 0, 6.0); // Subtle asymmetric right bias

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    // 4. Build Fluid Holographic Manifold
    this.manifoldGroup = new THREE.Group();
    this.manifoldGroup.scale.set(0.001, 0.001, 0.001);
    this.scene.add(this.manifoldGroup);

    this.buildParticleField();
    this.buildFilamentStreams();

    // 5. Event Listeners
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: true });

    // 6. Animation Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  buildParticleField() {
    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(this.particleCount * 3);
    this.basePositions = new Float32Array(this.particleCount * 3);
    this.velocities = new Float32Array(this.particleCount * 3);
    this.phases = new Float32Array(this.particleCount);
    const colors = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);

    // Strict Canonical Palette Tokens: Off-White & Neon Mint
    const colorWhite = new THREE.Color(0xf1f5f9);
    const colorMint = new THREE.Color(0x00e599);

    for (let i = 0; i < this.particleCount; i++) {
      let x, y, z;
      const typeRand = Math.random();

      if (typeRand < 0.65) {
        // Coherent Neural Core: Multi-layered spherical manifold
        const phi = Math.acos(-1 + (2 * i) / (this.particleCount * 0.65));
        const theta = Math.sqrt(this.particleCount * Math.PI) * phi;
        const radius = 0.55 + Math.pow(Math.random(), 0.65) * 0.95;

        x = radius * Math.sin(phi) * Math.cos(theta);
        y = radius * Math.sin(phi) * Math.sin(theta);
        z = radius * Math.cos(phi);
      } else if (typeRand < 0.88) {
        // Double-Helix & Orbital Data Filament Tendrils
        const t = (i / this.particleCount) * Math.PI * 8;
        const rHelix = 1.35 + Math.sin(t * 2) * 0.25;
        const sign = i % 2 === 0 ? 1 : -1;

        x = Math.cos(t) * rHelix;
        y = (Math.random() - 0.5) * 1.8;
        z = Math.sin(t) * rHelix * sign * 0.8;
      } else {
        // Ambient Quantum Dust
        const rCloud = 1.6 + Math.random() * 0.7;
        const u = Math.random();
        const v = Math.random();
        const thetaCloud = u * 2.0 * Math.PI;
        const phiCloud = Math.acos(2.0 * v - 1.0);

        x = rCloud * Math.sin(phiCloud) * Math.cos(thetaCloud);
        y = rCloud * Math.sin(phiCloud) * Math.sin(thetaCloud);
        z = rCloud * Math.cos(phiCloud);
      }

      this.positions[i * 3] = x;
      this.positions[i * 3 + 1] = y;
      this.positions[i * 3 + 2] = z;

      this.basePositions[i * 3] = x;
      this.basePositions[i * 3 + 1] = y;
      this.basePositions[i * 3 + 2] = z;

      this.velocities[i * 3] = 0;
      this.velocities[i * 3 + 1] = 0;
      this.velocities[i * 3 + 2] = 0;

      this.phases[i] = Math.random() * Math.PI * 2;

      // Color distribution: 68% off-white stardust, 32% neon mint
      let c;
      const cPick = Math.random();
      if (cPick < 0.32) {
        c = colorMint;
      } else {
        c = colorWhite;
      }

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      // Particle size: delicate stardust points (1.0 to 2.2 px)
      sizes[i] = Math.random() * 1.2 + 0.9;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom Holographic Chromatic Aberration Particle Shader
    const customParticleShader = {
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        pulse: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vDepth;
        uniform float pixelRatio;
        uniform float time;
        uniform float pulse;

        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDepth = -mvPosition.z;
          
          // Size attenuation with subtle pulse expansion
          float pScale = 1.0 + pulse * 0.4;
          gl_PointSize = clamp(size * pixelRatio * pScale * (26.0 / vDepth), 1.0, 5.5);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vDepth;

        void main() {
          // Circular Gaussian bokeh mask
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;

          // Holographic edge dispersion: subtle chromatic shift at border
          float core = smoothstep(0.48, 0.05, dist);
          float rim = smoothstep(0.5, 0.35, dist) * 0.5;

          vec3 holoColor = vColor;
          holoColor.r += rim * 0.2;
          holoColor.b += rim * 0.4;

          float alpha = core * 0.85;
          gl_FragColor = vec4(holoColor, alpha);
        }
      `
    };

    this.material = new THREE.ShaderMaterial({
      uniforms: customParticleShader.uniforms,
      vertexShader: customParticleShader.vertexShader,
      fragmentShader: customParticleShader.fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.particles = new THREE.Points(this.geometry, this.material);
    this.manifoldGroup.add(this.particles);
  }

  buildFilamentStreams() {
    // Interconnecting fluid streams between key anchors
    const filamentPoints = 120;
    const streamPositions = [];

    for (let i = 0; i < filamentPoints; i++) {
      const idxA = Math.floor(Math.random() * (this.particleCount * 0.5)) * 3;
      const idxB = Math.floor(Math.random() * (this.particleCount * 0.5)) * 3;

      const pA = new THREE.Vector3(this.basePositions[idxA], this.basePositions[idxA+1], this.basePositions[idxA+2]);
      const pB = new THREE.Vector3(this.basePositions[idxB], this.basePositions[idxB+1], this.basePositions[idxB+2]);

      if (pA.distanceTo(pB) < 0.6) {
        streamPositions.push(pA.x, pA.y, pA.z, pB.x, pB.y, pB.z);
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(streamPositions, 3));

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00e599,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending
    });

    this.filamentMesh = new THREE.LineSegments(lineGeo, lineMat);
    this.manifoldGroup.add(this.filamentMesh);
  }

  reveal(duration = 2.0) {
    this.isVisible = true;
    gsap.to(this, {
      introProgress: 1,
      duration: duration,
      ease: "power3.out",
      onUpdate: () => {
        if (this.manifoldGroup) {
          this.manifoldGroup.scale.setScalar(this.introProgress);
        }
      }
    });

    this.pulse(1.4);
  }

  pulse(intensity = 1.0) {
    this.pulseEnergy = intensity;
    gsap.to(this, {
      pulseEnergy: 0,
      duration: 1.2,
      ease: "power2.out"
    });
  }

  scatter(amount = 1.0) {
    this.targetScatter = amount;
    gsap.to(this, {
      targetScatter: 0,
      duration: 1.4,
      ease: "elastic.out(1, 0.45)"
    });
  }

  onMouseMove(e) {
    const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
    const ndcY = -(e.clientY / window.innerHeight) * 2 + 1;

    // Track mouse speed for fluid turbulence
    const dx = e.clientX - this.mouse.lastX;
    const dy = e.clientY - this.mouse.lastY;
    this.mouse.speed = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.02, 2.0);
    this.mouse.lastX = e.clientX;
    this.mouse.lastY = e.clientY;

    this.mouse.targetX = ndcX;
    this.mouse.targetY = ndcY;

    // Unproject to 3D interaction plane at z = 0
    const vector = new THREE.Vector3(ndcX, ndcY, 0.5);
    vector.unproject(this.camera);
    const dir = vector.sub(this.camera.position).normalize();
    const distance = -this.camera.position.z / dir.z;
    const worldPos = this.camera.position.clone().add(dir.multiplyScalar(distance));

    this.mouseWorld.copy(worldPos);
  }

  onTouchMove(e) {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const ndcX = (touch.clientX / window.innerWidth) * 2 - 1;
      const ndcY = -(touch.clientY / window.innerHeight) * 2 + 1;
      this.mouse.targetX = ndcX;
      this.mouse.targetY = ndcY;
    }
  }

  setScrollProgress(progress) {
    this.scrollProgress = progress;
  }

  onResize() {
    if (!this.camera || !this.renderer) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (this.material && this.material.uniforms) {
      this.material.uniforms.pixelRatio.value = Math.min(window.devicePixelRatio, 2);
    }
  }

  animate() {
    requestAnimationFrame(this.animate);

    this.time += 0.014;

    // Smooth lerp for mouse coordinates
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.055;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.055;

    this.scatterFactor += (this.targetScatter - this.scatterFactor) * 0.08;

    if (this.manifoldGroup && this.isVisible) {
      // Slow organic orbital rotation + responsive mouse tilt
      this.manifoldGroup.rotation.y += 0.0035 + this.mouse.speed * 0.004;
      this.manifoldGroup.rotation.x = this.mouse.y * 0.35;
      this.manifoldGroup.rotation.z = -this.mouse.x * 0.25;

      // Subtle asymmetric float
      this.manifoldGroup.position.y = Math.sin(this.time * 0.8) * 0.06;
      this.manifoldGroup.position.x = 0.35 + Math.cos(this.time * 0.6) * 0.04;

      // Update shader uniforms
      if (this.material && this.material.uniforms) {
        this.material.uniforms.time.value = this.time;
        this.material.uniforms.pulse.value = this.pulseEnergy;
      }

      // Physics loop: Harmonic Wave Simulation + Fluid Cursor Repulsion + Spring Restoring Force
      const positions = this.positions;
      const basePositions = this.basePositions;
      const velocities = this.velocities;
      const phases = this.phases;
      const count = this.particleCount;

      const mWorld = this.mouseWorld;
      const mouseActive = Math.abs(this.mouse.targetX) > 0.01 || Math.abs(this.mouse.targetY) > 0.01;
      const pulse = this.pulseEnergy;
      const scatter = this.scatterFactor;
      const time = this.time;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const bx = basePositions[i3];
        const by = basePositions[i3 + 1];
        const bz = basePositions[i3 + 2];

        // 1. Organic Harmonic Wave Displacement
        const distFromCenter = Math.sqrt(bx * bx + by * by + bz * bz);
        const wave = Math.sin(distFromCenter * 3.2 - time * 2.0 + phases[i]) * 0.07;
        const curlX = Math.sin(by * 2.2 + time) * 0.04;
        const curlY = Math.cos(bz * 2.2 + time) * 0.04;
        const curlZ = Math.sin(bx * 2.2 + time) * 0.04;

        // Target equilibrium with wave & scatter offset
        let targetX = bx + (bx / (distFromCenter + 0.01)) * wave + curlX;
        let targetY = by + (by / (distFromCenter + 0.01)) * wave + curlY;
        let targetZ = bz + (bz / (distFromCenter + 0.01)) * wave + curlZ;

        // Dynamic scatter expansion
        if (scatter > 0.01) {
          targetX += (bx / (distFromCenter + 0.01)) * scatter * 1.5;
          targetY += (by / (distFromCenter + 0.01)) * scatter * 1.5;
          targetZ += (bz / (distFromCenter + 0.01)) * scatter * 1.5;
        }

        // 2. Fluid Cursor Disturbance (Repulsion within influence bubble)
        const curX = positions[i3];
        const curY = positions[i3 + 1];
        const curZ = positions[i3 + 2];

        if (mouseActive) {
          const dx = curX - mWorld.x;
          const dy = curY - mWorld.y;
          const dz = curZ - mWorld.z;
          const d2 = dx * dx + dy * dy + dz * dz;

          if (d2 < 1.44) { // within 1.2 unit radius
            const d = Math.sqrt(d2);
            const force = (1.2 - d) / 1.2;
            const push = force * (0.08 + this.mouse.speed * 0.12);
            velocities[i3] += (dx / (d + 0.001)) * push;
            velocities[i3 + 1] += (dy / (d + 0.001)) * push;
            velocities[i3 + 2] += (dz / (d + 0.001)) * push;
          }
        }

        // Pulse expansion wave
        if (pulse > 0.01) {
          const pPush = pulse * 0.03 * (distFromCenter * 0.8 + 0.2);
          velocities[i3] += (bx / (distFromCenter + 0.01)) * pPush;
          velocities[i3 + 1] += (by / (distFromCenter + 0.01)) * pPush;
          velocities[i3 + 2] += (bz / (distFromCenter + 0.01)) * pPush;
        }

        // 3. Spring restoring force toward harmonic target
        const springK = 0.085;
        const damping = 0.88;

        velocities[i3] += (targetX - curX) * springK;
        velocities[i3 + 1] += (targetY - curY) * springK;
        velocities[i3 + 2] += (targetZ - curZ) * springK;

        velocities[i3] *= damping;
        velocities[i3 + 1] *= damping;
        velocities[i3 + 2] *= damping;

        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
      }

      this.geometry.attributes.position.needsUpdate = true;

      // Scroll Fly-Through: Camera dives forward through the holographic particle field!
      const scrollZ = 6.0 - this.scrollProgress * 7.5;
      const manifoldScale = (1.0 + this.scrollProgress * 2.5) * this.introProgress;

      this.camera.position.z = scrollZ;
      this.manifoldGroup.scale.setScalar(manifoldScale);
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// Global instance export
window.FluidHolographicField = FluidHolographicField;

