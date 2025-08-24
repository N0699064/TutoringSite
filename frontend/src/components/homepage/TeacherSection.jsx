import { useEffect, useRef } from 'react';

function TeacherSection() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef.current) {
              contentRef.current.style.opacity = "1";
              contentRef.current.style.transform = "translateX(0)";
            } else if (entry.target === imageRef.current) {
              imageRef.current.style.opacity = "1";
              imageRef.current.style.transform = "translateX(0)";

              // Start animation for orbiting electrons when visible
              if (orbitRef.current) {
                orbitRef.current.style.animation = "spin 20s linear infinite";
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Store current ref values to use in cleanup function
    const currentContentRef = contentRef.current;
    const currentImageRef = imageRef.current;

    if (currentContentRef) observer.observe(currentContentRef);
    if (currentImageRef) observer.observe(currentImageRef);

    return () => {
      // Use stored values in cleanup to avoid ESLint warning
      if (currentContentRef) observer.unobserve(currentContentRef);
      if (currentImageRef) observer.unobserve(currentImageRef);
    };
  }, []);

  return (
    <>
      {/* Add keyframe animation for the orbits */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <section id="teacher" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              ref={contentRef}
              className="order-2 md:order-1 transition-all duration-1000"
              style={{ opacity: 0, transform: 'translateX(-20px)' }}
            >
              <span className="inline-block text-primary font-semibold mb-2 text-lg">Meet Your Tutor</span>
              <h2 className="text-4xl font-bold mb-6 text-gray-800 relative">
                Mr. Micheal Akinfenwa
                <span className="absolute -bottom-3 left-0 w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              </h2>
              
              <p className="text-gray-700 mb-4">
Michael Akinfenwa helps students master Mathematics, Physics, Chemistry, and Biology by breaking down complex topics into simple, clear steps. Using innovative techniques, he makes learning engaging and memorable, ensuring students build confidence and retain knowledge long after lessons end.              </p>
              <p className="text-gray-700 mb-6">
                {/* She employs innovative mnemonic methods to help students better remember chemical formulas, reactions, and concepts, ensuring that key information stays with them long after the classes end. */}
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-800">Teaching Experience</h4>
                    <p className="text-gray-600">5+ years mentoring and supporting students in Mathematics, Physics, Chemistry, and Biology</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-800">Educational Background</h4>
                    <p className="text-gray-600">BEng in Civil Engineering, with advanced training in data science and analytics</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-800">Student Success</h4>
                    <p className="text-gray-600">Proven track record of helping students build confidence and achieve top results</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-800">Simplified Approach</h4>
                    <p className="text-gray-600">Makes learning easy, engaging, and tailored to each student's needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              ref={imageRef}
              className="order-1 md:order-2 transition-all duration-1000"
              style={{ opacity: 0, transform: 'translateX(20px)' }}
            >
              <div className="relative flex flex-col items-center">
                {/* Animated atom/molecule first */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-30"></div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-full p-8 relative shadow-xl mt-0">
                  {/* Elegant Atom/Molecule Design */}
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 p-1 mx-auto relative overflow-hidden">
                    {/* Center nucleus */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center z-10" style={{animation: 'pulse 3s ease-in-out infinite'}}>
                        <span className="text-white font-bold text-xl">S</span>
                      </div>
                    </div>
                    {/* Orbiting electrons */}
                    <div ref={orbitRef} className="absolute inset-0 z-0">
                      {/* First orbit */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30" style={{borderRadius: '50%', width: '100%', height: '100%', borderStyle: 'dashed'}}>
                        <div className="absolute w-4 h-4 rounded-full bg-primary shadow-lg" style={{top: '50%', left: '10%', transform: 'translate(-50%, -50%)'}}>
                        </div>
                      </div>
                      {/* Second orbit */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border-2 border-secondary/30" style={{borderRadius: '50%', borderStyle: 'dashed', transform: 'translate(-50%, -50%) rotate(45deg)'}}>
                        <div className="absolute w-4 h-4 rounded-full bg-secondary shadow-lg" style={{top: '20%', right: '10%', transform: 'translate(-50%, -50%)'}}>
                        </div>
                      </div>
                      {/* Third orbit */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 rounded-full border-2 border-primary/30" style={{borderRadius: '50%', borderStyle: 'dashed', transform: 'translate(-50%, -50%) rotate(-30deg)'}}>
                        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg" style={{bottom: '15%', left: '30%', transform: 'translate(-50%, -50%)'}}>
                        </div>
                      </div>
                    </div>
                    {/* Hexagonal background elements */}
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#075985" d="M25.5,-37.9C32.3,-32,36.3,-22.5,39.2,-12.7C42.2,-3,44.2,7.1,41.3,15.6C38.5,24,30.9,30.8,22.3,35.2C13.7,39.7,4,41.7,-5.5,40.7C-15.1,39.7,-24.6,35.5,-30.9,28.5C-37.3,21.5,-40.5,11.7,-41.8,1.3C-43,-9.2,-42.3,-20.2,-36.4,-26.5C-30.6,-32.9,-19.7,-34.5,-9.7,-35.4C0.3,-36.3,10.2,-36.4,17.8,-38.8C25.4,-41.1,32.5,-46.5,42.9,-43.1C53.2,-39.6,66.8,-27.3,64.5,-17.7C62.3,-8.2,44.1,-1.4,39.9,10.1C35.7,21.6,45.6,37.7,42.2,45.4C38.9,53.1,22.4,52.3,10.1,49.4C-2.2,46.5,-10.4,41.6,-23.3,40.4C-36.1,39.3,-53.6,42.1,-59.6,35.5C-65.6,28.9,-60.1,12.8,-56.7,-0.9C-53.3,-14.7,-52.2,-26.1,-45.9,-34.3C-39.6,-42.5,-28.2,-47.4,-17.8,-47.5C-7.4,-47.6,2,-42.9,8.2,-37.9C14.3,-32.8,17.1,-27.4,25.5,-37.9Z" transform="translate(100 100) scale(0.7)" />
                      </svg>
                    </div>
                  </div>
                  {/* Atom/molecule bottom right icon and quote remain unchanged */}
                  <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-3 shadow-lg">
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-1">
                      <div className="bg-white rounded-full p-2">
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tutor image, large and centered, now below the animation */}
                <img 
                  src="/michAkin.jpg" 
                  alt="Mr. Micheal Akinfenwa" 
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-xl mt-8 z-20 bg-white"
                />
                <div className="mt-6">
                  <blockquote className="italic text-gray-600 text-center px-8">
                    "Education is the bridge between dreams and achievement."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeacherSection;
