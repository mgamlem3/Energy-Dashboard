/* eslint-disable no-magic-numbers */

import React from "react";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import GraphControls from "../GraphControls/graphControls.jsx";
import DisplaySidebar from "../DisplaySidebar/display-sidebar.jsx";
import { getMostRecentEntryForBuilding, getMostRecentEntriesForBuilding, convertResponseToArrays, getMainGraphDataForBuilding } from "../../database functions/api_functions.js";

import { LRColumn } from "./styles.js";
import { getPowerCost } from "../../database functions/management_pageFunctions.js";

class HomePageContent extends React.Component {
    constructor(props){
        super(props);
        this.updateLineGraph = this.updateLineGraph.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateType = this.updateType.bind(this);
        this.updateDatatype = this.updateDatatype.bind(this);
    }

    componentDidMount(){
        this.updateLineGraph();
        this.refs.controls.setTime();
        this.refs.controls.setType();
        this.refs.controls.setDatatype();
    }

    async updateLineGraph(){
        var id = "All";
        var response = await getMainGraphDataForBuilding(id);
        //Needs to be called when the page is rendered (isn't called again)
        //Needs to get real data: Average power for entire campus, similar to detailspage-content
        var text = 'See how much energy is being used on Whitworth campus.';
        var sqft = 981767; // sqft for all campus buildings
        var pricePerKwh = await getPowerCost();
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
            response.objectReturn.labels[0],
            response.objectReturn.labels[1], 
            response.objectReturn.labels[2]
        );
        this.refs.displayBar.updateText(text);
        this.refs.displayBar.updateEnergy(response.objectReturn.data[6][0]/sqft);
        this.refs.displayBar.updateCost(response.objectReturn.data[6][0]*pricePerKwh/sqft);
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
            <div className='container-fluid'>
                <LRColumn className='row'>
                    <div className='col-sm-6'>
                        <DisplaySidebar ref='displayBar'/>
                    </div>
                    <div className='col-sm-6'>
                        <div className='row'>
                            <LineGraph ref='line'/>
                        </div>
                        <GraphControls ref='controls' updateTime={this.updateTime} updateType={this.updateType} updateDatatype={this.updateDatatype}/>
                    </div>
                </LRColumn>
            </div>
        );
    }
}

export default HomePageContent;
