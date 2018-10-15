import React, {Component} from 'react';
import { getProductByID } from '../actions/productActions'
import connect from "react-redux/es/connect/connect";

class CartItem extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProductByID(this.props.data.productId);
    }

    componentDidUpdate(prevProps) {

    }


    render() {

        const cartItem = this.props.data;
        console.log(cartItem);
        return (
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
                                        <img
                                            src="http://via.placeholder.com/1600x1600"
                                            alt="Image"
                                            className="img-fluid"
                                        />
                                    </p>
                                    <div className="my-item__text">
                                        <h4
                                            className="nomargin"
                                            style={{ color: "black" }}
                                        >
                                            Product 1
                                        </h4>
                                        <p>
                                            Quibusdam inventore iusto deleniti quis quam
                                            veniam, qui esse velit, voluptates
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">{cartItem.unitPrice}</td>
                    <td data-th="Quantity">
                        <input
                            type="number"
                            className="form-control text-center"
                            value={cartItem.qty}
                        />
                    </td>
                    <td data-th="Subtotal" className="text-center">
                        {cartItem.subTotal}
                    </td>
                    <td className="actions" data-th="">
                        {/*<button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>*/}
                        <button className="btn btn-danger btn-sm">
                            <i className="fa fa-trash-o" />
                        </button>
                    </td>
                </tr>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.productData.cartItems
});

const mapDispatchToProps = {
    getProductByID,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItem);
