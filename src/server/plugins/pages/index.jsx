/* eslint no-console: ["error", { allow: ["log", "error"] }] */

import path from 'path';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory } from 'history';
import React from 'react';
import Boom from '@hapi/boom';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connectRouter } from 'connected-react-router';
import configureStore from '../../../configure-store';
import Routes from '../../../routes';
import readAssetsManifest from '../../lib/read-assets-manifest';
import template from './index.html.ejs';

export const register = (server, options) => {
    let assets;
    const {
        config: {
            csp,
            client: appSettings,
            publicServices
        }
    } = options;
    const CSP_HEADER_VALUE = Object.keys(csp)
        .map( optionName => `${optionName} ${csp[optionName]}`).join('; ');

    const handler = async (request, h) => {
        if (!assets) {
            assets = readAssetsManifest();
        }

        const { contextRoot } = appSettings;
        const basename = contextRoot === '/' ? '' : contextRoot;
        const url = request.path;

        const history = createMemoryHistory({ initialEntries: [url] });

        const defaultState = {
            router: connectRouter(history)(undefined, undefined),
            settings: {
                ...appSettings,
                publicServices
            }
        };
        const store = configureStore(false)(defaultState);
        const context = {};

        const appCode = (
            <Provider store={ store }>
                <StaticRouter location={ url } basename={ basename } context={ context }>
                    <Routes />
                </StaticRouter>
            </Provider>
        );

        let page;

        try {
            page = template({
                cssFiles: assets.css,
                jsFiles: assets.js,
                contextRoot: contextRoot ? path.normalize(`${contextRoot}/`) : '',
                content: renderToString(appCode),
                state: JSON.stringify(store.getState()),
                pageTitle: appSettings.pageTitle,
                appName: appSettings.projectName,
                appVersion: appSettings.version,
                globalNodeEnv: global.process.env.NODE_ENV
            });
        } catch (error) {
            console.error('error during render process', error);

            return h.response(Boom.badImplementation());
        }

        if (context.url) {
            return h.redirect(context.url);
        }

        return h.response(page)
            .header('X-FRAME-OPTIONS', 'DENY')
            .header('Content-Security-Policy', CSP_HEADER_VALUE);
    };

    server.route({ method: 'GET', path: '/{whateverPath?}', handler }); // root route
    server.route({ method: 'GET', path: '/{whateverPath*}', handler }); // hack to support several slashes in path
};

export default {
    name: 'pages/index',
    register
};
