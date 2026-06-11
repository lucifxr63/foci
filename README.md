# FOCI – Sitio Web Fonoaudiología Clínica Integral

Esta es la aplicación web cliente de **FOCI - Fonoaudiología Clínica Integral**, construida de forma moderna con **React**, **Vite** y **Tailwind CSS**.

---

## 🚀 Últimas Actualizaciones

1. **Carrusel de Perfiles Profesionales ("Quiénes Somos"):**
   - Rediseño de las fichas de presentación para que coincidan 100% con el diseño premium solicitado.
   - La foto se funde de manera invisible con el fondo blanco de la tarjeta usando gradientes de transparencia CSS a la derecha en pantallas de escritorio.
   - Lista de especialidades clínicas estructurada con birretes de graduación azules (`GraduationCap`).
   - Botón de enlace profesional con icono de enlace externo (`ExternalLink`) a la izquierda.
   - Visualización responsiva en formato de **carrusel deslizable interactivo** mediante gestos táctiles (*swipe*) en móviles/tablets, y flechas de navegación flotantes y puntos indicadores.
   - Corrección de la correspondencia de fotografías (delantal blanco asignado a Lesly Villagrán y pijama clínico celeste a Carla Vallejos).

2. **Servicios Clínicos Híbridos:**
   - Presentación compacta en formato de carrusel deslizable con flechas en dispositivos móviles y de cuadrícula fija de 2x4 en laptops/computadores de escritorio.

3. **Logotipo Oficial Unificado:**
   - Logotipo transparente recortado de alta definición integrado en una tarjeta flotante blanca (`bg-white border rounded-xl p-2 shadow-sm`) tanto en el Navbar como en el Footer.

4. **Favicon de Alta Visibilidad:**
   - Icono PNG (`favicon.png`) de 64x64px con la oreja clínica sobre fondo blanco redondeado, visible en temas claros y oscuros de navegador.

---

## 💻 Inicio Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abierto en: [http://localhost:5173/](http://localhost:5173/)

3. Compilar para producción (genera la carpeta `/dist`):
   ```bash
   npm run build
   ```

