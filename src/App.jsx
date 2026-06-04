import Navbar             from './components/Navbar';
import HeroSection         from './components/HeroSection';
import ServiciosSection    from './components/ServiciosSection';
import QuienesSomosSection from './components/QuienesSomosSection';
import InstalacionesSection from './components/InstalacionesSection';
import TestimoniosSection  from './components/TestimoniosSection';
import InstagramSection    from './components/InstagramSection';
import ContactoSection     from './components/ContactoSection';
import Footer              from './components/Footer';
import ReservaWidget       from './components/ReservaWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Servicios — cards de los 8 servicios con modales */}
        <ServiciosSection />

        {/* 3. ¿Quiénes Somos? */}
        <QuienesSomosSection />

        {/* 4. Instalaciones */}
        <InstalacionesSection />

        {/* 5. Testimonios */}
        <TestimoniosSection />

        {/* 6. Instagram posts */}
        <InstagramSection />

        {/* 7. Contacto + Mapa */}
        <ContactoSection />
      </main>

      <Footer />

      {/* Widget flotante de reserva (panel derecho del Figma) */}
      <ReservaWidget />
    </div>
  );
}
