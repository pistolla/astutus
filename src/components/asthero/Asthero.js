import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';

const backgroundImage =
  '/astutus_background.png';

const classes = makeStyles(theme => ({
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  herotext: {
    color: '#FFFFFF',
    paddingBottom: '150px'
  }
}));

function Asthero(props) {

  return (
    <Fragment>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography className={classes.herotext} color="inherit" align="center" variant="h2" marked="center">
        An automated Forex Trading Service using Reinforcement learning.   
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        We understand it takes thousands of hours to learn trader skills. We created Astutus to augment your technical analysis insight in realtime.
      </Typography>
    </Fragment>
  );
}

export default Asthero;
