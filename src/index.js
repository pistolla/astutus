import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore, { history } from './createStore';
//import * as serviceWorker from './serviceWorker';
const theme = createMuiTheme({
    overrides: {
        MuiGrid: {
            root: {
                marginTop: '50px'
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
        primary: { main: 'rgba(244, 195, 132, 0.3)', contrastText: '#FFFFFF' },
        secondary: { main: '#425d7c', contrastText: '#FFFFFF' },
        text: { secondary: '#425d7c', primary: '#FFFFFF', disabled: 'rgba(0, 0, 0, 0.38)' },
    },
    shadows: ["none"],
    inkBar: {
        backgroundColor: '#f4c384'
    }
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
