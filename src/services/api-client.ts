import axios from "axios";

export interface ApiResponse<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a20f0af99b41412cb63a53a25e4d2109",
  },
});

export default apiClient;
