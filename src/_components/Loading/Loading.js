import React, {Component} from 'react';
import '../../assets/css/loading.css'

class Loading extends Component {
    render() {
        return (

            <div className="container">
                <div className="row justify-content-start">
                    <header>
                        <h1>Please wait while product is loading.</h1>
                    </header>
                    <div id="loader-wrapper">
                        <div id="loader"> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;