import crumb from '@hapi/crumb';
import pluginPageIndex from './pages/index';
import healthMonitor from './health-monitor';
import authPlugin from './auth-plugin';
import { apiPlugin } from './../lib/api-plugin';

export default function getPlugins(config) {
    const plugins = [
        /*{
            plugin: crumb,
            options: {
                key: 'crui-csrf',
                restful: true,
                cookieOptions: {
                    isSecure: false,
                    isHttpOnly: false,
                    isSameSite: false,
                    path: config.client.contextRoot
                }
            }
        },*/
        { plugin: pluginPageIndex, options: { config } },
        { plugin: healthMonitor },
        { plugin: authPlugin, options: { config } },
        {
            plugin: apiPlugin('alarms-list-get'),
            options: {
                apiConfig: config.services.alarmsService.getAlarmsList
            }
        },
        {
            plugin: apiPlugin('alarm-get'),
            options: {
                apiConfig: config.services.alarmsService.getAlarm
            }
        },
        {
            plugin: apiPlugin('cargo-list-get'),
            options: {
                apiConfig: config.services.alarmsService.getCargoList
            }
        },
        {
            plugin: apiPlugin('carrier-list-get'),
            options: {
                apiConfig: config.services.alarmsService.getCarrierList
            }
        },
        {
            plugin: apiPlugin('causes-list-get'),
            options: {
                apiConfig: config.services.alarmsService.getCausesList
            }
        },
        {
            plugin: apiPlugin('reports-list-get'),
            options: {
                apiConfig: config.services.reportsService.getReportsList
            }
        },
        {
            plugin: apiPlugin('report-get'),
            options: {
                apiConfig: config.services.reportsService.getReport
            }
        },
        {
            plugin: apiPlugin('template-params-get'),
            options: {
                apiConfig: config.services.templatesService.getTemplatesParamsList
            }
        },
        {
            plugin: apiPlugin('auth-login-post'),
            options: {
                apiConfig: config.services.loginService.auth
            }
        }
    ];

    return plugins;
}
