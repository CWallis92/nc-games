import * as axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { CommentBox } from ".";

const CommentsList = ({ children }) => {
  const { review_id } = useParams();

  const [comments, setComments] = useState([]);

  const endpoint = axios.create({
    baseURL: "https://chris-nc-games.herokuapp.com/api",
    timeout: 1000,
  });

  useEffect(() => {
    endpoint
      .get(`/reviews/${review_id}/comments`)
      .then((response) => setComments(response.data.comments));
  }, []);

  console.log(comments);

  return comments.length > 0 ? (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => {
        return <CommentBox comment={comment} />;
      })}
    </div>
  ) : (
    children
  );
};

export default CommentsList;
