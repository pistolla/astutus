import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore, { history } from './createStore';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
//import * as serviceWorker from './serviceWorker';
const theme = createMuiTheme({
    overrides: {
        MuiGrid: {
            root: {
                marginTop: '120px'
            },
        },
        MuiTabs: {
            root: {
                width: '100%'
            }
        }
    },
    zIndex: {
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 3000,
        drawer: 999,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
    },
    palette: {
        primary: { main: '#4CAF50' },
        secondary: { main: '#AA00FF', contrastText: '#9E9E9E' }
    },
});
ReactDOM.render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ConnectedRouter>

    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
