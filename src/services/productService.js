import { publicApi } from "./axiosConfig.js";

export class ProductService {
  //obtener todos los productos
  static async getAllProducts(limit = 20) {
    try {
      console.log("Fetching products from API...");
      const response = await publicApi.get("/products", {
        params: { limit },
      });

      console.log("API Response:", response.data);

      // Verificar que la respuesta tenga la estructura esperada
      if (!response.data || !Array.isArray(response.data.products)) {
        console.error("Invalid API response format:", response.data);
        return {
          success: false,
          data: [],
          message: "Formato de respuesta inválido",
          error: new Error("Invalid API response format"),
        };
      }

      return {
        success: true,
        data: response.data.products,
        total: response.data.total,
        message: "Productos obtenidos exitosamente",
      };
    } catch (error) {
      console.error("Error getting products: ", error);
      return {
        success: false,
        data: [],
        message:
          error.response?.data?.message ||
          error.message ||
          "Error al obtener productos",
        error: error,
      };
    }
  }

  //obtener producto por ID
  static async getProductById(id) {
    try {
      const response = await publicApi.get(`/products/${id}`);

      return {
        success: true,
        data: response.data,
        message: "Producto obtenido exitosamente",
      };
    } catch (error) {
      console.log("Error getting product by ID: ", error);
      return {
        success: false,
        data: null,
        message:
          error.response?.status === 404
            ? "Producto no encontrado"
            : "Error al obtener producto",
        error: error,
      };
    }
  }

  //obtener categorías
  static async getCategories() {
    try {
      console.log("Fetching categories from API...");
      const response = await publicApi.get("/products/categories");

      console.log("Categories API Response:", response.data);

      // Verificar que la respuesta sea un array o convertir objetos a strings
      let processedCategories = [];

      if (Array.isArray(response.data)) {
        // Si es un array, verificar cada elemento
        processedCategories = response.data.map((category) => {
          if (typeof category === "object" && category !== null) {
            // Si es un objeto, usar la propiedad name o convertir a string
            return category.name || category.slug || JSON.stringify(category);
          }
          return category;
        });
      } else if (typeof response.data === "object" && response.data !== null) {
        // Si es un objeto, extraer valores
        processedCategories = Object.values(response.data);
      } else {
        // Caso de fallback
        processedCategories = ["All"];
      }

      return {
        success: true,
        data: processedCategories,
        message: "Categorías obtenidas exitosamente",
      };
    } catch (error) {
      console.log("Error getting categories: ", error);
      return {
        success: false,
        data: [],
        message: "Error al obtener categorías",
        error: error,
      };
    }
  }

  //obtener productos por categoría
  static async getProductsByCategory(category) {
    try {
      // Sanitizar la categoría para la URL
      const sanitizedCategory = encodeURIComponent(category);

      const response = await publicApi.get(
        `/products/category/${sanitizedCategory}`
      );

      return {
        success: true,
        data: response.data.products,
        total: response.data.total,
        message: `Productos de ${category} obtenidos exitosamente`,
      };
    } catch (error) {
      console.log("Error getting products by category: ", error);
      return {
        success: false,
        data: [],
        message: `Error al obtener productos de ${category}`,
        error: error,
      };
    }
  }

  //buscar productos

  static async searchProducts(query) {
    try {
      const response = await publicApi.get("/products/search", {
        params: { q: query },
      });
      return {
        success: true,
        data: response.data.products,
        total: response.data.total,
        message: `Se encontraron ${response.data.products.length} productos`,
      };
    } catch (error) {
      console.error("Error searching products: ", error);
      return {
        success: false,
        data: [],
        message: "Error al buscar productos",
        error: error,
      };
    }
  }
}
