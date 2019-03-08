import React from "react";
import "bootstrap";

class BuildingDetails extends React.Component {
    render() {
        return (
            <div class='tab-content'>
            <div class='tab-pane' id='Aquatic-Center' role='tabpanel'>Aquatic Center</div>
            <div class='tab-pane' id='Arend-Hall' role='tabpanel'>Arend Hall</div>
            <div class='tab-pane' id='Auld-House' role='tabpanel'>Auld House</div>
            <div class='tab-pane' id='Baldwin-Jenkins-Hall' role='tabpanel'>Baldwin-Jenkins Hall</div>
            <div class='tab-pane' id='Ballard-Hall' role='tabpanel'>Ballard Hall</div>
            <div class='tab-pane' id='Beeksma-Family-Theology-Center' role='tabpanel'>Beeksma Family Theology Center</div>
            <div class='tab-pane' id='Boppell-Hall' role='tabpanel'>Boppell Hall</div>
            <div class='tab-pane' id='Cowles-Auditorium' role='tabpanel'>Cowles Auditorium</div>
            <div class='tab-pane' id='Cowles-Library' role='tabpanel'>Cowles Library</div>
            <div class='tab-pane' id='Cowles-Music-Center' role='tabpanel'>Cowles Music Center</div>
            <div class='tab-pane' id='Dixon-Hall' role='tabpanel'>Dixon Hall</div>
            <div class='tab-pane' id='Duvall-Hall' role='tabpanel'>Duvall Hall</div>
            <div class='tab-pane' id='Eric-Johnston' role='tabpanel'>Eric Johnston</div> 
            <div class='tab-pane active' id='HUB' role='tabpanel'>HUB</div>
            <div class='tab-pane' id='Robinson' role='tabpanel'>Rob</div>
            </div>
        );
    }
}

export default BuildingDetails;
