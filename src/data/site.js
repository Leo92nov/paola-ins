// EDITÁ ESTE ARCHIVO PARA PERSONALIZAR TU LANDING.
// Los tratamientos, testimonios y datos de contacto son ejemplos: reemplazalos con información confirmada.
import logo from '../components/loto.png'

export const site = {
  logo: logo,
  brand: 'PAOLA INS',
  subtitle: 'ESTÉTICA INTEGRAL',
  instagram: 'https://www.instagram.com/esteticapaolains/',
  whatsapp: 'https://w.app/paola-ins',
  facebook: 'https://www.facebook.com/Paolainss/',
  email: ' ', // Correo real del emprendimiento
  address: 'Blanco Encalada 175, Mar de Ajó',
  eyebrow: 'BELLEZA · BIENESTAR · ARMONÍA',
  headline: 'Tu bienestar, nuestra inspiración.',
  description: 'Un espacio pensado para vos, donde el cuidado personal se convierte en un momento para reconectar con tu mejor versión.',
  about: 'En Paola Ins Estética Integral, creemos que la belleza es una expresión de bienestar. Nuestro enfoque combina tecnología de vanguardia, conocimiento profesional y un trato humano que prioriza tu comodidad y seguridad.\n\nCada tratamiento es personalizado: analizamos tu piel, tus objetivos y tus tiempos, para diseñar una experiencia única que potencie tu belleza natural. Con más de 6 años de trayectoria y un equipo en constante formación, nos especializamos en brindar resultados visibles, armoniosos y duraderos, en un espacio pensado para que disfrutes, te relajes y te sientas mejor que nunca.\n\nCiencia, estética y bienestar se unen en un mismo lugar: donde cada detalle está pensado para vos.',
  heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
  aboutImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
  services: [
    { number: '', lugar: 'Para tu piel', title: 'Cuidado facial', description: 'Tratamientos faciales de rejuvenecimiento y revitalización: estimulación de colágeno, lifting no invasivo, peelings y mucho más.', image: '/facial.webp' },
    { number: '', lugar: 'Para tu expresión', title: 'Diseño de cejas', description: 'Diseño de cejas, delineado de ojos y boca personalizado con técnicas de pigmentación estética.', image: '/cejas.webp' },
    { number: '', lugar: 'Para tu mirada', title: 'Extensión de pestañas', description: 'Extensiones de pestañas, perfilado, lifting, laminado de cejas', image: '/pestanas.webp' },
    { number: '', lugar: 'Para tu cuerpo', title: 'Aparatología', description: 'Tecnología estética avanzada para tonificar y modelar el cuerpo, sin procedimientos invasivos.', image: '/aparato.webp' },
    { number: '', lugar: 'Para vos', title: 'Depilación definitiva', description: 'Depilación definitiva para sentirte vos todo el año.', image: '/depilacion.webp' },
    { number: '', lugar: 'Para tu cara', title: 'Labios y bioestimuladores', description: 'Tratamientos faciales y de labios con bioestimulación natural para mejorar volumen, firmeza y luminosidad, sin procedimientos invasivos.', image: '/labios.webp' },


  ],
  servicios: 'https://www.whatsapp.com/catalog/5492257415589'
}
export function whatsappLink(message = 'Hola, quisiera consultar por un turno en Paola Ins.') {
  return site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}` : '#contacto'
}

export const test = {
  
}
