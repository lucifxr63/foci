import { Head }            from 'vite-react-ssg';
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
      <Head>
        <title>FOCI | Fonoaudióloga Temuco | Evaluación Auditiva y Fonoaudiología Clínica</title>
        <meta name="description" content="FOCI — Fonoaudiología Clínica Integral en Temuco, Chile. Especialistas en audiometría, lavado de oídos, otoscopía, terapia del lenguaje, evaluación ADOS-2 y rehabilitación vestibular. Atención desde los 3 años." />
        <meta name="keywords" content="fonoaudiología Temuco, evaluación auditiva Temuco, lavado de oídos Temuco, audiometría Temuco, terapia del lenguaje Temuco, ADOS-2 Temuco, fonoaudiólogo Temuco" />
        <link rel="canonical" href="https://foci.cl/" />
        <meta property="og:title" content="FOCI | Fonoaudióloga Temuco | Evaluación Auditiva Integral" />
        <meta property="og:description" content="Especialistas en audiometría, lavado de oídos, terapia del lenguaje y fonoaudiología clínica en Temuco, Chile. Atención Lun–Sáb. +56 9 6554 5777." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://foci.cl/" />
        <meta property="og:image" content="https://foci.cl/og-image.jpg" />
        <meta property="og:locale" content="es_CL" />
        <meta property="og:site_name" content="FOCI — Fonoaudiología Clínica Integral" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué es una audiometría?", "acceptedAnswer": { "@type": "Answer", "text": "La audiometría es un examen que mide con precisión el umbral mínimo de audición para cada frecuencia sonora, realizado en una cabina sonoamortiguada. Permite detectar pérdidas auditivas y trazar un audiograma para diseñar tratamientos o adaptar audífonos. En FOCI realizamos audiometrías por vía aérea y ósea." } },
            { "@type": "Question", "name": "¿Cuánto tiempo dura un lavado de oídos?", "acceptedAnswer": { "@type": "Answer", "text": "El procedimiento de lavado de oídos en FOCI dura aproximadamente 20 minutos. Es completamente seguro e indoloro, y permite remover tapones de cerumen mediante micro-curetas o irrigación de agua templada a presión controlada, con alivio inmediato de la sensación de oído tapado." } },
            { "@type": "Question", "name": "¿Desde qué edad se puede hacer una evaluación fonoaudiológica?", "acceptedAnswer": { "@type": "Answer", "text": "En FOCI atendemos pacientes desde los 3 años de edad. Ofrecemos terapia especializada para niños, adolescentes y adultos de todas las edades, adaptando el enfoque según la etapa de desarrollo y las necesidades de cada paciente." } },
            { "@type": "Question", "name": "¿Qué es el ADOS-2 y para qué sirve?", "acceptedAnswer": { "@type": "Answer", "text": "El ADOS-2 (Escala de Observación para el Diagnóstico del Autismo) es la prueba de referencia internacional para la evaluación y diagnóstico del Trastorno del Espectro Autista (TEA). En FOCI contamos con profesionales certificadas en su aplicación, adaptada a distintas edades y niveles de lenguaje." } },
            { "@type": "Question", "name": "¿Qué es la rehabilitación vestibular?", "acceptedAnswer": { "@type": "Answer", "text": "La rehabilitación vestibular es una terapia con ejercicios específicos diseñados para entrenar al cerebro y el oído interno a compensar alteraciones del equilibrio. Es altamente eficaz para pacientes con vértigo posicional benigno (VPPB), inestabilidad crónica y mareos." } },
            { "@type": "Question", "name": "¿Dónde está ubicada la clínica FOCI en Temuco?", "acceptedAnswer": { "@type": "Answer", "text": "FOCI Fonoaudiología está ubicada en General Mackenna 583, Oficina 504, Temuco, Región de La Araucanía, Chile. Atendemos de lunes a viernes de 09:00 a 19:00 horas y sábados de 09:00 a 15:00 horas. Teléfono: +56 9 6554 5777." } },
            { "@type": "Question", "name": "¿Cómo agendar una hora en FOCI?", "acceptedAnswer": { "@type": "Answer", "text": "Puedes agendar tu hora en FOCI de tres formas: completando el formulario de contacto en nuestro sitio web, llamando directamente al +56 9 6554 5777, o enviando un mensaje por WhatsApp al mismo número. Respondemos dentro de las próximas 2 horas hábiles." } }
          ]
        })}</script>
      </Head>
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
