import axios, { AxiosRequestConfig } from "axios";

export interface ApiResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a20f0af99b41412cb63a53a25e4d2109",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<ApiResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default APIClient;
