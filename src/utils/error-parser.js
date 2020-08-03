import { SERVER_ERROR, CLIENT_ERROR } from '../constants/errors';

export default (error) => {
    if (error.response !== undefined) {
        const handledError = {};
        const {
            data: {
                error: errorName,
                error_description: errorDescription,
                message
            },
            status
        } = error.response;

        handledError.statusCode = status;
        if (errorName === undefined) {
            let _error = '';

            if (status >= 500 && status < 600) {
                _error = SERVER_ERROR;
            }
            if (status >= 400 && status < 500) {
                _error = CLIENT_ERROR;
            }
            handledError.name = _error;
            handledError.description = _error;

            return handledError;
        }
        handledError.name = errorName;
        handledError.description = errorDescription ?? message;

        return handledError;
    }
    const { message } = error;

    return {
        name: message,
        description: message
    };
};
