import React from "react";
import { Button, Grid, Stack, styled } from "@mui/material";
import { Box } from "@mui/system";
import "./SideBar.css";
import { Link } from "react-router-dom";

const Avata = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5%'
}));

export default function SideBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClickPages = (event) => {
        document.querySelector(".box-pages").classList.toggle("box-pages-block");
    }

    const handleClickDashboard = (event) => {
        document.querySelector(".box-dashboard").classList.toggle("box-dashboard-block");
    }
    return(
        <Grid item xs={3} sm={3} md={3}>
            <Box
                sx={{display:{height:'100%', backgroundColor:'#555'}}}
            >
                <Avata>
                    <img src="/logo192.png" alt="" style={{borderRadius:'50%', border:'solid 1px #fff', width:'50px', height:'50px', marginRight:'10%'}}/>
                    <p>Vu Pham</p>
                </Avata>
                <ul className="" style={{color:'#fff'}}>
                    <li className="title-pages" style={{listStyle:'none'}} onClick={handleClickDashboard}>
                        Dashboard
                        <ul className="box-dashboard">
                            <li style={{listStyle:'none', marginTop:'2%'}}>
                                <Link to="/" style={{color:'#fff', textDecoration:'none'}}>Home</Link>
                            </li>
                            <li style={{listStyle:'none', marginTop:'2%'}}>
                                <Link to="#" style={{color:'#fff', textDecoration:'none'}}>Analytics</Link>
                            </li>
                            <li style={{listStyle:'none', marginTop:'2%'}}>
                                <Link to="#" style={{color:'#fff', textDecoration:'none'}}>SaaS</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="title-pages" style={{listStyle:'none', marginTop: '5%'}} onClick={handleClickPages}>
                        Pages
                        <ul className="box-pages">
                            <li style={{listStyle:'none', marginTop:'2%'}}>
                                <Link to="addproduct" style={{color:'#fff', textDecoration:'none'}}>Add Product</Link>
                            </li>
                            <li style={{listStyle:'none', marginTop:'2%'}}>
                                <Link to="listproduct" style={{color:'#fff', textDecoration:'none'}}>List Product</Link>
                            </li>
                            <li style={{listStyle:'none', marginTop:'2%'}}>
                                <Link to="editproduct" style={{color:'#fff', textDecoration:'none'}}>Edit Product</Link>
                            </li>
                            <li style={{listStyle:'none', marginTop:'2%'}}>
                                <Link to="listuser" style={{color:'#fff', textDecoration:'none'}}>List User</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Box>
        </Grid>
    );
}