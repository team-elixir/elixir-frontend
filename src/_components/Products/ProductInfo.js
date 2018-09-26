import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {connect} from 'react-redux';
import {getProduct} from "../../actions/productActions";
import ProductCarousel from "./ProductCarousel"


class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
        };
    }


    componentWillMount() {
        this.props.getProduct();
    }

    shouldComponentUpdate() {
        return this.props.pageStatus.isLoading;
    }

    show() {
        const {product, list} = this.props.productInfo;
        console.log(list);

        let image = <ProductCarousel productImage={list}/>;

        return (
            <div>
                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                    <div>
                        <h1 className="text-left">{product.name}<span
                            className="p-view-header-brand"> by {product.brand}</span></h1>
                        <h5 className="text-left"><span
                            className="fa fa-star pl-1 pr-1 p-view-star"> </span>{product.rating}</h5>
                        <hr/>
                    </div>
                    <div className="row marg-top-25">
                        <div className="col-lg-4 col-md-12">
                            <div className="w-100 h-100 cog-radius">
                                {image}
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h5 className="text-left">Product Description</h5>
                            <p className="text-left mt-3 p-view-description">{product.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-11">
                            {/* <Link className="btn btn-outline-primary cog-radius float-right" to="/products"><span className="fa fa-chevron-left pr-2"></span> Back to Products</Link> */}
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    render() {
        // Check if we have data.
        if (this.props.productInfo.product)
            return this.show();
        else
            return <p>No data found!</p>;
    }
}


const mapStateToProps = state => ({
    pageStatus: state.productData,
    productInfo: state.productData.items,

});

export default connect(mapStateToProps, {getProduct})(ProductInfo)












