/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import Hapi from '@hapi/hapi';
import config from '../../config';
import getPlugins from './plugins';

export default async function getServer() {

    const server = new Hapi.Server({
        port: config.server.port,
        state: {
            strictHeader: false
        }
    });

    server.ext('onPostStart', (server) => {
        console.log(`Server is running: ${server.info.uri}`);
    });

    try {
        await server.register(getPlugins(config));
    } catch (error) {
        console.error('Failed to start server', error);
        process.exit(1);
    }

    return server;
}
