// src/hooks/useCart.js - VERSIÓN COMPLETA
import { useState, useCallback } from "react";
import { CartService } from "../services/cartService.js";
import { useAuth } from "../context/AuthContext.jsx";

export const useCart = () => {
  const [carts, setCarts] = useState([]); // Lista de carritos del usuario
  const [currentCart, setCurrentCart] = useState(null); // Carrito activo
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // obtener todos los carritos del usuario
  const getUserCarts = useCallback(async () => {
    if (!user?.id) {
      setError("Usuario no autenticado");
      return { success: false };
    }

    setLoading(true);
    setError(null);

    const result = await CartService.getUserCarts(user.id);

    if (result.success) {
      setCarts(result.data);
      // si no hay carrito actual, usar el primero
      if (!currentCart && result.data.length > 0) {
        setCurrentCart(result.data[0]);
      }
    } else {
      setError(result.message);
    }

    setLoading(false);
    return result;
  }, [user?.id, currentCart]);

  // crear nuevo carrito
  const createCart = useCallback(
    async (products) => {
      if (!user?.id) {
        setError("Usuario no autenticado");
        return { success: false };
      }

      setLoading(true);
      setError(null);

      const result = await CartService.createCart(user.id, products);

      if (result.success) {
        setCurrentCart(result.data);
        await getUserCarts(); // recargar lista
      } else {
        setError(result.message);
      }

      setLoading(false);
      return result;
    },
    [user?.id, getUserCarts]
  );

  // actualizar carrito existente
  const updateCart = useCallback(
    async (cartId, products) => {
      setLoading(true);
      setError(null);

      const result = await CartService.updateCart(cartId, products);

      if (result.success) {
        setCurrentCart(result.data);
        await getUserCarts();
      } else {
        setError(result.message);
      }

      setLoading(false);
      return result;
    },
    [getUserCarts]
  );

  // eliminar carrito
  const deleteCart = useCallback(
    async (cartId) => {
      setLoading(true);
      setError(null);

      const result = await CartService.deleteCart(cartId);

      if (result.success) {
        // si eliminamos el carrito actual, limpiar
        if (currentCart?.id === cartId) {
          setCurrentCart(null);
        }
        await getUserCarts();
      } else {
        setError(result.message);
      }

      setLoading(false);
      return result;
    },
    [currentCart?.id, getUserCarts]
  );

  // obtener detalles de un carrito específico
  const getCartDetails = useCallback(async (cartId) => {
    setLoading(true);
    setError(null);

    const result = await CartService.getCartById(cartId);

    if (result.success) {
      setCurrentCart(result.data);
    } else {
      setError(result.message);
    }

    setLoading(false);
    return result;
  }, []);

  return {
    // estados
    carts,
    currentCart,
    loading,
    error,

    // acciones
    getUserCarts,
    createCart,
    updateCart,
    deleteCart,
    getCartDetails,
    setCurrentCart,
    clearError: () => setError(null),
  };
};
