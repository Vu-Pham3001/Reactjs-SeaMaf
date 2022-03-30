// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import styled from '@emotion/styled';
// import { useState } from 'react';

// const pages = ['Home', 'Our Shop', 'On Sale', 'Our Services', 'Blog', 'Contact', 'Signin', 'Signup'];

// const HeaderBot = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };


//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };



//   return (
//     <AppBar position="static"
//         sx={{display: {backgroundColor: 'black',}}}
//     >
//         <Container maxWidth="xl">
//             <Toolbar disableGutters>
//                 <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                     <IconButton
//                         size="large"
//                         aria-label="account of current user"
//                         aria-controls="menu-appbar"
//                         aria-haspopup="true"
//                         onClick={handleOpenNavMenu}
//                         color="inherit"
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Menu
//                         id="menu-appbar"
//                         anchorEl={anchorElNav}
//                         anchorOrigin={{
//                             vertical: 'bottom',
//                             horizontal: 'left',
//                         }}
//                         keepMounted
//                         transformOrigin={{
//                             vertical: 'top',
//                             horizontal: 'left',
//                         }}
//                         open={Boolean(anchorElNav)}
//                         onClose={handleCloseNavMenu}
//                         sx={{
//                             display: { xs:  'block', md: 'none' },
//                         }}
//                         >
//                         {pages.map((page) => (
//                             <MenuItem key={page} onClick={handleCloseNavMenu}>
//                             <Typography textAlign="center">{page}</Typography>
//                             </MenuItem>
//                         ))}
//                     </Menu>
//                 </Box>
//                 <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'space-around', alignItems: 'center' } }}>
//                     {pages.map((page) => (
//                     <Button
//                         key={page}
//                         onClick={handleCloseNavMenu}
//                         sx={{ my: 2, color: 'white', display: 'block', '&:hover': { color: 'red' }  }}
//                     >
//                     {page}
//                     </Button>
//                     ))}
//                 </Box>
//             </Toolbar>
//         </Container>
//     </AppBar>
//   );
// };
// export default HeaderBot;

import React from "react";
import { AppBar, Container } from "@mui/material";
import { Box } from "@mui/system";
import './header.css';

const styleNavLink = {color: '#fff', textDecoration:'none', }

export default function HeaderBot() {
    return(
        <AppBar position="static"
            sx={{display: {backgroundColor: '#282828',}}}
        >
            <Container>
                <Box>
                    <ul className="nav-link">
                        <li>
                            <a href="/" style={styleNavLink}>Home</a>
                        </li>
                        <li>
                            <a href="#" style={styleNavLink}>Our Shop</a>
                        </li>
                        <li>
                            <a href="#" style={styleNavLink}>On Sale</a>
                        </li>
                        <li>
                            <a href="#" style={styleNavLink}>Our Services</a>
                        </li>
                        <li>
                            <a href="#" style={styleNavLink}>Blog</a>
                        </li>
                        <li>
                            <a href="#" style={styleNavLink}>Contact</a>
                        </li>
                        <li>
                            <a href="/login" style={styleNavLink}>Signin</a>
                        </li>
                        <li>
                            <a href="/register" style={styleNavLink}>Signup</a>
                        </li>
                    </ul>
                </Box>
            </Container>
        </AppBar>
    );
}