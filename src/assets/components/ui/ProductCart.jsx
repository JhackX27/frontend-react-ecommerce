// src/assets/components/ui/ProductCart.jsx - VERSIÓN CORREGIDA
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice.js";

export const ProductCart = ({
  id,
  title,
  price,
  description,
  image,
  thumbnail,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Usar thumbnail si está disponible, de lo contrario usar image
  const imageUrl = thumbnail || image || "https://via.placeholder.com/300";

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Evitar navegación al hacer clic en agregar
    dispatch(
      addToCart({
        id,
        title,
        price,
        description,
        image: imageUrl,
      })
    );
  };

  const handleViewDetails = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="cursor-pointer shadow-lg rounded-md flex flex-col justify-between h-full bg-secondary-accent hover:shadow-xl transition-all duration-300 hover:scale-102"
      onClick={handleViewDetails}
    >
      <div>
        <div className="aspect-square rounded-t-md overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/300";
            }}
          />
        </div>
        <div className="p-4">
          <h2 className="font-Primary-Poppins text-xl font-semibold my-2 h-14 line-clamp-2 text-primary-dark">
            {title}
          </h2>
          <p className="text-sm text-secondary-dark h-16 line-clamp-3 font-Tertiary-Inter">
            {description}
          </p>
        </div>
      </div>

      <div className="p-4 border-t-2 border-primary-light">
        <div className="flex justify-between items-center">
          <p className="text-xl font-medium text-primary-dark font-Primary-Poppins">
            ${price}
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="font-Tertiary-Inter bg-state-success text-secondary-accent rounded-md px-3 py-2 hover:scale-105 hover:bg-state-success/90 transition-all ease-in text-sm"
            >
              Agregar
            </button>
            <button
              onClick={handleViewDetails}
              className="font-Tertiary-Inter bg-primary-light text-secondary-accent rounded-md px-3 py-2 hover:scale-105 hover:bg-primary-accent transition-all ease-in text-sm"
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
