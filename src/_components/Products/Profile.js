import React, {Component} from 'react';

import withRouter from "react-router/es/withRouter";
import connect from "react-redux/es/connect/connect";
import {getCategory} from "../../actions/productActions";

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <h1></h1>
            </div>
        );
    }
}

const mapStateToProps = state =>({


})
export default connect(mapStateToProps)(Profile);