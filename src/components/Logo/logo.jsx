import React from 'react';

import { Graphic } from './styles.js';

class Logo extends React.Component {
    render() {
        var image = require('../../resources/whitworth-logo-horizontal-rgb.png');
        return (
            <div className = 'Logo'>
                <Graphic src = {image} alt = 'Whitworth Logo'/>
            </div>
        );
    }
}

export default Logo;
