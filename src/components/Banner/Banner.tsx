import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import { StoreRounded, LocalShippingRounded, VerifiedRounded, SearchRounded, CallRounded } from '@mui/icons-material';

import banner from '../../../public/banner.jpg'

const infos = [
    { id: 1, icone: <StoreRounded fontSize="large" />, titulo: 'Loja Fisica', subtitulo: 'Visite nossa loja e veja nossas novidades' },
    { id: 2, icone: <LocalShippingRounded fontSize="large" />, titulo: 'Entrega Rápida', subtitulo: 'Entregamos em toda a região com agilidade' },
    { id: 3, icone: <VerifiedRounded fontSize="large" />, titulo: 'Qualidade Garantida', subtitulo: 'Produtos originais das melhores marcas' },
]
const Banner = () => {
    return (
        <Box id='inicio'
            sx={{
                background: "linear-gradient(135deg, #0f242bff 0%, #2d5a68 100%)",
                color: "white",
                py: { xs: 12, md: 12 },

                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.1,
                }}
            />
            <Container>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <Typography
                            variant="h1"
                            component="h1"
                            gutterBottom
                            sx={{
                                background: "linear-gradient(45deg, #ffffff 30%, #e6f0f2 90%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                mb: 3,
                            }}
                        >
                            Bem-vindo à Mundão Traiado
                        </Typography>
                        <Typography variant="h5" component="p" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}>
                            Sua loja especializada em moda country. Encontre os melhores produtos para o seu estilo de vida
                            autêntico.
                        </Typography>
                        <Box gap={2} display='flex'>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: "#e6f0f2",
                                    color: "#1b4350",
                                    "&:hover": {
                                        backgroundColor: "#d0e7ea",
                                    },
                                    px: 4,
                                    py: 1.5,
                                }}
                                endIcon= {<SearchRounded/>}
                            >
                                Conheça nossos produtos
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: "#e6f0f2",
                                    color: "#e6f0f2",
                                    "&:hover": {
                                        borderColor: "#ffffff",
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                    },
                                    px: 4,
                                    py: 1.5,
                                }}
                                endIcon={<CallRounded/>}
                            >
                                Entre em contato
                            </Button>
                        </Box>
                        <Stack direction='column' sx={{mt: 5}} gap={2}>
                            {infos.map((info) => (

                                <Box key={info.id} sx={{ display: 'flex', alignItems: 'center',  }} gap={2} >
                                    <Box>
                                        {info.icone}
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                            {info.titulo}
                                        </Typography>
                                         <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                            {info.subtitulo}
                                        </Typography>
                                    </Box>
                                </Box>


                            ))}
                        </Stack>
                    </Grid>

                </Grid>
            </Container>

        </Box>
    )
}

export default Banner