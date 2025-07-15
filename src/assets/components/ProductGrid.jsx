import { ProductCart } from "./ProductCart";
import { useSelector } from "react-redux";
export const ProductGrid = () => {
  const products = useSelector((state) => state.product.filteredItems);
  return (
    <div
      className="grid grid-col-1 gap-4 py-4 px-1
    max-iphone:py-8 max-iphone:px-1 max-iphone:grid-cols-2 max-iphone:gap-4 
    max-tablet:grid-cols-3
    max-laptop:grid-cols-3
    "
    >
      {products.map((product) => {
        return (
          <ProductCart
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        );
      })}
    </div>
  );
};
