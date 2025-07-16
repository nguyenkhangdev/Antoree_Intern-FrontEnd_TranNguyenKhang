// src/lib/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // ví dụ: https://mockapi.io/api/v1
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Xử lý lỗi response
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
