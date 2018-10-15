import React, { Component } from "react";

import {
  fetchPosts,
  fetchProducts,
  fetchSubCategories,
  fetchAllCat
} from "../../actions/postActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class RowCategory extends Component {
  componentDidMount() {
    this.props.fetchAllCat();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.catList !== this.props.catList) {
      //   this.props.fetchAllCat();
    }
  }

  render() {
    const catArray = this.props.catList;
    console.log(catArray);
    return (
      <div id="fdw">
        <nav>
          <ul>
            <li>
              <Link to="/category/all">Shop all</Link>
            </li>
            {catArray.map(category => (
              <li>
                <Link to={"/category/" + category.name}>{category.name}</Link>
                <ul styles="display: none;" className="sub_menu">
                  <li className="arrow_top" />
                  {category.subcategories.map(subCategory => (
                    <li>
                      <Link to={"/subCategory/" + subCategory.subId}>
                        {subCategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
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
