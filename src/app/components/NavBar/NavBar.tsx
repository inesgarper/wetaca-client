import { useContext, useState } from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import { AuthContext } from '../../contexts/auth.context';
import { NavLink } from 'react-router-dom'
import { userPages, adminPages } from './assets';
import { CartContext } from '../../contexts/cart.context';


const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    };

    const { user, isLoggedIn, logOutUser } = useContext(AuthContext)
    const { setOrder } = useContext(CartContext)

    const isAdmin = user?.role === 'ADMIN'

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* PC */}
                    {/* LOGO */}
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <NavLink to='/'>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'HELVETICA',
                                fontWeight: 700,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            wetaca
                        </Typography>
                    </NavLink>


                    {/* MENU */}
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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {!isAdmin && userPages.map((page) => (
                                <NavLink to={page.nav}>
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                </NavLink>
                            ))}
                            {isAdmin && adminPages.map((page) => (
                                <NavLink to={page.nav}>
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>


                    {/* MOBILE */}
                    {/* LOGO */}
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <NavLink to='/'>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'Exo 2',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            wetaca
                        </Typography>
                    </NavLink>

                    {/* MENU */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {!isAdmin && userPages.map((page) => (
                            <NavLink to={page.nav}>
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            </NavLink>
                        ))}
                        {isAdmin && adminPages.map((page) => (
                            <NavLink to={page.nav}>
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>

                    {/* MI PERFIL */}
                    <Box sx={{ flexGrow: 0 }}>
                        {!isLoggedIn && <>
                            <NavLink to='/registro'>
                                <Button variant="text" sx={{ my: 2, color: 'white' }}>Registro</Button>
                            </NavLink>

                            <NavLink to='/login'>
                                <Button variant="text" sx={{ my: 2, color: 'white' }}>Log In</Button>
                            </NavLink>
                        </>}
                        {isLoggedIn && <Button sx={{ my: 2, color: 'white' }} onClick={() => {
                            logOutUser()
                            setOrder(null)
                        }}>Cerrar sesión</Button>}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default NavBar;
