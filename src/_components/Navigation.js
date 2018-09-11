import React, {Component} from 'react';
import './Navigation.css';

// import '../../bootstrap/css/bootstrap.min.css';

import GrizzLogo from './grizz-logo.png';

class Navigation extends Component {

    constructor(props) {
        super(props);
    }

    buttonstyle = {
        borderRadius: 40,
        width: 130
    };

    navStyle = {
        "box-shadow": "0 14px 28px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.10)",
        height: "80px"
    };

    render(){
        return(
            <nav className="navbar navbar-toggleable-md" style={this.navStyle}>
                <a className="navbar-brand" href="/">
                    <img src={GrizzLogo} width="40" height="40"
                         className="d-inline-block align-top" alt=""/>
                        GRIZZLY STORE
                </a>

                <form>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search...." aria-label="Search"/>

                </form>
                <div>
                        <button style={this.buttonstyle} className="btn btn-outline-info m-2">Login</button>
                        <button style={this.buttonstyle} className="btn btn-outline-info m-2">SignUp</button>
                </div>
            </nav>
        );
    }
}

    export default Navigation;