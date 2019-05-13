import React from "react";
import "bootstrap";
import { getPowerCost, updatePowerCost } from "../../database functions/management_pageFunctions.js";

class ManagementDetails extends React.Component {
    state = {
        energyCost: "",
        newEnergyCost: "",
    }

    async componentDidMount() {
        var cost = await this.getPowerCostAsync();
        this.setState({energyCost: cost.data[0].cost});
    }

    async getPowerCostAsync() {
        var cost = await getPowerCost();
        return cost;
    }

    changeEnergyCost = () => {
        updatePowerCost(this.state.newEnergyCost);
    }

    updateEnergyCostValue = (event) => {
        this.setState({newEnergyCost: event.target.value});
    }

    render() {
        return (
            <div>
                <div className='d-flex flex-row no-gutters'>
                    <div className='col-sm-6'>
                        <div className='d-flex flex-row no-gutters'>
                            <h1>{`Current Energy Cost $${this.state.energyCost}/KWH`}</h1>
                        </div>
                        <div className='d-flex flex-row no-gutters'>
                            <input type='text' className='form-control' value={this.state.newEnergyCost} onChange={this.updateEnergyCostValue}></input>
                            <button className='btn btn-lg btn-outline-primary' onClick={this.changeEnergyCost}>Change Energy Cost</button>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='d-flex flex-row no-gutters'>
                            <h1>User Management</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManagementDetails;
