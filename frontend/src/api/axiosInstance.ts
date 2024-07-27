import axios from 'axios';

import { API_BASE_URL } from 'Utils/const';

const axiosInstance = axios.create({ baseURL: API_BASE_URL, timeout: 1000 });

export default axiosInstance;
