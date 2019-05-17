import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import SignIn from "./components/SignIn/sign_in.jsx";

const Index = () => {
    return [
        <div id='app'>
            <div className='row justify-content-center align-items-center'>
                <div className='col'>
                    <SignIn />
                </div>
            </div>
        </div>
    ];
};

ReactDOM.render(<Index />, document.getElementById("sign_in"));
