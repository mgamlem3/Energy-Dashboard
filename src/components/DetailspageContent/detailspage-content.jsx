/* eslint-disable no-magic-numbers */

import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/header.jsx";
import BuildingList from "../BuildingList/buildingList.jsx";
import BuildingDetails from "../BuildingDetails/buildingDetails.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import PieGraph from "../Graphs/PieGraph/pie-graph.jsx";
import GraphControls from "../GraphControls/graphControls.jsx";

import { getMainGraphDataForBuilding, getBuildingSquareFootage } from "../../database functions/api_functions.js";

class DetailsPageContent extends React.Component {
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
        this.updatePie = this.updatePie.bind(this);
        this.updateLine = this.updateLine.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateType = this.updateType.bind(this);
        this.updateDatatype = this.updateDatatype.bind(this);
    }

    componentDidMount(){
        this.updateData('HUB');
        this.refs.controls.setTime();
        this.refs.controls.setType();
        this.refs.controls.setDatatype();
    }

    async updateData(id){
        var response = await getMainGraphDataForBuilding(id);

        this.updatePie(response.objectReturn.data[3], id);
        this.updateLine(response, id);
    }

    updatePie(data, id){
        this.refs.pie.editBuilding(data, id);
    }
    
    updateLine(response, id){
        var sqft = getBuildingSquareFootage(id);
        this.refs.line.editData(

        // hours
        [response.objectReturn.data[6],
        response.objectReturn.data[7],
        response.objectReturn.data[8]],

        // days
        [response.objectReturn.data[3],
        response.objectReturn.data[4],
        response.objectReturn.data[5]],

        // months
        [response.objectReturn.data[0],
        response.objectReturn.data[1],
        response.objectReturn.data[2]],
        sqft,
        id,
        id,
        response.objectReturn.labels[0],
        response.objectReturn.labels[1], 
        response.objectReturn.labels[2]);
    }

    updateTime(time){
        this.refs.line.updateData(time, 1);    
    }

    updateType(type){
        this.refs.line.updateType(type);
    }

    updateDatatype(datatype) {
        this.refs.line.updateDatatype(datatype);
        this.refs.line.updateData(this.refs.line.time.toString(), 1);
        this.refs.line.updateTitle(datatype);
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
                <GraphControls ref='controls' updateTime={this.updateTime} updateType={this.updateType} updateDatatype={this.updateDatatype}/>
            </div>
        </div>
    </div>
        );
    }
}

export default DetailsPageContent;
