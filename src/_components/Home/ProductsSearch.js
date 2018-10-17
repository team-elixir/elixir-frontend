import React, {Component} from 'react';
import Header from "./Header";
import RowCategory from "./RowCategory";
import {Link,withRouter} from 'react-router-dom';
import HomeCarousel from "./HomeCarousel";
import ProductSliderConnection from "./ProductSliderInterface";
import Footer from "./Footer";
import Posts from "../CategoryProducts/Posts";

class ProductsSearch extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const {categoryNames} = this.props.match.params;
            const od = "sdgdsgsd"
        return (
            
            <div className="App">
                <Header />
                <RowCategory/>
                 <Posts/> 
                 
                {/*Top carousel-Yu*/}
                {/*Footer-Yu*/}
                <Footer/>
                console.log("Its-------- the value");
                console.log({categoryNames});
            </div>
        );

    }
}

export default withRouter(ProductsSearch);