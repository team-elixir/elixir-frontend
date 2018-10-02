import React, {Component} from 'react';
import grizzlogo from "../../assets/images/grizz-logo.png";
import {fetchSearchResults} from "../../actions/postActions";
import {connect } from "react-redux";
class Header extends React.Component{
    styles = {
        borderRadius: 30,
        width: 100,
    };
    navStyle = {
        "box-shadow": "0 3px 6px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0)",
        height: "80px"
    };
searchFunctionality = () => {
    this.props.fetchSearchResults();
    console.log("-----Search functionality called--------");
}
    render(){
        return(

            <nav className="navbar navbar-expand-lg navbar-light" style={this.navStyle}>
                <a className="navbar-brand" href="/"><strong>Grizzly</strong>
                <img src={grizzlogo} style={{height: 50}} /> <strong>Store</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="mx-auto" style={{width: "50%"}}>
                        <div className="input-group mb-3" style={{paddingTop: "13px"}}>
                            <input type="text" className="form-control rounded-left"
                                   placeholder="what you are looking to buy today" aria-label=""
                                   aria-describedby="basic-addon1"/>
                            <div className="input-group-prepend">
                                <button className="btn-primary rounded-right" type="submit" style={{width: "50px"}}><i
                                   onClick={this.searchFunctionality} className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button style={this.styles} className="btn btn-outline-info m-2" type="submit">Login</button>
                        <button style={this.styles} className="btn btn-outline-info m-2" type="submit">SignUp</button>
                    </div>
                </div>
            </nav>
        );
    }
}
const mapDispatchToProps = {
    fetchSearchResults
};

export default connect(null, mapDispatchToProps)(Header);