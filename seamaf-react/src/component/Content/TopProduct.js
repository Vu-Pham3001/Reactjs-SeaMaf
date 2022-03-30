import React from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import './content.css';

const Item = styled('div')(({theme}) => ({
    background:'aqua',
}));

export default function TopProduct() {
    return(
        <Container>
            <Typography
                sx={{display:{marginTop:'3%', textAlign:'center', fontSize:'20px', fontWeight:'600'}}}
            >
                BROWSE TOP SELLING PRODUCTS
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={3}
                    sx={{display:{marginTop:'4%'}}}
                >
                    <a href="#">
                        <img className="product-latest" src="assets/img/product-list.webp" alt="" width='98%' height='98%' />
                    </a>
                    <div style={{display:'flex', position:'relative'}}>
                        <p>Ring basket white (small)</p>
                        <p style={{display:'block', position:'absolute', right:'10px'}}>$ 3.0</p>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={3}
                    sx={{display:{marginTop:'4%'}}}
                >
                    <a href="#">
                        <img className="product-latest" src="assets/img/product-list.webp" alt="" width='98%' height='98%' />
                    </a>
                    <div style={{display:'flex', position:'relative'}}>
                        <p>Ring basket white (small)</p>
                        <p style={{display:'block', position:'absolute', right:'10px'}}>$ 3.0</p>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={3}
                    sx={{display:{marginTop:'4%'}}}
                >
                    <a href="#">
                        <img className="product-latest" src="assets/img/product-list.webp" alt="" width='98%' height='98%' />
                    </a>
                    <div style={{display:'flex', position:'relative'}}>
                        <p>Ring basket white (small)</p>
                        <p style={{display:'block', position:'absolute', right:'10px'}}>$ 3.0</p>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={3}
                    sx={{display:{marginTop:'4%'}}}
                >
                    <a href="#">
                        <img className="product-latest" src="assets/img/product-list.webp" alt="" width='98%' height='98%' />
                    </a>
                    <div style={{display:'flex', position:'relative'}}>
                        <p>Ring basket white (small)</p>
                        <p style={{display:'block', position:'absolute', right:'10px'}}>$ 3.0</p>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={3}
                    sx={{display:{marginTop:'4%'}}}
                >
                    <a href="#">
                        <img className="product-latest" src="assets/img/product-list.webp" alt="" width='98%' height='98%' />
                    </a>
                    <div style={{display:'flex', position:'relative'}}>
                        <p>Ring basket white (small)</p>
                        <p style={{display:'block', position:'absolute', right:'10px'}}>$ 3.0</p>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={3}
                    sx={{display:{marginTop:'4%'}}}
                >
                    <a href="#">
                        <img className="product-latest" src="assets/img/product-list.webp" alt="" width='98%' height='98%' />
                    </a>
                    <div style={{display:'flex', position:'relative'}}>
                        <p>Ring basket white (small)</p>
                        <p style={{display:'block', position:'absolute', right:'10px'}}>$ 3.0</p>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={3}
                    sx={{display:{marginTop:'4%'}}}
                >
                    <a href="#">
                        <img className="product-latest" src="assets/img/product-list.webp" alt="" width='98%' height='98%' />
                    </a>
                    <div style={{display:'flex', position:'relative'}}>
                        <p>Ring basket white (small)</p>
                        <p style={{display:'block', position:'absolute', right:'10px'}}>$ 3.0</p>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={3}
                    sx={{display:{marginTop:'4%'}}}
                >
                    <a href="#">
                        <img className="product-latest" src="assets/img/product-list.webp" alt="" width='98%' height='98%' />
                    </a>
                    <div style={{display:'flex', position:'relative'}}>
                        <p>Ring basket white (small)</p>
                        <p style={{display:'block', position:'absolute', right:'10px'}}>$ 3.0</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}