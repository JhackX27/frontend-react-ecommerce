import { privateApi } from "./axiosConfig.js";
import { tokenManager } from "../utils/tokenManager.js";

export class AuthService {
  //login
<<<<<<< HEAD
  static async login(username, password) {
    try {
      const response = await privateApi.post("/auth/login", {
        username,
        password,
        expiresInMins: 30,
=======
  static async login(email, password) {
    try {
      const response = await privateApi.post("/users/login", {
        email,
        password,
>>>>>>> rama-nueva
      });

      const { token, refreshToken, ...user } = response.data;

<<<<<<< HEAD
      //guardar tokens
      tokenManager.setTokens(token, refreshToken);
=======
      //guardar tokens y datos del usuario
      tokenManager.setTokens(token, refreshToken);
      tokenManager.setUserData(user);
>>>>>>> rama-nueva

      return {
        success: true,
        data: {
          user,
<<<<<<< HEAD
          accessToken: token,
=======
          token,
>>>>>>> rama-nueva
          refreshToken,
        },
        message: "Login exitoso",
      };
    } catch (error) {
      console.error("Login error: ", error);

      let errorMessage = "Error en login";

      if (error.response) {
        switch (error.response.status) {
          case 400:
            errorMessage = "Usuario o contraseña inválidos";
            break;
          case 401:
            errorMessage = "Credenciales incorrectas";
            break;
          default:
            errorMessage = error.response.data?.message || "Error desconocido";
        }
      } else if (error.request) {
        errorMessage = "Error de conexión. Verifica tu internet";
      }

      return {
        success: false,
        data: null,
        message: errorMessage,
        error: error,
      };
    }
  }

  //obtener perfil del usuario autenticado
<<<<<<< HEAD
=======
  /*
>>>>>>> rama-nueva
  static async getUserProfile() {
    try {
      const response = await privateApi.get("/auth/me");

      return {
        success: true,
        data: response.data,
        message: "Perfil obtenido exitosamente",
      };
    } catch (error) {
      console.error("Get profile error: ", error);
      return {
        success: false,
        data: null,
        message: "Error al obtener perfil",
        error: error,
      };
    }
  }
<<<<<<< HEAD

  //refresh token
  static async refreshToken() {
    try {
      const refreshToken = tokenManager.getRefreshToken();

      if (!refreshToken) {
        throw new Error("No refresh token available");
      }

      const response = await privateApi.post("/auth/refresh", {
        refreshToken,
        expiresInMins: 30,
      });

      const { token } = response.data;
      tokenManager.setTokens(token, refreshToken);

      return {
        success: true,
        data: { accessToken: token },
        message: "Token renovado exitosamente",
      };
    } catch (error) {
      console.error("Refresh token error: ", error);
      tokenManager.clearTokens();
=======
    */

  //refresh token
  static async refreshToken(refreshTokenValue) {
    try {
      const response = await privateApi.post("/users/refresh-token", {
        refreshToken: refreshTokenValue,
      });

      const { token } = response.data;

      return {
        success: true,
        data: { token },
        message: "Token renovado exitosamente",
      };
    } catch (error) {
>>>>>>> rama-nueva
      return {
        success: false,
        data: null,
        message: "Sesión expirada",
        error: error,
      };
    }
  }

<<<<<<< HEAD
  //logout
  static async logout() {
    try {
=======
  //registro
  static async register(userData) {
    try {
      const response = await privateApi.post("/users/register", userData);

      return {
        success: true,
        data: response.data,
        message: "Usuario registrado exitosamente",
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: error.response?.data?.message || "Error en registro",
        error: error,
      };
    }
  }

  //logout
  static async logout() {
    try {
      await privateApi.post("/users/logout");

>>>>>>> rama-nueva
      tokenManager.clearTokens();

      return {
        success: true,
        message: "Logout exitoso",
      };
    } catch (error) {
      console.error("Logout error: ", error);
<<<<<<< HEAD
=======

>>>>>>> rama-nueva
      tokenManager.clearTokens();

      return {
        success: true,
        message: "Logout exitoso",
      };
    }
  }

  //verificar si esta autenticado
  static isAuthenticated() {
    const token = tokenManager.getAccessToken();
    return token && !tokenManager.isTokenExpired(token);
  }

  //obtener usuario actual del token
  static getCurrentUser() {
    const token = tokenManager.getAccessToken();
    return tokenManager.getUserFromToken(token);
  }
}
