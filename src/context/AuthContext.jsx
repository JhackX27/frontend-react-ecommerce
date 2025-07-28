<<<<<<< HEAD
import { createContext, useContext, useState, useEffect } from "react";
import { AuthService } from "../services/authService.js";
import { tokenManager } from "../utils/tokenManager.js";
=======
import { createContext, useContext, useState } from "react";
>>>>>>> rama-prueba

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
<<<<<<< HEAD
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Iniciar en true para verificar token al cargar
  const [error, setError] = useState(null);

  // Verificar si hay un token válido al cargar la aplicación
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Verificar el estado de autenticación al cargar
  const checkAuthStatus = async () => {
    try {
      const token = tokenManager.getAccessToken();

      if (token && !tokenManager.isTokenExpired(token)) {
        // Si hay un token válido, obtener información del usuario
        const userData = tokenManager.getUserData();
        if (userData) {
          setUser(userData);
          setIsAuthenticated(true);
        }
      } else {
        // Si no hay token válido, limpiar todo
        tokenManager.clearTokens();
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      tokenManager.clearTokens();
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  // Función de login con API real
=======
  // Estados simplificados
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función de login simplificada
>>>>>>> rama-prueba
  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
<<<<<<< HEAD
      const result = await AuthService.login(username, password);

      if (result.success) {
        // Guardar tokens y datos del usuario
        tokenManager.setTokens(result.data.token, result.data.refreshToken);
        tokenManager.setUserData(result.data.user);

        setUser(result.data.user);
        setIsAuthenticated(true);

        return result;
      } else {
        setError(result.message);
        return result;
      }
    } catch (error) {
      const errorMessage = "Error de conexión. Intenta nuevamente.";
      setError(errorMessage);
=======
      // Simulación de login exitoso
      console.log(`Login attempt with: ${username}, ${password}`);

      // Simular un usuario
      const mockUser = {
        id: 1,
        username,
        email: `${username}@example.com`,
        firstName: "Usuario",
        lastName: "Demo",
      };

      setUser(mockUser);
      setIsAuthenticated(true);
      setLoading(false);

      return {
        success: true,
        data: { user: mockUser },
        message: "Login exitoso",
      };
    } catch (error) {
      setError("Error en login");
      setLoading(false);
>>>>>>> rama-prueba

      return {
        success: false,
        data: null,
<<<<<<< HEAD
        message: errorMessage,
        error: error,
      };
    } finally {
      setLoading(false);
    }
  };

  // Función de logout
  const logout = async () => {
    setLoading(true);

    try {
      // Intentar hacer logout en el servidor (opcional)
      await AuthService.logout();
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      // Limpiar estado local independientemente del resultado del servidor
      tokenManager.clearTokens();
      setUser(null);
      setIsAuthenticated(false);
      setError(null);
      setLoading(false);
    }
  };

  // Función para refrescar el token
  const refreshToken = async () => {
    try {
      const refreshTokenValue = tokenManager.getRefreshToken();

      if (!refreshTokenValue) {
        throw new Error("No refresh token available");
      }

      const result = await AuthService.refreshToken(refreshTokenValue);

      if (result.success) {
        tokenManager.setTokens(result.data.token, refreshTokenValue);
        return true;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      // Si falla el refresh, hacer logout
      await logout();
      return false;
    }
=======
        message: "Error en login",
        error: error,
      };
    }
  };

  // Función de logout simplificada
  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    console.log("Logout successful");
>>>>>>> rama-prueba
  };

  // Limpiar errores
  const clearError = () => {
    setError(null);
  };

  // Valor del contexto
  const value = {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
<<<<<<< HEAD
    refreshToken,
    clearError,
    checkAuthStatus,
=======
    clearError,
>>>>>>> rama-prueba
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};
