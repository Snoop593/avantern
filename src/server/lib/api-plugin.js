import hoek from 'hoek';
import axios from './../axios-instance-node';
import createError from './create-error';

export const apiPlugin = (name) => {
    const apiPlugin = {
        name,
        register: (server, { apiConfig }) => {
            const {
                method, path, url: urlTemplate, option = {}
            } = apiConfig;

            server.route({
                method,
                path,
                handler: async (request, h) => {
                    let url = '';
                    let axiosRequest;

                    if (method === 'GET') {
                        const { query } = request;
                        url = hoek.reachTemplate({ ...query }, urlTemplate);
                        axiosRequest = { url, method };
                    } else if (method === 'POST') {
                        const { payload } = request;
                        url = hoek.reachTemplate({ ...payload }, urlTemplate);
                        axiosRequest = {
                            url,
                            method,
                            data: {
                                ...payload
                            }
                        };
                    }

                    try {
                        const { data, status } = await axios({ ...axiosRequest, ...option });
                        server.log(['info'], `${name}: request: ${JSON.stringify({ ...axiosRequest })}`);
                        server.log(['info'], `${name}: response: ${JSON.stringify(data)}`);

                        return h.response(data).code(status);
                    } catch (e) {
                        const { response: { status = 500, data } = {} } = e;

                        server.log(['error'], `${name}: request: ${JSON.stringify({ ...axiosRequest })}`);
                        server.log(['error'], `${name}: response: ${e}`);

                        const error = createError(status);

                        return h.response({ error, ...data }).code(status);
                    }
                }
            });
        }
    };

    return apiPlugin;
};
