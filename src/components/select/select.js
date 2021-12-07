import * as React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";


export default function BasicSelect() {
    const [culture, setCulture] = React.useState('');

    const handleChange = (event) => {
        setCulture(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl color={'secondary'} fullWidth>
                <InputLabel id="demo-simple-select-label">Culture</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={culture}
                    label="Culture"
                    onChange={handleChange}
                >
                    <MenuItem value={'sr'}>Serbian</MenuItem>
                    <MenuItem value={'en'}>English</MenuItem>
                    <MenuItem value={'ru'}>Russian</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}