import { Home } from "./pages/public/Home.jsx";
import { ProductDetails } from "./pages/public/ProductDetails.jsx";
import { CartPage } from "./pages/private/CartPage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./assets/components/layout/NavBar.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { Login } from "./pages/public/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="min-w-[320px]">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
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
              />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </Provider>
  );
};
