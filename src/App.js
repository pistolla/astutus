import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchMediaUrls, getMyMediaUrls, postMediaUrl } from './actions';
import About from './components/about/About';
import Account from './components/account/Account';
import Main from './components/main/Main';
import Sandbox from './components/sandbox/Sandbox';

class App extends Component {
  classes = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: 0,
      backgroundColor: 'transparent'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    sectionDesktop: {
      display: 'inline',
      alignItems: 'center',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flexDirection: 'column'
      },
    },
    navTab: {
      paddingBottom: 0
    },
    appbar: {
      zIndex: theme.zIndex.drawer + 1,
      background: 'transparent !important',
      boxShadow: 'none'
    },
    toolbar: {
      background: 'transparent',
      boxShadow: 'none'
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      height: '100vh',
      backgroundColor: 'primaryBg',
      backgroundImage: `url("${"assets/astutus_background.png"}")`
    },
    footerContainer: {
      maxHeight: '100px',
      backgroundImage: `url("${"assets/gutterfree.png"}")`
    }
  }));

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = { value: 0, connected: false, account: '', web3: null, metamask: { network: null } }
    this.props.history.listen((location, action) => {

    })
  }

  key = 'jJSVPvYZqBWv9xyxmx7E';

  fetch() {
    this.props.fetchMediaUrls();
  }

  handleConnectMetamask = () => {

  }

  setWeb3 = (web3) => {
    if (web3 !== undefined) {
      this.setState({ connected: true, web3: web3 });
    }
  }

  handleChange = (tab, value) => {
    this.setState({ value: value });
  }
  setUserAccount = (acc) => {
    this.setState({ account: acc })
  }
  setMetaMaskNetwork = (id) => {
    this.setState({ metamask: { network: id } })
  }

  data = {
    seriesData: [],
    seriesDataLinear: []
  }

  render() {
    return (
      <div className={this.classes.root} data-test="AppComponent">
        <CssBaseline />
        <AppBar position="static" className={this.classes.appbar} color="primary">
          <Toolbar className={this.classes.toolbar}>
            <IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu">
              <DeveloperModeIcon />
            </IconButton>
            <Typography variant="h6" className={this.classes.title}>
              Astutus
              </Typography>
            <Tabs
              edge="center"
              variant="fullWidth"
              className={this.classes.sectionDesktop}
              value={this.state.value}
              onChange={this.handleChange}
              textColor="secondary"
              centered
            >
              <Tab label="Home" component={Link} to="/" className={this.classes.navTab} />
              <Tab label="SandBox" component={Link} to="/sandbox" className={this.classes.navTab} />
              <Tab label="Account" component={Link} to="/account" className={this.classes.navTab} />
              <Tab label="Get Started" component={Link} to="/getstarted" className={this.classes.navTab} />
            </Tabs>

          </Toolbar>
        </AppBar>
        <Container className={this.classes.main} maxWidth="xl">
          <Switch>
            <Route exact path="/">
              <Main {...this.props} />
            </Route>
            <Route path="/sandbox">
              <Sandbox {...this.props} snapshot={this.data} />
            </Route>
            <Route path="/account">
              <Account {...this.props} connected={this.state.connected} account={this.state.account} web3={this.state.web3} />
            </Route>
            <Route path="/getstarted">
              <About {...this.props} />
            </Route>
          </Switch>
        </Container>
        <footer className={this.classes.footerContainer}>

          <Typography paragraph align="center" width="fullWidth">{`Made for human by machine. Copyright 2019.`}</Typography>

        </footer>
      </div>
    )
  };
}
const mapStateToProps = state => {
  return {
    mediaUrls: state.mediaurls.all,
    myMediaUrls: state.mediaurls.watchlist
  }
}
// const mapDispatchToProps = dispatch => ({addUser: () => dispatch(addUser())})
export default withRouter(connect(mapStateToProps, { fetchMediaUrls, getMyMediaUrls, postMediaUrl })(App));
