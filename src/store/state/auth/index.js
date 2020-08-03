import {
    REQUEST_POST_AUTH,
    REQUEST_POST_AUTH_SUCCESS,
    REQUEST_POST_AUTH_FAIL,
    CHANGE_AUTH_LOGIN,
    CHANGE_AUTH_PASSWORD,
    LOGGED_OUT
} from '../../types';

const initState = {
    executingAuth: false,
    errorExecutingAuth: false,
    authInfo: {},
    login: 'email',
    password: 'email'
};

export default (state = initState, action) => {
    switch (action.type) {
    case LOGGED_OUT:
        return {
            ...state,
            authInfo: {},
            login: '',
            password: ''
        };

    case REQUEST_POST_AUTH:
        return {
            ...state,
            executingAuth: true,
            errorExecutingAuth: false
        };

    case REQUEST_POST_AUTH_SUCCESS:
        const { authInfo } = action.payload;
        return {
            ...state,
            executingAuth: false,
            errorExecutingAuth: false,
            authInfo
        };

    case REQUEST_POST_AUTH_FAIL:
        return {
            ...state,
            executingAuth: false,
            errorExecutingAuth: true
        };

    case CHANGE_AUTH_LOGIN:
        const { login } = action.payload;

        return {
            ...state,
            login
        };

    case CHANGE_AUTH_PASSWORD:
        const { password } = action.payload;

        return {
            ...state,
            password
        };
    }
    return state;
};
