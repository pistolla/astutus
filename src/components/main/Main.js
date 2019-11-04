import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Asthero from '../asthero/Asthero';

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '120px',
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.white,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  arrowDown: {
    position: 'absolute',
    bottom: theme.spacing(4),
  },
}));


function Main(props) {
  const [searching, setSearching] = useState(false);
  
  return (
    <Grid className={classes.root} container data-test="MainComponent">
      <Grid item xs={12} width="100%">
        <div className={classes.section}> 
          
        <Asthero />
        <div className={classes.backdrop} />
        <div className={classes.background} />
        
        </div>
      </Grid>
      <Grid item xs={12} width="100%">

      </Grid>
      <Grid item xs={12} width="100%">

      </Grid>
      <Grid item xs={12} width="100%">

      </Grid>
    </Grid>
  );
}

export default Main;
