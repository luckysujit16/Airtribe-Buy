import axios from "axios";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log("Product Data fetched:", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid m-2">
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
                <p>Rating: {product.rating.rate} (based on {product.rating.count} reviews)</p>
              </figcaption>
              <button className="btn btn-primary m-5">Add To Cart</button>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
