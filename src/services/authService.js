import { privateApi } from "./axiosConfig.js";
import { tokenManager } from "../utils/tokenManager.js";

export class AuthService {
  //login
  static async login(username, password) {
    try {
      const response = await privateApi.post("/auth/login", {
        username,
        password,
        expiresInMins: 30,
      });

      const { token, refreshToken, ...user } = response.data;

      //guardar tokens y datos del usuario
      tokenManager.setTokens(token, refreshToken);
      tokenManager.setUserData(user);

      return {
        success: true,
        data: {
          user,
          token,
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

  //refresh token
  static async refreshToken(refreshTokenValue) {
    try {
      const response = await privateApi.post("/auth/refresh", {
        refreshToken: refreshTokenValue,
        expiresInMins: 30,
      });

      const { token } = response.data;

      return {
        success: true,
        data: { token },
        message: "Token renovado exitosamente",
      };
    } catch (error) {
      console.error("Refresh token error: ", error);
      return {
        success: false,
        data: null,
        message: "Sesión expirada",
        error: error,
      };
    }
  }

  //logout
  static async logout() {
    try {
      tokenManager.clearTokens();

      return {
        success: true,
        message: "Logout exitoso",
      };
    } catch (error) {
      console.error("Logout error: ", error);
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
