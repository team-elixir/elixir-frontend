import {ADD_TO_CART, DELETE_PRODUCT_FROM_CART, FETCH_CART_FULLFILLED} from "../actions/types";

const initialState = {
  cart: [],
  msgFromServer: "",
  deletemsgFromServer: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_FULLFILLED:
      return {
        ...state,
        cart: action.payload
      };
    case ADD_TO_CART:
      return {
        ...state,
        msgFromServer: action.payload
      };
      case DELETE_PRODUCT_FROM_CART:
          return {
              ...state,
              deletemsgFromServer: action.payload
          };
    default:
      return state;
  }
}
