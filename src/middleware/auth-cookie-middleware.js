import { LOGGED_OUT, REQUEST_POST_AUTH_SUCCESS } from '../store/types';
import * as cookies from '../lib/cookies';
//import tryDecode from '../lib/jwt-decode';

const AUTH_COOKIE_TTL = 60 * 60;

const authCookieMiddleware = store => next => (action) => {
    const state = store.getState();
    const token = cookies.getCookie('token');

    if(!action.fromMiddleware){
        if(token && !state.auth.authInfo.token){
            const authInfo = { token: token, permission: ['ADMIN'] }

            store.dispatch({
                type: REQUEST_POST_AUTH_SUCCESS,
                payload: { authInfo },
                fromMiddleware: true
            })
        }

        if(state.auth.authInfo.token && !token){
            cookies.setCookie('token', state.auth.authInfo.token, AUTH_COOKIE_TTL);
        }

        if(action.type === LOGGED_OUT){
            cookies.deleteCookie('token');
        } else if(action.type === REQUEST_POST_AUTH_SUCCESS && action.payload.authInfo.token){
            cookies.setCookie('token', action.payload.authInfo.token, AUTH_COOKIE_TTL);
        } else {
            const authToken = cookies.getCookie('token') || '';
            cookies.setCookie('token', authToken, AUTH_COOKIE_TTL);
        }
    }
    return next(action);
};

export default authCookieMiddleware;
