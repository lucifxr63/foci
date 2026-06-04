import { Building2, Stethoscope, Heart, Award, Star, Shield } from 'lucide-react';

/**
 * REDES DE DERIVACIÓN — Clínicas y socios con quienes trabajamos
 * Panel derecho superior del Figma (papelito rosado)
 */

const SOCIOS = [
  {
    icon: Building2,
    name: 'Ana de Chile',
    tipo: 'Clínica Auditiva',
    color: '#0d6efd',
    bg:   '#eff6ff',
  },
  {
    icon: Heart,
    name: 'Spa Auditiva',
    tipo: 'Centro de Bienestar',
    color: '#0dcaf0',
    bg:   '#ecfeff',
  },
  {
    icon: Stethoscope,
    name: 'Clínica de Oídos\nSana Plus',
    tipo: 'Clínica Especializada',
    color: '#198754',
    bg:   '#f0fdf4',
  },
  {
    icon: Shield,
    name: 'Otorrinolaringología\nChile',
    tipo: 'Sociedad Médica',
    color: '#1a2f5e',
    bg:   '#f1f5f9',
  },
  {
    icon: Star,
    name: 'Pro Salud\ny Audición',
    tipo: 'Centro de Salud',
    color: '#0d6efd',
    bg:   '#eff6ff',
  },
  {
    icon: Award,
    name: 'Reconocimiento\nAuditivo',
    tipo: 'Certificadora',
    color: '#dc3545',
    bg:   '#fff1f2',
  },
  {
    icon: Building2,
    name: 'Clínica Santa\nMaría',
    tipo: 'Red Hospitalaria',
    color: '#6c757d',
    bg:   '#f8f9fa',
  },
  {
    icon: Heart,
    name: 'Médicos por\nChile',
    tipo: 'Red de Salud',
    color: '#198754',
    bg:   '#f0fdf4',
  },
];

export default function RedesSection() {
  return (
    <section id="redes" className="py-24 bg-white overflow-hidden">
      <div className="section-wrapper">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="section-tag">Colaboraciones</span>
          <h2 className="section-title mb-4">
            Con quiénes{' '}
            <span style={{ color: '#0d6efd' }}>trabajamos</span>
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p className="section-subtitle mx-auto text-center">
            Trabajamos en red con clínicas, especialistas y centros de salud
            para garantizar la continuidad y calidad de la atención de nuestros pacientes.
          </p>
        </div>

        {/* ── Logo Grid ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-14">
          {SOCIOS.map(({ icon: Icon, name, tipo, color, bg }, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-6 rounded-2xl
                         border border-slate-100 transition-all duration-300
                         hover:shadow-card hover:-translate-y-1 cursor-default"
              style={{ backgroundColor: i % 2 === 0 ? '#fafbff' : 'white' }}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4
                           transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: bg }}
              >
                <Icon size={24} style={{ color }} />
              </div>

              {/* Name */}
              <p className="font-heading font-bold text-brand-navy text-sm leading-snug mb-1 whitespace-pre-line">
                {name}
              </p>

              {/* Tipo */}
              <span
                className="text-xs font-body font-medium px-2.5 py-1 rounded-full mt-1"
                style={{ color, backgroundColor: bg }}
              >
                {tipo}
              </span>
            </div>
          ))}
        </div>

        {/* ── Bottom trust strip ──────────────────────────────────────── */}
        <div
          className="rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row items-center
                     justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%)' }}
        >
          <div>
            <h3 className="font-heading font-bold text-brand-navy text-xl mb-2">
              ¿Tu clínica quiere trabajar con nosotros?
            </h3>
            <p className="font-body text-text-body text-sm">
              Somos una red abierta de derivación. Contáctanos para
              establecer un convenio de colaboración.
            </p>
          </div>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="flex-shrink-0 inline-flex items-center gap-2 text-white font-heading
                       font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-300
                       hover:scale-105 active:scale-95"
            style={{ backgroundColor: '#0d6efd', boxShadow: '0 8px 20px rgba(13,110,253,0.35)' }}
          >
            Contactar FOCI
          </a>
        </div>

      </div>
    </section>
  );
}
