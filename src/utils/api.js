import * as axios from "axios";

const endpoint = axios.create({
  baseURL: "https://chris-nc-games.herokuapp.com/api",
  timeout: 5000,
});

export const getReviews = (category = null) => {
  return endpoint.get("/reviews", {
    params: {
      category,
    },
  });
};

export const getCategories = () => {
  return endpoint.get("categories");
};

export const getReview = (review_id) => {
  return endpoint.get(`/reviews/${review_id}`);
};

export const patchVotes = (review_id, amount) => {
  return endpoint.patch(`/reviews/${review_id}`, {
    inc_votes: amount,
  });
};

export const getComments = (review_id) => {
  return endpoint.get(`/reviews/${review_id}/comments`);
};

export const postComment = (review_id, username, newComment) => {
  return endpoint.post(`/reviews/${review_id}/comments`, {
    username: username,
    body: newComment,
  });
};
