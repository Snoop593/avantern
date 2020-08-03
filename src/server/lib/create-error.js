export default (statusCode) => {
    let error = 'Unknown Error';

    if (statusCode >= 500 && statusCode < 600) {
        error = 'Server Error';
    }
    if (statusCode >= 400 && statusCode < 500) {
        error = 'Client Error';
    }

    return {
        statusCode,
        error
    };
};
