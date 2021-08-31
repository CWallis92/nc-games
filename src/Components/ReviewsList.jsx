import * as axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ReviewBox } from "./";

const ReviewsList = () => {
  const endpoint = axios.create({
    baseURL: "https://chris-nc-games.herokuapp.com/api",
    timeout: 1000,
  });

  const { category } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    endpoint
      .get("/reviews", {
        params: {
          category,
        },
      })
      .then((response) => setReviews(response.data.reviews));
  }, [category]);

  return (
    <section>
      {reviews.map((review) => {
        return <ReviewBox key={review.review_id} review={review} />;
      })}
    </section>
  );
};

export default ReviewsList;
