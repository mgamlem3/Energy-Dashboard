import React from "react";
import "bootstrap";

import { Buildings } from "./styles.js";

class BuildingList extends React.Component {
    constructor(props) {
        super(props)
        this.clickBuilding = this.clickBuilding.bind(this);
   }
    
    clickBuilding(building){
        this.props.updateData(building.target.id);
    }
    
    render() {
        return (
            <div className='container-fluid'>
                <div id='buildingList'>
                    <Buildings className='list-group' id='Buildings' role='tablist'>
                        <button className='list-group-item list-group-item-action' id='Aquatic-Center' onClick={this.clickBuilding} data-toggle='list' href='#Aquatic-Center' role='tab'>Aquatic Center</button>
                        <button className='list-group-item list-group-item-action' id='Arend-Hall' onClick={this.clickBuilding} data-toggle='list' href='#Arend-Hall' role='tab'>Arend Hall</button>
                        <button className='list-group-item list-group-item-action' id='Auld-House' onClick={this.clickBuilding} data-toggle='list' href='#Auld-House' role='tab'>Auld House</button>
                        <button className='list-group-item list-group-item-action' id='Baldwin-Jenkins-Hall' onClick={this.clickBuilding} data-toggle='list' href='#Baldwin-Jenkins-Hall' role='tab'>Baldin-Jenkins Hall</button>
                        <button className='list-group-item list-group-item-action' id='Ballard-Hall' onClick={this.clickBuilding} data-toggle='list' href='#Ballard-Hall' role='tab'>Ballard Hall</button>
                        <button className='list-group-item list-group-item-action' id='Beeksma-Family-Theology-Center' onClick={this.clickBuilding} data-toggle='list' href='#Beeksma-Family-Theology-Center' role='tab'>Beeksma Family Theology Center</button>
                        <button className='list-group-item list-group-item-action' id='Boppell-Hall' onClick={this.clickBuilding} data-toggle='list' href='#Boppell-Hall' role='tab'>Boppell Hall</button>
                        <button className='list-group-item list-group-item-action' id='Cowles-Auditorium' onClick={this.clickBuilding} data-toggle='list' href='#Cowles-Auditorium' role='tab'>Cowles Auditorium</button>
                        <button className='list-group-item list-group-item-action' id='Cowles-Library' onClick={this.clickBuilding} data-toggle='list' href='#Cowles-Library' role='tab'>Cowles Library</button>
                        <button className='list-group-item list-group-item-action' id='Cowles-Music-Center' onClick={this.clickBuilding} data-toggle='list' href='#Cowles-Music-Center' role='tab'>Cowles Music Center</button>
                        <button className='list-group-item list-group-item-action' id='Dixon-Hall' onClick={this.clickBuilding} data-toggle='list' href='#Dixon-Hall' role='tab'>Dixon Hall</button>
                        <button className='list-group-item list-group-item-action' id='Duvall-Hall' onClick={this.clickBuilding} data-toggle='list' href='#Duvall-Hall' role='tab'>Duvall Hall</button>
                        <button className='list-group-item list-group-item-action' id='Eric-Johnston' onClick={this.clickBuilding} data-toggle='list' href='#Eric-Johnston' role='tab'>Eric Johnston</button>
                        <button className='list-group-item list-group-item-action' id='Facilities-Services' onClick={this.clickBuilding} data-toggle='list' href='#Facilities-Services' role='tab'>Facilities Services</button>
                        <button className='list-group-item list-group-item-action' id='Fieldhouse' onClick={this.clickBuilding} data-toggle='list' href='#Fieldhouse' role='tab'>Fieldhouse</button>
                        <button className='list-group-item list-group-item-action' id='Graham-House' onClick={this.clickBuilding} data-toggle='list' href='#Graham-House' role='tab'>Graham House</button>
                        <button className='list-group-item list-group-item-action' id='Graves-Gym' onClick={this.clickBuilding} data-toggle='list' href='#Graves-Gym' role='tab'>Graves Gym</button>
                        <button className='list-group-item list-group-item-action' id='Hardwick-House' onClick={this.clickBuilding} data-toggle='list' href='#Hardwick-House' role='tab'>Hardwick House</button>
                        <button className='list-group-item list-group-item-action' id='Hawthorne-Hall' onClick={this.clickBuilding} data-toggle='list' href='#Hawthorne-Hall' role='tab'>Hawthorne Hall</button>
                        <button className='list-group-item list-group-item-action' id='Hendrick-Hall' onClick={this.clickBuilding} data-toggle='list' href='#Hendrick-Hall' role='tab'>Hendrick Hall</button>
                        <button className='list-group-item list-group-item-action' id='Hill-House' onClick={this.clickBuilding} data-toggle='list' href='#Hill-House' role='tab'>Hill House</button>
                        <button className='list-group-item list-group-item-action active' id='HUB' onClick={this.clickBuilding} data-toggle='list' href='#HUB' role='tab'>HUB</button>
                        <button className='list-group-item list-group-item-action' id='Lied-Center' onClick={this.clickBuilding} data-toggle='list' href='#Lied-Center' role='tab'>Lied Center for the Visual Arts</button>
                        <button className='list-group-item list-group-item-action' id='Lindaman-Center' onClick={this.clickBuilding} data-toggle='list' href='#Lindaman-Center' role='tab'>Lindaman Center</button>
                        <button className='list-group-item list-group-item-action' id='MacKay-Hall' onClick={this.clickBuilding} data-toggle='list' href='#MacKay-Hall' role='tab'>MacKay Hall</button>
                        <button className='list-group-item list-group-item-action' id='McEachran-Hall' onClick={this.clickBuilding} data-toggle='list' href='#McEachran-Hall' role='tab'>McEachran Hall</button>
                        <button className='list-group-item list-group-item-action' id='McMillan-Hall' onClick={this.clickBuilding} data-toggle='list' href='#McMillan-Hall' role='tab'>McMillan Hall</button>
                        <button className='list-group-item list-group-item-action' id='Oliver-Hall' onClick={this.clickBuilding} data-toggle='list' href='#Oliver-Hall' role='tab'>Oliver Hall</button>
                        <button className='list-group-item list-group-item-action' id='Robinson' onClick={this.clickBuilding} data-toggle='list' href='#Robinson' role='tab'>Robinson</button>
                    </Buildings>
                </div>
            </div>
        );
    }
}
  
export default BuildingList;
