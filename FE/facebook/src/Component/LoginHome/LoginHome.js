import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { Component } from 'react';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./LoginHome.css";

class LoginHome extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        signIN: true,

        //signIN
        signin_email: null,
        signin_password: null,

        //signup
        signup_name: null,
        signup_email: null,
        signup_password: null
    }

    switchPanel = () => {
        if (this.state.signIN)
            this.setState({signIN: false});
        else
            this.setState({signIN: true});
    }

    signUP = () => {
        createUserWithEmailAndPassword(auth, this.state.signup_email, this.state.signup_password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;

                let sendContent = {
                    "userId": user.uid,
                    "userName": this.state.signup_name,
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

    signInMethod = () => {
        signInWithEmailAndPassword(auth, this.state.signin_email, this.state.signin_password)
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
    render() { 
        return (
            <div className="main_container">
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid className="logincard_mid" item xs={8}>
                        <div className="fblogo">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" width="240px" />
                        </div>
                        <Paper className="logincard_container">
                            {
                                this.state.signIN == true ?
                            
                                <div container="login_panel" >
                                    <div className="login_header">
                                        Log in to Facebook
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{this.state.signin_email=event.currentTarget.value}}  type="text" className="login_input" placeholder="Email address" />
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{this.state.signin_password=event.currentTarget.value}}  type="password" className="login_input" placeholder="Password"/>
                                    </div>
                                    <div>
                                        <button onClick={this.signInMethod} className="login_button">Log in</button>
                                    </div>
                                    <div className="forget_Text">
                                        <span>Forgotten account?</span>
                                        <span onClick={this.switchPanel}>Sign up for Facebook</span>
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
                                        <input onChange={(event)=>{this.state.signup_name=event.currentTarget.value}} type="text" className="login_input" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{this.state.signup_email=event.currentTarget.value}}  type="text" className="login_input" placeholder="Email address" />
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{this.state.signup_password=event.currentTarget.value}}  type="password" className="login_input" placeholder="Password"/>
                                    </div>
                                    <div className="signup_button_container">
                                        <button onClick={this.signUP} className="signup_button">Sign Up</button>
                                    </div>
                                    <div>
                                        <div onClick={this.switchPanel} className="forget_Text">Already have an account?</div>
                                    </div>
                                </div>
                            }

                            </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
          );
    }
}
 
export default LoginHome;