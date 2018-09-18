import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import '../Userlogin.css';

class Userlogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal mod isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{width: "370px"}}>
                    <div className="custom-dialog">
                    <ModalHeader className="header" toggle={this.toggle} close={closeBtn}>Login</ModalHeader>
                    <div className="text-center">
                        <ModalBody>
                            <div className="d-flex justify-content-center" style={{}}>
                            <Form style={{width:300}}>
                                <FormGroup>
                                    <Input style={{borderRadius:40, backgroundColor:"whitesmoke"}} type="email" name="email" id="exampleEmail" placeholder="    Username" />
                                </FormGroup>
                                <FormGroup>
                                    <Input style={{borderRadius:40, backgroundColor:"whitesmoke"}} type="password" name="password" id="examplePassword" placeholder="    Password" />
                                </FormGroup>
                            </Form>
                            </div>
                            <div>
                                <Button className="shop" style={{borderRadius:20, width:140}} size="sm" color="primary">Shop</Button>
                            </div>
                            <p className="pass">Forgot Password?</p>
                            <div>
                                <hr/>
                                <Button color="white">Sign in with Google</Button>
                                <hr/>
                            </div>
                            <div>
                                <p>Not a member yet?</p>
                                <Button className="shop" color="primary" style={{marginTop:-15, borderRadius:20, width:140}} size="sm">SignUp</Button>
                            </div>
                        </ModalBody>
                    </div>
                    <br/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Userlogin;