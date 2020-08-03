import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as apiFetcher from '../../../utils/api-fetcher';
import api from '../../../constants/api';
import ROUTES from '../../../constants/routing';

import { REQUEST_POST_AUTH } from '../../types';
import {
    postAuthFail,
    postAuthSuccess
} from '../../state/auth/action';

function* postAuthSaga(action) {
    try {
        const {
            login,
            password
        } = action.payload;
        
        let { data } = yield call(
            apiFetcher.post,
            api.login,
            {
                email: login,
                password: password
            }
        );
        data.permission = ['ADMIN']
        yield put(postAuthSuccess(data));

        if(data.token){
            yield put(push(ROUTES.DISPATCHER));
        }
    } catch (error) {
        yield put(postAuthFail());
    }
}

export default function* watchPostAuth() {
    yield takeEvery(REQUEST_POST_AUTH, postAuthSaga);
}
