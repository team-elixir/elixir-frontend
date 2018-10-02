import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {fetchPosts, fetchProducts, fetchSubCategories} from "../../actions/postActions";
import { connect } from "react-redux";
import {Link,withRouter} from 'react-router-dom'

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
    };

    returnCategoryProducts = (e) => {
        console.log(e.target.value);
        this.props.fetchSubCategories(e.target.value)

    };

    // componentDidMount() {
    //     this.props.fetchSubCategories();
    // }

    componentDidUpdate(prevProps){
        if(prevProps.subCatArray != this.props.subCatArray)
        {
            this.props.fetchProducts(this.props.subCatArray);
        }

    }


    render() {
        return (
            <div className="text-center m-3 mt-4">
                <ButtonGroup className="d-flex justify-content-center">
                    <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret className="m-2" style={{borderRadius: 50, width: 200}}>
                            Shop by Category
                        </DropdownToggle>
                        <DropdownMenu   >
                            <DropdownItem>Shop Phones</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Shop Watches</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Shop Camera</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Shop Kitchen appliances</DropdownItem>
                            <DropdownItem divider />

                        </DropdownMenu>
                    </Dropdown>

                    <Link to={`/addShopping`}><Button style={this.styles} className= " btn btn-outline-info m-2" >Shop all</Button></Link>
                    <Button style={this.styles} className= " btn btn-outline-info m-2" value="electronic" onClick={this.returnCategoryProducts}>Electronics</Button>
                    <Button style={this.styles} className= " btn-outline-info m-2" value="electronic" onClick={this.returnCategoryProducts}>Home Appliances</Button>
                    <Button style={this.styles} className= " btn-outline-info m-2" value="electronic" onClick={this.returnCategoryProducts}>Music Accessories</Button>
                    <Button style={this.styles} className= " btn-outline-info m-2" value="electronic" onClick={this.returnCategoryProducts}>Apparel</Button>
                    <Button style={this.styles} className= " btn-outline-info m-2" value="electronic" onClick={this.returnCategoryProducts}>Footwear</Button>
                </ButtonGroup>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchPosts, fetchProducts, fetchSubCategories
};

const mapStateToProps = state => ({
    subCatArray: state.posts.subCategories,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RowCategory));
