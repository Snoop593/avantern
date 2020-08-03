const name = 'auth-plugin';

function getAuthToken(request, tokenCookieName) {
    return (request.state && request.state[tokenCookieName])
        || (request.query && request.query[tokenCookieName])
        || (request.headers && request.headers[tokenCookieName])
        || '';
}

function jwtAuth(server, options) {
    const { config: { client } } = options;
    const { tokenCookieName, loginPage } = client.auth;
    const authenticate = async (request, h) => {
        const token = getAuthToken(request,tokenCookieName)

        let credentials = {
            token: '',
            permissions: []
        };
        if(token){
            return h.authenticated({ credentials });
        }
        return h.authenticated({ credentials });
        //reply.redirect(loginPage);
    };

    return { authenticate };
}

export default {
    name,
    register: (server, options) => {
        // Схема аутентификации для страниц
        server.auth.scheme('jwtAuth', jwtAuth);
        server.auth.strategy('jwt', 'jwtAuth', {
            config: options.config
        });

        // Стратегия по умолчанию
        server.auth.default('jwt');
    }
};
