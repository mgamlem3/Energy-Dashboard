import React from "react";
import "bootstrap";
import { getPowerCost, updatePowerCost } from "../../database functions/management_pageFunctions.js";

class ManagementDetails extends React.Component {
    state = {
        energyCost: "",
    }

    async componentDidMount = () => {
        var cost = await getPowerCost();
        this.setState({energyCost: cost})
    }

    addBuilding() {

    }

    removeBuilding() {

    }

    editBuilding() {

    }

    viewReports() {

    }

    changeEnergyCost() {

    }

    render() {
        return (
            
            <div className='tab-content'>
                <div className='tab-pane active' id='home' role='tabpanel'>
                    Please select an option from the sidebar.
                </div>
                <div className='tab-pane' id='add' role='tabpanel'>
                <div className='d-flex flex-row no-gutters'>
                    <button className='btn btn-lg btn-outline-primary' onClick={this.addBuilding}>Add a Building</button>
                    <button className='btn btn-lg btn-outline-primary' onClick={this.removeBuilding}>Remove a Building</button>
                </div>
                </div>
                <div className='tab-pane' id='edit' role='tabpanel'>
                <div className='d-flex flex-row no-gutters'>
                    <button className='btn btn-lg btn-outline-primary' onClick={this.editBuilding}>Edit Details for a Building</button>
                </div>
                </div>
                <div className='tab-pane' id='view' role='tabpanel'>
                <div className='d-flex flex-row no-gutters'>
                    <button className='btn btn-lg btn-outline-primary' onClick={this.viewReports}>View Energy Reports</button>
                </div>
                </div>
                <div className='tab-pane' id='cost' role='tabpanel'>
                <div className='d-flex flex-row no-gutters'>
                    <h1>Current Energy Cost: {this.state.energyCost}</h1>
                </div>
                <div className='d-flex flex-row no-gutters'>
                    <button className='btn btn-lg btn-outline-primary' onClick={this.changeEnergyCost}>Change Energy Cost</button>
                </div>
                </div>
            </div>
        );
    }
}

export default ManagementDetails;
