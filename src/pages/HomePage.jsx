import Navbar             from '../components/Navbar';
import HeroSection         from '../components/HeroSection';
import ServiciosSection    from '../components/ServiciosSection';
import QuienesSomosSection from '../components/QuienesSomosSection';
import InstalacionesSection from '../components/InstalacionesSection';
import TestimoniosSection  from '../components/TestimoniosSection';
import InstagramSection    from '../components/InstagramSection';
import ContactoSection     from '../components/ContactoSection';
import Footer              from '../components/Footer';
import ReservaWidget       from '../components/ReservaWidget';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServiciosSection />
        <QuienesSomosSection />
        <InstalacionesSection />
        <TestimoniosSection />
        <InstagramSection />
        <ContactoSection />
      </main>
      <Footer />
      <ReservaWidget />
    </div>
  );
}
