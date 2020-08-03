export default {
    name: 'health-monitor',
    register(server) {
        server.route({
            method: 'GET',
            path: '/healthmonitor',
            handler() {
                return { status: 'UP' };
            },
            config: {
                auth: false
            }
        });
    }
};
