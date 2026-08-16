import { Box, Container, Grid } from '@mui/material'
import { benefits } from '../../data/benefits'
import { BenefitCard } from '../BenefitCard/BenefitCard'
import { SectionTitle } from '../SectionTitle/SectionTitle'
export function BenefitsSection() { return <Box component="section" sx={{ py: { xs: 8, md: 11 } }}><Container><SectionTitle eyebrow="UNA ALTERNATIVA PENSADA PARA TI" title="Avanzar también es adaptar el camino." description="CEYGE busca que retomar la preparatoria se sienta posible, claro y compatible con tu vida actual." align="center" /><Grid container spacing={2.5} sx={{ mt: { xs: 4.5, md: 6 } }}>{benefits.map((benefit) => <Grid item key={benefit.title} xs={12} sm={6} md={3}><BenefitCard benefit={benefit} /></Grid>)}</Grid></Container></Box> }
