/* eslint-disable no-magic-numbers */

import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "../Logo/logo.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import DisplaySidebar from "../DisplaySidebar/display-sidebar.jsx";

class DisplayPageContent extends React.Component {
    constructor(props){
        super(props);
        this.currentBuilding = 'HUB';
        this.state = { seconds: 0 };
    }

    //Whenever the display page updates
    tick() {

        //Sets how often the page should reload a new building (5 is every 5 seconds)
        var resetTime = 5;
        if(this.state.seconds % resetTime == 0){
            this.setBuilding();

            //Gets data on the new building using this.currentBuilding
            var sqft = 24;
            var data = [1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200];
            var labels = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"];    
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
        if(this.currentBuilding == 'HUB')
            this.currentBuilding = 'Aquatics';
        else if(this.currentBuilding == 'Aquatics')
            this.currentBuilding = 'HUB';

        //Need to add Robinson, Library, Weyerhaeuser, Fieldhouse, Music, ALC and all dorms to the loop as well
        //Also need to use building translation resource for building ids
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
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
