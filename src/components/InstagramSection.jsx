import { ArrowRight } from 'lucide-react';

const InstagramIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-16 md:py-24 bg-brand-slate overflow-hidden">
      <div className="section-wrapper">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="section-tag">Redes Sociales</span>
          <h2 className="section-title mb-4">
            Síguenos en{' '}
            <span className="text-[#0d6efd]">Instagram</span>
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p className="section-subtitle mx-auto text-center">
            Mantente al tanto de nuestros consejos sobre salud auditiva, novedades clínicas y
            contenido útil directamente en nuestra cuenta de Instagram.
          </p>
        </div>

        {/* ── Feed Content ────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group rounded-3xl overflow-hidden shadow-card border border-slate-100/80 bg-white p-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[3/2] lg:aspect-[3/2]">
              <img
                src="/instagram-grid.png"
                alt="Publicaciones de Instagram de FOCI Fonoaudiología"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Glassmorphic Overlay on Hover */}
              <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg scale-75 group-hover:scale-100 transition-transform duration-500 delay-75">
                  <InstagramIcon size={28} className="text-[#0d6efd]" />
                </div>
                <p className="font-heading font-bold text-white text-lg mb-1">Visita nuestro perfil</p>
                <p className="font-body text-blue-100 text-xs">@foci.cl en Instagram</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA Button ─────────────────────────────────────────────────── */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/foci.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0d6efd] text-white font-heading font-semibold
                       px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-cta
                       hover:scale-105 hover:bg-brand-navy hover:shadow-lg active:scale-95"
          >
            <InstagramIcon size={16} />
            @foci.cl
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
