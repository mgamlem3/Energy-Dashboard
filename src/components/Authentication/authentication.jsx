import React from "react";

import { Graphic } from "./styles.js";

class Auth extends React.Component {
    render() {
        var image = require("../../resources/whitworth-logo-horizontal-rgb.png");
        return (
            <div className='Auth'>
            <div className='row justify-content-center align-items-center'>
                <Graphic src = {image} alt = 'Whitworth Logo'/>
            </div>
                <h1 className='text-center login-title'>Sign in to continue</h1>
                    <div className='account-wall'>
                        <form className='form-signin'>
                        <label>Username</label>
                        <input type='text' class='form-control' required autofocus></input>
                        <label>Password</label>
                        <input type='password' class='form-control' required></input>
                        <label>
                        <input type='checkbox' checked='checked' name='remember'></input>
                            Remember me
                        </label>
                        <a className='btn btn-lg btn-outline-primary btn-block' href='./management.html' type='submit'>
                        Sign In
                        </a>
                        </form>
                    </div>
            </div>
        );
    }
}

export default Auth;
