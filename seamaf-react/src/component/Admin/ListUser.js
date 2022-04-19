import React from "react";
import { Grid } from "@mui/material";
import {DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useParams } from "react-router-dom";
import { GridActionsCellItem } from "@mui/x-data-grid";


export default function ListUser() {
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
            width: 160,
        },
        {
            headerName: 'Gio hang',
            field: 'actions',
            type: 'actions',
            width: 100,
            renderCell: (param) => (
                <>
                    <Link to={'/admin/cartuser/' + param.id}><GridActionsCellItem icon={<ShoppingCartIcon />} lable="Cart" /></Link>
                </>
            )
        },
    ];

    const [users, setUsers] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/api/listuser')
            .then(res => {
                return(
                    setUsers(res.data)
                )
            })
    }, [])
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