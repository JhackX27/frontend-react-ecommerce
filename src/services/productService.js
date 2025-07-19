import { publicApi } from "./axiosConfig.js";

export class ProductService {
  //obtener todos los productos
  static async getAllProducts(limit = 20) {
    try {
      const response = await publicApi.get("/products", {
        params: { limit },
      });
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
      const response = await publicApi.get("/products/categories");

      return {
        success: true,
        data: response.data,
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
      const response = await publicApi.get(`/products/category/${category}`);

      return {
        success: true,
        data: response.data.products,
        total: response.data.local,
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
