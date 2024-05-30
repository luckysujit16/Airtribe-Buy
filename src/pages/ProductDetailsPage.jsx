import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log("Product Data fetched:", res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <h3>Product Details / {product.title}</h3>
      </div>
      <div className="product-details p-5">
        <div className="col-lg-12 col-md-6 col-sm-6">
          <img src={product.image} alt={product.title} />
          {/* <h3 className="text-center p-5">{product.title}</h3> */}
        </div>
        <div className="col-lg-12 col-md-6 col-sm-6">
          <p className="text-medium">{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>
            Rating: {product.rating.rate} (based on {product.rating.count}{" "}
            reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
