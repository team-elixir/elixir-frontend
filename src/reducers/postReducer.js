import { FETCH_POSTS,FETCH_SUBCATEGORIES_FULFILLED, FETCH_PRODUCTS_FULFILLED } from "../actions/types";

const initialState = {
  items: [],
  item: {},
    categoryItems: [],
    subCategories: [],

};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.payload);
      return {
        ...state,
        items: action.payload
      };
      case FETCH_SUBCATEGORIES_FULFILLED:
          return{
              ...state,
              subCategories: action.payload

          };
      case FETCH_PRODUCTS_FULFILLED:
          return{
              ...state,
              categoryItems: action.payload

          };
    default:
      return state;
  }
}
