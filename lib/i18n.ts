export type Lang = 'es' | 'en'

export type TranslationDict = {
  nav: { home: string; about: string; plan: string; results: string; faq: string; cta: string; ctaMobile: string }
  hero: { eyebrow: string; titleLine1: string; titleLine2: string; titleLine3: string; desc: string; cta: string; ctaSecondary: string; scroll: string }
  stats: ReadonlyArray<{ value: string; label: string; sub: string }>
  about: { eyebrow: string; titleLine1: string; titleLine2: string; p1: string; p2: string; p3: string; tags: ReadonlyArray<string> }
  philosophy: { eyebrow: string; titleLine1: string; titleLine2: string; titleLine3: string; intro: string; pillars: ReadonlyArray<{ pillar: string; quote: string }> }
  plan: { eyebrow: string; titleLine1: string; titleLine2: string; titleLine3: string; intro: string; features: ReadonlyArray<{ title: string; desc: string }>; ctaTitle: string; ctaSub: string; cta: string }
  process: { eyebrow: string; titleLine1: string; titleLine2: string; titleLine3: string; steps: ReadonlyArray<{ title: string; desc: string }> }
  transformations: { eyebrow: string; titleLine1: string; titleLine2: string; intro: string; ctaText: string; cta: string; label: string }
  instagram: { eyebrow: string; titleLine1: string; titleLine2: string; follow: string; followers: string; posts: string; tiktok: string }
  lifepro: { sponsored: string; brand: string; title: string; desc: string; code: string; cta: string }
  faq: { eyebrow: string; titleLine1: string; titleLine2: string; items: ReadonlyArray<{ q: string; a: string }> }
  cta: { eyebrow: string; titleLine1: string; titleLine2: string; intro: string; cta: string }
  footer: { rights: string }
}

