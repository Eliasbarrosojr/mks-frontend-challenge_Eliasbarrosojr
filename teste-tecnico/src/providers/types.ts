export interface IProviderProps {
  children: React.ReactNode;
}

export interface IProducts {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
}

export interface IProductCard {
  product: IProducts;
}

export interface CartItem extends IProducts {
  quantity: number;
}

export interface IProductsContext {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  products: CartItem[];
  setProducts: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addProduct: (product: CartItem) => void;
  removeProduct: (product: CartItem) => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  decreaseQuantity: (id: number) => void;
  increaseQuantity: (id: number) => void;
}
