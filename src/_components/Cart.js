import React, {Component} from 'react';
import './Cart.css';
import {fetchSubCategories} from "../actions/postActions";
import { fetchCart } from "../actions/cartAction"
import connect from "react-redux/es/connect/connect";

class Cart extends Component {

    constructor(props) {
        super(props)
        //this.props.fetchCart(this.props.userEmail);
    }

    componentDidMount(){
        console.log(this.props.userEmail);
        if(this.props.userEmail !== null || typeof this.props.userEmail !== "undefined")
        {
            this.props.fetchCart(this.props.userEmail);
        }

    }

    componentDidUpdate(prevProps){
        if(prevProps.cart !== this.props.cart)
        {
            if(this.props.userEmail !== null || typeof this.props.userEmail !== "undefined")
                this.props.fetchCart(this.props.userEmail);
        }
    }

    render() {
        console.log(this.props.userEmail);
        console.log(this.props.cart);
        const cart = this.props.cart;
        let cartItems = [];
        if(cart.length > 0)
        {
            cartItems = cart.orderline;
        }

        return (
            <div>
                <div className="container">
                    <p className="text-secondary float-left" style={{fontSize: "30px"}}>Shopping Cart</p>
                    {(cart.length > 0) ?
                        <table id="cart" className="table table-hover table-condensed">
                            <thead>
                            <tr>
                                <th styles="width:50%">Product</th>
                                <th styles="width:10%">Price</th>
                                <th styles="width:8%">Quantity</th>
                                <th styles="width:22%" className="text-center">Subtotal</th>
                                <th styles="width:10%"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {cartItems.map(cartItem =>

                                <tr key={cartItem.productId}>
                                    <td data-th="Product">
                                        <div className="row">
                                            {/*<div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..."*/}
                                            {/*className="img-responsive"/></div>*/}
                                            {/*<div className="col-sm-10">*/}
                                            {/*<h4 className="nomargin">Product 1</h4>*/}
                                            {/*<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat*/}
                                            {/*nulla pariatur.</p>*/}
                                            {/*</div>*/}
                                            <div className="container">

                                                <div className="my-item d-flex flex-column flex-md-row">
                                                    <p className="my-item__image mb-3 mb-md-0 mr-md-3 w-25">
                                                        <img src="http://via.placeholder.com/1600x1600" alt="Image"
                                                             className="img-fluid"/>
                                                    </p>
                                                    <div className="my-item__text">
                                                        <h4 className="nomargin" style={{color:"black"}}>Product 1</h4>
                                                        <p>
                                                            Quibusdam inventore iusto deleniti quis quam veniam, qui esse velit,
                                                            voluptates
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </td>
                                    <td data-th="Price">{cartItem.unitPrice}</td>
                                    <td data-th="Quantity">
                                        <input type="number" className="form-control text-center" value={cartItem.qty}/>
                                    </td>
                                    <td data-th="Subtotal" className="text-center">{cartItem.subTotal}</td>
                                    <td className="actions" data-th="">
                                        {/*<button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>*/}
                                        <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                                    </td>
                                </tr>

                            )}




                            </tbody>
                            <tfoot>

                            <tr>
                                <td><a href="/" className="btn btn-warning float-left"><i className="fa fa-angle-left"></i> Continue
                                    Shopping</a></td>
                                <td colSpan="2" className="hidden-xs"></td>
                                <td className="hidden-xs text-center"><strong>{'Total $${this.props.price}'}</strong></td>
                                <td><a href="#" className="btn btn-success btn-block">Checkout <i
                                    className="fa fa-angle-right"></i></a></td>
                            </tr>
                            </tfoot>
                        </table>
                        :
                        <div><h1>"Add something first idiot...."</h1></div>
                    }

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart : state.cart.cart,
    userEmail:state.posts.userEmail
});

const mapDispatchToProps = {
    fetchCart,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(Cart);