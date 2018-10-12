import {
    ADD_TO_CART, FETCH_CART_FULLFILLED
} from "../actions/types";

const initialState = {
    cart: [],
    msgFromServer: "",

};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_CART_FULLFILLED:
            return {
                ...state,
                cart: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                msgFromServer: action.payload
            }
        default:
            return state;
    }
}
