import React from "react";
import "bootstrap";

import { Buildings } from "./styles.js";

class BuildingList extends React.Component {
    render() {
        return (
            <div id='buildingList'>
                <Buildings class='list-group' id='Buildings' role='tablist'>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Aquatic-Center' role='tab'>Aquatic Center</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Arend-Hall' role='tab'>Arend Hall</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Auld-House' role='tab'>Auld House</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Baldwin-Jenkins-Hall' role='tab'>Baldin-Jenkins Hall</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Ballard-Hall' role='tab'>Ballard Hall</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Beeksma-Family-Theology-Center' role='tab'>Beeksma Family Theology Center</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Boppell-Hall' role='tab'>Boppell Hall</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Cowles-Auditorium' role='tab'>Cowles Auditorium</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Cowles-Library' role='tab'>Cowles Library</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Cowles-Music-Center' role='tab'>Cowles Music Center</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Dixon-Hall' role='tab'>Dixon Hall</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Duvall-Hall' role='tab'>Duvall Hall</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Eric-Johnston' role='tab'>Eric Johnston</a> 
                    <a class='list-group-item list-group-item-action active' data-toggle='list' href='#HUB' role='tab'>HUB</a>
                    <a class='list-group-item list-group-item-action' data-toggle='list' href='#Robinson' role='tab'>Robinson</a>
                </Buildings>
            </div>
        );
    }
}
  
export default BuildingList;
