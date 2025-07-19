import { useState, useEffect, useCallback } from "react";
import { ProductService } from "../services/productService.js";

export const useProducts = () => {
  //estados del service
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  //estado de carga
  const [loading, setLoading] = useState(false);

  //estado de errores
  const [error, setError] = useState(null);

  //estados de filtros
  const [selectedCategory, setSelectedCategory] = useState("All");
};

//cargar productos iniciales
useEffect(() => {
  loadInitialData();
}, []);

//filtrar cambio de categoría
useEffect(() => {
  filterByCategory();
}, [selectedCategory, products]);

const loadInitialData = async () => {
  setLoading(true);
  setError(null);

  try {
    //cargar productso y categorias
    const [productsResult, categoriesResult] = await Promise.all([
      ProductService.getAllProducts(),
      ProductService.getCategories(),
    ]);

    if (productsResult.success) {
      setProducts(productsResult.data);
      setFilteredProducts(productsResult.data);
    } else {
      setError(productsResult.message);
    }

    if (categoriesResult.success) {
      setCategories(["All", ...categoriesResult.data]);
    }
  } catch (error) {
    setError("Error al cargar datos iniciales");
    console.log("Load initial data error: ", error);
  } finally {
    setLoading(false);
  }
};

const filterByCategory = useCallback(async () => {
  if (selectedCategory === "All") {
    setFilteredProducts(products);
    return;
  }

  setLoading(true);
  const result = await ProductService.getProductsByCategory(selectedCategory);

  if (result.success) {
    setFilteredProducts(result.data);
  } else {
    setError(result.message);
  }
  setLoading(false);
}, [selectedCategory, products]);

const getProductById = useCallback(async (id) => {
  setLoading(true);
  const result = await ProductService.getProductById(id);
  setLoading(false);
  return result;
}, []);

const searchProducts = useCallback(
  async (query) => {
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    setLoading(true);
    const result = await ProductService.searchProducts(query);

    if (result.success) {
      setFilteredProducts(result.data);
    } else {
      setError(result.message);
    }
    setLoading(false);
  },
  [products]
);

return {
  //estados
  products: filteredProducts,
  allProducts: products,
  categories,
  loading,
  error,
  selectedCategory,

  //acciones
  setSelectedCategory,
  searchProducts,
  getProductById,
  refreshProducts,
  clearError: () => setError(null),
};
