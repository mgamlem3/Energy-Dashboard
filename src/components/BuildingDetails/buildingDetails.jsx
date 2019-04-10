import React from "react";
import "bootstrap";
import { buildings } from '../../resources/common-text-resources';

class BuildingDetails extends React.Component {
    render() {
        return (
            <div className='tab-content'>
                <div className='tab-pane' id={buildings.AquaticCenter} role='tabpanel'>Aquatic Center</div>
                <div className='tab-pane' id={buildings.ArendHall} role='tabpanel'>Arend Hall</div>
                <div className='tab-pane' id={buildings.AuldHouse} role='tabpanel'>Auld House</div>
                <div className='tab-pane' id={buildings.BaldwinJenkinsHall} role='tabpanel'>Baldwin-Jenkins Hall</div>
                <div className='tab-pane' id={buildings.BallardHall} role='tabpanel'>Ballard Hall</div>
                <div className='tab-pane' id={buildings.BeeksmaFamilyTheologyCenter} role='tabpanel'>Beeksma Family Theology Center</div>
                <div className='tab-pane' id={buildings.BoppellHall} role='tabpanel'>Boppell Hall</div>
                <div className='tab-pane' id={buildings.CowlesAuditorium} role='tabpanel'>Cowles Auditorium</div>
                <div className='tab-pane' id={buildings.CowlesLibrary} role='tabpanel'>Cowles Library</div>
                <div className='tab-pane' id={buildings.CowlesMusicCenter} role='tabpanel'>Cowles Music Center</div>
                <div className='tab-pane' id={buildings.DixonHall} role='tabpanel'>Dixon Hall</div>
                <div className='tab-pane' id={buildings.DuvallHall} role='tabpanel'>Duvall Hall</div>
                <div className='tab-pane' id={buildings.EricJohnston} role='tabpanel'>Eric Johnston</div>
                <div className='tab-pane' id={buildings.FacilitiesServices} role='tabpanel'>Facilities Services</div>
                <div className='tab-pane' id={buildings.Fieldhouse} role='tabpanel'>Fieldhouse</div>
                <div className='tab-pane' id={buildings.GrahmHouse} role='tabpanel'>Graham House</div>
                <div className='tab-pane' id={buildings.GravesGym} role='tabpanel'>Graves Gym</div>
                <div className='tab-pane' id={buildings.HardwickHouse} role='tabpanel'>Hardwick House</div>
                <div className='tab-pane' id={buildings.HawthorneHall} role='tabpanel'>Hawthorne Hall</div>
                <div className='tab-pane' id={buildings.HendrickHall} role='tabpanel'>Hendrick Hall</div>
                <div className='tab-pane' id={buildings.HillHouse} role='tabpanel'>Hill House</div>
                <div className='tab-pane active' id={buildings.HUB} role='tabpanel'>HUB</div>
                <div className='tab-pane' id={buildings.LeidCenter} role='tabpanel'>Lied Center for the Visual Arts</div>
                <div className='tab-pane' id={buildings.LindamanCenter} role='tabpanel'>Lindaman Center</div>
                <div className='tab-pane' id={buildings.MacKayHall} role='tabpanel'>MacKay Hall</div>
                <div className='tab-pane' id={buildings.McEachranHall} role='tabpanel'>McEachran Hall</div>
                <div className='tab-pane' id={buildings.McMillanHall} role='tabpanel'>McMillan Hall</div>
                <div className='tab-pane' id={buildings.OliverHall} role='tabpanel'>Oliver Hall</div>
                <div className='tab-pane' id={buildings.Robinson} role='tabpanel'>Robinson</div>
                <div className='tab-pane' id={buildings.SchumacherHall} role='tabpanel'>Schumacher Hall</div>
                <div className='tab-pane' id={buildings.StewartHall} role='tabpanel'>Stewart Hall</div>
                <div className='tab-pane' id={buildings.TacomaHall} role='tabpanel'>Tacoma Hall</div>
                <div className='tab-pane' id={buildings.TennisBubble} role='tabpanel'>Tennis Bubble</div>
                <div className='tab-pane' id={buildings.UREC} role='tabpanel'>University Recreation Center</div>
                <div className='tab-pane' id={buildings.VillageAkili} role='tabpanel'>The Village (Akili)</div>
                <div className='tab-pane' id={buildings.VillageShalom} role='tabpanel'>The Village (Shalom)</div>
                <div className='tab-pane' id={buildings.VillageTiki} role='tabpanel'>The Village (Tiki)</div>
                <div className='tab-pane' id={buildings.WarrenHall} role='tabpanel'>Warren Hall</div>
                <div className='tab-pane' id={buildings.WestminsterHall} role='tabpanel'>Westminster Hall</div>
                <div className='tab-pane' id={buildings.WeyerhaeuserHall} role='tabpanel'>Weyerhaeuser Hall</div>
            </div>
        );
    }
}

export default BuildingDetails;
