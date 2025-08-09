
<<<<<<< HEAD
--temporal
en la 1.1.-

BASE_URL:

process.env.NODE_ENV === "production"

? "https://polospersonalizadosecommerce.vercel.app"

: "https://dummyjson.com",

ayudame, quiero saber para que se usa para que pueda colocar mi url adecuada, en este caso uso la del front quiero saber si es correcto, pero como aparece dummyjson pienso que solicitan la del backend, para que sirve el timeout y donde se ven los logs de development

en la 1.1.- para que se usaran estas variables

export const LOCAL_STORAGE_KEYS = {

ACCESS_TOKEN: "accessToken",

REFRESH_TOKEN: "refreshToken",

USER_DATA: "userData",

};

en la 1.1.- para que sirve ese prueba dummyjson, sin eso no podre usar los endpoint de dumyy json necesariamente debe estar ahi?

en la 1.2.- como funciona el authcontext y el usecontext, que hace exactamente y sin eso com funcionaria. eso de state y action no entiendo. Eso del authReducer que spread tiene, eso de ... Porque a veces usas const y en otras expor const. QUe es authprovider y como lo utilizas. Que es state y dispatch. Que hace el authcontext.provider en authcontex.jsx

1.3.- Que es return children en privateroute? porque se llama private si devuele un public que es el login

1.4.- en el 1.4 porque se llama public y a donde redirige, uselocation que hace

2.2.- porque le agregaste al 2.2 el return total a los get?

2.3.- en el 2.3 ya no usas   const [searchTerm, setSearchTerm] = useState(""); tampoco usas el refreshProducts, entonces ya no los uso en mi codigo, lo estoy borrando.

2.4.- pARA QUE SIRVE el middleware y de que manera me sirve el devtools como lo usaria?

2.5 Si dummyjson usar username y no email, eso quiere decir que debo eliminar username y mantener email, porque ya lo tenia. Como funciona ese tema de estados de location para redirigir en login.jsx como funciona. Explicame el target.name y target.value como funciona. A que se refiere el clear Error. El usedemo para que sirv, creo que no lo encesito, porque usare el dummy json.

//comentar lineas de codigo register

--

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

## 📝 **Ejemplos de datos JSON para endpoints POST**

### 👤 **POST /api/auth/register - Registro de Usuario**

```json
{
  "name": "Juan Pérez",
  "email": "juan.perez@email.com",
  "password": "MiPassword123!",
  "confirmPassword": "MiPassword123!",
  "phone": "+51987654321",
  "dateOfBirth": "1990-05-15",
  "gender": "male",
  "acceptTerms": true
}
```

**Campos recomendados:**

- `name` (string, requerido): Nombre completo
- `email` (string, requerido, único): Email válido
- `password` (string, requerido): Mínimo 8 caracteres, mayúscula, número, símbolo
- `confirmPassword` (string, requerido): Debe coincidir con password
- `phone` (string, opcional): Formato internacional
- `dateOfBirth` (date, opcional): Para ofertas por edad
- `gender` (enum, opcional): "male", "female", "other", "prefer_not_to_say"
- `acceptTerms` (boolean, requerido): Aceptación de términos

### 👤 **POST /api/auth/login - Inicio de Sesión**

```json
{
  "email": "juan.perez@email.com",
  "password": "MiPassword123!",
  "rememberMe": true
}
```

### 📦 **POST /api/products - Crear Producto (Admin)**

```json
{
  "title": "NVIDIA GeForce RTX 4080",
  "description": "Tarjeta gráfica de alta gama para gaming y creación de contenido",
  "price": 1199.99,
  "comparePrice": 1399.99,
  "category": "graphics-cards",
  "brand": "NVIDIA",
  "model": "RTX 4080",
  "sku": "NV-RTX4080-16GB",
  "stock": 25,
  "images": [
    "https://example.com/rtx4080-1.jpg",
    "https://example.com/rtx4080-2.jpg"
  ],
  "specifications": {
    "memory": "16GB GDDR6X",
    "coreClock": "2205 MHz",
    "memoryClock": "22.4 Gbps",
    "interface": "PCIe 4.0 x16"
  },
  "dimensions": {
    "length": 304,
    "width": 137,
    "height": 61
  },
  "weight": 1.29,
  "warranty": 36,
  "featured": true,
  "status": "active",
  "seoTitle": "NVIDIA RTX 4080 - Tarjeta Gráfica Gaming",
  "seoDescription": "Compra la NVIDIA RTX 4080 con 16GB GDDR6X",
  "tags": ["gaming", "4k", "ray-tracing", "dlss"]
}
```

