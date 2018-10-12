import React from 'react';
import ProductCarousel from "./ProductCarousel"
import {withRouter} from "react-router-dom";
import PageNotFound from "../Loading/PageNotFound";
import StarRatingComponent from 'react-star-rating-component';


const ProductInfos = (data) => {
    console.log("ProductInfos: " + JSON.stringify(data.data.product));

    const product = {
        productId: data.data.product.id,
        qty: 1,
        unitPrice: data.data.product.price,
    }
    const addToCart = () => {

    }


    if(data !== null) {
        let image = data.data.list.length === 1 ?
            <img width="100%" height="400" alt="" src={data.data.list[0]}/>
            : <ProductCarousel productImage={data.data.list}/>;

        return (
            <div className="col-md-12">
                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-1 pt-3">
                    <div>
                        <h1 className="text-left">{data.data.product.name}<span
                            className="p-view-header-brand"> by {data.data.product.brand}</span></h1>
                        <h4 className="text-left"><StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={data.data.product.rating}
                            editing={false}
                            starColor={"#f1c40f"}
                            renderStarIcon={() => <span className="fa fa-star"></span>}
                            emptyStarColor={"#7f8c8d"}/></h4>
                        <hr/>
                    </div>
                    <div className="row marg-top-25">
                        <div className="col-lg-4 col-md-12">
                            <div className="w-100 h-100 cog-radius">
                                {image}
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <h5 className="text-left">Product Description</h5>
                            <p className="text-left mt-3 p-view-description">{data.data.product.description}</p>
                            <button className="float-left btn btn-success" onClick={this.addToCart} >Add to cart</button>
                            <div className="col-12 mt-3 pl-0 pr-0 pb-0 pull-bottom">
                                <h5 className="text-left "><span className="rrp-text text-danger">RRP</span> ${data.data.product.price}</h5>
                            </div>
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














