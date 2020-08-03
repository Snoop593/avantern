import packageJson from '../package.json';
import api from '../src/constants/api';

const BASE_HOST = 'http://88.212.202.91:8585';

export default {
    server: {
        port: 3000
    },
    client: {
        pageTitle: 'Avantern',
        projectName: packageJson.name,
        version: packageJson.version,
        contextRoot: '/',
        auth: {
            loginPage: '/auth/login',
            tokenCookieName: 'token'
        }
    },
    csp: {},
    publicServices: {
    },
    services: {
        loginService: {
            auth: {
                method: 'POST',
                path: api.login,
                url: `${BASE_HOST}/acktt/auth/login`
            }
        },
        alarmsService: {
            getAlarmsList: {
                method: 'GET',
                path: api.alarms.getAlarmsList,
                url: `${BASE_HOST}/acktt/alarms-api/alarms`
            },
            getAlarm: {
                method: 'GET',
                path: api.alarms.getAlarm,
                url: `${BASE_HOST}/acktt/alarms-api/alarms/1`
            },
            getCargoList: {
                method: 'GET',
                path: api.alarms.getCargoList,
                url: `${BASE_HOST}/acktt/alarms-api/alarms/cargo`
            },
            getCarrierList: {
                method: 'GET',
                path: api.alarms.getCarrierList,
                url: `${BASE_HOST}/acktt/alarms-api/alarms/carrier`
            },
            getCausesList: {
                method: 'GET',
                path: api.alarms.getCausesList,
                url: `${BASE_HOST}/acktt/alarms-api/alarms/causes`
            }
        },
        reportsService: {
            getReportsList: {
                method: 'GET',
                path: api.reports.getReportsList,
                url: `${BASE_HOST}/acktt/report-api/reports/`
            },
            getReport: {
                method: 'GET',
                path: api.reports.getReport,
                url: `${BASE_HOST}/acktt/report-api/reports/1?startDate=1&endDate=1000`
            }
        },
        templatesService: {
            getTemplatesParamsList: {
                method: 'GET',
                path: api.templates.getTemplatesParamsList,
                url: `${BASE_HOST}/acktt/report-api/templates/params`
            }
        }
    }
};
