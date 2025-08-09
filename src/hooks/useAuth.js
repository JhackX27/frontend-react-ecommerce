import { useState, useEffect, useCallback } from "react";
import { AuthService } from "../services/authService.js";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //verificar authenticacion al cargar
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = useCallback(() => {
    if (AuthService.isAuthenticated()) {
      const currentUser = AuthService.getCurrentUser();
      setUser(currentUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);

    const result = await AuthService.login(email, password);

    if (result.success) {
      setUser(result.data.user);
      setIsAuthenticated(true);
    } else {
      setError(result.message);
    }

    setLoading(false);
    return result;
  }, []);

  const register = useCallback(async (userData) => {
    setLoading(true);
    setError(null);

    const result = await AuthService.register(userData);

    setLoading(false);
    return result;
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    await AuthService.logout();

    setUser(null);
    setIsAuthenticated(false);
    setError(null);
    setLoading(false);
  }, []);

  return {
    //estados
    user,
    loading,
    error,
    isAuthenticated,

    //acciones,
    login,
    register,
    logout,
    clearError: () => setError(null),
    refreshAuth: checkAuthStatus,
  };
};
