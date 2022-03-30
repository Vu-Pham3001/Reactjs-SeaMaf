import React from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import './content.css';

export default function Banner() {
    return(
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}
                    sx={{display:{height:'205px', marginTop:'5%'}}}
                >
                    <div className="component-banner-left" style={{backgroundImage: "url(assets/img/jellyfish-698521_1280.jpg.jpg.webp)", backgroundSize: 'cover', backgroundPosition:'top center', width:'100%', height:'100%', borderRadius: '15px'}}>
                        <div style={{display: 'flex', height:'100%', flexDirection: 'column', justifyContent:'center', marginLeft:'5%'}}>
                            <div className="" style={{fontSize:'24px', color:'#fff'}}>HANDMADE</div>
                            <div style={{fontSize:'18px', color:'#fff'}}>HURRY! 60% OFF!</div>
                            <Button variant="contained"
                                sx={{display:{width:'30%', background:'#f51167'}}}
                            >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{display:{height:'205px',marginTop:'5%',}}}
                >
                    <div className="component-banner-right" style={{backgroundImage: "url(assets/img/milky-way-2695569_1280.jpg.jpg.webp)", backgroundSize: 'cover', backgroundPosition:'top center', width:'100%', height:'100%', borderRadius: '15px'}}>
                        <div style={{display: 'flex', height:'100%', flexDirection: 'column', justifyContent:'center', marginLeft:'5%',}}>
                            <div className="" style={{fontSize:'24px', color:'#fff'}}>EVENTS</div>
                            <div style={{fontSize:'18px', color:'#fff'}}>WEDDING & PARTY ACCESSORIES</div>
                            <Button variant="contained"
                                sx={{display:{width:'30%', background:'#f51167'}}}
                            >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}