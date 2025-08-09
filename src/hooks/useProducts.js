import { useState, useEffect, useCallback } from "react";
import { ProductService } from "../services/productService.js";

export const useProducts = () => {
<<<<<<< HEAD
  // Estados del service
=======
  // estados del service
>>>>>>> rama-nueva
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});

<<<<<<< HEAD
  // Estado de carga
  const [loading, setLoading] = useState(false);

  // Estado de errores
  const [error, setError] = useState(null);

  // Estados de filtros
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Cargar productos iniciales
=======
  // estado de carga
  const [loading, setLoading] = useState(false);

  // estado de errores
  const [error, setError] = useState(null);

  // estados de filtros
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ccargar productos iniciales
>>>>>>> rama-nueva
  useEffect(() => {
    loadInitialData();
  }, []);

<<<<<<< HEAD
  // Filtrar productos cuando cambia la categoría, pero solo si tenemos productos
=======
  // filtrar productos cuando cambia la categoría, pero solo si tenemos productos
>>>>>>> rama-nueva
  useEffect(() => {
    // Solo filtrar si tenemos productos
    if (allProducts.length > 0 || Object.keys(productsByCategory).length > 0) {
      filterProductsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const loadInitialData = async () => {
    setLoading(true);
    setError(null);

    try {
<<<<<<< HEAD
      // Cargar categorías y productos iniciales en paralelo para mayor velocidad
      const [categoriesResult, productsResult] = await Promise.all([
        ProductService.getCategories(),
        ProductService.getAllProducts(100), // Cargar más productos de una vez
      ]);

      // Procesar categorías
      if (categoriesResult.success) {
        // Asegurarse de que todas las categorías sean strings
=======
      const [categoriesResult, productsResult] = await Promise.all([
        ProductService.getCategories(),
        ProductService.getAllProducts(100),
      ]);

      // crocesar categorías
      if (categoriesResult.success) {
        // asegurarse de que todas las categorías sean strings
>>>>>>> rama-nueva
        const processedCategories = categoriesResult.data.map((category) =>
          typeof category === "object"
            ? category.name || category.slug || JSON.stringify(category)
            : category
        );

<<<<<<< HEAD
        // Verificar si ya existe "All" para no duplicarlo
=======
>>>>>>> rama-nueva
        if (!processedCategories.includes("All")) {
          setCategories(["All", ...processedCategories]);
        } else {
          setCategories(processedCategories);
        }

        // Procesar productos
        if (productsResult.success) {
          const allProductsData = productsResult.data;
          setAllProducts(allProductsData);
<<<<<<< HEAD
          setFilteredProducts(allProductsData); // Mostrar todos los productos inicialmente
=======
          setFilteredProducts(allProductsData);
>>>>>>> rama-nueva

          // Crear un mapa inicial de productos por categoría basado en los productos ya cargados
          const productsByCat = { All: allProductsData };

          // Agrupar productos por categoría para filtrado rápido
          allProductsData.forEach((product) => {
<<<<<<< HEAD
            if (product.category) {
              const category =
                typeof product.category === "object"
                  ? product.category.name || product.category.slug
                  : product.category;

=======
            const category = product.categoryRef?.name;

            if (category) {
>>>>>>> rama-nueva
              if (!productsByCat[category]) {
                productsByCat[category] = [];
              }
              productsByCat[category].push(product);
            }
          });

<<<<<<< HEAD
          // Actualizar el estado con los productos agrupados
          setProductsByCategory(productsByCat);

          // No cargar todas las categorías de inmediato para evitar muchas llamadas a la API
          // Solo cargaremos categorías específicas cuando el usuario las seleccione
=======
          setProductsByCategory(productsByCat);
>>>>>>> rama-nueva
        } else {
          setError(productsResult.message);
        }
      } else {
        setError(categoriesResult.message);
      }
    } catch (error) {
      setError("Error al cargar datos iniciales");
      console.error("Load initial data error:", error);
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
  // Filtrar productos por categoría de manera eficiente
  const filterProductsByCategory = useCallback(
    (category) => {
      // Para la categoría "All", mostrar todos los productos
=======
  // filtrar productos por categoría de manera eficiente
  const filterProductsByCategory = useCallback(
    (category) => {
      // para la categoría "All", mostrar todos los productos
>>>>>>> rama-nueva
      if (!category || category === "All") {
        setFilteredProducts(allProducts);
        return;
      }

<<<<<<< HEAD
      // Si ya tenemos los productos de esta categoría en caché, usarlos inmediatamente
=======
      // si ya tenemos los productos de esta categoría en caché, usarlos inmediatamente
>>>>>>> rama-nueva
      if (
        productsByCategory[category] &&
        productsByCategory[category].length > 0
      ) {
        setFilteredProducts(productsByCategory[category]);
        return;
      }

<<<<<<< HEAD
      // Si no tenemos los productos en caché pero tenemos todos los productos,
      // intentar filtrar localmente primero
      if (allProducts.length > 0) {
        const localFiltered = allProducts.filter(
          (product) =>
            product.category === category ||
            (typeof product.category === "string" &&
              product.category.toLowerCase() === category.toLowerCase())
=======
      if (allProducts.length > 0) {
        const localFiltered = allProducts.filter(
          (product) => product.categoryRef?.name === category
>>>>>>> rama-nueva
        );

        if (localFiltered.length > 0) {
          // Guardar en caché para uso futuro
          setProductsByCategory((prev) => ({
            ...prev,
            [category]: localFiltered,
          }));
          setFilteredProducts(localFiltered);
          return;
        }
      }

<<<<<<< HEAD
      // Como último recurso, cargar desde la API
      setLoading(true);

      // Usar una variable para evitar actualizaciones de estado si el componente se desmonta
=======
      setLoading(true);
>>>>>>> rama-nueva
      let isMounted = true;

      ProductService.getProductsByCategory(category)
        .then((result) => {
          if (!isMounted) return;

          if (result.success) {
            // Actualizar el caché
            setProductsByCategory((prev) => ({
              ...prev,
              [category]: result.data,
            }));
            setFilteredProducts(result.data);
          } else {
            setError(`Error al cargar productos de la categoría ${category}`);
            setFilteredProducts([]);
          }
        })
        .catch((err) => {
          if (!isMounted) return;

          console.error(
            `Error loading products for category ${category}:`,
            err
          );
          setError(`Error al cargar productos de la categoría ${category}`);
          setFilteredProducts([]);
        })
        .finally(() => {
          if (isMounted) {
            setLoading(false);
          }
        });

      // Cleanup function para evitar actualizaciones de estado si el componente se desmonta
      return () => {
        isMounted = false;
      };
    },
    [allProducts, productsByCategory]
  );

  const getProductById = useCallback(
    async (id) => {
      // Primero buscar en los productos locales
<<<<<<< HEAD
      const localProduct = allProducts.find((p) => p.id === parseInt(id));
=======
      const localProduct = allProducts.find(
        (p) => p.idProduct === parseInt(id)
      );
>>>>>>> rama-nueva
      if (localProduct) {
        return { success: true, data: localProduct };
      }

      // Si no se encuentra localmente, hacer la llamada a la API
      setLoading(true);
      const result = await ProductService.getProductById(id);
      setLoading(false);
      return result;
    },
    [allProducts]
  );

  const searchProducts = useCallback(
    (query) => {
      if (!query.trim()) {
        filterProductsByCategory(selectedCategory);
        return;
      }

      setLoading(true);

      // Determinar qué productos buscar
      let productsToSearch = allProducts;

      // Si hay una categoría seleccionada que no es "All" y tenemos productos para esa categoría
      if (selectedCategory !== "All" && productsByCategory[selectedCategory]) {
        productsToSearch = productsByCategory[selectedCategory];
      }

      // Buscar localmente
      const searchLower = query.toLowerCase();
      const filtered = productsToSearch.filter((product) => {
<<<<<<< HEAD
        // Buscar en título y descripción
        return (
          product.title.toLowerCase().includes(searchLower) ||
=======
        // Buscar en nombre y descripción
        return (
          product.name.toLowerCase().includes(searchLower) ||
>>>>>>> rama-nueva
          (product.description &&
            product.description.toLowerCase().includes(searchLower))
        );
      });

      setFilteredProducts(filtered);
      setLoading(false);
    },
    [allProducts, selectedCategory, productsByCategory]
  );

  const refreshProducts = useCallback(() => {
    loadInitialData();
  }, []);

  return {
    // Estados
    products: filteredProducts,
    allProducts,
    categories,
    loading,
    error,
    selectedCategory,

    // Acciones
    setSelectedCategory,
    searchProducts,
    getProductById,
    refreshProducts,
    clearError: () => setError(null),
  };
};
