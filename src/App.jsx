import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);

  useEffect(() => {
    const updateScrollInfo = () => {
      setMaxScroll(Math.max(1, document.body.scrollHeight - window.innerHeight));
    };
    
    updateScrollInfo();
    window.addEventListener('resize', updateScrollInfo);
    
    const observer = new ResizeObserver(updateScrollInfo);
    if (document.body) {
      observer.observe(document.body);
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollInfo);
      observer.disconnect();
    };
  }, []);

  const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
  
  const bgColors = [
    [5, 5, 32],   // Step 1: 딥 네이비 (#050520)
    [13, 13, 53], // Step 2: 미드나잇 블루 (#0D0D35)
    [26, 17, 63], // Step 3: 다크 인디고 (#1A113F)
    [29, 11, 56], // Step 4: 딥 고스트 퍼플 (#1D0B38)
    [20, 5, 38]   // Step 5: 울트라 다크 퍼플 (#140526)
  ];

  const getInterpolatedColor = (progress) => {
    const steps = bgColors.length - 1;
    const scaledProgress = progress * steps;
    const index = Math.min(Math.floor(scaledProgress), steps - 1);
    const remainder = scaledProgress - index;
    
    const start = bgColors[index];
    const end = bgColors[index + 1];
    
    const r = Math.round(start[0] + (end[0] - start[0]) * remainder);
    const g = Math.round(start[1] + (end[1] - start[1]) * remainder);
    const b = Math.round(start[2] + (end[2] - start[2]) * remainder);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  const bgColor = getInterpolatedColor(scrollProgress);
  
  // Harmonious dot hues that dynamically shift but don't clash
  const dot1Hue = 190 + scrollProgress * 130; // Cyan (190) -> Pink (320)
  const dot2Hue = 250 + scrollProgress * 30;  // Indigo (250) -> Purple (280)
  const dot3Hue = 220 + scrollProgress * 50;  // Blue (220) -> Purple (270)

  return (
    <div 
      className="min-h-screen text-slate-50 font-sans selection:bg-primary-500/30 overflow-hidden relative transition-colors duration-300 ease-out"
      style={{ backgroundColor: bgColor }}
    >
      {/* Scroll-dependent Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-0 -left-4 w-96 h-96 rounded-full mix-blend-multiply filter opacity-30 transition-transform duration-200 ease-out"
          style={{ 
            filter: 'blur(128px)',
            transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg) scale(${1 + scrollY * 0.0005})`,
            backgroundColor: `hsl(${dot1Hue}, 100%, 60%)` 
          }}
        ></div>
        <div 
          className="absolute top-40 -right-20 w-[30rem] h-[30rem] rounded-full mix-blend-multiply filter opacity-20 transition-transform duration-200 ease-out"
          style={{ 
            filter: 'blur(128px)',
            transform: `translateY(${scrollY * 0.15}px) translateX(${-scrollY * 0.1}px) scale(${1 + scrollY * 0.0002})`,
            backgroundColor: `hsl(${dot2Hue}, 100%, 60%)`
          }}
        ></div>
        <div 
          className="absolute -bottom-8 left-1/3 w-80 h-80 rounded-full mix-blend-multiply filter opacity-30 transition-transform duration-200 ease-out"
          style={{ 
            filter: 'blur(128px)',
            transform: `translateY(${-scrollY * 0.25}px) scale(${1 + scrollY * 0.0001})`,
            backgroundColor: `hsl(${dot3Hue}, 100%, 60%)`
          }}
        ></div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
