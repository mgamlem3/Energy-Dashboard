import React from "react";
import "bootstrap";
import { getPowerCost, updatePowerCost } from "../../database functions/management_pageFunctions.js";

class ManagementDetails extends React.Component {
    state = {
        energyCost: "",
        newEnergyCost: "",
        success1: false,
        success2: false,
        successMessage: "Energy Cost Successfully Changed. Please Reload the Page"
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
        this.showSuccessBanner1();
    }

    updateEnergyCostValue = (event) => {
        this.setState({newEnergyCost: event.target.value});
        this.hideSuccessBanner1();
        this.showSuccessBanner2();
    }

    showSuccessBanner1 = () => {
        this.setState({success1: true});
    }

    hideSuccessBanner1 = () => {
        this.setState({success1: false});
    }

    showSuccessBanner2 = () => {
        this.setState({success2: true});
    }

    render() {
        return (
            <div>
                <div className='container-fluid'>
                <div className='d-flex flex-row no-gutters'>
                    <div className='col-sm-6'>
                        <div className='d-flex flex-row no-gutters'>
                            <h1>{`Current Energy Cost $${this.state.energyCost}/kWh`}</h1>
                        </div>
                        <div className='row mt-2'></div>
                            <div className='col-sm'>
                                <div className='d-flex flex-row no-gutters'>
                                    <h4>New Energy Cost: $</h4> 
                                    <input type='text' className='form-control' value={this.state.newEnergyCost} onChange={this.updateEnergyCostValue} placeholder={this.state.energyCost} style={{width: '10%'}}></input>
                                    <h4>/kWh</h4>
                                </div>
                            </div>
                            <div className='col-sm'>
                                    <button className='btn btn-md btn-outline-primary' onClick={this.changeEnergyCost}>Change Energy Cost</button>
                                </div>
                            <div className='row mt-2'></div>
                            {this.state.success1 && this.state.success2 &&
                            <div className="alert alert-success" role="alert">
                                {this.state.successMessage}
                            </div>
                            }
                            {(!this.state.success1 || !this.state.success2) &&
                            <div>
                                <div className='d-flex flex-row no-gutters'>
                                <h2>To change the energy cost used by the dashboard:</h2>
                                </div>
                                <div className='d-flex flex-row no-gutters'>
                                    1. Enter the new energy cost in the text box above
                                </div>
                                <div className='d-flex flex-row no-gutters'>
                                    2. Click "Change Energy Cost"
                                </div>
                                <div className='d-flex flex-row no-gutters'>
                                    3. Reload the page to see the result.
                                </div>
                            </div>
                            }
                            
                        </div>
                        <div className='col-sm-6'>
                            <div className='d-flex flex-row no-gutters'>
                                <h1>User Management</h1>
                            </div>
                            <div className='d-flex flex-row no-gutters'>
                                Local User Management is currently disabled due to a Google Firebase Bug
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManagementDetails;
