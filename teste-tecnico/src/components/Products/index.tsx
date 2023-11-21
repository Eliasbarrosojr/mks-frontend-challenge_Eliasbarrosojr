import { useContext } from "react";
import { Paragraph, ProductList } from "./style";
import { ProductCard } from "./ProductCard";
import { ProductContext } from "../../providers/ProductsContext";

export const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      {products.length !== 0 ? (
        <ProductList>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductList>
      ) : (
        <div>
          <Paragraph>Sem produtos</Paragraph>
        </div>
      )}
    </>
  );
};
