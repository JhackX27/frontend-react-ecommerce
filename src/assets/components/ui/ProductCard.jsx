import { useNavigate } from "react-router-dom";

export const ProductCard = ({ idProduct, name, price, description, image }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${idProduct}`);
  };

  return (
    <div className="cursor-crosshair shadow-lg rounded-md flex flex-col justify-between h-full bg-gray-50">
      <div>
        <div className="aspect-square rounded-t-md overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2
            className="font-Primary-Poppins text-xl font-semibold my-2 h-14 overflow-hidden
          text-primary-dark"
          >
            {name}
          </h2>
          <p className="text-sm text-zinc-500 h-16 overflow-hidden text-ellipsis">
            {description || "Sin descripción disponible"}
          </p>
        </div>
      </div>
      <div className="p-4 border-t-2 border-primary-light border-">
        <div className="flex justify-between items-center ">
          <p className="text-xl font-medium">${price}</p>
          <button
            onClick={handleViewDetails}
            className="cursor-pointer font-Tertiary-Inter
            bg-primary-light text-secondary-accent rounded-md p-2
            hover:scale-105 hover:bg-primary-accent transition-all ease-in"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
};
