import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { ArrowLeft, Phone, ChevronRight, Calendar, Clock, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import FociLogo from '../components/FociLogo';

export default function BlogPage() {
  const articles = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Head>
        <title>Blog de Salud Auditiva y Lenguaje | FOCI Fonoaudiología Temuco</title>
        <meta name="description" content="Artículos sobre audición, lenguaje infantil, lavado de oídos, audiometría y fonoaudiología, escritos por las profesionales de FOCI en Temuco." />
        <link rel="canonical" href="https://foci.cl/blog" />
        <meta property="og:title" content="Blog de Salud Auditiva y Lenguaje | FOCI Fonoaudiología" />
        <meta property="og:description" content="Guías y consejos sobre audición, lenguaje y fonoaudiología clínica por el equipo de FOCI en Temuco." />
        <meta property="og:url" content="https://foci.cl/blog" />
        <meta property="og:image" content="https://foci.cl/logo-foci.png" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog de FOCI Fonoaudiología",
          "url": "https://foci.cl/blog",
          "description": "Artículos sobre salud auditiva, lenguaje y fonoaudiología clínica en Temuco.",
          "publisher": { "@type": "Organization", "name": "FOCI — Fonoaudiología Clínica Integral" },
          "blogPost": articles.map(a => ({
            "@type": "BlogPosting",
            "headline": a.title,
            "url": `https://foci.cl/blog/${a.slug}`,
            "datePublished": a.date,
            "author": { "@type": "Person", "name": a.author }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://foci.cl/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://foci.cl/blog" }
          ]
        })}</script>
      </Head>

      <div className="min-h-screen bg-white flex flex-col">

        {/* ── Header ──────────────────────────────────────────────── */}
        <header className="bg-brand-navy text-white py-3 px-6 sticky top-0 z-50 shadow-md">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link to="/" aria-label="Volver al inicio de FOCI">
              <FociLogo size="sm" transparent className="h-10 w-auto" />
            </Link>
            <a href="tel:+56965545777"
               className="inline-flex items-center gap-2 font-heading font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:scale-105"
               style={{ backgroundColor: '#0d6efd' }}>
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
              <span className="text-brand-navy font-medium">Blog</span>
            </div>
          </nav>

          {/* ── Hero ────────────────────────────────────────────────── */}
          <section className="bg-brand-navy text-white py-14 px-6">
            <div className="max-w-5xl mx-auto">
              <Link to="/" className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-5 transition-colors">
                <ArrowLeft size={15} /> Volver al inicio
              </Link>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight mb-3">
                Blog de Salud Auditiva y Lenguaje
              </h1>
              <p className="font-body text-blue-100 text-lg max-w-2xl">
                Guías y consejos escritos por nuestras fonoaudiólogas para cuidar tu audición y tu comunicación.
              </p>
            </div>
          </section>

          {/* ── Grid de artículos ───────────────────────────────────── */}
          <section className="py-14 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map(a => (
                <Link key={a.slug} to={`/blog/${a.slug}`}
                      className="flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-card hover:border-brand-blue/30 transition-all duration-200 group">
                  <div className="relative h-44 overflow-hidden">
                    <img src={a.image} alt={a.title}
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-3 left-3 text-xs font-heading font-semibold px-3 py-1 rounded-full bg-white/95 text-brand-blue">
                      {a.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h2 className="font-heading font-bold text-brand-navy text-base leading-snug mb-2 group-hover:text-brand-blue transition-colors">
                      {a.title}
                    </h2>
                    <p className="font-body text-text-muted text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-text-muted font-body pt-3 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1.5"><Calendar size={12} /> {a.dateLabel}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {a.readingMinutes} min</span>
                    </div>
                  </div>
                </Link>
              ))}
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
