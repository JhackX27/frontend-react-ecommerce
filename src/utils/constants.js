export const API_CONFIG = {
  BASE_URL:
    process.env.NODE_ENV === "production"
      ? "https://localhost/api"
      : "https://dummyjson.com",

  TIMEOUT: 10000,
  ENABLE_LOGS: process.env.NODE_ENV === "development",
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

// Usuarios de prueba para DummyJSON
export const DEMO_USERS = {
  ADMIN: { username: "kminchelle", password: "0lelplR" },
  USER: { username: "atuny0", password: "9uQFF1Lh" },
};
