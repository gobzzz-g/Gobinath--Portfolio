import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseHoverTimeRef = useRef<number>(0);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 6000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 3 + 1,
        });
      }
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Check if mouse moved significantly
      const dx = newX - lastMousePosRef.current.x;
      const dy = newY - lastMousePosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Reset timer if mouse moved more than 50 pixels
      if (distance > 50) {
        mouseHoverTimeRef.current = Date.now();
        lastMousePosRef.current = { x: newX, y: newY };
      }
      
      mouseRef.current = { x: newX, y: newY };
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      const isDark = document.documentElement.classList.contains('dark');
      
      // Update and draw particles
      const currentTime = Date.now();
      const hoverDuration = (currentTime - mouseHoverTimeRef.current) / 1000; // in seconds
      const isAttracting = hoverDuration > 2; // Switch to attraction after 2 seconds
      
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          
          if (isAttracting) {
            // Attract particles after hovering for 2 seconds
            const attractionForce = 0.3 * (1 - distance / 150);
            particle.vx += Math.cos(angle) * attractionForce;
            particle.vy += Math.sin(angle) * attractionForce;
          } else {
            // Repel particles initially
            const repelForce = 0.5 * (1 - distance / 150);
            particle.vx -= Math.cos(angle) * repelForce;
            particle.vy -= Math.sin(angle) * repelForce;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Draw particle
        ctx.fillStyle = isDark 
          ? `rgba(79, 111, 255, 0.8)`
          : `rgba(79, 111, 255, 0.6)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.5;
            ctx.strokeStyle = isDark 
              ? `rgba(79, 111, 255, ${opacity})`
              : `rgba(79, 111, 255, ${opacity * 0.7})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    mouseHoverTimeRef.current = Date.now();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default ParticleBackground;
