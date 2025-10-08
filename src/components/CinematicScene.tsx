import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CinematicSceneProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  particleEffect?: boolean;
  onEnter?: () => void;
  onExit?: () => void;
}

export const CinematicScene: React.FC<CinematicSceneProps> = ({
  children,
  className = '',
  backgroundImage,
  particleEffect = false,
  onEnter,
  onExit
}) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sceneRef.current) {
      // Cinematic entrance animation
      gsap.fromTo(sceneRef.current, 
        { 
          opacity: 0, 
          scale: 1.1,
          rotationX: -5
        },
        { 
          opacity: 1, 
          scale: 1,
          rotationX: 0,
          duration: 2,
          ease: "power2.out",
          onComplete: onEnter
        }
      );
    }

    // Particle effect
    if (particleEffect && particlesRef.current) {
      createParticles();
    }

    return () => {
      if (onExit) onExit();
    };
  }, [onEnter, onExit, particleEffect]);

  const createParticles = () => {
    if (!particlesRef.current) return;
    
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-white/20 rounded-full';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particlesRef.current.appendChild(particle);

      gsap.to(particle, {
        y: -100,
        opacity: 0,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        delay: Math.random() * 2
      });
    }
  };

  return (
    <div 
      ref={sceneRef}
      className={`relative min-h-screen overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        perspective: '1000px'
      }}
    >
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />
      
      {/* Particles */}
      {particleEffect && (
        <div ref={particlesRef} className="absolute inset-0 z-20 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-30 h-full">
        {children}
      </div>
      
      {/* Cinematic bars */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-black z-40" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-black z-40" />
    </div>
  );
};