import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {getProduct} from "../../actions/productActions";
import ProductCarousel from "./ProductCarousel"
import Loading from "../Loading/Loading";
import {withRouter} from "react-router-dom";
import PageNotFound from "../Loading/PageNotFound";


const ProductInfos = (data) => {
    // console.log("ProductInfos: " + data.data.list);
    if(data !== null) {
        let image = data.data.list.length === 1 ?
            <img width="100%" height="400" alt="" src={data.data.list[0]}/>
            : <ProductCarousel productImage={data.data.list}/>;

        return (
            <div>
                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                    <div>
                        <h1 className="text-left">{data.data.product.name}<span
                            className="p-view-header-brand"> by {data.data.product.brand}</span></h1>
                        <h5 className="text-left"><span
                            className="fa fa-star pl-1 pr-1 p-view-star"> </span>{data.data.product.rating}</h5>
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
                            <p className="text-left mt-3 p-view-description">{data.data.product.description}</p>
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
    }else{
        return(
            <PageNotFound/>
        )
    }
};

export default withRouter(ProductInfos)














