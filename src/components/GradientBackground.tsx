import React, { useEffect, useRef } from 'react';

const GradientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    };

    const drawBackground = () => {
      // Create gradient from top to bottom
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#4a5568');    // Lighter blue-gray at top
      gradient.addColorStop(0.5, '#2d3748');  // Medium dark blue
      gradient.addColorStop(1, '#1a202c');    // Deep navy at bottom

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle noise texture
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 10 - 5;
        data[i] += noise;     // R
        data[i + 1] += noise; // G
        data[i + 2] += noise; // B
      }

      ctx.putImageData(imageData, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(to bottom, #4a5568, #2d3748, #1a202c)',
        zIndex: 0
      }}
    />
  );
};

export default GradientBackground;
