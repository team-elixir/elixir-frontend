import React, { Component } from "react";
// import "../../../assets/css/Cart.css";
import connect from "react-redux/es/connect/connect";


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CartItem from "../../Cart/CartItem";
import {getOrderStatusCompleted} from "../../../actions/cartAction";



class OrderRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {

        // load order default after user login
        if (this.props.dataState.posts.hasOwnProperty('userData')){
            if (this.props.dataState.posts.userData.hasOwnProperty('userEmail')) {
                // if (this.props.dataState.posts.userData.userEmail !== "") {
                console.log("Start002");
                console.log(this.props.dataState.posts.userData.userEmail);
                console.log("End002");
                this.props.getOrderStatusCompleted(this.props.dataState.posts.userData.userEmail);
                //   }
            }
        }
    }
    componentDidUpdate(prevProps){
        // if (prevProps !== this.props){
        //     if (this.props.dataState.posts.hasOwnProperty('userData')){
        //         if (this.props.dataState.posts.userData.hasOwnProperty('userEmail')) {
        //             // if (this.props.dataState.posts.userData.userEmail !== "") {
        //             console.log("Start002");
        //             console.log(this.props.dataState.posts.userData.userEmail);
        //             console.log("End002");
        //             this.props.getOrderStatusCompleted("jamechet@gmail.com");
        //             //   }
        //         }
        //     }
        // }

    }
    render() {

        let cart= this.props.dataState.cart.order;
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
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} size = 'lg'>
                        <ModalBody>
                            <CartItem data = {cartItems}/>
                        </ModalBody>
                    </Modal>
                </div>
                <div className="container">
                    <p className="text-secondary float-left" style={{ fontSize: "30px" }}>
                        Order Summary
                    </p>
                    {cart.length > 0 ? (
                        <table id="cart" className="table table-hover table-condensed">
                            <thead>
                            <tr>
                                <th styles="width:50%">Order_ID</th>
                                <th styles="width:10%">Total_Price</th>
                                <th styles="width:8%">Payment_Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cart.map(cart => (
                                <tr onClick={this.toggle}>
                                    <td>{cart.orderId}</td>
                                    <td>{cart.totalPrice}</td>
                                    <td>{cart.status}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
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
    dataState: state
});

const mapActionToProps = {
    getOrderStatusCompleted,
};

export default connect(
    mapStateToProps,
    mapActionToProps
)(OrderRouter);
