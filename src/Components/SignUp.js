import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../App.scss';
import { signupApi } from '../Constants/urlConstants';
import apiRequest from '../Requests/apiRequestFunction';

const SignUp = () => {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const data = { username: userName, password: passWord }
    const handleClick = async (event) => {

        const apiData = await apiRequest(signupApi, { data, method: "POST" });
        if (apiData.message.status === 0) {
            console.log(apiData.message)
            alert(apiData.message.message);
            setUserName("");
            setPassWord("");
        }
        if (apiData.status === 1) {
            history.push('/login');
        }

    }

    return (
        <div>
            <div className="formCenter">
                <div className="signUpContainer">
                    <div className="signUpHeader">Sign Up</div>
                    <div className="signUpContent">
                        <div>
                            Username: &nbsp;&nbsp;&nbsp;
                        <input type="text" className="inputDesign" value={userName} onChange={(event) => { setUserName(event.target.value) }} />
                        </div>
                        <div>
                            Password: &nbsp;&nbsp;&nbsp;
                        <input type="password" className="inputDesign" value={passWord} onChange={(event) => { setPassWord(event.target.value) }} />
                        </div>
                        <button disabled={userName === '' || passWord === ''} className="buttonDesign" onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {
    SignUp,
}