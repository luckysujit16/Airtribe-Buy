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
