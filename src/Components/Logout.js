import React from 'react';
import { Redirect } from 'react-router-dom'
import '../App.scss';

const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    return (
        <Redirect to={{ pathname: '/' }} />
    )
}
export default Logout