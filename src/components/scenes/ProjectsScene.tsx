import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CinematicScene } from '../CinematicScene';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';

interface ProjectsSceneProps {
  onNext: () => void;
  onPrev: () => void;
}

export const ProjectsScene: React.FC<ProjectsSceneProps> = ({ onNext, onPrev }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.children;
      gsap.fromTo(cards,
        { 
          y: 100, 
          opacity: 0, 
          rotationY: -15,
          scale: 0.9
        },
        { 
          y: 0, 
          opacity: 1, 
          rotationY: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 0.5
        }
      );
    }
  }, []);

  const projects = [
    {
      title: "SentinelOps",
      subtitle: "AI-Powered Observability Management",
      period: "Jul 2025 – Sep 2025",
      description: "Engineered observability pipeline processing 100K+ log/metric events per second using Kafka, Telegraf, VictoriaMetrics, Loki, and Grafana.",
      achievements: [
        "Integrated LLM-based incident response system",
        "Automated 70% of error-to-incident creation",
        "Significantly improved operational efficiency"
      ],
      tech: ["Kafka", "Telegraf", "VictoriaMetrics", "Loki", "Grafana", "LLM"],
      icon: "🛡️",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "BhashaBridge",
      subtitle: "Voice-to-Voice Translator",
      period: "Jun 2025 – Jul 2025",
      description: "Delivered a real-time multilingual voice translation web app supporting 6+ Indian languages.",
      achievements: [
        "Implemented end-to-end speech pipeline",
        "Cut manual translation effort by 80%",
        "Improved accessibility for speech-impaired users"
      ],
      tech: ["Speech Recognition", "NLP", "Web Audio API", "React"],
      icon: "🗣️",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "FedEx Scam Detection",
      subtitle: "Android Application for Phone Calls",
      period: "Jun 2024 – Apr 2025",
      description: "Developed dual text-classification models (word-level and sentence-level), boosting scam call detection accuracy to 81%.",
      achievements: [
        "Generated decision-based two text models",
        "Word-level and sentence-level classification",
        "81% scam call detection accuracy"
      ],
      tech: ["Android", "Machine Learning", "NLP", "Text Classification"],
      icon: "📱",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Vericall",
      subtitle: "DeepFake Call Scam Detection Prototype",
      period: "Dec 2023 – Mar 2024",
      description: "Trained a deepfake call detection model using Python, ML, and Flask API, achieving 97.65% accuracy.",
      achievements: [
        "Assessed four ML algorithms",
        "Selected Random Forest as optimal choice",
        "97.65% accuracy in deepfake detection"
      ],
      tech: ["Python", "Machine Learning", "Flask", "Random Forest"],
      icon: "🔍",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "MirrorVerse",
      subtitle: "VR-based SmartMirror Software",
      period: "Dec 2023 – Mar 2024",
      description: "Implemented real-time video analysis software with two types of mirrors: a smart mirror and a cartoon mirror.",
      achievements: [
        "Integrated DeepFace's emotion detection",
        "Spotify music recommendation system",
        "Based on facial emotions analysis"
      ],
      tech: ["Computer Vision", "DeepFace", "Spotify API", "VR"],
      icon: "🪞",
      color: "from-teal-500 to-blue-600"
    }
  ];

  return (
    <CinematicScene 
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"
      particleEffect={true}
    >
      {/* High-tech lab environment */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black/70 to-transparent" />
        {/* Tech grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {[...Array(400)].map((_, i) => (
              <div key={i} className="border border-cyan-500/20" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-7xl w-full space-y-12">
          {/* Scene Title */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Innovation Lab
            </h2>
            <p className="text-xl text-purple-200">
              "The best way to predict the future is to invent it."
            </p>
          </div>

          {/* Projects Grid */}
          <div ref={gridRef} className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Card key={i} className="bg-black/40 backdrop-blur-lg border-purple-500/30 p-6 hover:bg-black/50 transition-all duration-300 group cursor-pointer">
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{project.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-purple-200">{project.subtitle}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Period */}
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-300 flex items-center space-x-1">
                      <Zap className="w-4 h-4" />
                      <span>Key Achievements</span>
                    </h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, j) => (
                        <li key={j} className="text-xs text-gray-400 flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-300">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-200 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
                      onClick={() => window.open('https://github.com/saimahesh19', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            <Button
              onClick={onPrev}
              variant="outline"
              className="px-8 py-3 text-lg border-purple-500 text-purple-300 hover:bg-purple-500/20"
            >
              ← Previous
            </Button>
            
            <div className="text-center">
              <p className="text-purple-200 text-lg">
                "Innovation through code, impact through technology"
              </p>
            </div>
            
            <Button
              onClick={onNext}
              className="px-8 py-3 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
            >
              Next →
            </Button>
          </div>
        </div>
      </div>
    </CinematicScene>
  );
};