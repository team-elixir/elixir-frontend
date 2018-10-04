import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import postReducer from './postReducer';
import sliderReducer from "./sliderReducer";

export default combineReducers({
    productData: productsReducer,
    posts: postReducer,
    slider: sliderReducer,
    
});