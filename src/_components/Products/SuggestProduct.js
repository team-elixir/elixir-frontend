import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {getCategory} from "../../actions/productActions";
import {connect} from 'react-redux';
import CategoryCarousel from "./CategoryCarousel";

class SuggestProduct extends Component {
    componentWillMount(){
        const { data } = this.props;
        console.log(data);
        this.props.getCategory(data);
    }

    shouldComponentUpdate() {
        return this.props.listStatus.Loading;
    }

    show() {
        // const {list} = this.props.listInfo;
        const {listInfo} = this.props;
        let category = <CategoryCarousel categoryImage={listInfo}/>;
        // console.log(listInfo);

        return (
            <div className="col-md-12">
                <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-1 pt-3" id='categoryCarousel'>
                    <br/>
                    <div className="w-25 bg-info rounded text-xl-center align-middle   "><h4>People also searched for</h4></div>
                    {category}
                </div>
                <br/>
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