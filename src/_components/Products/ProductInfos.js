import React, {Component} from 'react';
import ProductCarousel from "./ProductCarousel"
import {withRouter} from "react-router-dom";
import { addProductsToCart } from "../../actions/cartAction";
import PageNotFound from "../Loading/PageNotFound";
import StarRatingComponent from 'react-star-rating-component';
import {getProductByID} from "../../actions/productActions";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';

import connect from "react-redux/es/connect/connect";


class ProductInfos extends Component {

    constructor(props) {
        super(props);
    }

    addToCart = (e) => {

        const product = {"productId": this.props.data.product.id, "qty": 1, "unitPrice": this.props.data.product.price}
        const email = this.props.userData.userEmail;
        console.log(this.props.data.product.name);

        console.log(product);
        this.props.addProductsToCart(email, product);

        toast(`${this.props.data.product.name} successfully added to cart`, {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-success-griz'
        });
    };

    render() {

        let image = null;
    if(this.props.data !== null) {
         image = this.props.data.list.length === 1 ?
            <img width="100%" height="400" alt="" src={this.props.data.list[0]}/>
            : <ProductCarousel productImage={this.props.data.list}/>;
    }
    else {
        return (
            <PageNotFound/>
        )
    }

        return (
            <div className="col-md-12">
                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-1 pt-3">
                <ToastContainer hideProgressBar={true} autoClose={3000} />
                    <div>
                        <h1 className="text-left">{this.props.data.product.name}<span className="p-view-header-brand"> by {this.props.data.product.brand}</span></h1>
                        <h4 className="text-left"><StarRatingComponent name="rate1" starCount={5} value={this.props.data.product.rating} editing={false} starColor={"#f1c40f"} renderStarIcon={() => <span className="fa fa-star"></span>} emptyStarColor={"#7f8c8d"}/></h4>
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
                            <p className="text-left mt-3 p-view-description">{this.props.data.product.description}</p>
                            <button className="float-left btn btn-success" onClick={this.addToCart} >Add to cart</button>
                            <div className="col-12 mt-3 pl-0 pr-0 pb-0 pull-bottom">
                                <h5 className="text-left "><span className="rrp-text text-danger">RRP</span> ${this.props.data.product.price}</h5>
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


    );
}
}


const mapStateToProps = state => ({
    userData: state.posts.userData
});

const mapDispatchToProps = {
    addProductsToCart,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductInfos);















