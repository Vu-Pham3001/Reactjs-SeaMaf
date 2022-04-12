import React from "react";
import { Grid } from "@mui/material";
import {DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useParams } from "react-router-dom";
import { GridActionsCellItem } from "@mui/x-data-grid";


export default function ListProduct() {
    const param = useParams()

    const columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        { field: 'name', headerName: 'Name', width: 230 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'created_at',
            headerName: 'Created_at',
            type: 'number',
            width: 230,
        },
        {
            field: 'updated_at',
            headerName: 'Updated_at',
            // sortable: false,
            width: 160,
        },
        {
            headerName: 'Gio hang',
            field: 'actions',
            type: 'actions',
            width: 100,
            renderCell: (param) => (
                <>
                    <GridActionsCellItem icon={<ShoppingCartIcon />} onClick={() => handleCart(param)} lable="Cart" />
                </>
            )
        },
    ];

    const [users, setUsers] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/listuser')
            .then(res => {
                return(
                    setUsers(res.data)
                )
            })
    }, [])

    const handleCart = () => {
        
    }
    return(
        <Grid item xs={9} sm={9} md={9}>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                    checkboxSelection
                />
            </div>
        </Grid>
    );
}