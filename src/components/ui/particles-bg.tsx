"use client";

import React, { useEffect, useRef } from 'react';

export interface ParticlesBgProps {
  color?: 'white' | 'red' | 'gold' | 'blue' | string;
  count?: number;
  speed?: number;
  showLines?: boolean;
  className?: string;
}

export const ParticlesBg: React.FC<ParticlesBgProps> = ({
  color = 'white',
  count = 45,
  speed = 0.8,
  showLines = true,
  className = 'absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-inherit'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const resizeObs = new ResizeObserver(handleResize);
    if (canvas.parentElement) resizeObs.observe(canvas.parentElement);

    // Color resolution
    let rgb = '255, 255, 255';
    if (color === 'red') rgb = '239, 68, 68';
    else if (color === 'gold') rgb = '245, 158, 11';
    else if (color === 'blue') rgb = '59, 130, 246';
    else if (color && color.startsWith('#')) {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16) || 255;
      const g = parseInt(hex.substring(2, 4), 16) || 255;
      const b = parseInt(hex.substring(4, 6), 16) || 255;
      rgb = `${r}, ${g}, ${b}`;
    }

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const actualCount = Math.min(count, Math.max(25, Math.floor((width * height) / 14000)));

    for (let i = 0; i < actualCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles & constellation lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;

        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${rgb}, 0.7)`;
        ctx.fill();

        if (showLines) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 120;

            if (dist < maxDist) {
              const lineAlpha = (1 - dist / maxDist) * 0.22;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${rgb}, ${lineAlpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      resizeObs.disconnect();
    };
  }, [color, count, speed, showLines]);

  return <canvas ref={canvasRef} className={className} />;
};
