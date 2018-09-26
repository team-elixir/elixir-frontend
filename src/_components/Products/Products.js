import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../../store/store'
import Navigationbar from "../Home/Navigationbar";
import RowCategory from "../Home/RowCategory";
import ProductInfo from "./ProductInfo";
import Footer from "../Home/Footer";


class Products extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Navigationbar/>
                    <RowCategory/>
                    <ProductInfo/>
                    {/*<SuggestProduct/>*/}
                    <Footer/>
                </div>
            </Provider>
        );
    }
}

export default Products;