import { createContext, useContext, useReducer, useEffect } from "react";
import { AuthService } from "../services/authService.js";

const AuthContext = createContext();

//estados del reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  });

  //verificar autenticación al cargar la app
  useEffect(() => {
    const checkAuth = () => {
      if (AuthService.isAuthenticated()) {
        const user = AuthService.getCurrentUser();
        dispatch({ type: "SET_USER", payload: user });
      }
    };

    checkAuth();
  }, []);

  //función de login
  const login = async (username, password) => {
    dispatch({ type: "LOGIN_START" });

    const result = await AuthService.login(username, password);

    if (result.success) {
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data.user });
    } else {
      dispatch({ type: "LOGIN_ERROR", payload: result.message });
    }

    return result;
  };

  //función de logout
  const logout = async () => {
    await AuthService.logout();
    dispatch({ type: "LOGOUT" });
  };

  //limpiar errores
  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//hook para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};
