import { Box, Typography } from '@mui/material'
import type { ProcessStep as ProcessStepData } from '../../data/process'
export function ProcessStep({ step }: { step: ProcessStepData }) {
     return <Box sx={{ position: 'relative', flex: 1, minWidth: 0, pl: { xs: 4.5, md: 0 }, 
        textAlign: { xs: 'left', md: 'center' }, '&:before': { content: '""', display: { xs: 'block', md: 'none' }, 
        position: 'absolute', left: 7, top: 25, bottom: -31, borderLeft: '1px solid', borderColor: 'divider' }, 
        '&:last-child:before': { display: 'none' } }}>
            <Box sx={{ position: { xs: 'absolute', md: 'relative' }, left: { xs: 0 }, top: { xs: 0 }, width: 16, height: 16, borderRadius: '50%', bgcolor: 'secondary.main', border: '4px solid', borderColor: 'background.paper', boxShadow: '0 0 0 1px #2E6F95', mx: { md: 'auto' }, mb: { md: 2.25 } }} /><Typography sx={{ color: 'secondary.dark', fontFamily: 'Montserrat', fontSize: '.76rem', fontWeight: 700, letterSpacing: '.08em' }}>{step.number}</Typography><Typography variant="h4" sx={{ mt: .5, color: 'primary.main' }}>{step.title}</Typography></Box> }
