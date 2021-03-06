import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LatestProduct() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then(res => {
            return(
                setProducts(res.data?.[0])
            )
        })
    }, [])

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
                {products.map(product => (
                    <div key={product.id}>
                        <Grid item xs={6} sm={4} md={3}
                            sx={{display:{marginLeft:'2%', marginTop:'5%'}}}
                        >
                            <Link to={`/product-detail/${product.id}`}>
                                <img className="product-latest" src={`http://localhost:8000/images/${product.img}`} alt={product.img} width='98%' height='98%' />
                            </Link>
                            <div style={{display:'flex', position:'relative'}}>
                                <p>{product.name}</p>
                                <p style={{display:'block', position:'absolute', right:'10px'}}>$ {product.price}</p>
                            </div>
                        </Grid>
                    </div>
                ))}

            </Slider>
        </Container>
    );
}