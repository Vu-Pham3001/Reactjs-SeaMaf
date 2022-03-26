import React from "react";
// import { Button } from '@mui/material';
// import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

class Test extends React.Component {

    render() {
        return (
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top4Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="U.S Dollar" />}
            />
        );
    }
}

const top4Films = [
    {label: 'U.S Dollar'},
    {label: 'RTGS dollar'},
    {label: 'SA Rand'},
    {label: 'British pound'},
]

export default Test;