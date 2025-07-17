import { Link, useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice.js";
import { Footer } from "../assets/components/Footer";
import { Breadcrumb } from "../assets/components/Breadcrumb";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => {
    return state.product.items.find((product) => product.id === parseInt(id));
  });

  if (!product) {
    return (
      <div>
        <div className="h-screen w-full flex flex-col gap-3 justify-center items-center bg-secondary-light">
          <h2 className="font-Primary-Poppins text-primary-dark text-3xl font-bold">
            Product not found
          </h2>
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
       flex-1 px-4 py-8 pt-[184px] bg-secondary-light
      
      /*propiedades tablet*/
      max-iphone:pt-[72px]

      /*propiedades pc*/
      max-tablet:w-full
      "
      >
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Product", to: `/product/${product.id}` },
          ]}
        />
        <div
          className="flex flex-col items-center gap-2 py-4
          max-iphone:flex-col "
        >
          <div className="">
            <h1
              className="font-Primary-Poppins text-primary-dark text-3xl font-bold text-center mb-2
            "
            >
              {product.title}
            </h1>
          </div>
          <div
            className="flex flex-col items-center gap-4 
          max-iphone:flex-col
          max-tablet:flex-row"
          >
            <div
              className="w-full overflow-hidden
          
          max-tablet:w-1/2 "
            >
              <div
                className="
              max-tablet:w-[460px] max-tablet:aspect-square"
              >
                <img
                  className="mx-auto h-full object-cover rounded-md"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </div>

            <div className="max-tablet:w-1/2 ">
              <div
                className="shadow-md bg-secondary-accent p-4 rounded-md
              max-laptop:w-[460px] max-laptop:aspect-square "
              >
                <p className="font-Tertiary-Inter text-secondary-dark mb-6">
                  {product.description}
                </p>
                <div className="mb-6">
                  <span className="font-Tertiary-Inter text-primary-dark text-3xl font-medium">
                    ${product.price}
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="font-Secondary-Gidole text-primary-dark font-semibold mb-2">
                    Category
                  </h3>
                  <span className="font-Tertiary-Inter bg-primary-accent text-secondary-accent inline-block rounded-full px-3 py-1 text-sm">
                    {product.category}
                  </span>
                </div>
                <button
                  className="font-Tertiary-Inter w-full bg-primary-light text-secondary-accent 
                    px-8 py-3 rounded-md flex items-center justify-center
                    gap-2 hover:bg-primary-accent hover:scale-105 transition-all ease-in
                    max-iphone:w-auto"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
