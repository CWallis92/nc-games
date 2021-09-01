import { useHistory } from "react-router";
import { useCategories } from "../hooks";

const ReviewsFilter = () => {
  let history = useHistory();

  const changeCategory = (category) => {
    history.push("/reviews/" + (category || ""));
  };

  const categories = useCategories();

  return (
    <div id="reviewsFilter">
      {categories.map((category) => {
        return (
          <button
            class="button is-primary"
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
