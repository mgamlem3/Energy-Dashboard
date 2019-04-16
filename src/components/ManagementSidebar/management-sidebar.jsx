import React from "react";
import "bootstrap";

import { Mgmt } from "./styles.js";

class ManagementList extends React.Component {
    render() {
        return (
            <div id='ManagementList'>
                <Mgmt className='list-group' id='Mgmt' role='tablist'>
                    <a className='list-group-item list-group-item-action active' data-toggle='list' href='#home' role='tab'>Home</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#add' role='tab'>Add/Remove Buildings</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#edit' role='tab'>Edit Building Details</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#view' role='tab'>View/Print Reports</a>
                </Mgmt>
            </div>
        );
    }
}
  
export default ManagementList;
