import React, {Component} from 'react';
import SuggestProduct from "./SuggestProduct";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {getProduct} from "../../actions/productActions";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../assets/css/custom.css'
import PropTypes from "prop-types";
import ProductInfos from "./ProductInfos";
import Loading from "../Loading/Loading";

class Products extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params !== this.props.match.params) {
            this.props.getProduct(nextProps.match.params.id);

            //  window.scrollTo(x, y)
            //  X stand for horizontal, y is vertical.
            window.scrollTo(0, 200)
        }
        //Test URL input id
        // console.log(nextProps.match.params);
        // console.log(this.props.match.params);

        // this.props.getProduct(nextProps.match.params);
        return this.props.pageState.isLoading;
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        this.props.getProduct(id);
        // console.log(this.props.product);
    }

    render() {
        if (this.props.pageState.item.product) {
            // console.log(this.props.pageState.item);
            return (
                // console.log(nextProps.match.params),
                <div>
                    <ProductInfos data={this.props.pageState.item}/>
                    {/*{console.log("Info log")}*/}
                    <br/>
                    <br/>
                    <SuggestProduct data={this.props.pageState.item.product.subCategoryId}/>
                    {/*{console.log("Suggest log")}*/}
                    <br/>
                </div>
            );
        }
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