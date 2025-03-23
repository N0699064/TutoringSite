import { useEffect, useRef } from 'react';

function CoursesSection() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(0)';
    }
    
    if (contentRef.current) {
      setTimeout(() => {
        contentRef.current.style.opacity = '1';
        contentRef.current.style.transform = 'translateY(0)';
      }, 200);
    }
    
    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
      }
    });
  }, []);

  // Function to scroll to contact section
  const scrollToContactSection = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courses = [
    {
      title: "Foundation Course - Grade VIII to X",
      description: "Specialized foundation course focusing on depth knowledge in basic chemistry concepts for students preparing for NEET and JEE examinations.",
      features: [
        "Basic formula fundamentals",
        "Balancing equations techniques",
        "Best mnemonic methods to remember formulas",
        "Regular quizzes and assessments"
      ],
      level: "Beginner",
      duration: "15 days",
      dates: "April 14 - May 2, 2025",
      schedule: "Weekdays only (Mon-Fri)",
      boards: "ICSE, CBSE, State Board",
      format: "Online (Thirumangalam offline available)",
      featured: false,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Intermediate Course - Grade XI",
      description: "Focused program on organic chemistry with NEET and JEE oriented curriculum designed to build a strong foundation for competitive exams.",
      features: [
        "Organic chemistry fundamentals",
        "NEET & JEE oriented syllabus",
        "Mnemonics methodology for better remembering",
        "Regular revisions and assessments"
      ],
      level: "Intermediate",
      duration: "20 days",
      dates: "April 1 - April 28, 2025",
      schedule: "Weekdays only (Mon-Fri)",
      boards: "ICSE, CBSE, State Board",
      format: "Online (Thirumangalam offline available)",
      featured: false,  // Changed from true to false
      color: "from-primary to-secondary"
    },
    {
      title: "Advanced Course - Grade XII",
      description: "Comprehensive organic chemistry preparation focusing on problem-solving strategies for competitive exams like NEET and JEE.",
      features: [
        "Advanced organic chemistry concepts",
        "Reaction mechanisms mastery",
        "Problem-solving techniques",
        "Mock tests aligned with NEET/JEE"
      ],
      level: "Advanced",
      duration: "20 days",
      dates: "May 5 - May 30, 2025",
      schedule: "Weekdays only (Mon-Fri)",
      boards: "ICSE, CBSE, State Board",
      format: "Online (Thirumangalam offline available)",
      featured: true,
      color: "from-amber-500 to-orange-400"
    }
  ];

  return (
    <section id="courses" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute -top-10 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Molecular decoration */}
      <div className="absolute right-10 top-20 opacity-5">
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
          className="mb-4 text-center transition-all duration-1000"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <span className="inline-block text-primary font-semibold mb-2 text-lg">Expert Chemistry Education</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Specialized Courses</h2>
        </div>
        
        <div
          ref={contentRef} 
          className="text-center text-gray-600 mb-16 max-w-3xl mx-auto transition-all duration-1000"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <p>
            Structured learning paths designed for students preparing for NEET and JEE examinations.
            Our focused courses build strong chemistry foundations through expert teaching and proven methodologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el} 
              className={`relative group transition-all duration-500 transform hover:-translate-y-1`}
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`}></div>
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  {course.featured && (
                    <div className="absolute top-0 right-0">
                      <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                      {course.level}
                    </span>
                    <span className="bg-secondary/10 text-secondary text-xs font-medium px-2 py-1 rounded">
                      {course.duration}
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                      {course.boards}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{course.dates}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{course.format}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6 mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <button 
                      onClick={scrollToContactSection} 
                      className={`relative overflow-hidden group bg-gradient-to-r ${course.color} text-white font-medium rounded-lg px-4 py-2.5 shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      <span className="relative z-10">Enroll Now</span>
                      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </button>
                    
                    <div className="text-center text-sm text-gray-500">
                      Contact tutor for fees details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;