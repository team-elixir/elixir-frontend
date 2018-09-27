import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
//import productimg from "./product.jpg";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allposts: []
    };
  }

  componentWillMount() {
    //this.props.fetchPosts();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.posts !== this.props.posts) {
      console.log(this.props.posts);
      this.setState({ allposts: this.props.posts });
    }
  }

  render() {
    let posts = [];
    if (this.state.allposts.length !== 0) {
      posts = this.state.allposts;
      console.log(posts);
    }

    const postItems = posts.map(post => (

        <div key={post.product.id} className="card p-3 text-center">

                <img className="card-img-top" src={post.list[0]} alt="image" />
                <div className="card-body">
                    <h6 className="card-title">{post.product.name}</h6>
                    <p className="card-text">{post.product.brand}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    ));
    return (
      <div>
        <div className="container">
              <div className="card-columns">
            {postItems}
              </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps)(Posts);
