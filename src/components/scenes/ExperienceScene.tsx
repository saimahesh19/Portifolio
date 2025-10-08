import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CinematicScene } from '../CinematicScene';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, TrendingUp } from 'lucide-react';

interface ExperienceSceneProps {
  onNext: () => void;
  onPrev: () => void;
}

export const ExperienceScene: React.FC<ExperienceSceneProps> = ({ onNext, onPrev }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate timeline
    if (timelineRef.current) {
      tl.fromTo(timelineRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      );
    }

    // Animate achievements
    if (achievementsRef.current) {
      const achievements = achievementsRef.current.children;
      tl.fromTo(achievements,
        { y: 50, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)"
        },
        "-=0.8"
      );
    }
  }, []);

  const achievements = [
    {
      icon: "🤖",
      title: "GenAI Voice Translation POC",
      description: "Designed hybrid voice translation using Ollama and LLaMA models for real-time multilingual applications"
    },
    {
      icon: "📊",
      title: "AI Log Monitoring Platform",
      description: "Built platform with Python, Kafka, Grafana, Docker, AWS - 70% automated incident responses"
    },
    {
      icon: "⚡",
      title: "Operational Pipeline Enhancement",
      description: "Developed scripts for log aggregation and anomaly detection - 40% efficiency improvement"
    },
    {
      icon: "🐳",
      title: "Container Orchestration",
      description: "Containerized services across Linux environments - 30% reduction in deployment errors"
    }
  ];

  return (
    <CinematicScene 
      className="bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900"
      particleEffect={true}
    >
      {/* Office environment */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
        {/* Office windows */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-900/50 to-transparent" />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-7xl w-full space-y-12">
          {/* Scene Title */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-blue-200">
              "Innovation distinguishes between a leader and a follower."
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Company Timeline */}
            <div ref={timelineRef} className="space-y-8">
              <Card className="bg-black/40 backdrop-blur-lg border-blue-500/30 p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-4 rounded-full">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        Relevance Labs
                      </h3>
                      <p className="text-xl text-blue-200 mb-4">
                        Software Engineer Trainee (DevOps)
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-white/90">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <span>Feb 2025 – Present</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <span>Bangalore, India</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="text-lg font-semibold text-blue-300 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'Kafka', 'Grafana', 'Docker', 'AWS', 'Linux', 'Ollama', 'LLaMA'].map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Key Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span>Key Achievements</span>
              </h3>
              
              <div ref={achievementsRef} className="space-y-4">
                {achievements.map((achievement, i) => (
                  <Card key={i} className="bg-black/30 backdrop-blur-lg border-gray-500/30 p-6 hover:bg-black/40 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            <Button
              onClick={onPrev}
              variant="outline"
              className="px-8 py-3 text-lg border-blue-500 text-blue-300 hover:bg-blue-500/20"
            >
              ← Previous
            </Button>
            
            <div className="text-center">
              <p className="text-blue-200 text-lg">
                "Transforming ideas into scalable solutions"
              </p>
            </div>
            
            <Button
              onClick={onNext}
              className="px-8 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Next →
            </Button>
          </div>
        </div>
      </div>
    </CinematicScene>
  );
};