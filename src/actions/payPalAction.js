import axios from "axios";
export const payment = (sum, email, orderId) => dispatch => {
    let data = {
        sum: sum,
    }

    let axiosConfig = {
        headers: {
          //  'Content-Type': 'application/json;charset=UTF-8',
          //  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
          //  "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Head" : "Content-Type', 'Authorization'",

        }
    };
    axios
    .post("https://api.elixir.ausgrads.academy/orders_micro/paypal/make/payment?sum="+sum+"&email="+email+"&orderId="+orderId)
    //  .get("https://api.elixir.ausgrads.academy/orders_micro/paypal/tess/", axiosConfig)
        .then(posts =>
            dispatch({
                type: 'REQUEST-PAYMENT',
                payload: posts
            })
        );

};




