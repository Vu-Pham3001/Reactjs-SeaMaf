import React, { useState } from "react";
import axios from "axios";
import { Container} from "@mui/material";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import './content.css';
import { Link } from "react-router-dom";

const Item = styled('div')(({theme}) => ({
    background:'aqua',
}));

export default function TopProduct() {
    const [products, setProducts] = useState([])

    React.useEffect(() => {
        axios.get('http://localhost:8000/')
        .then(res => {
            setProducts(res.data?.[1])
        })
    })

    return(
        <Container>
            <Typography
                sx={{display:{marginTop:'3%', textAlign:'center', fontSize:'20px', fontWeight:'600'}}}
            >
                BROWSE TOP SELLING PRODUCTS
            </Typography>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid key={product.id} item xs={6} sm={4} md={3}
                        sx={{display:{marginTop:'4%'}}}
                    >
                        <div>
                            <Link to={`/product-detail/${product.id}`} >
                                <img className="product-latest" src={`http://localhost:8000/images/${product.img}`} alt="" width='98%' height='98%' />
                            </Link>

                            <div style={{display:'flex', position:'relative'}}>
                                <p>{product.name}</p>
                                <p style={{display:'block', position:'absolute', right:'10px'}}>$ {product.price}</p>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}