import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { ShopPage } from "./style";

export const Dashboard = () => {
  return (
    <ShopPage>
      <Header />
      <main>
        <Products />
      </main>
    </ShopPage>
  );
};
