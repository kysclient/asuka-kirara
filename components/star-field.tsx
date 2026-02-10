"use client";

import { useEffect, useRef, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const STAR_COLORS = [
  "255, 255, 255",
  "236, 72, 153",   // pink-500
  "168, 85, 247",   // purple-500
  "129, 140, 248",  // indigo-400
  "251, 191, 36",   // amber-400
];

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const createStars = useCallback((width: number, height: number) => {
    const count = Math.floor((width * height) / 6000);
    const stars: Star[] = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.15 + 0.02,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      });
    }
    return stars;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
      starsRef.current = createStars(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const spawnShootingStar = () => {
      if (shootingStarsRef.current.length < 2 && Math.random() < 0.003) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        shootingStarsRef.current.push({
          x: Math.random() * w * 0.8,
          y: Math.random() * h * 0.4,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
          opacity: 1,
          life: 0,
          maxLife: Math.random() * 40 + 30,
        });
      }
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      time += 1;

      // Draw stars
      for (const star of starsRef.current) {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const opacity = star.opacity * (0.5 + twinkle * 0.5);

        // Mouse interaction - glow near cursor
        const dx = star.x - mouseRef.current.x;
        const dy = star.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseGlow = dist < 150 ? (1 - dist / 150) * 0.6 : 0;

        const finalSize = star.size + mouseGlow * 2;
        const finalOpacity = Math.min(opacity + mouseGlow, 1);

        // Glow effect for larger stars
        if (finalSize > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, finalSize * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color}, ${finalOpacity * 0.1})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${finalOpacity})`;
        ctx.fill();

        // Slow upward drift
        star.y -= star.speed;
        if (star.y < -5) {
          star.y = h + 5;
          star.x = Math.random() * w;
        }
      }

      // Shooting stars
      spawnShootingStar();
      shootingStarsRef.current = shootingStarsRef.current.filter((ss) => {
        ss.life += 1;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity = 1 - ss.life / ss.maxLife;

        if (ss.opacity <= 0) return false;

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, `rgba(255, 255, 255, 0)`);
        grad.addColorStop(0.6, `rgba(236, 72, 153, ${ss.opacity * 0.4})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${ss.opacity})`;
        ctx.fill();

        return true;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [createStars]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
