import { Box, Container, Grid } from '@mui/material'
import { testimonials } from '../../data/testimonials'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { TestimonialCard } from '../TestimonialCard/TestimonialCard'
export function TestimonialsSection() { return <Box component="section" sx={{ py: { xs: 8, md: 11 } }}><Container><SectionTitle eyebrow="VOCES CEYGE" title="Historias que pronto podrán inspirar a otras personas." description="Sección preparada para testimonios reales. Por ahora, los contenidos mostrados son ejemplos y no corresponden a estudiantes reales." align="center" /><Grid container spacing={2.5} sx={{ mt: { xs: 4.5, md: 6 } }}>{testimonials.map((item, index) => <Grid item xs={12} md={4} key={`${item.name}-${index}`}><TestimonialCard testimonial={item} /></Grid>)}</Grid></Container></Box> }
