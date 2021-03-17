import React, { Component } from "react";
import Post from "Screens/post";
import Holding from "Screens/holding/index";
import About from "Screens/about/index";
import Countries from "Screens/countries/index";
import Login from "Screens/login/index";
import Messages from "Screens/messages/index";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
class Routermain extends Component {
    render() {
        return (
            <Router basename={'/'}>
                <div>
                    <Switch>
                        <Route exact path="/" render={(props) => <Holding {...props} />} />
                        <Route exact path="/login" render={(props) => <Login {...props} />} />
                        <Route exact path="/about" render={(props) => <About {...props} />} />
                        <Route exact path="/countries" render={(props) => <Countries {...props} />} />
                        <Route exact path="/add_posts" render={(props) => <Post {...props} />} />
                        <Route exact path="/messages" render={(props) => <Messages {...props} />} />
                        <Route path="*" render={(props) => <Login {...props} />} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Routermain; 
