import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CartPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log("Product Data fetched:", res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);


  return  (
    <div className="container-fluid m-3">
      <h1>Cart Page</h1>;
      <div className="container">
        <div className="cart-table">
          <table className="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
        </div>      
    </div>
  )
};

export default CartPage;
