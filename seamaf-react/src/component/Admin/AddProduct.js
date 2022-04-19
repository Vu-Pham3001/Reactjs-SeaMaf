import React from 'react';
import {Box, Grid, styled, Stack, Typography, Button } from "@mui/material";
import axios from 'axios';
import { useState, useEffect  } from 'react';
import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function AddProduct() {

    const param = useParams()

    const [name, setName] = useState('')

    const [code, setCode] = useState('')

    const [description, setDescription] = useState('')

    const [img, setImg] = useState([])

    const [price, setPrice] = useState('')

    const [sale, setSale] = useState('')

    const [isTop, setIsTop] = useState('')

    const [categoriId, setCategoriId] = useState('')

    const handleCreateProduct = async() => {
        const createFormData = new FormData();
        createFormData.append('name', name)
        createFormData.append('code' , code)
        createFormData.append('description' , description)
        createFormData.append('price' , price)
        createFormData.append('sale' , sale)
        createFormData.append('is_top' , isTop)
        createFormData.append('categori_id', categoriId)
        createFormData.append('img', img)

        const response = await axios({
            method: "post",
            url: "http://localhost:8000/api/admin/add-store",
            data: createFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(res => (alert('Tao danh muc thanh cong')))
    }

    return(
        <Grid item xs={9} sm={9} md={9}>
            <Typography
                sx={{color: '#000', fontSize: '24px', fontWeight: '700', marginTop: '2%'}}
            >
                Thêm sản phẩm
            </Typography>
            <Stack direction="row" spacing={2}>
                <Box
                    sx={{width:'50%'}}
                >
                    <TextField
                        placeholder='Name'
                        name='name'
                        value={name}
                        type="text"
                        sx={{marginTop: '3%', width:'85%'}}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextField
                        placeholder='Code'
                        value={code}
                        name='code'
                        type="text"
                        sx={{marginTop: '3%', width:'85%'}}
                        onChange={(event) => setCode(event.target.value)}
                    />
                    <TextField
                        name='description'
                        placeholder='Description'
                        value={description}
                        type="text"
                        sx={{marginTop: '3%', width:'85%'}}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <TextField
                        type="file"
                        name='img'
                        sx={{marginTop: '3%', width:'85%'}}
                        onChange={(event) => setImg(event.target.files[0])}
                    />
                </Box>

                <Box
                    sx={{width:'50%'}}
                >
                    <TextField
                        placeholder='Giá bán'
                        name='price'
                        value={price}
                        type="text"
                        sx={{marginTop: '3%', width:'85%'}}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <TextField
                        placeholder='Sale'
                        name='sale'
                        value={sale}
                        type="text"
                        sx={{marginTop: '3%', width:'85%'}}
                        onChange={(event) => setSale(event.target.value)}
                    />
                    <TextField
                        placeholder='Is_top'
                        name='is_top'
                        value={isTop}
                        type="text"
                        sx={{marginTop: '3%', width:'85%'}}
                        onChange={(event) => setIsTop(event.target.value)}
                    />
                    <TextField
                        placeholder='Thể loại'
                        name='categori_id'
                        value={categoriId}
                        type="text"
                        sx={{marginTop: '3%', width:'85%'}}
                        onChange={(event) => setCategoriId(event.target.value)}
                    />
                </Box>
            </Stack>

            <Button
                variant='contained'
                sx={{marginTop: '3%'}}
                type="button"
                onClick={handleCreateProduct}
            >
                Xác nhận
            </Button>
        </Grid>
    );
}