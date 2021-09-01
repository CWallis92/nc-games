import { useEffect, useState } from "react";

import { postComment } from "../utils/api";

const useNewComment = (review_id, username, newCommentBody) => {
  const [newComment, setNewComment] = useState(null);

  useEffect(() => {
    postComment(review_id, username, newCommentBody).then(
      ({ data: { comment } }) => {
        setNewComment("");
      }
    );
  }, []);

  return { review, setReview, voteError, updateVotes };
};

export default useNewComment;
