import axios from "axios";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const prodList = setProducts(res.data);
        console.log("Product Data fetched:", res.data);
        return prodList
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (id)=>{
    window.location =  "/purchase"
    alert("Product Added to Cart : ID " + id)
  }

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
              <button type="button" onClick={()=>{addToCart(product.id)}} className="btn btn-primary m-2">Add To Cart</button>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
