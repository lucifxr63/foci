import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import { waLink, waServiceMessage, WA_GENERIC_MESSAGE } from '../lib/whatsapp';

const SERVICIOS_OPTIONS = [
  'Consulta General',
  'Lavado de Oídos',
  'Audiometría',
  'Terapia lenguaje / habla adulto',
  'Terapia lenguaje / habla infantojuvenil',
  'Evaluación ADOS-2',
  'Rehabilitación vestibular',
  'Trastorno de la voz',
];

const HORARIOS_OPTIONS = [
  'Lunes (09:00 – 19:00)',
  'Martes (09:00 – 18:00)',
  'Miércoles (09:00 – 19:00)',
  'Jueves (09:00 – 18:00)',
  'Viernes (09:00 – 19:00)',
  'Sábado (09:00 – 15:00)',
];

const CONTACT_INFO = [
  { icon: Phone,  label: 'Teléfono',   value: '+56 9 6554 5777',         href: 'tel:+56965545777'           },
  { icon: Mail,   label: 'Email',      value: 'contacto@foci.cl',         href: 'mailto:contacto@foci.cl'    },
  { icon: MapPin, label: 'Dirección',  value: 'General Mackenna 583, Of. 504, Temuco', href: 'https://maps.google.com/?q=General+Mackenna+583+Temuco+Chile' },
  { icon: Clock,  label: 'Horarios',   value: 'Lun-Vie: 09:00-19:00/18:00 · Sáb: 09:00-15:00', href: null },
];

const INIT = { nombre: '', telefono: '', servicio: '', horario: '', mensaje: '' };

