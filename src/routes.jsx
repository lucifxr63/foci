import HomePage    from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import { SERVICES } from './data/services';

// Data-router routes consumidas por vite-react-ssg para el pre-render (SSG).
// Cada ruta se hornea a HTML estático en el build.
export const routes = [
  {
    path: '/',
    element: <HomePage />,
    entry: 'src/pages/HomePage.jsx',
  },
  {
    path: '/:slug',
    element: <ServicePage />,
    entry: 'src/pages/ServicePage.jsx',
    // Enumera qué slugs se pre-renderizan (uno por servicio).
    getStaticPaths: () => SERVICES.map((s) => s.slug),
  },
];
