import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header.jsx";
import BuildingList from "./components/BuildingList/buildingList.jsx"; // eslint-disable-line no-unused-vars
import MixGraph from "./components/Graphs/MixGraph/mix_graph.jsx"; // eslint-disable-line no-unused-vars

const Index = () => { // eslint-disable-line no-unused-vars
    return [
        <div id='app'>
            <Header />
            <div class='row'>
                <div class='col-sm-3'>
                    <BuildingList />
                </div>
                <div class='col-sm-9'>
                <MixGraph />
                </div>
            </div>
        </div>
    ];
};
  
ReactDOM.render(<Index />, document.getElementById("building_comparison"));
