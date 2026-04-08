import { useEffect, useRef } from 'react';

const VerticesBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = 100; 
    const connectionDistance = 160; 
    const mouse = { x: null, y: null, radius: 240 };
    const maxAttracted = 15; // User requested limit: Max 15 connected to cursor

    const resize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 1;
        this.vx = (Math.random() - 0.5) * 1.1;
        this.vy = (Math.random() - 0.5) * 1.1;
        this.originalVx = this.vx;
        this.originalVy = this.vy;
        this.isAttractedNow = false;
      }

      update(attractedCount) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.isAttractedNow = false;

        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only attract if within radius AND we haven't reached the 15-particle limit
          if (distance < mouse.radius && attractedCount < maxAttracted) {
             const force = (mouse.radius - distance) / mouse.radius;
             
             if (distance > 70) {
                this.x += (dx / distance) * force * 1.5;
                this.y += (dy / distance) * force * 1.5;
                this.isAttractedNow = true;
             } else if (distance < 55) {
                this.x -= (dx / distance) * 0.4;
                this.y -= (dy / distance) * 0.4;
                this.isAttractedNow = true; 
             }
          } else {
             // Return to regular drift if not "chosen" by the magnet
             this.vx += (this.originalVx - this.vx) * 0.05;
             this.vy += (this.originalVy - this.vy) * 0.05;
          }
        }
        return this.isAttractedNow;
      }

      draw() {
        ctx.fillStyle = this.isAttractedNow ? 'rgba(0, 242, 255, 0.7)' : 'rgba(0, 242, 255, 0.35)'; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.isAttractedNow ? this.size * 1.2 : this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (mouse.x && mouse.y) {
        ctx.strokeStyle = 'rgba(0, 242, 255, 0.25)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
        ctx.stroke();
      }

      let currentAttracted = 0;

      for (let i = 0; i < particles.length; i++) {
        // Track how many are already attracted in this frame
        const wasAttracted = particles[i].update(currentAttracted);
        if (wasAttracted) currentAttracted++;

        particles[i].draw();

        // Standard Background Connections
        let connections = 0;
        for (let j = i + 1; j < particles.length; j++) {
            if (connections > 5) break; 
            
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                const opacity = 1 - (distance / connectionDistance);
                ctx.strokeStyle = `rgba(0, 242, 255, ${opacity * 0.1})`;
                ctx.lineWidth = 0.4;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                connections++;
            }
        }
        
        // Laser Connections - ONLY for the "Chosen 15"
        if (mouse.x && mouse.y && wasAttracted) {
            let mdx = mouse.x - particles[i].x;
            let mdy = mouse.y - particles[i].y;
            let mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            const mOpacity = 1 - (mDist / 170);
            ctx.strokeStyle = `rgba(0, 242, 255, ${mOpacity * 0.4})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resize);
    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};

export default VerticesBg;
