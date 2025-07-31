import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import { HistoryEduRounded, PeopleRounded, TimelineRounded, TrendingUpRounded } from '@mui/icons-material';

const valores = [
    { id: 1, titulo: 'Anos de Historia', numero: '10+' },
    { id: 2, titulo: 'Clientes satisfeitos', numero: '5000+' },
    { id: 3, titulo: 'Marcas Parceiras', numero: '50+' }
]

const storytelling = [
    { id: 1, icone: <TimelineRounded sx={{ fontSize: 48, color: "#1b4350", mb: 2 }} />, comeco: '2013 - Começo', descricao: 'Inicio da jornada' },
    { id: 2, icone:  <TrendingUpRounded sx={{ fontSize: 48, color: "#1b4350", mb: 2 }} />, comeco: '2018 - Expansão', descricao: 'Ampliação da loja' },
    { id: 3, icone:  <PeopleRounded sx={{ fontSize: 48, color: "#1b4350", mb: 2 }} />, comeco: '2025 - Hoje', descricao: 'Referencia Regional' }
]

const History = () => {
    return (
        <Box sx={{ bgcolor: '#e6f0f2' }}>
            <Container>
                <Box sx={{ textAlign: "center", py: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h2" component="h2" gutterBottom sx={{ pt: 1, color: "#1b4350", fontWeight: 700 }}>
                            Nossa História
                        </Typography>
                        <HistoryEduRounded sx={{ color: "#1b4350", pl: 1 }} fontSize='large' />
                    </Box>
                    <Typography variant="h6" sx={{ color: "#1b4350", opacity: 0.8, maxWidth: 600, mx: "auto" }}>
                        Conheça como começamos e como chegamos até hoje
                    </Typography>
                </Box>
                <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'start' }, my: 6 }}>

                    <Typography variant="h2" component="h2" gutterBottom sx={{ pt: 1, color: "#1b4350", fontWeight: 700 }}>
                        Como começou?
                    </Typography>


                </Box>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <Typography variant="h6" sx={{ color: "#1b4350", opacity: 0.8, mx: "auto" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia voluptas voluptatibus obcaecati, molestiae magni esse doloremque, dignissimos odit corrupti tenetur soluta minus. Itaque laudantium doloremque rem, debitis adipisci repellat asperiores et, aperiam ducimus porro dignissimos assumenda, excepturi voluptatibus! Aut non doloremque vero unde esse soluta, illo quas atque sit.
                        </Typography>

                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <Typography variant="h6" sx={{ color: "#1b4350", opacity: 0.8, mx: "auto" }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro, impedit eligendi laudantium explicabo rem magnam inventore neque!
                        </Typography>

                    </Grid>

                </Grid>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ py: 4 }}>
                    <Stack direction='row' gap={5}>
                        {valores.map((valor) => (
                            <Box key={valor.id} textAlign={'center'}>
                                <Typography variant="h4" sx={{ color: "#1b4350", fontWeight: 700 }}>
                                    {valor.numero}
                                </Typography>
                                <Typography variant="body1" sx={{ color: "#1b4350", opacity: 0.8 }}>
                                    {valor.titulo}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
                <Grid container spacing={2} sx={{ py: 3 }}>
                    {storytelling.map((story) => (
                        <Grid key={story.id} size={{xs: 12, sm: 12, md: 4}} sx={{mb: 3}}>
                            <Card sx={{ height: "100%", backgroundColor: "white" }}>
                                <CardContent sx={{ textAlign: "center", p: 4 }}>
                                        {story.icone}
                                    <Typography variant="h6" gutterBottom sx={{ color: "#1b4350", fontWeight: 600 }}>
                                        {story.comeco}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#1b4350", opacity: 0.8 }}>
                                        {story.descricao}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            

            </Container>
        </Box>

    )
}

export default History