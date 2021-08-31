import { useHistory, Link } from "react-router-dom";

const ReviewBox = ({ review }) => {
  let history = useHistory();

  const changeCategory = () => {
    history.push("/reviews/" + review.category);
  };

  return (
    <div className="reviewsList-reviewBox">
      <img src={review.review_img_url} alt={review.title} />
      <div>
        <Link to={"/reviews/review/" + review.review_id}>
          <p>{review.title}</p>
        </Link>
        <p className="reviewsList-category" onClick={changeCategory}>
          {review.category}
        </p>
        <p>{review.owner}</p>
        <p>{new Date(review.created_at).toLocaleString()}</p>
        <p>Votes: {review.votes}</p>
        <p>Comments: {review.comment_count}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
