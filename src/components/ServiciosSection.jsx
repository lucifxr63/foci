import { useState, useEffect, useRef } from 'react';
import { Ear, Droplets, BarChart2, Activity, Mic2, BookOpen, Brain, ArrowRight, X, Phone, Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * SERVICIOS — Lista oficial de 8 servicios reales de la clínica según nota de Figma.
 */
const SERVICES = [
  {
    icon:  Ear,
    title: 'Consulta General',
    desc:  'Evaluación fonoaudiológica inicial para determinar necesidades terapéuticas.',
    color: '#0d6efd',
    bg:    '#eff6ff',
    tag:   'Evaluación',
    image: '/clinic-room1.png',
    detail: 'Sesión de evaluación general donde se analizan las capacidades de comunicación, lenguaje, habla, voz, audición y deglución del paciente. Permite realizar un diagnóstico preliminar y trazar el plan de intervención más adecuado para cada caso.',
  },
  {
    icon:  Droplets,
    title: 'Lavado de Oídos',
    desc:  'Irrigación auricular segura e indolora. Solo 20 minutos.',
    color: '#0dcaf0',
    bg:    '#ecfeff',
    tag:   'Procedimiento',
    image: '/service-ear-wash.png',
    detail: 'Procedimiento clínico seguro e indoloro para remover tapones de cerumen acumulados mediante micro-curetas o irrigación de agua templada a presión controlada. Alivio inmediato de la sensación de oído tapado y mejora instantánea de la audición.',
  },
  {
    icon:  BarChart2,
    title: 'Audiometría',
    desc:  'Medición precisa del umbral auditivo para cada frecuencia.',
    color: '#198754',
    bg:    '#f0fdf4',
    tag:   'Diagnóstico',
    image: '/hero-slide2.png',
    detail: 'Examen preciso realizado dentro de una cabina sonoamortiguada para determinar los umbrales mínimos de audición por vía aérea y ósea. Permite trazar un audiograma exacto para el diseño de tratamientos o adaptación de audífonos.',
  },
  {
    icon:  Users,
    title: 'Terapia lenguaje / habla adulto',
    desc:  'Rehabilitación y terapia de comunicación y lenguaje para adultos.',
    color: '#6c757d',
    bg:    '#f8f9fa',
    tag:   'Terapia',
    image: '/clinic-room2.png',
    detail: 'Tratamiento enfocado en recuperar o potenciar habilidades comunicativas, del habla o del lenguaje en adultos que presenten dificultades debido a condiciones neurológicas (afasias, disartrias) o trastornos del desarrollo de la comunicación.',
  },
  {
    icon:  BookOpen,
    title: 'Terapia lenguaje / habla infantojuvenil',
    desc:  'Apoyo terapéutico en el desarrollo del lenguaje para niños y jóvenes.',
    color: '#dc3545',
    bg:    '#fff1f2',
    tag:   'Terapia',
    image: '/professional.png',
    detail: 'Terapia especializada orientada a niños y adolescentes que presentan retrasos en la adquisición del lenguaje, trastornos específicos del lenguaje (TEL), dificultades de habla o trastornos de la comunicación social, utilizando un enfoque lúdico y cercano.',
  },
  {
    icon:  Brain,
    title: 'Evaluación ADOS-2',
    desc:  'Evaluación de referencia para el diagnóstico de autismo.',
    color: '#0d6efd',
    bg:    '#eff6ff',
    tag:   'Especializado',
    image: '/clinic-equipment.png',
    detail: 'El ADOS-2 (Escala de Observación para el Diagnóstico del Autismo) es la prueba de referencia a nivel internacional para la evaluación y diagnóstico de personas con sospecha de Trastorno del Espectro Autista (TEA), adaptada a distintas edades y niveles de lenguaje.',
  },
  {
    icon:  Activity,
    title: 'Rehabilitación vestibular',
    desc:  'Tratamiento especializado para el equilibrio y manejo de vértigo.',
    color: '#6c757d',
    bg:    '#f8f9fa',
    tag:   'Especializado',
    image: '/clinic-reception.png',
    detail: 'Terapia física y ejercicios específicos diseñados para entrenar el cerebro y el oído interno a compensar las alteraciones del equilibrio. Altamente eficaz para pacientes con vértigo posicional (VPPB), inestabilidad y mareos crónicos.',
  },
  {
    icon:  Mic2,
    title: 'Trastorno de la voz',
    desc:  'Evaluación y rehabilitación vocal para disfonías y cuidado vocal.',
    color: '#dc3545',
    bg:    '#fff1f2',
    tag:   'Terapia',
    image: '/service-otoscopy.png',
    detail: 'Terapia fonoaudiológica enfocada en personas con disfonías funcionales u orgánicas (nódulos, pólipos) y profesionales que usan su voz como herramienta de trabajo (docentes, locutores, cantantes). Incluye técnicas de respiración, proyección y ergonomía vocal.',
  },
];

export default function ServiciosSection() {
  const [selected, setSelected] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const servicesContainerRef = useRef(null);

  const handleServicesScroll = (e) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowLeftArrow(scrollLeft > 15);
    setShowRightArrow(scrollLeft < maxScrollLeft - 15);
  };

  const scrollServices = (direction) => {
    const container = servicesContainerRef.current;
    if (!container) return;
    const card = container.querySelector('.service-card-item');
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

  const scrollToContact = () => {
    setSelected(null);
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="servicios" className="py-16 md:py-24 bg-brand-slate overflow-hidden">
      <div className="section-wrapper">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="section-tag">Nuestros Servicios</span>
          <h2 className="section-title mb-3">
            <span style={{ color: '#0d6efd' }}>Evaluación Auditiva</span> Integral
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p className="section-subtitle mx-auto text-center max-w-3xl">
            Utilizamos tecnología de vanguardia para entregar diagnósticos precisos y
            tratamientos personalizados de forma cercana y profesional.
          </p>
        </div>

        {/* ── Services Wrapper with Carousel (Mobile) and Grid (Desktop) ── */}
        <div className="relative mb-12 group/services">
          {/* Scrollable container */}
          <div
            ref={servicesContainerRef}
            onScroll={handleServicesScroll}
            className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-6 lg:pb-0 scroll-hide snap-x snap-mandatory items-stretch px-12 lg:px-0"
          >
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  onClick={() => setSelected(service)}
                  className="group service-card-item bg-white rounded-2xl p-6 border border-slate-100/80 shadow-card
                             transition-all duration-300 hover:shadow-card-lg hover:-translate-y-1.5
                             cursor-pointer flex flex-col justify-between w-[76vw] sm:w-[280px] lg:w-full flex-shrink-0 snap-center"
                >
                  <div>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4
                                 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: service.bg }}
                    >
                      <Icon size={22} style={{ color: service.color }} />
                    </div>

                    {/* Tag */}
                    <span className="text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full mb-2 inline-block"
                          style={{ color: service.color, backgroundColor: service.bg }}>
                      {service.tag}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-brand-navy text-sm leading-snug mb-2 group-hover:text-[#0d6efd] transition-colors">
                      {service.title}
                    </h3>

                    {/* Desc */}
                    <p className="font-body text-text-muted text-xs leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>

                  {/* Read more link */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-[#0d6efd] group-hover:gap-2 transition-all mt-auto pt-2">
                    Ver detalles <ArrowRight size={12} />
                  </span>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows for Mobile Carousel */}
          {/* Left Arrow */}
          <button
            onClick={() => scrollServices('prev')}
            className={`absolute left-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full
                       bg-white/90 backdrop-blur shadow-lg border border-slate-100 flex items-center justify-center
                       text-brand-navy active:scale-95 transition-all duration-300 lg:hidden
                       ${showLeftArrow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
            aria-label="Ver servicios anteriores"
          >
            <ChevronLeft size={20} className="text-brand-blue" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollServices('next')}
            className={`absolute right-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full
                       bg-white/90 backdrop-blur shadow-lg border border-slate-100 flex items-center justify-center
                       text-brand-navy active:scale-95 transition-all duration-300 lg:hidden
                       ${showRightArrow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
            aria-label="Ver siguientes servicios"
          >
            <ChevronRight size={20} className="text-brand-blue" />
          </button>
        </div>

        {/* ── Bottom CTA ──────────────────────────────────────────────── */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-white font-heading font-semibold
                       px-8 py-3.5 rounded-full text-sm transition-all duration-300
                       hover:scale-105 active:scale-95"
            style={{ backgroundColor: '#0d6efd', boxShadow: '0 8px 24px rgba(13,110,253,0.35)' }}
          >
            Agendar una Evaluación
            <ArrowRight size={16} />
          </button>
        </div>

      </div>


      {/* ── Modal Detalle Servicio ──────────────────────────────────── */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop click close */}
          <div className="absolute inset-0" onClick={() => setSelected(null)} />
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full relative z-10 flex flex-col max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 text-white
                         flex items-center justify-center hover:bg-black/60 transition-colors"
              aria-label="Cerrar modal"
            >
              <X size={16} />
            </button>

            {/* Header Image */}
            <div className="relative h-60 md:h-64 w-full flex-shrink-0">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-[10px] font-heading font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                      style={{ color: '#ffffff', backgroundColor: selected.color }}>
                  {selected.tag}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto scroll-hide flex-1">
              <h3 className="font-heading font-extrabold text-brand-navy text-2xl mb-4">
                {selected.title}
              </h3>

              <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-sky rounded-full mb-5" />

              <p className="font-body text-text-body text-sm leading-relaxed mb-6">
                {selected.detail}
              </p>

              {/* Extra details stats info */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Calendar size={14} className="text-[#0d6efd]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-navy text-xs leading-none">Reserva rápida</p>
                    <p className="font-body text-text-muted text-[10px] mt-0.5">Vía web o WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Phone size={14} className="text-[#0d6efd]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-navy text-xs leading-none">Atención profesional</p>
                    <p className="font-body text-text-muted text-[10px] mt-0.5">Certificado FOCI</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={scrollToContact}
                  className="flex-1 inline-flex items-center justify-center gap-2 text-white
                             font-heading font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-300"
                  style={{ backgroundColor: '#0d6efd', boxShadow: '0 4px 14px rgba(13,110,253,0.3)' }}
                >
                  Agendar este servicio
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center gap-2 border border-slate-200
                             text-slate-600 font-heading font-bold py-3.5 px-6 rounded-xl text-sm
                             transition-all duration-300 hover:bg-slate-50"
                >
                  Volver
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
