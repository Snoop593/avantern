import { call, put, takeEvery } from 'redux-saga/effects';

import * as apiFetcher from '../../../utils/api-fetcher';
import api from '../../../constants/api';

import { REQUEST_GET_CARGO_LIST } from '../../types';
import {
    getCargoListFail,
    getCargoListSuccess
} from '../../state/alarms/action';

function* getCargoListSaga(action) {
    try {
        const { data } = yield call(
            apiFetcher.get,
            api.alarms.getCargoList
        );
        yield put(getCargoListSuccess(data));
    } catch (error) {
        yield put(getCargoListFail());
    }
}

export default function* watchGetCargoList() {
    yield takeEvery(REQUEST_GET_CARGO_LIST, getCargoListSaga);
}
