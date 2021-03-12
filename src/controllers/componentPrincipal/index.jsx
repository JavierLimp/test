import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';

import ReactTable from '../table'
import ReactCard  from '../card'
import ReactPaper from '../paper'

import useStyles from "./styles";

const ReactPrincipal = props => {
    const { data } = props

    const classes = useStyles();

    return (
        <Fragment>
            <ReactPaper>
                <Grid container spacing={3} >
                    <Grid item xs={12}>

                        <ReactTable
                            data      = { data }
                            className = { classes.movil }
                        />

                    </Grid>
                </Grid>
                
            </ReactPaper>

                <ReactCard
                    data      = { data }
                    className = { classes.tabletDeskton}
                />

        </Fragment>
    );
}

export default ReactPrincipal
