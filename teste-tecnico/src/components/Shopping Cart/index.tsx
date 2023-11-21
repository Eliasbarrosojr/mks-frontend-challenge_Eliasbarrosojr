import { ProductContext } from "../../providers/ProductsContext";
import { useContext } from "react";
import { CartContainer, CartFooter, CartHeader, CartList } from "./style";
import { ItemCard } from "./ItemCard";

export const ShoppingCart = () => {
  const { setOpenCart, cart } = useContext(ProductContext);

  const totalPrice = cart.reduce((acc, price) => {
    return parseInt(price.price) * price.quantity + acc;
  }, 0);

  return (
    <CartContainer>
      <CartHeader>
        <h2>Carrinho de compras</h2>
        <button
          onClick={() => {
            setOpenCart(true);
          }}
        >
          X
        </button>
      </CartHeader>
      {cart.length === 0 ? (
        <h3>Carrinho vazio</h3>
      ) : (
        <CartList>
          {cart.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </CartList>
      )}
      <CartFooter>
        <div>
          <h3>Total:</h3>
          <span>R${totalPrice}</span>
        </div>
        <button>Finalizar Compra</button>
      </CartFooter>
    </CartContainer>
  );
};
