import { Box, Chip, Container, Divider, IconButton, Typography } from '@mui/material'
import logoEscrita from '../../../public/logoEscrita.png'
import logoRemove from '../../../public/logoRemove.png'
import { FacebookRounded, GitHub, Instagram, LinkedIn } from '@mui/icons-material'

const Footer = () => {
    return (
        <Box sx={{ py: 6, bgcolor: '#1b4350' }}>
            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'space-around', sm: 'space-between', md: 'space-between' } }}>
                    <Box sx={{ width: '120px', display: 'flex', alignItems: 'center' }}>
                        <img src={logoRemove} alt="logoRemove" style={{ width: '50%' }} />
                        <img src={logoEscrita} alt="logoEscriat" style={{ width: '100%', paddingTop: '8px' }} />
                    </Box>
                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>
                            Siga-nos
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton
                                color="inherit"
                                href="https://instagram.com/mundaotraiado"
                                target="_blank"
                                sx={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            >
                                <Instagram sx={{ color: 'white' }} />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="https://facebook.com/mundaotraiado"
                                target="_blank"
                                sx={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            >
                                <FacebookRounded sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ bgcolor: 'white', opacity: '0.8', mt: 2 }} />
                <Box sx={{ mt: 1, pt: 2, textAlign: "center" }}>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                        © {new Date().getFullYear()} Mundão Traiado. Todos os direitos reservados.
                    </Typography>
                    <Box display='flex' alignItems='center' justifyContent='center'>

                        <Divider sx={{ mt: 2 }}>
                            <Chip label="Desenvolvido por: " size="small" sx={{ bgcolor: '#e6f0f2' }} />
                        </Divider>

                    </Box>
                    <Box sx={{mt: 2}}> 
                        <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                          Gustavo Azevedo
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: 2, mt: 1 }}>
                            <IconButton
                                color="inherit"
                                href="https://linkedin.com/in/gustavoazevedo23"
                                target="_blank"
                                sx={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            >
                                <LinkedIn fontSize='small' sx={{ color: 'white' }} />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="https://github.com/GustavoAzvdo"
                                target="_blank"
                                sx={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            >
                                <GitHub fontSize='small' sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>

                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer