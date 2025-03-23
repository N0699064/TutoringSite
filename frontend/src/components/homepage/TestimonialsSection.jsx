import { useEffect, useRef } from 'react';

function TestimonialsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Store the reference in a variable to avoid React hooks warning
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === currentRef) {
              currentRef.style.opacity = '1';
              currentRef.style.transform = 'translateY(0)';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
      }
    });

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const testimonials = [
    {
      name: "Raguram P",
      role: "Grade VIII Student",
      content: "The crash course greatly strengthened my understanding of NCERT concepts with the help of effective mnemonics and tricks. Innovative projects like rotating charts and fishbone diagrams made learning more interactive and engaging. Sumathi Ma'am's inspiring teaching style made even complex topics easy to grasp.",
      avatar: "RS"
    },
    {
      name: "Amritha P",
      role: "Grade XI Student",
      content: "Organic Chemistry felt manageable with Ma'am's structured approach, starting from the basics and gradually building up to advanced concepts. Her clear explanations, frequent revisions, and doubt-clearing sessions significantly improved my confidence for competitive exams.",
      avatar: "AV"
    },
    {
      name: "Niranjan K",
      role: "Grade XI Student",
      content: "Concepts were taught in a crisp and clear manner, which made revision more effective. Engaging activities like mind maps and practice sessions kept the learning process fun and interactive. The sessions strengthened my academic foundation in chemistry.",
      avatar: "KN"
    }
  ];
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="section py-24 bg-gradient-to-b from-white to-gray-50 transition-all duration-1000"
      style={{ opacity: 0, transform: 'translateY(20px)' }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-2 text-lg">What Our Students Say</span>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Success Stories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover how our specialized chemistry teaching methodology has helped students achieve excellence in their academic journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary flex items-center justify-center font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div>
                <svg className="h-5 w-5 text-primary/40 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
              
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;