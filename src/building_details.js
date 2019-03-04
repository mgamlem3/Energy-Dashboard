import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import Hello from "./components/Hello/hello.jsx";
import Logo from "./components/Logo/logo.jsx";
import Nav from "./components/Nav/nav.jsx";
import BuildingList from "./components/BuildingList/buildingList.jsx";

const Index = () => {
    return [
        <div class='container' id='app'>
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
                <div class='col-sm-3'>
                    <BuildingList />
                </div>
                <div class='col-sm-9'>
                    <div class='row justify-content-center'>
                        Building info here
                    </div>
                    <div class='row '>
                        <div class='col-sm'>
                            <div class='row justify-content-center'>
                                Speedometer here
                            </div>
                            <div class='row justify-content-center'>
                                Odometer here
                            </div>
                        </div>
                        <div class='col-sm align-self-center'>
                            Graph here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ];
};
  
ReactDOM.render(<Index />, document.getElementById("building_details"));
