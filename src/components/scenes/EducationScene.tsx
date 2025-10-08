import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CinematicScene } from '../CinematicScene';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

interface EducationSceneProps {
  onNext: () => void;
  onPrev: () => void;
}

export const EducationScene: React.FC<EducationSceneProps> = ({ onNext, onPrev }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(contentRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      tl.fromTo(cards,
        { y: 50, opacity: 0, rotationX: -15 },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)"
        },
        "-=0.5"
      );
    }
  }, []);

  return (
    <CinematicScene 
      className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900"
      particleEffect={true}
    >
      {/* Library environment */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black/70 to-transparent" />
        {/* Bookshelf silhouettes */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/40 to-transparent" />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div ref={contentRef} className="max-w-6xl w-full space-y-12">
          {/* Scene Title */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Academic Foundation
            </h2>
            <p className="text-xl text-amber-200">
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            </p>
          </div>

          {/* Education Cards */}
          <div ref={cardsRef} className="grid gap-8">
            <Card className="bg-black/30 backdrop-blur-lg border-amber-500/30 p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-full">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Amrita Vishwa Vidyapeetham
                    </h3>
                    <p className="text-xl text-amber-200 mb-4">
                      B-Tech | Computer Science and Engineering with Specialization in Cyber Security
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-white/90">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-amber-400" />
                      <span>Oct 2021 – May 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-amber-400" />
                      <span>Chennai, Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-amber-400" />
                      <span className="font-bold">CGPA: 9.01</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-amber-300 mb-3">Core Specializations</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {[
                        'Cybersecurity & Ethical Hacking',
                        'Machine Learning & AI',
                        'Cloud Computing & DevOps',
                        'Distributed Systems'
                      ].map((skill, i) => (
                        <div key={i} className="bg-amber-500/20 px-3 py-2 rounded-lg text-white/90">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            <Button
              onClick={onPrev}
              variant="outline"
              className="px-8 py-3 text-lg border-amber-500 text-amber-300 hover:bg-amber-500/20"
            >
              ← Previous
            </Button>
            
            <div className="text-center">
              <p className="text-amber-200 text-lg">
                "Building the foundation for innovation in AI and Cybersecurity"
              </p>
            </div>
            
            <Button
              onClick={onNext}
              className="px-8 py-3 text-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            >
              Next →
            </Button>
          </div>
        </div>
      </div>
    </CinematicScene>
  );
};