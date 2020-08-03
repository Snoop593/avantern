import { call, put, takeEvery } from 'redux-saga/effects';

import * as apiFetcher from '../../../utils/api-fetcher';
import api from '../../../constants/api';

import { REQUEST_GET_ALARMS_LIST } from '../../types';
import {
    getAlarmsListSuccess,
    getAlarmsListFail
} from '../../state/alarms/action';

function* getAlarmsListSaga(action) {
    try {
        const { data } = yield call(
            apiFetcher.get,
            api.alarms.getAlarmsList
        );
        yield put(getAlarmsListSuccess(data));
    } catch (error) {
        yield put(getAlarmsListFail());
    }
}

export default function* watchGetAlarmsList() {
    yield takeEvery(REQUEST_GET_ALARMS_LIST, getAlarmsListSaga);
}
