import axios from 'axios';

import { PATHS } from 'Utils/constants';

const axiosInstance = axios.create({ baseURL: PATHS.api, timeout: 1000 });

export default axiosInstance;
