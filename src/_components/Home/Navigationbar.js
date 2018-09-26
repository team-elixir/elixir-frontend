import React from "react";
import grizzlogo from "../../assets/images/grizz-logo.png"

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
        "box-shadow": "0 14px 25px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0)",
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
                        <div class="mx-auto" style={{ width: 550 }}>
                            <Form>
                                <FormGroup style={{paddingTop:18}}>
                                    <Input style={{ borderRadius: 50, height: 32}} type="text" name="search" id="exampleSearch" placeholder="Search . . ."/>
                                </FormGroup>
                            </Form>
                        </div>
                        <div>
                            <Nav className="mx-auto" navbar>
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
