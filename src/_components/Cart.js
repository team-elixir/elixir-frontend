import React, {Component} from 'react';
import './Cart.css';

class Cart extends Component {
    render() {

        // const cartList = this.props.

        return (
            <div>
                <div className="container">
                    <p className="text-secondary" style={{fontSize: "30px"}}>Shopping Cart</p>
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
                        <tr>
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
                                                <p>
                                                    Quibusdam inventore iusto deleniti quis quam veniam, qui esse velit,
                                                    voluptates
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td data-th="Price">$1.99</td>
                            <td data-th="Quantity">
                                <input type="number" className="form-control text-center" value="1"/>
                            </td>
                            <td data-th="Subtotal" className="text-center">1.99</td>
                            <td className="actions" data-th="">
                                <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                                <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                            </td>
                        </tr>

                        </tbody>
                        <tfoot>

                        <tr>
                            <td><a href="/" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue
                                Shopping</a></td>
                            <td colSpan="2" className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>{'Total $${this.props.price}'}</strong></td>
                            <td><a href="#" className="btn btn-success btn-block">Checkout <i
                                className="fa fa-angle-right"></i></a></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

export default Cart;