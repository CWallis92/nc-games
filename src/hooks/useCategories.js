import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((response) => setCategories(response.data.categories));
  }, []);

  return categories;
};

export default useCategories;
