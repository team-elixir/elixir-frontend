import React, { Component } from "react";
import Posts from "../Home/Posts";

class SubCategories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const subCatArray = [this.props.match.params.id];
    console.log(this.props.match.params.id);

    return (
      <div>
        <Posts data={subCatArray} />
      </div>
    );
  }
}

export default SubCategories;
