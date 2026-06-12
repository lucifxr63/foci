// Helper central de WhatsApp para FOCI.
// Todas las acciones de "reservar / agendar hora" usan este número y construyen
// un mensaje pre-cargado (opcionalmente según el servicio seleccionado).

export const WHATSAPP_NUMBER = '56965545777';

/** Devuelve el link wa.me con el mensaje codificado (o sin mensaje si se omite). */
export function waLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Mensaje pre-cargado para agendar un servicio concreto. */
export function waServiceMessage(serviceName) {
  return `Hola FOCI 👋, me gustaría agendar una hora para *${serviceName}*. ¿Me indican disponibilidad?`;
}

/** Mensaje genérico de reserva (cuando no hay un servicio específico). */
export const WA_GENERIC_MESSAGE = 'Hola FOCI 👋, quiero reservar una hora. ¿Me indican disponibilidad?';
