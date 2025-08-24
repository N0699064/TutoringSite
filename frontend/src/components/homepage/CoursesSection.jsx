import { useEffect, useRef, useState } from 'react';

function CoursesSection() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  // Refs for each course card (for mobile scroll)
  const courseRefs = useRef([]);

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
  }, []);
  // Multi-item carousel state
  const [startIdx, setStartIdx] = useState(0);
  // Responsive: 1 on mobile, 2 on sm, 3 on md, 4 on lg+
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 768) setItemsToShow(2);
      else if (window.innerWidth < 1024) setItemsToShow(3);
      else setItemsToShow(4);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + courses.length) % courses.length);
  };
  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % courses.length);
  };

  // Function to scroll to contact section
  const scrollToContactSection = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courses = [
    {
      title: "Mathematics",
      description: "These tutoring clases are focusing on in-depth knowledge in basic mathematics to shapren and improve skills.",
      features: [
        "Build strong maths foundations with expert guidance",
        "Step-by-step support to solve problems confidently",
        "One-on-one attention to clarify every doubt",
        "Regular feedback to track learning progress"
      ],
      level: "Advanced",
      duration: "Group & 1:1 Support",
      //dates: "April 14 - May 2, 2025",
      dates: "TBC",
      //schedule: "TBC",
      schedule: "Weekdays only (Mon-Fri)",
      boards: "KS2, GCSE, A-Level",
      format: "Online (Micheal A. offline available)",
      price: "£20/hourly",
      featured: true,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Physics",
      description: "Personalized physics tutoring with an exam-oriented curriculum, designed to build strong foundations, enhance skills, and ensure success in assessments.",
      features: [
  "Expert tutoring to strengthen physics understanding",
  "Step-by-step guidance through challenging concepts",
  "Personalized attention to clarify every doubt",
  "Regular feedback to monitor learning progress"
],
      level: "Intermediate",
      duration: "Group & 1:1 Support",
      //dates: "April 1 - April 28, 2025",
      dates: "TBC",
      schedule: "Weekdays only (Mon-Fri)",
      boards: "KS2, GCSE, A-Level",
      format: "Online (Micheal A. offline available)",
      price: "£20/hourly",
      featured: false,
      color: "from-primary to-secondary"
    },
    {
      title: "Chemistry",
      description: "Comprehensive chemistry tutoring focusing on core concepts and problem-solving strategies for GCSE and A-Level students.",
      features: [
      "Master key chemistry concepts",
      "Understand reaction mechanisms clearly",
      "Develop effective problem-solving skills",
      "Regular mock tests to track progress"
      ],
      level: "Advanced",
      duration: "Group & 1:1 Support",
      dates: "TBC",
      //dates: "May 5 - May 30, 2025",
      schedule: "Weekdays only (Mon-Fri)",
      boards: "KS2, GCSE, A-Level",
      format: "Online (Micheal A. offline available)",
      price: "£20/hourly",
      featured: false,
      color: "from-amber-500 to-orange-400"
    }
    ,
    {
      title: "Biology",
      description: "Engaging biology tutoring that covers essential topics, exam techniques, and real-world applications for all major exam boards.",
      features: [
        "Deepen understanding of biological systems",
        "Exam-focused strategies and practice",
        "Interactive lessons with real-life examples",
        "Continuous assessment and feedback"
      ],
      level: "Intermediate",
      duration: "Group & 1:1 Support",
      dates: "TBC",
      schedule: "Weekdays only (Mon-Fri)",
      boards: "KS2, GCSE, A-Level",
      format: "Online (Micheal A. offline available)",
      price: "£20/hourly",
      featured: false,
      color: "from-green-500 to-lime-400"
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
          <span className="inline-block text-primary font-semibold mb-2 text-lg">Expert Tutoring Sessions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Available Courses</h2>
        </div>
        
        <div
          ref={contentRef} 
          className="text-center text-gray-600 mb-16 max-w-3xl mx-auto transition-all duration-1000"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <p>
            Our structured learning paths and courses are designed to build strong foundations and prepare students for success.
          </p>
        </div>
        
        {/* Carousel subject tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {courses.map((course, idx) => (
            <button
              key={course.title}
              onClick={() => {
                if (itemsToShow === 1 && courseRefs.current[idx]) {
                  courseRefs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  setStartIdx(idx);
                }
              }}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-sm md:text-base
                ${startIdx === idx ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {course.title}
            </button>
          ))}
        </div>

          {itemsToShow === 1 ? (
            <div className="flex flex-col gap-8">
              {courses.map((course, idx) => (
                <div
                  key={course.title}
                  className="w-full max-w-xl mx-auto"
                  ref={el => courseRefs.current[idx] = el}
                >
                  <div className={`relative group transition-all duration-500 transform`}>
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
                          <div className="text-center">
                            <span className="text-lg font-semibold text-gray-800">{course.price}</span>
                            <span className="text-sm text-gray-500"> for the full course</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative flex items-center">
              <button
                onClick={handlePrev}
                aria-label="Previous"
                className="z-10 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-all duration-200 absolute left-0"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <div className="flex-1 overflow-hidden">
                <div className="flex -ml-4 transition-transform duration-500" style={{ width: '100%', }}>
                  {Array.from({ length: itemsToShow }).map((_, idx) => {
                    const courseIdx = (startIdx + idx) % courses.length;
                    const course = courses[courseIdx];
                    return (
                      <div key={course.title} className="pl-4 min-w-0 flex-1">
                        <div className={`relative group transition-all duration-500 transform`}>
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
                                <div className="text-center">
                                  <span className="text-lg font-semibold text-gray-800">{course.price}</span>
                                  <span className="text-sm text-gray-500"> for the full course</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={handleNext}
                aria-label="Next"
                className="z-10 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-all duration-200 absolute right-0"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
        
      </div>
    </section>
  );
}

export default CoursesSection;
