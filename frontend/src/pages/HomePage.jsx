import HeroSection from '../components/homepage/HeroSection';
import AboutSection from '../components/homepage/AboutSection';
import CoursesSection from '../components/homepage/CoursesSection';
import TeacherSection from '../components/homepage/TeacherSection';
//import TestimonialsSection from '../components/homepage/TestimonialsSection';
import ContactSection from '../components/homepage/ContactSection';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <TeacherSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </div>
  );
}

export default HomePage;
