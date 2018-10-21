import React, {Component} from 'react';
import { getProductByID } from '../../actions/productActions';
import { removeProductsFromCart, fetchCart } from "../../actions/cartAction";
import connect from "react-redux/es/connect/connect";

class OrderItem extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProductByID(this.props.data.productId);
    }

    componentDidUpdate(prevProps) {
        if((JSON.stringify(prevProps.productsList) !== JSON.stringify(this.props.productsList)) || (JSON.stringify((this.props.deletemsgFromServer))!== JSON.stringify(prevProps.deletemsgFromServer)))
        {
            this.props.getProductByID(this.props.data.productId);
            this.props.fetchCart(this.props.userData.userEmail);
            console.log("Component did update was called by react ")
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
            // console.log("This one "+product)
            console.log("This one is product "+product);

            this.props.removeProductsFromCart(email, product);

            console.log("Reached here ");

        }

    };

    render() {

        let product = null;
        const cartItem = this.props.data;

        const productsList = this.props.productsList;
        // console.log(cartItem);
        // console.log(productsList);

        if(productsList !== null || productsList.length > 0)
        {
            productsList.map(eachProduct =>
                {
                (eachProduct.product.id === cartItem.productId) ? product=eachProduct : console.log("Not Found");

                }
            )
        }
        console.log(product);
        console.log("Return was called");
        {  console.log("Product List ----------" +productsList)}

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
                    <td data-th="Quantity">{cartItem.qty}</td>
                    <td data-th="Subtotal" className="text-center">{cartItem.subTotal}</td>
                </tr>
        );
    }
}
const mapStateToProps = state => ({
    productsList: state.productData.cartItems,
    userData: state.posts.userData,
    deletemsgFromServer:state.cart.deletemsgFromServer
});

const mapDispatchToProps = {
    getProductByID, removeProductsFromCart, fetchCart,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderItem);
