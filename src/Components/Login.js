import React, { useState } from 'react';
import '../App.scss';
import { useHistory } from "react-router-dom";
import { loginApi } from '../Constants/urlConstants';
import apiRequest from '../Requests/apiRequestFunction';
import { FeatureToggle } from 'unleash-client-react';


const Login = () => {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const data = { username: userName, password: passWord }
    const handleClick = async (event) => {
        event.preventDefault();
        const apiData = await apiRequest(loginApi, { data, method: "POST" });
        if (apiData.status === 0) {
            alert(apiData.message)
        }
        else {
            localStorage.setItem('token', apiData.token);
            localStorage.setItem('userId', apiData.userWithoutpassword._id);
            localStorage.setItem('userName', apiData.userWithoutpassword.username);
            history.push('/dashboard');
        }
    }


    return (
        <FeatureToggle featureName="login">

            <div className="formCenter">
                <div className="signUpContainer">
                    <div className="signUpHeader">Login</div>
                    <div className="signUpContent">
                        <div>
                            Username: &nbsp;&nbsp;&nbsp;
                <input type="text" className="inputDesign" value={userName} onChange={(event) => { setUserName(event.target.value) }} />
                        </div>
                        <div>
                            Password: &nbsp;&nbsp;&nbsp;
                <input type="password" className="inputDesign" value={passWord} onChange={(event) => { setPassWord(event.target.value) }} />
                        </div>
                        <button disabled={userName === '' || passWord === ''} className="buttonDesign" type="submit" onClick={handleClick}>Submit</button>

                    </div>
                </div>
            </div>
        </FeatureToggle>
    )
}
export default Login