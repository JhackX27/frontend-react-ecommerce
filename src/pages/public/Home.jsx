import { useState } from "react";
import { ProductGrid } from "../../assets/components/ui/ProductGrid.jsx";
import { Footer } from "../../assets/components/layout/Footer.jsx";
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
    
    setSelectedCategory(category);
    
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
          <ProductGrid products={products} />
        </div>
      </div>

      <Footer />
    </div>
  );
};
