import { useState, useMemo, useEffect } from "react";
import { ProductCart } from "./ProductCart.jsx";
import { Pagination } from "./Pagination.jsx";

export const ProductGrid = ({ products = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
<<<<<<< HEAD:src/assets/components/ProductGrid.jsx
  const itemsPerPage = 6; // productos por página
=======
  const itemsPerPage = 6;
>>>>>>> rama-prueba:src/assets/components/ui/ProductGrid.jsx

  // Ccalcular productos para la página actual
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  }, [products, currentPage, itemsPerPage]);

  // calcular total de páginas
  const totalPages = Math.ceil(products.length / itemsPerPage);

<<<<<<< HEAD:src/assets/components/ProductGrid.jsx
  // resetear a página 1 cuando cambien los productos filtrados
  useMemo(() => {
=======
  // Resetear a página 1 cuando cambien los productos filtrados
  useEffect(() => {
>>>>>>> rama-prueba:src/assets/components/ui/ProductGrid.jsx
    setCurrentPage(1);
  }, [products]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // scroll suave hacia arriba al cambiar página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

<<<<<<< HEAD:src/assets/components/ProductGrid.jsx
  // si no hay productos, mostrar mensaje
=======
  // Si no hay productos, mostrar mensaje
>>>>>>> rama-prueba:src/assets/components/ui/ProductGrid.jsx
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-dark font-Tertiary-Inter text-lg">
          No hay productos disponibles
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Grid de productos */}
      <div
        className="grid grid-cols-1 gap-4 py-4 px-1
        max-iphone:py-8 max-iphone:px-1 max-iphone:grid-cols-2 max-iphone:gap-4 
        max-tablet:grid-cols-3
        max-laptop:grid-cols-3
        "
      >
        {paginatedProducts.map((product) => {
          return (
            <ProductCart
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={
                product.images && product.images.length > 0
                  ? product.images[0]
                  : null
              }
              thumbnail={product.thumbnail}
            />
          );
        })}
      </div>

      {/* Componente de paginación - Solo mostrar si hay múltiples páginas */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
        />
      )}
    </div>
  );
};
