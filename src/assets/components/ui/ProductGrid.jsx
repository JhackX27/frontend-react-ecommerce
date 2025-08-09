import { useState, useMemo, useEffect } from "react";
<<<<<<< HEAD
import { ProductCart } from "./ProductCart.jsx";
=======
import { ProductCard } from "./ProductCard.jsx";
>>>>>>> rama-nueva
import { Pagination } from "./Pagination.jsx";

export const ProductGrid = ({ products = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
<<<<<<< HEAD
  const itemsPerPage = 6;
=======
  const itemsPerPage = 6; // productos por página
>>>>>>> rama-nueva

  // Ccalcular productos para la página actual
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  }, [products, currentPage, itemsPerPage]);

  // calcular total de páginas
  const totalPages = Math.ceil(products.length / itemsPerPage);

<<<<<<< HEAD
  // Resetear a página 1 cuando cambien los productos filtrados
  useEffect(() => {
=======
  // resetear a página 1 cuando cambien los productos filtrados
  useMemo(() => {
>>>>>>> rama-nueva
    setCurrentPage(1);
  }, [products]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // scroll suave hacia arriba al cambiar página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

<<<<<<< HEAD
  // Si no hay productos, mostrar mensaje
=======
  // si no hay productos, mostrar mensaje
>>>>>>> rama-nueva
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
            <ProductCard
              key={product.idProduct}
              idProduct={product.idProduct}
              name={product.name}
              price={product.price}
              description={product.description}
              image={
<<<<<<< HEAD
                product.images && product.images.length > 0
                  ? product.images[0]
                  : null
              }
              thumbnail={product.thumbnail}
=======
                product.image
                  ? `https://api.jhackalzamora.com/${product.image}`
                  : "https://via.placeholder.com/460"
              }
>>>>>>> rama-nueva
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
