import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
}) => {
  // Calcular rango de elementos mostrados
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generar números de página a mostrar
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // Máximo 5 números visibles

    if (totalPages <= maxVisible) {
      // Si hay 5 páginas o menos, mostrar todas sin puntos
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Si hay más de 5 páginas, usar puntos suspensivos
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {/* Info de elementos */}
      <p className="font-Tertiary-Inter text-secondary-dark text-sm">
        Showing {startItem}-{endItem} of {totalItems} products
      </p>

      {/* Controles de paginación */}
      <div className="flex items-center gap-2">
        {/* Botón Anterior */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`
            font-Tertiary-Inter flex items-center gap-1 px-3 py-2 rounded-md
            transition-all ease-in
            ${
              currentPage === 1
                ? "bg-secondary-dark text-primary-dark cursor-not-allowed"
                : "bg-primary-accent text-secondary-accent hover:bg-primary-light hover:scale-105 active:scale-105"
            }
          `}
        >
          <ChevronLeft size={16} />
          <span className="max-iphone:hidden">Prev</span>
        </button>

        {/* Números de página */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            <div key={index}>
              {page === "..." ? (
                <span className="font-Tertiary-Inter px-3 py-2 text-secondary-dark">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => onPageChange(page)}
                  className={`
                    font-Tertiary-Inter px-3 py-2 rounded-md transition-all ease-in
                    ${
                      currentPage === page
                        ? "bg-primary-light text-secondary-accent scale-105 font-medium"
                        : "bg-primary-accent text-secondary-accent hover:bg-primary-light hover:scale-105"
                    }
                  `}
                >
                  {page}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`
            font-Tertiary-Inter flex items-center gap-1 px-3 py-2 rounded-md
            transition-all ease-in
            ${
              currentPage === totalPages
                ? "bg-secondary-dark text-primary-dark cursor-not-allowed"
                : "bg-primary-accent text-secondary-accent hover:bg-primary-light hover:scale-105 active:scale-105"
            }
          `}
        >
          <span className="max-iphone:hidden">Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
