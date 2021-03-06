import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchAllCat, fetchAllSub, fetchPosts, fetchProducts, fetchSubCategories} from "../../actions/postActions";
import Post from "./Post";
import Cart from "../Cart/Cart";
import bg from "./bg.jpeg";
import {Link} from "react-router-dom";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allposts: []
        };
    }

    componentDidMount() {
        this.props.fetchAllCat();
    }

    componentDidUpdate(prevProps) {

        if (prevProps.data !== this.props.data) {
            console.log(this.props.data);
            console.log("Email Posts is "+ this.props.userData.userEmail)
            if(this.props.data.length === 0){
                console.log("Calling fetch posts from here.")
                this.props.fetchPosts();
            }
            else
                this.props.fetchProducts(this.props.data);
            this.setState({ allposts: this.props.posts });
        }

    }

    render() {

        const catArray = this.props.catList;

        let posts = [];
        if (this.props.posts.length !== 0) {
            posts = this.props.posts;
        }

        const postItems = posts.map(post => (

            <Post key ={post.product.id} data={post}/>
        ));
        return (
            <div >
                <div className="row" styles="background-image:{bg}">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <h2 style={{marginTop:"35px"}}>All Products</h2>
                    </div>
                </div>
                <div className="row m-4">
                    <div className=" align-items-center col-12 col-md-5 col-lg-3 bg-light mt-3">
                        <div>
                            <h4 style={{marginTop: "50px"}}>Shop by Sub-categories</h4>

                            {catArray.map(category => (
                            <div className="radio ml-lg-3">
                                <Link to={"/category/" + category.name} className="text-dark" style={{fontSize: "20px"}}><strong>{category.name}</strong></Link>
                                <ul style={{listStyle:"none"}}>
                                {category.subcategories.map(subCategory => (
                                <li style={{marginLeft:"-25px"}}><Link to={"/subCategory/" + subCategory.subId} type = "radio" className="text-dark">{subCategory.name}</Link></li>
                                    ))}
                                    </ul>

                            </div>
                            ))}
                        </div>

                        {/*<div>*/}
                            {/*<h5 style={{marginTop: "250px"}}>Refine By</h5>*/}
                        {/*</div>*/}


                    </div>

                    <div className="col-12 col-md-7 col-lg-9">
                        <div className="row bg-light m-2">
                            <div className="align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">

                            </div>
                            <div className="align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">

                            </div>
                            <div className="align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <p className="m-3">Sort By: </p>
                                <select>
                                    <option value="title" >Title</option>
                                    <option value="title" >Brand</option>
                                    <option value="title" >Price: Low to High</option>
                                    <option value="title" >Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="container mt-lg-4">
                            <div className="row">
                            {/*<div className="card-columns">*/}
                                {postItems}
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    posts: state.posts.items,
    userData:state.posts.userData,
    catList: state.posts.catList
});

const mapDispatchToProps = {
    fetchPosts,
    fetchProducts,
    fetchSubCategories,
    fetchAllCat
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
