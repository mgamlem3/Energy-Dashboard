import React from "react";
import "bootstrap";
import { getPowerCost, updatePowerCost } from "../../database functions/management_pageFunctions.js";

class ManagementDetails extends React.Component {
    state = {
        energyCost: "",
    }

    async componentDidMount() {
        updatePowerCost(6.42); // todo: remove this line when the actual value is stored in the release database
        var cost = await getPowerCost();
        this.setState({energyCost: cost});
        console.log(this.state.energyCost);
    }

    changeEnergyCost() {
        updatePowerCost(6.42); // todo: make this a user-enterable text box
    }

    render() {
        return (
            <div>
                <div className='d-flex flex-row no-gutters'>
                    <div className='col-sm-6'>
                        <div className='d-flex flex-row no-gutters'>
                            <h1>Current Energy Cost: ${this.state.energyCost.data}/kw</h1>
                        </div>
                        <div className='d-flex flex-row no-gutters'>
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
