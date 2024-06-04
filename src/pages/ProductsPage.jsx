import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../Store/cartSlice"
import { renderStarRating } from "./Helper";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
 
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart.cart); // Subscribe to cart state from Redux store
  const wishlistState = useSelector((state) => state.cart.wishlist);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);

        // console.log("Product Data fetched:", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleWishlistClick = (product) => {
    const { id, title, price, category, rating, image } = product;
    dispatch(addToWishlist({ id, title, price, category, rating, image }));
  };
  

  return (
    <div className="container-fluid mt-5 p-5 overflow-hidden">
      <h3 className="pb-4">Products Page</h3>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}></Link>
            <figure>
              
              <i className={`bi ${
                  wishlistState.some((item) => item.id === product.id)
                    ? "bi-heart-fill"
                    : "bi-heart"
                } text-danger fs-3`} id="wishlist" value={product.id} onClick={() => handleWishlistClick(product)}></i>
              
              
              <img src={product.image} alt={product.title} />

              <figcaption>
                <h4>{product.title}</h4>
                {/* <p className="mt-3">{product.description}</p> */}
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <p>
                  Rating: {renderStarRating(product.rating.rate)} (based on{" "}
                  {product.rating.count} reviews)
                </p>
              </figcaption>
              <Link to={`/products/${product.id}`}>
                <button type="button" className="btn btn-primary m-2">
                  View Details
                </button>
              </Link>
            </figure>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
