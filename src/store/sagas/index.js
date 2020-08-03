import { all } from 'redux-saga/effects';

import watchPostAuth from './watchPostAuth';
import watchGetReportsList from './watchGetReportsList';
import watchGetReport from './watchGetReport';
import watchGetAlarm from './watchGetAlarm';
import watchGetAlarmsList from './watchGetAlarmsList';
import watchGetCargoList from './watchGetCargoList';
import watchGetCarrierList from './watchGetCarrierList';
import watchGetCausesList from './watchGetCausesList';
import watchGetTemplatesParamsList from './watchGetTemplatesParamsList';

function* rootSaga() {
    yield all([
        watchPostAuth(),
        watchGetReportsList(),
        watchGetReport(),
        watchGetAlarm(),
        watchGetAlarmsList(),
        watchGetCargoList(),
        watchGetCarrierList(),
        watchGetCausesList(),
        watchGetTemplatesParamsList()
    ]);
}

export default rootSaga;
