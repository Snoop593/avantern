import {
    REQUEST_GET_ALARMS_LIST,
    REQUEST_GET_ALARMS_LIST_SUCCESS,
    REQUEST_GET_ALARMS_LIST_FAIL,
    REQUEST_GET_ALARM,
    REQUEST_GET_ALARM_SUCCESS,
    REQUEST_GET_ALARM_FAIL,
    REQUEST_GET_CARGO_LIST,
    REQUEST_GET_CARGO_LIST_SUCCESS,
    REQUEST_GET_CARGO_LIST_FAIL,
    REQUEST_GET_CARRIER_LIST,
    REQUEST_GET_CARRIER_LIST_SUCCESS,
    REQUEST_GET_CARRIER_LIST_FAIL,
    REQUEST_GET_CAUSES_LIST,
    REQUEST_GET_CAUSES_LIST_SUCCESS,
    REQUEST_GET_CAUSES_LIST_FAIL
} from '../../types';

export const getAlarmsList = () => ({
    type: REQUEST_GET_ALARMS_LIST
});

export const getAlarmsListSuccess = alarmsList => ({
    type: REQUEST_GET_ALARMS_LIST_SUCCESS,
    payload: { alarmsList }
});

export const getAlarmsListFail = () => ({
    type: REQUEST_GET_ALARMS_LIST_FAIL
});

export const getAlarm = () => ({
    type: REQUEST_GET_ALARM
});

export const getAlarmSuccess = alarm => ({
    type: REQUEST_GET_ALARM_SUCCESS,
    payload: { alarm }
});

export const getAlarmFail = () => ({
    type: REQUEST_GET_ALARM_FAIL
});

export const getCargoList = () => ({
    type: REQUEST_GET_CARGO_LIST
});

export const getCargoListSuccess = cargoList => ({
    type: REQUEST_GET_CARGO_LIST_SUCCESS,
    payload: { cargoList }
});

export const getCargoListFail = () => ({
    type: REQUEST_GET_CARGO_LIST_FAIL
});

export const getCarrierList = () => ({
    type: REQUEST_GET_CARRIER_LIST
});

export const getCarrierListSuccess = carrierList => ({
    type: REQUEST_GET_CARRIER_LIST_SUCCESS,
    payload: { carrierList }
});

export const getCarrierListFail = () => ({
    type: REQUEST_GET_CARRIER_LIST_FAIL
});

export const getCausesList = () => ({
    type: REQUEST_GET_CAUSES_LIST
});

export const getCausesListSuccess = causesList => ({
    type: REQUEST_GET_CAUSES_LIST_SUCCESS,
    payload: { causesList }
});

export const getCausesListFail = () => ({
    type: REQUEST_GET_CAUSES_LIST_FAIL
});
