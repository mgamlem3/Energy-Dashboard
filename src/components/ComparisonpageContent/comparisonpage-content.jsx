import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/header.jsx";
import BuildingList from "../BuildingList/buildingList.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import RadioList from "../radioList/radioList.jsx";
import YearList from "../yearList/yearList.jsx";
import TypeList from "../typeList/typeList.jsx";

class ComparisonPageContent extends React.Component {
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateYear = this.updateYear.bind(this);
        this.updateType = this.updateType.bind(this);
        this.warning = this.warning.bind(this);
        this.state = {error : false};
    }

    componentDidMount(){
        this.updateData('HUB');
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

    updateType(type) {
        this.refs.line.updateType(type);
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
                        <div className='d-flex flex-row no-gutters'>
                            <RadioList updateTime={this.updateTime} />
                            <YearList updateYear={this.updateYear} />
                            <TypeList updateType={this.updateType} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComparisonPageContent;
