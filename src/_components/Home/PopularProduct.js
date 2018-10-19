import React, {Component} from 'react';
import Abc from "./banner10.jpg";
import Xyz from "./banner11.jpg";
import Lmn from "./banner12.jpg";
import Phone from "./Phone.jpg";
import Camera from "./Camera.jpg";
// import Dress from "./Dress.jpg";
import handbag from "./handbag.jpg";

import {Link} from "react-router-dom";

class PopularProduct extends Component {
    render() {
        return (
            <div className="container">
                {/*<h1><strong>Popular Categories</strong></h1>*/}
                <hr/>
            <div className="card-columns d-inline-block ml-lg-5">
                <div className="card text-white" style={{width:"300px"}}>
                    <img className="card-img" src={Phone} alt="Card image" style={{height:"250px", width: "300px"}}/>
                        <div className="card-img-overlay">
                            <Link to="/category/all" className="text-white" style={{fontSize:"50px",fontFamily:"times new roman", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Phones</Link>
                        </div>
                </div>
                <div className="card text-white" style={{width:"300px"}}>
                    <img className="card-img" src={Xyz} alt="Card image" style={{height:"250px", width: "300px"}}/>
                    <div className="card-img-overlay">
                        <Link to="/category/all" className="text-white" style={{fontSize:"50px",fontFamily:"times new roman", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Shoes</Link>
                    </div>
                </div>
                <div className="card text-white" style={{width:"300px"}}>
                    <img className="card-img" src={Abc} alt="Card image" style={{height:"250px", width: "300px"}}/>
                    <div className="card-img-overlay">
                        <Link to="/category/all" className="text-white" style={{fontSize:"50px",fontFamily:"times new roman", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Bags</Link>
                    </div>
                </div>
                <div className="card text-white" style={{width:"300px"}}>
                    <img className="card-img" src={Camera} alt="Card image" style={{height:"250px", width: "300px"}}/>
                    <div className="card-img-overlay">
                        <Link to="/category/all" className="text-white" style={{fontSize:"50px",fontFamily:"times new roman", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Camera</Link>
                    </div>
                </div>
                {/*<div className="card text-white" style={{width:"300px"}}>*/}
                    {/*<img className="card-img" src={Dress} alt="Card image" style={{height:"250px", width: "300px"}}/>*/}
                    {/*<div className="card-img-overlay">*/}
                        {/*<Link to="/category/all" className="text-white" style={{fontSize:"50px",fontFamily:"times new roman", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Dresses</Link>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div className="card text-white" style={{width:"300px"}}>
                    <img className="card-img" src={handbag} alt="Card image" style={{height:"250px", width: "300px"}}/>
                    <div className="card-img-overlay">
                        <Link to="/category/all" className="text-white" style={{fontSize:"50px",fontFamily:"times new roman", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Handbags</Link>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default PopularProduct;