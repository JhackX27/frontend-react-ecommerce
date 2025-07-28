# AuthContext - Explicación y Funcionalidad

## ¿Qué es el AuthContext?

El **AuthContext** es un patrón de React que utiliza el Context API para gestionar el estado de autenticación de manera global en toda la aplicación. Es una solución elegante para evitar el "prop drilling" (pasar props por múltiples niveles de componentes).

## ¿Para qué sirve?

### 1. **Gestión Global del Estado de Autenticación**

- Mantiene información del usuario autenticado accesible desde cualquier componente
- Evita tener que pasar datos de usuario como props por toda la aplicación

### 2. **Centralización de la Lógica de Autenticación**

- Todas las funciones relacionadas con autenticación están en un solo lugar
- Facilita el mantenimiento y la consistencia del código

### 3. **Persistencia de Sesión**

- Mantiene al usuario logueado incluso si recarga la página
- Verifica automáticamente tokens al cargar la aplicación

### 4. **Control de Acceso**

- Facilita la implementación de rutas protegidas
- Permite mostrar/ocultar componentes según el estado de autenticación

## Funcionalidades Implementadas

### Estados Gestionados:

- `user`: Información del usuario autenticado
- `isAuthenticated`: Boolean que indica si el usuario está autenticado
- `loading`: Estado de carga para operaciones asíncronas
- `error`: Mensajes de error de autenticación

### Funciones Principales:

#### `login(username, password)`

- Autentica al usuario con la API de DummyJSON
- Guarda tokens y datos del usuario en localStorage
- Actualiza el estado global de autenticación

#### `logout()`

- Cierra la sesión del usuario
- Limpia tokens y datos del localStorage
- Resetea el estado de autenticación

#### `checkAuthStatus()`

- Verifica si hay un token válido al cargar la aplicación
- Restaura la sesión del usuario si el token es válido
- Se ejecuta automáticamente al iniciar la aplicación

#### `refreshToken()`

- Renueva el token de acceso usando el refresh token
- Se ejecuta automáticamente cuando el token expira
- Hace logout si no puede renovar el token

## Cómo Usar el AuthContext

### 1. **Envolver la aplicación con el Provider**

```jsx
// En App.jsx
import { AuthProvider } from "./context/AuthContext.jsx";

export const App = () => {
  return <AuthProvider>{/* Tu aplicación aquí */}</AuthProvider>;
};
```

### 2. **Usar el hook useAuth en componentes**

```jsx
// En cualquier componente
import { useAuth } from "../context/AuthContext.jsx";

const MiComponente = () => {
  const { user, isAuthenticated, login, logout, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Bienvenido, {user.firstName}!</p>
          <button onClick={logout}>Cerrar Sesión</button>
        </div>
      ) : (
        <div>
          <p>No estás autenticado</p>
          <button onClick={() => login("usuario", "contraseña")}>
            Iniciar Sesión
          </button>
        </div>
      )}
    </div>
  );
};
```

## Integración con Otros Servicios

### TokenManager

- Gestiona el almacenamiento y recuperación de tokens
- Verifica la expiración de tokens
- Maneja datos del usuario en localStorage

### AuthService

- Maneja las llamadas a la API de autenticación
- Procesa respuestas de login, logout y refresh token
- Maneja errores de autenticación

### Guards (Rutas Protegidas)

- `PrivateRoute`: Solo permite acceso a usuarios autenticados
- `PublicRoute`: Redirige usuarios autenticados a rutas privadas

## Ventajas de esta Implementación

1. **Automática**: Verifica y restaura sesiones automáticamente
2. **Segura**: Maneja tokens de manera segura con expiración
3. **Eficiente**: Evita llamadas innecesarias a la API
4. **Robusta**: Maneja errores y casos edge correctamente
5. **Escalable**: Fácil de extender con nuevas funcionalidades

## Flujo de Autenticación

1. **Carga inicial**: `checkAuthStatus()` verifica si hay un token válido
2. **Login**: Usuario ingresa credenciales → API → Guardar tokens → Actualizar estado
3. **Navegación**: Los guards verifican `isAuthenticated` para permitir/denegar acceso
4. **Token expira**: Interceptor de Axios intenta renovar automáticamente
5. **Logout**: Limpia tokens y estado → Redirige a login

Esta implementación proporciona una base sólida para la autenticación en aplicaciones React modernas.
