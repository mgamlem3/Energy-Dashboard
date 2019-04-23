import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Auth from "./components/Authentication/authentication.jsx";

const Index = () => {
    return [
        <div id='app'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-sm-3'>
                    <Auth />
                </div>
            </div>
        </div>
    ];
};

ReactDOM.render(<Index />, document.getElementById("sign_in"));
