# FOCI – Fonoaudiología Clínica Integral

Este es el repositorio oficial del sitio web de **FOCI - Fonoaudiología Clínica Integral** (Temuco, Chile). Es una plataforma moderna, rápida y 100% responsiva diseñada para facilitar la reserva de horas médicas, mostrar las instalaciones de la clínica, los testimonios de los pacientes y entregar detalles interactivos de los servicios audiológicos.

---

## 📁 Estructura del Proyecto

El proyecto está dividido en dos partes principales:

```text
foci/
├── frontend/     # Aplicación del lado del cliente (Vite + React + Tailwind CSS)
├── backend/      # Servidor API para envíos de formularios y correos (Node.js + Express)
└── .gitignore    # Configuración de exclusiones para Git
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** (Biblioteca UI)
- **Vite** (Empaquetador y Servidor de Desarrollo Rápido)
- **Tailwind CSS** (Estilos y Diseño Responsivo Premium)
- **Lucide React** (Paquete de Iconos modernos)

### Backend
- **Node.js** & **Express**
- **Nodemailer** (Para envío automático de notificaciones por correo)
- **CORS** & **Dotenv** (Seguridad y Variables de Entorno)

---

## 🌟 Características Destacadas

1. **Carruseles Autoadaptables:** Carruseles responsivos implementados nativamente (en las secciones de *Servicios*, *Valores*, *Instalaciones* y *Testimonios*) que muestran de 1 a 3 elementos según la pantalla.
2. **Hero Inteligente:** Slider con transición de imágenes acelerada y rediseño dividido (split-design) en celulares para evitar que se recorten los rostros de los especialistas.
3. **Modales Interactivos:** Las tarjetas de servicios abren modales detallados con imágenes, explicaciones clínicas y accesos directos a reserva.
4. **Widget de Reserva Flotante:** Acceso rápido para agendar mediante WhatsApp.
5. **Horarios Dinámicos:** Tabla horaria detallada integrada en la sección de contacto.
6. **Feed de Instagram Simulado:** Integración visual interactiva conectada a la cuenta oficial.

---

## 🚀 Instalación y Uso Local

Asegúrate de tener instalado **Node.js** (versión 18 o superior) y sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone <url-de-tu-repositorio-en-github>
cd foci
```

### 2. Configurar e Iniciar el Backend
El backend procesa los correos del formulario de contacto.
```bash
cd backend
npm install
```
Crea un archivo llamado `.env` en la carpeta `backend` basado en `.env.example`:
```env
PORT=5000
EMAIL_USER=tu-correo@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicación
EMAIL_RECEIVER=recepcion-foci@gmail.com
```
Inicia el servidor backend:
```bash
npm start
```

### 3. Configurar e Iniciar el Frontend
```bash
cd ../frontend
npm install
npm run dev
```
La aplicación cliente se abrirá en [http://localhost:5173/](http://localhost:5173/).

---

## 📦 Qué subir a GitHub (Guía de Publicación)

El archivo `.gitignore` raíz que hemos configurado se encarga de excluir los archivos pesados o sensibles. Al subir tu código, **solo debes subir el código fuente, configuraciones y activos públicos**.

### Archivos que **SÍ** se suben a GitHub:
- Todas las carpetas de código fuente: `frontend/src/`, `backend/server.js`.
- Las carpetas de activos: `frontend/public/` (imágenes de la clínica, logos, favicon).
- Los archivos de configuración: `package.json`, `tailwind.config.js`, `vite.config.js`, `netlify.toml`.
- Los archivos `.gitignore` y este `README.md`.

### Archivos que **NO** se suben (bloqueados automáticamente por `.gitignore`):
- `node_modules/` (Librerías descargadas por npm).
- `dist/` (El código compilado para producción).
- `.env` (Archivos con contraseñas o credenciales de correo privado).
- Archivos `.log` temporales.

---

## ⚡ Comandos para Inicializar y Subir a GitHub

Si aún no has creado tu repositorio en Git, ejecuta estos comandos desde la carpeta raíz del proyecto (`foci/`):

```bash
# 1. Inicializar Git en el proyecto
git init

# 2. Agregar todos los archivos permitidos
git add .

# 3. Crear el primer commit
git commit -m "feat: implementacion de carruseles responsivos, fixes del hero y documentacion"

# 4. Vincular tu cuenta de GitHub (reemplaza con tu enlace de repo)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main

# 5. Subir los cambios a GitHub
git push -u origin main
```
