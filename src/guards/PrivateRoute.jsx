import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { Loading } from "../assets/components/common/Loading.jsx";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  //mostrar loading mientras verifica autenticación
  if (loading) {
    return <Loading message="Verificando autenticación..." />;
  }

  //si no está autenticado, redirigir al login
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  //si está autenticado, mostrar el componente
  return children;
};
