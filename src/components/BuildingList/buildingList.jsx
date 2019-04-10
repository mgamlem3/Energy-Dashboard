import React from "react";
import "bootstrap";
import { buildings, buildingDisplayNames} from '../../resources/common-text-resources';
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
                        <button className='list-group-item list-group-item-action' id={buildings.AquaticCenter} onClick={this.clickBuilding} data-toggle='list' href='#Aquatic-Center' role='tab'>{buildingDisplayNames.AquaticCenter}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.ArendHall} onClick={this.clickBuilding} data-toggle='list' href='#Arend-Hall' role='tab'>{buildingDisplayNames.ArendHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.AuldHouse} onClick={this.clickBuilding} data-toggle='list' href='#Auld-House' role='tab'>{buildingDisplayNames.AuldHouse}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.BaldwinJenkinsHall} onClick={this.clickBuilding} data-toggle='list' href='#Baldwin-Jenkins-Hall' role='tab'>{buildingDisplayNames.BaldwinJenkinsHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.BallardHall} onClick={this.clickBuilding} data-toggle='list' href='#Ballard-Hall' role='tab'>{buildingDisplayNames.BallardHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.BeeksmaFamilyTheologyCenter} onClick={this.clickBuilding} data-toggle='list' href='#Beeksma-Family-Theology-Center' role='tab'>{buildingDisplayNames.BeeksmaFamilyTheologyCenter}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.BoppellHall} onClick={this.clickBuilding} data-toggle='list' href='#Boppell-Hall' role='tab'>{buildingDisplayNames.BoppellHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.CowlesAuditorium} onClick={this.clickBuilding} data-toggle='list' href='#Cowles-Auditorium' role='tab'>{buildingDisplayNames.CowlesAuditorium}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.CowlesLibrary} onClick={this.clickBuilding} data-toggle='list' href='#Cowles-Library' role='tab'>{buildingDisplayNames.CowlesLibrary}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.CowlesMusicCenter} onClick={this.clickBuilding} data-toggle='list' href='#Cowles-Music-Center' role='tab'>{buildingDisplayNames.CowlesMusicCenter}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.DixonHall} onClick={this.clickBuilding} data-toggle='list' href='#Dixon-Hall' role='tab'>{buildingDisplayNames.DixonHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.DuvallHall} onClick={this.clickBuilding} data-toggle='list' href='#Duvall-Hall' role='tab'>{buildingDisplayNames.DuvallHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.EricJohnston} onClick={this.clickBuilding} data-toggle='list' href='#Eric-Johnston' role='tab'>{buildingDisplayNames.EricJohnston}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.FacilitiesServices} onClick={this.clickBuilding} data-toggle='list' href='#Facilities-Services' role='tab'>{buildingDisplayNames.FacilitiesServices}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.Fieldhouse} onClick={this.clickBuilding} data-toggle='list' href='#Fieldhouse' role='tab'>{buildingDisplayNames.Fieldhouse}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.GrahmHouse} onClick={this.clickBuilding} data-toggle='list' href='#Graham-House' role='tab'>{buildingDisplayNames.GrahamHouse}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.GravesGym} onClick={this.clickBuilding} data-toggle='list' href='#Graves-Gym' role='tab'>{buildingDisplayNames.GravesGym}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.HardwickHouse} onClick={this.clickBuilding} data-toggle='list' href='#Hardwick-House' role='tab'>{buildingDisplayNames.HardwickHouse}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.HawthorneHall} onClick={this.clickBuilding} data-toggle='list' href='#Hawthorne-Hall' role='tab'>{buildingDisplayNames.HawthorneHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.HendrickHall} onClick={this.clickBuilding} data-toggle='list' href='#Hendrick-Hall' role='tab'>{buildingDisplayNames.HendrickHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.HillHouse} onClick={this.clickBuilding} data-toggle='list' href='#Hill-House' role='tab'>{buildingDisplayNames.HillHouse}</button>
                        <button className='list-group-item list-group-item-action active' id={buildings.HUB} onClick={this.clickBuilding} data-toggle='list' href='#HUB' role='tab'>{buildingDisplayNames.HUB}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.LiedCenter} onClick={this.clickBuilding} data-toggle='list' href='#Lied-Center' role='tab'>{buildingDisplayNames.LiedCenter}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.LindamanCenter} onClick={this.clickBuilding} data-toggle='list' href='#Lindaman-Center' role='tab'>{buildingDisplayNames.LindamanCenter}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.MacKayHall} onClick={this.clickBuilding} data-toggle='list' href='#MacKay-Hall' role='tab'>{buildingDisplayNames.MacKayHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.McEachranHall} onClick={this.clickBuilding} data-toggle='list' href='#McEachran-Hall' role='tab'>{buildingDisplayNames.McEachranHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.McMillanHall} onClick={this.clickBuilding} data-toggle='list' href='#McMillan-Hall' role='tab'>{buildingDisplayNames.McMillanHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.OliverHall} onClick={this.clickBuilding} data-toggle='list' href='#Oliver-Hall' role='tab'>{buildingDisplayNames.OliverHall}</button>
                        <button className='list-group-item list-group-item-action' id={buildings.Robinson} onClick={this.clickBuilding} data-toggle='list' href='#Robinson' role='tab'>{buildingDisplayNames.Robinson}</button>
                    </BuildingsSidepane>
                </div>
            </div>
        );
    }
}
  
export default BuildingList;
