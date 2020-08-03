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

const initState = {
    loadingAlarmsList: false,
    errorLoadingAlarmsList: false,
    alarmsList: [],
    loadingAlarm: false,
    errorLoadingAlarm: false,
    alarm: {},
    loadingCargoList: false,
    errorLoadingCargoList: false,
    cargoList: [],
    loadingCarrierList: false,
    errorLoadingCarrierList: false,
    carrierList: [],
    loadingCausesList: false,
    errorLoadingCausesList: false,
    causesList: []
};

export default (state = initState, action) => {
    switch (action.type) {
    case REQUEST_GET_ALARMS_LIST:
        return {
            ...state,
            loadingAlarmsList: true,
            errorLoadingAlarmsList: false
        };

    case REQUEST_GET_ALARMS_LIST_SUCCESS:
        const { alarmsList } = action.payload;

        return {
            ...state,
            loadingAlarmsList: false,
            errorLoadingAlarmsList: false,
            alarmsList
        };

    case REQUEST_GET_ALARMS_LIST_FAIL:
        return {
            ...state,
            loadingAlarmsList: false,
            errorLoadingAlarmsList: true
        };

    case REQUEST_GET_ALARM:
        return {
            ...state,
            loadingAlarm: true,
            errorLoadingAlarm: false
        };

    case REQUEST_GET_ALARM_SUCCESS:
        const { alarm } = action.payload;

        return {
            ...state,
            loadingAlarm: false,
            errorLoadingAlarm: false,
            alarm
        };

    case REQUEST_GET_ALARM_FAIL:
        return {
            ...state,
            loadingAlarm: false,
            errorLoadingAlarm: true
        };

    case REQUEST_GET_CARGO_LIST:
        return {
            ...state,
            loadingCargoList: true,
            errorLoadingCargoList: false
        };

    case REQUEST_GET_CARGO_LIST_SUCCESS:
        const { cargoList } = action.payload;

        return {
            ...state,
            loadingCargoList: false,
            errorLoadingCargoList: false,
            cargoList
        };

    case REQUEST_GET_CARGO_LIST_FAIL:
        return {
            ...state,
            loadingCargoList: false,
            errorLoadingCargoList: true
        };

    case REQUEST_GET_CARRIER_LIST:
        return {
            ...state,
            loadingCarrierList: true,
            errorLoadingCarrierList: false
        };

    case REQUEST_GET_CARRIER_LIST_SUCCESS:
        const { carrierList } = action.payload;

        return {
            ...state,
            loadingCarrierList: false,
            errorLoadingCarrierList: false,
            carrierList
        };

    case REQUEST_GET_CARRIER_LIST_FAIL:
        return {
            ...state,
            loadingCarrierList: false,
            errorLoadingCarrierList: true
        };

    case REQUEST_GET_CAUSES_LIST:
        return {
            ...state,
            loadingCausesList: true,
            errorLoadingCausesList: false
        };

    case REQUEST_GET_CAUSES_LIST_SUCCESS:
        const { causesList } = action.payload;

        return {
            ...state,
            loadingCausesList: false,
            errorLoadingCausesList: false,
            causesList
        };

    case REQUEST_GET_CAUSES_LIST_FAIL:
        return {
            ...state,
            loadingCausesList: false,
            errorLoadingCausesList: true
        };
    }
    return state;
};
