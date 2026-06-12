import { Phone, Calendar, X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { waLink } from '../lib/whatsapp';

const SERVICIOS = [
  'Evaluación Auditiva Integral',
  'Otoscopía / Videotoscopía',
  'Lavado de Oídos',
  'Audiometría',
  'Otro',
];

/**
 * WIDGET DE RESERVA FLOTANTE — Panel inferior derecho del Figma
 * Aparece flotando en la esquina inferior derecha en desktop.
 * Se puede abrir/cerrar. En mobile se oculta (ya existe el botón del Navbar).
 */
export default function ReservaWidget() {
  const [open,    setOpen]    = useState(false);
  const [visible, setVisible] = useState(false);
  const [form,    setForm]    = useState({ nombre: '', telefono: '', servicio: '' });
  const [sent,    setSent]    = useState(false);

  // Mostrar el widget después de 3 segundos de scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) setVisible(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.servicio) return;
    const msg = `Hola FOCI 👋, soy ${form.nombre}. Quiero reservar una hora para *${form.servicio}*. Mi teléfono de contacto: ${form.telefono}.`;
    window.open(waLink(msg), '_blank', 'noopener,noreferrer');
    setSent(true);
    setTimeout(() => { setSent(false); setOpen(false); setForm({ nombre: '', telefono: '', servicio: '' }); }, 2500);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden lg:flex flex-col items-end gap-3">

      {/* ── Expanded card ──────────────────────────────────────────── */}
      <div
        className={`bg-white rounded-3xl shadow-[0_20px_60px_rgba(13,110,253,0.18)]
                    border border-blue-100 w-80 transition-all duration-400 origin-bottom-right
                    ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}`}
      >
        {/* Header */}
        <div
          className="rounded-t-3xl p-5 flex items-center justify-between"
          style={{ background: 'linear-gradient(135deg, #1a2f5e 0%, #0d6efd 100%)' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Calendar size={15} className="text-white" />
            </div>
            <div>
              <p className="font-heading font-bold text-white text-sm leading-none">Reserva tu hora</p>
              <p className="font-body text-blue-200 text-xs mt-0.5">Respuesta en menos de 2h</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center
                       hover:bg-white/25 transition-colors"
          >
            <X size={14} className="text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          {sent ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <p className="font-heading font-bold text-brand-navy text-sm">¡Abriendo WhatsApp!</p>
              <p className="font-body text-text-muted text-xs mt-1">Termina de enviarnos el mensaje 👍</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Phone CTA */}
              <a
                href="tel:+56965545777"
                className="flex items-center gap-2.5 w-full py-2.5 px-3.5 rounded-xl
                           font-body font-medium text-sm transition-all duration-200
                           hover:scale-[1.02]"
                style={{ backgroundColor: '#eff6ff', color: '#0d6efd' }}
              >
                <Phone size={15} />
                <span>+56 9 6554 5777</span>
                <span className="ml-auto text-xs opacity-60">Llamar ahora</span>
              </a>

              <div className="flex items-center gap-2 text-text-muted text-xs">
                <div className="flex-1 h-px bg-slate-100" />
                <span>o reserva en línea</span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>

              {/* Nombre */}
              <input
                name="nombre" type="text" placeholder="Tu nombre" required
                value={form.nombre} onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm
                           font-body outline-none focus:border-[#0d6efd] focus:ring-2
                           focus:ring-[#0d6efd]/15 transition-all placeholder:text-slate-400"
              />

              {/* Teléfono */}
              <input
                name="telefono" type="tel" placeholder="+56 9 ..." required
                value={form.telefono} onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm
                           font-body outline-none focus:border-[#0d6efd] focus:ring-2
                           focus:ring-[#0d6efd]/15 transition-all placeholder:text-slate-400"
              />

              {/* Servicio */}
              <select
                name="servicio" required value={form.servicio} onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm
                           font-body outline-none focus:border-[#0d6efd] focus:ring-2
                           focus:ring-[#0d6efd]/15 transition-all text-slate-500 cursor-pointer"
              >
                <option value="">Selecciona un servicio…</option>
                {SERVICIOS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 text-white
                           font-heading font-semibold py-3 rounded-xl text-sm
                           transition-all duration-300 hover:scale-[1.02] active:scale-95"
                style={{ backgroundColor: '#198754', boxShadow: '0 4px 16px rgba(25,135,84,0.35)' }}
              >
                <MessageCircle size={15} />
                Agendar por WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Toggle button ──────────────────────────────────────────── */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2.5 text-white font-heading font-semibold
                    text-sm px-5 py-3.5 rounded-full transition-all duration-300
                    hover:scale-105 active:scale-95 shadow-2xl
                    ${open ? 'bg-slate-700' : ''}`}
        style={!open ? {
          background: 'linear-gradient(135deg, #1a2f5e, #0d6efd)',
          boxShadow: '0 8px 32px rgba(13,110,253,0.45)',
        } : {}}
        aria-label="Abrir widget de reserva"
      >
        {open ? (
          <><X size={16} /> Cerrar</>
        ) : (
          <><Calendar size={16} /> Reservar hora</>
        )}
      </button>
    </div>
  );
}
