import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Asthero from '../asthero/Asthero';
import WhitePaper from '../whitepaper/WhitePaper';

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
  sectionHero: {
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5)
    
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
      <Grid item xs={12} width="100%" className={classes.sectionHero}>
        <Asthero />
      </Grid>
      <Grid item xs={12} width="100%">
        <Container maxWidth="lg">
          <WhitePaper />
        </Container>
      </Grid>

    </Grid>
  );
}

export default Main;
