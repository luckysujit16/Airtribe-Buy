import React, { createContext, useState } from "react";
import LinksExample from "./Helper";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product["id"]);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Number(item.quantity) + Number(quantity) }
            : item
        )
      );
      // LinksExample("success");
      alert(
        "Existing Product Qnt : " +
          existingProduct.quantity +
          " Added to Cart : " +
          existingProduct.title
      );
      console.log(cart);
    } else {
      setCart([...cart, { ...product, quantity }]);
      LinksExample("success");
      alert(
        "New Product Qnt : " +
          existingProduct.quantity +
          " Added to Cart : " +
          existingProduct.title
      );
    }
  };

  // console.log("Product : " + cart[0]["title"] + "," + "Quantity :" + cart);
  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      return Number(total) + Number(item.price) * Number(item.quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
