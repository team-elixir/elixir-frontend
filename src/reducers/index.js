import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import postReducer from './postReducer';

export default combineReducers({
    productData: productsReducer,
    posts: postReducer,
    
});