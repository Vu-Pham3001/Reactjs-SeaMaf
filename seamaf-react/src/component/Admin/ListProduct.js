import React from "react";
import { Grid } from "@mui/material";
import {DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';

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
        description: 'This column has a value getter and is not sortable.',
        // sortable: false,
        width: 160,
    },
    
];



export default function ListProduct() {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/admin/listmenu')
            .then(res => {
                return(
                    setProducts(res.data)
                )
            })
            console.log(products)
    }, [])
    return(
        <Grid item xs={9} sm={9} md={9}>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                    checkboxSelection
                />
            </div>
        </Grid>
    );
}