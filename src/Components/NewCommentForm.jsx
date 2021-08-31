import { useState, useContext } from "react";
import * as axios from "axios";
import { useParams } from "react-router";

import { UserContext } from "../contexts/user";

const NewCommentForm = ({ setComments }) => {
  const { review_id } = useParams();
  const { user } = useContext(UserContext);

  const [newComment, setNewComment] = useState();
  const [newCommentError, setNewCommentError] = useState(null);

  const endpoint = axios.create({
    baseURL: "https://chris-nc-games.herokuapp.com/api",
    timeout: 1000,
  });

  const updateComments = (event) => {
    event.preventDefault();
    setNewCommentError(null);

    endpoint
      .post(`/reviews/${review_id}/comments`, {
        username: user.username,
        body: newComment,
      })
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
