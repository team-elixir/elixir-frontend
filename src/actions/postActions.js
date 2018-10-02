import { FETCH_POSTS} from "./types";

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

export const fetchSearchResults = () => dispatch => {
  fetch("https://api.elixir.ausgrads.academy/products_micro/products/displayProducts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
