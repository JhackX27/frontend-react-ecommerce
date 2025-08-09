import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, ShoppingCart, ArrowUp, LogOut, UserCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { useAuth } from "../../../hooks/useAuth.js";
import logo from "/t-shirt_logo.png";

export const NavBar = () => {
  // Estados locales
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Refs
  const menuRef = useRef(null);

  // Hooks
  const navigate = useNavigate();
  const location = useLocation();
  const activeLink = location.pathname;
  const { user, isAuthenticated, logout } = useAuth();

  // Redux selectors
  const cartItems = useSelector((state) => state.cart?.items || []);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Handlers
  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    navigate("/");
  };

  // Cerrar menú cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <div className="bg-secondary-accent shadow-md fixed top-0 z-50 w-full min-w-[320px]">
        <nav className="font-Primary-Poppins container mx-auto flex flex-wrap items-center relative w-full py-4 justify-center gap-2 max-iphone:justify-between max-iphone:flex-row max-iphone:px-2 max-iphone:py-2 max-iphone:gap-0">
          {/* Logo */}
          <div className="flex flex-items-center w-full justify-center max-iphone:w-1/4 max-iphone:flex max-iphone:items-center">
            <Link
              to="/"
              className="py-2"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-10 object-cover rounded-md"
              />
            </Link>
          </div>

          {/* Menú de navegación */}
          <ul className="bg-primary-light rounded-full w-5/6 flex justify-between p-2 max-iphone:w-2/4 max-iphone:justify-center max-iphone:gap-2 max-iphone:items-center max-iphone:px-5 max-iphone:py-4">
            <li>
              <Link
                to="/"
                className={`rounded-md transition duration-150 ease-in p-2 hover:bg-secondary-light hover:text-primary-dark max-iphone:py-2 max-iphone:px-1 ${
                  activeLink === "/"
                    ? "bg-secondary-light cursor-default text-primary-dark"
                    : "text-secondary-light cursor-pointer"
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/productos"
                className={`rounded-md transition duration-150 ease-in p-2 hover:bg-secondary-light hover:text-primary-dark max-iphone:py-2 max-iphone:px-1 ${
                  activeLink === "/productos"
                    ? "bg-secondary-light cursor-default text-primary-dark"
                    : "text-secondary-light cursor-pointer"
                }`}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/ofertas"
                className={`rounded-md transition duration-150 ease-in p-2 hover:bg-secondary-light hover:text-primary-dark max-iphone:py-2 max-iphone:px-1 ${
                  activeLink === "/ofertas"
                    ? "bg-secondary-light cursor-default text-primary-dark"
                    : "text-secondary-light cursor-pointer"
                }`}
              >
                Ofertas
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={`rounded-md transition duration-150 ease-in p-2 hover:bg-secondary-light hover:text-primary-dark max-iphone:py-2 max-iphone:px-1 ${
                  activeLink === "/contacto"
                    ? "bg-secondary-light cursor-default text-primary-dark"
                    : "text-secondary-light cursor-pointer"
                }`}
              >
                Contacto
              </Link>
            </li>
          </ul>

          {/* Iconos de usuario y carrito */}
          <div className="flex flex-row gap-2 items-center max-iphone:w-1/4 justify-center">
            {/* Carrito */}
            <Link
              to="/cart"
              className="relative"
            >
              <ShoppingCart
                size="40"
                className={`rounded p-2 transition duration-150 ease-in hover:bg-secondary-light hover:text-primary-dark ${
                  activeLink === "/cart"
                    ? "bg-secondary-light text-primary-dark cursor-default"
                    : "bg-primary-light text-secondary-light cursor-pointer"
                }`}
              />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-1 bg-state-warning text-secondary-accent text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>

            {/* Usuario */}
            <div
              className="relative"
              ref={menuRef}
            >
              <button
                onClick={handleUser}
                className="bg-primary-light text-secondary-light cursor-pointer rounded p-2 transition duration-150 ease-in hover:bg-secondary-light hover:text-primary-dark"
              >
                <User size="24" />
              </button>

              {/* Menú desplegable del usuario */}
              <div
                className={`${
                  isOpen
                    ? "flex flex-col font-Tertiary-Inter text-sm absolute right-0 top-12 z-10 bg-secondary-accent border border-secondary-dark rounded-md shadow-lg w-48 py-2"
                    : "hidden"
                }`}
              >
                {isAuthenticated ? (
                  <>
                    {/* Usuario autenticado */}
                    <div className="px-4 py-2 border-b border-secondary-dark">
                      <p className="text-primary-dark font-semibold truncate">
                        {user?.firstName || user?.username || "Usuario"}
                      </p>
                      <p className="text-secondary-dark text-xs truncate">
                        {user?.email || "usuario@email.com"}
                      </p>
                    </div>

                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-primary-dark hover:bg-secondary-light transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <UserCircle size={16} />
                      Mi Perfil
                    </Link>

                    <hr className="my-1 border-secondary-dark" />

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 text-state-danger hover:bg-state-danger/10 transition-colors w-full text-left"
                    >
                      <LogOut size={16} />
                      Cerrar Sesión
                    </button>
                  </>
                ) : (
                  <>
                    {/* Usuario no autenticado */}
                    <Link
                      to="/login"
                      className="flex items-center gap-2 px-4 py-2 text-primary-dark hover:bg-secondary-light transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <User size={16} />
                      Iniciar Sesión
                    </Link>

                    <Link
                      to="/register"
                      className="flex items-center gap-2 px-4 py-2 text-primary-dark hover:bg-secondary-light transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <UserCircle size={16} />
                      Registrarse
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Botón flotante para volver arriba */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-primary-accent text-secondary-accent rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary-light"
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </header>
  );
};
