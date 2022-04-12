import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@mui/material";


export default function ProductDetail() {
    const params = useParams()

    const [proDetail, setProDetail] = useState([])

    const [cates, setCates] = useState([])
    React.useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + params.id)
        .then(res =>  {
            setProDetail(res.data?.[0])
            setCates(res.data?.[1])
        })
    }, [params])

    const handleAddCart = (id) => {
        axios.post('http://localhost:8000/user/addcart' + id, {
            data: {
                product_id : 45,
                status: 1,
                quanlity:1
            }
        })
    }
    return(
        <Container>
            <Typography
                sx={{fontSize:'24px', fontWeight:'700', color:'#414141', marginTop: '4%', marginBottom: '4%'}}
            >
                {proDetail.categori_id}
            </Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={6}>
                    <img src={`http://localhost:8000/images/${proDetail.img}`} width='100%' height='100%' />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <Typography
                        sx={{fontSize:'18px', color: '#414141', fontWeight:'700', marginBottom: '3%'}}
                    >
                        {proDetail.name}
                    </Typography>
                    <Typography
                        sx={{fontSize:'18px', color: '#414141', fontWeight:'700', marginBottom: '3%'}}
                    >
                        $ {proDetail.price}
                    </Typography>
                    <p>Availability: In Stock</p>
                    <Button
                        sx={{display:{backgroundColor:'#f51167', width:'30%'} }}
                        onClick={handleAddCart(proDetail.id)}
                    >
                        {/* <Link>ADD TO CART</Link> */}
                        ADD TO CART
                    </Button>
                    <h3>Desciption</h3>
                    <p>{proDetail.description}</p>
                </Grid>
            </Grid>

            <Typography
                sx={{fontSize:'24px', color:'#111111', fontWeight:'600', textAlign:'center', marginTop:'4%', marginBottom:'4%'}}
            >
                RELATED PRODUCTS
            </Typography>

            <Grid container spacing={3}>
                {cates.map(cate => (
                    <Grid item xs={6} sm={4} md={3}
                        sx={{display:{marginTop:'4%'}}}
                    >
                        <div key={cate.id}>
                            <Link to={`/product-detail/${cate.id}`} >
                                <img className="product-latest" src={`http://localhost:8000/images/${cate.img}`} alt="" width='98%' height='98%' />
                            </Link>

                            <div style={{display:'flex', position:'relative'}}>
                                <p>{cate.name}</p>
                                <p style={{display:'block', position:'absolute', right:'10px'}}>$ {cate.price}</p>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}