import React from "react";
import PropTypes from "prop-types";

import { Graphic, BottomButton } from "./styles.js";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
require("firebase/auth");

class SignIn extends React.Component {
    state = {
        signUp: false,
        username: "",
        password: "",
        confirmPassword: "",
        error: false,
        errorMessage: "",
        success: false,
        successMessage: ""
    }

    componentDidMount = () => {
        var config = {
            apiKey: "AIzaSyB_3cmvIjestsJGe1dvatPNn_-t-9PWEnk",
            authDomain: "energy-dashboard-18513.firebaseapp.com",
            databaseURL: "https://energy-dashboard-18513.firebaseio.com",
            projectId: "energy-dashboard-18513",
            storageBucket: "energy-dashboard-18513.appspot.com",
            messagingSenderId: "602453262261"
          };
          firebase.initializeApp(config);
    }

    clearErrorBanner = () => {
        this.setState({error: false});
    }

    createUser = () => {
        var ref = this;
        firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
        .then(() => {
            this.setState({success: true, successMessage: "Sign Up Successful"});
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode) {
                console.error(errorCode + errorMessage);
                ref.showErrorBanner();
                ref.setErrorMessage(errorMessage);
            }
        })
    }

    showErrorBanner = () => {
        this.setState({error: true});
    }

    setErrorMessage = (text) => {
        this.setState({errorMessage: text});
    }

    signIn = (event) => {
        event.preventDefault();
        var ref = this;
        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(function(user) {
            console.log("calling sign in successful");
            ref.props.onSignInSuccessful();
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === "auth/wrong-password") {
                this.showErrorBanner();
                this.setErrorMessage(errorMessage);
            } else if (errorCode === "auth/user-not-found") {
                this.showErrorBanner();
                this.setErrorMessage(errorMessage);
            } else if (errorCode === "auth/invalid-email") {
                this.showErrorBanner();
                this.setErrorMessage(errorMessage);
            }
        });
    }

    trySignUp = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.showErrorBanner();
            this.setErrorMessage("Passwords do not match. Please try again.");
            this.setState({
                username: "",
                password: "",
                confirmPassword: "",
            })
        } else {
            this.clearErrorBanner();
            this.createUser();
        }
    }

    toggleSignUpView = () => {
        this.setState({signUp: !this.state.signUp});
    }

    updateUsernameValue = (event) => {
        this.setState({username: event.target.value})
    }

    updatePasswordValue = (event) => {
        this.setState({password: event.target.value})
    }

    updateConfirmPasswordValue = (event) => {
        this.setState({confirmPassword: event.target.value})
    }

    render() {
        var image = require("../../resources/whitworth-logo-horizontal-rgb.png");
        return (
            <div className='SignIn'>
                <div className='row justify-content-center align-items-center'>
                    <Graphic src = {image} alt = 'Whitworth Logo'/>
                </div>
                    <div className="row justify-content-center align-items-center">
                    {this.state.error &&
                        <div className="alert alert-danger" role="alert">
                            {this.state.errorMessage}
                        </div>
                    }
                    {this.state.success &&
                        <div className="alert alert-success" role="alert">
                            {this.state.successMessage}
                        </div>
                    }
                    </div>
                    <div className='row justify-content-center align-items-center'>
                    {/* Sign in View */}
                    {!this.state.signUp &&
                        <div className="SignInView">
                            <h1 className='text-center login-title'>Sign in to continue</h1>
                            <div className='account-wall'>
                                <form className='form-signin'>
                                    <label>Username</label>
                                    <input type='text' className='form-control' value={this.state.username} onChange={this.updateUsernameValue} placeholder="example@whitworth.edu" required autofocus></input>
                                    <div className='row mt-2'></div>
                                    <label>Password</label>
                                    <input type='password' className='form-control' value={this.state.password} onChange={this.updatePasswordValue} required></input>
                                    <label>
                                    <div className='row mt-2'></div>
                                    <input type='checkbox' name='remember'></input>
                                        Remember me
                                    </label>
                                    <button className='btn btn-lg btn-outline-primary btn-block' onClick={this.signIn} type='submit'>
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
                                    <input type='text' className='form-control' value={this.state.username} onChange={this.updateUsernameValue} placeholder="example@whitworth.edu" required autofocus></input>
                                    <div className='row mt-2'></div>
                                    <label>Password</label>
                                    <input type='password' className='form-control' value={this.state.password} onChange={this.updatePasswordValue} required></input>
                                    <small id="passwordHelpBlock" className="form-text text-muted">
                                        Your password must be 8-20 characters long.
                                    </small>
                                    <div className='row mt-2'></div>
                                    <label>Confirm Password</label>
                                    <input type='password' className='form-control' value={this.state.confirmPassword} onChange={this.updateConfirmPasswordValue} required></input>
                                    <small id="passwordHelpBlock" className="form-text text-muted">
                                        This must match the above password.
                                    </small>
                                    <div className='row mt-2'></div>
                                    <button className='btn btn-lg btn-outline-primary btn-block' onClick={this.trySignUp}>
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

SignIn.propTypes = {
    onSignInSuccessful: PropTypes.func.isRequired
}

export default SignIn;
