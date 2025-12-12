import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Stars
    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    // Neon lines
    const neonLines: { x: number; y: number; length: number; speed: number; hue: number }[] = [];
    for (let i = 0; i < 8; i++) {
      neonLines.push({
        x: Math.random() * canvas.width,
        y: -100 - Math.random() * 500,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 2 + 1,
        hue: 270 + Math.random() * 30,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw galaxy gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      );
      gradient.addColorStop(0, 'rgba(60, 30, 90, 0.3)');
      gradient.addColorStop(0.5, 'rgba(30, 20, 60, 0.2)');
      gradient.addColorStop(1, 'rgba(10, 10, 20, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach((star) => {
        const twinkle = Math.sin(Date.now() * 0.002 * star.speed) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 160, 255, ${star.opacity * twinkle})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 100, 255, ${star.opacity * twinkle * 0.2})`;
        ctx.fill();
      });

      // Draw and animate neon lines
      neonLines.forEach((line) => {
        const gradient = ctx.createLinearGradient(line.x, line.y, line.x, line.y + line.length);
        gradient.addColorStop(0, `hsla(${line.hue}, 100%, 70%, 0)`);
        gradient.addColorStop(0.5, `hsla(${line.hue}, 100%, 70%, 0.8)`);
        gradient.addColorStop(1, `hsla(${line.hue}, 100%, 70%, 0)`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();

        // Glow
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${line.hue}, 100%, 70%, 0.3)`;
        ctx.lineWidth = 6;
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();

        line.y += line.speed;

        if (line.y > canvas.height + 100) {
          line.y = -100 - Math.random() * 200;
          line.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default GalaxyBackground;
