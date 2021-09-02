import { useEffect, useState } from "react";

import { getReview, patchVotes } from "../utils/api";

const useReview = (review_id) => {
  const [review, setReview] = useState(null);
  const [voteError, setVoteError] = useState(null);

  useEffect(() => {
    getReview(review_id).then(({ data: { review } }) => {
      console.log(typeof review);
      setReview(review);
    });
  }, []);

  const updateVotes = (amount) => {
    setVoteError(null);

    setReview((currReview) => {
      const newReview = { ...currReview };
      newReview.votes += amount;
      return newReview;
    });

    patchVotes(review_id, amount).catch((err) => {
      setVoteError("Sorry, we've encountered an issue. Try again later!");
      setReview((currReview) => {
        const newReview = { ...currReview };
        newReview.votes -= amount;
        return newReview;
      });
    });
  };

  return { review, setReview, voteError, updateVotes };
};

export default useReview;
