import React, { Component } from "react";
import grizzlogo from "../../assets/images/grizz-logo.png";
import { fetchSearchResults, setUserData } from "../../actions/postActions";
import "../../assets/css/Login.css";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { firebaseui } from "firebaseui";
import { Link } from "react-router-dom";
import "../../assets/css/Google.css"
import FirebaseAuth from "react-firebaseui/FirebaseAuth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import axios from "axios";
import { withRouter } from "react-router-dom";
firebase.initializeApp({
    apiKey: "AIzaSyBnmqsoippRVBgadkHkKpsijLcdiMCUtpQ",
    authDomain: "elixir-218723.firebaseapp.com",
    databaseURL: "https://elixir-218723.firebaseio.com",
    projectId: "elixir-218723",
    storageBucket: "elixir-218723.appspot.com",
    messagingSenderId: "671693303394"
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        //  var googleLoginUI =  new firebaseui.auth.AuthUI(firebase.auth());
        this.searchFunctionality = this.searchFunctionality.bind(this);
    }

    state = {
        isSignedIn: false,
        email : '',
        password:'',
        firstLog:false

        // show:true
    };



    uiConfig = {
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
            signInSuccess: () => false
        }
    };

    styles = {
        borderRadius: 30,
        width: 100,
    };
    buttonBack = {
        // background : firebase.auth().currentUser.photoURL

    };
    navStyle = {
        "box-shadow": "0 3px 6px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0)",
        height: "95px",
        marginBottom: "20px"
    };
    Popups = () =>
    {

    }
    searchFunctionality = event => {
        event.stopPropagation();
        // this.props.fetchSearchResults();
        //  this.props.searchProductAction1("a");
        // console.log(this.props.dataState.searchResult1);
        // console.log(this.state.searchBoxValue);
        console.log("Start");
        // console.log(event.target.value);
        console.log("END HERE");
        // route data to search Product router to handle grid view
        if (event.target.value != "") {
            this.props.history.push("/search/" + event.target.value);
        } else {
            this.props.history.push("/home");
        }
    };

    GoogleLogin = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user });
        });
    };
    killWindow = () => {
        if (this.state.isSignedIn) {
            // if (this.state.firstLog==false){
            //       this.setState({firstLog:true})
            //
            //       window.location.reload()
            //
            //   }
            // console.log(firebase.auth().currentUser.getIdToken());
            console.log("Kill Window Called");

            this.props.setUserData({
                userEmail: firebase.auth().currentUser.email,
                loginName: firebase.auth().currentUser.displayName
            });
            axios
                .post(
                    "https://api.elixir.ausgrads.academy/user_micro/users/customer/add",
                    {
                        name: firebase.auth().currentUser.displayName,
                        email: firebase.auth().currentUser.email,
                        contactNum: "",
                        address: ""
                    }
                )
                .catch(error => {
                    console.log(" User already Exists in Database");
                });

            console.log("Add user successful");
            console.log("Worked Fine");
        }
    };
    Logout = () => {
        firebase.auth().signOut();
        window.location.reload();
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user }); //if user is an object , set to true else false
            // this.props.setSignedState(false)
            // console.log("VALUE"+JSON.stringify(this.props.isSignedIn));
        });
    };

    render() {
        //   var ui = new firebaseui.auth.AuthUI(firebase.auth());

        return (
            <div style={this.navStyle}>
                <nav className="navbar navbar-expand-sm navbar-light ml-lg-5 mr-lg-5">
                    <Link className="navbar-brand" to="/home">
                        <strong>Grizzly</strong>
                        <img src={grizzlogo} style={{ height: 50 }} /> <strong>Store</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="mx-auto" style={{ width: "55%" }}>
                            <div className="input-group mb-3" style={{ paddingTop: "13px" }}>
                                <input type="text" className="form-control rounded-left" placeholder="what you are looking to buy today" aria-label="" aria-describedby="basic-addon1" onChange={this.searchFunctionality}/>
                                <div className="input-group-prepend">
                                    <button className="btn-primary rounded-right" type="submit" style={{ width: "50px" }}>
                                        <i onClick={this.searchFunctionality} className="fa fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </div>


                        {this.state.isSignedIn ? (
                            <div />
                        ) : (
                            <button style={this.styles} className="btn btn-outline-info m-2" type="submit" data-toggle="modal" data-target="#signupModal">
                                SignUp
                            </button>
                        )}

                        {/*If  Sign in is true , then loads Login button else logout*/}
                        <div>
                            {this.state.isSignedIn ? (
                                <div>
                                    <div className="dropdown d-inline-block">
                                        {/*<button*/}
                                        {/*className="btn   dropdown-toggle"*/}
                                        {/*id="dropdownMenuButton"*/}
                                        {/*type="button"*/}
                                        {/*style={{*/}
                                        {/*fontSize: "1px",*/}
                                        {/*position: "relative",*/}
                                        {/*top: "13px",*/}

                                        {/*}}*/}
                                        {/*data-toggle="dropdown"*/}
                                        {/*aria-haspopup="true"*/}
                                        {/*aria-expanded="false"*/}
                                        {/*>*/}

                                        <img src ={firebase.auth().currentUser.photoURL} className="avatar btn m2 btn-secondary dropdown-toggle align-items-center float-right" id={"dropdown-toggle2"}
                                             aria-expanded={"false"} data-toggle ="dropdown" aria-haspopup={"true"}
                                             style={{verticalalign: "middle", width:"90px", height: "80px", borderRadius: "50%"}}/>
                                        {/*{this.props.userData.loginName}*/}
                                        {/*{firebase.auth().currentUser.displayName}*/}
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" aria-expanded={"true"}>
                                            <Link to="/profile">
                                                <button style={this.styles} className="btn btn-outline-info m-2">
                                                    My Profile
                                                </button>
                                            </Link>
                                            {/*<br/>*/}
                                            <Link to="/cart">
                                                <button style={this.styles} className="btn btn-outline-info m-2">
                                                    My Cart
                                                </button>
                                            </Link>
                                            {/*<br/>*/}
                                            <Link to="/cart">
                                                <button style={this.styles} className="btn btn-outline-info m-2">
                                                    My Orders
                                                </button>
                                            </Link>
                                            {/*<br/>*/}
                                            <Link to ="/home">
                                                <button style={this.styles} className="btn btn-outline-info m-2" onClick={() => this.Logout()}>
                                                    Logout
                                                </button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ) : (
                                // // ONLY DO THE ABOVE IF SIGNED IN
                                // //
                                // // <button style={this.styles} className="btn btn-outline-info m-2"
                                // //                                 type="submit" >{firebase.auth().currentUser.displayName}</button>
                                // //
                                // // )
                                // //  ----------------------------------------------Button might be needed if we implement the login func---
                                <button style={this.styles} className="btn btn-outline-info m-2" type="submit" onClick={this.Popups} data-toggle="modal" data-target="#loginModal">
                                    Login
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Start of Log in Model*/}
                    <div>
                        <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="myform form ">
                                    <div className="logo mb-3">
                                        <div className="col-md-12 text-center">
                                            <h1>Login</h1>
                                        </div>
                                    </div>
                                    <form action="" method="post" name="login">
                                        <div className="form-group">
                                            <label className="float-left" htmlFor="exampleInputEmail1">
                                                Email address
                                            </label>
                                            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="float-left" htmlFor="exampleInputEmail1">
                                                Password
                                            </label>
                                            <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                                        </div>
                                        <div className="form-group">
                                            <p className="text-center">
                                                <a href="#">Forgot password?</a>
                                            </p>
                                        </div>
                                        <div className="col-md-12 text-center ">
                                            <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">
                                                Login
                                            </button>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div className="login-or">
                                                <hr className="hr-or" />
                                                <span className="span-or">or</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            {/*-------------------------------------------------------------------------*/}
                                            <StyledFirebaseAuth onClick={this.killWindow()} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                                        </div>
                                        {/*-----------------------------------------------------------------------------*/}
                                        <div className="form-group">
                                            <p className="text-center">
                                                Don't have account?{" "}
                                                <a href="#" data-dismiss="modal" id="signup">
                                                    Signup here
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End of Log in Model*/}

                    {/* Start of SignUp in Model*/}

                    <div>
                        <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="myform form ">
                                    <div className="logo mb-3">
                                        <div className="col-md-12 text-center">
                                            <h1>Signup</h1>
                                        </div>
                                    </div>
                                    <form action="" method="post" name="login">
                                        <div className="form-group">
                                            <label className="float-left" htmlFor="exampleInputEmail1">
                                                First Name
                                            </label>
                                            <input type="text" name="firstname" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="float-left" htmlFor="exampleInputEmail1">
                                                Last Name
                                            </label>
                                            <input type="text" name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="float-left" htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="float-left" htmlFor="exampleInputEmail1">
                                                Password
                                            </label>
                                            <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                                        </div>
                                        <div className="col-md-12 text-center mb-3">
                                            <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">
                                                Create Your Grizzly Account
                                            </button>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div className="form-group">
                                                <p className="text-center">
                                                    <a href="#" id="signin">
                                                        Already have an account?
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End of SignUp in Model*/}
                </nav>
            </div>

        );
    }
}
const mapDispatchToProps = {
    fetchSearchResults,
    setUserData
};
const mapStateToProps = state => ({
    userData: state.posts.userData
});

export default connect(
    null,
    mapDispatchToProps
)(withRouter(Header));
