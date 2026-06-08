'use client';

import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroSection({
  eyebrow,
  title,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pixelIndices, setPixelIndices] = useState<Set<number>>(new Set());

  // Animated background with motion lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let time = 0;

    // Define lines with motion
    const lines = Array.from({ length: 12 }, (_, i) => ({
      angle: (i / 12) * Math.PI * 2 + (Math.random() * 0.3 - 0.15),
      speed: Math.random() * 25 + 15,
      offset: Math.random() * 1000,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 600 + 300,
      width: Math.random() * 1.5 + 0.5,
      colors: [
        ['#0080FF', '#00FFFF'],
        ['#FF0080', '#FF00FF'],
        ['#00FF00', '#00FF80'],
        ['#FFFF00', '#FF8000'],
      ][i % 4],
    }));

    const animate = () => {
      time += 0.016;

      // Clear with dark background
      ctx.fillStyle = '#0b0b0b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw motion lines with chromatic effects
      for (const line of lines) {
        const adjustedTime = (time * line.speed + line.offset) % (canvas.width + canvas.height);
        const x1 = line.x + Math.cos(line.angle) * adjustedTime;
        const y1 = line.y + Math.sin(line.angle) * adjustedTime;
        const x2 = x1 - Math.cos(line.angle) * line.length;
        const y2 = y1 - Math.sin(line.angle) * line.length;

        for (let colorIdx = 0; colorIdx < line.colors.length; colorIdx++) {
          const offsetX = colorIdx * 0.3;
          const offsetY = colorIdx * 0.3;
          const gradient = ctx.createLinearGradient(
            x2 + offsetX,
            y2 + offsetY,
            x1 + offsetX,
            y1 + offsetY
          );
          gradient.addColorStop(0, `${line.colors[colorIdx]}00`);
          gradient.addColorStop(0.5, line.colors[colorIdx]);
          gradient.addColorStop(1, `${line.colors[colorIdx]}00`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = line.width * (1 + colorIdx * 0.3);
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.globalAlpha = 0.7 - colorIdx * 0.15;
          ctx.beginPath();
          ctx.moveTo(x2 + offsetX, y2 + offsetY);
          ctx.lineTo(x1 + offsetX, y1 + offsetY);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Pixel font swap animation
  useEffect(() => {
    const titleText = title;
    const swappableIndices: number[] = [];

    for (let i = 0; i < titleText.length; i++) {
      if (/[a-zA-Z0-9]/.test(titleText[i])) {
        swappableIndices.push(i);
      }
    }

    if (swappableIndices.length === 0) return;

    const updatePixels = () => {
      const newSwapped = new Set<number>();
      const numToSwap = Math.floor(Math.random() * 3) + 1;

      for (let i = 0; i < numToSwap; i++) {
        const randomIndex =
          swappableIndices[Math.floor(Math.random() * swappableIndices.length)];
        newSwapped.add(randomIndex);
      }

      setPixelIndices(new Set(newSwapped));
    };

    updatePixels();
    const interval = setInterval(updatePixels, 700 + Math.random() * 500);

    return () => clearInterval(interval);
  }, [title]);

  // Render title with pixel font swaps
  const renderTitle = () => {
    return title.split('').map((char, idx) => (
      <span
        key={idx}
        data-pixel={pixelIndices.has(idx)}
        className={pixelIndices.has(idx) ? 'hero-title-pixel' : ''}
      >
        {char}
      </span>
    ));
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <canvas ref={canvasRef} />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">{eyebrow}</div>

        <h1 className="hero-title">{renderTitle()}</h1>

        <div className="hero-buttons">
          <button className="button button-primary" onClick={onPrimaryClick}>
            {primaryButtonText}
          </button>
          <button className="button button-secondary" onClick={onSecondaryClick}>
            {secondaryButtonText}
          </button>
        </div>
      </div>

      <style jsx>{`
        .hero-title-pixel {
          font-family: apkarchivr21, monospace;
          font-weight: 300;
          display: inline-block;
          text-shadow: var(--text-shadow-rgb);
        }
      `}</style>
    </section>
  );
}
