import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import RadioList from "../radioList/radioList.jsx";
import YearList from "../yearList/yearList.jsx";
import TypeList from "../typeList/typeList.jsx";
import { Box } from "./styles.js";

class GraphControls extends React.Component {
    constructor(props){
        super(props);
        this.updateTime = this.updateTime.bind(this);
        this.updateYear = this.updateYear.bind(this);
        this.updateType = this.updateType.bind(this);

        this.state = {time : true, year : true, type : true, data : true};
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
    render() {
        return (
            <Box className='d-flex flex-row no-gutters'>
                {this.state.time && <RadioList updateTime={this.updateTime} />}
                {this.state.year && <YearList updateYear={this.updateYear} />}
                {this.state.type && <TypeList updateType={this.updateType} />}         
            </Box>
        );
    }
}

export default GraphControls;
