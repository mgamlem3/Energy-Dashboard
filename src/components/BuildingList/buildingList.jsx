import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap';

import { BuildingTab } from './styles.js'

class BuildingList extends React.Component {
    render() {
          return (
              <div class="col-3">
                    <div class="list-group" id="myList" role="tablist">
                    <a class="list-group-item list-group-item-action active" data-toggle="list" href="#EJ" role="tab">EJ</a> 
                    <a class="list-group-item list-group-item-action" data-toggle="list" href="#Robinson" role="tab">Robinson</a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" href="#HUB" role="tab">HUB</a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" href="#Library" role="tab">Library</a>
                    </div>

                    <div class="tab-content">
                    <div class="tab-pane active" id="EJ" role="tabpanel">EJ</div> 
                    <div class="tab-pane" id="Robinson" role="tabpanel">Rob</div>
                    <div class="tab-pane" id="HUB" role="tabpanel">HUB</div>
                    <div class="tab-pane" id="Library" role="tabpanel">Library</div>
                    </div>
                </div>
            );
        }
    }
    
    
    export default BuildingList;