import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { renderStarRating } from "./Helper";
import { CartContext } from "./CartContext.jsx";
import axios from "axios";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        // console.log("Product Data fetched:", res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (!product) {
    return (
      <div className="container-fluid text-center p-5 m-0 h-100 overflow-hidden">
        <div className="spinner-grow  text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid p-5 m-0 h-100 overflow-hidden">
      <div className="row">
        <h3>Product Details / {product.title}</h3>
      </div>
      <div className="col-lg-12 w-100 product-details p-5 overflow-hidden">
        <div className="col-lg-12 col-md-6 col-sm-6">
          <img src={product.image} alt={product.title} />
          {/* <h3 className="text-center p-5">{product.title}</h3> */}
        </div>
        <div className="col-lg-12 col-md-6 col-sm-6">
          <p className="fs-5">{product.description}</p>
          <p className="fs-3 fw-bold">Price: ${product.price}</p>
          <p className="fs-5">Category: {product.category}</p>
          <p className="fs-3 fw-bolder">
            Rating: {renderStarRating(product.rating.rate)}{" "}
          </p>
          <p className="fs-5">(based on {product.rating.count} reviews)</p>
          <div className="quantity fs-4">
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="number"
              className="fs-4"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary fs-5 mt-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
