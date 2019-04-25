import React from "react";

import { Graphic, BottomButton } from "./styles.js";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
require("firebase/auth");

class SignIn extends React.Component {
    
    state = {
        signUp: false
    }

    toggleSignUpView = () => {
        this.setState({signUp: !this.state.signUp});
    }

    render() {
        var image = require("../../resources/whitworth-logo-horizontal-rgb.png");
        return (
            <div className='SignIn'>
                <div className='row justify-content-center align-items-center'>
                    <Graphic src = {image} alt = 'Whitworth Logo'/>
                </div>
                <div className="row justify-content-center align-items-center">
                    {/* Sign in View */}
                    {!this.state.signUp &&
                        <div className="SignInView">
                            <h1 className='text-center login-title'>Sign in to continue</h1>
                            <div className='account-wall'>
                                <form className='form-signin'>
                                    <label>Username</label>
                                    <input type='text' className='form-control' required autofocus></input>
                                    <div className='row mt-2'></div>
                                    <label>Password</label>
                                    <input type='password' className='form-control' required></input>
                                    <div className='row mt-2'></div>
                                    <label>
                                    <input type='checkbox' name='remember'></input>
                                        Remember me
                                    </label>
                                    <div className='row mt-2'></div>
                                    <button className='btn btn-lg btn-outline-primary btn-block' href='./management.html' type='submit'>
                                        Sign In
                                    </button>
                                </form>
                                <div className='row mt-2'></div>
                                <BottomButton className="btn btn-outline-secondary btn-block" onClick={this.toggleSignUpView}>Sign Up</BottomButton>
                            </div>
                        </div>
                    }
                    {/* Sign Up View */}
                    {this.state.signUp &&
                        <div className="SignUpView">
                            <h1 className='text-center login-title'>Sign up to continue</h1>
                            <div className='account-wall'>
                                <form className='form-signup'>
                                    <label>Username</label>
                                    <input type='text' class='form-control' required autofocus></input>
                                    <div className='row mt-2'></div>
                                    <label>Password</label>
                                    <input type='password' className='form-control' required></input>
                                    <div className='row mt-2'></div>
                                    <label>Confirm Password</label>
                                    <input type='password' className='form-control' required></input>
                                    <div className='row mt-2'></div>
                                    <div className='row mt-2'></div>
                                    <button className='btn btn-lg btn-outline-primary btn-block' href='./management.html' type='submit'>
                                        Sign Up
                                    </button>
                                </form>
                                <div className='row mt-2'></div>
                                <BottomButton className="btn btn-outline-secondary btn-block" onClick={this.toggleSignUpView}>Go Back to Sign In</BottomButton>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default SignIn;
