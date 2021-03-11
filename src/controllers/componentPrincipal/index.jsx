import React from 'react';

import Grid from '@material-ui/core/Grid';

import ReactTable from '../table'
import ReactCard  from '../card'

import useStyles from "./styles";

const ReactPrincipal = props => {
    const { data } = props

    const classes = useStyles();
    console.log("classes.movi", classes.movil);
    return (
        <Grid container spacing={3} className={classes.movil}>

            <Grid item xs={12}>

                <ReactTable
                    data = { data }
                />

                <ReactCard
                    data = { data }
                />

            </Grid>

        </Grid>
  );
}

export default ReactPrincipal
