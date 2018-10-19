import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import postReducer from './postReducer';
import sliderReducer from "./sliderReducer";
import cartReducer from "./cartReducer";
import searchReducer from "./searchReducer";
import payPalReducer from "./payPalReducer";

export default combineReducers({
    productData: productsReducer,
    posts: postReducer,
    cart: cartReducer,
    slider: sliderReducer,
    searchProduct: searchReducer,
    paypal: payPalReducer,
    
});