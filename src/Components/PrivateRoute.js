import React from 'react';
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = (props) => {
    return (!(localStorage.getItem('token')) ?
        <Redirect to={{ pathname: '/login' }} /> : <Route {...props} />);
};
export default PrivateRoute