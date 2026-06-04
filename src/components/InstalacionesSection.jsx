import { useState, useEffect } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY = [
  {
    src:   '/clinic-space-v3-1.png',
    alt:   'Box de evaluación y diagnóstico clínico de FOCI',
    label: 'Box de Evaluación',
  },
  {
    src:   '/clinic-space-v3-2.png',
    alt:   'Cómoda sala de atención y recepción fonoaudiológica',
    label: 'Sala de Consulta',
  },
  {
    src:   '/clinic-space-v3-3.png',
    alt:   'Equipamiento de otoscopía y herramientas clínicas',
    label: 'Equipamiento Clínico',
  },
];

function GalleryCard({ src, alt, label, height }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-card
                 transition-all duration-300 hover:shadow-card-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full ${height} object-cover transition-transform duration-700
                   ${hovered ? 'scale-110' : 'scale-100'}`}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 transition-all duration-300
                       bg-gradient-to-t from-brand-navy/70 via-brand-navy/20 to-transparent
                       ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Label */}
      <div className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-300
                       ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <p className="font-heading font-semibold text-white text-sm">{label}</p>
      </div>

      {/* Zoom icon */}
      <div className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm
                       flex items-center justify-center border border-white/30
                       transition-all duration-300
                       ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <ZoomIn size={16} className="text-white" />
      </div>
    </div>
  );
}

export default function InstalacionesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

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
    const maxIndex = GALLERY.length - visibleCount;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCount]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(GALLERY.length - visibleCount, prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const maxIndex = GALLERY.length - visibleCount;
  const dotCount = maxIndex + 1;

  return (
    <section id="instalaciones" className="py-16 md:py-24 bg-white">
      <div className="section-wrapper">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="section-tag">Nuestro Espacio</span>
          <h2 className="section-title mb-4">
            Nuestras{' '}
            <span className="text-brand-blue">Instalaciones</span>
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p className="section-subtitle mx-auto text-center">
            Contamos con boxes de atención equipados con tecnología de última generación,
            diseñados para brindar la máxima comodidad y privacidad durante tu consulta.
          </p>
        </div>

        {/* ── Carousel Slider ──────────────────────────────────────────────── */}
        <div className="relative px-4 sm:px-8 mb-16 group/carousel">
          <div className="overflow-hidden">
            <div
              className="flex -mx-3 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {GALLERY.map((item, i) => (
                <div
                  key={i}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <GalleryCard {...item} height="h-72 md:h-80 lg:h-96" />
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

        {/* ── Bottom Stats ─────────────────────────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: '1',      label: 'Box de Atención'          },
            { value: 'Lun-Sáb',label: 'Días de Atención'         },
            { value: 'Temuco',  label: 'Ubicación Central'        },
          ].map(({ value, label }, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-brand-light border border-brand-blue/10
                         transition-all duration-300 hover:bg-brand-blue hover:border-brand-blue group cursor-default"
            >
              <p className="font-heading font-extrabold text-2xl text-brand-navy group-hover:text-white
                            transition-colors duration-300 mb-1">
                {value}
              </p>
              <p className="font-body text-text-muted text-xs group-hover:text-blue-100
                            transition-colors duration-300">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
