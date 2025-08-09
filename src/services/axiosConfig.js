import axios from "axios";
import { tokenManager } from "../utils/tokenManager.js";
import { API_CONFIG } from "../utils/constants.js";

//instancia para apis públicas
export const publicApi = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

//instancia para apis privadas
export const privateApi = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

//interceptor para agregar token
privateApi.interceptors.request.use(
  (config) => {
    const token = tokenManager.getAccessToken();
    if (token && !tokenManager.isTokenExpired(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//interceptor para respuestas y refresh token
privateApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    //si token expira y no se renueva
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = tokenManager.getRefreshToken();
        if (refreshToken) {
          //intentar renovar token
          const response = await axios.post(
            `${API_CONFIG.BASE_URL}/users/refresh-token`,
            {
              refreshToken,
            }
          );

          const { token } = response.data;
          tokenManager.setTokens(token, refreshToken);

          //reintentar petición original con nuevo token
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return privateApi(originalRequest);
        }
      } catch (refreshError) {
        //si falla refresh, limpiar tokens y redirigir al login
        tokenManager.clearTokens();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

if (API_CONFIG.ENABLE_LOGS) {
  publicApi.interceptors.request.use((request) => {
    console.log(
      "🚀 Public API Request: ",
      request.method?.toUpperCase(),
      request.url
    );
    return request;
  });

  privateApi.interceptors.request.use((request) => {
    console.log(
      "🔒 Private API Request: ",
      request.method?.toUpperCase(),
      request.url
    );
    return request;
  });

  publicApi.interceptors.response.use(
    (response) => {
      console.log(
        "✅ Public API Response: ",
        response.status,
        response.config.url
      );
      return response;
    },
    (error) => {
      console.log(
        "❌ Public API Error: ",
        error.response?.status,
        error.config?.url
      );
      return Promise.reject(error);
    }
  );

  privateApi.interceptors.response.use(
    (response) => {
      console.log(
        "✅ Private API Response: ",
        response.status,
        response.config.url
      );
      return response;
    },
    (error) => {
      console.log(
        "❌ Private API Error: ",
        error.response?.status,
        error.config?.url
      );
      return Promise.reject(error);
    }
  );
}
