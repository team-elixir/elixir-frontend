import React, {Component} from 'react';
import RowCategory from "../Home/RowCategory";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import SuggestProduct from "./SuggestProduct";
import Posts from "../Posts";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {getProduct} from "../../actions/productActions";
import PropTypes from "prop-types";
import ProductInfos from "./ProductInfos";
import Loading from "../Loading/Loading";

class Products extends Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.match.params !== this.props.match.params){
            window.location.reload()
        }
        //Test URL input id
        // console.log(nextProps.match.params);
        // console.log(this.props.match.params);

        // this.props.getProduct(nextProps.match.params);
        return this.props.pageState.isLoading;
    }
    componentWillMount(){
        const { id } = this.props.match.params;
        this.props.getProduct(id);
        // console.log(this.props.product);
    }
    // componentDidUpdate(){
    //
    // }

    render() {
        // console.log(this.props.pageState.item);
        if (this.props.pageState.item.product)
            return (
                // console.log(nextProps.match.params),
                <div>
                    <Header/>
                    <RowCategory/>

                    {/* <Posts/> */}
                    {/*<ProductInfo/>*/}
                    <ProductInfos data ={this.props.pageState.item}/>
                    <SuggestProduct data = {this.props.pageState.item.product.subCategoryId}/>
                    <Footer/>
                </div>
            );
        else
            return <Loading/>;

    }
}

Products.propTypes = {
    pageState: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    pageState: state.productData,
});
// export default connect(mapStateToProps, {getProduct})(Products);
export default connect(mapStateToProps, {getProduct})(withRouter(Products));