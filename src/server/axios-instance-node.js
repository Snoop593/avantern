import axios from 'axios';
import http from 'http';
import https from 'https';

const axiosInstanceConfig = {
    timeout: 60000,
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true }),
    maxRedirects: 10,
    // cap the maximum content length we'll accept to 50MBs, just in case
    maxContentLength: 50 * 1000 * 1000
};

const axiosInstanceNode = axios.create(axiosInstanceConfig);

export default axiosInstanceNode;
