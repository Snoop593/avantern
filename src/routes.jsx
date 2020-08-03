import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/app';
import Authorization from './containers/authorization';
import ErrorPage from './components/error-page';
import PrivateRoute from './components/private-router';

import ROUTES from './constants/routing';

import './index.css';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path={ ROUTES.AUTHORIZATION }>
                    <Authorization />
                </Route>
                <Route path={ ROUTES.ERROR }>
                    <ErrorPage text='Страница не найдена!' />
                </Route>
                <PrivateRoute
                    exact={ true }
                    //havePermission={ (permissions) => permissions.includes('ADMIN') }
                    component={ props => <App { ...props } /> }
                />
            </Switch>
        );
    }
}
