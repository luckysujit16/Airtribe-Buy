const Header = () => {
  return (
    <header className="contianer-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <a className="navbar-brand" to="#">
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
            <li className="nav-item">
              <a className="nav-link" href="/purchase">
                Shopping
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/purchase/checkout">
                Checkout
              </a>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            >
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </input>
          </form> */}
        </div>
      </nav>
    </header>
  );
};
export default Header;
