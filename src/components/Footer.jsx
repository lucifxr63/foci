import { Phone, Mail, MapPin, Clock, Globe, MessageCircle, ExternalLink, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import FociLogo from './FociLogo';
import { waLink, WA_GENERIC_MESSAGE } from '../lib/whatsapp';
import { SERVICES } from '../data/services';

const QUICK_LINKS = [
  { label: 'Inicio',         href: '#hero'          },
  { label: 'Quiénes Somos',  href: '#quienes-somos' },
  { label: 'Galería',        href: '#instalaciones' },
  { label: 'Reseñas',        href: '#testimonios'   },
  { label: 'Contáctanos',    href: '#contacto'      },
];

// Enlaces internos a cada página de servicio (anchor descriptivo = bueno para SEO).
const SERVICES_LINKS = SERVICES.map((s) => ({ label: s.shortTitle, slug: s.slug }));

const SOCIAL = [
  { icon: Globe,          href: 'https://www.instagram.com/foci.cl/', label: 'Instagram de FOCI' },
  { icon: MessageCircle,  href: 'https://wa.me/56965545777', label: 'WhatsApp de FOCI'  },
];

export default function Footer() {
  const nav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white overflow-hidden">

      {/* ── CTA Banner ──────────────────────────────────────────────── */}
      <div className="relative py-14 overflow-hidden"
           style={{ background: 'linear-gradient(135deg, #1a2f5e 0%, #0d6efd 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full
                        blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full
                        blur-2xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="section-wrapper relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
                ¿Listo para cuidar tu salud auditiva?
              </h2>
              <p className="font-body text-blue-200">
                Agenda tu evaluación hoy · Atención Lun–Sáb
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={waLink(WA_GENERIC_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white font-heading font-bold
                           px-7 py-3.5 rounded-full text-sm transition-all duration-300
                           hover:bg-blue-50 hover:scale-105 active:scale-95"
                style={{ color: '#0d6efd' }}
              >
                <MessageCircle size={15} /> Reservar Hora
              </a>
              <a
                href="tel:+56965545777"
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm
                           text-white font-heading font-semibold px-7 py-3.5 rounded-full text-sm
                           border border-white/30 transition-all duration-300
                           hover:bg-white/25 hover:scale-105 active:scale-95"
              >
                <Phone size={15} />
                +56 9 6554 5777
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────────── */}
      <div className="py-16 border-b border-white/10">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="lg:col-span-1">
              {/* Logo oficial en versión blanca */}
              <div className="mb-5">
                <FociLogo
                  size="md"
                  transparent={true}
                  className="h-[57px] md:h-[64px] lg:h-[81px] w-auto bg-white border border-slate-200 rounded-xl p-2 shadow-sm"
                />
              </div>

              <p className="font-body text-blue-200 text-sm leading-relaxed mb-6">
                Especialistas en evaluaciones auditivas y fonoaudiología clínica.
                Cuidamos tu salud auditiva con tecnología y vocación.
              </p>

              <div className="flex gap-3">
                {SOCIAL.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center
                               border border-white/10 transition-all duration-300
                               hover:scale-110"
                    style={{ '--hover-bg': '#0d6efd' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0d6efd'; e.currentTarget.style.borderColor = '#0d6efd'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.borderColor = ''; }}
                  >
                    <Icon size={16} className="text-blue-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navegación */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm mb-5 tracking-wide uppercase">
                Navegación
              </h4>
              <ul className="space-y-3">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => nav(e, href)}
                      className="font-body text-blue-200 text-sm transition-colors duration-200
                                 hover:text-white flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full transition-all duration-200
                                       group-hover:bg-white group-hover:scale-150"
                            style={{ backgroundColor: '#0d6efd' }} />
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    to="/blog"
                    className="font-body text-blue-200 text-sm transition-colors duration-200
                               hover:text-white flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full transition-all duration-200
                                     group-hover:bg-white group-hover:scale-150"
                          style={{ backgroundColor: '#0d6efd' }} />
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm mb-5 tracking-wide uppercase">
                Servicios
              </h4>
              <ul className="space-y-3">
                {SERVICES_LINKS.map(({ label, slug }) => (
                  <li key={slug}>
                    <Link
                      to={`/${slug}`}
                      className="font-body text-blue-200 text-sm transition-colors duration-200
                                 hover:text-white flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full transition-all duration-200
                                       group-hover:bg-white group-hover:scale-150"
                            style={{ backgroundColor: '#0d6efd' }} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm mb-5 tracking-wide uppercase">
                Contacto
              </h4>
              <ul className="space-y-4">
                {[
                  { icon: Phone,  val: '+56 9 6554 5777',       href: 'tel:+56965545777'        },
                  { icon: Mail,   val: 'contacto@foci.cl',       href: 'mailto:contacto@foci.cl' },
                  { icon: MapPin, val: 'General Mackenna 593, Of. 504, Temuco, Chile', href: 'https://maps.google.com/?q=General+Mackenna+593+Temuco+Chile' },
                  { icon: Clock,  val: 'Lun-Vie: 09:00-19:00/18:00 · Sáb: 09:00-15:00', href: null },
                ].map(({ icon: Icon, val, href }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#0dcaf0' }} />
                    {href ? (
                      <a href={href} className="font-body text-blue-200 text-sm hover:text-white
                                                transition-colors duration-200">
                        {val}
                      </a>
                    ) : (
                      <span className="font-body text-blue-200 text-sm">{val}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────── */}
      <div className="py-6">
        <div className="section-wrapper flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-blue-300 text-xs text-center sm:text-left">
            © {year} FOCI — Fonoaudiología Clínica Integral. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="font-body text-blue-300 text-xs hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="font-body text-blue-300 text-xs hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Volver al inicio"
              className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center
                         border border-white/10 transition-all duration-300 hover:scale-110"
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0d6efd'; e.currentTarget.style.borderColor = '#0d6efd'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.borderColor = ''; }}
            >
              <ArrowUp size={14} className="text-blue-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
