import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { ShoppingCart } from "../../components/Shopping Cart";
import { ProductContext } from "../../providers/ProductsContext";
import { ShopPage } from "./style";
import { useContext } from "react";

export const Dashboard = () => {
  const { openCart } = useContext(ProductContext);
  return (
    <ShopPage>
      <Header />
      <main>
        {openCart === false ? <ShoppingCart /> : true}
        <Products />
      </main>
      <footer>
        <p>MKS sistemas © Todos os direitos reservados</p>
      </footer>
    </ShopPage>
  );
};
