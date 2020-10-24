/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim
* Edited by Tinson Lai

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { auth } from "../firebase";
import AuthNavbar from "./component/navbar/AuthNavbar";
import Login from "./component/Login";
import Register from "./component/Register";

class Auth extends React.Component {
    /**
     * @type {React.RefObject<HTMLDivElement>}
     */
    mainContent = React.createRef();

    componentDidMount() {
        this.resetScroll()
        document.body.classList.add("bg-default");
    }

    componentWillUnmount() {
        document.body.classList.remove("bg-default");
    }

    componentDidUpdate(e) {
        if (e.history.pathname !== e.location.pathname)
            this.resetScroll()
    }

    resetScroll() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.mainContent.current.scrollTop = 0;
    }

    render() {
        const { user } = auth;
        return <>
            <div className="main-content" ref={this.mainContent}>
                <AuthNavbar />
                <Switch>
                    <Route path="/login" render={props => user?.emailVerified ? <Redirect to="/dashboard" /> : <Login {...props}/>} key={0} />
                    <Route path="/register" render={props => user ? user.emailVerified ? <Redirect to="/dashboard" /> : <Redirect to="/login" /> : <Register {...props}/>} key={1} />
                    <Redirect from="/" to="/login" />
                </Switch>
            </div>
        </>;
    }
}

export default Auth;
