import React, {Component} from 'react';

import withRouter from "react-router/es/withRouter";

class profiles extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               Hello
            </div>
        );
    }
}

export default withRouter(profiles);