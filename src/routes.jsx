import HomePage    from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import BlogPage    from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import { SERVICES } from './data/services';
import { ARTICLES } from './data/articles';

// Data-router routes consumidas por vite-react-ssg para el pre-render (SSG).
// Cada ruta se hornea a HTML estático en el build.
export const routes = [
  {
    path: '/',
    element: <HomePage />,
    entry: 'src/pages/HomePage.jsx',
  },
  {
    path: '/blog',
    element: <BlogPage />,
    entry: 'src/pages/BlogPage.jsx',
  },
  {
    path: '/blog/:slug',
    element: <ArticlePage />,
    entry: 'src/pages/ArticlePage.jsx',
    // Un HTML por artículo (ruta completa relativa a la raíz).
    getStaticPaths: () => ARTICLES.map((a) => `blog/${a.slug}`),
  },
  {
    path: '/:slug',
    element: <ServicePage />,
    entry: 'src/pages/ServicePage.jsx',
    // Enumera qué slugs se pre-renderizan (uno por servicio).
    getStaticPaths: () => SERVICES.map((s) => s.slug),
  },
];
