import {
    REQUEST_POST_AUTH,
    REQUEST_POST_AUTH_SUCCESS,
    REQUEST_POST_AUTH_FAIL,
    CHANGE_AUTH_LOGIN,
    CHANGE_AUTH_PASSWORD,
    LOGGED_OUT
} from '../../types';

export const loggedOut = () => ({
    type: LOGGED_OUT
})

export const postAuth = (login, password) => ({
    type: REQUEST_POST_AUTH,
    payload: { login, password }
});

export const postAuthSuccess = authInfo => ({
    type: REQUEST_POST_AUTH_SUCCESS,
    payload: { authInfo }
});

export const postAuthFail = () => ({
    type: REQUEST_POST_AUTH_FAIL
});

export const changeAuthLogin = login => ({
    type: CHANGE_AUTH_LOGIN,
    payload: { login }
});

export const changeAuthPassword = password => ({
    type: CHANGE_AUTH_PASSWORD,
    payload: { password }
});