export default function ContactoSection() {
  const [form,   setForm]   = useState(INIT);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.nombre.trim() || form.nombre.trim().length < 2)
      e.nombre = 'El nombre debe tener al menos 2 caracteres.';
    if (!form.telefono.trim() || !/^[\+]?[\d\s\-\(\)]{7,20}$/.test(form.telefono))
      e.telefono = 'Ingresa un teléfono válido.';
    if (!form.servicio)
      e.servicio = 'Selecciona el servicio que necesitas.';
    if (!form.horario)
      e.horario = 'Selecciona un horario preferido.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }

    const msg = `Hola FOCI 👋, soy ${form.nombre}. Quiero agendar una hora para *${form.servicio}*.`
      + ` Horario preferido: ${form.horario}.`
      + (form.mensaje ? ` ${form.mensaje}` : '')
      + ` Mi teléfono de contacto: ${form.telefono}.`;
    window.open(waLink(msg), '_blank', 'noopener,noreferrer');

    setStatus('success');
    setForm(INIT);
  };

  const fieldBase = `w-full px-4 py-3.5 rounded-xl border font-body text-[0.95rem] text-text-dark
                     bg-white placeholder:text-slate-400 outline-none transition-all duration-200`;
  const fieldCls = (n) =>
    `${fieldBase} ${errors[n]
      ? 'border-red-400 ring-2 ring-red-100'
      : 'border-slate-200 focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15'}`;

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="section-wrapper">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <span className="section-tag">Reservas</span>
          <h2 className="section-title mb-4">
            Contáctate con{' '}
            <span style={{ color: '#0d6efd' }}>Nosotros</span>
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p className="section-subtitle mx-auto text-center">
            Agenda tu hora directamente o escríbenos. Respondemos dentro
            de las próximas 2 horas hábiles.
          </p>

          {/* Phone highlight */}
          <a
            href="tel:+56965545777"
            className="inline-flex items-center gap-2 mt-5 font-heading font-bold text-lg
                       transition-colors duration-200"
            style={{ color: '#0d6efd' }}
          >
            <Phone size={20} />
            +56 9 6554 5777
          </a>
        </div>

        {/* ── Grid ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Form — 3/5 */}
          <div className="lg:col-span-3">
            <div className="card p-8 lg:p-10">
              <h3 className="font-heading font-bold text-brand-navy text-xl mb-7">
                Agendar una Hora
              </h3>

              {status === 'success' && (
                <div className="flex items-start gap-4 bg-green-50 border border-green-200
                                rounded-2xl p-5 mb-6">
                  <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading font-bold text-green-800 mb-1">¡Abriendo WhatsApp!</p>
                    <p className="font-body text-green-700 text-sm">
                      Termina de enviarnos el mensaje y coordinamos tu hora a la brevedad.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block font-body font-medium text-slate-700 text-sm mb-1.5">
                    Nombre completo <span style={{ color: '#0d6efd' }}>*</span>
                  </label>
                  <input
                    id="nombre" name="nombre" type="text"
                    placeholder="Ej: María González"
                    value={form.nombre} onChange={handleChange}
                    className={fieldCls('nombre')} autoComplete="name"
                  />
                  {errors.nombre && (
                    <p className="mt-1.5 text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.nombre}
                    </p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block font-body font-medium text-slate-700 text-sm mb-1.5">
                    Teléfono <span style={{ color: '#0d6efd' }}>*</span>
                  </label>
                  <input
                    id="telefono" name="telefono" type="tel"
                    placeholder="+56 9 1234 5678"
                    value={form.telefono} onChange={handleChange}
                    className={fieldCls('telefono')} autoComplete="tel"
                  />
                  {errors.telefono && (
                    <p className="mt-1.5 text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.telefono}
                    </p>
                  )}
                </div>

                {/* Servicio (select) */}
                <div>
                  <label htmlFor="servicio" className="block font-body font-medium text-slate-700 text-sm mb-1.5">
                    Servicio requerido <span style={{ color: '#0d6efd' }}>*</span>
                  </label>
                  <select
                    id="servicio" name="servicio"
                    value={form.servicio} onChange={handleChange}
                    className={`${fieldCls('servicio')} cursor-pointer`}
                  >
                    <option value="">Selecciona un servicio…</option>
                    {SERVICIOS_OPTIONS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.servicio && (
                    <p className="mt-1.5 text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.servicio}
                    </p>
                  )}
                </div>

                {/* Horario preferido (select) */}
                <div>
                  <label htmlFor="horario" className="block font-body font-medium text-slate-700 text-sm mb-1.5">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} />
                      Horario preferido <span style={{ color: '#0d6efd' }}>*</span>
                    </span>
                  </label>
                  <select
                    id="horario" name="horario"
                    value={form.horario} onChange={handleChange}
                    className={`${fieldCls('horario')} cursor-pointer`}
                  >
                    <option value="">Selecciona un horario…</option>
                    {HORARIOS_OPTIONS.map(h => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                  {errors.horario && (
                    <p className="mt-1.5 text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.horario}
                    </p>
                  )}
                </div>

                {/* Mensaje (opcional) */}
                <div>
                  <label htmlFor="mensaje" className="block font-body font-medium text-slate-700 text-sm mb-1.5">
                    Comentario adicional{' '}
                    <span className="text-text-muted font-normal">(opcional)</span>
                  </label>
                  <textarea
                    id="mensaje" name="mensaje" rows={3}
                    placeholder="¿Algo que debamos saber? Síntomas, consultas previas, etc."
                    value={form.mensaje} onChange={handleChange}
                    className={`${fieldCls('mensaje')} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="form-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2
                             text-white font-heading font-semibold py-4 rounded-full text-base
                             transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  style={{ backgroundColor: '#198754', boxShadow: '0 8px 24px rgba(25,135,84,0.35)' }}
                >
                  <Send size={18} />Agendar por WhatsApp
                </button>

                <p className="text-text-muted text-xs text-center font-body">
                  Al enviar, aceptas nuestra{' '}
                  <a href="#" className="hover:underline" style={{ color: '#0d6efd' }}>
                    política de privacidad
                  </a>.
                </p>
              </form>
            </div>
          </div>

          {/* Info + Map — 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Horario de atención card */}
            <div className="card p-7 border-2 border-[#0d6efd]/10 shadow-card">
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-5 flex items-center gap-2">
                <Clock className="text-brand-blue" size={20} />
                Horario de atención
              </h3>
              
              <div className="space-y-3 font-body text-sm mb-6">
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Lunes</span>
                  <span className="text-slate-600 text-xs">09:00am – 07:00pm</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Martes</span>
                  <span className="text-slate-600 text-xs">09:00am – 06:00pm</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Miércoles</span>
                  <span className="text-slate-600 text-xs">09:00am – 07:00pm</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Jueves</span>
                  <span className="text-slate-600 text-xs">09:00am – 06:00pm</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Viernes</span>
                  <span className="text-slate-600 text-xs">09:00am – 07:00pm</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Sábado</span>
                  <span className="text-slate-600 text-xs">09:00am – 03:00pm</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100 text-slate-400">
                  <span>Domingo</span>
                  <span className="text-xs">Cerrado</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mb-4">
                <p className="text-xs text-text-muted mb-1 font-body">Llama ahora</p>
                <a
                  href="tel:+56965545777"
                  className="font-heading font-extrabold text-[#0d6efd] text-lg hover:underline"
                >
                  +56 9 6554 5777
                </a>
              </div>

              <a
                href={waLink(form.servicio ? waServiceMessage(form.servicio) : WA_GENERIC_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#198754] text-white
                           font-heading font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-300
                           hover:bg-[#157347] hover:scale-[1.02] active:scale-95 mb-4 shadow-sm"
              >
                Agendar por WhatsApp
              </a>

              <div className="flex items-start gap-2.5 text-xs text-text-body font-body leading-relaxed pt-2 border-t border-slate-100">
                <MapPin className="text-[#0d6efd] flex-shrink-0 mt-0.5" size={14} />
                <span>
                  General Mackenna 583, Of. 504<br />
                  Temuco, Chile
                </span>
              </div>
            </div>

            <div className="card overflow-hidden flex-1 min-h-64">
              <div className="relative w-full min-h-64 h-full">
                <iframe
                  title="Ubicación FOCI"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.029807579174!2d-72.5908757!3d-38.7399896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3ea09a15cd3%3A0x7d87bc4faeb8e860!2sGral.+Mackenna+583%2C+Temuco%2C+Araucan%C3%ADa!5e0!3m2!1ses!2scl!4v1717431200000!5m2!1ses!2scl"
                  width="100%" height="100%"
                  style={{ border: 0, minHeight: '280px' }}
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
                <a href="https://maps.google.com/?q=General+Mackenna+583+Temuco+Chile"
                   target="_blank" rel="noopener noreferrer"
                   className="absolute bottom-4 right-4 inline-flex items-center gap-1.5
                              text-white text-xs font-semibold px-4 py-2.5 rounded-full
                              transition-all duration-300 hover:scale-105"
                   style={{ backgroundColor: '#0d6efd', boxShadow: '0 4px 12px rgba(13,110,253,0.4)' }}>
                  <MapPin size={12} />
                  Ver en Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
