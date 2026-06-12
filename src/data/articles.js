// ─────────────────────────────────────────────────────────────────────────────
// Artículos del blog de FOCI.
//
// ⚠️ BORRADORES: este contenido es divulgación general orientada a SEO/AEO/GEO.
// Debe ser REVISADO y aprobado por las fonoaudiólogas (Lesly / Carla) antes de
// publicarse, para garantizar precisión clínica. No sustituye una evaluación
// profesional.
//
// Estructura de `body`: array de bloques { type: 'h2' | 'p' | 'ul', ... }.
// Cada artículo se pre-renderiza a HTML estático vía vite-react-ssg.
// ─────────────────────────────────────────────────────────────────────────────

export const ARTICLES = [
  {
    slug: 'a-que-edad-habla-un-nino',
    title: '¿A qué edad debe hablar un niño? Hitos del lenguaje y señales de alerta',
    metaTitle: '¿A qué edad habla un niño? Hitos del lenguaje y señales de alerta | FOCI',
    metaDesc: 'Guía de hitos del lenguaje por edad (1 a 5 años), señales de alerta de retraso o TEL y cuándo consultar a un fonoaudiólogo en Temuco. Por FOCI Fonoaudiología.',
    excerpt: 'Cada niño tiene su ritmo, pero existen hitos esperables del lenguaje a cada edad. Conoce las señales de alerta y cuándo conviene una evaluación fonoaudiológica.',
    date: '2026-05-12',
    dateLabel: '12 de mayo de 2026',
    author: 'Carla Vallejos',
    authorRole: 'Fonoaudióloga Clínica · Especialista infantojuvenil',
    image: '/professional.png',
    category: 'Lenguaje Infantil',
    readingMinutes: 6,
    relatedSlug: 'terapia-lenguaje-infantil',
    relatedLabel: 'Terapia de Lenguaje Infantil',
    body: [
      { type: 'p', text: 'Una de las preguntas más frecuentes que reciben las familias es: "¿mi hijo habla lo que debería para su edad?". El desarrollo del lenguaje sigue una secuencia esperable, aunque cada niño avanza a su propio ritmo. Conocer los hitos típicos ayuda a detectar a tiempo cuando algo necesita apoyo, y la intervención temprana marca una diferencia enorme en los resultados.' },

      { type: 'h2', text: 'Hitos del lenguaje por edad' },
      { type: 'p', text: 'Estos son los logros comunicativos que se esperan de forma orientativa en cada etapa:' },
      { type: 'ul', items: [
        'A los 12 meses: dice sus primeras palabras con intención (mamá, papá), comprende su nombre y órdenes simples, señala lo que quiere.',
        'A los 18 meses: usa entre 10 y 20 palabras, imita sonidos y palabras, señala partes del cuerpo cuando se le pide.',
        'A los 2 años: combina dos palabras ("más agua", "no quiero"), tiene un vocabulario de unas 50 palabras y es entendido por la familia cercana.',
        'A los 3 años: forma frases de 3 o más palabras, hace preguntas, y personas fuera de la familia comprenden buena parte de lo que dice.',
        'A los 4 años: cuenta hechos simples, usa frases más largas y su habla es mayormente clara.',
        'A los 5 años: mantiene conversaciones, narra cuentos breves y pronuncia correctamente la mayoría de los sonidos.',
      ] },

      { type: 'h2', text: 'Señales de alerta según la edad' },
      { type: 'p', text: 'Conviene consultar con un fonoaudiólogo si observas alguna de estas situaciones:' },
      { type: 'ul', items: [
        'A los 18 meses no dice ninguna palabra ni intenta imitar sonidos.',
        'A los 2 años no combina dos palabras ni señala objetos para comunicarse.',
        'A los 3 años no se le entiende fuera del entorno familiar o no forma frases.',
        'En cualquier edad: pérdida de habilidades que ya había adquirido (deja de hablar o de mirar a los ojos).',
        'No responde cuando lo llaman, lo que también puede indicar una dificultad auditiva.',
      ] },

      { type: 'h2', text: '¿Qué es el TEL (Trastorno Específico del Lenguaje)?' },
      { type: 'p', text: 'El TEL es una dificultad persistente para adquirir y usar el lenguaje que no se explica por una pérdida auditiva, una discapacidad intelectual ni por falta de estímulo. El niño escucha bien y se desarrolla con normalidad en otras áreas, pero su lenguaje avanza por debajo de lo esperado. Requiere evaluación e intervención fonoaudiológica especializada.' },

      { type: 'h2', text: 'Por qué importa actuar a tiempo' },
      { type: 'p', text: 'El cerebro infantil tiene su mayor plasticidad en los primeros años de vida. Iniciar la terapia temprano aprovecha esa ventana y previene que las dificultades del lenguaje impacten más adelante en el aprendizaje, la lectura y las relaciones sociales. Una evaluación no significa necesariamente que haya un problema: muchas veces sirve para tranquilizar a la familia y entregar pautas de estimulación en casa.' },

      { type: 'h2', text: 'Cómo estimular el lenguaje en casa' },
      { type: 'ul', items: [
        'Háblale mirándolo a los ojos y nombra lo que hace y lo que ven juntos.',
        'Lee cuentos a diario, aunque sean breves, y deja que él dé vuelta las páginas.',
        'Responde a sus intentos de comunicación, aunque no sean palabras completas.',
        'Reduce el tiempo de pantallas: el lenguaje se aprende en la interacción real.',
        'Canta canciones con gestos y repite rimas sencillas.',
      ] },
    ],
    faq: [
      { q: '¿Es normal que mi hijo de 2 años hable poco?', a: 'A los 2 años se espera que el niño tenga alrededor de 50 palabras y combine dos de ellas. Si habla muy poco o no junta palabras, conviene una evaluación fonoaudiológica para descartar un retraso del lenguaje y orientar la estimulación.' },
      { q: '¿Desde qué edad se puede hacer terapia de lenguaje?', a: 'En FOCI atendemos desde los 3 años. Cuanto antes se inicie la intervención, mejores son los resultados, especialmente en retrasos del lenguaje y trastornos del espectro autista.' },
      { q: '¿Necesito derivación médica para evaluar a mi hijo?', a: 'No es obligatorio. Puedes agendar directamente una evaluación fonoaudiológica por teléfono, WhatsApp o el formulario de la web.' },
    ],
  },

  {
    slug: 'tapon-de-cerumen-sintomas-lavado-de-oidos',
    title: 'Tapón de cerumen: síntomas, causas y cuándo hacer un lavado de oídos',
    metaTitle: 'Tapón de Cerumen: Síntomas y Cuándo Hacer un Lavado de Oídos | FOCI',
    metaDesc: 'Síntomas del tapón de cerumen, por qué no debes usar cotonitos y cuándo es necesario un lavado de oídos profesional en Temuco. Por FOCI Fonoaudiología.',
    excerpt: 'Oído tapado, picazón o baja audición repentina pueden ser un tapón de cerumen. Te explicamos los síntomas, qué evitar y cuándo hacer un lavado de oídos profesional.',
    date: '2026-05-26',
    dateLabel: '26 de mayo de 2026',
    author: 'Lesly Villagrán Obreque',
    authorRole: 'Fonoaudióloga Directora · Especialista en otoscopía y lavado',
    image: '/service-ear-wash.png',
    category: 'Salud Auditiva',
    readingMinutes: 5,
    relatedSlug: 'lavado-de-oidos',
    relatedLabel: 'Lavado de Oídos',
    body: [
      { type: 'p', text: 'El cerumen es una sustancia natural y protectora que produce el oído: atrapa polvo, repele el agua y tiene propiedades antibacterianas. El problema aparece cuando se acumula en exceso y forma un tapón que obstruye el conducto auditivo. Es uno de los motivos de consulta más frecuentes y, afortunadamente, de solución rápida.' },

      { type: 'h2', text: 'Síntomas de un tapón de cerumen' },
      { type: 'ul', items: [
        'Sensación de oído tapado o presión.',
        'Disminución repentina de la audición en uno o ambos oídos.',
        'Picazón dentro del oído.',
        'Zumbidos o ruidos internos (tinnitus).',
        'A veces, mareo leve o una sensación de "eco" de la propia voz.',
      ] },

      { type: 'h2', text: 'Por qué NO debes usar cotonitos' },
      { type: 'p', text: 'El error más común es intentar limpiar el oído con cotonitos (hisopos). En lugar de retirar el cerumen, lo empujan hacia el fondo del conducto, lo compactan contra el tímpano y agravan el tapón. Además, pueden causar heridas en la piel del conducto o, en casos serios, dañar el tímpano. La recomendación profesional es clara: nada más pequeño que tu codo dentro del oído.' },

      { type: 'h2', text: '¿En qué consiste un lavado de oídos profesional?' },
      { type: 'p', text: 'En FOCI, el lavado de oídos comienza con una otoscopía: una inspección visual del conducto para confirmar el tapón y descartar contraindicaciones (como una perforación del tímpano). Luego se retira el cerumen de forma segura, mediante irrigación con agua templada a presión controlada o con micro-curetas, según el caso. El procedimiento dura unos 20 minutos, es indoloro y el alivio suele ser inmediato.' },

      { type: 'h2', text: 'Cuándo consultar' },
      { type: 'p', text: 'Conviene agendar un lavado de oídos cuando sientes el oído tapado, notas baja audición, picazón persistente o zumbidos relacionados con cerumen. También es recomendable si usas audífonos o tapones con frecuencia, ya que tienden a acumular cerumen. Si tienes antecedentes de perforación timpánica o cirugía de oído, avísalo al reservar para elegir la técnica más adecuada.' },

      { type: 'h2', text: '¿Cada cuánto es necesario?' },
      { type: 'p', text: 'Depende de cada persona. Algunas producen cerumen en exceso y necesitan un lavado una o dos veces al año; otras casi nunca lo requieren. No es un procedimiento que deba hacerse "por rutina": lo ideal es realizarlo cuando aparecen los síntomas o cuando el profesional lo indica tras la evaluación.' },
    ],
    faq: [
      { q: '¿El lavado de oídos duele?', a: 'No. Es un procedimiento indoloro que se realiza con agua templada a presión controlada o micro-curetas. La mayoría de las personas siente alivio inmediato al destaparse el oído.' },
      { q: '¿Puedo sacarme el tapón en casa?', a: 'No es recomendable. Los cotonitos y otros objetos suelen empujar el cerumen y empeorar el tapón, además de poder lesionar el oído. Lo seguro es un lavado profesional con otoscopía previa.' },
      { q: '¿Desde qué edad se puede hacer?', a: 'En FOCI realizamos lavado de oídos desde los 3 años, siempre con evaluación previa del conducto auditivo.' },
    ],
  },

  {
    slug: 'audiometria-que-es-como-se-hace',
    title: 'Audiometría: qué es, cómo se hace y cuándo necesitas una',
    metaTitle: 'Audiometría: Qué es, Cómo se Hace y Cuándo Necesitas Una | FOCI Temuco',
    metaDesc: 'Qué es una audiometría, cómo es el examen paso a paso, cómo se lee un audiograma y cuándo conviene hacerse uno. Audiometría profesional en Temuco — FOCI.',
    excerpt: 'La audiometría mide con precisión tu capacidad auditiva. Te explicamos en qué consiste el examen, cómo se interpreta el audiograma y cuándo deberías hacerte uno.',
    date: '2026-06-04',
    dateLabel: '4 de junio de 2026',
    author: 'Lesly Villagrán Obreque',
    authorRole: 'Fonoaudióloga Directora · Audiología',
    image: '/hero-slide2.png',
    category: 'Evaluación Auditiva',
    readingMinutes: 5,
    relatedSlug: 'audiometria',
    relatedLabel: 'Audiometría',
    body: [
      { type: 'p', text: 'La audiometría es el examen de referencia para medir la audición. Permite saber con precisión cuál es el umbral mínimo que una persona escucha en cada frecuencia, detectar pérdidas auditivas, conocer su tipo y grado, y tomar decisiones de tratamiento o de adaptación de audífonos. Es indoloro y no requiere preparación especial.' },

      { type: 'h2', text: '¿Cómo es el examen paso a paso?' },
      { type: 'p', text: 'La audiometría se realiza dentro de una cabina sonoamortiguada, un espacio aislado del ruido externo para que los resultados sean fiables. El proceso es sencillo:' },
      { type: 'ul', items: [
        'Te colocas unos auriculares y, en algunos casos, un vibrador detrás de la oreja (para la vía ósea).',
        'Escucharás tonos a distintos volúmenes y frecuencias, desde sonidos graves a agudos.',
        'Cada vez que escuches un tono, por débil que sea, debes indicarlo (levantando la mano o pulsando un botón).',
        'El profesional registra el umbral en el que dejas de escuchar cada frecuencia.',
      ] },
      { type: 'p', text: 'El examen completo dura entre 30 y 45 minutos e incluye la evaluación por vía aérea (auriculares) y por vía ósea (vibrador), lo que ayuda a determinar dónde se origina una eventual pérdida auditiva.' },

      { type: 'h2', text: '¿Qué es el audiograma y cómo se lee?' },
      { type: 'p', text: 'El resultado se plasma en un audiograma: un gráfico donde el eje horizontal representa las frecuencias (de graves a agudas) y el eje vertical, la intensidad en decibelios. Mientras más abajo está la curva, mayor es la pérdida auditiva. El audiograma permite clasificar la audición como normal, o con pérdida leve, moderada, severa o profunda, y diferenciar si es conductiva, neurosensorial o mixta.' },

      { type: 'h2', text: '¿Cuándo deberías hacerte una audiometría?' },
      { type: 'ul', items: [
        'Si notas que escuchas menos, subes mucho el volumen o pides que te repitan con frecuencia.',
        'Si tienes zumbidos persistentes (tinnitus).',
        'Si trabajas expuesto a ruido (industria, música, maquinaria).',
        'Antes de adaptar audífonos o para controlar su funcionamiento.',
        'Como control en adultos mayores, ya que la audición disminuye de forma gradual.',
        'En niños, ante sospecha de dificultades auditivas o como apoyo a una evaluación de lenguaje.',
      ] },

      { type: 'h2', text: '¿Necesito preparación?' },
      { type: 'p', text: 'No se requiere ayuno ni preparación especial. Solo se recomienda asistir descansado y, si usas audífonos, retirarlos las horas previas. Si vienes de una exposición intensa a ruido (un concierto, por ejemplo), conviene dejar pasar algunas horas para no alterar el resultado.' },
    ],
    faq: [
      { q: '¿La audiometría duele?', a: 'No, es completamente indolora. Solo debes indicar cuándo escuchas los tonos que se emiten durante el examen.' },
      { q: '¿Cuánto dura?', a: 'Entre 30 y 45 minutos, incluyendo la evaluación por vía aérea y por vía ósea.' },
      { q: '¿Sirve para adaptar audífonos?', a: 'Sí. El audiograma es la base para indicar y calibrar correctamente un audífono según el tipo y grado de pérdida auditiva.' },
    ],
  },
];
