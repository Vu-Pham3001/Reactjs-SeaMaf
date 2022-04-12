import React from 'react';
import {Box, Grid, styled, Stack, Typography } from "@mui/material";
import axios from 'axios';
import { useState, useEffect  } from 'react';
import { TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function EditProduct() {
    const params = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/admin/listmenu/edit/" + params.id)
            .then(res => {
                setName(res.data.name)
                setCode(res.data.code)
                setDescription(res.data.description)
                setPrice(res.data.price)
                setSale(res.data.sale)
                setIsTop(res.data.is_top)
                setCategoriId(res.data.categori_id)
            })
            
    }, [params])
    
    const [name, setName] = useState([])

    const [code, setCode] = useState()

    const [description, setDescription] = useState()

    const [img, setImg] = useState([])

    const [price, setPrice] = useState()

    const [sale, setSale] = useState()

    const [isTop, setIsTop] = useState()

    const [categoriId, setCategoriId] = useState()

    const handleUpdateProduct = async() => {
        const updateFormData = new FormData();
        updateFormData.append('name', name)
        updateFormData.append('code' , code)
        updateFormData.append('description' , description)
        updateFormData.append('price' , price)
        updateFormData.append('sale' , sale)
        updateFormData.append('is_top' , isTop)
        updateFormData.append('categori_id', categoriId)

        const response = await axios({
            method: "post",
            url: "http://localhost:8000/api/admin/listmenu/update/" + params.id,
            data: updateFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }, [params])
        .then(res => (alert('Sua danh muc thanh cong')))

    }

    return(
        <Grid item xs={9} sm={9} md={9}>
            <Typography
                sx={{color: '#000', fontSize: '24px', fontWeight: '700', marginTop: '2%'}}
            >
                Sửa sản phẩm
            </Typography>
            <Stack direction="row" spacing={2}>
                <Box
                    sx={{width:'50%'}}
                >
                    <TextField
                        placeholder='Name'
                        value={name}
                        name='name'
                        type="text"
                        sx={{marginTop: '3%', width:'85%'}}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextField
                        placeholder='Code'
                        name='code'
                        value={code}
                        type="text"
                        sx={{marginTop: '3%', width:'85%'}}
                        onChange={(event) => setCode(event.target.value)}
                    />
                    <TextField
                        placeholder='Description'
                        name='description'
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
                        name='price'
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
                onClick={handleUpdateProduct}
            >
                Cập nhật
            </Button>
        </Grid>
        
    );
}