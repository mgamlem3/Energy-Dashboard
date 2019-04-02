import React from "react";
import "bootstrap";

import { Buildings } from "./styles.js";

{/*    <ListGroup>
        <ListGroup.Item action href="#Arend-Hall">
          Arend
        </ListGroup.Item>
        <ListGroup.Item action href="#Auld-House">
          Auld
        </ListGroup.Item>
        <ListGroup.Item action href="#HUB">
          HUB
        </ListGroup.Item>
        <ListGroup.Item action href="#Robinson">
          Robinson
        </ListGroup.Item>
      </ListGroup> */}

class BuildingList extends React.Component {
    render() {
        return (
            <div id='buildingList'>
                <Buildings className='list-group' id='Buildings' role='tablist'>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Aquatic-Center' role='tab'>Aquatic Center</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Arend-Hall' role='tab'>Arend Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Auld-House' role='tab'>Auld House</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Baldwin-Jenkins-Hall' role='tab'>Baldin-Jenkins Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Ballard-Hall' role='tab'>Ballard Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Beeksma-Family-Theology-Center' role='tab'>Beeksma Family Theology Center</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Boppell-Hall' role='tab'>Boppell Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Cowles-Auditorium' role='tab'>Cowles Auditorium</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Cowles-Library' role='tab'>Cowles Library</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Cowles-Music-Center' role='tab'>Cowles Music Center</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Dixon-Hall' role='tab'>Dixon Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Duvall-Hall' role='tab'>Duvall Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Eric-Johnston' role='tab'>Eric Johnston</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Facilities-Services' role='tab'>Facilities Services</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Fieldhouse' role='tab'>Fieldhouse</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Graham-House' role='tab'>Graham House</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Graves-Gym' role='tab'>Graves Gym</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Hardwick-House' role='tab'>Hardwick House</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Hawthorne-Hall' role='tab'>Hawthorne Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Hendrick-Hall' role='tab'>Hendrick Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Hill-House' role='tab'>Hill House</a>
                    <a className='list-group-item list-group-item-action active' data-toggle='list' href='#HUB' role='tab'>HUB</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Lied-Center' role='tab'>Lied Center for the Visual Arts</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Lindaman-Center' role='tab'>Lindaman Center</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#MacKay-Hall' role='tab'>MacKay Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#McEachran-Hall' role='tab'>McEachran Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#McMillan-Hall' role='tab'>McMillan Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Oliver-Hall' role='tab'>Oliver Hall</a>
                    <a className='list-group-item list-group-item-action' data-toggle='list' href='#Robinson' role='tab'>Robinson</a>
                </Buildings>
            </div>
        );
    }
}
  
export default BuildingList;
