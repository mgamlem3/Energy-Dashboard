import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header.jsx";
import BuildingList from "./components/BuildingList/buildingList.jsx";
import BuildingDetails from "./components/BuildingDetails/buildingDetails.jsx";
import LineGraph from "./components/Graphs/LineGraph/line-graph.jsx";
import PieGraph from "./components/Graphs/PieGraph/pie-graph.jsx";

const Index = () => {
    return [
        <div id='app'>
            <Header />
            <div className='d-flex flex-row no-gutters'>
                <div className='col-sm-3'>
                    <BuildingList />
                </div>
                <div className='col-sm-9'>
                    <div className='d-flex flex-row justify-content-center'>
                        <BuildingDetails />
                    </div>
                    <div className='d-flex flex-row no-gutters w-100'>
                        <div className='w-50 align-self-center'>
                            <PieGraph />
                            Odometer 
                        </div>
                        <div className='w-50 align-self-center'>
                            <LineGraph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ];
};

ReactDOM.render(<Index />, document.getElementById("building_details"));
