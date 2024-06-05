import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve payment response from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get("payment_id");
    const orderId = urlParams.get("order_id");
    const signature = urlParams.get("signature");

    // Retrieve cart details from local storage
    const cart = JSON.parse(localStorage.getItem("cart"));

    console.log("URL Params:", { paymentId, orderId, signature });
    console.log("Cart:", cart);

    // Check if all required parameters are present
    if (paymentId && orderId && signature && cart) {
      // Store payment details in local storage
      const paymentDetails = {
        paymentId,
        orderId,
        signature,
        status: "success",
        cart, // Store the cart details along with the payment
      };

      const orderHistory =
        JSON.parse(localStorage.getItem("orderHistory")) || [];
      orderHistory.push(paymentDetails);
      localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

      // Optionally, clear the cart if payment was successful
      localStorage.removeItem("cart");

      console.log("Payment successful:", paymentDetails);
    } else {
      console.error(
        "Missing payment details in URL parameters or cart is empty"
      );
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <h2 className="text-success">Payment Successful!</h2>
      <p>
        Thank you for your purchase. Your payment has been successfully
        processed.
      </p>
      <p>You can view your order details in your profile.</p>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/orderhistory")}
      >
        Order History
      </button>
    </div>
  );
};

export default ConfirmationPage;
