import React from 'react';

import Paper from '@material-ui/core/Paper';

import useStyles from "./styles";

const ReactPaper = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={24} >
          { children }
      </Paper>
    </div>
  );
}

export default ReactPaper
