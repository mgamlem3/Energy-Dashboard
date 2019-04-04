import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/header.jsx";
import BuildingList from "../BuildingList/buildingList.jsx";
import BuildingDetails from "../BuildingDetails/buildingDetails.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import PieGraph from "../Graphs/PieGraph/pie-graph.jsx";

class DetailsPageContent extends React.Component {
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
    }
    
    updateData(){
        console.log("updating data");

        //Need to get data from the database here using qualifiers
        var data = [1200, 1600, 1300];
        this.refs.line.editData(data);
    }

    render() {
        return (
            
        <div id='app'>
        <Header />
        <div className='d-flex flex-row no-gutters'>
            <div className='col-sm-3'>
                <BuildingList />
            </div>
            <div className='col-sm-9'>
                <div className='d-flex flex-row justify-content-center'>
                    <BuildingDetails />
                </div>
                <div className='d-flex flex-row no-gutters'>
                    <div className='col-sm'>
                        <div className='row justify-content-center'>
                            <PieGraph />
                        </div>
                        <div className='row justify-content-center'>
                            Odometer 
                        </div>
                    </div>
                    <div className='col-sm align-self-center'>
                        <LineGraph ref='line' />
                        <button onClick={this.updateData}>Update Graph</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default DetailsPageContent;
