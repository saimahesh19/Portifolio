import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CinematicScene } from '../CinematicScene';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github, Download, MessageCircle } from 'lucide-react';

interface ContactSceneProps {
  onPrev: () => void;
  onRestart: () => void;
}

export const ContactScene: React.FC<ContactSceneProps> = ({ onPrev, onRestart }) => {
  const contactRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const finalMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate contact info
    if (contactRef.current) {
      tl.fromTo(contactRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      );
    }

    // Animate contact cards
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      tl.fromTo(cards,
        { 
          y: 50, 
          opacity: 0, 
          scale: 0.9,
          rotationY: -15
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)"
        },
        "-=0.8"
      );
    }

    // Animate final message
    if (finalMessageRef.current) {
      tl.fromTo(finalMessageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" },
        "-=0.3"
      );
    }
  }, []);

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "chintusaimaheshmarpu@gmail.com",
      action: () => window.open('mailto:chintusaimaheshmarpu@gmail.com'),
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9502342564",
      action: () => window.open('tel:+919502342564'),
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/marpumahesh",
      action: () => window.open('https://www.linkedin.com/in/marpumahesh/', '_blank'),
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/saimahesh19",
      action: () => window.open('https://github.com/saimahesh19', '_blank'),
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Andhra Pradesh, India",
      action: () => {},
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Resume PDF",
      value: "Download Resume",
      action: () => {
        // Create a download link for the resume
        const link = document.createElement('a');
        link.href = '/workspace/uploads/MARPU-SAI-MAHESH-FlowCV-Resume-20251008.pdf';
        link.download = 'MARPU-SAI-MAHESH-Resume.pdf';
        link.click();
      },
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <CinematicScene 
      className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
      particleEffect={true}
    >
      {/* Modern lounge environment */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
        {/* Ambient lighting */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-400/10 to-transparent rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-pink-400/10 to-transparent rounded-full" />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-6xl w-full space-y-12">
          {/* Scene Title */}
          <div ref={contactRef} className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              "The journey of innovation never ends. Let's build the future together, one line of code at a time."
            </p>
            <div className="text-lg text-pink-200">
              Ready to collaborate on the next big thing?
            </div>
          </div>

          {/* Contact Cards */}
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <Card 
                key={i} 
                className="bg-black/40 backdrop-blur-lg border-purple-500/30 p-6 hover:bg-black/50 transition-all duration-300 group cursor-pointer"
                onClick={method.action}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-300 break-all">
                      {method.value}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Final Message */}
          <div ref={finalMessageRef} className="text-center space-y-8">
            <Card className="bg-black/30 backdrop-blur-lg border-gradient-to-r from-purple-500/50 to-pink-500/50 p-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <MessageCircle className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Thank You</h3>
                </div>
                
                <p className="text-lg text-purple-200 leading-relaxed">
                  Thank you for experiencing my professional journey through this cinematic portfolio. 
                  I'm passionate about leveraging AI, DevOps, and Cybersecurity to create innovative solutions 
                  that make a real-world impact.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 text-center pt-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-cyan-400">5+</div>
                    <div className="text-sm text-gray-300">Major Projects</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-green-400">4+</div>
                    <div className="text-sm text-gray-300">Certifications</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-purple-400">9.01</div>
                    <div className="text-sm text-gray-300">CGPA</div>
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
              className="px-8 py-3 text-lg border-purple-500 text-purple-300 hover:bg-purple-500/20"
            >
              ← Previous
            </Button>
            
            <div className="text-center">
              <p className="text-purple-200 text-lg">
                "Innovation • Excellence • Impact"
              </p>
            </div>
            
            <Button
              onClick={onRestart}
              className="px-8 py-3 text-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
            >
              🔄 Restart Journey
            </Button>
          </div>
        </div>
      </div>
    </CinematicScene>
  );
};