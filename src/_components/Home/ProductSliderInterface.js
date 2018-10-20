import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    sliderAction,
    sliderAction1,
    sliderActionCamera,
    sliderActionPhone,
    sliderActionWatch
} from "../../actions/slidersAction";
import ProductSlider from "./ProductSlider";

// image for sale
var watchP = "https://www.fhinds.co.uk/Images/Editor/Sale%202017/Hinds%202017_Saver%20POS_Header%20Banner_945x315_5WATCH.jpg";
var cameraP ="https://www.dccameras.com.au/media/wysiwyg/porto/homepage/content/04/categories/christmas/dslr.jpg";
var phoneP = "https://cdn.shopify.com/s/files/1/1739/1083/files/sales-icon-18218.png?v=1497179392";

// products displaying
// products displaying
var watchID = [];
var watchImage = [];
var watchName = [];
var watchPrice = [];

var phoneID = [];
var phoneImage = [];
var phoneName = [];
var phonePrice = [];

var cameraID = [];
var cameraImage = [];
var cameraName = [];
var cameraPrice = [];

class ProductSliderInterface extends Component {

    // Fetching data from server
    componentDidMount() {
        this.props.dataWatch();
        this.props.dataPhone();
    }

    render() {
        // sorting data into different group

        if (this.props.dataState.hasOwnProperty('watch')){
            // watchData = this.props.dataState.watch.slice(0, 10);
            const watchData = this.props.dataState.watch;

            watchImage = watchData.map((watchData) => watchData.list[0]);
            watchName =  watchData.map((watchData) => watchData.product.name);
            watchID =  watchData.map((watchData) => watchData.product.id);
            watchPrice =  watchData.map((watchData) => watchData.product.price);

        }
        else if(this.props.dataState.hasOwnProperty('phone')){
            // phoneData = this.props.dataState.phone;
            // console.log(phoneData);
            const phoneData = this.props.dataState.phone;

            phoneImage = phoneData.map((phoneData) => phoneData.list[0]);
            phoneName =  phoneData.map((phoneData) => phoneData.product.name);
            phoneID =  phoneData.map((phoneData) => phoneData.product.id);
            phonePrice =  phoneData.map((phoneData) => phoneData.product.price);
        }
        // else if(this.props.dataState.hasOwnProperty('camera')){
        //     // phoneData = this.props.dataState.phone;
        //     // console.log(phoneData);
        //     const cameraData = this.props.dataState.camera;
        //
        //     cameraImage = cameraData.map((cameraData) => cameraData.list[0]);
        //     cameraName =  cameraData.map((cameraData) => cameraData.product.name);
        //     cameraID =  cameraData.map((cameraData) => cameraData.product.id);
        //     cameraPrice = cameraData.map((cameraData) => cameraData.product.price);
        // }
        return (
            <div className="container">
                {/* load data to the screen */}
                {/*<ProductSlider name={CameraData} promotion={"Today's Picks!"}/>*/}
                {/*Kitchen appliances*/}
                {/*Games*/}
                <ProductSlider image={watchImage} name={watchName} id={watchID} price={watchPrice} promotion={"Today's Picks!"}/>
                <ProductSlider image={phoneImage} name={phoneName} id={phoneID} price={phonePrice} promotion={"Deals on Watches!"}/>
                <ProductSlider image={phoneImage} name={phoneName} id={phoneID} price={phonePrice} promotion={"Phones On Sale Hurry! "} style={{marginBottom: "50px"}}/>

                {/*<ProductSlider image={cameraImage} name={cameraName} id={phoneID} price={cameraPrice} promotion={"Phones On Sale Hurry! "} style={{marginBottom: "50px"}}/>*/}

            </div>);
    }
}
// get state from reducer
const mapStateToProps = state => ({
    dataState: state.slider
});
// choose action for fetching
const mapActionToProps = {
    dataWatch: sliderActionWatch,
    dataPhone: sliderActionPhone,
    dataCamera: sliderActionCamera,
};
export default connect (mapStateToProps, mapActionToProps)(ProductSliderInterface);