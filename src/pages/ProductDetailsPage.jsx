import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { renderStarRating } from "./Helper";
import axios from "axios";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

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
    if (product && quantity > 0) {
      dispatch(addToCart({ ...product, quantity }));
    }

    // alert("Add To cart triggered : " + JSON.stringify(product));
  };

  if (!product) {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 text-center p-5 m-3 overflow-hidden">
        <div className="spinner-grow  text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 p-5 m-0 h-100 overflow-hidden">
      <div className="container">
        <h3>Product Details / {product.title}</h3>
      </div>
      <div className="col-lg-12 w-100 product-details overflow-hidden">
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
              value={Number(quantity)}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="product-cart">
           
                <button
                onClick={handleAddToCart}
                className="btn btn-primary btn-lg btn-block mt-3"
              >
                Add To Cart
              </button>
           
            
                <button
                onClick={() => {
                  navigate("/cart");
                }}
                className="btn btn-primary btn-lg btn-block mt-3 mx-3"
              >
                Go To Cart
              </button>
                    
          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
