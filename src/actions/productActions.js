import {PRODUCTS_GET_PRODUCT, PRODUCTS_GET_CATEGORY} from '../actions/types';
import axios from "axios";

export const getProduct = () => dispatch => {
    axios
        .get('https://api.elixir.ausgrads.academy/products_micro/products/getByProductId/3')
        .catch(error => console.log(error.status))
        .then(res => dispatch({
            type: PRODUCTS_GET_PRODUCT,
            payload: res.data,
        }));
};