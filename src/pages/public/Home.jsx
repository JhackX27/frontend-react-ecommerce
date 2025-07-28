import { useState } from "react";
import { ProductGrid } from "../../assets/components/ProductGrid.jsx";
import { Footer } from "../../assets/components/Footer.jsx";
import { Loading } from "../../assets/components/common/Loading.jsx";
import { ErrorMessage } from "../../assets/components/common/ErrorMessage.jsx";
import { useProducts } from "../../hooks/useProducts.js";

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
    //evitar recargar la misma categoría
    if (selectedCategory === category) return;

    //guardar la posición de scroll actual
    const scrollPosition = window.scrollY;

    //cambiar la categoría
    setSelectedCategory(category);

    //restaurar la posición de scroll después de que React actualice el DOM
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
    });
  };

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
          {/* Error message */}
          {error && (
            <ErrorMessage
              message={error}
              onRetry={refreshProducts}
              onClose={clearError}
            />
          )}

          {/* filtros por categoría */}
          <div className="flex gap-4 flex-wrap mb-8">
            {categories.map((category) => {
              {
                /* verificar si category es objeto o cadena */
              }
              const categoryValue =
                typeof category === "object"
                  ? category.name || category.slug || JSON.stringify(category)
                  : category;
              const categoryKey =
                typeof category === "object"
                  ? category.slug || category.id || JSON.stringify(category)
                  : category;

              const isSelected = selectedCategory === categoryValue;

              return (
                <button
                  className={
                    `font-Tertiary-Inter text-secondary-accent font-normal py-2 px-4 rounded-md active:scale-105 active:bg-primary-light transition-all ease-in cursor-pointer ` +
                    (isSelected
                      ? "bg-primary-light scale-105"
                      : "bg-primary-accent")
                  }
                  onClick={() => handleCategoryChange(categoryValue)}
                  key={categoryKey}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <ProductGrid products={products} />
        </div>
      </div>

      <Footer />
    </div>
  );
};
