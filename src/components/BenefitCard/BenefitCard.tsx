import { Box, Card, CardContent, Typography } from '@mui/material'
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import type { Benefit } from '../../data/benefits'
const icons = { schedule: ScheduleOutlinedIcon, support: SupportAgentOutlinedIcon, adult: PersonOutlineIcon, growth: TrendingUpOutlinedIcon }
export function BenefitCard({ benefit }: { benefit: Benefit }) { const Icon = icons[benefit.icon]; return <Card variant="outlined" sx={{ height: '100%', bgcolor: 'background.paper', borderColor: 'divider', boxShadow: 'none', transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 14px 28px rgba(24,59,86,.08)', borderColor: 'secondary.main' } }}><CardContent sx={{ p: { xs: 3, md: 3.25 } }}><Box sx={{ width: 44, height: 44, display: 'grid', placeItems: 'center', bgcolor: 'primary.light', color: 'secondary.dark', borderRadius: 2 }}><Icon fontSize="small" /></Box><Typography variant="h3" sx={{ mt: 3 }}>{benefit.title}</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: 1.1 }}>{benefit.description}</Typography></CardContent></Card> }
