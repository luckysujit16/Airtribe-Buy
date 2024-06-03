import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { renderStarRating } from "./Helper";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart.cart); // Subscribe to cart state from Redux store

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);

        // console.log("Product Data fetched:", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid h-100 m-2 overflow-hidden">
      <h3>Products Page</h3>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <figure>
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
