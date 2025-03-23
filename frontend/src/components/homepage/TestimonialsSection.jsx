function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Grade X Student",
      content: "The foundation course helped me develop a strong understanding of chemical equations. Now I can solve complex problems with confidence.",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "My daughter struggled with chemistry until she joined these classes. The way complex concepts are broken down made all the difference.",
      avatar: "PS"
    },
    {
      name: "Amit Patel",
      role: "NEET Qualifier",
      content: "Starting these classes in 8th grade gave me a huge advantage. By the time I reached 12th, chemistry was my strongest subject in NEET.",
      avatar: "AP"
    }
  ];
  
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Student Success Stories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Hear from our students who built strong chemistry foundations and achieved excellence in their academic journey.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-lg">
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