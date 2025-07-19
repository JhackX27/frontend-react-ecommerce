import { useState } from "react";
import { ProductGrid } from "../../assets/components/ui/ProductGrid.jsx";
import { Footer } from "../../assets/components/layout/Footer.jsx";
import { Loading } from "../../assets/components/common/Loading.jsx";
import { ErrorMessage } from "../../assets/components/common/ErrorMessage.jsx";
import { useProducts } from "../../hooks/useProducts.js";

const categories = ["All", "Graphic Cards", "Processors", "Memory", "Storage"];

export const Home = () => {
  const {
    products,
    categories,
    loading,
    error,
    selectedCategory,
    setSelectedCategory,
    refreshProducts,
    clearError,
  } = useProducts();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (loading && products.length === 0) {
    return <Loading message="Cargando productos..." />;
  }

  return (
    <div>
      <div
        className="/*propiedades moviles*/
         bg-secondary-light relative pt-[184px]
      
         /*propiedades tablet pc*/
         max-iphone:pt-[72px]
      "
      >
        <div
          className="bg h-[calc(100vh-184px)] 
        max-iphone:h-[calc(100vh-72px)]"
        ></div>
        <div
          className="container mx-auto mt-4 px-4
        max-iphone:mt-10
        "
        >
          {/* error message */}
          {error && (
            <ErrorMessage
              message={error}
              onRetry={refreshProducts}
              onClose={clearError}
            />
          )}

          {/* filtros por categoria */}
          <div className="flex gap-4 flex-wrap">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  className={
                    `font-Tertiary-Inter text-secondary-accent font-normal py-2 px-4 rounded-md active:scale-105 active:bg-primary-light transition-all ease-in cursor-pointer ` +
                    (isSelected
                      ? "bg-primary-light scale-105"
                      : "bg-primary-accent")
                  }
                  onClick={() => handleCategoryChange(category)}
                  key={category}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* loading overlay para filtros (corregir ui) */}
          {loading && products.length > 0 && (
            <div className="text-center py-4">
              <div className="inline-flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-light mr-2"></div>
                <span className="text-gray-600">Filtrando productos...</span>
              </div>
            </div>
          )}

          {/* grid de productos */}
          <ProductGrid products={products} />

          {/* mensaje cuando no hay productos (corregir ui) */}
          {!loading && products.length === 0 && !error && (
            <div className="text-center py-12">
              <div className="text-primary-dark text-lg">
                No hay productos disponibles
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
