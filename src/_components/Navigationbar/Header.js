import React, {Component} from 'react';
import grizzlogo from "./grizz-logo.png";

class Header extends React.Component{
    styles = {
        borderRadius: 30,
        width: 100,
    };
    navStyle = {
        "box-shadow": "0 3px 6px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0)",
        height: "80px"
    };
    navbrandStyle ={
        fontFamily: "\"Comic Sans MS\", cursive, sans-serif"
    };

    render(){
        return(

            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/" style={this.navbrandStyle}><strong>Grizzly</strong>
                <img src={grizzlogo} style={{height: 50}} /> <strong>Store</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="mx-auto align-items-center" style={{width: "50%"}}>
                        <div className="input-group mb-3" style={{paddingTop: "13px"}}>
                            <input type="text" className="form-control rounded-left"
                                   placeholder="what you are looking to buy today" aria-label=""
                                   aria-describedby="basic-addon1"/>
                            <div className="input-group-prepend">
                                <button className="btn-primary rounded-right" type="submit" style={{width: "50px"}}><i
                                    className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button style={this.styles} className="btn btn-outline-info m-2" type="submit" data-toggle="modal" data-target="#loginModal">Login</button>
                        <button style={this.styles} className="btn btn-outline-info m-2" type="submit" data-toggle="modal" data-target="#signupModal">SignUp</button>
                    </div>

                    { /* Start of Log in Model*/ }
                   <div>
                        <div className="limiter modal fade" id="loginModal">
                            <div className="container-login100">
                                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                                    <form className="login100-form validate-form">
					<span className="login100-form-title p-b-49">
						<strong>Login</strong>
					</span>
                                        <div className="wrap-input100 validate-input m-b-23" data-validate="Username is required">
                                            <span className="label-input100">Username</span>
                                            <input className="input100" type="text" name="username"
                                                   placeholder="Type your username"/>
                                            <span className="focus-input100" data-symbol="&#xf206;"></span>
                                        </div>

                                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                                            <span className="label-input100">Password</span>
                                            <input className="input100" type="password" name="pass"
                                                   placeholder="Type your password"/>
                                            <span className="focus-input100" data-symbol="&#xf190;"></span>
                                        </div>

                                        <div className="text-right p-t-8 p-b-31">
                                            <a href="#">
                                                Forgot password?
                                            </a>
                                        </div>

                                        <div className="container-login100-form-btn">
                                            <div className="wrap-login100-form-btn">
                                                <div className="login100-form-bgbtn"></div>
                                                <button className="login100-form-btn">
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                        <div className="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Sign Up Using
						</span>
                                        </div>
                                        <div className="flex-c-m">
                                            <a href="#" className="login100-social-item bg3">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </div>

                                        <div className="flex-col-c p-t-155" style={{marginTop: "-100px"}}>
                                            <a href="#" className="txt2">
                                                Or Sign Up here
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    { /* End of Log in Model*/ }

                    { /* Start of SignUp in Model*/ }
                    <div>
                        <div className="limiter modal fade" id="signupModal">
                            <div className="container-login100">
                                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                                    <form className="login100-form validate-form">
					<span className="login100-form-title p-b-49">
						<strong>Create account</strong>
					</span>
                                        <div className="row">
                                            <div className="wrap-input100 validate-input m-b-23 col-sm-5" data-validate="Username is required">
                                                <span className="label-input100">First Name</span>
                                                <input className="input1000" type="text" name="username"
                                                       placeholder="your firstname"/>
                                            </div>
                                            <div className="col-sm-1">

                                            </div>
                                            <div className="wrap-input100 validate-input m-b-23 col-sm-6" data-validate="Username is required">
                                                <span className="label-input100">Last Name</span>
                                                <input className="input1000" type="text" name="username"
                                                       placeholder="your lastname"/>
                                            </div>
                                        </div>
                                        <div className="wrap-input100 validate-input m-b-23" data-validate="Username is required">
                                            <span className="label-input100">Username</span>
                                            <input className="input100" type="text" name="username"
                                                   placeholder="Type your username"/>
                                            <span className="focus-input100" data-symbol="&#xf206;"></span>
                                        </div>

                                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                                            <span className="label-input100">Password</span>
                                            <input className="input100" type="password" name="pass"
                                                   placeholder="Type your password"/>
                                            <span className="focus-input100" data-symbol="&#xf190;"></span>
                                        </div>

                                        <div className="text-right p-t-8 p-b-31">
                                            <p>
                                                By creating an account, you agree that you have read and accepted our Conditions of Use and Privacy Notice.
                                            </p>
                                        </div>

                                        <div className="container-login100-form-btn">
                                            <div className="wrap-login100-form-btn">
                                                <div className="login100-form-bgbtn"></div>
                                                <button className="login100-form-btn">
                                                    Create your grizzly account
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex-col-c p-t-155" style={{marginTop: "-100px"}}>
						<span className="txt1 p-b-17">
							Already have an account
						</span>
                                            <a href="#" className="txt2">
                                                Login here
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    { /* End of Log in Model*/ }
                </div>
            </nav>
        );
    }
}

export default Header;