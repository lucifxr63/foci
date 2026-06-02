// ─── Helpers ──────────────────────────────────────────────────────────────────
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPhone = (phone) =>
  /^[\+]?[\d\s\-\(\)]{7,20}$/.test(phone);

const sanitize = (str) =>
  String(str).trim().replace(/<[^>]*>/g, '');

// ─── CORS Headers ─────────────────────────────────────────────────────────────
const HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type':                 'application/json',
};

// ─── Handler ──────────────────────────────────────────────────────────────────
exports.handler = async (event) => {

  // Preflight CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: HEADERS, body: '' };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: HEADERS,
      body: JSON.stringify({ success: false, message: 'Método no permitido.' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { nombre, email, telefono, mensaje } = body;

    // ── Validation ─────────────────────────────────────────────────────────
    const errors = [];

    if (!nombre || sanitize(nombre).length < 2)
      errors.push({ field: 'nombre', message: 'El nombre debe tener al menos 2 caracteres.' });

    if (!email || !isValidEmail(email))
      errors.push({ field: 'email', message: 'El correo electrónico no es válido.' });

    if (telefono && !isValidPhone(telefono))
      errors.push({ field: 'telefono', message: 'El número de teléfono no es válido.' });

    if (!mensaje || sanitize(mensaje).length < 10)
      errors.push({ field: 'mensaje', message: 'El mensaje debe tener al menos 10 caracteres.' });

    if (errors.length > 0) {
      return {
        statusCode: 400,
        headers: HEADERS,
        body: JSON.stringify({
          success: false,
          message: 'Por favor corrige los errores en el formulario.',
          errors,
        }),
      };
    }

    // ── Sanitize ───────────────────────────────────────────────────────────
    const contactData = {
      nombre:    sanitize(nombre),
      email:     sanitize(email).toLowerCase(),
      telefono:  telefono ? sanitize(telefono) : null,
      mensaje:   sanitize(mensaje),
      timestamp: new Date().toISOString(),
    };

    // ── TODO: Integrar envío de email aquí ────────────────────────────────
    // Ejemplo con SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to:      process.env.CONTACT_EMAIL,
    //   from:    'noreply@foci.cl',
    //   subject: `Nuevo contacto de ${contactData.nombre}`,
    //   text:    contactData.mensaje,
    // });

    console.log('[CONTACT] Nueva consulta recibida:', contactData);

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({
        success: true,
        message: '¡Mensaje recibido! Te contactaremos pronto.',
        data: {
          nombre:    contactData.nombre,
          timestamp: contactData.timestamp,
        },
      }),
    };

  } catch (err) {
    console.error('[CONTACT] Error:', err);
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({
        success: false,
        message: 'Error interno. Por favor intenta más tarde.',
      }),
    };
  }
};
