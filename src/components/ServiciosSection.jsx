import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Phone, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/services';

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
    const gap = 24;
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

        {/* ── Cards carousel ──────────────────────────────────────────── */}
        <div className="relative mb-12 group/services">
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
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4
                                 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: service.bg }}
                    >
                      <Icon size={22} style={{ color: service.color }} />
                    </div>
                    <span className="text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full mb-2 inline-block"
                          style={{ color: service.color, backgroundColor: service.bg }}>
                      {service.tag}
                    </span>
                    <h3 className="font-heading font-bold text-brand-navy text-sm leading-snug mb-2 group-hover:text-[#0d6efd] transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="font-body text-text-muted text-xs leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-[#0d6efd] group-hover:gap-2 transition-all mt-auto pt-2">
                    Ver detalles <ArrowRight size={12} />
                  </span>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows for Mobile */}
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
          <div className="absolute inset-0" onClick={() => setSelected(null)} />
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full relative z-10 flex flex-col max-h-[90vh]">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 text-white
                         flex items-center justify-center hover:bg-black/60 transition-colors"
              aria-label="Cerrar modal"
            >
              <X size={16} />
            </button>

            <div className="relative h-60 md:h-64 w-full flex-shrink-0">
              <img
                src={selected.image}
                alt={selected.shortTitle}
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

            <div className="p-6 md:p-8 overflow-y-auto scroll-hide flex-1">
              <h3 className="font-heading font-extrabold text-brand-navy text-2xl mb-4">
                {selected.shortTitle}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-sky rounded-full mb-5" />
              <p className="font-body text-text-body text-sm leading-relaxed mb-6">
                {selected.detail}
              </p>

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

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={scrollToContact}
                  className="flex-1 inline-flex items-center justify-center gap-2 text-white
                             font-heading font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-300"
                  style={{ backgroundColor: '#0d6efd', boxShadow: '0 4px 14px rgba(13,110,253,0.3)' }}
                >
                  Agendar este servicio <ArrowRight size={16} />
                </button>
                <Link
                  to={`/${selected.slug}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#0d6efd]
                             text-[#0d6efd] font-heading font-bold py-3.5 px-6 rounded-xl text-sm
                             transition-all duration-300 hover:bg-blue-50"
                >
                  Más información
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
