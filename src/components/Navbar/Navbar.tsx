import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../public/logoRemove.png'
const pages = ['Inicio', 'Historia', 'Serviços', 'Marcas', 'Localização', 'Contato'];
const ids = ['inicio', 'historia', 'servicos', 'marcas', 'localizacao', 'contato'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <AppBar position='sticky'>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box display='flex' alignItems='center'>
                        <Box sx={{ width: '40px', height: '40px', mr: 1 }}>
                            <img src={logo} alt="logo" style={{ width: '100%' }} />
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                //   fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Mundão Traiado
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem
                                        key={page}
                                        onClick={() => {
                                            handleCloseNavMenu();
                                            document.getElementById(ids[index])?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>


                        <Box gap={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, index) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    href={`#${ids[index]}`}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        px: 2,
                                        borderBottom: '2px solid transparent', // borda padrão transparente
                                        transition: 'border-bottom-color 0.2s',
                                        '&:hover': {
                                            borderRadius: '0px',
                                            borderBottom: '2px solid #88a6ac', // cor da borda ao hover
                                            color: 'white', // mantém a cor do texto
                                        },
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>


                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
