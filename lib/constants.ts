import type { SignOption, Q2Option, Q3Option } from '@/types/simulator'

export const SIGN_OPTIONS: SignOption[] = [
  { id: 's1', emoji: '💧', label: 'Manchas de humedad en el techo o cielo raso' },
  { id: 's2', emoji: '🌬️', label: 'Corrientes de aire frío sin razón aparente' },
  { id: 's3', emoji: '⚡', label: 'Facturas de energía más altas de lo normal' },
  { id: 's4', emoji: '🍄', label: 'Moho visible en el techo' },
]

export const MICRO_CONFIRM_Q1 = {
  withSigns: '✅ Esas señales frecuentemente tienen origen en el techo. El daño del invierno puede estar más avanzado de lo que parece.',
  noSigns: '✅ Buena señal. El daño de tormenta en CT frecuentemente no es visible desde adentro — los expertos lo detectan desde arriba.',
}

export const Q2_OPTIONS: Q2Option[] = [
  { value: 'no', emoji: '❌', label: 'No tenía idea — ¿cómo funciona?' },
  { value: 'heard', emoji: '🤔', label: 'Lo escuché pero no sé si me aplica' },
  { value: 'yes', emoji: '✅', label: 'Sí lo sabía pero no sé cómo reclamarlo' },
]

export const MICRO_CONFIRM_Q2: Record<string, string> = {
  no: '🔑 ¡Ahora lo sabes! CT es uno de los pocos estados con esta cobertura. Confirmemos si tu propiedad aplica.',
  heard: '🔍 Perfecto — vamos a verificar si tu propiedad califica en este momento.',
  yes: '✅ Excelente. Confirmemos si tu techo califica ahora mismo.',
}

export const Q3_OPTIONS: Q3Option[] = [
  { value: 'yes', emoji: '✅', label: 'Sí, más de 15 años' },
  { value: 'no', emoji: '❌', label: 'No, menos de 15 años' },
  { value: 'ns', emoji: '🤔', label: 'No estoy seguro' },
]

export const MICRO_CONFIRM_Q3: Record<string, string> = {
  yes: '🎯 Perfecto — los techos con más de 15 años tienen muy alta probabilidad de aprobación en Connecticut.',
  no: '✅ El daño de tormenta puede calificar independientemente de la edad.',
  ns: '✅ No te preocupes — nuestro equipo evaluará la edad exacta durante la inspección gratuita.',
}

export const ANALYZE_STEPS = [
  'Verificando tu propiedad en Connecticut...',
  'Consultando historial de tormentas en tu zona...',
  'Evaluando criterios de tu aseguradora...',
  'Calculando probabilidad de aprobación...',
  '¡Listo! Preparando tu resultado personalizado...',
]

export const NEXT_STEPS = [
  'Un experto de Legend te llamará en menos de 24 horas',
  'Coordinamos tu inspección gratuita sin compromiso',
  'Manejamos todo el proceso con tu aseguradora',
  'Tú te quedas tranquilo mientras nosotros trabajamos',
]

export const TRUST_ITEMS = [
  { emoji: '🏆', label: '+500 techos', sub: 'reemplazados en CT' },
  { emoji: '⭐', label: '4.9/5 estrellas', sub: 'en Google Reviews' },
  { emoji: '🔒', label: 'Licenciados', sub: 'y asegurados en CT' },
  { emoji: '💬', label: 'Hablamos', sub: 'español' },
  { emoji: '🛡️', label: 'Garantía', sub: 'de 10 años' },
]

export const STATS = [
  { value: '97%', label: 'de reclamaciones aprobadas' },
  { value: '$0', label: 'costo si no aplicas' },
  { value: '48h', label: 'tiempo de respuesta' },
  { value: '500+', label: 'familias en CT ayudadas' },
]

export const TESTIMONIALS = [
  {
    name: 'María González',
    location: 'Bridgeport, CT',
    stars: 5,
    text: 'No sabía que mi seguro podía pagar todo. Legend manejó todo el proceso y en 3 semanas tenía techo nuevo. ¡Increíble servicio!',
    initials: 'MG',
  },
  {
    name: 'Carlos Rodríguez',
    location: 'New Haven, CT',
    stars: 5,
    text: 'Muy profesionales. Hablaron directamente con mi aseguradora y yo solo tuve que pagar el deducible. El techo quedó perfecto.',
    initials: 'CR',
  },
  {
    name: 'Ana Martínez',
    location: 'Hartford, CT',
    stars: 5,
    text: 'El proceso fue súper fácil. En menos de 24 horas me llamaron, hicieron la inspección y empezaron el trámite. 100% recomendado.',
    initials: 'AM',
  },
]

export const FAQS = [
  {
    q: '¿Realmente mi seguro puede pagar el 100% del reemplazo?',
    a: 'Sí, en Connecticut el seguro de propietario puede cubrir el reemplazo completo del techo si hay daño por tormenta, granizo o viento. Solo pagas tu deducible. Nosotros evaluamos tu caso gratis.',
  },
  {
    q: '¿Qué pasa si mi techo no califica?',
    a: 'Si después de la inspección gratuita determinamos que tu techo no califica, no hay ningún costo ni obligación. Solo te informamos el resultado honestamente.',
  },
  {
    q: '¿Cuánto tiempo toma el proceso?',
    a: 'Desde la inspección hasta el techo nuevo generalmente toma entre 2 y 6 semanas, dependiendo de la respuesta de tu aseguradora. Nosotros manejamos todo.',
  },
  {
    q: '¿Necesito hablar con mi aseguradora?',
    a: 'No necesariamente. Nuestro equipo puede hablar directamente con tu aseguradora en tu nombre, manejando toda la documentación y el proceso de reclamación.',
  },
  {
    q: '¿Trabajan en todo Connecticut?',
    a: 'Sí, atendemos todas las ciudades y condados de Connecticut, incluyendo Bridgeport, New Haven, Hartford, Stamford, Waterbury y más.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Completa el simulador',
    desc: 'Responde 3 preguntas rápidas para ver si tu propiedad califica. Solo toma 2 minutos.',
    icon: '📋',
  },
  {
    step: '02',
    title: 'Inspección gratuita',
    desc: 'Un experto visita tu propiedad, evalúa el techo y documenta todo para la reclamación.',
    icon: '🔍',
  },
  {
    step: '03',
    title: 'Techo nuevo sin estrés',
    desc: 'Manejamos todo con tu aseguradora. Tú solo pagas el deducible. Garantía de 10 años.',
    icon: '🏠',
  },
]

export const WHY_FEATURES = [
  { icon: '🗣️', title: 'Hablamos tu idioma', desc: 'Todo el proceso en español, sin complicaciones ni letra pequeña.' },
  { icon: '🤝', title: 'Sin costo inicial', desc: 'La inspección y el proceso de reclamación son completamente gratuitos.' },
  { icon: '📋', title: 'Manejamos todo el papeleo', desc: 'Nosotros lidiamos con la aseguradora — tú no tienes que hacer nada.' },
  { icon: '⚡', title: 'Respuesta en 24 horas', desc: 'Un experto te llama el mismo día o al siguiente. Sin esperas.' },
  { icon: '🛡️', title: 'Garantía de 10 años', desc: 'Todos nuestros trabajos vienen con garantía de materiales y mano de obra.' },
  { icon: '⭐', title: 'Calificación 4.9 estrellas', desc: 'Cientos de familias en CT satisfechas con nuestro trabajo.' },
]
