import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-light">
      <div className="text-center p-8 bg-secondary-accent rounded-lg shadow-lg max-w-md mx-4">
        <h1 className="text-6xl font-bold text-primary-dark mb-4 font-Primary-Poppins">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-primary-dark mb-4 font-Primary-Poppins">
          Página no encontrada
        </h2>
        <p className="text-secondary-dark mb-8 font-Tertiary-Inter">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary-light text-secondary-accent px-6 py-3 rounded-lg hover:bg-primary-accent transition-colors font-Tertiary-Inter font-medium"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};
