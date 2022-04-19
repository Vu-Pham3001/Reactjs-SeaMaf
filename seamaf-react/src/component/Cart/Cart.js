import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { Box, Button, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export default function Cart() {
    const params = useParams()

    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/cart/' + params.id)
            .then(res=> {
                setCartProducts(res.data)
            })
    }, [params])

    const user = JSON.parse(localStorage.getItem('user'))

    const handleDeleteCartProduct = (id) => {
        let obj = {
            product_id: id,
            user_id: user.id,
        }

        axios.post('http://localhost:8000/api/cart/delete', obj)
            .catch(err => console.log(err))
            .then(res => alert('xoa san pham thanh cong'))
    }
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

    return(
        <Box>
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
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {cartProducts.map(cartProduct => (
                                <TableRow key={cartProduct.id}>
                                    <TableCell>
                                        <Link to={`/product-detail/${cartProduct.product.id}`}>
                                            <img src={`http://localhost:8000/images/${cartProduct.product.img}`} width='100px' height='100px' />
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <div style={{fontSize: '16px', fontWeight:'700'}}>{cartProduct.product.name}</div>
                                        <div>$ {cartProduct.product.price}</div>
                                    </TableCell>
                                    <TableCell>{cartProduct.quanlity}</TableCell>
                                    <TableCell>{cartProduct.product.price*cartProduct.quanlity}</TableCell>
                                    <TableCell>
                                        <Button type="submit">
                                            <DeleteIcon onClick={() => handleDeleteCartProduct(cartProduct.product.id)} />
                                        </Button>
                                    </TableCell>
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