import { ProductGrid } from "../assets/components/ProductGrid.jsx";
import { Footer } from "../assets/components/Footer.jsx";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/products/productSlice.js";

const categories = ["All", "Graphic Cards", "Processors", "Memory", "Storage"];

export const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg"></div>
      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4 flex-wrap">
          {categories.map((category) => {
            return (
              <button
                className="font-Tertiary-Inter font-normal bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in cursor-pointer"
                onClick={() => dispatch(setSelectedCategory(category))}
                key={category}
              >
                {category}
              </button>
            );
          })}
        </div>
        <ProductGrid />
      </div>

      <Footer />
    </div>
  );
};
