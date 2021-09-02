import { useHistory } from "react-router";
import { useCategories } from "../hooks";

const ReviewsFilter = ({ setSort }) => {
  let history = useHistory();

  const changeCategory = (category) => {
    history.push("/reviews/" + (category || ""));
  };

  const categories = useCategories();

  const updateSort = () => {
    setSort("a-z");
  };

  return (
    <div id="reviewsFilter">
      <div id="categories">
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
      <div id="sort">
        <button onClick={updateSort}>Sort?</button>
      </div>
    </div>
  );
};

export default ReviewsFilter;
