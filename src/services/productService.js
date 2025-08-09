import { publicApi } from "./axiosConfig.js";

export class ProductService {
  //obtener todos los productos
  static async getAllProducts(limit = 20) {
    try {
      const response = await publicApi.get("/products");

      if (!Array.isArray(response.data)) {
        return {
          success: false,
          data: [],
          message: "Formato de respuesta inválido",
        };
      }

      return {
        success: true,
        data: response.data,
        message: "Productos obtenidos exitosamente",
      };
    } catch (error) {
      return {
        success: false,
        data: [],
        message: "Error al obtener productos",
        error: error,
      };
    }
  }

  //obtener producto por ID
  static async getProductById(id) {
    try {
      const response = await publicApi.get(`/products/${id}`);

      // La API devuelve un array con un elemento, no un objeto directo
      if (Array.isArray(response.data) && response.data.length > 0) {
        return {
          success: true,
          data: response.data[0],
          message: "Producto obtenido exitosamente",
        };
      } else {
        return {
          success: false,
          data: null,
          message: "Producto no encontrado",
        };
      }
    } catch (error) {
      return {
        success: false,
        data: null,
        message: "Error al obtener producto",
        error: error,
      };
    }
  }

  //obtener categorías
  static async getCategories() {
    try {
      const response = await publicApi.get("/products/categories");

      if (!Array.isArray(response.data)) {
        return {
          success: false,
          data: [],
          message: "Error al obtener categorías",
        };
      }

      const categories = response.data.map((cat) => cat.name);
      return {
        success: true,
        data: categories,
        message: "Categorías obtenidas exitosamente",
      };
    } catch (error) {
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
