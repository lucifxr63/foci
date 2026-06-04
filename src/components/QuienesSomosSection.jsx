import { useState, useEffect, useRef } from 'react';
import { Award, Heart, Users, GraduationCap, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

const VALUES = [
  {
    icon: Heart,
    title: 'Vocación de Servicio',
    desc: 'Cada paciente recibe atención personalizada con empatía y dedicación.',
  },
  {
    icon: Award,
    title: 'Excelencia Clínica',
    desc: 'Estándares internacionales en diagnóstico y procedimientos auditivos.',
  },
  {
    icon: Users,
    title: 'Enfoque Integral',
    desc: 'Abordamos la salud auditiva de forma holística, considerando cada contexto.',
  },
];

const PROFILES = [
  {
    name: 'Lesly Villagrán Obreque',
    role: 'Directora Clínica',
    subtitle: 'Fonoaudióloga Directora de FOCI',
    image: '/professional-lesly-v3.png',
    imgPosition: 'object-top',
    bio: 'Lidera FOCI con una visión de atención auditiva personalizada, oportuna y humana. Especialista en otoscopía y lavado de oídos seguro, enfocada en mejorar el bienestar de sus pacientes.',
    credentials: [
      'Fonoaudióloga Certificada',
      'Especialista en Otoscopía y Lavado Clínico',
      'Experta en Diagnóstico y Cuidado Auditivo',
      'Atención a niños (desde 3 años), adultos y mayores',
    ],
  },
  {
    name: 'Carla Valenzuela',
    role: 'Fonoaudióloga Clínica',
    subtitle: 'Especialista en Lenguaje e Intervención',
    image: '/professional-carla-v3.png',
    imgPosition: 'object-top',
    bio: 'Dedicada a la evaluación e intervención integral en población infantojuvenil y adultos. Especialista en potenciar habilidades comunicativas, de habla y deglución centrada en la familia.',
    credentials: [
      'Fonoaudióloga Licenciada',
      'Especialista en Lenguaje y Habla Infantojuvenil',
      'Certificada en Escala de Observación ADOS-2',
      'Diplomada en Neurorrehabilitación y Deglución',
    ],
  },
];

export default function QuienesSomosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profilesScrollIndex, setProfilesScrollIndex] = useState(0);
  const profilesContainerRef = useRef(null);

  const handleProfilesScroll = (e) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    // Calculate scroll index based on scroll position
    const index = Math.round(scrollLeft / width);
    setProfilesScrollIndex(index);
  };

  const scrollProfiles = (direction) => {
    const container = profilesContainerRef.current;
    if (!container) return;
    const card = container.querySelector('.card');
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 24; // gap-6 is 24px
    const scrollAmount = cardWidth + gap;
    
    if (direction === 'next') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = VALUES.length - visibleCount;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCount]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(VALUES.length - visibleCount, prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const maxIndex = VALUES.length - visibleCount;
  const dotCount = maxIndex + 1;

  return (
    <section id="quienes-somos" className="py-16 md:py-24 bg-brand-slate overflow-hidden">
      <div className="section-wrapper">

        {/* ── Section Header ───────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <span className="section-tag">Conócenos</span>
          <h2 className="section-title mb-4">
            ¿Quiénes{' '}
            <span className="text-brand-blue">Somos?</span>
          </h2>
          <div className="divider-brand mx-auto mb-6" />
          <p className="section-subtitle mx-auto text-center max-w-3xl">
            <strong className="text-brand-navy font-semibold">FOCI — Fonoaudiología Clínica Integral</strong> nace
            con la misión de brindar atención auditiva de excelencia, cercana y accesible para todos.
            Somos un centro especializado en evaluaciones y tratamientos auditivos con tecnología de punta
            y un enfoque profundamente humano.
          </p>
        </div>

        {/* ── Values Carousel ─────────────────────────────────────────────── */}
        <div className="relative px-4 sm:px-8 mb-16 group/carousel">
          <div className="overflow-hidden">
            <div
              className="flex -mx-3 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {VALUES.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div
                    className="card p-8 text-center group cursor-default h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center
                                      mx-auto mb-5 shadow-cta/30
                                      transition-all duration-300 group-hover:scale-110 group-hover:shadow-cta">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-brand-navy text-lg mb-3">{title}</h3>
                      <p className="text-text-body text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-[-8px] sm:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full
                           bg-white shadow-card border border-slate-100 flex items-center justify-center
                           text-brand-navy hover:text-[#0d6efd] hover:scale-105 active:scale-95
                           disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="absolute right-[-8px] sm:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full
                           bg-white shadow-card border border-slate-100 flex items-center justify-center
                           text-brand-navy hover:text-[#0d6efd] hover:scale-105 active:scale-95
                           disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Dot Indicators */}
        {dotCount > 1 && (
          <div className="flex justify-center gap-1.5 -mt-10 mb-16">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-6 bg-[#0d6efd]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* ── Professional Profiles Wrapper ───────────────────────────────── */}
        <div className="relative max-w-4xl mx-auto group/profiles">
          {/* Scrollable Container */}
          <div
            ref={profilesContainerRef}
            onScroll={handleProfilesScroll}
            className="flex overflow-x-auto md:grid md:grid-cols-2 gap-6 md:gap-8 pb-6 md:pb-0 scroll-hide snap-x snap-mandatory items-start px-12 md:px-0"
          >
            {PROFILES.map((profile, index) => (
              <div
                key={index}
                className="card overflow-hidden w-[76vw] sm:w-[380px] md:w-full flex-shrink-0 snap-center cursor-pointer group relative"
                onClick={() => setSelectedImage(profile.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={profile.image}
                    alt={`Fonoaudióloga ${profile.name}`}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-brand-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full text-brand-navy shadow-cta transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn size={24} className="text-brand-blue" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows for Mobile (Horizontal Scroll) */}
          {/* Left Arrow: Show only when scrolled to the right (profilesScrollIndex > 0) */}
          <button
            onClick={() => scrollProfiles('prev')}
            className={`absolute left-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full
                       bg-white/90 backdrop-blur shadow-lg border border-slate-100 flex items-center justify-center
                       text-brand-navy active:scale-95 transition-all duration-300 md:hidden
                       ${profilesScrollIndex > 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
            aria-label="Ver perfil anterior"
          >
            <ChevronLeft size={20} className="text-brand-blue" />
          </button>

          {/* Right Arrow: Show only when at the beginning (profilesScrollIndex === 0) */}
          <button
            onClick={() => scrollProfiles('next')}
            className={`absolute right-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full
                       bg-white/90 backdrop-blur shadow-lg border border-slate-100 flex items-center justify-center
                       text-brand-navy active:scale-95 transition-all duration-300 md:hidden
                       ${profilesScrollIndex === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
            aria-label="Ver siguiente perfil"
          >
            <ChevronRight size={20} className="text-brand-blue" />
          </button>
        </div>

      </div>

      {/* ── Lightbox Modal ───────────────────────────────────────────────── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/10 hover:bg-white/20 active:scale-95 text-white p-3 rounded-full backdrop-blur transition-all duration-200 z-10"
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>
          
          {/* Modal content */}
          <div
            className="relative max-w-full max-h-[90vh] md:max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Perfil ampliado"
              className="max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vh] max-h-[90vh] md:max-h-[95vh] rounded-xl shadow-2xl object-contain border border-white/10 animate-scale-up"
            />
          </div>
        </div>
      )}
    </section>
  );
}
