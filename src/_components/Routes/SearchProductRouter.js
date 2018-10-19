import React, { Component } from "react";

import connect from "react-redux/es/connect/connect";

import { fetchSubCategories } from "../../actions/postActions";

import Posts from "../CategoryProducts/Posts";
import Post from "../CategoryProducts/Post";
import {
  searchPriceSorting,
  searchProductAction,
  searchProductAction1
} from "../../actions/searchProductAction";

class SearchProductRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: ""
    };
  }
  // Load the data after render
  componentDidMount() {
    if (this.props.match.params.name !== "") {
      this.props.searchProduct(this.props.match.params.name);
    }
  }
  a;
  // update data after different key search input
  componentDidUpdate(prevProps) {
    let currentSearchKey = this.props.match.params.name;
    let prevSearchKey = prevProps.match.params.name;

    // Update during key change in the search box
    if (currentSearchKey !== prevSearchKey) {
      // update according the search search box list
      if (this.state.sortValue !== "" && this.state.sortValue !== "Relevance") {
        this.props.searchSorting(
          this.state.sortValue,
          this.props.match.params.name
        );
      }
      // update default select box list
      else {
        this.props.searchProduct(this.props.match.params.name);
      }
    }
  }
  // update base on specific key search and sorting list
  selectSorting(event) {
    let searchKey = this.props.match.params.name;
    let sortKey = event.target.value;
    // keep tracking sorting value
    this.setState({ sortValue: sortKey });

    if (searchKey !== "" && sortKey !== "" && sortKey !== "Relevance") {
      this.props.searchSorting(sortKey, searchKey);
    }
    // update data to default value
    else {
      this.props.searchProduct(this.props.match.params.name);
    }
  }

  render() {
    // initial data
    let dataResult = this.props.dataState.searchResult1;
    // prepare data for displaying
    let dataItems;
    if (dataResult.length > 0) {
      dataItems = dataResult.map(post => (
        <Post key={post.product.id} data={post} />
      ));
    }
    return (
      <div>
        <div className="container mt-lg-5">
          <div className="row">
              <div className="align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">

              </div>
              <div className="align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">

              </div>
          <div className="align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <p className="m-3">Sort By: </p>
            <select onChange={this.selectSorting.bind(this)}>
              <option>Relevance</option>
              <option value="Low">Price: Low to High</option>
              <option value="High">Price: High to Low</option>
            </select>
          </div>
          {/*Displaying*/}
          <div className="card-columns">{dataItems}</div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataState: state.searchProduct
});

const mapDispatchToProps = {
  searchProduct: searchProductAction,
  searchSorting: searchPriceSorting
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProductRouter);
