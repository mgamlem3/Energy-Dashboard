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
import TypeList from "../typeList/typeList.jsx";

import { getDataFromDatabase, getMostRecentEntryForBuilding, getMostRecentEntriesForBuilding, convertResponseToArrays } from "../../database functions/api_functions.js";

class DetailsPageContent extends React.Component {
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
        this.updatePie = this.updatePie.bind(this);
        this.updateLine = this.updateLine.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateType = this.updateType.bind(this);
    }

    componentDidMount(){
        this.updateData('HUB');
    }

    async updateData(id){

        //Needs different data
        //var response = await getMostRecentEntriesForBuilding(id, 10);
        //var data = convertResponseToArrays(response);
        var data2 = [1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200];
        var labels2 = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"];
        var sqft = 24;

        //this.updatePie(id, data.values[0]);
        //this.updateLine(data.values, data.dates, id);
        this.updatePie(id, data2[0]);
        this.updateLine(data2, labels2, sqft, id);
    }

    updatePie(id, data){
        this.refs.pie.editBuilding(data, id);
    }
    
    updateLine(data, labels, sqft, id){
       this.refs.line.editData(data, data, data, sqft, id, labels, labels, labels);
    }

    updateTime(time){
        this.refs.line.updateData(time, 1);    
    }

    updateType(type){
        this.refs.line.updateType(type);
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
                    </div>
                </div>
                <div className='d-flex flex-row no-gutters'>
                    <RadioList updateTime={this.updateTime}/>
                    <TypeList updateType={this.updateType}/>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default DetailsPageContent;
