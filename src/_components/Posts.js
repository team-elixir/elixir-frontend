import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Home/Header";
import RowCategory from "./Home/RowCategory";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "./Home/Footer"
import {fetchPosts, fetchSubCategories} from "../actions/postActions";
//import productimg from "./product.jpg";

class Posts extends Component {
  constructor(props) {
    super(props);
   // this.checkCategory = this.checkCategory.bind(this);

    this.state = {
      allposts: []
    };
  }

    componentWillMount() {
      const categoryName =  this.props.match.params;
      var  catName;
      // for (var proper in categoryName)
      // {
      //   alert(proper);
      //   break;
      // }
      for ( var proper in categoryName ) {
        catName=categoryName[proper];
        break;
      }
      if (catName=="all"){
        this.props.fetchPosts();
         // this.props.fetchSubCategories();
        }
      else if (catName!="all"){
        this.props.fetchSubCategories(catName);
    
      }
            
          
    }
  //   componentWillReceiveProps(nextProps) {
  //     if(nextProps.match.params !== this.props.match.params){
  //         // window.location.reload()
  //         const categoryName =  this.props.match.params;
  // var  catName;
  // for ( var proper in categoryName ) {
  //   catName=categoryName[proper];
  //   break;
  // }
  // if (catName=="all"){
  //   this.props.fetchPosts();
  //     this.props.fetchSubCategories();
  //   }
  // else if (catName=="Electronic"){
  //   this.props.fetchSubCategories(catName);

  // }
        
  //     }

  // }
  
  componentWillUpdate(nextProps) {
    if (nextProps.posts !== this.props.posts) {
      console.log(this.props.posts);
      this.setState({ allposts: this.props.posts });
      const categoryName =  this.props.match.params;
      var  catName;
      for ( var proper in categoryName ) {
        catName=categoryName[proper];
        break;
      }
      if (catName=="all"){
        this.props.fetchPosts();
         // this.props.fetchSubCategories();
        }
      else if (catName!="all"){
        this.props.fetchSubCategories(catName);
    
      }
    }
   
  }
// this function not used yet
//  checkCategory(){
//   const categoryName =  this.props.match.params;
//   var  catName;
//   for ( var proper in categoryName ) {
//     catName=categoryName[proper];
//     break;
//   }
//   if (catName=="all"){
//     this.props.fetchPosts();
//       this.props.fetchSubCategories();
//     }
//   else if (catName=="Electronic"){
//     this.props.fetchSubCategories(catName);

//   }
     
// }
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
                    <p className="card-text">${post.product.price}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    
                </div>
        </div>
    ));
    return (

      <div className="App">
      <Header />
      <RowCategory/>
      <div>
        <div className="container mt-lg-5" >
              <div className="card-columns">
              
            {postItems}
              </div>
        </div>
      </div>
      <Footer/>
     
            </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items, //all the product items
  subCatArray: state.posts.subCategories,

});

const mapDispatchToProps = {
  fetchPosts ,fetchSubCategories
};
export default connect(mapStateToProps,mapDispatchToProps)(Posts);
