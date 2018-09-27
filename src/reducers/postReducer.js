import { FETCH_POSTS } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.payload);
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
