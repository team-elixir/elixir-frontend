import {
    FETCH_POSTS, USEREMAIL_STATE,
    FETCH_SUBCATEGORIES_FULFILLED,
    FETCH_PRODUCTS_FULFILLED,
    UPDATE_USER_DETAILS,
    FETCH_SUBCATEGORIES_DETAILS, FETCH_CATEGORIES_DETAILS, ADD_USER,
    FETCH_USER_DETAILS
} from "../actions/types";

const initialState = {
    items: [],
    item: {},
    categoryItems: [],
    subCategories: [],
    catList: [],
    userData: {
        userEmail:'',
        loginName:''
    },// as retreived by google account, so user data has name and Email

    userDetails:{
        name:"",
        email:"",
        address: "",
        contactNum: ""
    }//contains fields like Name, Email, Address and ContactNumber . To be used to contact the backend Database


};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload);
            return {
                ...state,
                items: action.payload
            };
        case FETCH_SUBCATEGORIES_FULFILLED:
            return{
                ...state,
                subCategories: action.payload

            };

        case FETCH_CATEGORIES_DETAILS:
            return{
                ...state,
                catList: action.payload
            };
        case FETCH_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload
            }
        case   USEREMAIL_STATE:   // sets user email and name as retreived from Google
            return{
                ...state,
                userData: action.payload
            }
        case UPDATE_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload
            }
        default:
            return state;
    }
}
