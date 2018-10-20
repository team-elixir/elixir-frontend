import React, { Component } from "react";

import withRouter from "react-router/es/withRouter";
import connect from "react-redux/es/connect/connect";
import { getUserDetails,updateUserDetails } from "../../actions/postActions";

import Loading from "../Loading/Loading";
import "../../assets/css/Profile1.css";
import * as firebase from "firebase";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true,
        addressState : '',
        contactNumState :''

    };
      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

  }
handleChange(e)
  {
  this.setState({[e.target.name]:e.target.value})
  }


onSubmit (e)
  {
      const dataToSend = {

          "name":this.props.userData.loginName,
          "email":this.props.userData.userEmail,
          "contactNum":this.state.contactNumState,
          "address":this.state.addressState

      }
      e.preventDefault();
      console.log("Submit button clicked");
      console.log("Login is "+dataToSend.name);
      this.props.updateUserDetails(this.props.userData.userEmail,dataToSend)

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
      const addressPlease="No Address Available , Please update";
      const  contactPlease ="No , contact Number , Please update";
    return (

      <div className="container emp-profile" style={{marginTop:"50px"}} id="profileBody">
        {/*DEBUGGING BELOW*/}
        {/*{(this.props.userEmail==undefined)?(alert("Please Login")):(alert("Loggedn in as"+this.props.userEmail))*/}
        {console.log("hello" + this.props.userData.loginName)}
        {this.props.userData.loginName == ""
          ? console.log("Empty")
          : console.log("Value was defined")}
        {/*DEBUGGING ENDS*/}
        {/*{this.props.getUserDetails(this.props.userData.userEmail)}*/}

          <div className="row">
              <div className="col-md-4">
                  <div className="profile-img">
                      <img
                          src={firebase.auth().currentUser.photoURL}
                          alt=""/>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="profile-head">
                      <h5>
                          <strong>
                          {this.props.userData.loginName}
                          </strong>
                      </h5>
                      <h6>
                          Web Developer and Designer
                      </h6>
                      <ul className="nav nav-tabs" id="myTab" role="tablist" style={{marginTop:"60px"}}>
                          <li className="nav-item">
                              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                 aria-controls="home" aria-selected="true">Details</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                 aria-controls="profile" aria-selected="false">Update info</a>
                          </li>
                      </ul>
                  </div>
              </div>
              {/*<div className="col-md-2">*/}
                  {/*<input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>*/}
              {/*</div>*/}
          </div>

          <div className="row">
              <div className="col-md-4">
              </div>
              <div className="col-md-8">
                  <div className="tab-content profile-tab" id="myTabContent">
                      <div className="tab-pane fade show active" id="home" role="tabpanel"
                           aria-labelledby="home-tab">
                          {/*<div className="row">*/}
                              {/*<div className="col-md-6">*/}
                                  {/*<label>User Id</label>*/}
                              {/*</div>*/}
                              {/*<div className="col-md-6">*/}
                                  {/*<p>{this.props.userData.userId}</p>*/}
                              {/*</div>*/}
                          {/*</div>*/}
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Name</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{this.props.userData.loginName}</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Email</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{this.props.userData.userEmail}</p>
                              </div>
                          </div>
                  <div className="row">
                      <div className="col-md-6">
                          <label>Address</label>
                      </div>
                      <div className="col-md-6">
                          <p>{(this.props.userDetails.address!=="")?
                              (this.props.userDetails.address) :
                              (addressPlease)}</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                          <label>Contact no.</label>
                      </div>
                      <div className="col-md-6">
                          <p>{(this.props.userDetails.contactNum!=="")?
                              (this.props.userDetails.contactNum) :
                              (contactPlease)}</p>
                      </div>
                  </div>
                      </div>
                      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <div className="container">

                              <h1>Update your details Below</h1>
                              <form>
                                  <div className = "col-xs-3">
                                      <input type="text" className="form-control" value={this.state.addressState}  name="addressState" onChange={this.handleChange} placeholder="Update Address"/><br/>
                                  </div>
                                  <div className="col-xs-3">
                                      <input type="text" value={this.state.contactNumState} className="form-control" name ="contactNumState" onChange={this.handleChange} placeholder="Update Contact Number"/>
                                  </div><br/>
                                  <div>
                                      <button type="button" onClick ={this.onSubmit} className="btn btn-primary">Update Details</button>
                                      <br/>
                                  </div>

                              </form>
                          </div>
                      </div>
                  </div>
              </div>

          </div>



      </div>
    );
  }
  render() {
    if (this.props.userData.loginName === "") {
      // on page reload(via browser) initiaaly , it's
      //value is set to "" , but it gets it's value back in a second

      console.log("Loading was called");
      return <Loading />;
    } else return this.display();
  }
}

const mapStateToProps = state => ({
  userData: state.posts.userData,
  userDetails: state.posts.userDetails
});
const mapDispatchToProps = {
  getUserDetails,
  updateUserDetails,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
