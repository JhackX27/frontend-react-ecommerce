import { Home } from "./pages/Home.jsx";
import { ProductDetails } from "./pages/ProductDetails.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./assets/components/NavBar.jsx";
import { Provider } from "react-redux";
import { store } from "./App/Store.js";
import { Login } from "./pages/Login.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/home"
            element={<Home />}
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
    </Provider>
  );
};
