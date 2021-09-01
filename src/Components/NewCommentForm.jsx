import { useState, useContext } from "react";

import { UserContext } from "../contexts/user";
import { postComment } from "../utils/api";

const NewCommentForm = ({ setComments, review_id }) => {
  const { user } = useContext(UserContext);

  const [newComment, setNewComment] = useState();
  const [newCommentError, setNewCommentError] = useState(null);

  const updateComments = (event) => {
    event.preventDefault();
    setNewCommentError(null);

    postComment(review_id, user.username, newComment)
      .then(({ data: { comment } }) => {
        setNewComment("");
        setComments((currComments) => {
          const newComments = [...currComments];
          newComments.push(comment);
          return newComments;
        });
      })
      .catch((err) => {
        setNewCommentError(
          "Sorry, couldn't add your comment right now. Try again later!"
        );
      });
  };

  return (
    <form onSubmit={updateComments}>
      <textarea
        onChange={(event) => setNewComment(event.target.value)}
        value={newComment}
      ></textarea>
      <button>Comment</button>
      {newCommentError && <span>{newCommentError}</span>}
    </form>
  );
};

export default NewCommentForm;
