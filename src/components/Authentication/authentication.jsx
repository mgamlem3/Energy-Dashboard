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
                        <input type='text' class='form-control' placeholder='Username' required autofocus></input>
                        <input type='password' class='form-control' placeholder='Password' required></input>
                        <button className='btn btn-lg btn-outline-primary btn-block' href='./management.html' type='submit'>
                        Sign In
                        </button>
                        <label className='checkbox pull-left'>
                        <input type='checkbox' value='remember-me'></input>
                            Remember me
                        </label>
                        </form>
                    </div>
            </div>
        );
    }
}

export default Auth;
