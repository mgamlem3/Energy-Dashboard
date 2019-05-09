/* eslint-disable no-magic-numbers */

import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/header.jsx";
import BuildingList from "../BuildingList/buildingList.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import { getMainGraphDataForBuilding } from "../../database functions/api_functions.js";
import GraphControls from "../GraphControls/graphControls.jsx";

class ComparisonPageContent extends React.Component {
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateYear = this.updateYear.bind(this);
        this.updateType = this.updateType.bind(this);
        this.updateDatatype = this.updateDatatype.bind(this);
        this.warning = this.warning.bind(this);
        this.state = {error : false};
    }

    componentDidMount(){
        this.updateData('HUB');
        this.refs.controls.setTime();
        this.refs.controls.setYear();
        this.refs.controls.setType();
        this.refs.controls.setDatatype();
    }

    async updateData(id) {
        var response = await getMainGraphDataForBuilding(id);
        console.log(response);
    // 24 hrs
    // days
    // months
    // internal storage thing
    // display name
    // x hours
    // x days
    // x months
    this.refs.line.addData(
        [response.objectReturn.data[0],null,null], [response.objectReturn.data[1],
        null,
        null],
        [response.objectReturn.data[2],
        response.objectReturn.data[3],
        response.objectReturn.data[4]],
        id,
        id,
        response.objectReturn.labels[0],
        response.objectReturn.labels[1], 
        response.objectReturn.labels.MonthLabels[2]);
    }

    updateTime(time){
        this.refs.line.updateData(time, 9);
    }

    updateYear(year) {
        this.refs.line.updateYear(year);    
    }

    updateType(type) {
        this.refs.line.updateType(type);
    }

    updateDatatype(datatype) {
        this.refs.line.updateDatatype(datatype);
        this.refs.line.updateData(this.refs.line.time.toString(), 9);
        this.refs.line.updateTitle(datatype);
    }

    warning(warning){
        if(warning == 'error')
            this.setState({error: true});
        else if (warning == 'valid')
            this.setState({error: false});
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
                        {this.state.error &&
                            <div className='alert alert-warning' role='alert'>
                            Please remove one of the 3 selected buildings before selecting another.
                        </div>}
                        <LineGraph ref='line' warning={this.warning}/>
                        <GraphControls ref='controls' updateTime={this.updateTime} updateYear={this.updateYear} updateType={this.updateType} updateDatatype={this.updateDatatype}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComparisonPageContent;
