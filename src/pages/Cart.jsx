import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../Store/cartSlice";

const Cart = () => {
  ;const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart)

  const handleIncrease = (product) => {
    dispatch(increaseQuantity({ id: product.id }));
    // alert("handleIncrease");
  };

  const handleDecrease = (product) => {
    dispatch(decreaseQuantity({ id: product.id }));
    // alert("handleDecrease");
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        return Number(total) + Number(item.price) * Number(item.quantity);
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="vh-100">
      <h3 className="text-muted mb-3">Shopping Cart</h3>
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
                  <span className="fs-6">Description : {item.description}</span>
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
      <div className="container float-end">
        <div className="float-end">
          <h4>Total Amount: ${calculateTotal()}</h4>
        </div>
        <div className="col-12">
          <button className="btn btn-lg btn-success">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
