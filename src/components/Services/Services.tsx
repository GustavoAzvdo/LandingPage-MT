import { CheckroomRounded, LocalMallRounded, BuildRounded, StarRounded, AgricultureRounded, SupportAgentRounded, HandshakeRounded } from '@mui/icons-material';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import images from '../../../public/ims.webp'
const services = [
    {
        icon: <CheckroomRounded sx={{ fontSize: 48, color: "#1b4350" }} />,
        title: "Roupas Country",
        description: "Camisas, camisetas, calças, bodys e acessórios autênticos para homens e mulheres",
    },
    {
        icon: <LocalMallRounded sx={{ fontSize: 48, color: "#1b4350" }} />,
        title: "Calçados",
        description: "Botinas e texanas 100% couro das melhores marcas do mercado!",
    },
    {
        icon: <BuildRounded sx={{ fontSize: 48, color: "#1b4350" }} />,
        title: "Acessórios",
        description: "Chapéus, cintos, fivelas e todos os acessórios para você!",
    },
    {
        icon: <StarRounded sx={{ fontSize: 48, color: "#1b4350" }} />,
        title: "Produtos Premium",
        description: "Linha exclusiva com produtos de alta qualidade e acabamento diferenciado",
    },
    {
        icon: <AgricultureRounded sx={{ fontSize: 48, color: "#1b4350" }} />,
        title: "Arriata",
        description: "Todo acessório que o seu animal precisa se encontra em um só lugar!",
    },
    {
        icon: <SupportAgentRounded sx={{ fontSize: 48, color: "#1b4350" }} />,
        title: "Atendimento Personalizado",
        description: "Nossa equipe de vendedores te ajuda a encontrar o produto ideal!",
    },
]

const Services = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'white' }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h2" component="h2" gutterBottom sx={{ color: "#1b4350", fontWeight: 700 }}>
                        O que oferecemos?
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#1b4350", opacity: 0.8, maxWidth: 600, mx: "auto" }}>
                        Produtos e serviços de qualidade para o verdadeiro estilo country
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid size={{ xs: 12, sm: 12, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    backgroundColor: "#e6f0f2",
                                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: "0 12px 40px rgba(27, 67, 80, 0.2)",
                                    },
                                }}
                            >
                                <CardContent sx={{ textAlign: "center", p: 4 }}>
                                    <Box sx={{ mb: 3 }}>{service.icon}</Box>
                                    <Typography variant="h6" gutterBottom sx={{ color: "#1b4350", fontWeight: 600, mb: 2 }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#1b4350", opacity: 0.8, lineHeight: 1.6 }}>
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ textAlign: "center", mt: 8 }}>
                    <Box
                        sx={{
                            backgroundColor: "#1b4350",
                            color: "white",
                            p: 6,
                            borderRadius: 3,
                            backgroundImage: `url(${images})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(27, 67, 80, 0.9)",
                                borderRadius: 3,
                            }}
                        />
                        <Box sx={{ position: "relative", zIndex: 1 }}>
                            <HandshakeRounded sx={{ fontSize: 48, color: "white" }}/>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                                Tradição & Confiança 
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
                                Oferecendo os melhores produtos country da região! 
                            </Typography>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", opacity: 0.8 }}>
                                Nossa experiência e paixão pelo estilo country nos permite oferecer sempre os melhores produtos, com
                                qualidade garantida e atendimento que faz a diferença.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Services