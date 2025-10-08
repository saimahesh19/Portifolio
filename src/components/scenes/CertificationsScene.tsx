import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CinematicScene } from '../CinematicScene';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, BookOpen, Trophy } from 'lucide-react';

interface CertificationsSceneProps {
  onNext: () => void;
  onPrev: () => void;
}

export const CertificationsScene: React.FC<CertificationsSceneProps> = ({ onNext, onPrev }) => {
  const trophiesRef = useRef<HTMLDivElement>(null);
  const publicationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate trophies
    if (trophiesRef.current) {
      const trophies = trophiesRef.current.children;
      tl.fromTo(trophies,
        { 
          y: 100, 
          opacity: 0, 
          rotationX: -30,
          scale: 0.8
        },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }
      );
    }

    // Animate publication
    if (publicationRef.current) {
      tl.fromTo(publicationRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=0.5"
      );
    }
  }, []);

  const certifications = [
    {
      title: "CLF-C02 AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      icon: "☁️",
      color: "from-orange-500 to-red-600",
      link: "https://www.linkedin.com/in/marpumahesh/"
    },
    {
      title: "Azure AI-102: AI Engineer Associate",
      provider: "Microsoft Azure",
      icon: "🧠",
      color: "from-blue-500 to-indigo-600",
      link: "https://www.linkedin.com/in/marpumahesh/"
    },
    {
      title: "Azure AI-900: Fundamentals of AI",
      provider: "Microsoft Azure",
      icon: "🤖",
      color: "from-cyan-500 to-blue-600",
      link: "https://www.linkedin.com/in/marpumahesh/"
    },
    {
      title: "NPTEL Course on Foundation of Cloud IoT Edge ML",
      provider: "NPTEL",
      icon: "📡",
      color: "from-green-500 to-teal-600",
      link: "https://www.linkedin.com/in/marpumahesh/"
    }
  ];

  return (
    <CinematicScene 
      className="bg-gradient-to-br from-yellow-900 via-amber-900 to-orange-900"
      particleEffect={true}
    >
      {/* Trophy hall environment */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
        {/* Golden light rays */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-yellow-400/20 to-transparent" />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-7xl w-full space-y-12">
          {/* Scene Title */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Hall of Excellence
            </h2>
            <p className="text-xl text-amber-200">
              "Excellence is not a skill, it's an attitude."
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Certifications */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <h3 className="text-3xl font-bold text-white">Certifications</h3>
              </div>
              
              <div ref={trophiesRef} className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, i) => (
                  <Card key={i} className="bg-black/40 backdrop-blur-lg border-amber-500/30 p-6 hover:bg-black/50 transition-all duration-300 group cursor-pointer">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{cert.icon}</div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                              {cert.title}
                            </h4>
                            <p className="text-sm text-amber-200">{cert.provider}</p>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-amber-500/50 text-amber-300 hover:bg-amber-500/20"
                        onClick={() => window.open(cert.link, '_blank')}
                      >
                        <Award className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Publication */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Publication</h3>
              </div>
              
              <Card ref={publicationRef} className="bg-black/40 backdrop-blur-lg border-amber-500/30 p-6 hover:bg-black/50 transition-all duration-300">
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="text-4xl mb-4">📄</div>
                    <h4 className="text-xl font-bold text-white leading-tight">
                      Generalized Multilingual AI-Powered System for Detecting Fake News in India
                    </h4>
                    <p className="text-sm text-amber-200">
                      A Comparative Analysis of Machine Learning Algorithms
                    </p>
                    <Badge variant="secondary" className="bg-amber-500/20 text-amber-200">
                      17 Apr 2024
                    </Badge>
                  </div>

                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start space-x-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Developed multilingual fake news detection system with 99% accuracy across 58 languages</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Used ML algorithms and real-time web scraping</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Presented at 2+ symposiums on AI & Cybersecurity</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Cited in peer studies for cross-dataset generalizability</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Machine Learning', 'NLP', 'Multilingual AI', 'Fake News Detection'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-amber-500/20 text-amber-200 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-amber-500/50 text-amber-300 hover:bg-amber-500/20 mt-4"
                    onClick={() => window.open('https://www.linkedin.com/in/marpumahesh/', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Publication
                  </Button>
                </div>
              </Card>
            </div>
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
                "Continuous learning, continuous growth"
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