import axios from "axios";
import {ADD_TO_CART, FETCH_CART_FULLFILLED, DELETE_PRODUCT_FROM_CART, FETCH_POSTS} from "./types";


export const fetchCart = (email) => dispatch => {
    console.log("https://api.elixir.ausgrads.academy/orders_micro/order/user/" +email);
    axios
        .get(
            "https://api.elixir.ausgrads.academy/orders_micro/order/user/" +email
        )
        .then(res => {
             console.log(res.data);
            dispatch({ type: FETCH_CART_FULLFILLED, payload: res.data  });
        });

};

export const addProductsToCart = (email, product) => dispatch => {
    axios
        .post(
            "https://api.elixir.ausgrads.academy/orders_micro/order/addOrder/"+ email,
            product
        )
        .then(res => {
            // console.log(res.data);
            dispatch({ type: ADD_TO_CART, payload: res.data  });
        });

};

// export const removeProductsFromCart = (email, product) => dispatch => {
//     console.log(JSON.stringify(product));
//     axios
//         .delete(
//             "https://api.elixir.ausgrads.academy/orders_micro/order/delOrder/"+ email,
//             product
//         )
//         .then(res => {
//             dispatch({ type: DELETE_PRODUCT_FROM_CART, payload: res.data  });
//         });
//
// };

export const removeProductsFromCart = (email, product) => dispatch => {
    console.log(product);
    axios
        .delete(
            "https://api.elixir.ausgrads.academy/orders_micro/order/delete/"+ email+"/"+product
        )
        .then(res => {
            {console.log(res.data)};
            dispatch({ type: DELETE_PRODUCT_FROM_CART, payload: res.data  });
        });

};