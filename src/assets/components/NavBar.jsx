import { useState } from "react";
import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../features/products/productSlice.js";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" bg-white shadow-md">
      <>
        <div className="py-4 shadow-md">
          <nav
            className="
                font-Primary-Poppins container mx-auto flex flex-wrap
                 justify-between md:flex-row px-4 
                 md:px-2 items-center relative"
          >
            <ul className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <ul
              className={`${
                isOpen
                  ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4"
                  : "hidden"
              }`}
            >
              <li>
                <Link to="/">Sign</Link>
              </li>
              <li>
                <Link to="">My Account</Link>
              </li>
            </ul>
            <User
              size="40"
              className="bg-gray-200 p-2 text-black rounded cursor-pointer"
              onClick={handleUser}
            />
          </nav>

          <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 px-2">
            <div className="flex items-center">
              <Link
                to="/"
                className="bg-gray-700 py-2 px-4 rounded"
              >
                <img
                  src="https://placecats.com/100/30"
                  alt="Logo"
                  className="h-10 object-cover"
                />
              </Link>
            </div>

            <div className="w-1/2 sm:block hidden">
              <input
                type="text"
                placeholder="Search Product"
                className="font-Tertiary-Inter bg-zinc-100 rounded-md border border-zinc-200 focus:outline-1 px-3 py-3 w-full"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              />
            </div>

            <div className="relative">
              <Link to="/cart">
                <ShoppingCart
                  size="45"
                  className=" cursor-pointer bg-gray-100 px-3 py-2 rounded-full"
                />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      </>
    </header>
  );
};
