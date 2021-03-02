import React, { } from 'react';
import '../App.scss';
import { FeatureToggle } from 'unleash-client-react';
const Dashboard = () => {


    return (
        <FeatureToggle featureName="Dashboard">
            <h1 className="App">Hello {localStorage.getItem("userName")}</h1>
        </FeatureToggle >
    )
}
export default Dashboard