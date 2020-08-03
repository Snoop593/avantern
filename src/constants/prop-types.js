import PropType from 'prop-types';

export const AUTH_TYPE = PropType.shape({
    login: PropType.string,
    password: PropType.string
});

export const ALARM_TYPE = PropType.shape({
    time: PropType.string,
    regNumber: PropType.string,
    driver: PropType.string,
    phone: PropType.string,
    cargo: PropType.string,
    route: PropType.string,
    customer: PropType.string,
    carrier: PropType.string
});

export const ALARMS_TYPE = PropType.shape({
    alarmsList: PropType.arrayOf(PropType.shape(ALARM_TYPE)),
    carrierList: PropType.arrayOf(PropType.shape({})),
    cargoList: PropType.arrayOf(PropType.shape({})),
    causesList: PropType.arrayOf(PropType.shape({}))
});

export const REPORTS_TYPE = PropType.shape({
    reportsList: PropType.arrayOf(PropType.shape({}))
});

export const TEMPLATE_PARAM_TYPE = PropType.shape({
    factories: PropType.arrayOf(PropType.shape({})),
    bcs: PropType.arrayOf(PropType.shape({})),
    ppks: PropType.arrayOf(PropType.shape({})),
    ways: PropType.arrayOf(PropType.shape({})),
    cars: PropType.arrayOf(PropType.shape({})),
    drivers: PropType.arrayOf(PropType.shape({})),
    sortableFields: PropType.arrayOf(PropType.shape({}))
});


export const SETTINGS_REPORTS_TYPE = PropType.shape({
    templateParamsList: PropType.arrayOf(PropType.shape(TEMPLATE_PARAM_TYPE))
});
