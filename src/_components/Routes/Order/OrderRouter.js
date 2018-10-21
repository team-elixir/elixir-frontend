import React, { Component } from "react";
// import "../../../assets/css/Cart.css";
import connect from "react-redux/es/connect/connect";


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getOrderStatusCompleted, getOrderStatusPending, updateOrderStatus} from "../../../actions/cartAction";
import OrderItem from "../../Cart/OrderItem";



class OrderRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            cartItemsList:[],
        };
        this.toggle = this.toggle.bind(this);
        this.productLine = this.productLine.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    productLine(event){
        console.log(event.target.value);
        let cart= this.props.dataStateCart.cartComplete;
        let cartItems = [];
       cart.map(function(cart) {
            if (cart.orderId == event.target.value){
                cartItems = cart.orderline
            }
        });

        this.setState({
             modal: !this.state.modal,
            cartItemsList: cartItems,
        });
    }
    // displaying after login
    componentDidMount() {

        if (this.props.match.params.emailId === "default" && this.props.match.params.orderId === "default"){
            this.props.getOrderStatusCompleted(this.props.dataStatePosts.userData.userEmail);
        }
    }
    // display after paypal
    componentDidUpdate(prevProps){
        if (prevProps.dataStateCart === this.props.dataStateCart){
            // validating email format
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const checkEmail = re.test(this.props.match.params.emailId);
            if (checkEmail === true){
                this.props.updateOrderStatus(this.props.match.params.orderId);
                this.props.getOrderStatusCompleted(this.props.match.params.emailId);
            }
        }
    }

    render() {
        let cardv1 = this.state.cartItemsList;
        let cart= this.props.dataStateCart.cartComplete;
        let cartItems = [];
        if (cart !== undefined) {
                cart.map(cartItem =>
                    cartItems = cartItem.orderline
                );
                console.log("Cart Items here" + JSON.stringify(cart));
        }
        return (
            <div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} size = 'lg'>
                        <ModalBody>
                            <table id="cart" className="table table-hover table-condensed text-center">
                                <thead>
                                <tr>
                                    <th styles="width:50%">Product</th>
                                    <th styles="width:8%">Price</th>
                                    <th styles="width:8%">Quantity</th>
                                    <th styles="width:8%">SubTotal</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cardv1.map(cart => (
                                    <OrderItem data={cart}/>
                                ))}
                                </tbody>
                            </table>
                        </ModalBody>
                    </Modal>
                </div>
                <div className="container">
                    <p className="text-secondary float-left" style={{ fontSize: "30px" }}>
                        Order Summary
                    </p>

                    {cartItems.length > 0 ? (
                        <table id="cart" className="table table-hover table-condensed text-center">
                            <thead>
                            <tr>
                                <th styles="width:50%">Order_ID</th>
                                <th styles="width:10%">Total_Price</th>
                                <th styles="width:8%">Payment_Status</th>
                                <th styles="width:8%">Order_Items</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cart.map(cart => (
                                <tr>
                                    <td>{cart.orderId}</td>
                                    <td>${cart.totalPrice}</td>
                                    <td>{cart.status}</td>
                                    <td><button className="btn-lg" onClick={this.productLine} value={cart.orderId}>+</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <div>

                            <h1>"Your order list is Empty..."</h1>
                        </div>
                    )}

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dataStateCart: state.cart,
    dataStatePosts: state.posts,
});

const mapActionToProps = {
    getOrderStatusCompleted,
    getOrderStatusPending,
    updateOrderStatus,
};

export default connect(
    mapStateToProps,
    mapActionToProps
)(OrderRouter);
