import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {getCategory} from "../../actions/productActions";
import {connect} from 'react-redux';
import CategoryCarousel from "./CategoryCarousel";

class SuggestProduct extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getCategory();
    }

    shouldComponentUpdate() {
        return this.props.listStatus.Loading;
    }

    show() {
        // const {list} = this.props.listInfo;
        const {listInfo} = this.props;
        let category = <CategoryCarousel categoryImage={listInfo}/>;
        console.log(listInfo);



        return (
            <div className="container">
                <div className="row justify-content-start" id='categoryCarousel'>
                    <p>{category}</p>
                </div>
            </div>
        )
    }


    render() {
        // Check if we have data.
        if (!this.props.listStatus.Loading)
            return this.show();
        else
            return null;
    }
}

const mapStateToProps = state => ({
    listStatus: state.productData,
    listInfo: state.productData.items,
});


export default connect(mapStateToProps, {getCategory})(SuggestProduct);