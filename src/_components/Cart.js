import React, { Component } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

import { fetchSubCategories } from "../actions/postActions";
import { fetchCart } from "../actions/cartAction";
import connect from "react-redux/es/connect/connect";

import { isError } from "util";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.userData.userEmail == "") {
    }
    if (
      this.props.userData.userEmail !== null ||
      typeof this.props.userData.userEmail !== "undefined"
    ) {
      console.log("Ran just fine ");
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
          <p className="text-secondary float-left" style={{ fontSize: "30px" }}>
              Shopping Cart
          </p>
        <div className="container">
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
                    <strong>$ {cart.totalPrice}</strong>
                  </td>
                  <td>
                    <Link to="" className="btn btn-success btn-block">
                      Checkout <i className="fa fa-angle-right" />
                    </Link>
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
  userData: state.posts.userData
});

const mapDispatchToProps = {
  fetchCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
