import { createContext, useEffect, useState } from "react";
import Api from "../services/Api";
import { IProducts, IProductsContext, IProviderProps } from "./types";

export const ProductContext = createContext({} as IProductsContext);

export const ProductContextProvider = ({ children }: IProviderProps) => {
  const [openCart, setOpenCart] = useState(true);
  const [products, setProducts] = useState([] as IProducts[]);

  async function getProdutcs() {
    try {
      const response1 = await Api.get(
        "/products?page=1&rows=5&sortBy=id&orderBy=ASC"
      );
      const firstPageProducts = response1.data.products;

      const response2 = await Api.get(
        "/products?page=2&rows=5&sortBy=id&orderBy=ASC"
      );
      const secondPageProducts = response2.data.products;

      setProducts([...firstPageProducts, ...secondPageProducts]);
    } catch (error) {
      console.error("Erro ao obter os produtos:", error);
    }
  }

  useEffect(() => {
    getProdutcs();
  }, []);

  return (
    <ProductContext.Provider
      value={{ openCart, setOpenCart, products, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
