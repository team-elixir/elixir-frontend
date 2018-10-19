import React, {Component} from 'react';
import {getCategory} from "../../actions/productActions";
import {connect} from 'react-redux';
import CategoryCarousel from "./CategoryCarousel";

class SuggestProduct extends Component {
    componentWillMount() {
        const {data} = this.props;
        // console.log("will mount"+data);
        this.props.getCategory(data);
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.data);
        // console.log("ReceiveProps");
        // console.log(this.props.data);
        if (nextProps.data !== this.props.data) {
            this.props.getCategory(nextProps.data);
            return this.props.listStatus.Loading;
        }
    }

    show() {
        // const {list} = this.props.listInfo;
        // console.log(this.props);
        const {listInfo} = this.props;
        let category = <CategoryCarousel categoryImage={listInfo}/>;
        // console.log(listInfo);

        return (
            <div className="col-md-12">
                <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-1 pt-3" id='categoryCarousel'>
                    <br/>
                    <div className="w-25 bg-info rounded text-xl-center align-middle   ">
                        <h6 id='suggestion'>More from this category</h6>
                    </div>
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