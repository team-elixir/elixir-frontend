import {
    FETCH_POSTS,
    FETCH_SUBCATEGORIES_FULFILLED,
    FETCH_PRODUCTS_FULFILLED,
    FETCH_SUBCATEGORIES_DETAILS, FETCH_CATEGORIES_DETAILS
} from "../actions/types";

const initialState = {
    items: [],
    item: {},
    categoryItems: [],
    subCategories: [],
    catList: [],

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
        case FETCH_CATEGORIES_DETAILS:
            return{
                ...state,
                catList: action.payload
            };
        default:
            return state;
    }
}
