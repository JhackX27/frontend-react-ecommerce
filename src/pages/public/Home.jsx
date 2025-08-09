<<<<<<< HEAD
// src/pages/public/Home.jsx - VERSIÓN CORREGIDA
=======
>>>>>>> rama-nueva
import { useState } from "react";
import { ProductGrid } from "../../assets/components/ui/ProductGrid.jsx";
import { Footer } from "../../assets/components/layout/Footer.jsx";
import { Loading } from "../../assets/components/common/Loading.jsx";
import { ErrorMessage } from "../../assets/components/common/ErrorMessage.jsx";
import { useProducts } from "../../hooks/useProducts.js";
<<<<<<< HEAD
import imgHero from "/t-shirt_hero.png";
=======
>>>>>>> rama-nueva

export const Home = () => {
  const {
    products,
<<<<<<< HEAD
    categories, // 👈 Usar categorías del hook, no hardcodeadas
=======
    categories,
>>>>>>> rama-nueva
    loading,
    error,
    selectedCategory,
    setSelectedCategory,
<<<<<<< HEAD
    searchProducts,
=======
>>>>>>> rama-nueva
    refreshProducts,
    clearError,
  } = useProducts();

<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    // Evitar recargar la misma categoría
    if (selectedCategory === category) return;

    // Guardar la posición de scroll actual
    const scrollPosition = window.scrollY;

    // Cambiar la categoría
    setSelectedCategory(category);
    setSearchTerm(""); // Limpiar búsqueda al cambiar categoría

    // Restaurar la posición de scroll después de que React actualice el DOM
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
    });
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchProducts(value);
  };

  if (loading && products.length === 0) {
    return <Loading message="Cargando productos..." />;
  }

  return (
    <div>
      <div className="bg-secondary-light relative pt-[184px] max-iphone:pt-[72px]">
        <div className="h-[calc(100vh-184px)] max-iphone:h-[calc(100vh-72px)]">
          <img
            src={imgHero}
            alt=""
          />
        </div>

        <div className="container mx-auto mt-4 px-4 max-iphone:mt-10">
=======
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
>>>>>>> rama-nueva
          {/* Error message */}
          {error && (
            <ErrorMessage
              message={error}
              onRetry={refreshProducts}
              onClose={clearError}
            />
          )}

<<<<<<< HEAD
          {/* Buscador */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-4 pr-12 border border-secondary-dark rounded-lg outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent bg-secondary-accent font-Tertiary-Inter"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  className="w-5 h-5 text-secondary-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Filtros por categoría */}
          <div className="flex gap-4 flex-wrap mb-8">
            {categories.map((category) => {
              // Verificar si category es un objeto o una cadena
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
                  className={`font-Tertiary-Inter text-secondary-accent font-normal py-3 px-6 rounded-lg transition-all duration-200 ${
                    isSelected
                      ? "bg-primary-light scale-105 shadow-md"
                      : "bg-primary-accent hover:bg-primary-light hover:scale-102"
                  }`}
                  onClick={() => handleCategoryChange(categoryValue)}
                  key={categoryKey}
                >
                  {categoryValue}
=======
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
>>>>>>> rama-nueva
                </button>
              );
            })}
          </div>
<<<<<<< HEAD

          {/* Loading overlay para filtros */}
          {loading && products.length > 0 && (
            <div className="text-center py-4">
              <div className="inline-flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-light mr-2"></div>
                <span className="text-secondary-dark font-Tertiary-Inter">
                  Filtrando productos...
                </span>
              </div>
            </div>
          )}

          {/* Grid de productos */}
          <ProductGrid products={products} />

          {/* Mensaje cuando no hay productos */}
          {!loading && products.length === 0 && !error && (
            <div className="text-center py-12">
              <div className="text-primary-dark text-lg font-Tertiary-Inter">
                {searchTerm
                  ? `No se encontraron productos para "${searchTerm}"`
                  : "No hay productos disponibles"}
              </div>
            </div>
          )}
=======
          <ProductGrid products={products} />
>>>>>>> rama-nueva
        </div>
      </div>

      <Footer />
    </div>
  );
};
