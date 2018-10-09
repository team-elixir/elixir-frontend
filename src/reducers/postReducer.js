import {
    FETCH_POSTS,SIGNEDIN_STATE,
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
    isSignedIn:false


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
        case   SIGNEDIN_STATE:
            return{
                ...state,
                isSignedIn: action.payload
            }
        default:
            return state;
    }
}
