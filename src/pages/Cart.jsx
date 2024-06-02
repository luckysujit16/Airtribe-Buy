import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, getCartTotal } = useContext(CartContext);
  // alert("Cart Page :", cart);
  return (
    <>
      <h3>Shopping Cart</h3>
      <table className="table table-bordered">
        <thead className="thead table-dark">
          <tr className="text-center">
            <th>Product</th>
            <th>Discription</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.image}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${getCartTotal()}</td>
              </tr>
            ))}
            ;
          </tbody>
        </thead>
      </table>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      {/* {console.log({ cart })} */}
      <h4>Total Amount: ${getCartTotal()}</h4>
    </>
  );
};

export default Cart;