**Campos recomendados:**

- `title` (string, requerido): Nombre del producto
- `description` (text, requerido): Descripción detallada
- `price` (decimal, requerido): Precio actual
- `comparePrice` (decimal, opcional): Precio antes de descuento
- `category` (string, requerido): ID o slug de categoría
- `brand` (string, requerido): Marca del producto
- `sku` (string, requerido, único): Código único del producto
- `stock` (integer, requerido): Cantidad disponible
- `images` (array, requerido): URLs de imágenes
- `specifications` (object, opcional): Especificaciones técnicas
- `featured` (boolean): Si es producto destacado
- `status` (enum): "active", "inactive", "draft"

### 🛒 **POST /api/cart/items - Agregar al Carrito**

```json
{
  "productId": "64f8a1b2c3d4e5f6a7b8c9d0",
  "quantity": 2,
  "selectedVariant": {
    "color": "black",
    "size": "large"
  },
  "notes": "Entrega urgente"
}
```

### 📋 **POST /api/orders - Crear Orden**

```json
{
  "items": [
    {
      "productId": "64f8a1b2c3d4e5f6a7b8c9d0",
      "quantity": 1,
      "price": 1199.99,
      "variant": {
        "color": "black"
      }
    }
  ],
  "shippingAddress": {
    "firstName": "Juan",
    "lastName": "Pérez",
    "company": "Tech Solutions SAC",
    "address1": "Av. Javier Prado 123",
    "address2": "Dpto 401",
    "city": "Lima",
    "state": "Lima",
    "zipCode": "15036",
    "country": "PE",
    "phone": "+51987654321"
  },
  "billingAddress": {
    "firstName": "Juan",
    "lastName": "Pérez",
    "company": "Tech Solutions SAC",
    "address1": "Av. Javier Prado 123",
    "city": "Lima",
    "state": "Lima",
    "zipCode": "15036",
    "country": "PE",
    "phone": "+51987654321",
    "taxId": "20123456789"
  },
  "shipping": {
    "method": "standard",
    "cost": 15.0,
    "estimatedDays": 3
  },
  "payment": {
    "method": "mercado_pago",
    "preferenceId": "123456789-abcd-efgh"
  },
  "couponCode": "DESCUENTO10",
  "notes": "Entregar en horario de oficina",
  "subtotal": 1199.99,
  "shippingCost": 15.0,
  "tax": 215.99,
  "discount": 120.0,
  "total": 1310.98
}
```

**Campos recomendados:**

- `items` (array, requerido): Productos de la orden
- `shippingAddress` (object, requerido): Dirección de envío
- `billingAddress` (object, requerido): Dirección de facturación
- `shipping` (object, requerido): Método y costo de envío
- `payment` (object, requerido): Información de pago
- `subtotal`, `total` (decimal, requerido): Cálculos de precio

### 💳 **POST /api/payments/create-preference - Crear Pago**

```json
{
  "orderId": "64f8a1b2c3d4e5f6a7b8c9d0",
  "items": [
    {
      "title": "NVIDIA GeForce RTX 4080",
      "description": "Tarjeta gráfica gaming",
      "quantity": 1,
      "unit_price": 1199.99,
      "currency_id": "PEN"
    }
  ],
  "payer": {
    "name": "Juan",
    "surname": "Pérez",
    "email": "juan.perez@email.com",
    "phone": {
      "area_code": "51",
      "number": "987654321"
    },
    "address": {
      "street_name": "Av. Javier Prado",
      "street_number": 123,
      "zip_code": "15036"
    }
  },
  "back_urls": {
    "success": "https://mitienda.com/payment/success",
    "failure": "https://mitienda.com/payment/failure",
    "pending": "https://mitienda.com/payment/pending"
  },
  "auto_return": "approved",
  "external_reference": "ORDER-001-2024",
  "notification_url": "https://mitienda.com/api/payments/webhook"
}
```

### 📍 **POST /api/addresses - Crear Dirección**

```json
{
  "type": "shipping",
  "firstName": "Juan",
  "lastName": "Pérez",
  "company": "Tech Solutions SAC",
  "address1": "Av. Javier Prado 123",
  "address2": "Dpto 401",
  "city": "Lima",
  "state": "Lima",
  "zipCode": "15036",
  "country": "PE",
  "phone": "+51987654321",
  "isDefault": true,
  "instructions": "Tocar timbre del dpto 401"
}
```

**Campos recomendados:**

