import { createContext, useContext, useState } from "react";

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  // Estados simplificados
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función de login simplificada
  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
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

      return {
        success: false,
        data: null,
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
    clearError,
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
