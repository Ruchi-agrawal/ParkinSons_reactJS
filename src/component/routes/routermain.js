import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Page1 from "./../../Screens/Page1";
import Holding from "./../../Screens/holding/index";
import About from "./../../Screens/about/index";
import Countries from "./../../Screens/countries/index";
import Login from "./../../Screens/login/index";

class Routermain extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Page1} />
                <Route exact path="/holding" component={Holding} />
                <Route exact path="/about" component={About} />
                <Route exact path="/countries" component={Countries} />
                <Route exact path="/login" component={Login} />
            </Switch>
        )
    }
}
export default Routermain; 
