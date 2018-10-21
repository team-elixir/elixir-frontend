import {
  USEREMAIL_STATE,
  FETCH_POSTS,
  FETCH_SUBCATEGORIES_FULFILLED,
  FETCH_SUBCATEGORIES_DETAILS,LOGIN_STATE,
  UPDATE_USER_DETAILS,
  FETCH_CATEGORIES_DETAILS,
  FETCH_USER_DETAILS
} from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch => {
  fetch(
    "https://api.elixir.ausgrads.academy/products_micro/products/displayProducts"
  )
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const setLoginState = (loginState) => dispatch => {
    dispatch({
        type:LOGIN_STATE,
        payload:loginState
    })
}
export const fetchSearchResults = () => dispatch => {
  fetch(
    "https://api.elixir.ausgrads.academy/products_micro/products/displayProducts"
  )
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
export const setUserData = userData => dispatch => {
  console.log("ACtion");
  dispatch({
    type: USEREMAIL_STATE,
    payload: userData
  });
};
export const getUserDetails = email => dispatch => {
  axios
    .get(
      "https://api.elixir.ausgrads.academy/user_micro/users/customer/" + email
    )
    .then(res => {
      dispatch({ type: FETCH_USER_DETAILS, payload: res.data });
    });
};
export const fetchSubCategories = category => dispatch => {
  const subCatArray = [];
  axios
    .get(
      "https://api.elixir.ausgrads.academy/category_micro/category/name/" +
        category
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
  axios
    .post(
      "https://api.elixir.ausgrads.academy/products_micro/products/getBySubCategory",
      arr
    )
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_POSTS, payload: res.data });
    });
};

export const fetchAllCat = () => dispatch => {
  axios
    .get("https://api.elixir.ausgrads.academy/category_micro/category/allData")
    .then(res => {
      dispatch({ type: FETCH_CATEGORIES_DETAILS, payload: res.data });
    });
};

export const updateUserDetails = (email,changedUserData) => dispatch => {
  axios
      .put("https://api.elixir.ausgrads.academy/user_micro/users/customer/update/"+email,changedUserData)
      .then(res => {
        dispatch(
            {type:UPDATE_USER_DETAILS, payload:res.data}
        )
      })
}
