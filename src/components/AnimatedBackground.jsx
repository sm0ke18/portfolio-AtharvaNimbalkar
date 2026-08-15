import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Mouse & Touch interaction state
    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 170,
      active: false,
    };

    const handlePointerMove = (x, y) => {
      pointer.targetX = x;
      pointer.targetY = y;
      pointer.active = true;
    };

    const onMouseMove = (e) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onPointerLeave = () => {
      pointer.targetX = -1000;
      pointer.targetY = -1000;
      pointer.active = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onPointerLeave);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onPointerLeave);

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle Configuration
    let particles = [];
    const getParticleCount = () => {
      if (window.innerWidth < 768) return 40;
      if (window.innerWidth < 1200) return 70;
      return 100;
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = initial ? Math.random() * width : (Math.random() > 0.5 ? 0 : width);
        this.y = initial ? Math.random() * height : Math.random() * height;
        this.radius = Math.random() * 1.8 + 0.8;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.targetAlpha = this.alpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.008;
        this.pulseAngle = Math.random() * Math.PI * 2;
        // 22% of particles have subtle lime accent tint (#ccff00), others are pure white/silver
        this.isAccent = Math.random() < 0.22;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        this.pulseAngle += this.pulseSpeed;
        this.alpha = Math.max(0.1, this.targetAlpha + Math.sin(this.pulseAngle) * 0.18);

        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        // Pointer reaction
        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < pointer.radius && dist > 0) {
          const force = (1 - dist / pointer.radius) * 1.8;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.4;
          this.y -= Math.sin(angle) * force * 1.4;
        }
      }

      draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        if (this.isAccent) {
          context.fillStyle = `rgba(204, 255, 0, ${this.alpha * 0.9})`;
          context.shadowColor = 'rgba(204, 255, 0, 0.4)';
          context.shadowBlur = 8;
        } else {
          context.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.85})`;
          context.shadowColor = 'rgba(255, 255, 255, 0.25)';
          context.shadowBlur = 4;
        }
        context.fill();
        context.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      const count = getParticleCount();
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Floating Ambient Light Nebulae
    const orbs = [
      { x: 0.18, y: 0.25, radius: 480, color: 'rgba(204, 255, 0, 0.045)', phase: 0 },
      { x: 0.82, y: 0.2, radius: 560, color: 'rgba(168, 85, 247, 0.04)', phase: 2 },
      { x: 0.5, y: 0.75, radius: 520, color: 'rgba(255, 255, 255, 0.025)', phase: 4 },
      { x: 0.2, y: 0.88, radius: 440, color: 'rgba(204, 255, 0, 0.035)', phase: 1.5 },
    ];

    let time = 0;

    const render = () => {
      time += 0.008;

      pointer.x += (pointer.targetX - pointer.x) * 0.12;
      pointer.y += (pointer.targetY - pointer.y) * 0.12;

      ctx.fillStyle = '#030303';
      ctx.fillRect(0, 0, width, height);

      // 1. Render animated ambient light orbs
      orbs.forEach((orb) => {
        const currentX = (orb.x + Math.sin(time + orb.phase) * 0.08) * width;
        const currentY = (orb.y + Math.cos(time + orb.phase) * 0.08) * height;

        const gradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          orb.radius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // 2. Render pointer field glow
      if (pointer.x > 0 && pointer.y > 0) {
        const pointerGlow = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          240
        );
        pointerGlow.addColorStop(0, 'rgba(204, 255, 0, 0.06)');
        pointerGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
        pointerGlow.addColorStop(1, 'transparent');

        ctx.fillStyle = pointerGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Connect particles with distance-based constellation lines
      const maxDistance = width < 768 ? 95 : 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < maxDistance) {
            const lineAlpha = (1 - distance / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            if (particles[i].isAccent || particles[j].isAccent) {
              ctx.strokeStyle = `rgba(204, 255, 0, ${lineAlpha * 0.85})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha * 0.7})`;
            }
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      // 4. Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onPointerLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Subtle scanline / vignette texture for modern depth */}
      <div 
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 35%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
