import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './index.css'

// Entry de vite-react-ssg: en el build pre-renderiza cada ruta a HTML estático;
// en el cliente hidrata automáticamente.
export const createRoot = ViteReactSSG({ routes })
