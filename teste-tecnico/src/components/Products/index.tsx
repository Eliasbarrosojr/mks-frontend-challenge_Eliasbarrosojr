import { useContext } from "react";
import { ContentLoading, ProductList } from "./style";
import { ProductCard } from "./ProductCard";
import { ProductContext } from "../../providers/ProductsContext";
import { Loading } from "../Loading";

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
        <ContentLoading>
          <Loading />
        </ContentLoading>
      )}
    </>
  );
};
