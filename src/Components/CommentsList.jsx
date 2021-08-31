import * as axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";

import { CommentBox } from ".";

const CommentsList = ({ children, comments, setComments }) => {
  const { review_id } = useParams();

  const endpoint = axios.create({
    baseURL: "https://chris-nc-games.herokuapp.com/api",
    timeout: 1000,
  });

  useEffect(() => {
    endpoint
      .get(`/reviews/${review_id}/comments`)
      .then((response) => setComments(response.data.comments));
  }, []);

  return comments.length > 0 ? (
    <div>
      {comments.map((comment) => {
        return (
          <CommentBox
            key={comment.comment_id}
            comment={comment}
            setComments={setComments}
          />
        );
      })}
    </div>
  ) : (
    children
  );
};

export default CommentsList;
