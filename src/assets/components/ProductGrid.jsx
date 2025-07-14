import { ProductCart } from "./ProductCart";
import { useSelector } from "react-redux";
export const ProductGrid = () => {
  const products = useSelector((state) => state.product.filteredItems);
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24">
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
