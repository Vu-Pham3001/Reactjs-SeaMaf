import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: '#ccc',

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    color : '#000',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '350px',
        },
    },
}));

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const [age, setAge] = React.useState('');

    const [key, setKey] = React.useState([]);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    React.useEffect(() => {
        axios.get('http://localhost:8000/api/admin/listmenu')
            .then(res=>setKey(res.data))
    },[])

    const param = useParams()

    const user = JSON.parse(localStorage.getItem('user'))

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <FavoriteBorderIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <ShoppingBagOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor: '#fff'}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', color: '#000', fontSize: '24px', marginLeft: '5%', marginRight: '5%', } }}
                    >
                        RVM SeaMaf
                    </Typography>
                    <Search>
                        <Autocomplete
                            id="combo-box-demo"
                            options={key}
                            getOptionLabel={(option) => option.name}
                            style={{ width: 500 }}
                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder='Search onRVM SeaMaf ...'/>}
                            renderOption={(props, option) => {
                                return ([<div key={option.id} className="link-search"><Link style={{width:'100%', color:'#000', textDecoration:'none'}} to={`/product-detail/${option.id}`}>
                                    <img src={`http://localhost:8000/images/${option.img}`} width='50px' height='50px' />
                                    {option.name}
                                </Link></div>])
                            }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex', marginRight: '5%' } }}>
                        <FormControl
                            sx={{display: {width:'150px'} }}
                        >
                            <InputLabel id="demo-simple-select-label">U.S Dollar</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="U.S Dollar"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>U.S Dollar</MenuItem>
                                <MenuItem value={20}>RTGS Dollar</MenuItem>
                                <MenuItem value={30}>SA Rand</MenuItem>
                                <MenuItem value={40}>British Pound</MenuItem>
                            </Select>
                        </FormControl>
                        <IconButton size="large" aria-label="show 4 new mails">
                            <Badge badgeContent={4} color="warning">
                                <FavoriteBorderIcon />
                                <Typography
                                    color="#000"
                                >
                                    Wishlist
                                </Typography>
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                        >
                            <Badge badgeContent={1} color="error">
                                <ShoppingBagOutlinedIcon />
                                <Typography
                                    color = "inherit"
                                >
                                    {user ?
                                        <Link to={`/cart/${user.id}`} style={{color:'#000', textDecoration:'none', fontSize:'1rem'}}>Shoping Cart</Link> :
                                        <Link to='/login' style={{color:'#000', textDecoration:'none', fontSize:'1rem'}}>Shoping Cart</Link>
                                    }
                                </Typography>
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}