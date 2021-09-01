import { useParams } from "react-router-dom";

import { ReviewBox, ReviewsFilter } from ".";
import { useReviews } from "../hooks";

const ReviewsList = () => {
  const { category } = useParams();

  const { reviews, isLoading } = useReviews(category);

  return (
    <section>
      <ReviewsFilter />
      {isLoading && <p>Loading...</p>}
      {reviews.map((review) => {
        return <ReviewBox key={review.review_id} review={review} />;
      })}
    </section>
  );
};

export default ReviewsList;
