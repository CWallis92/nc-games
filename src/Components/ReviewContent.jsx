import * as axios from "axios";
import { useState } from "react";
import { useHistory, useParams } from "react-router";

const ReviewContent = ({ review, setReview }) => {
  let history = useHistory();
  const { review_id } = useParams();

  const changeCategory = () => {
    history.push("/reviews/" + review.category);
  };

  const [voteError, setVoteError] = useState(null);

  const endpoint = axios.create({
    baseURL: "https://chris-nc-games.herokuapp.com/api",
    timeout: 1000,
  });

  const updateVotes = (amount) => {
    setVoteError(null);

    setReview((currReview) => {
      const newReview = { ...currReview };
      newReview.votes += amount;
      return newReview;
    });

    endpoint
      .patch(`/reviews/${review_id}`, {
        inc_votes: amount,
      })
      .catch((err) => {
        setVoteError("Sorry, we've encountered an issue. Try again later!");
      });
  };

  return (
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
          <p>{new Date(review.created_at).toLocaleString()}</p>
          <p>
            Votes:{" "}
            <button
              onClick={() => {
                updateVotes(-1);
              }}
            >
              -
            </button>{" "}
            {review.votes}{" "}
            <button
              onClick={() => {
                updateVotes(1);
              }}
            >
              +
            </button>
            {voteError !== null && <span>{voteError}</span>}
          </p>
        </div>
      </div>
      <div className="reviewBody">
        <p>{review.review_body}</p>
      </div>
    </section>
  );
};

export default ReviewContent;
