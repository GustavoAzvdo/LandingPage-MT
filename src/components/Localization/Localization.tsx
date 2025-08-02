import { MapRounded, AccessTimeRounded, DirectionsRounded, LocationOnRounded, PhoneRounded, PhoneAndroidRounded } from "@mui/icons-material"
import { Box, Card, CardContent, Chip, Container, Grid, Typography } from "@mui/material"

const Localization = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: "white" }} id='localizacao'>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h4" gutterBottom sx={{color: "#1b4350" ,fontWeight: 600 }}>
                            Visite Nossa Loja
                        </Typography>
                        <MapRounded sx={{ fontSize: 40, color: "#1b4350" , pb: 1, pl: 1}} />
                    </Box>
                    <Typography variant="h6" sx={{ color: "#1b4350", opacity: 0.8, maxWidth: 600, mx: "auto" }}>
                        Venha nos visitar e conheça nossa loja pessoalmente
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                        <Box
                            sx={{
                                height: 600,
                                //border: '2px solid black',
                                borderRadius: 3,
                                overflow: "hidden",
                                //</Grid>boxShadow: "0 8px 32px rgba(27, 67, 80, 0.2)",
                                position: "relative",
                            }}
                        >
                            <iframe
                                src={`https://www.google.com/maps?q=MundãoTraiado&output=embed`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: "url(/placeholder.svg?height=400&width=600&query=map+location+pin+street)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        backgroundColor: "#1b4350",
                                        color: "white",
                                        p: 2,
                                        borderRadius: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                                    }}
                                >

                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 3 }}>
                            <Card sx={{ backgroundColor: "#e6f0f2" }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                        <LocationOnRounded sx={{ color: "#1b4350", fontSize: 28 }} />
                                        <Typography variant="h6" sx={{ color: "#1b4350", fontWeight: 600 }}>
                                            Endereço
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ color: "#1b4350", mb: 1 }}>
                                        Rua Oliveira Braga, 238 / Centro
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#1b4350", mb: 2 }}>
                                        Aparecida - SP, 12575-038
                                    </Typography>
                                    <Chip
                                        icon={<DirectionsRounded sx={{ color: 'white !important' }} />}
                                        label="Como Chegar"
                                        clickable
                                        sx={{
                                            backgroundColor: "#1b4350",
                                            color: "white",
                                            "&:hover": {
                                                backgroundColor: "#2d5a68",
                                            },
                                        }}
                                    />
                                </CardContent>
                            </Card>

                            <Card sx={{ backgroundColor: "#e6f0f2" }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                        <AccessTimeRounded sx={{ color: "#1b4350", fontSize: 28 }} />
                                        <Typography variant="h6" sx={{ color: "#1b4350", fontWeight: 600 }}>
                                            Horário de Funcionamento
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography variant="body2" sx={{ color: "#1b4350" }}>
                                                Segunda a Sexta:
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "#1b4350", fontWeight: 600 }}>
                                                8h às 18h
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography variant="body2" sx={{ color: "#1b4350" }}>
                                                Sábado:
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "#1b4350", fontWeight: 600 }}>
                                                7h às 20h
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography variant="body2" sx={{ color: "#1b4350" }}>
                                                Domingo:
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "#1b4350", fontWeight: 600 }}>
                                                7h às 18h
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>

                            <Card sx={{ backgroundColor: "#e6f0f2" }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                        <PhoneRounded sx={{ color: "#1b4350", fontSize: 28 }} />
                                        <Typography variant="h6" sx={{ color: "#1b4350", fontWeight: 600 }}>
                                            Telefone
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <PhoneAndroidRounded sx={{ color: "#1b4350" }} />
                                        <Typography variant="body1" sx={{ color: "#1b4350", fontWeight: 600 }}>
                                            (12) 98169-2443
                                        </Typography>

                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                                        <PhoneRounded sx={{ color: "#1b4350" }} />
                                        <Typography variant="body1" sx={{ color: "#1b4350", fontWeight: 600 }}>
                                            (12) 3311-3436
                                        </Typography>

                                    </Box>
                                    <Typography variant="body2" sx={{ color: "#1b4350", opacity: 0.8, pt: 2 }}>
                                        Ligue para tirar dúvidas ou fazer pedidos
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Localization