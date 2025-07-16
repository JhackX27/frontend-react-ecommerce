# Guía de Estilos Tailwind - Ecommerce

## Fondo Home

- Color: `bg-secondary-light`

## Categorías

- Color: `bg-primary-accent`
- Texto: `text-secondary-accent`
- Hover: `hover:bg-primary-light`
- Active: `active:scale-105`
- Transición: `transition-all ease-in`
- Cursor: `cursor-pointer`
- Estado: `active:scale-105`

## Paleta de colores

- Primario: `bg-zinc-200`
- Secundario: `bg-zinc-300`
- Fondo: `bg-white`
- Texto principal: `text-black`
- Texto secundario: `text-gray-600`
- Éxito/Error: `text-blue-600`, `text-red-500`

## Componentes y Layout

- Contenedores: `container mx-auto px-4 py-8`
- Grillas: `grid grid-cols-1 md:grid-cols-2 gap-8`
- Flexbox: `flex items-center justify-center gap-4`
- Tarjetas: `shadow-md rounded-md p-4 bg-white`

## Tipografía

- Títulos: `text-2xl font-bold`
- Subtítulos: `text-xl font-semibold`
- Texto normal: `text-base`
- Texto secundario: `text-gray-600`

## Bordes y Sombra

- Bordes redondeados: `rounded-md`
- Sombra: `shadow-md`

## Ejemplo de uso

```jsx
<div className="container mx-auto px-4 py-8">
  <div className="shadow-md rounded-md p-4 bg-white">
    <h2 className="text-2xl font-bold mb-4">Título</h2>
    <p className="text-gray-600">Texto descriptivo...</p>
  </div>
</div>
```

###

# API Endpoints - E-commerce Structure

### 👤 **AUTH - Autenticación**

```
POST   /api/auth/register          # Registro de usuario
POST   /api/auth/login             # Login
POST   /api/auth/logout            # Logout
POST   /api/auth/refresh           # Refresh token
POST   /api/auth/forgot-password   # Recuperar contraseña
POST   /api/auth/reset-password    # Resetear contraseña
GET    /api/auth/verify-email      # Verificar email
```

### 👥 **USERS - Usuarios**

```
GET    /api/users                  # Listar usuarios (admin)
GET    /api/users/:id              # Obtener usuario específico
PUT    /api/users/:id              # Actualizar usuario
DELETE /api/users/:id              # Eliminar usuario
GET    /api/users/profile          # Perfil del usuario logueado
PUT    /api/users/profile          # Actualizar perfil propio
PUT    /api/users/change-password  # Cambiar contraseña
```

### 📦 **PRODUCTS - Productos**

```
GET    /api/products               # Listar productos (con filtros, paginación)
GET    /api/products/:id           # Obtener producto específico
POST   /api/products               # Crear producto (admin)
PUT    /api/products/:id           # Actualizar producto (admin)
DELETE /api/products/:id           # Eliminar producto (admin)
GET    /api/products/search        # Buscar productos
GET    /api/products/featured      # Productos destacados
GET    /api/products/category/:id  # Productos por categoría
POST   /api/products/:id/reviews   # Agregar reseña
GET    /api/products/:id/reviews   # Obtener reseñas
```

### 🏷️ **CATEGORIES - Categorías**

```
GET    /api/categories             # Listar categorías
GET    /api/categories/:id         # Obtener categoría específica
POST   /api/categories             # Crear categoría (admin)
PUT    /api/categories/:id         # Actualizar categoría (admin)
DELETE /api/categories/:id         # Eliminar categoría (admin)
```

### 🛒 **CART - Carrito**

```
GET    /api/cart                   # Obtener carrito del usuario
POST   /api/cart/items             # Agregar item al carrito
PUT    /api/cart/items/:id         # Actualizar cantidad de item
DELETE /api/cart/items/:id         # Eliminar item del carrito
DELETE /api/cart                   # Vaciar carrito
```

### 📋 **ORDERS - Órdenes**

```
GET    /api/orders                 # Listar órdenes del usuario
GET    /api/orders/:id             # Obtener orden específica
POST   /api/orders                 # Crear nueva orden
PUT    /api/orders/:id/cancel      # Cancelar orden
GET    /api/orders/:id/invoice     # Descargar factura

# Admin endpoints
GET    /api/admin/orders           # Todas las órdenes (admin)
PUT    /api/admin/orders/:id/status # Actualizar estado (admin)
```

### 💳 **PAYMENTS - Pagos**

```
POST   /api/payments/create-preference    # Crear preferencia de pago (MP)
POST   /api/payments/webhook             # Webhook de Mercado Pago
GET    /api/payments/:orderId            # Estado del pago
POST   /api/payments/process             # Procesar pago
```

### 📍 **ADDRESSES - Direcciones**

```
GET    /api/addresses              # Direcciones del usuario
POST   /api/addresses              # Agregar dirección
PUT    /api/addresses/:id          # Actualizar dirección
DELETE /api/addresses/:id          # Eliminar dirección
PUT    /api/addresses/:id/default  # Marcar como predeterminada
```

### 🎫 **COUPONS - Cupones**

```
GET    /api/coupons/validate/:code # Validar cupón
POST   /api/coupons               # Crear cupón (admin)
GET    /api/coupons               # Listar cupones (admin)
PUT    /api/coupons/:id           # Actualizar cupón (admin)
DELETE /api/coupons/:id           # Eliminar cupón (admin)
```

### ⭐ **REVIEWS - Reseñas**

```
GET    /api/reviews/product/:id   # Reseñas de un producto
POST   /api/reviews               # Crear reseña
PUT    /api/reviews/:id           # Actualizar reseña propia
DELETE /api/reviews/:id           # Eliminar reseña
```

### 💝 **WISHLIST - Lista de Deseos**

```
GET    /api/wishlist              # Obtener wishlist del usuario
POST   /api/wishlist/items        # Agregar a wishlist
DELETE /api/wishlist/items/:id    # Eliminar de wishlist
```

### 📊 **ANALYTICS - Estadísticas (Admin)**

```
GET    /api/analytics/dashboard   # Dashboard principal
GET    /api/analytics/sales       # Estadísticas de ventas
GET    /api/analytics/products    # Productos más vendidos
GET    /api/analytics/users       # Estadísticas de usuarios
```

### 📧 **NOTIFICATIONS - Notificaciones**

```
GET    /api/notifications         # Notificaciones del usuario
PUT    /api/notifications/:id/read # Marcar como leída
POST   /api/notifications/send    # Enviar notificación (admin)
```

### 🔐 **Consideraciones de Seguridad**

- **JWT tokens** para autenticación
- **Rate limiting** en endpoints sensibles
- **Validación** de datos en todos los endpoints
- **CORS** configurado correctamente
- **HTTPS** en producción
- **Sanitización** de inputs

### 🎯 **Ejemplo de uso en React**

```jsx
// services/api.js
const API_BASE = "http://localhost:3001/api";

export const api = {
  // Products
  getProducts: (params) =>
    fetch(`${API_BASE}/products?${new URLSearchParams(params)}`),
  getProduct: (id) => fetch(`${API_BASE}/products/${id}`),

  // Cart
  getCart: () =>
    fetch(`${API_BASE}/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  addToCart: (item) =>
    fetch(`${API_BASE}/cart/items`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }),

  // Orders
  createOrder: (orderData) =>
    fetch(`${API_BASE}/orders`, {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }),

  // Payments
  createPayment: (paymentData) =>
    fetch(`${API_BASE}/payments/create-preference`, {
      method: "POST",
      body: JSON.stringify(paymentData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }),
};
```
