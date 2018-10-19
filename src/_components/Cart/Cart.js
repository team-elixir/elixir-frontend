import React, { Component } from "react";
import "../../assets/css/Cart.css";
import { Link } from "react-router-dom";

import { fetchCart } from "../../actions/cartAction";
import connect from "react-redux/es/connect/connect";

import { isError } from "util";
import CartItem from "./CartItem";
import {payment} from "../../actions/payPalAction";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.checkOutButton = this.checkOutButton.bind(this);
  }

  componentDidMount() {
    if (this.props.userData.userEmail == "") {
    }
    if (
      this.props.userData.userEmail !== null ||
      typeof this.props.userData.userEmail !== "undefined"
    ) {
      this.props.fetchCart(this.props.userData.userEmail);
    }
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.cart) !== JSON.stringify(this.props.cart) || this.props.userData.userEmail !== prevProps.userData.userEmail) {
      if (
        this.props.userData.userEmail !== null ||
        typeof this.props.userData.userEmail !== "undefined"
      )
        this.props.fetchCart(this.props.userData.userEmail);
    }

      if (this.props.paypalData.payment.data !== undefined){
          window.open(this.props.paypalData.payment.data.redirect_url);
      }
  }
    // Send Request to PayPal
    checkOutButton(){

        const totalPrice = this.props.cart[0].totalPrice;
        this.props.payment(10);
    }
  render() {
    const cart = this.props.cart;
    let cartItems = [];
    if (cart.length > 0) {
        cart.map(cartItem =>
            cartItems = cartItem.orderline
        );
      //cartItems = cart[0].orderline;
      console.log("Cart Items here" + JSON.stringify(cart));
    }

    return (
      <div>
        <div className="container">
            <p className="text-secondary float-left" style={{ fontSize: "30px" }}>
                Shopping Cart
            </p>
          {cartItems.length > 0 ? (
                   cart.map(cart=>
            <table id="cart" className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th styles="width:50%">Product</th>
                  <th styles="width:10%">Price</th>
                  <th styles="width:8%">Quantity</th>
                  <th styles="width:22%" className="text-center">
                    Subtotal
                  </th>
                  <th styles="width:10%" />
                </tr>
              </thead>
              <tbody>
                {cartItems.map(cartItem => (
                 <CartItem data={cartItem}/>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <Link to="/" className="btn btn-warning float-left">
                      <i className="fa fa-angle-left" /> Continue Shopping
                    </Link>
                  </td>
                  <td colSpan="2" className="hidden-xs" />
                  <td className="hidden-xs text-center">
                    <strong>${cart.totalPrice.toFixed(2)}</strong>
                  </td>
                  <td>
                    <button onClick={this.checkOutButton} className="btn btn-success btn-block">
                      Checkout <i className="fa fa-angle-right" />
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
              )
          ) : (
            <div>
              <h1>"Your Shopping Cart is Empty..."</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  userData: state.posts.userData,
    paypalData: state.paypal,
});

const mapDispatchToProps = {
  fetchCart,
    payment,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
