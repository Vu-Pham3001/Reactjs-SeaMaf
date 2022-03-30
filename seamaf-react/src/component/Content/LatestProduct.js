import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default class LatestProduct extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: 'auto',
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                    }
                },
                {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                    }
                },
            ]
        };
        return (
            <Container>
                <Typography
                    sx={{display:{marginTop:'3%', textAlign:'center', fontSize:'20px', fontWeight:'600'}}}
                >
                    Latest Product
                </Typography>
                <Slider {...settings}>
                    <Grid item xs={6} sm={4} md={3}
                        sx={{display:{marginLeft:'2%', marginTop:'5%'}}}
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
                        sx={{display:{marginLeft:'2%', marginTop:'5%'}}}
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
                        sx={{display:{marginLeft:'2%', marginTop:'5%'}}}
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
                        sx={{display:{marginLeft:'2%', marginTop:'5%'}}}
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
                        sx={{display:{marginLeft:'2%', marginTop:'5%'}}}
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
                        sx={{display:{marginLeft:'2%', marginTop:'5%'}}}
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
                        sx={{display:{marginLeft:'2%', marginTop:'5%'}}}
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
                        sx={{display:{marginLeft:'2%', marginTop:'5%'}}}
                    >
                        <a href="#">
                            <img className="product-latest" src="assets/img/product-list.webp" alt="" width='98%' height='98%' />
                        </a>
                        <div style={{display:'flex', position:'relative'}}>
                            <p>Ring basket white (small)</p>
                            <p style={{display:'block', position:'absolute', right:'10px'}}>$ 3.0</p>
                        </div>
                    </Grid>
                </Slider>
            </Container>
        );
    }
}