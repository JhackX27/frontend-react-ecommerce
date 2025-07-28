import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Minus, Trash } from "lucide-react";
import { removeFromCart, updateQuantity } from "../../features/cart/cartSlice";
<<<<<<< HEAD
import { Footer } from "../../assets/components/Footer";
import { CheckoutModal } from "../../assets/components/CheckoutModal";
=======
import { Footer } from "../../assets/components/layout/Footer";
import { CheckoutModal } from "../../assets/components/ui/CheckoutModal";
>>>>>>> rama-prueba

export const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOpenCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutModalOpen(false);
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <div className="h-screen w-full flex flex-col gap-3 justify-center items-center bg-secondary-light">
          <h2 className="font-Primary-Poppins text-primary-dark text-3xl font-bold text-center">
            Your Cart is Empty
          </h2>
          <p className="font-Tertiary-Inter text-primary-dark">
            Add some products to your cart see then here
          </p>
          <Link
            to="/"
            className="font-Tertiary-Inter bg-primary-light text-secondary-accent 
                    px-8 py-3 rounded-md flex items-center justify-center
                    gap-2 hover:bg-primary-accent hover:scale-105 transition-all ease-in
                    max-iphone:w-auto"
          >
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="/*propiedades moviles*/
       flex-1 px-4 pb-8 pt-[184px] bg-secondary-light
      
      /*propiedades tablet*/
      max-iphone:pt-[72px]

      /*propiedades pc*/
      max-tablet:w-full 
      "
      >
        <h2 className="font-Primary-Poppins text-2xl font-bold my-5">
          Shopping Cart
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 shadow-md p-4 rounded-md bg-secondary-accent">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-4 border-b"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                </Link>
                <div className="flex-1">
                  <Link
                    to={`/product/${item.id}`}
                    className="font-Tertiary-Inter font-semibold hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                  <p className="text-gray-600">{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(0, item.quantity - 1),
                          })
                        )
                      }
                    >
                      <Minus size="16" />
                    </button>
                    <span className="font-Tertiary-Inter font-light">
                      {item.quantity}
                    </span>
                    <button
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(0, item.quantity + 1),
                          })
                        )
                      }
                    >
                      <Plus size="16" />
                    </button>
                    <div
                      className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <Trash size="20" />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-normal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white shadow-md p-6 rounded-md">
              <h3 className="font-Secondary-Gidole text-xl font-bold mb-4">
                Order Summary
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="font-Tertiary-Inter font-normal">
                    Subtotal
                  </span>
                  <span className="font-Tertiary-Inter font-normal">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-Tertiary-Inter font-normal">
                    Shipping
                  </span>
                  <span className="font-Tertiary-Inter font-normal">Free</span>
                </div>
                <div className="border-t pt-2 font-bold">
                  <div className="flex justify-between">
                    <span className="font-Tertiary-Inter">Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleOpenCheckout}
                className="font-Tertiary-Inter w-full bg-primary-light text-secondary-accent 
                    px-8 py-3 rounded-md flex items-center justify-center
                    gap-2 hover:bg-primary-accent hover:scale-105 transition-all ease-in"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal de Checkout */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={handleCloseCheckout}
        cartItems={cartItems}
        total={total}
      />
    </div>
  );
};
