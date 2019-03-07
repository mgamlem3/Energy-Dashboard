import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import Hello from "./components/Hello/hello.jsx"; // eslint-disable-line no-unused-vars
import Logo from "./components/Logo/logo.jsx"; // eslint-disable-line no-unused-vars
import Nav from "./components/Nav/nav.jsx"; // eslint-disable-line no-unused-vars
import BuildingList from "./components/BuildingList/buildingList.jsx"; // eslint-disable-line no-unused-vars
import BuildingDetails from "./components/BuildingDetails/buildingDetails.jsx"; // eslint-disable-line no-unused-vars

const Index = () => { // eslint-disable-line no-unused-vars
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
                <div class='col-sm-3'>
                    <BuildingList />
                </div>
                <div class='col-sm-9'>
                    <div class='row justify-content-center'>
                        <BuildingDetails />
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