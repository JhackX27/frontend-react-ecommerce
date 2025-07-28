<<<<<<< HEAD
import { Home } from "./pages/public/Home.jsx";
import { ProductDetails } from "./pages/public/ProductDetails.jsx";
import { CartPage } from "./pages/private/CartPage.jsx";
=======
>>>>>>> rama-prueba
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
<<<<<<< HEAD
import { Login } from "./pages/public/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
=======
import { AuthProvider } from "./context/AuthContext.jsx";

// Layout
import { NavBar } from "./assets/components/layout/NavBar.jsx";

// Guards
import { PrivateRoute } from "./guards/PrivateRoute.jsx";
import { PublicRoute } from "./guards/PublicRoute.jsx";

// Public pages
import { Home } from "./pages/public/Home.jsx";
import { Login } from "./pages/public/Login.jsx";
import { ProductDetails } from "./pages/public/ProductDetails.jsx";
import { NotFound } from "./pages/public/NotFound.jsx";

// Private pages
import { CartPage } from "./pages/private/CartPage.jsx";
>>>>>>> rama-prueba

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="min-w-[320px]">
          <BrowserRouter>
            <NavBar />
            <Routes>
<<<<<<< HEAD
=======
              {/* Rutas públicas */}
>>>>>>> rama-prueba
              <Route
                path="/"
                element={<Home />}
              />
              <Route
<<<<<<< HEAD
                path="/home"
                element={
                  <Navigate
                    to="/"
                    replace
                  />
                }
              />

              <Route
                path=""
                element={
                  <Navigate
                    to="/"
                    replace
                  />
                }
              />

              <Route
                path="/product/:id"
                element={<ProductDetails />}
              />
              <Route
                path="/cart"
                element={<CartPage />}
              />
              <Route
                path="/login"
                element={<Login />}
=======
                path="/product/:id"
                element={<ProductDetails />}
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />

              {/* Rutas privadas */}
              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <CartPage />
                  </PrivateRoute>
                }
              />

              {/* Redirecciones */}
              <Route
                path="/home"
                element={
                  <Navigate
                    to="/"
                    replace
                  />
                }
              />
              <Route
                path=""
                element={
                  <Navigate
                    to="/"
                    replace
                  />
                }
              />
              <Route
                path="*"
                element={<NotFound />}
>>>>>>> rama-prueba
              />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </Provider>
  );
};
