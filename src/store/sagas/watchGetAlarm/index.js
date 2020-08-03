import { call, put, takeEvery } from 'redux-saga/effects';

import * as apiFetcher from '../../../utils/api-fetcher';
import api from '../../../constants/api';

import { REQUEST_GET_ALARM } from '../../types';
import {
    getAlarmSuccess,
    getAlarmFail
} from '../../state/alarms/action';

function* getAlarmSaga(action) {
    try {
        const { data } = yield call(
            apiFetcher.get,
            api.alarms.getAlarm
        );
        yield put(getAlarmSuccess(data));
    } catch (error) {
        yield put(getAlarmFail());
    }
}

export default function* watchGetAlarm() {
    yield takeEvery(REQUEST_GET_ALARM, getAlarmSaga);
}
