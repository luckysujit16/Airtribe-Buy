import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

export const renderStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <span className="star-rating">
      {"★".repeat(fullStars)}
      {halfStar && "☆"}
      {"☆".repeat(emptyStars)}
    </span>
  );
};

export const totalQuantity = () => {
  const cart = useSelector((state) => state.cart.cart); // Subscribe to cart state from Redux store
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  return totalQuantity;
};
