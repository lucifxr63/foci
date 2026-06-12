import { useParams, Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { ArrowLeft, Phone, ChevronRight, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { waLink, waServiceMessage } from '../lib/whatsapp';
import FociLogo from '../components/FociLogo';

function Block({ block }) {
  if (block.type === 'h2') {
    return <h2 className="font-heading font-bold text-brand-navy text-2xl mt-10 mb-4">{block.text}</h2>;
  }
  if (block.type === 'ul') {
    return (
      <ul className="space-y-2 my-4 pl-1">
        {block.items.map((it, i) => (
          <li key={i} className="flex items-start gap-3 font-body text-text-body leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2.5" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className="font-body text-text-body leading-relaxed my-4">{block.text}</p>;
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="font-heading font-bold text-2xl text-brand-navy mb-4">Artículo no encontrado</h1>
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-blue hover:underline font-body">
          <ArrowLeft size={16} /> Volver al blog
        </Link>
      </div>
    );
  }

  const url = `https://foci.cl/blog/${article.slug}`;
  const img = `https://foci.cl${article.image}`;
  const related = ARTICLES.filter(a => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <Head>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDesc} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDesc} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={img} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.metaDesc,
          "image": img,
          "datePublished": article.date,
          "dateModified": article.date,
          "author": { "@type": "Person", "name": article.author, "jobTitle": article.authorRole },
          "publisher": {
            "@type": "Organization",
            "name": "FOCI — Fonoaudiología Clínica Integral",
            "logo": { "@type": "ImageObject", "url": "https://foci.cl/logo-foci.png" }
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "es-CL"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://foci.cl/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://foci.cl/blog" },
            { "@type": "ListItem", "position": 3, "name": article.title, "item": url }
          ]
        })}</script>
        {article.faq && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": article.faq.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a }
            }))
          })}</script>
        )}
      </Head>

      <div className="min-h-screen bg-white flex flex-col">

        {/* ── Header ──────────────────────────────────────────────── */}
        <header className="bg-brand-navy text-white py-3 px-6 sticky top-0 z-50 shadow-md">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
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
            <div className="max-w-3xl mx-auto flex items-center gap-2 font-body text-xs text-text-muted">
              <Link to="/" className="hover:text-brand-blue transition-colors">Inicio</Link>
              <ChevronRight size={12} />
              <Link to="/blog" className="hover:text-brand-blue transition-colors">Blog</Link>
              <ChevronRight size={12} />
              <span className="text-brand-navy font-medium truncate max-w-[180px] sm:max-w-none">{article.category}</span>
            </div>
          </nav>

          <article className="max-w-3xl mx-auto px-6 py-12">
            <span className="inline-block text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4 bg-blue-50 text-brand-blue">
              {article.category}
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy leading-tight mb-5">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted font-body mb-8 pb-8 border-b border-slate-100">
              <span className="inline-flex items-center gap-1.5"><User size={13} /> {article.author}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> {article.dateLabel}</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {article.readingMinutes} min de lectura</span>
            </div>

            <img src={article.image} alt={article.title}
                 className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8" />

            <div className="article-body">
              {article.body.map((block, i) => <Block key={i} block={block} />)}
            </div>

            {/* ── FAQ visible ─────────────────────────────────────── */}
            {article.faq && (
              <div className="mt-12">
                <h2 className="font-heading font-bold text-brand-navy text-2xl mb-6">Preguntas frecuentes</h2>
                <div className="space-y-2">
                  {article.faq.map((item, i) => (
                    <details key={i} className="group bg-brand-slate rounded-2xl border border-slate-100 overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none select-none font-heading font-semibold text-brand-navy text-sm hover:text-brand-blue transition-colors">
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
            )}

            {/* ── CTA al servicio relacionado ─────────────────────── */}
            <div className="mt-12 bg-brand-navy text-white rounded-3xl p-8 text-center">
              <p className="font-body text-blue-200 text-sm mb-1">¿Te identificas con esto?</p>
              <h3 className="font-heading font-bold text-xl mb-5">Agenda tu hora en FOCI Fonoaudiología</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to={`/${article.relatedSlug}`}
                      className="inline-flex items-center gap-2 text-white font-heading font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#0d6efd' }}>
                  Ver {article.relatedLabel} <ArrowRight size={15} />
                </Link>
                <a href={waLink(waServiceMessage(article.relatedLabel))} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 font-heading font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-105"
                   style={{ backgroundColor: '#198754' }}>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* ── Otros artículos ─────────────────────────────────── */}
            {related.length > 0 && (
              <div className="mt-14">
                <h2 className="font-heading font-bold text-brand-navy text-xl mb-5">Sigue leyendo</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map(a => (
                    <Link key={a.slug} to={`/blog/${a.slug}`}
                          className="block p-5 bg-brand-slate rounded-2xl border border-slate-100 hover:border-brand-blue/30 hover:shadow-card transition-all duration-200 group">
                      <span className="text-xs font-heading font-semibold text-brand-blue">{a.category}</span>
                      <h3 className="font-heading font-semibold text-brand-navy text-sm mt-1 group-hover:text-brand-blue transition-colors">{a.title}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </main>

        {/* ── Footer minimal ───────────────────────────────────────── */}
        <footer className="bg-brand-navy text-white py-6 px-6">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-blue-300 text-xs">
              © {new Date().getFullYear()} FOCI — Fonoaudiología Clínica Integral · Temuco, Chile
            </p>
            <div className="flex items-center gap-5">
              <Link to="/blog" className="font-body text-blue-300 text-xs hover:text-white transition-colors">Blog</Link>
              <Link to="/" className="font-body text-blue-300 text-xs hover:text-white transition-colors">Volver al sitio</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
