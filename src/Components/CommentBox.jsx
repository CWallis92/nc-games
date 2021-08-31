import * as axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";

const CommentBox = ({ comment, setComments }) => {
  const [deleteError, setDeleteError] = useState(null);

  const { user } = useContext(UserContext);

  const endpoint = axios.create({
    baseURL: "https://chris-nc-games.herokuapp.com/api",
    timeout: 1000,
  });

  const deleteComment = () => {
    setDeleteError(null);
    endpoint
      .delete(`/comments/${comment.comment_id}`)
      .then(() => {
        setComments((currComments) => {
          const newComments = [...currComments];
          const commentIndex = newComments.findIndex(
            (commentVal) => commentVal.comment_id === comment.comment_id
          );
          newComments.splice(commentIndex, 1);
          return newComments;
        });
      })
      .catch((err) => {
        setDeleteError("Sorry, couldn't delete right now. Try again later!");
      });
  };

  return (
    <div className="commentBox">
      <div>
        {/* Update the backend to include user avatar at this endpoint */}
        {/* Or use GraphQL? */}
        {/* <img src={XX} alt={comment.author} /> */}
        <p>{comment.author}</p>
      </div>
      <p>{comment.body}</p>
      <p>{new Date(comment.created_at).toLocaleString()}</p>
      <p>Votes: {comment.votes}</p>
      {user.username === comment.author && (
        <button onClick={deleteComment}>❌</button>
      )}
      {deleteError && <span>{deleteError}</span>}
    </div>
  );
};

export default CommentBox;
