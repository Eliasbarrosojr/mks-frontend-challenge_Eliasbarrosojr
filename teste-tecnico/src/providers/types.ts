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

export interface IProductsContext {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  products: IProducts[];
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}
