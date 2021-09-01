import { useHistory } from "react-router";

import { useReview } from "../hooks";

const ReviewContent = ({ review_id, children }) => {
  const { review, voteError, updateVotes } = useReview(review_id);

  let history = useHistory();

  const changeCategory = () => {
    history.push("/reviews/" + review.category);
  };

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
  ) : (
    children
  );
};

export default ReviewContent;
