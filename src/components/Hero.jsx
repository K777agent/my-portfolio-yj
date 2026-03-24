import React, { useState } from 'react';
import { ArrowRight, Github, Mail, Globe } from 'lucide-react';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  const handleFaceClick = (e) => {
    const newParticles = [];
    const logos = ['/icon/react.png', '/icon/nextjs-hero.webp', '/icon/javascript.png', '/icon/typescript.png'];
    
    logos.forEach(logo => {
      // Create 10 popping particles per logo for paper confetti effect
      for(let i=0; i < 10; i++) {
        // Upwards fountain spray (from top edge, falling gracefully)
        const angle = Math.random() * Math.PI + Math.PI; 
        // Higher velocity & X-stretch for a much wider explosion radius
        const velocity = 80 + Math.random() * 140;
        const peakX = Math.cos(angle) * velocity * 1.5; // Stretch out horizontally
        const peakY = Math.sin(angle) * velocity; 
        
        // Wide horizontal drift to scatter them far apart
        const endX = peakX + (Math.random() - 0.5) * 700; 
        
        // Random falling duration between 3.0s and 5.0s
        const duration = 3.0 + Math.random() * 2.0;
        
        newParticles.push({
          id: Math.random().toString(36).substring(7),
          src: logo,
          style: {
            '--startX': '0px',
            '--startY': '0px',
            '--peakX': `${peakX}px`,
            '--peakY': `${peakY}px`,
            '--endX': `${endX}px`,
            '--rot1': `${Math.random() * 360 - 180}deg`,
            '--rot2': `${Math.random() * 1080 - 540}deg`, // Softer spin
            '--duration': `${duration}s`
          }
        });
      }
    });

    setParticles(prev => [...prev, ...newParticles]);

    // Cleanup particles after the longest animation (approx 5.1s)
    setTimeout(() => {
      setParticles(prev => prev.slice(30));
    }, 5100);
  };

  return (
    <section className="min-h-[95vh] flex flex-col-reverse md:flex-row justify-center items-center pt-20 pb-10 relative z-10 gap-12 md:gap-8">
      {/* Left Context Area */}
      <div className="flex-1 animate-fade-in flex flex-col items-start">
        <div className="inline-block py-1.5 px-4 mb-6 rounded-full glass text-sm font-medium text-primary-400 border-primary-500/30">
          🚀 프런트엔드 개발자 (Frontend Developer)
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          <span className="block text-white mb-2">안녕하세요,</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500 pb-2">
            김예준입니다.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
          아이디어를 직관적인 코드화하는 프런트엔드 개발자입니다. <br/>
          비즈니스 아이디어를 매끄러운 UI/UX로 구현하며, 사용자가 쉽고 즐겁게 사용할 수 있는 웹 생태계를 만들어 갑니다.
        </p>

        <div className="flex flex-wrap gap-2.5 mb-12">
          {['#React', '#프런트엔드', '#Next.js', '#스마트워크', '#콘텐츠'].map((keyword) => (
            <span key={keyword} className="text-sm font-medium px-4 py-1.5 rounded-full bg-dark-800 text-slate-300 border border-white/10 shadow-sm">
              {keyword}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white px-8 py-3.5 rounded-full font-bold transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="flex items-center gap-2 glass hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-bold transition-all transform hover:-translate-y-1 hover:border-white/20">
            Contact Me
          </a>
        </div>
        
        <div className="flex gap-6 mt-16 text-slate-400">
          <a href="https://github.com/K777agent" target="_blank" rel="noreferrer" className="hover:text-white transition-colors transform hover:scale-125">
            <Github size={26} />
          </a>
          <a href="https://k777agent.tistory.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors transform hover:scale-125">
            <Globe size={26} />
          </a>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=junzang00@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors transform hover:scale-125"
          >
            <Mail size={26} />
          </a>
        </div>
      </div>
      
      {/* Right Image Area */}
      <div className="flex-1 w-full flex justify-center items-center relative animate-fade-in mt-10 md:mt-0">
        <div 
          className="relative cursor-pointer transition-transform duration-500 hover:scale-105 hover:rotate-0 group z-20"
          onClick={handleFaceClick}
          title="Click Me!"
        >
          {/* Subtle Glow behind image */}
          <div className="absolute inset-0 bg-primary-500/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <img 
            src="/face.jpg" 
            alt="Kim Ye-jun" 
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transform -rotate-3 transition-transform duration-300 group-hover:rotate-0 block" 
            onError={(e) => { 
              e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%231e293b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-size='20'%3Epublic/face.jpg Required%3C/text%3E%3C/svg%3E` 
            }}
          />

          {/* Falling Particles */}
          {particles.map(p => (
            <img 
              key={p.id}
              src={p.src}
              className="absolute top-[5%] left-1/2 w-5 h-5 md:w-7 md:h-7 object-contain pointer-events-none particle z-30 drop-shadow-md"
              style={{
                marginLeft: '-10px', 
                marginTop: '-10px',
                ...p.style
              }}
              onError={(e) => { e.target.style.display = 'none' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
