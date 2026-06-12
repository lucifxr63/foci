import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { waLink, WA_GENERIC_MESSAGE } from '../lib/whatsapp';

const METRICS = [
  { value: '+500',   label: 'Pacientes atendidos' },
  { value: '4.9★',   label: 'Evaluación Promedio'  },
  { value: '3+ años',  label: 'De Experiencia'     },
];

const BADGES = [
  'Profesionales Certificados',
  'Atención Money Service',
  'Calidad de Servicio',
];

/* ── Carrusel de imágenes de fondo ─────────────────────────────────────── */
const SLIDES = [
  {
    src:  '/hero-bg.png',
    alt:  'Especialista realizando evaluación auditiva',
  },
  {
    src:  '/hero-slide2.png',
    alt:  'Audiometría con tecnología de vanguardia',
  },
  {
    src:  '/hero-slide3.png',
    alt:  'Otoscopía profesional en clínica FOCI',
  },
];

const INTERVAL = 4000; // ms entre slides

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (idx) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length);
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row lg:items-center overflow-visible lg:overflow-hidden bg-brand-navy pt-[72px] lg:pt-0">

      {/* ── Slides for Desktop (Hidden on mobile/tablet) ─────────────────────────────────── */}
      <div className="absolute inset-0 hidden lg:block">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/65 to-brand-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
      </div>

      {/* ── Slides for Mobile/Tablet (Visible on mobile/tablet) ─────────────────────────── */}
      <div className="relative w-full h-[280px] sm:h-[400px] lg:hidden bg-brand-navy flex-shrink-0">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Subtle gradient to blend slider bottom into text section */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />

        {/* Mobile/Tablet Arrows inside the container */}
        <button
          onClick={() => { go(current - 1); startTimer(); }}
          aria-label="Slide anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full
                     bg-black/35 backdrop-blur-sm flex items-center justify-center text-white
                     border border-white/20 transition-all duration-200 hover:bg-black/50"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => { go(current + 1); startTimer(); }}
          aria-label="Slide siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full
                     bg-black/35 backdrop-blur-sm flex items-center justify-center text-white
                     border border-white/20 transition-all duration-200 hover:bg-black/50"
        >
          <ChevronRight size={16} />
        </button>

        {/* Mobile/Tablet Dot indicators inside the container */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { go(i); startTimer(); }}
              aria-label={`Ir a slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Arrows (Desktop) ──────────────────────────────────────── */}
      <button
        onClick={() => { go(current - 1); startTimer(); }}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full
                   bg-white/20 backdrop-blur-sm flex items-center justify-center text-white
                   border border-white/30 transition-all duration-200 hover:bg-white/35
                   hover:scale-110 hidden lg:flex"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => { go(current + 1); startTimer(); }}
        aria-label="Slide siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full
                   bg-white/20 backdrop-blur-sm flex items-center justify-center text-white
                   border border-white/30 transition-all duration-200 hover:bg-white/35
                   hover:scale-110 hidden lg:flex"
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Dot indicators (Desktop) ───────────────────────────────── */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden lg:flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { go(i); startTimer(); }}
            aria-label={`Ir a slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="section-wrapper relative z-10 w-full pt-8 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl">

          {/* Badge/Pill */}
          <div className="animate-fade-up opacity-0 mb-6" style={{ animationFillMode: 'forwards' }}>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm
                             text-white font-body text-sm px-4 py-2 rounded-full border border-white/25">
              <span className="w-2 h-2 rounded-full bg-brand-sky animate-pulse" />
              Fonoaudiología Clínica Integral · Temuco, Chile
            </span>
          </div>

          {/* H1 */}
          <h1
            className="animate-fade-up opacity-0 font-heading font-extrabold text-white
                       text-[1.75rem] sm:text-4xl lg:text-[3.4rem] leading-[1.15] sm:leading-[1.08] tracking-tight mb-6"
            style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
          >
            Servicios de{' '}
            <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #6aaed6, #0dcaf0)' }}>
              Especialización
            </span>{' '}
            en{' '}
            <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #0d6efd, #0dcaf0)' }}>
              Terapia Fonoaudiológica
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-up opacity-0 text-blue-100 text-lg sm:text-xl
                       leading-relaxed mb-10 max-w-xl font-body font-light"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            Diagnóstico preciso y tratamiento personalizado. Tu salud en manos de
            profesionales certificados con tecnología de vanguardia. Ofrecemos evaluación
            y terapia integral para todas las áreas de la fonoaudiología y audición.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up opacity-0 flex flex-wrap gap-4 mb-14"
            style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}
          >
            <a
              href={waLink(WA_GENERIC_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-reservar"
              className="inline-flex items-center gap-2 text-white font-heading font-semibold
                         px-8 py-4 rounded-full text-base transition-all duration-300
                         hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#0d6efd', boxShadow: '0 8px 32px rgba(13,110,253,0.50)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0b5ed7'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0d6efd'}
            >
              Reservar Mi Evaluación <ArrowRight size={18} />
            </a>
            <button
              onClick={() => scrollTo('servicios')}
              id="hero-cta-servicios"
              className="inline-flex items-center gap-2 bg-transparent text-white font-heading
                         font-semibold px-8 py-4 rounded-full text-base border-2 border-white/50
                         transition-all duration-300 hover:bg-white/15 hover:border-white/80
                         hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              Conocer Servicios
            </button>
          </div>

          {/* Métricas */}
          <div
            className="animate-fade-up opacity-0 flex flex-wrap gap-8 mb-8"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            {METRICS.map(({ value, label }, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-none">
                  {value}
                </span>
                <span className="font-body text-blue-200 text-xs mt-1 tracking-wide">{label}</span>
              </div>
            ))}
          </div>

          {/* Badge pills */}
          <div
            className="animate-fade-up opacity-0 flex flex-wrap gap-2"
            style={{ animationDelay: '750ms', animationFillMode: 'forwards' }}
          >
            {BADGES.map((b, i) => (
              <span key={i}
                    className="inline-flex items-center text-xs text-blue-100 bg-white/10
                               backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile phone CTA */}
      <a href="tel:+56965545777"
         className="absolute bottom-8 right-6 z-20 lg:hidden inline-flex items-center gap-2
                    text-white font-semibold text-sm px-5 py-3 rounded-full"
         style={{ backgroundColor: '#0d6efd', boxShadow: '0 8px 24px rgba(13,110,253,0.45)' }}>
        <Phone size={15} /> Llamar Ahora
      </a>
    </section>
  );
}
