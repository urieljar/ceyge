import { useState } from 'react'
import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar, useScrollTrigger } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import logoHorizontal from '../../assets/images/logo-ceyge-horizontal.png'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const elevated = useScrollTrigger({ disableHysteresis: true, threshold: 8 })
  const closeMenu = () => setOpen(false)

  return <AppBar position="sticky" elevation={0} color="inherit" sx={{ bgcolor: 'rgba(255,255,255,.94)', backdropFilter: 'blur(12px)', borderBottom: '1px solid', borderColor: elevated ? 'divider' : 'transparent', boxShadow: elevated ? '0 3px 16px rgba(24,59,86,.05)' : 'none', transition: 'box-shadow 180ms ease, border-color 180ms ease' }}>
    <Container>
      <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 80 }, justifyContent: 'space-between' }}>
        <Box component={Link} to="/" aria-label="CEYGE, ir al inicio" sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Box component="img" src={logoHorizontal} alt="CEYGE - Centro de Estudios y Gestorías Educativas" sx={{ display: 'block', width: { xs: 142, sm: 176 }, height: { xs: 48, sm: 58 }, objectFit: 'contain', objectPosition: 'left center' }} />
        </Box>
        <Box component="nav" aria-label="Navegación principal" sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: .25 }}>
          {navigation.map((item) => <Button key={item.href} component={Link} to={item.href} color="inherit" sx={{ minHeight: 40, px: 1, color: location.pathname === item.href ? 'primary.main' : 'text.secondary', fontSize: '.78rem', '&:hover': { color: 'primary.main', bgcolor: 'primary.light' } }}>{item.label}</Button>)}
          <Button component={Link} to="/contacto" variant="contained" sx={{ ml: 1.25, px: 2 }}>Solicitar información</Button>
        </Box>
        <IconButton onClick={() => setOpen(true)} aria-label="Abrir menú de navegación" sx={{ display: { xs: 'inline-flex', lg: 'none' }, color: 'primary.main', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}><MenuIcon /></IconButton>
      </Toolbar>
    </Container>
    <Drawer anchor="right" open={open} onClose={closeMenu} PaperProps={{ sx: { width: 'min(86vw, 344px)', p: 2.5 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 2 }}><Box component="img" src={logoHorizontal} alt="CEYGE - Centro de Estudios y Gestorías Educativas" sx={{ width: 172, height: 56, objectFit: 'contain', objectPosition: 'left center' }} /><IconButton onClick={closeMenu} aria-label="Cerrar menú de navegación"><CloseIcon /></IconButton></Box>
      <Divider />
      <List component="nav" aria-label="Navegación móvil" sx={{ py: 2 }}>{navigation.map((item) => <ListItemButton key={item.href} component={Link} to={item.href} selected={location.pathname === item.href} onClick={closeMenu} sx={{ minHeight: 52, borderRadius: 2, mb: .4, '&.Mui-selected': { bgcolor: 'primary.light', color: 'primary.main' } }}><ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} /></ListItemButton>)}</List>
      <Button component={Link} to="/contacto" variant="contained" fullWidth onClick={closeMenu}>Solicitar información</Button>
    </Drawer>
  </AppBar>
}
