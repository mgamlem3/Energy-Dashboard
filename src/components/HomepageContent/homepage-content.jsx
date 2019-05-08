import React from "react";
import CampusMap from "../CampusMap/campusmap.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import GraphControls from "../GraphControls/graphControls.jsx";

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
        var avgKWH = [1200, 1300, 1400];
        var dateRange = ['Jan', 'Feb', 'Mar'];
        this.refs.line.editData(avgKWH, avgKWH, avgKWH, 24, 'Average Campus Energy Usage', dateRange, dateRange, dateRange);
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
                        <div className='row'>
                            Money Saved vs Previous Time Period
                        </div>
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
