import { Link, useParams } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice.js";
import { Footer } from "../../assets/components/layout/Footer.jsx";
import { Breadcrumb } from "../../assets/components/ui/Breadcrumb.jsx";
import { useState, useEffect } from "react";
import { ProductService } from "../../services/productService.js";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // estados carga del producto
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //cargar producto
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      setError(null);

      const result = await ProductService.getProductById(id);

      if (result.success) {
        setProduct(result.data);
      } else {
        setError(result.message);
      }

      setLoading(false);
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  // función agregar al carrito
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      console.log("Producto agregar al carrito", product.name);
    }
  };

  if (loading) {
    return (
      <div>
        <div className="h-screen w-full flex flex-col gap-3 justify-center items-center bg-secondary-light">
          <h2 className="font-Primary-Poppins text-primary-dark text-3xl font-bold">
            Loading...
          </h2>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div>
        <div className="h-screen w-full flex flex-col gap-3 justify-center items-center bg-secondary-light">
          <h2 className="font-Primary-Poppins text-primary-dark text-3xl font-bold">
            {error || "Product not found"}
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
            { label: product.categoryRef?.name || "Producto", to: "#" },
            { label: product.name, to: `/product/${product.idProduct}` },
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
              {product.name}
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
                  src={
                    product.image
                      ? `https://api.jhackalzamora.com/${product.image}`
                      : "https://via.placeholder.com/460"
                  }
                  alt={product.name}
                />
              </div>
            </div>

            <div className="max-tablet:w-1/2 ">
              <div
                className="shadow-md bg-secondary-accent p-4 rounded-md
              max-laptop:w-[460px] max-laptop:aspect-square "
              >
                <p className="font-Tertiary-Inter text-secondary-dark mb-6">
                  {product.description || "Sin descripción disponible"}
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
                    {product.categoryRef?.name}
                  </span>
                </div>
                <div className="w-full flex flex-col gap-2 max-iphone:flex-row">
                  <button
                    className="font-Tertiary-Inter w-full bg-primary-light text-secondary-accent 
                    px-8 py-3 rounded-md flex items-center justify-center
                    gap-2 hover:bg-primary-accent hover:scale-105 transition-all ease-in
                    max-iphone:w-auto"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart />
                    Add to Cart
                  </button>
                  <Link
                    to="/"
                    className="font-Tertiary-Inter w-full bg-state-danger text-secondary-accent 
                    px-8 py-3 rounded-md flex items-center justify-center
                    gap-2 hover:scale-105 transition-all ease-in
                    max-iphone:w-auto"
                  >
                    <ArrowLeft />
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
