import React from "react";

import Plus from '../../assets/img/plus.svg'

import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';

const HeaderProductos = () => {
    return(
        <Grid
            spacing={2}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="headerProductos"
        >
            <Grid item xs={6} >
                <div>{'Mis productos'}</div>
            </Grid>
            <Grid item xs={6} className="headerItems" >
                <div >
                    <Input
                        id="standard-adornment-password"
                        className=""
                        type={'text'}
                        value={''}
                        onChange={()=>{}}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={()=>{}}
                                    onMouseDown={()=>{}}
                                >
                                <Search />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <IconButton color="primary" aria-label="edit" component="span" className="">
                        <img
                            src={ Plus }
                            alt={ Plus }
                            loading="lazy"
                        />
                    </IconButton>
                </div>
            </Grid>
        </Grid>
    )
}

export default HeaderProductos