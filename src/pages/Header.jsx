import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
// import { alertGo } from "react-alert-go";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart); // Subscribe to cart state from Redux store
  const wishlistState = useSelector((state) => state.cart.wishlist);
  const totalQuantity = cart.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );
  const totalPrice = cart
    .reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    )
    .toFixed(2);

  const handleLogout = () => {
    localStorage.removeItem("sessionToken");
    window.location.href = "/login";
    // alertGo("Logged in Successfully");
  };

  return (
    <header className="container-fluid fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <a className="navbar-brand fw-bolder" href="/">
          Airtribe-Buy
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link fw-bold fs-6" href="/products">
                Shop
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link fw-bold fs-6" href="/orderhistory">
                Order History
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-row-reverse bd-highlight">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="wishlistDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faHeart} size="2x" />
                {wishlistState.length > 0 && (
                  <span className="badge badge-pill badge-danger">
                    {wishlistState.length}
                  </span>
                )}
              </a>
            </li>
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="cartDropdown"
                role="button"
                data-bs-toggle="dropdown"
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
                className="dropdown-menu dropleft"
                aria-labelledby="cartDropdown"
              >
                <div className="dropdown-item">
                  <strong>Total: ${totalPrice}</strong>
                </div>
                <div className="dropdown-divider"></div>
                <div className="text-center ">
                  <span className="p-1 fw-medium">Product Name</span>
                  <span className="p-1 fw-medium">Qnt x Item</span>
                </div>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="dropdown-item d-flex justify-content-between align-items-center"
                  >
                    <div className="popup-grid">
                      <span className="text-wrap fs-6">{item.title}</span>
                      <span className="fs-6 fw-bold">
                        {item.quantity} x ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-center" href="/cart">
                  View Cart
                </a>
              </div>
            </li>
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUser} size="2x" />
              </a>
              <div className="dropdown-menu" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  href="/logout"
                  data-bs-dismiss="alert"
                  onClick={() => handleLogout()}
                >
                  Logout
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
