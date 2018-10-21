import React, {Component} from 'react';
import Abc from "./HomeImg/banner10.jpg";
import Xyz from "./HomeImg/banner11.jpg";
import Lmn from "./HomeImg/banner12.jpg";
import Phone from "./HomeImg/Phone.jpg";
import Camera from "./HomeImg/Camera.jpg";
import Dress from "./HomeImg/Dress.webp";
import handbag from "./HomeImg/bagpack.jpg";
import light from "./HomeImg/light.jpg";

import {Link} from "react-router-dom";
import {fetchAllCat, fetchPosts, fetchProducts, fetchSubCategories} from "../../actions/postActions";
import connect from "react-redux/es/connect/connect";

class PopularProduct extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.catList !== this.props.catList) {
            //   this.props.fetchAllCat();
        }
    }
    render() {
        const catArray = this.props.catList;
        return (
            <div className="container mt-lg-4">
                <h1 style={{marginBottom:"25px"}}><strong>Grizzly Popular Categories</strong></h1>
                <hr/>
            <div className="card-columns d-inline-block">
                <div className="card text-white" style={{width:"350px"}}>
                    <img className="card-img" src={Phone} alt="Card image" style={{height:"250px", width: "350px"}}/>
                        <div className="card-img-overlay">
                            <Link to="/subCategory/2"  className="text-white" style={{fontSize:"50px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Phones</Link>
                        </div>
                </div>
                <div className="card text-white" style={{width:"350px"}}>
                    <img className="card-img" src={Xyz} alt="Card image" style={{height:"250px", width: "350px"}}/>
                    <div className="card-img-overlay">
                        <Link to="/subCategory/15" className="text-white" style={{fontSize:"50px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Shoes</Link>
                    </div>
                </div>
                <div className="card text-white" style={{width:"350px"}}>
                    <img className="card-img" src={light} alt="Card image" style={{height:"250px", width: "350px"}}/>
                    <div className="card-img-overlay">
                        <Link to="/subCategory/9" className="text-white" style={{fontSize:"50px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Lighting</Link>
                    </div>
                </div>
                <div className="card text-white" style={{width:"350px"}}>
                    <img className="card-img" src={Camera} alt="Card image" style={{height:"250px", width: "350px"}}/>
                    <div className="card-img-overlay">
                        <Link to="/subCategory/3" className="text-white" style={{fontSize:"50px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Camera</Link>
                    </div>
                </div>
                <div className="card text-white" style={{width:"350px"}}>
                    <img className="card-img" src={Dress} alt="Card image" style={{height:"250px", width: "350px"}}/>
                    <div className="card-img-overlay">
                        <Link to="/subCategory/5" className="text-white" style={{fontSize:"50px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Clothing</Link>
                    </div>
                </div>
                <div className="card text-white" style={{width:"350px"}}>
                    <img className="card-img" src={handbag} alt="Card image" style={{height:"250px", width: "350px"}}/>
                    <div className="card-img-overlay">
                        <Link to="/subCategory/12" className="text-white" style={{fontSize:"50px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Backpacs</Link>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchPosts,
    fetchProducts,
    fetchSubCategories,
    fetchAllCat
};

const mapStateToProps = state => ({
    catList: state.posts.catList
    // subCatDet: state.posts.subCatDet,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PopularProduct);
