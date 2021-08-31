import * as axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";

const ReviewPage = ({ children }) => {
  let history = useHistory();

  const changeCategory = () => {
    history.push("/reviews/" + review.category);
  };

  const { review_id } = useParams();

  const endpoint = axios.create({
    baseURL: "https://chris-nc-games.herokuapp.com/api",
    timeout: 1000,
  });

  const [review, setReview] = useState(null);

  useEffect(() => {
    return endpoint
      .get("/reviews/" + review_id)
      .then((response) => setReview(response.data.review));
  }, []);

  console.log(review);

  return review ? (
    <section>
      <div className="reviewBox">
        <img src={review.review_img_url} alt={review.title} />
        <div>
          <p>{review.title}</p>
          <p>Game designer: {review.designer}</p>
          <p className="reviewCategory" onClick={changeCategory}>
            {review.category}
          </p>
          <p>{review.owner}</p>
          <p>{Date(review.created_at).toLocaleString()}</p>
          <p>Votes: {review.votes}</p>
        </div>
      </div>
      <div className="reviewBody">
        <p>{review.review_body}</p>
      </div>
    </section>
  ) : (
    children
  );
};

export default ReviewPage;
