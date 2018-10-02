import React, {Component} from 'react';
import '../../assets/css/loading.css'
import {Link, withRouter} from "react-router-dom";

class Loading extends Component {
    render() {
        return (

            <div className="container" id='loading'>
                <div id="loader"><br/></div>
                <div className="loading">
                    <header>
                        <h1>Please wait while product is loading.</h1>
                    </header>
                    <Link to="/">Back to homepage</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Loading);