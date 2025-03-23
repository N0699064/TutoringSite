import { useEffect, useRef } from 'react';

function AboutSection() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const elements = [titleRef, contentRef, cardRef];
    elements.forEach((el, index) => {
      if (el.current) {
        setTimeout(() => {
          el.current.style.opacity = '1';
          el.current.style.transform = 'translateY(0)';
        }, 200 * index);
      }
    });
  }, []);

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      {/* Molecular decoration */}
      <div className="absolute left-10 top-1/4 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="8" fill="#0f766e" />
          <circle cx="90" cy="60" r="8" fill="#0f766e" />
          <circle cx="30" cy="60" r="8" fill="#0f766e" />
          <circle cx="60" cy="90" r="8" fill="#0f766e" />
          <circle cx="60" cy="30" r="8" fill="#0f766e" />
          <line x1="60" y1="60" x2="90" y2="60" stroke="#0f766e" strokeWidth="3" />
          <line x1="60" y1="60" x2="30" y2="60" stroke="#0f766e" strokeWidth="3" />
          <line x1="60" y1="60" x2="60" y2="90" stroke="#0f766e" strokeWidth="3" />
          <line x1="60" y1="60" x2="60" y2="30" stroke="#0f766e" strokeWidth="3" />
        </svg>
      </div>
      
      <div className="absolute right-10 bottom-1/4 opacity-10">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="90" r="10" fill="#075985" />
          <circle cx="40" cy="90" r="10" fill="#075985" />
          <circle cx="140" cy="90" r="10" fill="#075985" />
          <circle cx="90" cy="40" r="10" fill="#075985" />
          <circle cx="90" cy="140" r="10" fill="#075985" />
          <line x1="90" y1="90" x2="40" y2="90" stroke="#075985" strokeWidth="3" />
          <line x1="90" y1="90" x2="140" y2="90" stroke="#075985" strokeWidth="3" />
          <line x1="90" y1="90" x2="90" y2="40" stroke="#075985" strokeWidth="3" />
          <line x1="90" y1="90" x2="90" y2="140" stroke="#075985" strokeWidth="3" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={titleRef}
          className="mb-16 transition-all duration-1000"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <span className="inline-block text-primary font-semibold mb-2 text-lg">Discover Our Approach</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative">
            About Our Program
            <span className="absolute -bottom-3 left-0 w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div 
            ref={contentRef} 
            className="space-y-6 transition-all duration-1000"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Foundation for Excellence</h3>
            <p className="text-gray-700">
              Our chemistry program is specifically designed for students in grades 8-12 who are laying the groundwork for future success in competitive exams like NEET and JEE.
            </p>
            <p className="text-gray-700">
              We focus on building strong fundamentals in chemistry with special emphasis on chemical formulas, balancing equations, and problem-solving techniques that form the backbone of advanced chemistry studies.
            </p>
            
            <div className="relative bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border-l-4 border-primary mt-8">
              <div className="absolute -top-4 -left-4">
                <svg className="h-8 w-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="italic text-gray-700 pl-2">
                "A strong foundation in chemistry basics is essential for success in competitive exams. Our targeted approach ensures students master these concepts early."
              </p>
            </div>
          </div>
          
          <div 
            ref={cardRef} 
            className="relative transition-all duration-1000"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Why Choose Our Chemistry Classes?
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white mr-3 flex-shrink-0">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Starting from basics and make your foundation strong</span>
                </li>
                
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white mr-3 flex-shrink-0">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Focused curriculum aligned with NEET/JEE requirements</span>
                </li>
                
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white mr-3 flex-shrink-0">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Interactive online learning environment</span>
                </li>
                
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white mr-3 flex-shrink-0">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Regular practice tests and assessments</span>
                </li>
                
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white mr-3 flex-shrink-0">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Personalized attention and doubt clearing sessions</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    RS
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">RS Chemtutor</p>
                    <p className="text-xs text-gray-500">Excellence in Chemistry Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;