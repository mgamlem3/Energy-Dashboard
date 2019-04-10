import React from "react";
import "bootstrap";
import { buildings } from '../../resources/common-text-resources';
import { BuildingsSidepane } from "./styles.js";

class BuildingList extends React.Component {
    constructor(props) {
        super(props);
        this.clickBuilding = this.clickBuilding.bind(this);
   }
    
    clickBuilding(building){
        this.props.updateData(building.target.id);
    }
    
    render() {
        return (
            <div className='container-fluid'>
                <div id='buildingList'>
                    <BuildingsSidepane className='list-group' id='Buildings' role='tablist'>
                        <button className='list-group-item list-group-item-action' id={buildings.AquaticCenter} onClick={this.clickBuilding} data-toggle='list' href='#Aquatic-Center' role='tab'>Aquatic Center</button>
                        <button className='list-group-item list-group-item-action' id={buildings.ArendHall} onClick={this.clickBuilding} data-toggle='list' href='#Arend-Hall' role='tab'>Arend Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.AuldHouse} onClick={this.clickBuilding} data-toggle='list' href='#Auld-House' role='tab'>Auld House</button>
                        <button className='list-group-item list-group-item-action' id={buildings.BaldwinJenkinsHall} onClick={this.clickBuilding} data-toggle='list' href='#Baldwin-Jenkins-Hall' role='tab'>Baldin-Jenkins Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.BallardHall} onClick={this.clickBuilding} data-toggle='list' href='#Ballard-Hall' role='tab'>Ballard Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.BeeksmaFamilyTheologyCenter} onClick={this.clickBuilding} data-toggle='list' href='#Beeksma-Family-Theology-Center' role='tab'>Beeksma Family Theology Center</button>
                        <button className='list-group-item list-group-item-action' id={buildings.BoppellHall} onClick={this.clickBuilding} data-toggle='list' href='#Boppell-Hall' role='tab'>Boppell Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.CowlesAuditorium} onClick={this.clickBuilding} data-toggle='list' href='#Cowles-Auditorium' role='tab'>Cowles Auditorium</button>
                        <button className='list-group-item list-group-item-action' id={buildings.CowlesLibrary} onClick={this.clickBuilding} data-toggle='list' href='#Cowles-Library' role='tab'>Cowles Library</button>
                        <button className='list-group-item list-group-item-action' id={buildings.CowlesMusicCenter} onClick={this.clickBuilding} data-toggle='list' href='#Cowles-Music-Center' role='tab'>Cowles Music Center</button>
                        <button className='list-group-item list-group-item-action' id={buildings.DixonHall} onClick={this.clickBuilding} data-toggle='list' href='#Dixon-Hall' role='tab'>Dixon Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.DuvallHall} onClick={this.clickBuilding} data-toggle='list' href='#Duvall-Hall' role='tab'>Duvall Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.EricJohnston} onClick={this.clickBuilding} data-toggle='list' href='#Eric-Johnston' role='tab'>Eric Johnston</button>
                        <button className='list-group-item list-group-item-action' id={buildings.FacilitiesServices} onClick={this.clickBuilding} data-toggle='list' href='#Facilities-Services' role='tab'>Facilities Services</button>
                        <button className='list-group-item list-group-item-action' id={buildings.Fieldhouse} onClick={this.clickBuilding} data-toggle='list' href='#Fieldhouse' role='tab'>Fieldhouse</button>
                        <button className='list-group-item list-group-item-action' id={buildings.GrahamHouse} onClick={this.clickBuilding} data-toggle='list' href='#Graham-House' role='tab'>Graham House</button>
                        <button className='list-group-item list-group-item-action' id={buildings.GravesGym} onClick={this.clickBuilding} data-toggle='list' href='#Graves-Gym' role='tab'>Graves Gym</button>
                        <button className='list-group-item list-group-item-action' id={buildings.HardwickHouse} onClick={this.clickBuilding} data-toggle='list' href='#Hardwick-House' role='tab'>Hardwick House</button>
                        <button className='list-group-item list-group-item-action' id={buildings.HawthorneHall} onClick={this.clickBuilding} data-toggle='list' href='#Hawthorne-Hall' role='tab'>Hawthorne Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.HendrickHall} onClick={this.clickBuilding} data-toggle='list' href='#Hendrick-Hall' role='tab'>Hendrick Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.HillHouse} onClick={this.clickBuilding} data-toggle='list' href='#Hill-House' role='tab'>Hill House</button>
                        <button className='list-group-item list-group-item-action active' id={buildings.HUB} onClick={this.clickBuilding} data-toggle='list' href='#HUB' role='tab'>HUB</button>
                        <button className='list-group-item list-group-item-action' id={buildings.LiedCenter} onClick={this.clickBuilding} data-toggle='list' href='#Lied-Center' role='tab'>Lied Center for the Visual Arts</button>
                        <button className='list-group-item list-group-item-action' id={buildings.LindamanCenter} onClick={this.clickBuilding} data-toggle='list' href='#Lindaman-Center' role='tab'>Lindaman Center</button>
                        <button className='list-group-item list-group-item-action' id={buildings.MacKayHall} onClick={this.clickBuilding} data-toggle='list' href='#MacKay-Hall' role='tab'>MacKay Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.McEachranHall} onClick={this.clickBuilding} data-toggle='list' href='#McEachran-Hall' role='tab'>McEachran Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.McMillanHall} onClick={this.clickBuilding} data-toggle='list' href='#McMillan-Hall' role='tab'>McMillan Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.OliverHall} onClick={this.clickBuilding} data-toggle='list' href='#Oliver-Hall' role='tab'>Oliver Hall</button>
                        <button className='list-group-item list-group-item-action' id={buildings.Robinson} onClick={this.clickBuilding} data-toggle='list' href='#Robinson' role='tab'>Robinson</button>
                    </BuildingsSidepane>
                </div>
            </div>
        );
    }
}
  
export default BuildingList;
