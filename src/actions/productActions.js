import axios from "axios";
import {
    FETCH_SINGLE_PRODUCT_FULFILLED, FETCH_SINGLE_PRODUCT_REJECTED,
    FETCH_SINGLE_PRODUCT,
    PRODUCTS_GET_CATEGORY,
    PRODUCTS_GET_PRODUCT,
    PRODUCTS_SET_LOADING
} from "./types";

export const getProduct = (id) => dispatch => {
    axios
        .get(`https://api.elixir.ausgrads.academy/products_micro/products/getByProductId/${id}`)
        // .catch(error => console.log(error.status))
        .then(res => {
            dispatch({ type: PRODUCTS_SET_LOADING });
            dispatch({
                    type: PRODUCTS_GET_PRODUCT,
                    payload: res.data,
                },
                // console.log('getProduct Fire!!')
            )
        });
};

export const getProductByID = (id) => dispatch => {
    dispatch({ type: FETCH_SINGLE_PRODUCT });
    axios
        .get(`https://api.elixir.ausgrads.academy/products_micro/products/getByProductId/${id}`)
        // .catch(error => console.log(error.status))
        .then(res => {
            dispatch({
                    type: FETCH_SINGLE_PRODUCT_FULFILLED,
                    payload: res.data,
                })
        }).catch(err => {
        dispatch({
            type: FETCH_SINGLE_PRODUCT_REJECTED,
            payload: err,
        })
    });
};

export const getCategory = (sid) => dispatch => {
    axios
        .post('https://api.elixir.ausgrads.academy/products_micro/products/getBySubCategory/', [sid])
        .catch(error => console.log(error.status))
        .then(category => {
            dispatch({ type: PRODUCTS_SET_LOADING });
            dispatch({
            type: PRODUCTS_GET_CATEGORY,
            payload: category.data,
        })});
};


// Different approach
// axios
//     .post('https://api.elixir.ausgrads.academy/products_micro/products/getBySubCategory/', ['1'] )
//     .catch(error => console.log(error.status))
//     .then(res => {
//             const info = res.data.map(product => {
//                 // console.log(product.product.id);
//                 return product;
//             });
//             dispatch(getCategoryAsync(info));
//         }
//     )
// };
//
// function getCategoryAsync(info){
//     return{
//         type: PRODUCTS_GET_CATEGORY,
//         payload: info
//     }
// }