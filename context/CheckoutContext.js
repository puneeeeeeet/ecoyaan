"use client";
import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState(null);

  const addToCart = (product) => {

    const existing = cart.find(
      (item) => item.product_id === product.product_id
    );

    if (existing) {

      const updatedCart = cart.map((item) =>
        item.product_id === product.product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([...cart, { ...product, quantity: 1 }]);

    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        addToCart,
        address,
        setAddress
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};