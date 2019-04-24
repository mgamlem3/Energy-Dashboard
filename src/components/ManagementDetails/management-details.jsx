import React from "react";
import "bootstrap";

class ManagementDetails extends React.Component {
    render() {
        return (
            <div className='tab-content'>
                <div className='tab-pane active' id='home' role='tabpanel'>
                    Please select an option from the sidebar.
                </div>
                <div className='tab-pane' id='add' role='tabpanel'>
                    This page will allow the user to add or remove a building from the system.
                </div>
                <div className='tab-pane' id='edit' role='tabpanel'>
                    This page will allow the user to edit the details for a building.
                </div>
                <div className='tab-pane' id='view' role='tabpanel'>
                    This page will allow the user to view and/or print energy usage reports.
                </div>
                <div className='tab-pane' id='cost' role='tabpanel'>
                    This page will allow the user to change the current energy cost.
                </div>
            </div>
        );
    }
}

export default ManagementDetails;
