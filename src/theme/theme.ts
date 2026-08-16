import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: { main: '#183B56', light: '#EAF1F6', dark: '#102C41', contrastText: '#FFFFFF' },
    secondary: { main: '#2E6F95', light: '#EAF4F8', dark: '#245A7A', contrastText: '#FFFFFF' },
    success: { main: '#5FA8A8', light: '#EAF6F5', dark: '#477F7F' },
    warning: { main: '#E6A15C', light: '#FFF4E8', dark: '#B97636' },
    background: { default: '#F7F9FC', paper: '#FFFFFF' },
    text: { primary: '#1E293B', secondary: '#64748B' },
    divider: '#E2E8F0',
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: { fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: 'clamp(2.65rem, 5vw, 4.7rem)', lineHeight: 1.08, letterSpacing: '-0.045em' },
    h2: { fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 3.5vw, 3.15rem)', lineHeight: 1.17, letterSpacing: '-0.035em' },
    h3: { fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 650, fontSize: '1.22rem', lineHeight: 1.3, letterSpacing: '-0.02em' },
    h4: { fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 650, fontSize: '1.05rem', lineHeight: 1.35 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontSize: '.9rem', lineHeight: 1.6 },
    button: { fontFamily: 'Inter, Arial, sans-serif', textTransform: 'none', fontWeight: 700, fontSize: '.92rem' },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10, minHeight: 46, padding: '10px 20px', transition: 'transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease' },
        contained: { boxShadow: '0 8px 18px rgba(24, 59, 86, .14)', '&:hover': { transform: 'translateY(-1px)', boxShadow: '0 11px 24px rgba(24, 59, 86, .18)' } },
        outlined: { borderWidth: 1.5, '&:hover': { borderWidth: 1.5, transform: 'translateY(-1px)' } },
      },
    },
    MuiContainer: { defaultProps: { maxWidth: 'lg' }, styleOverrides: { root: { paddingLeft: 24, paddingRight: 24 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 16 } } },
    MuiAccordion: { styleOverrides: { root: { borderRadius: '12px !important', overflow: 'hidden' } } },
    MuiCssBaseline: { styleOverrides: { '*:focus-visible': { outline: '3px solid #5FA8A8', outlineOffset: 3 }, '::selection': { backgroundColor: '#D5ECEC', color: '#183B56' } } },
  },
})
