import { privateApi } from "./axiosConfig.js";

export class CartService {
  //obtener carrito del usuario
  static async getUserCarts(userId) {
    try {
      const response = await privateApi.get(`/carts/user/${userId}`);

      return {
        success: true,
        data: response.data.carts,
        total: response.data.total,
        message: "Carritos obtenidos exitosamente",
      };
    } catch (error) {
      console.error("Error getting user carts:", error);
      return {
        success: false,
        data: [],
        message: "Error al obtener carritos",
        error: error,
      };
    }
  }

  //obtener todos los carritos para admin
  static async getAllCarts() {
    try {
      const response = await privateApi.get("/carts");

      return {
        success: true,
        data: response.data.carts,
        total: response.data.total,
        message: "Carritos obtenidos exitosamente",
      };
    } catch (error) {
      console.error("Error getting all carts:", error);
      return {
        success: false,
        data: [],
        message: "Error al obtener carritos",
        error: error,
      };
    }
  }

  //obtener carrito por id
  static async getCartById(cartId) {
    try {
      const response = await privateApi.get(`/carts/${cartId}`);

      return {
        success: true,
        data: response.data,
        message: "Carrito obtenido exitosamente",
      };
    } catch (error) {
      console.error("Error getting cart by ID:", error);
      return {
        success: false,
        data: null,
        message: "Error al obtener carrito",
        error: error,
      };
    }
  }

  //crear nuevo carrito
  static async createCart(userId, products) {
    try {
      const response = await privateApi.post("/carts/add", {
        userId,
        products, // [{ id: 1, quantity: 2 }, { id: 2, quantity: 1 }]
      });

      return {
        success: true,
        data: response.data,
        message: "Carrito creado exitosamente",
      };
    } catch (error) {
      console.error("Error creating cart:", error);
      return {
        success: false,
        data: null,
        message: "Error al crear carrito",
        error: error,
      };
    }
  }

  //actualizar carrito
  static async updateCart(cartId, products) {
    try {
      const response = await privateApi.put(`/carts/${cartId}`, {
        merge: false,
        products,
      });

      return {
        success: true,
        data: response.data,
        message: "Carrito actualizado exitosamente",
      };
    } catch (error) {
      console.error("Error updating cart:", error);
      return {
        success: false,
        data: null,
        message: "Error al actualizar carrito",
        error: error,
      };
    }
  }

  //eliminar carrito
  static async deleteCart(cartId) {
    try {
      const response = await privateApi.delete(`/carts/${cartId}`);

      return {
        success: true,
        data: response.data,
        message: "Carrito eliminado exitosamente",
      };
    } catch (error) {
      console.error("Error deleting cart:", error);
      return {
        success: false,
        data: null,
        message: "Error al eliminar carrito",
        error: error,
      };
    }
  }
}
