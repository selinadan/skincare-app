import axios, { AxiosInstance } from 'axios';

interface ApiClientConfig {
	baseURL: string;
	timeout?: number;
}

class ApiClient {
	private client: AxiosInstance;

	constructor(config: ApiClientConfig) {
		this.client = axios.create({
			baseURL: config.baseURL,
			timeout: config.timeout || 1000,
		});
	}

	getClient() {
		return this.client;
	}
}

export const createApiClient = (config: ApiClientConfig): ApiClient => {
	return new ApiClient(config);
};
