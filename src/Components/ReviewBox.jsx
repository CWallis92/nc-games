// import { PropTypes } from "react";

const ReviewBox = ({ review }) => {
  return (
    <div className="reviewsList-reviewBox">
      <img src={review.review_img_url} alt={review.title} />
      <div>
        <p>{review.title}</p>
        <p className="reviewsList-category">{review.category}</p>
        <p>{review.owner}</p>
        <p>{Date(review.created_at).toLocaleString()}</p>
        <p>Votes: {review.votes}</p>
        <p>Comments: {review.comment_count}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
