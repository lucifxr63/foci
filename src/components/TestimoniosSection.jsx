import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIOS = [
  {
    name:    'María González',
    age:     '42 años',
    initials:'MG',
    color:   'from-blue-500 to-blue-600',
    rating:  5,
    text:    'Excelente atención. La fonoaudióloga fue muy detallada en la explicación de mi diagnóstico. El procedimiento de lavado fue completamente indoloro y noté la mejora de inmediato. Totalmente recomendado.',
    service: 'Lavado de Oídos',
    date:    'Mayo 2025',
  },
  {
    name:    'Carlos Pérez',
    age:     '67 años',
    initials:'CP',
    color:   'from-sky-500 to-cyan-500',
    rating:  5,
    text:    'Llevé a mi papá para una evaluación auditiva completa. El trato fue impecable, muy pacientes con él. Los equipos son modernos y el box muy cómodo. Los resultados fueron entregados de forma clara y comprensible.',
    service: 'Evaluación Auditiva',
    date:    'Abril 2025',
  },
  {
    name:    'Valentina Soto',
    age:     '28 años',
    initials:'VS',
    color:   'from-indigo-500 to-blue-500',
    rating:  5,
    text:    'Fui por molestias auditivas y la videotoscopía fue reveladora. Ver en tiempo real el interior de mi oído me ayudó a entender el problema. La profesional explicó todo con mucha claridad y el tratamiento fue eficaz.',
    service: 'Videotoscopía',
    date:    'Abril 2025',
  },
  {
    name:    'Roberto Muñoz',
    age:     '55 años',
    initials:'RM',
    color:   'from-blue-600 to-indigo-600',
    rating:  5,
    text:    'La atención fue de primera desde que llegué. La clínica es limpia, moderna y acogedora. La fonoaudióloga es muy profesional y se nota que le apasiona su trabajo. Ya agendar mi próxima revisión anual.',
    service: 'Control Auditivo',
    date:    'Marzo 2025',
  },
  {
    name:    'Ana Fuentes',
    age:     '35 años',
    initials:'AF',
    color:   'from-cyan-500 to-sky-600',
    rating:  5,
    text:    'Muy buena experiencia. Pedí hora online y me confirmaron al día siguiente. El precio es muy razonable para la calidad del servicio que entregan. Salí muy contenta y sin la molestia que tenía hace semanas.',
    service: 'Lavado de Oídos',
    date:    'Marzo 2025',
  },
  {
    name:    'Jorge Ibáñez',
    age:     '49 años',
    initials:'JI',
    color:   'from-blue-500 to-sky-500',
    rating:  5,
    text:    'Vine por recomendación de un amigo y no me arrepiento. La evaluación fue muy completa, me realizaron varios exámenes en una sola cita. La profesional es muy atenta y el informe fue muy detallado. Volveré sin duda.',
    service: 'Evaluación Integral',
    date:    'Febrero 2025',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'star-filled' : 'text-slate-200 fill-slate-200'}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ name, age, initials, color, rating, text, service, date }) {
  return (
    <div className="card p-7 flex flex-col group h-full justify-between">
      <div>
        {/* Quote icon */}
        <Quote
          size={28}
          className="text-brand-blue/15 mb-4 transition-colors duration-300 group-hover:text-brand-blue/30"
        />

        {/* Stars */}
        <StarRating count={rating} />

        {/* Text */}
        <p className="text-text-body text-sm leading-relaxed mt-4 mb-6">
          "{text}"
        </p>

        {/* Service badge */}
        <div className="mb-5">
          <span className="badge">
            <Star size={10} className="fill-brand-blue" />
            {service}
          </span>
        </div>
      </div>

      <div>
        {/* Divider */}
        <div className="w-full h-px bg-slate-100 mb-5" />

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color}
                            flex items-center justify-center text-white font-heading font-bold text-sm`}>
              {initials}
            </div>
            <div>
              <p className="font-heading font-semibold text-brand-navy text-sm">{name}</p>
              <p className="font-body text-text-muted text-xs">{age}</p>
            </div>
          </div>
          <span className="font-body text-text-muted text-xs">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default function TestimoniosSection() {
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
    const maxIndex = TESTIMONIOS.length - visibleCount;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCount]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(TESTIMONIOS.length - visibleCount, prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const maxIndex = TESTIMONIOS.length - visibleCount;
  const dotCount = maxIndex + 1;

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-brand-light overflow-hidden">
      <div className="section-wrapper">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="section-tag">Testimonios</span>
          <h2 className="section-title mb-4">
            ¿Qué dicen nuestros{' '}
            <span className="text-brand-blue">pacientes?</span>
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p className="section-subtitle mx-auto text-center">
            La satisfacción de nuestros pacientes es nuestro mayor logro.
            Lee lo que dicen sobre su experiencia en FOCI.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white rounded-full px-6 py-3 shadow-card">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="star-filled" />
              ))}
            </div>
            <span className="font-heading font-bold text-brand-navy text-sm">4.9</span>
            <span className="text-text-muted text-sm font-body">· +500 reseñas verificadas</span>
          </div>
        </div>

        {/* ── Testimonios Carousel ────────────────────────────────────────── */}
        <div className="relative px-4 sm:px-8 mb-16 group/carousel">
          <div className="overflow-hidden">
            <div
              className="flex -mx-3 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {TESTIMONIOS.map((t, i) => (
                <div
                  key={i}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <TestimonialCard {...t} />
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

      </div>
    </section>
  );
}
