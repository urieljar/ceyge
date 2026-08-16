import { Box, Container, Divider, Typography } from '@mui/material'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { InstitutionSection } from '../components/InstitutionSection/InstitutionSection'

export function Nosotros() {
  return <><Header /><main><Box sx={{ py: { xs: 8, md: 12 } }}><Container><Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 800, letterSpacing: '.14em' }}>NOSOTROS</Typography><Typography variant="h1" sx={{ mt: 2, maxWidth: 800, color: 'primary.main' }}>Creemos en las oportunidades que vuelven a comenzar.</Typography><Divider sx={{ my: 5 }} /><Typography variant="h3" sx={{ color: 'primary.main' }}>Dirección institucional</Typography><Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>Lic. Norberto Palomeque, director de CEYGE.</Typography></Container></Box><InstitutionSection /></main><Footer /></>
}
