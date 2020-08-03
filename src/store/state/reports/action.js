import {
    REQUEST_GET_REPORTS_LIST,
    REQUEST_GET_REPORTS_LIST_SUCCESS,
    REQUEST_GET_REPORTS_LIST_FAIL,
    REQUEST_GET_REPORT,
    REQUEST_GET_REPORT_SUCCESS,
    REQUEST_GET_REPORT_FAIL
} from '../../types';

export const getReportsList = () => ({
    type: REQUEST_GET_REPORTS_LIST
});

export const getReportsListSuccess = reportsList => ({
    type: REQUEST_GET_REPORTS_LIST_SUCCESS,
    payload: { reportsList }
});

export const getReportsListFail = () => ({
    type: REQUEST_GET_REPORTS_LIST_FAIL
});

export const getReport = () => ({
    type: REQUEST_GET_REPORT
});

export const getReportSuccess = report => ({
    type: REQUEST_GET_REPORT_SUCCESS,
    payload: { report }
});

export const getReportFail = () => ({
    type: REQUEST_GET_REPORT_FAIL
});
