import { useParams, Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { ArrowLeft, Phone, ChevronRight, CheckCircle2, Calendar, MapPin, Clock } from 'lucide-react';
import { SERVICES } from '../data/services';
import { waLink, waServiceMessage } from '../lib/whatsapp';
import FociLogo from '../components/FociLogo';

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="font-heading font-bold text-2xl text-brand-navy mb-4">Servicio no encontrado</h1>
        <Link to="/" className="inline-flex items-center gap-2 text-brand-blue hover:underline font-body">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Head>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDesc} />
        <link rel="canonical" href={`https://foci.cl/${service.slug}`} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDesc} />
        <meta property="og:url" content={`https://foci.cl/${service.slug}`} />
        <meta property="og:image" content="https://foci.cl/og-image.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": service.faq.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://foci.cl/" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://foci.cl/#servicios" },
            { "@type": "ListItem", "position": 3, "name": service.shortTitle, "item": `https://foci.cl/${service.slug}` }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          "name": service.title,
          "description": service.detail,
          "url": `https://foci.cl/${service.slug}`,
          "image": `https://foci.cl${service.image}`,
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "areaServed": { "@type": "City", "name": "Temuco" },
          "provider": {
            "@type": ["MedicalClinic", "LocalBusiness"],
            "name": "FOCI — Fonoaudiología Clínica Integral",
            "url": "https://foci.cl",
            "telephone": "+56965545777",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "General Mackenna 583, Of. 504",
              "addressLocality": "Temuco",
              "addressRegion": "La Araucanía",
              "addressCountry": "CL"
            }
          }
        })}</script>
      </Head>

      <div className="min-h-screen bg-white flex flex-col">

        {/* ── Header ──────────────────────────────────────────────── */}
        <header className="bg-brand-navy text-white py-3 px-6 sticky top-0 z-50 shadow-md">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link to="/" aria-label="Volver al inicio de FOCI">
              <FociLogo size="sm" transparent className="h-10 w-auto" />
            </Link>
            <a
              href="tel:+56965545777"
              className="inline-flex items-center gap-2 font-heading font-semibold
                         px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#0d6efd' }}
            >
              <Phone size={14} /> +56 9 6554 5777
            </a>
          </div>
        </header>

        <main className="flex-1">

          {/* ── Breadcrumb ──────────────────────────────────────────── */}
          <nav aria-label="Breadcrumb" className="bg-brand-slate border-b border-slate-200 py-3 px-6">
            <div className="max-w-5xl mx-auto flex items-center gap-2 font-body text-xs text-text-muted">
              <Link to="/" className="hover:text-brand-blue transition-colors">Inicio</Link>
              <ChevronRight size={12} />
              <Link to="/#servicios" className="hover:text-brand-blue transition-colors">Servicios</Link>
              <ChevronRight size={12} />
              <span className="text-brand-navy font-medium">{service.shortTitle}</span>
            </div>
          </nav>

          {/* ── Hero ────────────────────────────────────────────────── */}
          <section className="relative bg-brand-navy text-white py-16 px-6 overflow-hidden">
            <div className="absolute inset-0">
              <img src={service.image} alt="" className="w-full h-full object-cover" aria-hidden="true" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/50" />

            <div className="relative max-w-5xl mx-auto">
              <Link to="/" className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-6 transition-colors">
                <ArrowLeft size={15} /> Volver al inicio
              </Link>

              <span className="inline-block text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4 border"
                    style={{ color: '#fff', backgroundColor: service.color + '55', borderColor: service.color + '88' }}>
                {service.tag}
              </span>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 max-w-3xl">
                {service.title}
              </h1>

              <p className="font-body text-blue-100 text-lg max-w-2xl leading-relaxed mb-8">
                {service.detail}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={waLink(waServiceMessage(service.shortTitle))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-heading font-semibold
                             px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#0d6efd', boxShadow: '0 8px 32px rgba(13,110,253,0.50)' }}
                >
                  <Calendar size={18} /> Agendar Hora
                </a>
                <a
                  href={waLink(waServiceMessage(service.shortTitle))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading font-semibold px-8 py-4
                             rounded-full text-base transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#198754' }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* ── Content grid ────────────────────────────────────────── */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main column */}
              <div className="lg:col-span-2 space-y-12">

                {/* Highlights */}
                <div>
                  <h2 className="font-heading font-bold text-brand-navy text-2xl mb-6">
                    ¿Qué incluye este servicio?
                  </h2>
                  <ul className="space-y-3">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5"
                                      style={{ color: service.color }} />
                        <span className="font-body text-text-body">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="font-heading font-bold text-brand-navy text-2xl mb-6">
                    Preguntas frecuentes
                  </h2>
                  <div className="space-y-2">
                    {service.faq.map((item, i) => (
                      <details key={i} className="group bg-brand-slate rounded-2xl border border-slate-100 overflow-hidden">
                        <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none select-none
                                           font-heading font-semibold text-brand-navy text-sm hover:text-brand-blue transition-colors">
                          {item.q}
                          <ChevronRight size={16} className="flex-shrink-0 ml-4 text-slate-400 transition-transform duration-200 group-open:rotate-90" />
                        </summary>
                        <div className="px-6 pb-5 pt-1">
                          <p className="font-body text-text-body text-sm leading-relaxed">{item.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Other services */}
                <div>
                  <h2 className="font-heading font-bold text-brand-navy text-xl mb-5">
                    Otros servicios de FOCI
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.filter(s => s.slug !== service.slug).map(s => {
                      const SIcon = s.icon;
                      return (
                        <Link key={s.slug} to={`/${s.slug}`}
                              className="flex items-center gap-3 p-4 bg-brand-slate rounded-xl border border-slate-100
                                         hover:border-brand-blue/30 hover:shadow-card transition-all duration-200 group">
                          <span className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: s.bg }}>
                            <SIcon size={16} style={{ color: s.color }} />
                          </span>
                          <span className="font-heading font-semibold text-brand-navy text-sm group-hover:text-brand-blue transition-colors">
                            {s.shortTitle}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-5">

                {/* CTA card */}
                <div className="bg-brand-navy text-white rounded-3xl p-7 text-center sticky top-24">
                  <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                       style={{ backgroundColor: service.color }}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{service.shortTitle}</h3>
                  <p className="font-body text-blue-200 text-sm mb-6 leading-relaxed">{service.desc}</p>

                  <a href={waLink(waServiceMessage(service.shortTitle))}
                     target="_blank" rel="noopener noreferrer"
                     className="block text-center text-white font-heading font-bold py-3.5 rounded-xl text-sm
                                transition-all duration-300 hover:scale-105 mb-3"
                     style={{ backgroundColor: '#0d6efd' }}>
                    Reservar Hora
                  </a>
                  <a href={waLink(waServiceMessage(service.shortTitle))}
                     target="_blank" rel="noopener noreferrer"
                     className="block text-center text-white font-heading font-semibold py-3.5 rounded-xl text-sm
                                transition-all duration-300 hover:scale-105 mb-3"
                     style={{ backgroundColor: '#198754' }}>
                    Agendar por WhatsApp
                  </a>
                  <a href="tel:+56965545777"
                     className="block text-center text-brand-navy font-heading font-semibold py-3.5 rounded-xl text-sm
                                bg-white transition-all duration-300 hover:scale-105">
                    <Phone size={14} className="inline mr-1" />
                    +56 9 6554 5777
                  </a>

                  <div className="mt-5 pt-5 border-t border-white/10 text-left space-y-2">
                    <div className="flex items-start gap-2 text-xs text-blue-200 font-body">
                      <Clock size={13} className="flex-shrink-0 mt-0.5" />
                      <span>Lun–Vie 09:00–19:00 · Sáb 09:00–15:00</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-blue-200 font-body">
                      <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                      <span>Gral. Mackenna 583, Of. 504, Temuco</span>
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </section>
        </main>

        {/* ── Footer minimal ───────────────────────────────────────── */}
        <footer className="bg-brand-navy text-white py-6 px-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-blue-300 text-xs">
              © {new Date().getFullYear()} FOCI — Fonoaudiología Clínica Integral · Temuco, Chile
            </p>
            <Link to="/" className="font-body text-blue-300 text-xs hover:text-white transition-colors">
              Volver al sitio principal
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
