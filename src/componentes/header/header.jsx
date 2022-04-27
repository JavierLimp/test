import React from "react";

import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';

import Logo from '../../assets/img/Logo.svg'
import ham from '../../assets/img/hamburguesa.svg'

export const Header = props => {
    return(
        <Grid 
            className="header"
            spacing={2}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={6} className="headerMarca">
                <img
                    src={ Logo }
                    alt={ Logo }
                    loading="lazy"
                />
            </Grid>
            <Grid item xs={6}>
                <IconButton color="primary" aria-label="edit" component="span" className="hambuerguesa">
                    <img
                        src={ ham }
                        alt={ ham }
                        loading="lazy"
                    />
                </IconButton>
            </Grid>
        </Grid>
    )
}