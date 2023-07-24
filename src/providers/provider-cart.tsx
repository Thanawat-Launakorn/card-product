"use client";
import { IProduct } from "@/interface/product";
import React, { FC } from "react";

type ContenxtProps = {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
};
const Context = React.createContext<ContenxtProps>({} as ContenxtProps);

type ProviderProps = {
  children: React.ReactNode;
};

type actionProps = {
  type: "SET";
  payload: IProduct[];
};
const AppCart: FC<ProviderProps> = ({ children }) => {
  const reducer = (state: IProduct[], action: actionProps) => {
    switch (action.type) {
      case "SET":
        return action.payload;
      default:
        return state;
    }
  };

  const [initialProducts, dispatch] = React.useReducer(
    reducer,
    [] as IProduct[]
  );
  const setProducts = (products: IProduct[]) =>
    dispatch({ type: "SET", payload: products });
  return (
    <Context.Provider value={{ products: initialProducts, setProducts }}>
      {children}
    </Context.Provider>
  );
};

export const useCart = () => React.useContext(Context);
export default AppCart;
