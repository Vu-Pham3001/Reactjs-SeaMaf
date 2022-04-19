import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Box, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export default function CartUser() {

    const BodyCart = styled('div')(({theme}) => ({
        width: '65%',
        backgroundColor: '#f0f0f0',
        marginTop: '7%',
        marginLeft: '7%',
        borderTopLeftRadius: '27px',
        borderTopRightRadius: '27px'
    }));

    const BodyTotal = styled('div')(({theme}) => ({
        width: '65%',
        backgroundColor: '#f51167',
        marginLeft: '7%',
        marginBottom: '7%',
        paddingTop: '2%',
        paddingBottom: '2%',
        color: '#fff',
        display: 'flex',
        borderBottomLeftRadius: '27px',
        borderBottomRightRadius: '27px'
    }));

    const TitleTotal = styled('div')(({theme}) => ({
        fontSize: '18px',
        fontWeight: '700',
        paddingLeft: '55%',
    }));

    const PriceTotal = styled('div')(({theme}) => ({
        fontSize: '18px',
        fontWeight: '700',
        paddingLeft: '75px',
    }));

    const params = useParams()

    const [userCarts, setUserCarts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/cartuser/' + params.id)
            .then(res=>setUserCarts(res.data))
    }, [params])

    return(
        <Box
            sx={{width:'75%'}}
        >
            <BodyCart>
                <Typography
                    sx={{fontWeight: '700', fontSize:'30px', paddingTop: '5%', marginLeft: '5%'}}
                >
                    Your Cart
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {userCarts.map(userCart => (
                                <TableRow key={userCart.id}>
                                    <TableCell>
                                        <Link to={`/product-detail/${userCart.product.id}`}>
                                            <img src={`http://localhost:8000/images/${userCart.product.img}`} width='100px' height='100px' />
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <div style={{fontSize: '16px', fontWeight:'700'}}>{userCart.product.name}</div>
                                        <div>$ {userCart.product.price}</div>
                                    </TableCell>
                                    <TableCell>{userCart.quanlity}</TableCell>
                                    <TableCell>{userCart.product.price*userCart.quanlity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </BodyCart>
            <BodyTotal>
                <TitleTotal>Total</TitleTotal>
                <PriceTotal>$ 100</PriceTotal>
            </BodyTotal>
        </Box>
    );
}