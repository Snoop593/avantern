import getServer from './server';

let currentServer;

async function startServer() {
    try {
        currentServer = await getServer();
        await currentServer.start();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to start server', error);
        process.exit(1);
    }
}

startServer();

if (module.hot) {
    module.hot.accept(['./server'], async () => {
        try {
            await currentServer.stop();

            currentServer = getServer; // импорт из сервера заменится самостоятельно
            await startServer();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Failed to update server. You probably need to restart application', error);
        }
    });
}
