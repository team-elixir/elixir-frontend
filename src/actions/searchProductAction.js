import axios from "axios";
import {FETCH_POSTS, FETCH_SUBCATEGORIES_FULFILLED} from "./types";



// export const  searchProductAction = (keyName) => dispatch => {
//     var productName = [];
//
//     axios
//     .get("https://api.elixir.ausgrads.academy/products_micro/products/searchProducts/"+keyName)
//     .then(res => {
//         res.data.forEach(function(productData) {
//             productName.push(productData.product.name);
//         });
//         // console.log(productName);
//         dispatch({ type: 'SEARCH-PRODUCT', payload: productName  });
//     });
// };


export const  searchProductAction = (keyName) => dispatch => {
    axios
        .get("https://api.elixir.ausgrads.academy/products_micro/products/searchProducts/"+keyName)
        .then(res => {

            // console.log(productName);
            dispatch({ type: 'SEARCH-PRODUCT', payload: res });
        });
};

export const  searchProductAction1 = (keyName) => dispatch => {
    var productName = [];

    axios
        .get("https://api.elixir.ausgrads.academy/products_micro/products/searchProducts/"+keyName)
        .then(posts =>
        dispatch({
            type: 'SEARCH-PRODUCT1',
            payload: posts
        })
    );

};

