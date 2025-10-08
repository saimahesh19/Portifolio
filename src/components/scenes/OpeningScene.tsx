import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CinematicScene } from '../CinematicScene';
import { Button } from '@/components/ui/button';

interface OpeningSceneProps {
  onNext: () => void;
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({ onNext }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.3"
    );
  }, []);

  return (
    <CinematicScene 
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      particleEffect={true}
    >
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* Cityscape silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 h-32">
            {/* City buildings silhouette */}
            <div className="flex items-end justify-center h-full space-x-1">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="bg-black/60 animate-pulse"
                  style={{
                    width: Math.random() * 30 + 10 + 'px',
                    height: Math.random() * 80 + 20 + 'px'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 max-w-4xl z-10">
          <div ref={titleRef} className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              THE MAHESH
            </h1>
            <h2 className="text-5xl md:text-6xl font-light text-white/90">
              RÉSUMÉ EXPERIENCE
            </h2>
          </div>

          <div ref={subtitleRef} className="space-y-6">
            <p className="text-xl md:text-2xl text-blue-200 font-light leading-relaxed">
              Welcome to the cinematic journey of
            </p>
            <p className="text-3xl md:text-4xl font-semibold text-white">
              Marpu Sai Mahesh
            </p>
            <p className="text-lg md:text-xl text-cyan-300">
              AI Engineer • DevOps Specialist • Cybersecurity Explorer
            </p>
          </div>

          <Button
            ref={buttonRef}
            onClick={onNext}
            className="mt-12 px-12 py-6 text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Begin Journey
          </Button>
        </div>

        {/* Floating tech icons */}
        <div className="absolute inset-0 pointer-events-none">
          {['AI', 'ML', 'AWS', 'Docker', 'Python', 'DevOps'].map((tech, i) => (
            <div
              key={tech}
              className="absolute text-white/10 text-lg font-mono animate-pulse"
              style={{
                left: Math.random() * 80 + 10 + '%',
                top: Math.random() * 60 + 20 + '%',
                animationDelay: i * 0.5 + 's'
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </CinematicScene>
  );
};