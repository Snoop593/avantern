import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import alarms from './alarms';
import reports from './reports';
import templates from './templates';

export default (history, state, action) => {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        auth,
        alarms,
        reports,
        templates
    });

    return rootReducer(state, action);
};
