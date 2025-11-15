import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 
  // "http://localhost:4000/api";
  "http://192.168.191.29:4000/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // important: allows sending/receiving cookies
});

// Response interceptor → refresh token flow
apiClient.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config as any;

    // if refresh request itself fails, do not retry
    if (originalRequest.url.includes("/auth/refresh")) {
      return Promise.reject(err);
    }

    // If unauthorized and not retried yet → refresh
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await apiClient.post("/auth/refresh"); // refresh token request

        // Retry original request
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);

        // stop infinite loop → logout or redirect
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err);
  }
);


export default apiClient;
