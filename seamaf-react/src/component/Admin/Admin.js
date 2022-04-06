import React from "react";
import { Container } from "@mui/material";
import SideBar from "./SideBar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";


export default function Admin() {
    return(
        <Box>
            <Grid container spacing={2}
                sx={{display:{height:'500px'}}}
            >
                <SideBar />
                <Outlet />
            </Grid>
        </Box>
    );
}