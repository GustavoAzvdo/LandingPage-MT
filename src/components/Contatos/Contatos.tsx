import { Email, Instagram, LocationOnRounded, WhatsApp, StorefrontRounded } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Container, Grid, IconButton, Typography } from '@mui/material'


const Contatos = () => {
    const contactMethods = [
        {
            icon: <WhatsApp sx={{ fontSize: 48, color: "#25D366" }} />,
            title: "WhatsApp",
            description: "Fale conosco pelo WhatsApp",
            contact: "(12) 98169-2443",
            action: "Enviar mensagem",
            link: "https://wa.me/5512981692443",
            color: "#25D366",
        },
        {
            icon: <Email sx={{ fontSize: 48, color: "#1b4350" }} />,
            title: "E-mail",
            description: "Envie sua mensagem por e-mail",
            contact: "falecom@mundaotraiado.com.br",
            action: "Enviar e-mail",
            link: "mailto:falecom@mundaotraiado.com.br",
            color: "#1b4350",
        },
        {
            icon: <Instagram sx={{ fontSize: 48, color: "#E4405F" }} />,
            title: "Instagram",
            description: "Siga-nos no Instagram",
            contact: "@mundaotraiado",
            action: "Seguir",
            link: "https://instagram.com/mundaotraiado",
            color: "#E4405F",
        },
    ]
    return (
        <Box sx={{ py: 8, backgroundColor: "#e6f0f2" }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography variant="h2" component="h2" gutterBottom sx={{ color: "#1b4350", fontWeight: 700 }}>
                        Entre em Contato
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#1b4350", opacity: 0.8, maxWidth: 600, mx: "auto" }}>
                        Estamos sempre prontos para atendê-lo da melhor forma
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {contactMethods.map((method, index) => (
                        <Grid size={{ xs: 12, sm: 12, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    backgroundColor: "white",
                                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: "0 12px 40px rgba(27, 67, 80, 0.2)",
                                    },
                                }}
                            >
                                <CardContent sx={{ textAlign: "center", p: 4 }}>
                                    <Box sx={{ mb: 3 }}>{method.icon}</Box>
                                    <Typography variant="h6" gutterBottom sx={{ color: "#1b4350", fontWeight: 600, mb: 2 }}>
                                        {method.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#1b4350", opacity: 0.8, mb: 2 }}>
                                        {method.description}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: method.color, fontWeight: 600, mb: 3 }}>
                                        {method.contact}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        href={method.link}
                                        target="_blank"
                                        sx={{
                                            backgroundColor: method.color,
                                            "&:hover": {
                                                backgroundColor: method.color,
                                                opacity: 0.9,
                                            },
                                        }}
                                    >
                                        {method.action}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    <Grid size={{ xs: 12, sm: 12, md: 12 }} >
                        <Card
                            sx={{
                                color: "#1b4350",
                                height: "100%",
                                backgroundColor: "white",
                                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: "0 12px 40px rgba(27, 67, 80, 0.2)",
                                },
                            }}
                        >
                            <CardContent sx={{ textAlign: "center", p: 4 }}>
                                <Box sx={{py: 2}}>
                                    <StorefrontRounded sx={{color: "#1b4350"}} fontSize='large'/>
                                    <Typography variant="h6" gutterBottom sx={{ color:' #1b4350', fontWeight: 600, mb: 2 }}>
                                        Loja Online & Marketplace em breve
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>


                <Box
                    sx={{
                        backgroundColor: "#1b4350",
                        color: "white",
                        p: 6,
                        borderRadius: 3,
                        textAlign: "center",
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
                            backgroundImage: "url(/placeholder.svg?height=300&width=1200&query=country+western+pattern+subtle)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            opacity: 0.1,
                        }}
                    />
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                            Visite Nossa Loja!
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, maxWidth: 600, mx: "auto" }}>
                            Venha conhecer pessoalmente nossos produtos e receba atendimento especializado. Estamos prontos
                            para ajudar você a encontrar tudo o que precisa.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<LocationOnRounded />}
                                sx={{
                                    backgroundColor: "#e6f0f2",
                                    color: "#1b4350",
                                    "&:hover": {
                                        backgroundColor: "#d0e7ea",
                                    },
                                    px: 4,
                                    py: 1.5,
                                }}
                                href="#localizacao"
                            >
                                Ver Localização
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<WhatsApp />}
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
                                href="https://wa.me/5512981692443"
                                target="_blank"
                            >
                                Falar no WhatsApp
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        position: "fixed",
                        bottom: 20,
                        right: 20,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        zIndex: 1000,
                    }}
                >
                    <IconButton
                        href="https://wa.me/5512981692443"
                        target="_blank"
                        sx={{
                            backgroundColor: "#25D366",
                            color: "white",
                            width: 56,
                            height: 56,
                            "&:hover": {
                                backgroundColor: "#128C7E",
                                transform: "scale(1.1)",
                            },
                            transition: "all 0.3s ease-in-out",
                            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
                        }}
                    >
                        <WhatsApp />
                    </IconButton>
                    <IconButton
                        href="https://instagram.com/mundaotraiado"
                        target="_blank"
                        sx={{
                            backgroundColor: "#E4405F",
                            color: "white",
                            width: 56,
                            height: 56,
                            "&:hover": {
                                backgroundColor: "#C13584",
                                transform: "scale(1.1)",
                            },
                            transition: "all 0.3s ease-in-out",
                            boxShadow: "0 4px 20px rgba(228, 64, 95, 0.4)",
                        }}
                    >
                        <Instagram />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    )
}

export default Contatos