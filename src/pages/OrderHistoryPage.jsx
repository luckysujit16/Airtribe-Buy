import React, { useEffect, useState } from "react";

const OrderHistoryPage = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Retrieve order history from local storage
    const savedOrderHistory =
      JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrderHistory(Array.isArray(savedOrderHistory) ? savedOrderHistory : []);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Order History</h2>
      {orderHistory.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="table table-bordered">
          <thead className="thead table-dark">
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory &&
              orderHistory.map((order, index) => (
                <tr key={index}>
                  <td>{order.orderId}</td>
                  <td>
                    {order.cart.map((item, itemIndex) => (
                      <div key={itemIndex}>{item.title}</div>
                    ))}
                  </td>
                  <td>
                    {order.cart.map((item, itemIndex) => (
                      <div key={itemIndex}>{item.quantity}</div>
                    ))}
                  </td>
                  <td>
                    {order.cart.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {(item.price * item.quantity).toFixed(2)}
                      </div>
                    ))}
                  </td>
                  <td>{order.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistoryPage;
