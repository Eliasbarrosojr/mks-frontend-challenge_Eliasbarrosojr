import { Description, ProductItem, StyleImage } from "./style";
import Bag from "../../../assets/Bag.svg";
import { IProducts } from "../../../providers/types";
import { Paragraph } from "./style";

export interface IProductCard {
  product: IProducts;
}

export const ProductCard = ({ product }: IProductCard) => {
  function TextoParcial() {
    const textoCompleto = `${product.description}`;
    const parteExibida = textoCompleto.slice(0, 40);

    return (
      <Paragraph>
        <p>{parteExibida}...</p>
      </Paragraph>
    );
  }

  const priceOld = `${product.price}`;
  const newPrice = priceOld.slice(0, -3);

  return (
    <ProductItem>
      <StyleImage>
        <img src={product.photo} alt={product.name} />
      </StyleImage>
      <Description>
        <h2>{product.name}</h2>
        <div>
          <p>R${newPrice}</p>
        </div>
      </Description>
      <TextoParcial />
      <button onClick={() => {}}>
        <img src={Bag} alt="bag" />
        Comprar
      </button>
    </ProductItem>
  );
};
