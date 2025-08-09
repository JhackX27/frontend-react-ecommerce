export const ErrorMessage = ({ message, onRetry, onClose }) => {
  return (
    <div className="bg-state-danger/10 border border-state-danger/20 text-state-danger px-4 py-3 rounded-lg mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-state-danger mr-2">⚠</span>
          <span className="font-Tertiary-Inter">{message}</span>
        </div>
        <div className="flex items-center gap-2">
          {onRetry && (
            <button
              onClick={onRetry}
              className="text-xs bg-state-danger text-secondary-accent px-3 py-1 rounded hover:bg-state-danger/80 transition-colors font-Tertiary-Inter"
            >
              Reintentar
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="text-state-danger hover:text-state-danger/80 font-bold text-lg px-2"
              title="Cerrar"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
