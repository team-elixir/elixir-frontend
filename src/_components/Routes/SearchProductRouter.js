import React, {Component} from 'react';

import connect from "react-redux/es/connect/connect";

import {fetchSubCategories} from "../../actions/postActions";
import Posts from "../Posts";
import {searchProductAction, searchProductAction1} from "../../actions/searchProductAction";
import Post from "../Post";

class SearchProductRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productData: [],
        }
    }

    componentDidMount() {

        if(this.props.match.params.name !== "")
        {
            this.props.searchProduct(this.props.match.params.name);


        }
        this.setState({productData: this.props.dataState.searchResult1});
    }
    componentDidUpdate(prevProps){

        if(this.props.match.params.name !== prevProps.match.params.name)
        {
            this.props.searchProduct(this.props.match.params.name);
        }
    }

    render() {
        let post1 = ['1','2'];
        let posts = this.props.dataState.searchResult1;
        let postItems;
        if (posts.length>0){
            postItems = posts.map(post => (
                <Post key ={post.product.id} data={post}/>
            ));
        }
        return (
            <div>

                <div className="container mt-lg-5">
                    <div className="align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">

                        <p className="m-3">Sort By: </p>
                        <select>
                            <option value="Relevance" >Relevance</option>
                            <option value="title" >Price: Low to High</option>
                            <option value="title" >Price: High to Low</option>
                        </select>
                    </div>
                    <div className="card-columns">
                        {postItems}
                    </div>
                </div>


                {/*<Posts data={post1}/>*/}
            </div>

        );
    }
}

const mapStateToProps = state => ({
    dataState: state.searchProduct,
});

const mapDispatchToProps = {
    searchProduct: searchProductAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProductRouter);
