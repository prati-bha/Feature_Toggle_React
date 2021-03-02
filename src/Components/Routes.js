import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import { SignUp } from '../Components/SignUp';
import Login from '../Components/Login';
import Dashboard from '../Components/Dashboard';
import PrivateRoute from '../Components/PrivateRoute';
import LoginRoute from '../Components/LoginRoute';
import Profile from '../Components/Profile';
import AboutUs from "./AboutUs";
import TandC from "./TandC";
import PrivacyPolicy from "./privacyPolicy";
import Logout from "./Logout";
import AppLanding from "./AppLanding";
import Menu from "./NavigationBar";
const Routes = () => {

    return (
        <div>
            <Menu />
            <Router>
                <Switch>
                    <Route exact path="/"><AppLanding /></Route>
                    <LoginRoute path="/signup"><SignUp /></LoginRoute>
                    <LoginRoute path="/login"><Login /></LoginRoute>
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/tandc" component={TandC} />
                    <Route path="/privacypolicy" component={PrivacyPolicy} />
                    <LoginRoute path="/profile"><Profile /></LoginRoute>
                    <Route path="/logout" component={Logout} />
                    <Route path="*"><Login /></Route>
                </Switch>
            </Router >
        </div>

    )
}

export default Routes