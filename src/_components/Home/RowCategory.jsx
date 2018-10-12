import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./Row.css";

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import {
    fetchPosts,
    fetchProducts,
    fetchSubCategories,
    fetchAllCat
} from "../../actions/postActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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

    componentDidMount() {
        this.props.fetchAllCat();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.catList !== this.props.catList) {
             // this.props.fetchAllCat();
        }

    }

    render() {
        const catArray = this.props.catList;
        return (

            <div className="text-center m-3 mt-4">
                <ButtonGroup className="d-flex justify-content-center">

                    {/*<ul className="navbar-nav mr-auto">*/}
                    {/*<li className="nav-item dropdown">*/}
                        {/*<a className="nav-link dropdown-toggle" id="dropdown1" data-toggle="dropdown"*/}
                           {/*aria-haspopup="true" aria-expanded="false">Dropdown1</a>*/}
                        {/*<ul className="dropdown-menu" aria-labelledby="dropdown1">*/}
                            {/*<li className="dropdown-item" href="#"><a>Action 1</a></li>*/}
                            {/*<li className="dropdown-item dropdown">*/}
                                {/*<a className="dropdown-toggle" id="dropdown1-1" data-toggle="dropdown"*/}
                                   {/*aria-haspopup="true" aria-expanded="false">Dropdown1.1</a>*/}
                                {/*<ul className="dropdown-menu" aria-labelledby="dropdown1-1">*/}
                                    {/*<li className="dropdown-item" href="#"><a>Action 1.1</a></li>*/}
                                    {/*<li className="dropdown-item dropdown">*/}
                                        {/*<a className="dropdown-toggle" id="dropdown1-1-1" data-toggle="dropdown"*/}
                                           {/*aria-haspopup="true" aria-expanded="false">Dropdown1.1.1</a>*/}
                                        {/*<ul className="dropdown-menu" aria-labelledby="dropdown1-1-1">*/}
                                            {/*<li className="dropdown-item" href="#"><a>Action 1.1.1</a></li>*/}
                                        {/*</ul>*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    {/*</li>*/}
                    {/*</ul>*/}

                    {/*<Dropdown style={{display: "none"}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>*/}
                        {/*<DropdownToggle caret className="m-2" style={{ borderRadius: 50, width: 200 }}>*/}
                            {/*Shop by Category*/}
                        {/*</DropdownToggle>*/}
                        {/*<DropdownMenu>*/}
                            {/*<DropdownItem>Shop Phones</DropdownItem>*/}
                            {/*<DropdownItem divider />*/}
                            {/*<DropdownItem>Shop Watches</DropdownItem>*/}
                            {/*<DropdownItem divider />*/}
                            {/*<DropdownItem>Shop Camera</DropdownItem>*/}
                            {/*<DropdownItem divider />*/}
                            {/*<DropdownItem>Shop Kitchen appliances</DropdownItem>*/}
                            {/*<DropdownItem divider />*/}
                        {/*</DropdownMenu>*/}
                    {/*</Dropdown>*/}


                    {/*<Link to="/category/all" style={this.styles} className=" btn btn-outline-info m-2">Shop all</Link>*/}
                    <Link to="/category/all" style={this.styles} className=" btn btn-outline-info m-2">Shop all</Link>
                    {catArray.map(category =>
                     <Link to={"/category/"+category.name} style={this.styles} className=" btn-outline-info m-2" >{category.name}</Link>
                    )}
                </ButtonGroup>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchPosts,
    fetchProducts,
    fetchSubCategories,
    fetchAllCat
};

const mapStateToProps = state => ({
    catList: state.posts.catList
    // subCatDet: state.posts.subCatDet,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RowCategory);
