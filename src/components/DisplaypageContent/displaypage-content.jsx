/* eslint-disable no-magic-numbers */

import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "../Logo/logo.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import DisplaySidebar from "../DisplaySidebar/display-sidebar.jsx";
import { buildings } from "../../resources/common-text-resources.js";
import { getMainGraphDataForBuilding, getBuildingSquareFootage } from "../../database functions/api_functions.js";

class DisplayPageContent extends React.Component {
    constructor(props){
        super(props);
        this.currentBuilding = buildings.HUB;
        this.state = { seconds: 0 };
    }

    //Whenever the display page updates
    async tick() {

        //Sets how often the page should reload a new building (5 is every 5 seconds)
        var resetTime = 5;
        if(this.state.seconds % resetTime == 0){
            this.setBuilding();

            //Gets data on the new building using this.currentBuilding
            /**@note This will make the display page work once it is populated with data that can be current up to the current day */
            // var response = await getMainGraphDataForBuilding(this.currentBuilding);
            // var sqft = getBuildingSquareFootage(this.currentBuilding);
            // var text = 'hello world';
            // var pricePerKwh = 10;

            // this.refs.line.editData(
            //     response.objectReturn.data[6], 
            //     response.objectReturn.data[3], 
            //     response.objectReturn.data[0], 
            //     sqft, 
            //     this.currentBuilding, 
            //     response.objectReturn.labels[0], 
            //     response.objectReturn.labels[1], 
            //     response.objectReturn.labels[2]);

            //If the upper section is used, the 6 lines below can be removed (through editData())
            var sqft = 24;
            var data = [1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200];
            var labels = ['day 7', 'day 6', 'day 5', 'day 4', 'day 3', 'day 2', 'day 1', 'day 7', 'day 6', 'day 5', 'day 4', 'day 3', 'day 2', 'day 1', 'day 7', 'day 6', 'day 5', 'day 4', 'day 3', 'day 2', 'day 1'];    
            var text = 'hello world';
            var pricePerKwh = 10;
            this.refs.line.editData(data, data, data, sqft, this.currentBuilding, labels, labels, labels);

            this.refs.displayBar.updateText(text);
            this.refs.displayBar.updateEnergy(data[0]/sqft);
            this.refs.displayBar.updateCost(data[0]*pricePerKwh/sqft);
            this.setState({seconds: 0});
        }
        
        //Increment clock by 1 second
        this.setState(prevState => ({seconds: prevState.seconds + 1}));
    }

    //This selects the next building to be displayed
    setBuilding(){
        if(this.currentBuilding == buildings.HUB)
            this.currentBuilding = buildings.AquaticCenter;
        else if(this.currentBuilding == buildings.AquaticCenter)
            this.currentBuilding = buildings.Robinson;
        else if(this.currentBuilding == buildings.Robinson)
            this.currentBuilding = buildings.CowlesLibrary;
        else if(this.currentBuilding == buildings.CowlesLibrary)
            this.currentBuilding = buildings.WeyerhaeuserHall;
        else if(this.currentBuilding == buildings.WeyerhaeuserHall)
            this.currentBuilding = buildings.Fieldhouse;
        else if(this.currentBuilding == buildings.Fieldhouse)
            this.currentBuilding = buildings.CowlesMusicCenter;
        else if(this.currentBuilding == buildings.CowlesMusicCenter)
            this.currentBuilding = buildings.ArendHall;
        else if(this.currentBuilding == buildings.ArendHall)
            this.currentBuilding = buildings.BaldwinJenkinsHall;
        else if(this.currentBuilding == buildings.BaldwinJenkinsHall)
            this.currentBuilding = buildings.BallardHall;
        else if(this.currentBuilding == buildings.BallardHall)
            this.currentBuilding = buildings.BoppellHall;
        else if(this.currentBuilding == buildings.BoppellHall)
            this.currentBuilding = buildings.DuvallHall;
        else if(this.currentBuilding == buildings.DuvallHall)
            this.currentBuilding = buildings.McMillanHall;
        else if(this.currentBuilding == buildings.McMillanHall)
            this.currentBuilding = buildings.OliverHall;
        else if(this.currentBuilding == buildings.OliverHall)
            this.currentBuilding = buildings.StewartHall;
        else if(this.currentBuilding == buildings.StewartHall)
            this.currentBuilding = buildings.WarrenHall;
        else if(this.currentBuilding == buildings.WarrenHall)
            this.currentBuilding = buildings.HUB;
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
        // this.refs.lineGraph.updateDatatype('kwhsqft');
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return ( 
            <div id='app'>
            <Logo />
            <div className='d-flex flex-row no-gutters'>
                <div className='col-sm-3'>
                    <DisplaySidebar ref='displayBar'/>
                </div>
                <div className='col-sm-9'>
                    <LineGraph ref='line'/>
                </div>
            </div>
            </div>
        );
    }
}

export default DisplayPageContent;
