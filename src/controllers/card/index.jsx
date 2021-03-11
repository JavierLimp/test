import React from 'react';

import clsx from 'clsx';

import Card        from '@material-ui/core/Card';
import CardHeader  from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse    from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import Typography  from '@material-ui/core/Typography';
import Avatar      from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles'

const ReactCard = props => {
    const { data } = props
    console.log("data", data );

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const bodyCards = data => {
        return ( data.map( ( item, index ) => {
            console.log("item", item );
            console.log("index", index);
            return ( 
            <Card className={classes.root} key = { `${index}-${item.bankName}` }>
                
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
                
                <CardActions disableSpacing>
                    <IconButton
                        className     = {clsx(classes.expand, { [classes.expandOpen]: expanded })}
                        onClick       = { handleExpandClick }
                        aria-expanded = {expanded}
                        aria-label    = "show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>

                </Collapse>
            </Card> )

        })
    )}

    return (
        <div>
            { bodyCards( data ) }
        </div>
        
  );
}

export default ReactCard


/* 
<Card className={classes.root}>
            <CardContent>
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
            </CardContent>

            <CardContent>

                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>

            </CardContent>
            
            <CardActions>
            
                <Button size="small">Learn More</Button>
            
            </CardActions>
        </Card> */