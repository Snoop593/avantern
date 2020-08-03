/* eslint-disable global-require */

import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas';
import createRootReducer from './store/state';
import authCookieMiddleware from './middleware/auth-cookie-middleware';

const composeEnhancers = typeof window === 'undefined'
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
    return (initState = {}, history = {}) => {
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(
            (state, action) => createRootReducer(history, state, action),
            initState,
            composeEnhancers(applyMiddleware(
                sagaMiddleware,
                routerMiddleware(history),
                authCookieMiddleware
            ))
        );

        sagaMiddleware.run(rootSaga);

        return store;
    };
}

export default configureStore;
