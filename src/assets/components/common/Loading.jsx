<<<<<<< HEAD
=======
import React from "react";

>>>>>>> rama-prueba
export const Loading = ({ message = "Cargando..." }) => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light mb-4"></div>
        <span className="text-secondary-dark font-Tertiary-Inter">
          {message}
        </span>
      </div>
    </div>
  );
};
