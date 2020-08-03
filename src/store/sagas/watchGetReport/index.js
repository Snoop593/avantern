import { call, put, takeEvery } from 'redux-saga/effects';

import * as apiFetcher from '../../../utils/api-fetcher';
import api from '../../../constants/api';

import { REQUEST_GET_REPORT } from '../../types';
import {
    getReportSuccess,
    getReportFail
} from '../../state/reports/action';

function* getReportSaga(action) {
    try {
        yield call(
            apiFetcher.get,
            api.reports.getReport,
            {
            }
        );
        yield put(getReportSuccess());
    } catch (error) {
        yield put(getReportFail());
    }
}

export default function* watchGetReport() {
    yield takeEvery(REQUEST_GET_REPORT, getReportSaga);
}
