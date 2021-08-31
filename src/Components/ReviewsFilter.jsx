import * as axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const ReviewsFilter = () => {
  let history = useHistory();

  const changeCategory = (category) => {
    history.push("/reviews/" + (category || ""));
  };

  const [categories, setCategories] = useState([]);

  const endpoint = axios.create({
    baseURL: "https://chris-nc-games.herokuapp.com/api",
    timeout: 1000,
  });

  useEffect(() => {
    endpoint
      .get("/categories")
      .then((response) => setCategories(response.data.categories));
  }, []);

  return (
    <div id="reviewsFilter">
      {categories.map((category) => {
        return (
          <button
            key={category.slug}
            onClick={() => changeCategory(category.slug)}
          >
            {category.slug}
          </button>
        );
      })}
      <button onClick={() => changeCategory()}>Clear</button>
    </div>
  );
};

export default ReviewsFilter;
