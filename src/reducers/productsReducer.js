import {PRODUCTS_GET_PRODUCT, PRODUCTS_GET_CATEGORY} from '../actions/types';

const initialState = {
    items: [],
    item: {},
    info: {},
    isLoading: true,
    Loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_GET_PRODUCT:
            // console.log("get product info");
            return {
                ...state,
                items: action.payload,
                isLoading: false
            };

        case PRODUCTS_GET_CATEGORY:
            console.log("get product info");
            return {
                ...state,
                items: action.payload,
                Loading: false
            };
        default:
            return state;
    }

}