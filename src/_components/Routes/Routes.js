import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from "../Home/Home";
import Products from "../Products/Products";
import PageNotFound from "../Loading/PageNotFound";
import Loading from "../Loading/Loading";


class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    {/*Default domain redirect to /home*/}
                    <Route exact path="/" render={() => (
                        <Redirect to="/home"/>
                    )}/>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/product" component={Products}/>
                    <Route path="/loading" component={Loading}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
