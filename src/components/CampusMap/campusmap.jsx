import React from "react";

import { Graphic } from "./styles.js";

class CampusMap extends React.Component {
    render() {
        var image = require("../../resources/CampusMap.png");
        return (
            <div className = 'CampusMap'>
                <a href='./building_details.html'>
                    <Graphic src = {image} alt='Whitworth Campus Map'/>
                </a>
            </div>
        );
    }
}

export default CampusMap;
