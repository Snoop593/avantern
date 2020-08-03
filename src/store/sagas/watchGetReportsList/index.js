import { call, put, takeEvery } from 'redux-saga/effects';

import * as apiFetcher from '../../../utils/api-fetcher';
import api from '../../../constants/api';

import { REQUEST_GET_REPORTS_LIST } from '../../types';
import {
    getReportsListSuccess,
    getReportsListFail
} from '../../state/reports/action';

function* getReportsListSaga(action) {
    try {
        const { data } = yield call(
            apiFetcher.get,
            api.reports.getReportsList
        );
        yield put(getReportsListSuccess(data));
    } catch (error) {
        yield put(getReportsListFail());
    }
}

export default function* watchGetReportsList() {
    yield takeEvery(REQUEST_GET_REPORTS_LIST, getReportsListSaga);
}
