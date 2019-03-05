import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import Hello from "./components/Hello/hello.jsx";
import Logo from "./components/Logo/logo.jsx";
import Nav from "./components/Nav/nav.jsx";
import CampusMap from "./components/CampusMap/campusmap.jsx";

const Index = () => {
    return [
        <div id='app'>
            <div class='row'>
                <div class='col-lg'>
                    <Logo />
                </div>
            </div>

            <div class='row'>
                <div class='col-lg'>
                    <Nav />
                </div>            
            </div>

            <div class='row'>
                <div class='col-lg'>
                    <CampusMap />
                </div>
            </div>

        </div>
    ];
};
  
ReactDOM.render(<Index />, document.getElementById("index"));
