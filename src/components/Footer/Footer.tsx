import { Box, Container, Divider, IconButton, Typography } from '@mui/material'
import logoEscrita from '../../../public/logoEscrita.png'
import logoRemove from '../../../public/logoRemove.png'
import { FacebookRounded, Instagram } from '@mui/icons-material'

const Footer = () => {
    return (
        <Box sx={{ py: 10, bgcolor: '#1b4350' }}>
            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: {xs: 'space-around', sm: 'space-between', md: 'space-between'} }}>
                    <Box sx={{ width: '120px', display: 'flex', alignItems: 'center' }}>
                        <img src={logoRemove} alt="logoRemove" style={{ width: '50%' }} />
                        <img src={logoEscrita} alt="logoEscriat" style={{ width: '100%' }} />
                    </Box>       
                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 , color:'white'}}>
                            Siga-nos
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton
                                color="inherit"
                                href="https://instagram.com/mundaotraiado"
                                target="_blank"
                                sx={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            >
                                <Instagram sx={{color: 'white'}}/>
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="https://facebook.com/mundaotraiado"
                                target="_blank"
                                sx={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            >
                                <FacebookRounded sx={{color: 'white'}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ color: 'white' }} />
                <Box>

                </Box>
                <Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Footer