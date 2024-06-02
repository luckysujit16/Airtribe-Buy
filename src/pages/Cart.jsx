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
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="text-center p-3">
                <img
                  src={item.image}
                  alt="Product Image"
                  className="img-thumbnail"
                />
              </td>
              <td>
                <span className="fs-5 fw-bold"> Product : {item.title}</span>
                {<br />}
                <span className="fs-6">Discription : {item.description}</span>
              </td>
              <td>{item.quantity}</td>
              <td>${getCartTotal()}</td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
      {/* <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul> */}
      {/* {console.log({ cart })} */}
      <div className="row">
        <div>
          <h4>Total Amount: ${getCartTotal()}</h4>
        </div>
        <div>
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