export const translations: Record<Lang, TranslationDict> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      plan: 'Programa',
      results: 'Resultados',
      faq: 'FAQ',
      cta: 'ESCRÍBEME',
      ctaMobile: 'ESCRÍBEME POR WHATSAPP',
    },
    hero: {
      eyebrow: 'Coach 1:1',
      titleLine1: 'No vendo',
      titleLine2: 'plantillas.',
      titleLine3: 'Construyo físicos.',
      desc: '+600 personas ya transformaron su físico conmigo. Sin atajos, sin promesas vacías — solo trabajo real, plan a medida y mentalidad.',
      cta: 'ESCRÍBEME',
      ctaSecondary: 'CONOCER EL MÉTODO',
      scroll: 'SCROLL',
    },
    stats: [
      { value: '+600', label: 'Personas transformadas', sub: 'Resultados reales y verificables' },
      { value: '100%', label: 'Plan personalizado', sub: 'Sin plantillas ni atajos' },
      { value: '24h', label: 'Respuesta rápida', sub: 'Te respondo en menos de 24h' },
      { value: '1:1', label: 'Asesoría individual', sub: 'Yo escribo, yo respondo' },
    ],
    about: {
      eyebrow: 'Sobre mí',
      titleLine1: 'Un método pensado',
      titleLine2: 'para personas reales.',
      p1: 'Soy Juan Penela. Llevo años acompañando a personas en sus procesos de transformación física, trabajando de forma directa, sin atajos y sin programas estandarizados.',
      p2: 'Cada plan que entrego está diseñado desde cero a partir de tus hábitos, tus gustos, tu horario y tu disponibilidad. No hay dos clientes con el mismo plan, porque no hay dos personas iguales.',
      p3: 'El seguimiento es continuo y la comunicación es humana. Sin chatbots, sin respuestas genéricas — me escribes y te respondo yo, directamente.',
      tags: ['Nutrición', 'Entrenamiento', 'Suplementación', 'Seguimiento'],
    },
    philosophy: {
      eyebrow: 'Filosofía',
      titleLine1: 'Lo que entreno',
      titleLine2: 'antes que el cuerpo:',
      titleLine3: 'la cabeza.',
      intro: 'No vendo dietas mágicas ni rutinas milagrosas. Trabajo con personas que entienden que el cambio físico empieza por la cabeza y se sostiene con disciplina diaria.',
      pillars: [
        { pillar: 'Mentalidad', quote: 'Tu cuerpo no cambiará hasta que aprendas a construir una mente fuerte.' },
        { pillar: 'Disciplina', quote: 'Nadie compra un buen físico. Lo conquistas con amor propio, dedicación y disciplina.' },
        { pillar: 'Constancia', quote: 'El peso impresiona unos segundos. La técnica construye resultados durante años.' },
      ],
    },
    plan: {
      eyebrow: 'El programa',
      titleLine1: 'Todo lo que',
      titleLine2: 'incluye trabajar',
      titleLine3: 'conmigo.',
      intro: 'Un programa pensado para acompañarte de principio a fin. No vas a recibir un PDF y desaparecer — vas a tener un seguimiento real, semana a semana, hasta que consigas el resultado que buscas.',
      features: [
        { title: 'Plan nutricional personalizado', desc: 'Ajustado a tus gustos, alergias y al número de comidas que sueles hacer. Sin dietas imposibles de seguir.' },
        { title: 'Entrenamiento adaptado', desc: 'Diseñado en función de tu objetivo, tu nivel actual y los días que puedes entrenar a la semana.' },
        { title: 'Asesoramiento en suplementación', desc: 'Recomendaciones basadas en evidencia, alineadas con tu objetivo y tu presupuesto.' },
        { title: 'Contacto directo por WhatsApp', desc: 'Me escribes tú y te respondo yo — sin intermediarios. Respuesta en menos de 24 horas.' },
        { title: 'Corrección de ejercicios por vídeo', desc: 'Me envías un vídeo de tu técnica y te lo corrijo. O recibes vídeos míos con la ejecución correcta.' },
        { title: 'Seguimiento y revisión del plan', desc: 'Actualizamos tu programa según evolucionas para que nunca te estanques en el proceso.' },
      ],
      ctaTitle: '¿Quieres entrar al programa 1:1?',
      ctaSub: 'Cuéntame tu objetivo y diseñamos juntos el plan que necesitas.',
      cta: 'ESCRÍBEME',
    },
    process: {
      eyebrow: 'El proceso',
      titleLine1: 'Cuatro pasos',
      titleLine2: 'para empezar tu',
      titleLine3: 'transformación.',
      steps: [
        { title: 'Primer contacto', desc: 'Me escribes por WhatsApp y me cuentas tu objetivo. Te respondo personalmente.' },
        { title: 'Cuestionario inicial', desc: 'Te envío un formulario para conocer tus hábitos, horarios y disponibilidad.' },
        { title: 'Diseño del plan', desc: 'En pocos días recibes tu programa de entrenamiento y nutrición a medida.' },
        { title: 'Seguimiento continuo', desc: 'Revisamos tu evolución semana a semana y ajustamos el plan según avances.' },
      ],
    },
    transformations: {
      eyebrow: 'Resultados',
      titleLine1: 'Personas reales,',
      titleLine2: 'cambios reales.',
      intro: 'Más de 600 personas ya pasaron por el programa. Cada una de estas transformaciones es el resultado de un proceso individualizado: plan adaptado, constancia y un seguimiento real en el tiempo.',
      ctaText: '¿Quieres ser el próximo cambio?',
      cta: 'ESCRÍBEME',
      label: 'Cambio',
    },
    instagram: {
      eyebrow: 'En redes',
      titleLine1: 'Lo último en',
      titleLine2: '@jpenela',
      follow: 'Seguir en Instagram',
      followers: 'Seguidores',
      posts: 'Posts',
      tiktok: 'También en TikTok @jpenela',
    },
    lifepro: {
      sponsored: 'Patrocinado',
      brand: 'LIFEPRO NUTRITION',
      title: 'Mi suplementación de confianza.',
      desc: 'Usa mi código JPENELA y consigue descuento en toda la tienda.',
      code: 'CÓDIGO',
      cta: 'Ir a la tienda',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      titleLine1: 'Las dudas más',
      titleLine2: 'habituales.',
      items: [
        { q: '¿En qué consiste exactamente el programa?', a: 'Recibirás un plan de entrenamiento semanal y un plan nutricional, ambos diseñados específicamente para ti. Incluye seguimiento continuo vía WhatsApp, corrección de ejercicios por vídeo y actualizaciones del plan según tu progreso.' },
        { q: '¿Necesito ir al gimnasio para entrenar?', a: 'No es imprescindible. El plan se adapta a tus circunstancias. Si tienes acceso a gimnasio, lo aprovechamos al máximo. Si entrenas en casa, diseñamos las rutinas con ese material. Cuéntame tu situación y lo ajustamos.' },
        { q: '¿Cómo es la comunicación durante el proceso?', a: 'Toda la comunicación se gestiona a través de WhatsApp. Me escribes tú directamente y te respondo yo, sin chatbots ni intermediarios. Respuesta en menos de 24 horas.' },
        { q: '¿Qué pasa si no veo resultados?', a: 'El plan se revisa y se actualiza en función de tu progreso real. Si algo no está funcionando, lo identificamos juntos y lo ajustamos. El seguimiento continuo existe precisamente para que eso no ocurra.' },
        { q: '¿Cuánto tardo en recibir mi plan?', a: 'Una vez que rellenas el cuestionario inicial con tus datos, tendrás tu plan completamente personalizado en pocos días. A partir de ese momento, el seguimiento es inmediato.' },
        { q: '¿Cómo solicito más información?', a: 'Lo más sencillo es escribirme directamente por WhatsApp. Te explico el programa, resuelvo cualquier duda y vemos juntos si encaja con tu objetivo, sin compromiso.' },
      ],
    },
    cta: {
      eyebrow: 'El siguiente paso',
      titleLine1: 'Empieza hoy',
      titleLine2: 'tu proceso.',
      intro: 'Escríbeme por WhatsApp y hablamos de tu objetivo. Sin compromisos, sin presión — solo una conversación para ver si encajamos.',
      cta: 'ESCRÍBEME',
    },
    footer: {
      rights: 'Todos los derechos reservados',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      plan: 'Program',
      results: 'Results',
      faq: 'FAQ',
      cta: 'CONTACT ME',
      ctaMobile: 'CONTACT ME ON WHATSAPP',
    },
    hero: {
      eyebrow: '1:1 Coach',
      titleLine1: "I don't sell",
      titleLine2: 'templates.',
      titleLine3: 'I build bodies.',
      desc: '+600 people have already transformed their physique with me. No shortcuts, no empty promises — just real work, tailor-made plans and mindset.',
      cta: 'CONTACT ME',
      ctaSecondary: 'SEE THE METHOD',
      scroll: 'SCROLL',
    },
    stats: [
      { value: '+600', label: 'People transformed', sub: 'Real, verifiable results' },
      { value: '100%', label: 'Personalized plan', sub: 'No templates, no shortcuts' },
      { value: '24h', label: 'Fast response', sub: 'I reply within 24 hours' },
      { value: '1:1', label: 'Individual coaching', sub: 'I write, I reply' },
    ],
    about: {
      eyebrow: 'About me',
      titleLine1: 'A method built',
      titleLine2: 'for real people.',
      p1: "I'm Juan Penela. I've spent years coaching people through their physical transformation — working directly, without shortcuts and without one-size-fits-all programs.",
      p2: 'Every plan I deliver is designed from scratch based on your habits, your preferences, your schedule and your availability. No two clients get the same plan, because no two people are the same.',
      p3: "The follow-up is continuous and the communication is human. No chatbots, no generic replies — you write me and I reply, directly.",
      tags: ['Nutrition', 'Training', 'Supplementation', 'Follow-up'],
    },
    philosophy: {
      eyebrow: 'Philosophy',
      titleLine1: 'What I train',
      titleLine2: 'before the body:',
      titleLine3: 'the mind.',
      intro: "I don't sell magic diets or miracle routines. I work with people who understand that physical change starts in the mind and is built through daily discipline.",
      pillars: [
        { pillar: 'Mindset', quote: "Your body won't change until you learn to build a strong mind." },
        { pillar: 'Discipline', quote: "Nobody buys a great physique. You earn it with self-respect, dedication and discipline." },
        { pillar: 'Consistency', quote: 'Heavy weights impress for seconds. Technique builds results for years.' },
      ],
    },
    plan: {
      eyebrow: 'The program',
      titleLine1: 'Everything you',
      titleLine2: 'get when working',
      titleLine3: 'with me.',
      intro: "A program designed to support you from start to finish. You won't get a PDF and disappear — you'll have real follow-up, week after week, until you reach the result you're after.",
      features: [
        { title: 'Personalized nutrition plan', desc: 'Adjusted to your tastes, allergies and number of daily meals. No diets you can\'t stick to.' },
        { title: 'Tailored training plan', desc: 'Designed around your goal, your current level and the days you can train each week.' },
        { title: 'Supplementation guidance', desc: 'Evidence-based recommendations aligned with your goal and your budget.' },
        { title: 'Direct WhatsApp contact', desc: 'You message me and I reply — no middlemen. Response within 24 hours.' },
        { title: 'Exercise correction by video', desc: 'Send me a video of your form and I correct it. Or get videos from me with the proper execution.' },
        { title: 'Plan tracking & updates', desc: 'We update your program as you progress, so you never plateau.' },
      ],
      ctaTitle: 'Ready to join the 1:1 program?',
      ctaSub: 'Tell me your goal and we design the plan you need together.',
      cta: 'CONTACT ME',
    },
    process: {
      eyebrow: 'The process',
      titleLine1: 'Four steps',
      titleLine2: 'to start your',
      titleLine3: 'transformation.',
      steps: [
        { title: 'First contact', desc: 'You message me on WhatsApp and tell me your goal. I reply personally.' },
        { title: 'Initial questionnaire', desc: 'I send you a form to learn about your habits, schedule and availability.' },
        { title: 'Plan design', desc: 'In a few days you receive your custom training and nutrition program.' },
        { title: 'Ongoing follow-up', desc: 'We review your progress week by week and adjust the plan as you advance.' },
      ],
    },
    transformations: {
      eyebrow: 'Results',
      titleLine1: 'Real people,',
      titleLine2: 'real change.',
      intro: 'More than 600 people have already gone through the program. Every one of these transformations is the result of an individualized process: tailored plan, consistency and real long-term follow-up.',
      ctaText: 'Want to be the next change?',
      cta: 'CONTACT ME',
      label: 'Change',
    },
    instagram: {
      eyebrow: 'On socials',
      titleLine1: 'Latest from',
      titleLine2: '@jpenela',
      follow: 'Follow on Instagram',
      followers: 'Followers',
      posts: 'Posts',
      tiktok: 'Also on TikTok @jpenela',
    },
    lifepro: {
      sponsored: 'Sponsored',
      brand: 'LIFEPRO NUTRITION',
      title: 'My trusted supplementation.',
      desc: 'Use my code JPENELA and get a discount across the store.',
      code: 'CODE',
      cta: 'Go to store',
    },
    faq: {
      eyebrow: 'Frequently asked',
      titleLine1: 'The most',
      titleLine2: 'common questions.',
      items: [
        { q: 'What exactly does the program include?', a: 'You get a weekly training plan and a nutrition plan, both designed specifically for you. Continuous follow-up via WhatsApp, exercise correction by video and plan updates as you progress.' },
        { q: 'Do I need to go to a gym?', a: 'Not necessarily. The plan adapts to your situation. If you have access to a gym, we make the most of it. If you train at home, we design the routines with whatever equipment you have.' },
        { q: 'How does communication work?', a: 'All communication happens via WhatsApp. You message me directly and I reply, with no chatbots or middlemen. Response within 24 hours.' },
        { q: "What if I don't see results?", a: 'The plan is reviewed and updated based on your actual progress. If something is not working, we identify it together and adjust. Continuous follow-up exists precisely so that does not happen.' },
        { q: 'How long until I receive my plan?', a: 'Once you fill in the initial questionnaire with your details, you will have your fully personalized plan within a few days. From that moment, follow-up is immediate.' },
        { q: 'How do I get more information?', a: 'The easiest way is to message me directly on WhatsApp. I explain the program, answer any question and we see together if it fits your goal — no commitment.' },
      ],
    },
    cta: {
      eyebrow: 'The next step',
      titleLine1: 'Start your',
      titleLine2: 'process today.',
      intro: 'Message me on WhatsApp and let\'s talk about your goal. No commitment, no pressure — just a conversation to see if we are a fit.',
      cta: 'CONTACT ME',
    },
    footer: {
      rights: 'All rights reserved',
    },
  },
}
