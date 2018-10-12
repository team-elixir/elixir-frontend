import axios from "axios";
import {ADD_TO_CART, FETCH_CART_FULLFILLED} from "./types";


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