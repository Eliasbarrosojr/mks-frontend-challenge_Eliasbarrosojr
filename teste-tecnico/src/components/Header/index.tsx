import { HeaderDiv, Logo } from "./style";
import Vector from "../../assets/Vector.svg";
import { useContext } from "react";
import { ProductContext } from "../../providers/ProductsContext";

export const Header = () => {
  const { setOpenCart, cart } = useContext(ProductContext);

  const itens = cart.length;

  return (
    <HeaderDiv>
      <Logo>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </Logo>

      <button
        onClick={() => {
          setOpenCart(false);
        }}
      >
        <img src={Vector} alt="Cart" className="Cart" />
        <p>{itens}</p>
      </button>
    </HeaderDiv>
  );
};
