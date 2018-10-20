import React, {Component} from 'react';
import Header from "./Header";
import HomeCarousel from "./HomeCarousel";
import ProductSliderInterface from "./ProductSliderInterface";
import Footer from "./Footer";
import Posts from "../CategoryProducts/Posts";
import Cart from "../Cart/Cart";
import PopularProduct from "./PopularProduct";

class Home extends Component {
    render() {
        return (
            <div>
                {/*Top carousel-Yu*/}
                <HomeCarousel/>
                <PopularProduct/>
                <ProductSliderInterface/>

                {/*Footer-Yu*/}
            </div>
        );
    }
}

export default Home;