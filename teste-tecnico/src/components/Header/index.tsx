import { HeaderDiv, Logo } from "./style";
import Vector from "../../assets/Vector.svg";

export const Header = () => {
  return (
    <HeaderDiv>
      <Logo>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </Logo>

      <button>
        <img src={Vector} alt="trash" className="trash" />
        <p>0</p>
      </button>
    </HeaderDiv>
  );
};
