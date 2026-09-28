import { ArrowRight } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/foci.cl/';

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
        <div className="max-w-[540px] mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100/80 bg-white p-2 sm:p-3">
            <iframe
              src={`${INSTAGRAM_URL}embed/`}
              title="Perfil y publicaciones de @foci.cl en Instagram"
              width="540"
              height="620"
              className="block w-full h-[620px] border-0 rounded-2xl"
            />
          </div>
        </div>

        {/* ── CTA Button ─────────────────────────────────────────────────── */}
        <div className="text-center mt-12">
          <p className="font-body text-sm text-slate-600 mb-4">
            ¿No puedes ver las publicaciones? Visita nuestro perfil en Instagram.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0d6efd] text-white font-heading font-semibold
                       px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-cta
                       hover:scale-105 hover:bg-brand-navy hover:shadow-lg active:scale-95"
            aria-label="Ver @foci.cl en Instagram (abre una nueva pestaña)"
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
