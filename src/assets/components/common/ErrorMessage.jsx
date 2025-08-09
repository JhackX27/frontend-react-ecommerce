<<<<<<< HEAD
import React from "react";

=======
>>>>>>> rama-nueva
export const ErrorMessage = ({ message, onRetry, onClose }) => {
  return (
    <div className="bg-state-danger/10 border border-state-danger/20 text-state-danger px-4 py-3 rounded-lg mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
<<<<<<< HEAD
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
=======
          <span className="font-bold text-state-danger mr-2">⚠</span>
>>>>>>> rama-nueva
          <span className="font-Tertiary-Inter">{message}</span>
        </div>
        <div className="flex items-center gap-2">
          {onRetry && (
            <button
              onClick={onRetry}
<<<<<<< HEAD
              className="text-xs bg-state-danger text-secondary-accent px-2 py-1 rounded hover:bg-state-danger/80 transition-colors"
=======
              className="text-xs bg-state-danger text-secondary-accent px-3 py-1 rounded hover:bg-state-danger/80 transition-colors font-Tertiary-Inter"
>>>>>>> rama-nueva
            >
              Reintentar
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
<<<<<<< HEAD
              className="text-state-danger hover:text-state-danger/80"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
=======
              className="text-state-danger hover:text-state-danger/80 font-bold text-lg px-2"
              title="Cerrar"
            >
              ×
>>>>>>> rama-nueva
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
