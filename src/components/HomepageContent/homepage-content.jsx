/* eslint-disable no-magic-numbers */

import React from "react";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import GraphControls from "../GraphControls/graphControls.jsx";
import DisplaySidebar from "../DisplaySidebar/display-sidebar.jsx";
import { getMostRecentEntryForBuilding, getMostRecentEntriesForBuilding, convertResponseToArrays } from "../../database functions/api_functions.js";

import { LRColumn } from "./styles.js";

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

    updateLineGraph(){

        //Needs to be called when the page is rendered (isn't called again)
        //Needs to get real data: Average power for entire campus, similar to detailspage-content
        var text = 'Page description if needed';
        var avgKWH = [1200, 1300, 1400, 1500, 1367, 1457, 1299];
        var dateRange = ['May 17', 'May 16', 'May 15', 'May 14', 'May 13', 'May 12', 'May 11'];
        var sqft = 24;
        var pricePerKwh = 10;
        this.refs.line.editData(avgKWH, avgKWH, avgKWH, sqft, 'Average Campus Energy Usage', dateRange, dateRange, dateRange);
        this.refs.displayBar.updateText(text);
        this.refs.displayBar.updateEnergy(avgKWH[0]/sqft);
        this.refs.displayBar.updateCost(avgKWH[0]*pricePerKwh/sqft);
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