- `type` (enum): "shipping", "billing", "both"
- `firstName`, `lastName` (string, requerido): Nombres
- `address1` (string, requerido): Dirección principal
- `address2` (string, opcional): Departamento, piso, etc.
- `city`, `state`, `country` (string, requerido): Ubicación
- `zipCode` (string, requerido): Código postal
- `phone` (string, requerido): Teléfono de contacto
- `isDefault` (boolean): Si es dirección predeterminada

### 🎫 **POST /api/coupons - Crear Cupón (Admin)**

```json
{
  "code": "DESCUENTO10",
  "name": "Descuento 10% Black Friday",
  "description": "10% de descuento en toda la tienda",
  "type": "percentage",
  "value": 10,
  "minimumAmount": 100.0,
  "maximumDiscount": 200.0,
  "usageLimit": 1000,
  "usagePerCustomer": 1,
  "startDate": "2024-11-25T00:00:00Z",
  "endDate": "2024-11-30T23:59:59Z",
  "applicableProducts": ["64f8a1b2c3d4e5f6a7b8c9d0"],
  "applicableCategories": ["graphics-cards", "processors"],
  "excludedProducts": [],
  "status": "active",
  "stackable": false
}
```

**Campos recomendados:**

- `code` (string, requerido, único): Código del cupón
- `type` (enum, requerido): "percentage", "fixed_amount", "free_shipping"
- `value` (decimal, requerido): Valor del descuento
- `minimumAmount` (decimal, opcional): Compra mínima
- `usageLimit` (integer, opcional): Límite total de usos
- `startDate`, `endDate` (datetime): Período de validez
- `status` (enum): "active", "inactive", "expired"

### ⭐ **POST /api/reviews - Crear Reseña**

```json
{
  "productId": "64f8a1b2c3d4e5f6a7b8c9d0",
  "orderId": "64f8a1b2c3d4e5f6a7b8c9d1",
  "rating": 5,
  "title": "Excelente tarjeta gráfica",
  "comment": "Muy buena calidad, funciona perfecto para gaming en 4K. La recomiendo totalmente.",
  "pros": [
    "Excelente rendimiento",
    "Silenciosa",
    "Buena relación calidad-precio"
  ],
  "cons": ["Un poco grande para algunos cases"],
  "wouldRecommend": true,
  "images": ["https://example.com/review-image-1.jpg"]
}
```

**Campos recomendados:**

- `productId` (string, requerido): ID del producto
- `orderId` (string, requerido): ID de la orden (verificar compra)
- `rating` (integer, requerido): Calificación 1-5
- `title` (string, requerido): Título de la reseña
- `comment` (text, requerido): Comentario detallado
- `wouldRecommend` (boolean): Si recomendaría el producto

### 🏷️ **POST /api/categories - Crear Categoría (Admin)**

```json
{
  "name": "Tarjetas Gráficas",
  "slug": "graphics-cards",
  "description": "Tarjetas gráficas para gaming y trabajo profesional",
  "parentId": null,
  "image": "https://example.com/category-graphics.jpg",
  "icon": "gpu",
  "sortOrder": 1,
  "isActive": true,
  "seoTitle": "Tarjetas Gráficas - Gaming y Profesional",
  "seoDescription": "Encuentra las mejores tarjetas gráficas para gaming",
  "metaKeywords": ["gpu", "gaming", "nvidia", "amd"]
}
```

## 🔐 **Consideraciones de Seguridad para POST**

### **Validaciones Backend:**

- **Sanitización**: Limpiar todos los inputs
- **Validación de tipos**: Verificar tipos de datos
- **Límites de longitud**: Máximo caracteres por campo
- **Validación de email**: Formato válido y único
- **Hash de passwords**: Usar bcrypt con salt
- **Rate limiting**: Limitar requests por IP
- **CSRF protection**: Tokens anti-CSRF
- **SQL injection**: Usar prepared statements

### **Validaciones Frontend:**

- **Validación en tiempo real**: Feedback inmediato
- **Confirmación de passwords**: Verificar coincidencia
- **Formatos requeridos**: Email, teléfono, etc.
- **Campos obligatorios**: Marcar con asterisco
- **Límites de caracteres**: Mostrar contador
- **Sanitización básica**: Trim espacios, etc.

### **Respuestas de Error Estándar:**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["Email is required", "Email format is invalid"],
    "password": ["Password must be at least 8 characters"]
  },
  "code": "VALIDATION_ERROR"
}
```

### **Respuestas de Éxito Estándar:**

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "email": "juan.perez@email.com",
    "name": "Juan Pérez"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
=======
>>>>>>> rama-nueva
