import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../../store/store'
import RowCategory from "../Home/RowCategory";
import ProductInfo from "./ProductInfo";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Posts from "../Posts";


class Products extends Component {
    render() {
        return (
                <div>
                    <Header/>
                    <RowCategory/>
                    <Posts/>
                    <ProductInfo/>
                    {/*<SuggestProduct/>*/}
                    <Footer/>
                </div>
        );
    }
}

export default Products;