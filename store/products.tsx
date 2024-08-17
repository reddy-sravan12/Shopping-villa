import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  discounts: { value: number; isFixed: boolean };
  noOfItems: number;
}

interface productContextProps {
  products: CartItem[];
  setProducts: Dispatch<SetStateAction<CartItem[]>>;
  itemsIntoCart: CartItem[];
  setItemsIntoCart: Dispatch<SetStateAction<CartItem[]>>;
}

const productsContext = createContext<productContextProps>({
  products: [],
  setProducts: (newVal) => {
    console.log("log", "dummy initializer", newVal);
  },
  itemsIntoCart: [],
  setItemsIntoCart: (newVal) => {
    console.log("log", "dummy initializer", newVal);
  },
});

const productsWrapper = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartItem[]>([]);
  const [itemsIntoCart, setItemsIntoCart] = useState<CartItem[]>([]);

  return (
    <productsContext.Provider
      value={{ products, setProducts, itemsIntoCart, setItemsIntoCart }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default productsWrapper;

export const useproductsContext = () => useContext(productsContext);
