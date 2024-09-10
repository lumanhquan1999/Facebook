import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./LoginHome.css";

const LoginHome = () => {
    const [signIN, setSignIN] = useState(true);
    const [signin_email, setSignin_email] = useState(null);
    const [signin_password, setSignin_password] = useState(null);
    const [signup_name, setSignup_name] = useState(null);
    const [signup_email, setSignup_email] = useState(null);
    const [signup_password, setSignup_password] = useState(null);

    const switchPanel = () => {
        if (signIN)
            setSignIN(false);
        else
            setSignIN(true);
    }

    const signUP = () => {
        createUserWithEmailAndPassword(auth, signup_email, signup_password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;

                let sendContent = {
                    "userId": user.uid,
                    "userName": signup_name,
                    "userImageURL": ""
                }

                const request = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(sendContent)
                };

                fetch("http://localhost:8080/api/userService/save", request)
                    .then(response => response.json())
                    .then(json => {
                        localStorage.setItem("user", JSON.stringify(json));
                        window.location.reload();
                    })
                    .catch()
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }

    const signInMethod = () => {
        signInWithEmailAndPassword(auth, signin_email, signin_password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                fetch("http://localhost:8080/api/userService/getUser/" + user.uid)
                    .then(response => response.json())
                    .then(json => {
                        localStorage.setItem("user", JSON.stringify(json));
                        window.location.reload();
                    })
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }
    return (
        <div className="main_container">
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <div className="logincard_mid">
                        <div className="fblogo">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" width="240px" />
                        </div>
                        <Paper className="logincard_container">
                            {
                                signIN == true ?
                            
                                <div container="login_panel" >
                                    <div className="login_header">
                                        Log in to Facebook
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{setSignin_email(event.currentTarget.value)}}  type="text" className="login_input" placeholder="Email address" />
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{setSignin_password(event.currentTarget.value)}}  type="password" className="login_input" placeholder="Password"/>
                                    </div>
                                    <div>
                                        <button onClick={signInMethod} className="login_button">Log in</button>
                                    </div>
                                    <div className="forget_Text">
                                        <span>Forgotten account?</span>
                                        <span onClick={switchPanel}>Sign up for Facebook</span>
                                    </div>
                                    {/* <div>
                                        <div className="dividor"></div>
                                    </div> */}
                                    <div>
                                        {/* <button className="login_createnew" onClick={this.switchPanel}>Sign up for Facebook</button> */}
                                    </div>
                                </div>
                                :
                                <div container="login_panel">
                                    <div>
                                        <div className="signup_create">Create a new account</div>
                                        <div className="signup_description">It's quick and easy</div>
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{setSignup_name(event.currentTarget.value)}} type="text" className="login_input" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{setSignup_email(event.currentTarget.value)}}  type="text" className="login_input" placeholder="Email address" />
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{setSignup_password(event.currentTarget.value)}}  type="password" className="login_input" placeholder="Password"/>
                                    </div>
                                    <div className="signup_button_container">
                                        <button onClick={signUP} className="signup_button">Sign Up</button>
                                    </div>
                                    <div>
                                        <div onClick={switchPanel} className="forget_Text">Already have an account?</div>
                                    </div>
                                </div>
                            }
                            </Paper>
                        </div>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
      );
}
 
export default LoginHome;