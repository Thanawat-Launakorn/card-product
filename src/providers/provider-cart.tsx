"use client";
import { ICart } from "@/interface/product";
import React, { FC } from "react";

type ContextProps = {
  carts: ICart[];

  increaseCart: (cart: ICart) => void;
  decreaseCart: (cart: ICart) => void;
  addCart: (cart?: ICart, quantity?: number) => void;
  deleteCart: (cart: ICart) => void;
  clear: (cart: ICart) => void;

  quantity: number;
  setQuantity: (v: any) => void;
};
const Context = React.createContext<ContextProps>({} as ContextProps);

type ProviderProps = {
  children: React.ReactNode;
};

type payloadProps = {
  cart?: ICart;
  quantity?: number;
};

type actionProps = {
  type: "DELETE" | "INCREASE" | "DECREASE" | "CLEAR" | "ADD";
  payload: payloadProps | any;
  event?: Event;
};
const AppCart: FC<ProviderProps> = ({ children }) => {
  const [quantity, setQuantity] = React.useState<number>(1);
  const reducer = (state: ICart[], action: actionProps): ICart[] => {
    switch (action.type) {
      case "ADD":
        if (state.find((item) => item.id === action.payload.cart.id) == null) {
          return [
            ...state,
            { ...action.payload.cart, quantity: action.payload.quantity },
          ];
        } else {
          return state.map((item) => {
            if (item.id === action.payload.cart.id) {
              return {
                ...action.payload.cart,
                quantity:
                  item.quantity && item.quantity + action.payload.quantity,
              };
            } else {
              return item;
            }
          });
        }

      case "INCREASE":
        if (state.find((item) => item.id === action.payload.cart.id) == null) {
          return [...state, { ...action.payload.cart, quantity: 1 }];
        } else {
          return state.map((item) => {
            if (item.id === action.payload.cart.id) {
              return {
                ...action.payload.cart,
                quantity: item.quantity && item.quantity + 1,
              };
            } else {
              return item;
            }
          });
        }
      case "DECREASE":
        const quantity = state.find(
          (item) => item.id === action.payload.cart.id
        )?.quantity;
        if (quantity && quantity > 1) {
          return state.map((item) => {
            if (item.id === action.payload.cart.id) {
              return {
                ...action.payload.cart,
                quantity: item.quantity && item.quantity - 1,
              };
            } else {
              return item;
            }
          });
        }
      case "DELETE":
        return state.filter((item) => item.id !== action.payload.cart.id);

      case "CLEAR":
        return [];

      default:
        return state;
    }
  };
  const [initialCart, dispatch] = React.useReducer(reducer, []);

  const increaseCart = (cart: ICart) =>
    dispatch({ type: "INCREASE", payload: { cart } });
  const decreaseCart = (cart: ICart) =>
    dispatch({ type: "DECREASE", payload: { cart } });
  const addCart = (cart?: ICart, quantity?: number) =>
    dispatch({ type: "ADD", payload: { cart, quantity } });
  const deleteCart = (cart: ICart) =>
    dispatch({ type: "DELETE", payload: { cart } });
  const clear = (cart: ICart) => dispatch({ type: "CLEAR", payload: { cart } });
  return (
    <Context.Provider
      value={{
        carts: initialCart,
        clear,
        increaseCart,
        addCart,
        deleteCart,
        decreaseCart,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCart = () => React.useContext(Context);
export default AppCart;
