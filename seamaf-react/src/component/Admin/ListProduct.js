import React from "react";
import { Grid } from "@mui/material";
import {DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from "react-router-dom";

export default function ListProduct() {

    const params = useParams()

    const [eidt, setEdit] = useState()

    const handleDeleteProduct = (param) => {
        
    }

    const columns = [
        { field: 'id', headerName: 'id', width: 70 },
        { field: 'name', headerName: 'name', width: 230 },
        { field: 'code', headerName: 'code', width: 130 },
        {
            field: 'description',
            headerName: 'description',
            type: 'number',
            width: 230,
        },
        {
            field: 'price',
            headerName: 'price',
            width: 160,
        },
        {
            field: 'actions',
            headerName:'Edit',
            type: 'actions',
            width: 100,
            renderCell: (param) => (
                <>
                    <Link to={'/admin/editproduct/' + param.id}><GridActionsCellItem icon={<EditIcon />} lable="Edit" /></Link>
                    <GridActionsCellItem icon={<DeleteIcon />} lable="Delete" onClick={handleDeleteProduct} />
                </>
            )
        }
    ];

    const [products, setProducts] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/api/admin/listmenu')
            .then(res => {
                return(
                    setProducts(res.data)
                )
            })
    }, [params])
    
    return(
        <Grid item xs={9} sm={9} md={9}>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        </Grid>
    );
}