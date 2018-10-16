import React, { Component } from "react";

import withRouter from "react-router/es/withRouter";
import connect from "react-redux/es/connect/connect";
import { getUserDetails,updateUserDetails } from "../../actions/postActions";

import Loading from "../Loading/Loading";

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
          <b>Name :   </b>
            {this.props.userData.loginName}

        </p>

        <p>
          <b> Email :   </b>
            {this.props.userData.userEmail}

        </p>
        {/*({this.props.userData.})*/}
        <p>
          <b>Address :  </b>
            {(this.props.userDetails.address!=="")?
            (this.props.userDetails.address) :
                (addressPlease)}
        </p>
          <p>
              <b>Contact Number :  </b>
              {(this.props.userDetails.contactNum!=="")?
                  (this.props.userDetails.contactNum) :
                  (contactPlease)}
          </p>

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
    );
  }
  render() {
    if (this.props.userData.loginName === "") {
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
  getUserDetails,
  updateUserDetails
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
