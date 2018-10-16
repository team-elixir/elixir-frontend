import React, {Component} from 'react';
import Header from "./Header";
import RowCategory from "./RowCategory";
import HomeCarousel from "./HomeCarousel";
import ProductSliderInterface from "./ProductSliderInterface";
import Footer from "./Footer";
import Posts from "./Posts";
import Cart from "../Cart/Cart";

class Home extends Component {
    render() {
        return (
            <div>
                {/*Top carousel-Yu*/}
                <HomeCarousel/>
                <ProductSliderInterface/>
                {/*Footer-Yu*/}
            </div>
        );
    }
}

export default Home;