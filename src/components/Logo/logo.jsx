import React from "react";

import { Graphic } from "./styles.js";

class Logo extends React.Component {
    render() {
        var image = require("../../resources/whitworth-logo-horizontal-rgb.png");
        return (
            <div className = 'Logo'>
                <a href='./index.html'>
                    <Graphic src = {image} alt = 'Whitworth Logo'/>
                </a>
            </div>
        );
    }
}

export default Logo;
