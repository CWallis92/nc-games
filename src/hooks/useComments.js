import { useEffect, useState } from "react";

import { getComments } from "../utils/api";

const useComments = (review_id) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((response) =>
      setComments(response.data.comments)
    );
  }, []);

  return { comments, setComments };
};

export default useComments;
