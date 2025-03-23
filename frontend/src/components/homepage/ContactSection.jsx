import { useState, useRef, useEffect } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    course: '',
    newsletter: false
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const formRef = useRef(null);

  // Validate single field
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email is invalid';
        }
        break;
      case 'phone':
        if (!value) {
          error = 'Phone number is required';
        } else if (!/^[+\d][\d\s-]{7,}$/.test(value)) {
          error = 'Enter a valid phone number';
        }
        break;
      case 'course':
        if (!value) error = 'Please select a course';
        break;
      default:
        break;
    }
    
    return error;
  };

  // Handle field blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // If field has been touched, validate on change
    if (touched[name]) {
      const error = validateField(name, newValue);
      setFormErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'phone', 'course'];
    const errors = {};
    let isValid = true;
    
    // Validate required fields
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        errors[field] = error;
        isValid = false;
      }
    });
    
    setFormErrors(errors);
    
    // Mark all fields as touched
    const touchedFields = {};
    requiredFields.forEach(field => {
      touchedFields[field] = true;
    });
    setTouched(prev => ({ ...prev, ...touchedFields }));
    
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus({ submitted: false, submitting: true, error: null });
    
    try {
      // For Netlify Forms with React, we need to submit the form data as FormData
      const formData = new FormData(e.target);
      
      // Create a URLSearchParams object for the fetch request
      const searchParams = new URLSearchParams();
      for (const pair of formData) {
        searchParams.append(pair[0], pair[1]);
      }
      
      // Submit the form using fetch
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: searchParams.toString(),
      });
      
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      
      // Form submitted successfully
      setFormStatus({ submitted: true, submitting: false, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        course: '',
        newsletter: false
      });
      setTouched({});
      setFormErrors({});
    } catch (err) {
      console.error("Form submission error:", err);
      setFormStatus({ 
        submitted: false, 
        submitting: false, 
        error: "There was a problem submitting your form. Please try again." 
      });
    }
  };

  // Code to make form visible as user scrolls to it (animation)
  const formElementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (formElementRef.current) {
            formElementRef.current.style.opacity = '1';
            formElementRef.current.style.transform = 'translateY(0)';
          }
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = formElementRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="contact" className="section bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Have questions about our chemistry classes? Contact us for more information or to schedule a free consultation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Panel */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 80722 10165</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">r.sumathi83@gmail.com</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Class Schedule</p>
                  <p className="text-gray-600">Monday to Friday, Online Classes</p>
                  <p className="text-gray-600">Offline Classes available for Thirumangalam residents</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://youtube.com" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={formElementRef}
            className="transition-all duration-700"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  Your message has been received. We'll contact you shortly.
                </p>
                <button 
                  onClick={() => setFormStatus({submitted: false, submitting: false, error: null})}
                  className="mt-4 text-green-600 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Enrollment Form</h3>
                
                <form 
                  className="space-y-5" 
                  onSubmit={handleSubmit} 
                  ref={formRef}
                  name="enrollment"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  {/* These hidden inputs are required for Netlify Forms */}
                  <input type="hidden" name="form-name" value="enrollment" />
                  <div hidden>
                    <input name="bot-field" />
                  </div>
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border ${formErrors.name && touched.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
                      placeholder="Your name"
                    />
                    {formErrors.name && touched.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  
                  {/* Email and Phone fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border ${formErrors.email && touched.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && touched.email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border ${formErrors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
                        placeholder="+91 12345 67890"
                      />
                      {formErrors.phone && touched.phone && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Course selection */}
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Interested Course*</label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border ${formErrors.course && touched.course ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
                    >
                      <option value="">Select a course</option>
                      <option value="foundation">Foundation Course - Grade VIII to X</option>
                      <option value="intermediate">Intermediate Course - Grade XI</option>
                      <option value="advanced">Advanced Course - Grade XII</option>
                    </select>
                    {formErrors.course && touched.course && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.course}</p>
                    )}
                  </div>
                  
                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message <span className="text-gray-500 text-xs">(optional)</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Any specific requirements or questions"
                    ></textarea>
                  </div>
                  
                  {/* Newsletter checkbox */}
                  <div className="flex items-center mt-4">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      Subscribe to our newsletter for chemistry tips and resources
                    </label>
                  </div>
                  
                  {/* Error message */}
                  {formStatus.error && (
                    <div className="text-red-600 text-sm bg-red-50 p-3 rounded">
                      {formStatus.error}
                    </div>
                  )}
                  
                  {/* Submit button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-md hover:opacity-90 transition duration-200 font-medium ${formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {formStatus.submitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : "Submit Enrollment Request"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;