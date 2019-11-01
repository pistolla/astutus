import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppReducer from './reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

export const middlewares = [ReduxThunk];

export default function configureStore(preloadedState) {
    
    const store = createStore(
        AppReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                ReduxThunk
            ),
        ),
    )
    
    return store
}