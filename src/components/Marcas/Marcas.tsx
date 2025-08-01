import { Box, Container, Typography } from '@mui/material'


const Marcas = () => {
    return (

        <Box sx={{ py: 8, bgcolor: '#e6f0f2' }} id='marcas'>
            <Container>

                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" component="h2" gutterBottom sx={{ color: "#1b4350", fontWeight: 700 }}>
                        Marcas parceiras
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#1b4350", opacity: 0.8, maxWidth: 600, mx: "auto" }}>
                        Trabalhamos com as melhores marcas do mercado country
                    </Typography>
                </Box>
                <Box style={{ height: '150px',position: 'relative' }}>
                  {/* carrosel de marcas */}
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body1" sx={{ color: "#1b4350", opacity: 0.8, maxWidth: 800, mx: "auto" }}>
                        Todas as marcas que trabalhamos são cuidadosamente selecionadas para garantir a melhor qualidade e
                        autenticidade dos produtos country. Nosso compromisso é oferecer apenas o que há de melhor no mercado.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Marcas