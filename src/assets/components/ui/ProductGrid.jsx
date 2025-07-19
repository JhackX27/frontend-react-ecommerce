import { useState, useMemo } from "react";
import { ProductCart } from "../ProductCart";
import { Pagination } from "../Pagination";
import { useSelector } from "react-redux";

export const ProductGrid = () => {
  const products = useSelector((state) => state.product.filteredItems);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Productos por página

  // Calcular productos para la página actual
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  }, [products, currentPage, itemsPerPage]);

  // Calcular total de páginas
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Resetear a página 1 cuando cambien los productos filtrados
  useMemo(() => {
    setCurrentPage(1);
  }, [products]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll suave hacia arriba al cambiar página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Grid de productos */}
      <div
        className="grid grid-col-1 gap-4 py-4 px-1
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
              image={product.image}
            />
          );
        })}
      </div>

      {/* Componente de paginación */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
      />
    </div>
  );
};
