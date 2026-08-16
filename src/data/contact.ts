export interface ScheduleItem { days: string; hours: string }

export const contactInfo = {
  institution: 'CEYGE',
  fullName: 'Centro de Estudios y Gestorías Educativas',
  phoneDisplay: '+52 624 105 1015',
  phoneHref: 'tel:+526241051015',
  email: 'ceygeedu@gmail.com',
  emailHref: 'mailto:ceygeedu@gmail.com',
  address: 'Blvd. Hidalgo, Buenos Aires, Local #18, Arcos del Sol II, C.P. 23474, Cabo San Lucas, Baja California Sur, México.',
  addressCompact: ['Blvd. Hidalgo, Local #18', 'Arcos del Sol II', 'Cabo San Lucas, B.C.S.'],
  mapsUrl: 'https://maps.app.goo.gl/Ycv8vMo2iwK61FaL9',
  whatsappUrl: 'https://wa.me/526241051015?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20la%20Preparatoria%20Abierta%20CEYGE.',
  facebookUrl: 'https://www.facebook.com/people/CEYGE-Preparatoria/61561073909579/?locale=es_LA',
  instagramUrl: 'https://www.instagram.com/ceyge_preparatoria.2020',
  instagramHandle: '@ceyge_preparatoria.2020',
} as const

export const schedule: ScheduleItem[] = [
  { days: 'Lunes a viernes', hours: '10:00 a.m. – 5:00 p.m.' },
  { days: 'Sábado', hours: '10:00 a.m. – 2:00 p.m.' },
  { days: 'Domingo', hours: 'Cerrado' },
]
