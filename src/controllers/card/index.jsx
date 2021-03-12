import React from 'react';

import Card        from '@material-ui/core/Card';
import CardHeader  from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography  from '@material-ui/core/Typography';
import Avatar      from '@material-ui/core/Avatar';
import Grid        from '@material-ui/core/Grid';

import useStyles from './styles'

const ReactCard = props => {
    const { data } = props

    const classes = useStyles();

    const bodyCards = data => ( data.map( ( item, index ) => (
        <Grid item xs={8} sm={6} key = { `${ index }-${ item.bankName }` } >
            <Card className = { classes.root } key = { `${ index }-${ item.bankName }` } >
            
                <CardHeader
                    avatar    = { <Avatar aria-label="recipe" className={classes.avatar} src = {item.url} /> }
                    title     = { item.bankName }
                    subheader = { `Edad : ${item.age}` }
                />

                <CardContent>

                    <Typography variant="body2" color="textSecondary" component="p">

                        { item.description }

                    </Typography>

                </CardContent>

            </Card>

        </Grid> )
    ))

    return (
        <Grid
            container
            spacing    = { 6 }
            direction  = "row"
            justify    = "center"
            alignItems ="center"
            className  = { props.className }
        >
            { bodyCards( data ) }
        </Grid>
    );
}

export default ReactCard
