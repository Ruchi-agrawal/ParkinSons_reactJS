import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Post from "Screens/post";
import Holding from "Screens/holding/index";
import About from "Screens/about/index";
import Countries from "Screens/countries/index";
import Login from "Screens/login/index";
import Messages from "Screens/messages/index";

class Routermain extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Post} />
                <Route exact path="/holding" component={Holding} />
                <Route exact path="/about" component={About} />
                <Route exact path="/countries" component={Countries} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/messages" component={Messages} />
            </Switch>
        )
    }
}
export default Routermain; 
