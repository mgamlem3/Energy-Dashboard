import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/header.jsx";
import BuildingList from "../BuildingList/buildingList.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import RadioList from "../radioList/radioList.jsx";
import YearList from "../yearList/yearList.jsx";
import { getMainGraphDataForBuilding } from "../../database functions/api_functions.js";

class ComparisonPageContent extends React.Component {
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateYear = this.updateYear.bind(this);
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

    warning(){

        //Show alert
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
                        <LineGraph ref='line' warning={this.warning}/>
                        <div className='d-flex flex-row no-gutters'>
                            <RadioList updateTime={this.updateTime} />
                            <YearList updateYear={this.updateYear} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComparisonPageContent;
