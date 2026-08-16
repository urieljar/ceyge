import { Box, Button, Container, Link, Stack, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { Link as RouterLink } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { contactInfo } from '../data/contact'
import { enrollmentCostNotice } from '../data/program'

export function Inscripcion() {
  return <><Header /><main><Container sx={{ py: { xs: 8, md: 12 } }}><Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 800, letterSpacing: '.14em' }}>INSCRIPCIÓN</Typography><Typography variant="h1" sx={{ mt: 2, maxWidth: 800, color: 'primary.main' }}>Comienza con una conversación.</Typography><Typography variant="body1" color="text.secondary" sx={{ mt: 3, maxWidth: 680 }}>Para iniciar tu proceso, comunícate directamente con CEYGE. Recibirás orientación sobre la modalidad, la documentación requerida y las fechas de inscripción disponibles.</Typography><Box sx={{ mt: 5, maxWidth: 700, p: { xs: 3, sm: 4 }, bgcolor: 'primary.light', border: '1px solid', borderColor: 'divider', borderRadius: 3 }}><Typography variant="h3" sx={{ color: 'primary.main' }}>Solicita orientación</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>{enrollmentCostNotice}</Typography><Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}><Button component="a" href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" variant="contained" startIcon={<WhatsAppIcon />}>Hablar por WhatsApp</Button><Button component="a" href={contactInfo.emailHref} variant="outlined" startIcon={<EmailOutlinedIcon />}>Enviar correo</Button></Stack><Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2.5 }}>Este sitio no recibe ni almacena documentos personales.</Typography></Box><Link component={RouterLink} to="/preparatoria-abierta" sx={{ display: 'inline-block', mt: 4 }}>Consultar modalidad y requisitos de inscripción</Link></Container></main><Footer /></>
}
