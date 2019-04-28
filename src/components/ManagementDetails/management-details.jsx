import React from "react";
import "bootstrap";

class ManagementDetails extends React.Component {
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
                    <button onClick={this.addBuilding}>Add a Building</button>
                    <button onClick={this.removeBuilding}>Remove a Building</button>
                </div>
                </div>
                <div className='tab-pane' id='edit' role='tabpanel'>
                <div className='d-flex flex-row no-gutters'>
                    <button onClick={this.editBuilding}>Edit Details for a Building</button>
                </div>
                </div>
                <div className='tab-pane' id='view' role='tabpanel'>
                <div className='d-flex flex-row no-gutters'>
                    <button onClick={this.viewReports}>View Energy Reports</button>
                </div>
                </div>
                <div className='tab-pane' id='cost' role='tabpanel'>
                <div className='d-flex flex-row no-gutters'>
                    Current Energy Cost: 
                </div>
                <div className='d-flex flex-row no-gutters'>
                    <button onClick={this.changeEnergyCost}>Change Energy Cost</button>
                </div>
                </div>
            </div>
        );
    }
}

export default ManagementDetails;
