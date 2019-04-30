import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/header.jsx";
import BuildingList from "../BuildingList/buildingList.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import RadioList from "../radioList/radioList.jsx";
import YearList from "../yearList/yearList.jsx";

class ComparisonPageContent extends React.Component {
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateYear = this.updateYear.bind(this);
    }

    updateData(id) {
        //Needs real data
        var data = [1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700]; // eslint-disable-line no-magic-numbers
        var labels = ['day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day'];
        this.refs.line.addData([data,data,data], [data,data,data], [data,data,data], id, id, labels, labels, labels);
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
