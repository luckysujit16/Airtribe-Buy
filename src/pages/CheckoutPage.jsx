import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseQuantity, decreaseQuantity } from "../Store/cartSlice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const Razorkey = "rzp_test_GMhXbKuyrkSy7N";

  const handleIncrease = (product) => {
    dispatch(increaseQuantity({ id: product.id }));
  };

  const handleDecrease = (product) => {
    dispatch(decreaseQuantity({ id: product.id }));
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        return Number(total) + Number(item.price) * Number(item.quantity);
      }, 0)
      .toFixed(2);
  };

  const payNow = async () => {
    const totalAmount = calculateTotal();

    try {
      const response = await fetch("http://localhost:5000/api/create-order", {
        // Update this URL if needed
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: totalAmount }),
      });

      const data = await response.json();
      const { orderId } = data;

      const options = {
        key: Razorkey, // Replace with your Razorpay key ID
        amount: totalAmount * 1000, // Razorpay expects amount in paise
        currency: "INR",
        name: "Airtribe-Buy",
        description: "Test Transaction",
        order_id: orderId,
        handler: function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;
          // Redirect to confirmation page with the payment details
          const confirmationUrl = `/confirmation?payment_id=${razorpay_payment_id}&order_id=${razorpay_order_id}&signature=${razorpay_signature}`;
          window.location.href = confirmationUrl;
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="container mt-0 p-0">
      <h3 className="text-muted mb-3">Checkout</h3>
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
          {cart
            .slice()
            .reverse()
            .map((item) => (
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
                  <span className="fs-6">
                    Description : {item.description.slice(0, 50)}
                  </span>
                </td>
                <td className="text-center">
                  <div className="cart-grid">
                    <span>
                      <button
                        className="btn btn-action"
                        onClick={() => handleDecrease(item)}
                      >
                        <i className="bi bi-file-minus-fill fs-3"></i>
                      </button>
                    </span>
                    <span className="p-2 fs-4 fw-bold">{item.quantity}</span>
                    <span>
                      <button
                        className="btn btn-action"
                        onClick={() => handleIncrease(item)}
                      >
                        <i className="bi bi-file-plus-fill fs-3"></i>
                      </button>
                    </span>
                  </div>
                </td>
                <td className="text-center fs-4 fw-bold mt-5 p-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="col-lg-12 mt-4 text-center">
        <span className="fs-6 p-2 text-bg-warning">
          * IMPOPRTANT !!! : Please check products above and add or remove
          before moving to payment page by clicking Pay Now button below.
        </span>
      </div>

      <div className="container float-end">
        <div className="float-end">
          <h4>Total Amount: ${calculateTotal()}</h4>
        </div>
        <div className="col-12">
          <button className="btn btn-lg btn-success" onClick={payNow}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
