import { useContext } from "react";
import { useParams } from "react-router";

import { ReviewContent, CommentsList, NewCommentForm } from ".";
import { UserContext } from "../contexts/user";
import { useComments } from "../hooks";

const ReviewPage = () => {
  const { review_id } = useParams();
  const { user } = useContext(UserContext);

  const { comments, setComments } = useComments(review_id);

  return (
    <section>
      <ReviewContent review_id={review_id}>
        <p>Review not found!</p>
      </ReviewContent>

      <h2>Comments</h2>

      <CommentsList comments={comments} setComments={setComments}>
        <p>This review has no comments!</p>
      </CommentsList>
      {user && (
        <NewCommentForm setComments={setComments} review_id={review_id} />
      )}
    </section>
  );
};

export default ReviewPage;
