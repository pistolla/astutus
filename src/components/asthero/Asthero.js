import React, {View} from 'react';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core'

const backgroundImage =
  '/astutus_background.png';

const classes = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  herotext: {
    color: '#FFFFFF'
  }
}));

function Asthero(props) {

  return (
    <div ClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography ClassName={classes.herotext} color="inherit" align="center" variant="h2" marked="center">
        An automated Forex Trading Service using Reinforcement learning.   
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        We understand it takes thousands hours of time to learn trader skills. We created Astutus to augment your technical analysis insight in realtime.
      </Typography>
    </div>
  );
}

export default Asthero;
