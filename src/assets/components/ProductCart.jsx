import { Link } from "react-router-dom";
export const ProductCart = ({ id, title, price, description, image }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="shadow-lg rounded-md cursor-pointer flex flex-col justify-between h-full bg-gray-50">
        <div>
          <div className="aspect-square rounded-t-md overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="font-Primary-Poppins text-xl font-semibold my-2 h-14 line-clamp-2">
              {title}
            </h2>
            <p className="text-sm text-zinc-500 h-16 line-clamp-3">
              {description}
            </p>
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">${price}</p>
            <p className=" text-blue-500 hover:underline">Ver detalles</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
