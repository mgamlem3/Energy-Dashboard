import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import RadioList from "../radioList/radioList.jsx";
import YearList from "../yearList/yearList.jsx";
import TypeList from "../typeList/typeList.jsx";
import DatatypeList from "../datatypeList/datatypeList.jsx";
import { Box } from "./styles.js";

class GraphControls extends React.Component {
    constructor(props){
        super(props);
        this.updateTime = this.updateTime.bind(this);
        this.updateYear = this.updateYear.bind(this);
        this.updateType = this.updateType.bind(this);
        this.updateDatatype = this.updateDatatype.bind(this);

        this.state = {time : false, year : false, type : false, data : false};
    }
    updateTime(time){
        this.props.updateTime(time);
    }
    updateYear(year){
        this.props.updateYear(year);
    }
    updateType(type){
        this.props.updateType(type);
    }
    updateDatatype(datatype){
        this.props.updateDatatype(datatype);
    }
    setTime(){
        this.setState({time : true});
    }
    setYear(){
        this.setState({year : true});
    }
    setType(){
        this.setState({type : true});
    }
    setDatatype(){
        this.setState({data : true});
    }
    render() {
        return (
            <Box className='d-flex flex-row no-gutters'>
                {this.state.time && <RadioList updateTime={this.updateTime} />}
                {this.state.year && <YearList updateYear={this.updateYear} />}
                {this.state.type && <TypeList updateType={this.updateType} />}   
                {this.state.data && <DatatypeList updateDatatype={this.updateDatatype} />}      
            </Box>
        );
    }
}

export default GraphControls;
