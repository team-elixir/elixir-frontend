// Add to cart --- orderline
// Updating the quantity-- increase and decrease quantity
// Delete from cart --- orderline


import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/types";

const initialState = {
    itemsInCart: [],

};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                itemsInCart: action.payload
            };
        case REMOVE_FROM_CART:
            return{
                ...state,
                subCategories: action.payload
            };
        default:
            return state;
    }
}






