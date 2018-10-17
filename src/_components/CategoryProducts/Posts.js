import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchAllCat, fetchAllSub, fetchPosts, fetchProducts, fetchSubCategories} from "../../actions/postActions";
import Post from "./Post";
import Cart from "../Cart/Cart";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allposts: []
        };
    }

    componentDidMount() {
        // if(this.props.data.length === 0){
        //     console.log("Calling fetch posts from here.")
        //     this.props.fetchPosts();
        // }
        // else
        //   this.props.fetchProducts(this.props.data);
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

        let posts = [];
        if (this.props.posts.length !== 0) {
            posts = this.props.posts;
        }

        const postItems = posts.map(post => (

            <Post key ={post.product.id} data={post}/>
        ));
        return (
            <div>
                <div className="row m-4">
                    {/*<div className=" align-items-center col-12 col-md-4 col-lg-3 bg-light mt-3">*/}
                        {/*<div>*/}
                            {/*<h5 style={{marginTop: "50px"}}>Shop by sub category</h5>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                            {/*<h5 style={{marginTop: "250px"}}>Refine By</h5>*/}
                        {/*</div>*/}


                    {/*</div>*/}

                    {/*<div className="col-12 col-md-8 col-lg-9">*/}
                        {/*<div className="row bg-light m-3">*/}
                            {/*<div className="align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">*/}

                            {/*</div>*/}
                            {/*<div className="align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">*/}

                            {/*</div>*/}
                            {/*<div className="align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">*/}
                                {/*<p className="m-3">Sort By: </p>*/}
                                {/*<select>*/}
                                    {/*<option value="title" >Title</option>*/}
                                    {/*<option value="title" >Brand</option>*/}
                                    {/*<option value="title" >Price: Low to High</option>*/}
                                    {/*<option value="title" >Price: High to Low</option>*/}
                                {/*</select>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <div className="container-fluid mt-lg-5">
                            <div className="card-columns">
                                {postItems}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    userData:state.posts.userData
});

const mapDispatchToProps = {
    fetchPosts,
    fetchProducts,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
