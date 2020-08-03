/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import Root from './root';
import configureStore from './configure-store';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

const configureStoreLocal = configureStore();

if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    window.__main = state => {
        const history = CAN_USE_DOM
            ? createBrowserHistory({
                basename: (state.settings && state.settings.contextRoot) || ''
            })
            : null;

        const store = configureStoreLocal(state, history);

        if (!IS_PRODUCTION && module.hot) {
            ReactDOM.hydrate(
                <AppContainer>
                    <Root store={ store } history={ history } />
                </AppContainer>,
                document.getElementById('react-app')
            );

            if (module.hot) {
                module.hot.accept(['./root', './configure-store'], () => {
                    const NextAppAssignments = require('./root').default;

                    ReactDOM.render(
                        <AppContainer>
                            <NextAppAssignments store={ store } history={ history } />
                        </AppContainer>,
                        document.getElementById('react-app')
                    );
                });
            }
        } else {
            ReactDOM.hydrate(<Root store={ store } history={ history } />, document.getElementById('react-app'));
        }
    };
}
