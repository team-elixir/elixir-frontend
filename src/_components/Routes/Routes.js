import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "../Home/Home";
import Products from "../Products/Products";


class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                <Route path ="/" component={Home} exact/>
                <Route path ="/product" component={Products}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;
