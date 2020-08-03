import {
    REQUEST_GET_REPORTS_LIST,
    REQUEST_GET_REPORTS_LIST_SUCCESS,
    REQUEST_GET_REPORTS_LIST_FAIL,
    REQUEST_GET_REPORT,
    REQUEST_GET_REPORT_SUCCESS,
    REQUEST_GET_REPORT_FAIL
} from '../../types';

const initState = {
    loadingReportsList: false,
    errorLoadingReportsList: false,
    reportsList: [],
    loadingReport: false,
    errorLoadingReport: false,
    report: {}
};

export default (state = initState, action) => {
    switch (action.type) {
    case REQUEST_GET_REPORTS_LIST:
        return {
            ...state,
            loadingReportsList: true,
            errorLoadingReportsList: false
        };

    case REQUEST_GET_REPORTS_LIST_SUCCESS:
        const { reportsList } = action.payload;

        return {
            ...state,
            loadingReportsList: false,
            errorLoadingReportsList: false,
            reportsList
        };

    case REQUEST_GET_REPORTS_LIST_FAIL:
        return {
            ...state,
            loadingReportsList: false,
            errorLoadingReportsList: true
        };

    case REQUEST_GET_REPORT:
        return {
            ...state,
            loadingReport: true,
            errorLoadingReport: false
        };

    case REQUEST_GET_REPORT_SUCCESS:
        const { report } = action.payload;

        return {
            ...state,
            loadingReport: false,
            errorLoadingReport: false,
            report
        };

    case REQUEST_GET_REPORT_FAIL:
        return {
            ...state,
            loadingReport: false,
            errorLoadingReport: true
        };
    }
    return state;
};
