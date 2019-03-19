import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header.jsx";
import BuildingList from "./components/BuildingList/buildingList.jsx";
import BuildingDetails from "./components/BuildingDetails/buildingDetails.jsx";
import LineGraph from "./components/Graphs/LineGraph/line-graph.jsx";
import PieGraph from "./components/Graphs/PieGraph/pie-graph.jsx";

/* $('a.list-group-item').click(function() {

});  */

const Index = () => {
    return [
        <div id='app'>
            <Header />
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
                                <PieGraph />
                            </div>
                            <div class='row justify-content-center'>
                                Odometer 
                            </div>
                        </div>
                        <div class='col-sm align-self-center'>
                            <LineGraph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ];
};

ReactDOM.render(<Index />, document.getElementById("building_details"));
