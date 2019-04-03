import React from "react";

import { Graphic } from "./styles.js";

class CampusMap extends React.Component {
    render() {
        var image = require("../../resources/CampusMap.png");
        return (
            <div className = 'CampusMap'>
                <Graphic src = {image} alt='Whitworth Campus Map'/>
            </div>
        );
    }
}

export default CampusMap;
