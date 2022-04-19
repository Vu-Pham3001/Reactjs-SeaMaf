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
import { Link, useLocation } from "react-router-dom";
import { Fragment, useState } from "react";
import { Button } from "@mui/material";
import { Typography, MenuItem, Menu } from "@mui/material";
import './header.css';

const styleNavLink = {color: '#fff', textDecoration:'none'}

export default function HeaderBot() {
    const location = useLocation()

    const token = localStorage.getItem('token')

    const user = JSON.parse(localStorage.getItem('user'))

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUser = (event) => {
        setAnchorElUser(event.currentTarget);
    }

    const handleCloseUser = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    return(
        <AppBar position="static"
            sx={{display: {backgroundColor: '#282828',}}}
        >
            <Container>
                <Box>
                    <ul className="nav-link">
                        <li>
                            <Link to='/' style={styleNavLink}>Home</Link>
                        </li>
                        <li>
                            <Link to='/shop' style={styleNavLink}>Our Shop</Link>
                        </li>
                        <li>
                            <Link to='#' style={styleNavLink}>On Sale</Link>
                        </li>
                        <li>
                            <Link to='#' style={styleNavLink}>Our Services</Link>
                        </li>
                        <li>
                            <Link to='#' style={styleNavLink}>Blog</Link>
                        </li>
                        <li>
                            <Link to='#' style={styleNavLink}>Contact</Link>
                        </li>
                        {user ?
                            <li>
                                <Button
                                    sx={{color:'#fff'}}
                                    onClick={handleOpenUser}
                                >
                                    {user.name}
                                </Button>

                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUser}
                                >
                                    {user.is_admin === 1 ?
                                        <Link to='/admin' style={{textDecoration:'none'}}><Typography textAlign="center" color="#000">Profile</Typography></Link> :
                                        <Link to='/user' style={{textDecoration:'none'}}><Typography textAlign="center" color="#000">Profile</Typography></Link>
                                    }
                                    <MenuItem onClick={handleCloseUser}>
                                        <Typography textAlign="center" width="100%">Account</Typography>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseUser}>
                                        <Typography textAlign="center" width="100%">Dashboard</Typography>
                                    </MenuItem>

                                    <MenuItem onClick={handleLogout}>
                                        <Typography textAlign="center" >Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </li> :
                            <Fragment>
                                <li>
                                    <Link to='/login' style={styleNavLink} >Signin</Link>
                                </li>

                                <li>
                                    <Link to='/register' style={styleNavLink}>Signup</Link>
                                </li>
                            </Fragment>
                        }
                    </ul>
                </Box>
            </Container>
        </AppBar>
    );
}