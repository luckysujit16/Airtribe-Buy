import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../Store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        return Number(total) + Number(item.price) * Number(item.quantity);
      }, 0)
      .toFixed(2);
  };

  const handleIncrease = (id) => {
    // alert("increaseQuantity : " + id);
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrease = (id) => {
    // alert("decreaseQuantity : " + id);
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <>
      <h3>Shopping Cart</h3>
      <table className="table table-bordered">
        <thead className="thead table-dark">
          <tr className="text-center">
            <th>Product</th>
            <th>Description</th>
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
                <br />
                <span className="fs-6">Description : {item.description}</span>
              </td>
              <td className="text-center">
                <div className="cart-grid">
                  <span>
                    <button
                      className="btn btn-action"
                      onClick={() => {
                        handleDecrease(item.id);
                      }}
                    >
                      <i class="bi bi-file-minus-fill fs-4"></i>
                    </button>
                  </span>
                  <span className="p-2 fs-6 fw-bold">{item.quantity}</span>
                  <span>
                    <button
                      className="btn btn-action"
                      onClick={() => {
                        handleIncrease(item.id);
                      }}
                    >
                      <i class="bi bi-file-plus-fill fs-4"></i>
                    </button>
                  </span>
                </div>
              </td>
              <td className="text-center">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col-12">
          <h4>Total Amount: ${calculateTotal()}</h4>
        </div>
        <div className="col-12">
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
