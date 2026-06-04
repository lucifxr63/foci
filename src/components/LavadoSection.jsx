import { CheckCircle2, ArrowRight, Droplets, ShieldCheck, Clock3 } from 'lucide-react';

const STEPS = [
  { num: '01', title: 'Evaluación Inicial',   desc: 'Otoscopía previa para confirmar indicación del procedimiento.'   },
  { num: '02', title: 'Irrigación Suave',      desc: 'Lavado con agua tibia a presión controlada y segura.'             },
  { num: '03', title: 'Verificación Final',    desc: 'Revisión post-procedimiento para confirmar limpieza completa.'    },
];

const BULLETS = [
  'Eliminación de tapones de cerumen compactado',
  'Procedimiento indoloro y de corta duración',
  'Irrigación con agua estéril a temperatura controlada',
  'Indicado para adultos, adultos mayores y niños',
  'Mejora inmediata de la audición tras el procedimiento',
  'Seguimiento con otoscopía de control incluida',
];

const BADGES = [
  { icon: Droplets,    label: 'Irrigación Suave'        },
  { icon: ShieldCheck, label: 'Procedimiento Seguro'     },
  { icon: Clock3,      label: 'Solo 20 min. de duración' },
];

export default function LavadoSection() {
  return (
    <section id="lavado" className="py-24 bg-white overflow-hidden">
      <div className="section-wrapper">

        {/* ── Main Two-Column Block (Inverted) ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Content — LEFT */}
          <div>
            <span className="section-tag">Procedimiento</span>
            <h2 className="section-title mb-4">
              Lavado de{' '}
              <span className="text-brand-blue">Oídos</span>
            </h2>
            <div className="divider-brand mb-6" />

            <p className="text-text-body leading-relaxed mb-6">
              El lavado de oídos o <strong className="text-brand-navy font-semibold">irrigación auricular</strong> es
              un procedimiento clínico seguro para eliminar el exceso de cerumen acumulado
              que puede causar hipoacusia, tinnitus o sensación de presión.
              Lo realizamos con equipos especializados y técnica suave para máxima seguridad.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {BADGES.map(({ icon: Icon, label }, i) => (
                <div key={i} className="badge">
                  <Icon size={13} />
                  {label}
                </div>
              ))}
            </div>

            {/* Bullets */}
            <ul className="space-y-3.5 mb-10">
              {BULLETS.map((item, i) => (
                <li key={i} className="feature-item">
                  <CheckCircle2 className="feature-icon" />
                  <span className="text-text-body text-[0.95rem]">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="btn-secondary"
              id="lavado-cta"
            >
              Consultar Disponibilidad
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Image — RIGHT */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-sky/10 to-brand-blue/10
                            rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative rounded-3xl overflow-hidden shadow-card-lg">
              <img
                src="/service-ear-wash.png"
                alt="Lavado de oídos profesional en FOCI"
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />

              {/* Bottom badge */}
              <div className="absolute bottom-6 right-6 glass rounded-2xl px-5 py-4 shadow-card">
                <p className="font-heading font-bold text-brand-navy text-base">Sin dolor</p>
                <p className="font-body text-text-body text-xs mt-0.5">Procedimiento indoloro</p>
              </div>
            </div>

            {/* Floating success rate */}
            <div className="absolute -top-5 -left-5 bg-white rounded-2xl px-5 py-4
                            shadow-card-lg border border-slate-100 hidden lg:block">
              <p className="font-heading font-extrabold text-3xl text-brand-navy leading-none">+2000</p>
              <p className="font-body text-text-muted text-xs mt-1">Procedimientos realizados</p>
            </div>
          </div>
        </div>

        {/* ── Steps Row ────────────────────────────────────────────────────── */}
        <div className="bg-brand-light rounded-3xl p-8 lg:p-12">
          <h3 className="font-heading font-bold text-brand-navy text-xl text-center mb-10">
            ¿Cómo es el procedimiento?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map(({ num, title, desc }, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white font-heading font-extrabold
                                text-xl flex items-center justify-center mb-4 shadow-cta/30
                                transition-transform duration-300 group-hover:scale-110">
                  {num}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute mt-7 ml-64 w-20 h-px bg-brand-blue/20" />
                )}
                <h4 className="font-heading font-bold text-brand-navy mb-2">{title}</h4>
                <p className="text-text-body text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
