import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { fetchPosts } from "../../actions/postActions";
import { connect } from "react-redux";


class RowCategory extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    styles = {

        borderRadius: 50,
        width: 180

    };
    returnProducts = () => {
        this.props.fetchPosts();
        console.log("I clicked");
    };

    render() {
        return (
            <div className="text-center m-3">
                <ButtonGroup className="d-flex justify-content-center">
                    <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret className="m-2" style={{borderRadius: 50, width: 200}}>
                            Shop by Category
                        </DropdownToggle>
                        <DropdownMenu   >
                            <DropdownItem>Electronics</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Clothes</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Button style={this.styles} className= " btn btn-outline-info m-2" onClick={this.returnProducts}>Shop all</Button>
                    <Button style={this.styles} className= " btn btn-outline-info m-2">Electronics</Button>
                    <Button style={this.styles} className= " btn-outline-info m-2">Home Appliances</Button>
                    <Button style={this.styles} className= " btn-outline-info m-2">ories</Button>
                    <Button style={this.styles} className= " btn-outline-info m-2">Apparel</Button>
                    <Button style={this.styles} className= " btn-outline-info m-2">Footwear</Button>
                </ButtonGroup>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchPosts
};
export default connect(
    null,
    mapDispatchToProps
)(RowCategory);
