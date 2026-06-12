import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import FociLogo from './FociLogo';
import { waLink, WA_GENERIC_MESSAGE } from '../lib/whatsapp';

const NAV_LINKS = [
  { label: 'Inicio',         href: '#hero'          },
  { label: 'Quiénes Somos',  href: '#quienes-somos' },
  { label: 'Galería',        href: '#instalaciones' },
  { label: 'Reseñas',        href: '#testimonios'   },
  { label: 'Contáctanos',    href: '#contacto'      },
];

export default function Navbar() {
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-[0_2px_20px_rgba(13,110,253,0.08)] py-0'
          : 'bg-white/95 backdrop-blur-md py-0'
      }`}
    >
      <div className="section-wrapper">
        <nav className="flex items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex-shrink-0 transition-opacity hover:opacity-80"
            aria-label="FOCI Inicio"
          >
            <FociLogo size="sm" transparent={true} className="h-[57px] md:h-[64px] lg:h-[81px] w-auto transition-all duration-300 block border border-slate-200 rounded-xl p-2" />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`nav-link text-[0.85rem] ${activeSection === href.slice(1) ? 'active' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── REDUCIDO: solo teléfono + 1 botón CTA ─────────────── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Teléfono — solo ícono en md, texto completo en xl */}
            <a
              href="tel:+56965545777"
              className="flex items-center gap-1.5 text-brand-navy font-medium text-sm
                         transition-colors hover:text-brand-blue"
              title="+56 9 6554 5777"
            >
              <Phone size={15} style={{ color: '#0d6efd' }} />
              <span className="hidden xl:inline">+56 9 6554 5777</span>
            </a>

            {/* Un solo CTA compacto */}
            <a
              href={waLink(WA_GENERIC_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-cta"
              className="inline-flex items-center gap-1.5 text-white font-heading font-semibold
                         text-xs py-2 px-4 rounded-full transition-all duration-300
                         hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#0d6efd' }}
            >
              Reservar Hora
              <ChevronRight size={13} />
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 rounded-lg text-brand-navy transition-colors
                       hover:bg-brand-light"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-slate-100 px-4 pt-4 pb-6 space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl font-body
                          font-medium text-sm transition-all duration-200 group
                          ${activeSection === href.slice(1)
                            ? 'bg-blue-50 text-[#0d6efd]'
                            : 'text-slate-700 hover:bg-blue-50 hover:text-[#0d6efd]'
                          }`}
            >
              {label}
              <ChevronRight size={14} className="text-slate-400 group-hover:text-[#0d6efd]" />
            </a>
          ))}
          <div className="pt-4 flex gap-3">
            <a href="tel:+56965545777"
               className="flex-1 flex items-center justify-center gap-1.5 border border-slate-200
                          text-brand-navy font-medium text-sm py-2.5 rounded-full">
              <Phone size={14} style={{ color: '#0d6efd' }} /> +56 9 6554 5777
            </a>
            <a href={waLink(WA_GENERIC_MESSAGE)}
               target="_blank"
               rel="noopener noreferrer"
               className="flex-1 flex items-center justify-center text-white text-sm
                          font-semibold py-2.5 rounded-full"
               style={{ backgroundColor: '#0d6efd' }}>
              Reservar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
