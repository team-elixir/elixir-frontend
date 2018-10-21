import React, { Component } from "react";
import Posts from "./Posts";

class SubCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCatArray : [],
    }
  }

  componentDidMount(){
    if(typeof this.props.match.params.id !== "undefined")
    {
      const temp = [this.props.match.params.id];
      this.setState({subCatArray: temp});
    }
  }


  componentDidUpdate(prevProps){
      if(typeof this.props.match.params.id !== "undefined") {
          if (prevProps.match.params.id !== this.props.match.params.id) {
              const temp = [this.props.match.params.id];
              this.setState({subCatArray: temp});
          }
      }
  }

  render() {
    const subCatArray = [this.props.match.params.id];
    console.log(this.props.match.params.id);

    return (
      <div>
        <Posts data={this.state.subCatArray} />
      </div>
    );
  }
}

export default SubCategories;
