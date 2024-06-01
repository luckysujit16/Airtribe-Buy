import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, getCartTotal } = useContext(CartContext);
  //   alert("Cart Page");
  return (
    <div className="container">
      <h3>Shopping Cart</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      {console.log({cart})}
      <h4>Total Amount: ${getCartTotal()}</h4>
    </div>
  );
};

export default Cart;
