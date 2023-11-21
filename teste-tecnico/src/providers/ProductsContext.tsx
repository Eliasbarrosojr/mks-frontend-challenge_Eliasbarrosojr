import { createContext, useEffect, useState } from "react";
import Api from "../services/Api";
import { CartItem, IProducts, IProductsContext, IProviderProps } from "./types";

export const ProductContext = createContext({} as IProductsContext);

export const ProductContextProvider = ({ children }: IProviderProps) => {
  const [cart, setCart] = useState([] as CartItem[]);
  const [openCart, setOpenCart] = useState(true);
  const [products, setProducts] = useState([] as CartItem[]);

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

  function addProduct(item: CartItem) {
    if (
      !cart.some((currentProduct: CartItem) => currentProduct.id === item.id)
    ) {
      const newCart = { ...item, quantity: 1 };
      setCart([...cart, newCart]);
    } else {
      console.log("O produto já foi adicionado");
    }
  }

  function increaseQuantity(id: number) {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCart);
  }

  function decreaseQuantity(id: number) {
    const newCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(newCart);
  }

  function removeProduct(currentProduct: IProducts) {
    const newCardProduct = cart.filter(
      (product) => product.id !== currentProduct.id
    );
    setCart(newCardProduct);
  }

  return (
    <ProductContext.Provider
      value={{
        openCart,
        setOpenCart,
        products,
        setProducts,
        addProduct,
        removeProduct,
        cart,
        setCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
