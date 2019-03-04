import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import Hello from "./components/Hello/hello.jsx"; // eslint-disable-line no-unused-vars
import Logo from "./components/Logo/logo.jsx"; // eslint-disable-line no-unused-vars
import Nav from "./components/Nav/nav.jsx"; // eslint-disable-line no-unused-vars
import BuildingList from "./components/BuildingList/buildingList.jsx"; // eslint-disable-line no-unused-vars

const Index = () => { // eslint-disable-line no-unused-vars
    return [
        <div class="container" id='app'>
            <div class="row">
                <div class="col-lg">
                <Logo />
                </div>
            </div>

            <div class="row">
                <div class="col-lg">
                    <Nav />
                </div>            
            </div>

            <div class="row">
                <div class="col-sm-3">
                    <BuildingList />
                </div>
                <div class="col-sm-9">
                    <div class="row">
                        Building info here
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row">
                                Speedometer here
                            </div>
                            <div class="row">
                                Odometer here
                            </div>
                        </div>
                        <div class="col-sm-6">
                            Graph here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ];
};
  
ReactDOM.render(<Index />, document.getElementById("building_details"));
