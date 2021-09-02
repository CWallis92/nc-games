import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ReviewBox, ReviewsFilter } from ".";
import { useReviews } from "../hooks";

const ReviewsList = () => {
  const { category } = useParams();

  const [sort, setSort] = useState(null);
  const { reviews, setReviews, isLoading } = useReviews(category);

  useEffect(() => {
    if (sort === "a-z") {
      setReviews((reviewList) => {
        return [...reviewList].sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
        });
      });
    }
  }, [sort]);

  return (
    <section>
      <ReviewsFilter setSort={setSort} />
      {isLoading && <p>Loading...</p>}
      {reviews.map((review) => {
        return <ReviewBox key={review.review_id} review={review} />;
      })}
    </section>
  );
};

export default ReviewsList;
