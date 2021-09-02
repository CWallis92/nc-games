import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const useReviews = (category) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews(category).then((response) => setReviews(response.data.reviews));
    setIsLoading(false);
  }, [category]);

  return { reviews, setReviews, isLoading };
};

export default useReviews;
