import React, { Component } from "react";

import withRouter from "react-router/es/withRouter";
import connect from "react-redux/es/connect/connect";
import { getUserDetails } from "../../actions/postActions";

import Loading from "../Loading/Loading";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true
    };
  }

  componentDidMount() {
    if (this.props.userData.loginName !== "") {
      this.props.getUserDetails(this.props.userData.userEmail);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.userData.loginName !== "") {
      if (prevProps.userData.loginName !== this.props.userData.loginName) {
        console.log(
          "ComponentDidUpdate has this value " + this.props.userData.loginName
        );
        this.props.getUserDetails(this.props.userData.userEmail);
      }
    }
  }
  // }
  // shouldComponentUpdate(prevProps)
  // {
  //     // return !(this.props.userData.userEmail===prevProps.userData.userEmail)
  // }
  display() {
    return (
      <div>
        {/*DEBUGGING BELOW*/}
        {/*{(this.props.userEmail==undefined)?(alert("Please Login")):(alert("Loggedn in as"+this.props.userEmail))*/}
        {console.log("hello" + this.props.userData.loginName)}
        {this.props.userData.loginName == ""
          ? console.log("Empty")
          : console.log("Value was defined")}
        {/*DEBUGGING ENDS*/}
        {/*{this.props.getUserDetails(this.props.userData.userEmail)}*/}

        <h1>Details</h1>
        <p>
          <b>Name :</b>
          {this.props.userData.userEmail}
        </p>

        <p>
          <b> Email :</b> {this.props.userData.loginName}
        </p>
        {/*({this.props.userData.})*/}
        <p>
          <b>Address: </b>
          {this.props.userDetails.address}
        </p>
        <p>
          <b>ContactNum: </b>
          {this.props.userDetails.contactNum}
        </p>
      </div>
    );
  }
  render() {
    if (this.props.userData.loginName == "") {
      // on page reload(via browser) initiaaly , it's
      //value is set to "" , but it gets it's value back in a second
      <Loading />;
      console.log("Loading was called");
      return null;
    } else return this.display();
  }
}

const mapStateToProps = state => ({
  userData: state.posts.userData,
  userDetails: state.posts.userDetails
});
const mapDispatchToProps = {
  getUserDetails
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
