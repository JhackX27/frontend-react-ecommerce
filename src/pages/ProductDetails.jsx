import { Link, useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice.js";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => {
    return state.product.items.find((product) => product.id === parseInt(id));
  });

  if (!product) {
    return (
      <div className="min-h-[calc(100vh-176px)] flex items-center justify-center container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link
            to="/"
            className="font-Tertiary-Inter inline-block bg-zinc-200 px-6 py-2 rounded-lg hover:bg-zinc-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link
          to="/"
          className="font-Tertiary-Inter mb-8 inline-block"
        >
          Back to Home
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="shadow-md p-4 rounded w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[600px]">
          <img
            className="mx-auto h-full object-cover"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div>
          <h1 className="font-Primary-Poppins text-3xl font-bold mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <span className="font-Tertiary-Inter text-3xl font-medium">
              ${product.price}
            </span>
          </div>
          <div className="mb-6">
            <h3 className="font-Secondary-Gidole font-semibold mb-2">
              Category
            </h3>
            <span className="font-Tertiary-Inter inline-block bg-gray-200 rounded-full px-3 py-1 text-sm">
              {product.category}
            </span>
          </div>
          <button
            className="font-Tertiary-Inter w-full md:w-auto bg-zinc-200 
                    px-8 py-3 rounded-md flex items-center justify-center
                    gap-2 hover:bg-zinc-300"
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
  );
};
