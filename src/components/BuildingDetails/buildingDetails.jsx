import React from "react";
import "bootstrap";
import { buildings, buildingDisplayNames } from '../../resources/common-text-resources';

class BuildingDetails extends React.Component {
    render() {
        return (
            <div className='tab-content'>
                <div className='tab-pane' id={buildings.AquaticCenter} role='tabpanel'>{buildingDisplayNames.AquaticCenter}</div>
                <div className='tab-pane' id={buildings.ArendHall} role='tabpanel'>{buildingDisplayNames.ArendHall}</div>
                <div className='tab-pane' id={buildings.AuldHouse} role='tabpanel'>{buildingDisplayNames.AuldHouse}</div>
                <div className='tab-pane' id={buildings.BaldwinJenkinsHall} role='tabpanel'>{buildingDisplayNames.BaldwinJenkinsHall}</div>
                <div className='tab-pane' id={buildings.BallardHall} role='tabpanel'>{buildingDisplayNames.BallardHall}</div>
                <div className='tab-pane' id={buildings.BeeksmaFamilyTheologyCenter} role='tabpanel'>{buildingDisplayNames.BeeksmaFamilyTheologyCenter}</div>
                <div className='tab-pane' id={buildings.BoppellHall} role='tabpanel'>{buildingDisplayNames.BoppellHall}</div>
                <div className='tab-pane' id={buildings.CowlesAuditorium} role='tabpanel'>{buildingDisplayNames.CowlesAuditorium}</div>
                <div className='tab-pane' id={buildings.CowlesLibrary} role='tabpanel'>{buildingDisplayNames.CowlesLibrary}</div>
                <div className='tab-pane' id={buildings.CowlesMusicCenter} role='tabpanel'>{buildingDisplayNames.CowlesMusicCenter}</div>
                <div className='tab-pane' id={buildings.DixonHall} role='tabpanel'>{buildingDisplayNames.DixonHall}</div>
                <div className='tab-pane' id={buildings.DuvallHall} role='tabpanel'>{buildingDisplayNames.DuvallHall}</div>
                <div className='tab-pane' id={buildings.EricJohnston} role='tabpanel'>{buildingDisplayNames.EricJohnston}</div>
                <div className='tab-pane' id={buildings.FacilitiesServices} role='tabpanel'>{buildingDisplayNames.FacilitiesServices}</div>
                <div className='tab-pane' id={buildings.Fieldhouse} role='tabpanel'>{buildingDisplayNames.Fieldhouse}</div>
                <div className='tab-pane' id={buildings.GrahmHouse} role='tabpanel'>{buildingDisplayNames.GrahmHouse}</div>
                <div className='tab-pane' id={buildings.GravesGym} role='tabpanel'>{buildingDisplayNames.GravesGym}</div>
                <div className='tab-pane' id={buildings.HardwickHouse} role='tabpanel'>{buildingDisplayNames.HardwickHouse}</div>
                <div className='tab-pane' id={buildings.HawthorneHall} role='tabpanel'>{buildingDisplayNames.HawthorneHall}</div>
                <div className='tab-pane' id={buildings.HendrickHall} role='tabpanel'>{buildingDisplayNames.HendrickHall}</div>
                <div className='tab-pane' id={buildings.HillHouse} role='tabpanel'>{buildingDisplayNames.HillHouse}</div>
                <div className='tab-pane active' id={buildings.HUB} role='tabpanel'>{buildingDisplayNames.HUB}</div>
                <div className='tab-pane' id={buildings.LeidCenter} role='tabpanel'>{buildingDisplayNames.LeidCenter}</div>
                <div className='tab-pane' id={buildings.LindamanCenter} role='tabpanel'>{buildingDisplayNames.LindamanCenter}</div>
                <div className='tab-pane' id={buildings.MacKayHall} role='tabpanel'>{buildingDisplayNames.MacKayHall}</div>
                <div className='tab-pane' id={buildings.McEachranHall} role='tabpanel'>{buildingDisplayNames.McEachranHall}</div>
                <div className='tab-pane' id={buildings.McMillanHall} role='tabpanel'>{buildingDisplayNames.McMillanHall}</div>
                <div className='tab-pane' id={buildings.OliverHall} role='tabpanel'>{buildingDisplayNames.OliverHall}</div>
                <div className='tab-pane' id={buildings.Robinson} role='tabpanel'>{buildingDisplayNames.Robinson}</div>
                <div className='tab-pane' id={buildings.SchumacherHall} role='tabpanel'>{buildingDisplayNames.SchumacherHall}</div>
                <div className='tab-pane' id={buildings.StewartHall} role='tabpanel'>{buildingDisplayNames.StewartHall}</div>
                <div className='tab-pane' id={buildings.TacomaHall} role='tabpanel'>{buildingDisplayNames.TacomaHall}</div>
                <div className='tab-pane' id={buildings.TennisBubble} role='tabpanel'>{buildingDisplayNames.TennisBubble}</div>
                <div className='tab-pane' id={buildings.UREC} role='tabpanel'>{buildingDisplayNames.UREC}</div>
                <div className='tab-pane' id={buildings.VillageAkili} role='tabpanel'>{buildingDisplayNames.VillageAkili}</div>
                <div className='tab-pane' id={buildings.VillageShalom} role='tabpanel'>{buildingDisplayNames.VillageShalom}</div>
                <div className='tab-pane' id={buildings.VillageTiki} role='tabpanel'>{buildingDisplayNames.VillageTiki}</div>
                <div className='tab-pane' id={buildings.WarrenHall} role='tabpanel'>{buildingDisplayNames.WarrenHall}</div>
                <div className='tab-pane' id={buildings.WestminsterHall} role='tabpanel'>{buildingDisplayNames.WestminsterHall}</div>
                <div className='tab-pane' id={buildings.WeyerhaeuserHall} role='tabpanel'>{buildingDisplayNames.WeyerhaeuserHall}</div>
            </div>
        );
    }
}

export default BuildingDetails;
