import React, { useState, useEffect } from 'react';
import { OpeningScene } from '@/components/scenes/OpeningScene';
import { EducationScene } from '@/components/scenes/EducationScene';
import { ExperienceScene } from '@/components/scenes/ExperienceScene';
import { ProjectsScene } from '@/components/scenes/ProjectsScene';
import { CertificationsScene } from '@/components/scenes/CertificationsScene';
import { ContactScene } from '@/components/scenes/ContactScene';

export default function Index() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scene navigation with smooth transitions
  const navigateToScene = (sceneIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScene(sceneIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const nextScene = () => {
    if (currentScene < 5) {
      navigateToScene(currentScene + 1);
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      navigateToScene(currentScene - 1);
    }
  };

  const restartJourney = () => {
    navigateToScene(0);
  };

  // Background music setup (optional)
  useEffect(() => {
    // You can add background music here if desired
    // const audio = new Audio('/path/to/cinematic-music.mp3');
    // audio.loop = true;
    // audio.volume = 0.3;
    // audio.play().catch(() => {}); // Handle autoplay restrictions
    
    return () => {
      // audio.pause();
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextScene();
      } else if (event.key === 'ArrowLeft') {
        prevScene();
      } else if (event.key === 'Home') {
        restartJourney();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentScene]);

  const scenes = [
    <OpeningScene key="opening" onNext={nextScene} />,
    <EducationScene key="education" onNext={nextScene} onPrev={prevScene} />,
    <ExperienceScene key="experience" onNext={nextScene} onPrev={prevScene} />,
    <ProjectsScene key="projects" onNext={nextScene} onPrev={prevScene} />,
    <CertificationsScene key="certifications" onNext={nextScene} onPrev={prevScene} />,
    <ContactScene key="contact" onPrev={prevScene} onRestart={restartJourney} />
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Scene Progress Indicator */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-black/30 backdrop-blur-lg rounded-full px-4 py-2">
          {scenes.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentScene
                  ? 'bg-white scale-125'
                  : index < currentScene
                  ? 'bg-white/60'
                  : 'bg-white/20'
              }`}
              onClick={() => navigateToScene(index)}
            />
          ))}
        </div>
      </div>

      {/* Keyboard Shortcuts Info */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-black/30 backdrop-blur-lg rounded-lg px-4 py-2 text-white/70 text-sm">
          <div>← → Arrow keys to navigate</div>
          <div>Home key to restart</div>
        </div>
      </div>

      {/* Scene Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-black z-40 transition-opacity duration-300" />
      )}

      {/* Current Scene */}
      <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {scenes[currentScene]}
      </div>

      {/* Cinematic Vignette Effect */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
      </div>
    </div>
  );
}