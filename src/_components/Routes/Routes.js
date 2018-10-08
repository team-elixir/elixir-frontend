import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from "../Home/Home";
import Products from "../Products/Products";
import PageNotFound from "../Loading/PageNotFound";
import Loading from "../Loading/Loading";
import Posts from "../Posts";
import ProductsSearch from '../Home/ProductsSearch';
import SubCategories from '../SubCategories';
import Cart from "../Cart";


class Routes extends Component {
    render() {
        return (
                <Switch>
                    {/*Default domain redirect to /home*/}
                    <Route exact path="/" render={() => (
                        <Redirect to="/home"/>
                    )}/>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/product/view/:id" component={Products}/>
                    <Route path="/loading" component={Loading}/>
                    <Route path="/category/:name" component={SubCategories} />
                    <Route path="/cart" component={Cart}/>
                    <Route path="*" component={PageNotFound} />
                </Switch>
        );
    }
}

export default Routes;
