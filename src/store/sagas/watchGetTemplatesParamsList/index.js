import { call, put, takeEvery } from 'redux-saga/effects';

import * as apiFetcher from '../../../utils/api-fetcher';
import api from '../../../constants/api';

import { REQUEST_GET_TEMPLATES_PARAMS_LIST } from '../../types';
import {
    getTemplateParamsListSuccess,
    getTemplateParamsListFail
} from '../../state/templates/action';

function* getTemplatesParamsListSaga(action) {
    try {
        const { data } = yield call(
            apiFetcher.get,
            api.templates.getTemplatesParamsList
        );
        yield put(getTemplateParamsListSuccess(data));
    } catch (error) {
        yield put(getTemplateParamsListFail());
    }
}

export default function* watchGetTemplatesParamsList() {
    yield takeEvery(REQUEST_GET_TEMPLATES_PARAMS_LIST, getTemplatesParamsListSaga);
}
