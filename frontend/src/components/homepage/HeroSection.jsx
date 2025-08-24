import { useEffect, useRef } from 'react';

function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    // Simple animation on load
    const elements = [titleRef, subtitleRef, descRef, btnRef, decorRef];
    elements.forEach((el, index) => {
      if (el.current) {
        setTimeout(() => {
          el.current.style.opacity = '1';
          el.current.style.transform = 'translateY(0)';
        }, 200 * index);
      }
    });
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-slate-900 text-white">
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent blur-3xl"></div>
      </div>
      
      {/* Animated molecular structures */}
      <div ref={decorRef} className="absolute inset-0 opacity-20 transition-all duration-1000" style={{ opacity: 0, transform: 'translateY(20px)' }}>
        <div className="absolute top-20 right-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="6" fill="white" />
            <circle cx="90" cy="60" r="6" fill="white" />
            <circle cx="30" cy="60" r="6" fill="white" />
            <circle cx="60" cy="90" r="6" fill="white" />
            <circle cx="60" cy="30" r="6" fill="white" />
            <line x1="60" y1="60" x2="90" y2="60" stroke="white" strokeWidth="2" />
            <line x1="60" y1="60" x2="30" y2="60" stroke="white" strokeWidth="2" />
            <line x1="60" y1="60" x2="60" y2="90" stroke="white" strokeWidth="2" />
            <line x1="60" y1="60" x2="60" y2="30" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-20">
          <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="40" r="6" fill="white" />
            <circle cx="50" cy="40" r="6" fill="white" />
            <circle cx="80" cy="40" r="6" fill="white" />
            <circle cx="110" cy="40" r="6" fill="white" />
            <circle cx="140" cy="40" r="6" fill="white" />
            <line x1="20" y1="40" x2="50" y2="40" stroke="white" strokeWidth="2" />
            <line x1="50" y1="40" x2="80" y2="40" stroke="white" strokeWidth="2" />
            <line x1="80" y1="40" x2="110" y2="40" stroke="white" strokeWidth="2" />
            <line x1="110" y1="40" x2="140" y2="40" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Premium Badge */}
            <div 
              ref={titleRef} 
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full pl-1 pr-4 py-1 mb-4 transition-all duration-1000" 
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <span className="bg-primary text-white text-xs font-semibold rounded-full px-3 py-1 mr-2">
                PREMIUM
              </span>
              <span className="text-white text-sm">GCSE & A Levels Preparation</span>
            </div>
            
            <h1 
              ref={subtitleRef}
              className="text-6xl md:text-7xl font-bold leading-none mb-6 transition-all duration-1000 tracking-tight"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">Build a Foundation</span>{' '}
              <span className="text-white whitespace-nowrap">of Excellence</span>
            </h1>
            
            <p 
              ref={descRef}
              className="text-xl text-gray-300 mb-8 max-w-lg transition-all duration-1000"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <span className="text-white font-semibold" style={{ textShadow: '0 0 8px #38bdf8, 0 0 16px #6366f1, 0 0 24px #0ea5e9' }}>Mathematics</span>,{' '}
              <span className="text-white font-semibold" style={{ textShadow: '0 0 8px #34d399, 0 0 16px #22d3ee, 0 0 24px #a7f3d0' }}>Physics</span>,{' '}
              <span className="text-white font-semibold" style={{ textShadow: '0 0 8px #fbbf24, 0 0 16px #f59e42, 0 0 24px #fde68a' }}>Chemistry</span>, and{' '}
              <span className="text-white font-semibold" style={{ textShadow: '0 0 8px #f472b6, 0 0 16px #f87171, 0 0 24px #facc15' }}>Biology</span>
              {' — high level tutoring designed to improve your knowledge and skills. Enroll today and take the next step toward academic excellence.'}
            </p>
            
            <div ref={btnRef} className="flex flex-col sm:flex-row gap-4 transition-all duration-1000" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="relative overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-medium rounded-lg px-8 py-3 shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <span className="relative z-10">Enroll Now</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
              
              <button 
                onClick={() => scrollToSection('courses')}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-lg px-8 py-3 transition-all duration-300 group"
              >
                View Courses
                <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Chemistry elements display */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-60"></div>
            <div className="relative bg-black rounded-2xl overflow-hidden aspect-square">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                {/* Element H */}
                <div className="absolute top-10 left-1/4 w-16 h-16 animate-float">
                  <div className="w-full h-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 p-0.5">
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-white">H</span>
                      <span className="text-xs text-gray-400">1</span>
                    </div>
                  </div>
                </div>
                
                {/* Element O */}
                <div className="absolute top-1/4 right-10 w-20 h-20 animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="w-full h-full rounded-lg bg-gradient-to-r from-red-500 to-orange-400 p-0.5">
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-white">O</span>
                      <span className="text-xs text-gray-400">8</span>
                    </div>
                  </div>
                </div>
                
                {/* Element C */}
                <div className="absolute bottom-16 left-16 w-18 h-18 animate-float" style={{ animationDelay: "2s" }}>
                  <div className="w-full h-full rounded-lg bg-gradient-to-r from-gray-500 to-gray-400 p-0.5">
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-white">C</span>
                      <span className="text-xs text-gray-400">6</span>
                    </div>
                  </div>
                </div>
                
                {/* Element Na */}
                <div className="absolute bottom-24 right-20 w-14 h-14 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="w-full h-full rounded-lg bg-gradient-to-r from-purple-500 to-violet-400 p-0.5">
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-white">Na</span>
                      <span className="text-xs text-gray-400">11</span>
                    </div>
                  </div>
                </div>
                
                {/* Central larger element */}
                <div className="w-32 h-32 rounded-lg bg-gradient-to-r from-primary to-secondary p-0.5 shadow-xl shadow-primary/20">
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">iCan</span>
                    <span className="text-xs text-gray-400 mt-1">Tutoring</span>
                  </div>
                </div>
                
                {/* Element Fe */}
                <div className="absolute top-1/3 left-10 w-16 h-16 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="w-full h-full rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 p-0.5">
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-white">Fe</span>
                      <span className="text-xs text-gray-400">26</span>
                    </div>
                  </div>
                </div>

                {/* Math Element Pi (main) */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 animate-float" style={{ animationDelay: '1.2s' }}>
                  <div className="w-full h-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-400 p-0.5">
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-white">π</span>
                      <span className="text-xs text-gray-400">3.14</span>
                    </div>
                  </div>
                </div>
                
                {/* Connecting lines between elements */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
                  <line x1="200" y1="200" x2="100" y2="80" stroke="cyan" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="200" y1="200" x2="300" y2="120" stroke="cyan" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="200" y1="200" x2="100" y2="200" stroke="cyan" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="200" y1="200" x2="120" y2="300" stroke="cyan" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="200" y1="200" x2="280" y2="280" stroke="cyan" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
                
                {/* Orbiting particles */}
                {/* Orbiting particles (some as pi symbols) */}
                {/* More orbiting balls and pi symbols */}
                <div className="absolute w-full h-full animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 flex items-center justify-center">
                    <span className="text-2xl text-green-300">π</span>
                  </div>
                  <div className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="absolute w-full h-full animate-spin-slow-reverse">
                  <div className="absolute bottom-12 right-12 w-6 h-6 flex items-center justify-center">
                    <span className="text-2xl text-cyan-300">π</span>
                  </div>
                  <div className="absolute bottom-6 left-16 w-4 h-4 bg-secondary rounded-full"></div>
                </div>
                <div className="absolute w-full h-full animate-spin-medium">
                  <div className="absolute top-24 left-12 w-3 h-3 bg-accent rounded-full"></div>
                  <div className="absolute bottom-8 right-24 w-5 h-5 bg-green-400 rounded-full"></div>
                </div>
                <div className="absolute w-full h-full animate-spin-slow" style={{ animationDelay: '1.5s' }}>
                  <div className="absolute top-1/4 right-1/3 w-5 h-5 flex items-center justify-center">
                    <span className="text-xl text-emerald-300">π</span>
                  </div>
                </div>
                <div className="absolute w-full h-full animate-spin-slow-reverse" style={{ animationDelay: '2s' }}>
                  <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
