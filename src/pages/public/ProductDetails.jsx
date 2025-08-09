import { Link, useParams } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { addToCart } from "../../features/cart/cartSlice.js";
import { Footer } from "../../assets/components/layout/Footer.jsx";
import { Breadcrumb } from "../../assets/components/ui/Breadcrumb.jsx";
import { Loading } from "../../assets/components/common/Loading.jsx";
import { ErrorMessage } from "../../assets/components/common/ErrorMessage.jsx";
=======
import { addToCart } from "../../features/cart/cartSlice.js";
import { Footer } from "../../assets/components/layout/Footer.jsx";
import { Breadcrumb } from "../../assets/components/ui/Breadcrumb.jsx";
import { useState, useEffect } from "react";
>>>>>>> rama-nueva
import { ProductService } from "../../services/productService.js";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

<<<<<<< HEAD
  // Estados para manejar la carga del producto
=======
  // estados carga del producto
>>>>>>> rama-nueva
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

<<<<<<< HEAD
  // Cargar producto al montar el componente
=======
  //cargar producto
>>>>>>> rama-nueva
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

<<<<<<< HEAD
  // Función para agregar al carrito
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      // Opcional: Mostrar notificación de éxito
      console.log("Producto agregado al carrito:", product.title);
    }
  };

  // Función para reintentar carga
  const handleRetry = () => {
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

    loadProduct();
  };

  // Estado de carga
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center bg-secondary-light pt-[184px] max-iphone:pt-[72px]">
          <Loading message="Cargando producto..." />
        </div>
        <Footer />
      </div>
    );
  }

  // Estado de error
  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center bg-secondary-light pt-[184px] max-iphone:pt-[72px] px-4">
          <div className="max-w-md w-full">
            <ErrorMessage
              message={error}
              onRetry={handleRetry}
            />
            <div className="text-center mt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-Tertiary-Inter bg-primary-light text-secondary-accent px-6 py-3 rounded-md hover:bg-primary-accent hover:scale-105 transition-all ease-in"
              >
                <ArrowLeft size={20} />
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Si no hay producto (no debería pasar con el manejo de errores)
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col gap-3 justify-center items-center bg-secondary-light pt-[184px] max-iphone:pt-[72px] px-4">
          <h2 className="font-Primary-Poppins text-primary-dark text-3xl font-bold text-center">
            Producto no encontrado
          </h2>
          <p className="font-Tertiary-Inter text-secondary-dark text-center mb-4">
            El producto que buscas no existe o ha sido eliminado.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-Tertiary-Inter bg-primary-light text-secondary-accent px-6 py-3 rounded-md hover:bg-primary-accent hover:scale-105 transition-all ease-in"
          >
            <ArrowLeft size={20} />
            Volver al inicio
=======
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
>>>>>>> rama-nueva
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

<<<<<<< HEAD
  // Renderizado principal del producto
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 px-4 py-8 pt-[184px] bg-secondary-light max-iphone:pt-[72px] max-tablet:w-full">
        {/* Breadcrumb */}
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb
            items={[
              { label: "Inicio", to: "/" },
              { label: product.category || "Producto", to: "#" },
              { label: product.title, to: `/product/${product.id}` },
            ]}
          />
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-8 py-8 max-iphone:flex-col">
            {/* Título */}
            <div className="w-full text-center">
              <h1 className="font-Primary-Poppins text-primary-dark text-3xl font-bold mb-2 max-iphone:text-2xl">
                {product.title}
              </h1>
              {product.brand && (
                <p className="font-Tertiary-Inter text-secondary-dark text-lg">
                  {product.brand}
                </p>
              )}
            </div>

            {/* Contenido principal */}
            <div className="flex flex-col items-start gap-8 w-full max-tablet:flex-row">
              {/* Imagen del producto */}
              <div className="w-full max-tablet:w-1/2">
                <div className="aspect-square max-w-md mx-auto bg-secondary-accent rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    src={product.image || product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Información del producto */}
              <div className="w-full max-tablet:w-1/2">
                <div className="bg-secondary-accent p-6 rounded-lg shadow-lg max-w-md mx-auto max-tablet:mx-0">
                  {/* Descripción */}
                  <div className="mb-6">
                    <h3 className="font-Secondary-Gidole text-primary-dark font-semibold mb-3 text-lg">
                      Descripción
                    </h3>
                    <p className="font-Tertiary-Inter text-secondary-dark leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Precio */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-Primary-Poppins text-primary-dark text-3xl font-bold">
                        ${product.price}
                      </span>
                      {product.discountPercentage && (
                        <span className="bg-state-danger text-secondary-accent px-2 py-1 rounded-full text-sm font-medium">
                          -{product.discountPercentage}%
                        </span>
                      )}
                    </div>
                    {product.discountPercentage && (
                      <p className="font-Tertiary-Inter text-secondary-dark text-sm mt-1">
                        Precio original: $
                        {(
                          product.price /
                          (1 - product.discountPercentage / 100)
                        ).toFixed(2)}
                      </p>
                    )}
                  </div>

                  {/* Información adicional */}
                  <div className="mb-6 space-y-3">
                    {/* Categoría */}
                    <div>
                      <h4 className="font-Secondary-Gidole text-primary-dark font-semibold mb-1">
                        Categoría
                      </h4>
                      <span className="font-Tertiary-Inter bg-primary-accent text-secondary-accent inline-block rounded-full px-3 py-1 text-sm capitalize">
                        {product.category}
                      </span>
                    </div>

                    {/* Rating */}
                    {product.rating && (
                      <div>
                        <h4 className="font-Secondary-Gidole text-primary-dark font-semibold mb-1">
                          Calificación
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? "text-primary-accent"
                                    : "text-secondary-dark"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="font-Tertiary-Inter text-secondary-dark text-sm">
                            ({product.rating}/5)
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Stock */}
                    {product.stock !== undefined && (
                      <div>
                        <h4 className="font-Secondary-Gidole text-primary-dark font-semibold mb-1">
                          Disponibilidad
                        </h4>
                        <span
                          className={`font-Tertiary-Inter text-sm ${
                            product.stock > 0
                              ? "text-state-success"
                              : "text-state-danger"
                          }`}
                        >
                          {product.stock > 0
                            ? `${product.stock} disponibles`
                            : "Agotado"}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Botón agregar al carrito */}
                  <button
                    className={`font-Tertiary-Inter w-full px-8 py-4 rounded-md flex items-center justify-center gap-3 transition-all ease-in ${
                      product.stock > 0
                        ? "bg-primary-light text-secondary-accent hover:bg-primary-accent hover:scale-105"
                        : "bg-secondary-dark text-secondary-accent cursor-not-allowed"
                    }`}
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                  >
                    <ShoppingCart size={20} />
                    {product.stock > 0
                      ? "Agregar al carrito"
                      : "Producto agotado"}
                  </button>

                  {/* Botón volver */}
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 w-full mt-3 font-Tertiary-Inter bg-transparent border-2 border-primary-light text-primary-light px-6 py-3 rounded-md hover:bg-primary-light hover:text-secondary-accent transition-all ease-in"
                  >
                    <ArrowLeft size={20} />
                    Seguir comprando
=======
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
>>>>>>> rama-nueva
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
