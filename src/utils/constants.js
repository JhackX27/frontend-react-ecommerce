export const API_CONFIG = {
  BASE_URL:
    import.meta.env.VITE_API_BASE_URL || "https://api.jhackalzamora.com/api",
  TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000,
  ENABLE_LOGS:
    import.meta.env.VITE_ENABLE_LOGS === "true" || import.meta.env.DEV,
};

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  CART: "/cart",
  PROFILE: "/profile",
  DASHBOARD: "/dashboard",
};

export const LOCAL_STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER_DATA: "userData",
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
