import React from "react";
import grizzlogo from "./grizz-logo.png";

import {Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, Button, Form, Input, FormGroup} from "reactstrap";

class Navigationbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    styles = {
        borderRadius: 30,
        width: 100,
    };

    navStyle = {
        "box-shadow": "0 3px 6px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0)",
        height: "80px"
    };

    render() {
        return (
            <div>
                <Navbar color="white" light expand="md" style={this.navStyle}>
                    <div>
                        <NavbarBrand href="/" style={{ marginleft: 5, marginRight: -10 }}><strong>Grizzly</strong>
                            <img src={grizzlogo} className="logo" alt="logo" style={{ height: 50}}/> <strong>Store</strong>
                        </NavbarBrand>
                    </div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <div class="mx-auto" style={{width: "50%"}}>
                            <div className="input-group mb-3" style={{paddingTop: "13px"}}>
                                <input type="text" className="form-control rounded-left" placeholder="what you are looking to buy today" aria-label="" aria-describedby="basic-addon1"/>
                                <div className="input-group-prepend">
                                    <button className="btn-primary rounded-right" type="submit" style={{width: "50px"}}><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Nav className="mx-auto align-items-center" navbar>
                                <Button style={this.styles} className="btn btn-outline-info m-2" size="sm">Login</Button>
                                <Button style={this.styles} className="btn btn-outline-info m-2" size="sm">SignUp</Button>
                            </Nav>
                        </div>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigationbar;