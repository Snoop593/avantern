import { call, put, takeEvery } from 'redux-saga/effects';

import * as apiFetcher from '../../../utils/api-fetcher';
import api from '../../../constants/api';

import { REQUEST_GET_CARRIER_LIST } from '../../types';
import {
    getCarrierListSuccess,
    getCarrierListFail
} from '../../state/alarms/action';

function* getCarrierListSaga(action) {
    try {
        const { data } = yield call(
            apiFetcher.get,
            api.alarms.getCarrierList
        );
        yield put(getCarrierListSuccess(data));
    } catch (error) {
        yield put(getCarrierListFail());
    }
}

export default function* watchGetCarrierList() {
    yield takeEvery(REQUEST_GET_CARRIER_LIST, getCarrierListSaga);
}
