export type AudienceIcon = 'resume' | 'work' | 'family' | 'target'
export interface Audience { title: string; description: string; icon: AudienceIcon }
export const audience: Audience[] = [
  { title: 'Si dejaste tus estudios', description: 'Retoma tu preparación y continúa desde donde te quedaste.', icon: 'resume' },
  { title: 'Si trabajas', description: 'Combina tus responsabilidades laborales con tus estudios.', icon: 'work' },
  { title: 'Si tienes familia', description: 'Avanza académicamente sin dejar de atender tus responsabilidades personales.', icon: 'family' },
  { title: 'Si buscas mejores oportunidades', description: 'Concluir la preparatoria puede abrir el camino hacia nuevas metas académicas y laborales.', icon: 'target' },
]
