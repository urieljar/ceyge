import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme/theme'
import { Home } from './pages/Home'
import { Preparatoria } from './pages/Preparatoria'
import { Nosotros } from './pages/Nosotros'
import { Inscripcion } from './pages/Inscripcion'
import { FAQ } from './pages/FAQ'
import { Contacto } from './pages/Contacto'
import { AvisoPrivacidad } from './pages/AvisoPrivacidad'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preparatoria-abierta" element={<Preparatoria />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/inscripcion" element={<Inscripcion />} />
          <Route path="/preguntas-frecuentes" element={<FAQ />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
