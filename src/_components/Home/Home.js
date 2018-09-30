import React, {Component} from 'react';
import Header from "./Header";
import RowCategory from "./RowCategory";
import HomeCarousel from "./HomeCarousel";
import ProductSliderConnection from "./ProductSliderConnection";
import Footer from "./Footer";
import Posts from "../Posts";

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <RowCategory/>
                <Posts/>
                {/*Top carousel-Yu*/}
                <HomeCarousel/>
                <ProductSliderConnection/>
                <ProductSliderConnection/>
                <ProductSliderConnection/>
                {/*Footer-Yu*/}
                <Footer/>
            </div>
        );
    }
}

export default Home;