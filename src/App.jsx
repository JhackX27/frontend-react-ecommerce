<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
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
=======
import { Home } from "./pages/public/Home.jsx";
import { ProductDetails } from "./pages/public/ProductDetails.jsx";
import { CartPage } from "./pages/private/CartPage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./assets/components/layout/NavBar.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { Login } from "./pages/public/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
>>>>>>> rama-nueva

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="min-w-[320px]">
          <BrowserRouter>
            <NavBar />
            <Routes>
<<<<<<< HEAD
              {/* Rutas públicas */}
=======
>>>>>>> rama-nueva
              <Route
                path="/"
                element={<Home />}
              />
              <Route
<<<<<<< HEAD
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
=======
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
>>>>>>> rama-nueva
              />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </Provider>
  );
};
