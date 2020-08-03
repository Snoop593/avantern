import { call, put, takeEvery } from 'redux-saga/effects';

import * as apiFetcher from '../../../utils/api-fetcher';
import api from '../../../constants/api';

import { REQUEST_GET_CAUSES_LIST } from '../../types';
import {
    getCausesListSuccess,
    getCausesListFail
} from '../../state/alarms/action';

function* getCausesListSaga(action) {
    try {
        const { data } = yield call(
            apiFetcher.get,
            api.alarms.getCausesList
        );
        yield put(getCausesListSuccess(data));
    } catch (error) {
        yield put(getCausesListFail());
    }
}

export default function* watchGetCausesList() {
    yield takeEvery(REQUEST_GET_CAUSES_LIST, getCausesListSaga);
}
