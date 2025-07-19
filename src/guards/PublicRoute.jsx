import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export const PublicRoute = ({ children, redirectTo = "/" }) => {
  const { isAuthenticated } = useAuth();

  //si ya está autenticado, redirigir
  if (isAuthenticated) {
    return (
      <Navigate
        to={redirectTo}
        replace
      />
    );
  }

  //si no está autenticado, mostrar el componente
  return children;
};
