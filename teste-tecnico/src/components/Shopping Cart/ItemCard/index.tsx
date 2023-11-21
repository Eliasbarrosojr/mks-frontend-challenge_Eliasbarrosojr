import { ProductContext } from "../../../providers/ProductsContext";
import { CartItem } from "../../../providers/types";

import { CartIItem, Quantity } from "./style";
import { useContext } from "react";

export interface IItemCard {
  item: CartItem;
}

export const ItemCard = ({ item }: IItemCard) => {
  const { removeProduct, increaseQuantity, decreaseQuantity } =
    useContext(ProductContext);

  const priceOld = parseInt(item.price) * item.quantity;

  return (
    <CartIItem>
      <img src={item.photo} alt={item.name} />
      <h3>{item.name}</h3>
      <Quantity>
        <button
          onClick={() => {
            increaseQuantity(item.id);
          }}
        >
          +
        </button>
        <span>|{item.quantity}|</span>
        <button
          onClick={() => {
            decreaseQuantity(item.id);
          }}
        >
          -
        </button>
      </Quantity>
      <span>R${priceOld}</span>
      <button
        onClick={() => {
          removeProduct(item);
        }}
      >
        x
      </button>
    </CartIItem>
  );
};
