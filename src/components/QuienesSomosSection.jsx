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
    role: 'DIRECTORA CLÍNICA',
    subtitle: 'Fonoaudióloga Directora de FOCI',
    image: '/professional-lesly-clean.png?v=2',
    bio: 'Como fonoaudióloga y directora de FOCI, lidera el centro con una visión de atención personalizada y cercana. Especialista en otoscopía, videotoscopía y lavado de oídos seguro, se dedica a entregar soluciones precisas y un cuidado integral de la audición para mejorar la calidad de vida de cada uno de sus pacientes.',
    credentials: [
      'Fonoaudióloga Certificada',
      'Especialista en Otoscopía y Lavado de Oídos',
      'Experta en Diagnóstico y Cuidado Auditivo',
      'Atención para niños (desde 3 años), adultos y adultos mayores',
      'Comprometida con el cuidado integral de la salud auditiva',
    ],
  },
  {
    name: 'Carla Vallejos',
    role: 'FONOAUDIÓLOGA CLÍNICA',
    subtitle: 'Especialista en Lenguaje e Intervención',
    image: '/professional-carla-clean.png?v=2',
    bio: 'Dedicada a la evaluación e intervención integral en población infantojuvenil y adultos. Carla se especializa en acompañar el desarrollo comunicativo de los más pequeños y adultos con desafíos neurológicos, entregando una atención dedicada, experta y centrada en la familia.',
    credentials: [
      'Atención Temprana para potenciar el desarrollo desde los primeros años',
      'Abordaje de Diagnósticos Neurológicos como TEA, Síndrome de Down y Discapacidad Intelectual',
      'Tratamiento de Apraxia del habla infantil',
      'Apoyo a Adultos con dificultades de habla y lenguaje',
      'Comprometida con potenciar las habilidades comunicativas y el bienestar del paciente',
    ],
  },
];

export default function QuienesSomosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Carousel for profiles
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextProfile = () => {
    setActiveProfileIndex((prev) => (prev === PROFILES.length - 1 ? 0 : prev + 1));
  };

  const prevProfile = () => {
    setActiveProfileIndex((prev) => (prev === 0 ? PROFILES.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;
    if (diff > swipeThreshold) {
      nextProfile();
    } else if (diff < -swipeThreshold) {
      prevProfile();
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

        {/* ── Professional Profiles Wrapper (Carousel) ────────────────────── */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-0 group/profiles">
          
          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-3xl shadow-card border border-slate-100/90 bg-white">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeProfileIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {PROFILES.map((profile, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 md:flex md:flex-row items-stretch cursor-default bg-white"
                >
                  {/* Photo Left Half */}
                  <div className="relative h-72 sm:h-96 md:h-auto md:w-[40%] flex-shrink-0 overflow-hidden bg-white flex items-end">
                    <img
                      src={profile.image}
                      alt={`Fonoaudióloga ${profile.name}`}
                      className="w-full h-full object-cover object-bottom"
                    />
                    {/* Seamless Fade Gradient Overlay (Desktop Only) */}
                    <div className="hidden md:block absolute inset-y-0 right-0 w-28 bg-gradient-to-r from-transparent to-white pointer-events-none" />
                  </div>

                  {/* Info Right Half */}
                  <div className="p-8 sm:p-10 md:w-[60%] flex flex-col justify-between text-left">
                    <div>
                      {/* Role */}
                      <span className="text-xs font-heading font-bold tracking-widest text-[#0d6efd] uppercase block mb-1">
                        {profile.role}
                      </span>

                      {/* Name */}
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy mb-1 leading-tight">
                        {profile.name}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-brand-blue font-heading font-medium text-sm sm:text-base mb-4">
                        {profile.subtitle}
                      </p>

                      {/* Blue horizontal divider line */}
                      <div className="w-10 h-0.5 bg-[#0d6efd] mb-5" />

                      {/* Bio Paragraph */}
                      <p className="text-text-body text-[0.88rem] sm:text-[0.93rem] leading-relaxed mb-6">
                        {profile.bio}
                      </p>

                      {/* Credentials Checklist */}
                      <ul className="space-y-2.5 mb-8">
                        {profile.credentials.map((cred, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-body text-[0.82rem] sm:text-[0.88rem] leading-relaxed">
                            <GraduationCap className="w-4 h-4 text-[#0d6efd] mt-1 flex-shrink-0" />
                            <span>{cred}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking Link */}
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#0d6efd] hover:text-brand-navy hover:underline transition-all mt-auto self-start"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver perfil profesional
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Chevrons */}
          <button
            onClick={prevProfile}
            className="absolute left-[-20px] lg:left-[-55px] top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full
                       bg-white shadow-card border border-slate-100 flex items-center justify-center
                       text-brand-navy hover:text-[#0d6efd] hover:scale-105 active:scale-95 transition-all
                       opacity-100 md:opacity-0 md:group-hover/profiles:opacity-100 md:focus:opacity-100"
            aria-label="Perfil anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextProfile}
            className="absolute right-[-20px] lg:right-[-55px] top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full
                       bg-white shadow-card border border-slate-100 flex items-center justify-center
                       text-brand-navy hover:text-[#0d6efd] hover:scale-105 active:scale-95 transition-all
                       opacity-100 md:opacity-0 md:group-hover/profiles:opacity-100 md:focus:opacity-100"
            aria-label="Perfil siguiente"
          >
            <ChevronRight size={22} />
          </button>

          {/* Bottom Dot Indicators */}
          <div className="flex justify-center gap-1.5 mt-6">
            {PROFILES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveProfileIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeProfileIndex ? 'w-6 bg-[#0d6efd]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir al perfil de ${PROFILES[i].name}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
