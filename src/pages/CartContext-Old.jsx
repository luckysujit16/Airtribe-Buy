import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    // Check if product and quantity are valid
    if (!product || !quantity) {
      return;
    }

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Number(item.quantity) + Number(quantity) }
            : item
        )
      );

      alert(
        `Existing Product Qnt: ${
          existingProduct.quantity + quantity
        } Added to Cart: ${existingProduct.title}`
      );
      console.log(cart);
    } else {
      setCart([...cart, { ...product, quantity: Number(quantity) }]);

      alert(`New Product Qnt: ${quantity} Added to Cart: ${product.title}`);
    }
  };

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
