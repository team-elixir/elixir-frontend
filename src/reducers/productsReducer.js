import {
    PRODUCTS_GET_PRODUCT,
    PRODUCTS_GET_CATEGORY,
    PRODUCTS_SET_LOADING,
    FETCH_SINGLE_PRODUCT, FETCH_SINGLE_PRODUCT_REJECTED, FETCH_SINGLE_PRODUCT_FULFILLED
} from '../actions/types';

const initialState = {
    items: [],
    item: {},
    info: {},
    cartItems: [],
    errors : [],
    isLoading: true,
    Loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_SET_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case PRODUCTS_GET_PRODUCT:
            // console.log("get product info");
            return {
                ...state,
                item: action.payload,
                isLoading: false
            };

        case PRODUCTS_GET_CATEGORY:
            // console.log("get product info");
            return {
                ...state,
                items: action.payload,
                Loading: false
            };
        case FETCH_SINGLE_PRODUCT:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SINGLE_PRODUCT_REJECTED:
            // console.log("get product info");
            return {
                ...state,
                errors: action.payload,
                isLoading: false
            };

        case FETCH_SINGLE_PRODUCT_FULFILLED:
            // console.log("get product info");
            let temp = initialState.cartItems;
            temp.push(action.payload);
            console.log(temp);

            return {
                ...state,
                cartItems: temp,
                isLoading: false
            };
        default:
            return state;
    }

}