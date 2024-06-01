import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const navigate = useNavigate();

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product["id"]);
    alert(JSON.stringify(existingProduct));

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Number(item.quantity) + Number(quantity) }
            : item
        )
      );
      alert("We have Reached IF setCart");
    } else {
      setCart([...cart, { ...product, quantity }]);
      alert("We have Reached ELSE setCart :");
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => { return Number(total) + Number(item.price) * Number(item.quantity)}, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
