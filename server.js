import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// ─── Helpers ──────────────────────────────────────────────────────────────────
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPhone = (phone) =>
  /^[\+]?[\d\s\-\(\)]{7,20}$/.test(phone);

const sanitize = (str) =>
  String(str).trim().replace(/<[^>]*>/g, '');

// ─── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form
app.post('/api/contact', (req, res) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;

    // ── Validation ────────────────────────────────────────────────────────────
    const errors = [];

    if (!nombre || sanitize(nombre).length < 2) {
      errors.push({ field: 'nombre', message: 'El nombre debe tener al menos 2 caracteres.' });
    }

    if (!email || !isValidEmail(email)) {
      errors.push({ field: 'email', message: 'El correo electrónico no es válido.' });
    }

    if (telefono && !isValidPhone(telefono)) {
      errors.push({ field: 'telefono', message: 'El número de teléfono no es válido.' });
    }

    if (!mensaje || sanitize(mensaje).length < 10) {
      errors.push({ field: 'mensaje', message: 'El mensaje debe tener al menos 10 caracteres.' });
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Por favor corrige los errores en el formulario.',
        errors,
      });
    }

    // ── Sanitize inputs ───────────────────────────────────────────────────────
    const contactData = {
      nombre:   sanitize(nombre),
      email:    sanitize(email).toLowerCase(),
      telefono: telefono ? sanitize(telefono) : null,
      mensaje:  sanitize(mensaje),
      timestamp: new Date().toISOString(),
    };

    // ── TODO: Integrate email service here ────────────────────────────────────
    // Example: await sendContactEmail(contactData);
    console.log('[CONTACT FORM] New submission received:', contactData);

    return res.status(200).json({
      success: true,
      message: '¡Mensaje recibido! Te contactaremos pronto.',
      data: {
        nombre: contactData.nombre,
        timestamp: contactData.timestamp,
      },
    });

  } catch (error) {
    console.error('[CONTACT FORM] Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor. Por favor intenta más tarde.',
    });
  }
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Ruta no encontrada.' });
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 FOCI Backend corriendo en http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Contact: POST http://localhost:${PORT}/api/contact\n`);
});
