import * as axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";

import { ReviewContent, CommentsList, NewCommentForm } from ".";
import { UserContext } from "../contexts/user";

const ReviewPage = ({ children }) => {
  const { review_id } = useParams();
  const { user } = useContext(UserContext);

  const endpoint = axios.create({
    baseURL: "https://chris-nc-games.herokuapp.com/api",
    timeout: 1000,
  });

  const [review, setReview] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    endpoint
      .get(`/reviews/${review_id}`)
      .then((response) => setReview(response.data.review));
  }, []);

  return review ? (
    <section>
      <ReviewContent review={review} setReview={setReview} />
      <h2>Comments</h2>
      <CommentsList comments={comments} setComments={setComments}>
        <p>This review has no comments!</p>
      </CommentsList>
      {user && <NewCommentForm setComments={setComments} />}
    </section>
  ) : (
    children
  );
};

export default ReviewPage;
