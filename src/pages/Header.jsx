import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart); // Subscribe to cart state from Redux store
  const wishlistState = useSelector((state) => state.cart.wishlist);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <header className="container-fluid fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <a className="navbar-brand" href="#">
          Airtribe-Buy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/products">
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto float-end">
          <li className="nav-item">
              <a
                className="nav-link text-danger"
                href="#"
                >
                <FontAwesomeIcon icon={faHeart} size="2x" />                
              </a>
              </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUser} size="2x" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/logout">
                  Logout
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/cart"
                id="cartDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                {totalQuantity > 0 && (
                  <span className="badge badge-pill badge-danger">
                    {totalQuantity}
                  </span>
                )}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="cartDropdown"
              >
                <div className="dropdown-item">
                  <strong>Total: ${totalPrice}</strong>
                </div>
                <div className="dropdown-divider"></div>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="dropdown-item d-flex justify-content-between align-items-center"
                  >
                    <span>{item.title}</span>
                    <span>
                      {item.quantity} x ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-center" href="/cart">
                  View Cart
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
