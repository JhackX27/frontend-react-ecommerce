import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, ShoppingCart, ArrowUp } from "lucide-react";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext.jsx";

export const NavBar = () => {
  //estados locales
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  //ref para el menú desplegable
  const menuRef = useRef(null);

  //hooks
  const navigate = useNavigate();
  const location = useLocation();
  const activeLink = location.pathname;
  const { user, isAuthenticated, logout } = useAuth();

  //redux selectors
  const cartItems = useSelector((state) => state.cart?.items || []);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  //handlers
  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    navigate("/");
  };

  //cerrar menú al hacer click afuera
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

  //scroll to top button
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
      <>
        <div className="bg-secondary-accent shadow-md fixed top-0 z-50 w-full min-w-[320px]">
          <nav
            className="font-Primary-Poppins container mx-auto flex flex-wrap
                items-center relative w-full py-4 justify-center gap-2 

                /*propiedades tablet pc*/
                max-iphone:justify-between max-iphone:flex-row max-iphone:px-2 max-iphone:py-2
                max-iphone:gap-0"
          >
            <div
              className="
            /*propiedades moviles*/
            flex flex-items-center w-full justify-center

            /*propiedades mayor iphone*/
            max-iphone:w-1/4 max-iphone:flex max-iphone:items-center
            
            "
            >
              <Link
                to="/"
                className="py-2"
              >
                <img
                  src="https://placecats.com/150/60"
                  alt="Logo"
                  className="h-10 object-cover rounded-md"
                />
              </Link>
            </div>

            <ul
              className="bg-primary-light rounded-full
            /*propiedades moviles*/
            w-5/6 flex justify-between p-2
            /*propiedades tablet pc*/
            max-iphone:w-2/4 max-iphone:justify-center max-iphone:gap-2 max-iphone:items-center max-iphone:px-5 max-iphone:py-4
            "
            >
              <li>
                <Link
                  to="/"
                  className={
                    (activeLink === "/"
                      ? "bg-secondary-light cursor-default text-primary-dark "
                      : "text-secondary-light cursor-pointer ") +
                    "rounded-md transition duration-150 ease-in p-2 hover:bg-secondary-light hover:text-primary-dark max-iphone:py-2 max-iphone:px-1 "
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={
                    (activeLink === "/about"
                      ? "bg-secondary-light cursor-default "
                      : "text-secondary-light cursor-pointer ") +
                    "max-iphone:py-2 max-iphone:px-1 rounded-md transition duration-150 ease-in p-2 hover:bg-secondary-light hover:text-primary-dark"
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className={
                    (activeLink === "/faqs"
                      ? "bg-secondary-light cursor-default "
                      : "text-secondary-light cursor-pointer ") +
                    "max-iphone:py-2 max-iphone:px-1 rounded-md transition duration-150 ease-in p-2 hover:bg-secondary-light hover:text-primary-dark"
                  }
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={
                    (activeLink === "/contact"
                      ? "bg-secondary-light cursor-default "
                      : "text-secondary-light cursor-pointer ") +
                    "max-iphone:py-2 max-iphone:px-1 rounded-md transition duration-150 ease-in p-2 hover:bg-secondary-light hover:text-primary-dark"
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div
              className="flex flex-column gap-2 items-center
            
            /*propiedades tablet pc*/
            max-iphone:w-1/4 justify-center
            "
            >
              <Link
                to="/cart"
                className="relative"
              >
                <ShoppingCart
                  size="40"
                  className={
                    (activeLink === "/cart"
                      ? "bg-secondary-light text-primary-dark cursor-default "
                      : "bg-primary-light text-secondary-light cursor-pointer ") +
                    "rounded p-2 transition duration-150 ease-in hover:bg-secondary-light hover:text-primary-dark"
                  }
                />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-1 bg-state-warning text-secondary-accent cursor-default text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <div
                className="relative"
                ref={menuRef}
              >
                <User
                  size="40"
                  className="bg-primary-light text-secondary-light cursor-pointer rounded p-2 transition duration-150 ease-in hover:bg-secondary-light hover:text-primary-dark"
                  onClick={handleUser}
                />
                <div>
                  <ul
                    className={`${
                      isOpen
                        ? "flex flex-col font-Tertiary-Inter text-sm absolute right-0 md:right-0 top-12 z-10 bg-primary-light p-1 w-40 rounded-md text-center gap"
                        : "hidden"
                    }`}
                  >
                    <li className="hover:bg-secondary-light hover:text-primary-dark text-secondary-light px-4 py-1 rounded-md hover:cursor-pointer">
                      <Link to="/login">Sign</Link>
                    </li>
                    <li className="hover:bg-secondary-light hover:text-primary-dark text-secondary-light px-4 py-1 rounded-md hover:cursor-pointer">
                      <Link to="">My Account</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          {/* buscador 
          <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 px-2">
            <div className="w-1/2 sm:block hidden">
              <input
                type="text"
                placeholder="Search Product"
                className="font-Tertiary-Inter bg-zinc-100 rounded-md border border-zinc-200 focus:outline-1 px-3 py-3 w-full"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              />
            </div>
          </nav>
          */}

          {/* Button flotante arrow */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 bg-primary-accent  text-secondary-accent rounded-full p-3 shadow-lg transition-all duration-200
              hover:scale-105 hover:bg-primary-light"
              aria-label="Volver arriba"
            >
              <ArrowUp />
            </button>
          )}
        </div>
      </>
    </header>
  );
};
