import { ProductGrid } from "../assets/components/ProductGrid.jsx";
import { Footer } from "../assets/components/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/products/productSlice.js";

const categories = ["All", "Graphic Cards", "Processors", "Memory", "Storage"];

export const Home = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.product.selectedCategory
  );
  return (
    <div>
      <div
        className="/*propiedades moviles*/
         bg-secondary-light relative pt-[184px]
      
         /*propiedades tablet pc*/
         max-iphone:pt-[72px]
      "
      >
        <div
          className="bg h-[calc(100vh-184px)] 
        max-iphone:h-[calc(100vh-72px)]"
        ></div>
        <div
          className="container mx-auto mt-4 px-4
        max-iphone:mt-10
        "
        >
          <div className="flex gap-4 flex-wrap">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  className={
                    `font-Tertiary-Inter text-secondary-accent font-normal py-2 px-4 rounded-md active:scale-105 active:bg-primary-light transition-all ease-in cursor-pointer ` +
                    (isSelected
                      ? "bg-primary-light scale-105"
                      : "bg-primary-accent")
                  }
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
      </div>

      <Footer />
    </div>
  );
};
