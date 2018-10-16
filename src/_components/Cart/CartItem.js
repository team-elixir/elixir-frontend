import React, {Component} from 'react';
import { getProductByID } from '../../actions/productActions';
import { removeProductsFromCart } from "../../actions/cartAction";
import connect from "react-redux/es/connect/connect";

class CartItem extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProductByID(this.props.data.productId);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.productsList !== this.props.productsList)
        {
            this.props.getProductByID(this.props.data.productId);
        }
    }

    // Eg: {"productId":"1"} delete body should be JSON


    removeFromCart = (e) => {
        if (this.props.data.productId !== undefined)
        {
            // const product =
            //     {
            //         "productId": this.props.data.productId
            //     }
            const product = this.props.data.productId;
            const email = this.props.userData.userEmail;
            console.log("This one "+product)
            this.props.removeProductsFromCart(email, product);

        }

    };

    render() {

        let product = null;
        const cartItem = this.props.data;
        const productsList = this.props.productsList;
        console.log(cartItem);
        console.log(productsList);

        if(productsList !== null || productsList.length > 0)
        {
            productsList.map(eachProduct =>
                {
                (eachProduct.product.id === cartItem.productId) ? product=eachProduct : console.log("Not Found");

                }
            )
        }
        console.log(product);
        return (
                <tr key={cartItem.productId}>
                    {(product !== null) &&
                    <td data-th="Product">
                        <div className="row">
                            <div className="container mt-4">
                                <div className="my-item d-flex flex-column flex-md-row">
                                    <p className="my-item__image mb-3 mb-md-0 mr-md-3 w-25">
                                        <img src={product.list[0]} alt="Image" className="img-fluid"/>
                                    </p>
                                    <div className="my-item__text">
                                        <h4 className="nomargin" style={{ color: "black" }}>
                                            {product.product.name}
                                        </h4>
                                        <p>
                                            {product.product.brand}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    }
                    <td data-th="Price">{cartItem.unitPrice}</td>
                    <td data-th="Quantity"><input type="number" className="form-control text-center" value={cartItem.qty}/></td>
                    <td data-th="Subtotal" className="text-center">{cartItem.subTotal}</td>
                    <td className="actions" data-th="">
                        {/*<button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>*/}
                        <button className="btn btn-danger btn-sm" onClick={this.removeFromCart}>
                            <i className="fa fa-trash-o" />
                        </button>
                    </td>

                </tr>
        );
    }
}

const mapStateToProps = state => ({
    productsList: state.productData.cartItems,
    userData: state.posts.userData
});

const mapDispatchToProps = {
    getProductByID, removeProductsFromCart,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItem);
