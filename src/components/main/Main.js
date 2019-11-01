import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Searchlink from '../searchlink/SearchLink';
import MediaLinks from '../medialinks/MediaLinks';

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '120px'
  },
}));


function Main(props) {
  const [searching, setSearching] = useState(false);
  
  return (
    <Grid className={classes.root} container data-test="MainComponent">
      <Grid item xs={12} width="100%" >
        <Searchlink {...props} searching={searching} onSearching={(isSearching) => setSearching(isSearching)} />
      </Grid>
      <Grid item xs={12} width="100%">
      <MediaLinks {...props} searching={searching} mine={false} />
      </Grid>
    </Grid>
  );
}

export default Main;