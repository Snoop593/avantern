import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../header';
import Main from '../main';
import ErrorPage from '../error-page';
import DispatcherTab from '../../containers/dispatcher-tab';
import ReportsTab from '../../containers/reports-tab';
import SettingsTab from '../../containers/settings-tab';
import SettingsUsers from '../../containers/settings-users';
import SettingsReports from '../../containers/settings-reports';
import SettingsScripts from '../../containers/settings-scripts';
import SettingsDirectory from '../../containers/settings-directory';
import PrivateRoute from '../private-router';

import ROUTES from '../../constants/routing';

const App = ({ history: { push } }) => (
    <>
        <Header />
        <Main>
            <Switch>
                <PrivateRoute
                    exact={ true }
                    //havePermission={ (permissions) => permissions.includes('ADMIN') }
                    path={ ROUTES.MAIN }
                >
                    <Redirect to={ ROUTES.DISPATCHER } />
                </PrivateRoute>
                
                <PrivateRoute
                    exact={ true }
                    //havePermission={ (permissions) => permissions.includes('ADMIN') }
                    path={ ROUTES.DISPATCHER }
                >
                    <DispatcherTab />
                </PrivateRoute>
                
                <PrivateRoute
                    exact={ true }
                    //havePermission={ (permissions) => permissions.includes('ADMIN') }
                    path={ ROUTES.REPORTS }
                >
                    <ReportsTab />
                </PrivateRoute>
                
                <PrivateRoute
                    exact={ true }
                    //havePermission={ (permissions) => permissions.includes('ADMIN') }
                    path={ ROUTES.SETTINGS_USERS }
                >
                    <SettingsUsers />
                </PrivateRoute>

                <PrivateRoute
                    exact={ true }
                    //havePermission={ (permissions) => permissions.includes('ADMIN') }
                    path={ ROUTES.SETTINGS_REPORTS }
                >
                    <SettingsReports />
                </PrivateRoute>


                <PrivateRoute
                    exact={ true }
                    //havePermission={ (permissions) => permissions.includes('ADMIN') }
                    path={ ROUTES.SETTINGS_SCRIPTS }
                >
                    <SettingsScripts />
                </PrivateRoute>

                <PrivateRoute
                    exact={ true }
                    //havePermission={ (permissions) => permissions.includes('ADMIN') }
                    path={ ROUTES.SETTINGS_DIRECTORY }
                >
                    <SettingsDirectory />
                </PrivateRoute>

                <PrivateRoute
                    exact={ true }
                    //havePermission={ (permissions) => permissions.includes('ADMIN') }
                    path={ ROUTES.SETTINGS }
                >
                    <SettingsTab push={ push } />
                </PrivateRoute>

                <Route>
                    <ErrorPage text='Страница не найдена!' />
                </Route>
            </Switch>
        </Main>
    </>
);

App.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default App;
