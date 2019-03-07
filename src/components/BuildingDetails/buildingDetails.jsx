import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap';

class BuildingDetails extends React.Component {
    render() {
          return (
            <div class='tab-content'>
            <div class='tab-pane active' id='EJ' role='tabpanel'>EJ</div> 
            <div class='tab-pane' id='Robinson' role='tabpanel'>Rob</div>
            <div class='tab-pane' id='HUB' role='tabpanel'>HUB</div>
            <div class='tab-pane' id='Library' role='tabpanel'>Library</div>
            </div>
            );
        }
    }
    
    
    export default BuildingDetails;
