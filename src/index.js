import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './Components/Routes';
import { UnleashProvider } from 'unleash-client-react';
import { unleashUrl } from './Constants/urlConstants';
ReactDOM.render(
    <UnleashProvider url={unleashUrl}
        context={{
            userId: localStorage.getItem('userId'),
        }}
        customStrategyExecutors={
            {
                'default': (par, executor) => {
                    return true;
                },
                'userWithId': (par, executor) => {
                    const userArray = par.userIds.split(',');
                    return (userArray.includes(executor.userId));
                },
            }}>
        <Routes />
    </UnleashProvider >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
