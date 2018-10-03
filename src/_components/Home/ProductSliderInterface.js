import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sliderAction} from "../../actions/slidersAction";
import ProductSlider from "./ProductSlider";

// image for sale
var watchP = "https://www.fhinds.co.uk/Images/Editor/Sale%202017/Hinds%202017_Saver%20POS_Header%20Banner_945x315_5WATCH.jpg";
var cameraP ="https://www.dccameras.com.au/media/wysiwyg/porto/homepage/content/04/categories/christmas/dslr.jpg";
var phoneP = "https://cdn.shopify.com/s/files/1/1739/1083/files/sales-icon-18218.png?v=1497179392";

// products displaying
var watchData = [];
var phoneData = [];
var cameraData = [];

class ProductSliderInterface extends Component {

    // Fetching data from server
    componentDidMount() {
        this.props.getData();
    }

    render() {
        // sorting data into different group
        watchData = this.props.dataState.slice(0, 10);
        phoneData = this.props.dataState.slice(10, 20);
        return (
            <div>
                {/* load data to the screen */}
                <ProductSlider name={watchData} promotion={watchP}/>
                <ProductSlider name={phoneData} promotion={phoneP}/>

            </div>);
    }
}
// get state from reducer
const mapStateToProps = state => ({
    dataState: state.slider
});
// choose action for fetching
const mapActionToProps = {
    getData: sliderAction,
};
export default connect (mapStateToProps, mapActionToProps)(ProductSliderInterface);