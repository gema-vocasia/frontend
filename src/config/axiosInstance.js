import axios from "axios";
import { getAccessToken } from "../utils/tokenManager";

const config = {
  BASE_URL: "http://localhost:8080", // URL yang benar
};

export const axiosInstance = axios.create({
  baseURL: config.BASE_URL, // Gunakan baseURL yang sudah benar
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
