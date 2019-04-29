/* eslint-disable no-magic-numbers */

import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/header.jsx";
import BuildingList from "../BuildingList/buildingList.jsx";
import BuildingDetails from "../BuildingDetails/buildingDetails.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import PieGraph from "../Graphs/PieGraph/pie-graph.jsx";
import RadioList from "../radioList/radioList.jsx";

import { getDataFromDatabase, getMostRecentEntryForBuilding, getMostRecentEntriesForBuilding, convertResponseToArrays } from "../../database functions/api_functions.js";

class DetailsPageContent extends React.Component {
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
        this.updatePie = this.updatePie.bind(this);
        this.updateLine = this.updateLine.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    async updateData(id){
        var response = await getMostRecentEntriesForBuilding(id, 10);
        var data = convertResponseToArrays(response);

        this.updatePie(id, data.values[0]);
        this.updateLine(data.values, data.dates, id);
    }

    updatePie(id, data){

        //var data = 1600;
        this.refs.pie.editBuilding(data, id);
    }
    
    updateLine(data, labels, id){

        //var data = [1200, 1600, 1300, 1600, 1900, 1200];
        //var labels = ["1", "2", "3", "4", "5", "6"];
        this.refs.line.editData(data, labels, id);
    }

    updateTime(time){
        this.refs.line.updateData(time);    
    }

    toggle(){
        this.refs.line.toggle();
    }

    render() {
        return (
            
        <div id='app'>
        <Header />
        <div className='d-flex flex-row no-gutters'>
            <div className='col-sm-3'>
                <BuildingList updateData={this.updateData}/>
            </div>
            <div className='col-sm-9'>
                <div className='d-flex flex-row justify-content-center'>
                    <BuildingDetails />
                </div>
                <div className='d-flex flex-row no-gutters'>
                    <div className='col-sm'>
                        <div className='row justify-content-center'>
                            <PieGraph ref='pie'/>
                        </div>
                        <div className='row justify-content-center'>
                            Odometer 
                        </div>
                    </div>
                    <div className='col-sm align-self-center'>
                        <LineGraph ref='line' />
                        <button onClick={this.toggle}>Toggle Graph</button>
                    </div>
                </div>
                <div className='d-flex flex-row no-gutters'>
                    <RadioList updateTime={this.updateTime}/>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default DetailsPageContent;
