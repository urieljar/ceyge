export type BenefitIcon = 'schedule' | 'support' | 'adult' | 'growth'
export interface Benefit { title: string; description: string; icon: BenefitIcon }
export const benefits: Benefit[] = [
  { title: 'Flexibilidad', description: 'Continúa tus estudios desde casa mediante una modalidad adaptable a tus responsabilidades.', icon: 'schedule' },
  { title: 'Acompañamiento', description: 'Recibe orientación y asesorías durante tu proceso académico.', icon: 'support' },
  { title: 'Para mayores de edad', description: 'Una alternativa educativa dirigida a personas de 18 años en adelante.', icon: 'adult' },
  { title: 'Nuevas oportunidades', description: 'Avanza hacia nuevas metas académicas, personales y profesionales.', icon: 'growth' },
]
