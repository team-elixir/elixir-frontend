import { FETCH_POSTS, FETCH_SUBCATEGORIES_FULFILLED, FETCH_PRODUCTS_FULFILLED} from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch => {
  fetch("https://api.elixir.ausgrads.academy/products_micro/products/displayProducts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const fetchSubCategories = (category) => dispatch => {
    const subCatArray = [];
    axios
        .get(
            "https://api.elixir.ausgrads.academy/category_micro/category/name/"+category
        )
        .then(res => {
            res.data.forEach(function(subCategory) {
                subCatArray.push(subCategory.subId);
            });
            console.log(subCatArray);
            dispatch({ type: FETCH_SUBCATEGORIES_FULFILLED, payload: subCatArray });
        });
};

export const fetchProducts = arr => dispatch => {
    console.log(arr);
    axios
        .post(
            "https://api.elixir.ausgrads.academy/products_micro/products/getBySubCategory",
            arr
        )
        .then(res => {
            dispatch({ type: FETCH_POSTS, payload: res.data  });
        });

};


