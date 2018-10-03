import React, {Component} from 'react';
import Header from "./Header";
import RowCategory from "./RowCategory";
import HomeCarousel from "./HomeCarousel";
import ProductSliderConnection from "./ProductSliderConnection";
import Footer from "./Footer";
import Posts from "../Posts";

class ProductsSearch extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <RowCategory/>
                 <Posts/> 
                {/*Top carousel-Yu*/}
               
                {/*Footer-Yu*/}
                <Footer/>
            </div>
        );
    }
}

export default ProductsSearch;