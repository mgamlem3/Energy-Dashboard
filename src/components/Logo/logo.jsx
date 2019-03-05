import React from 'react';

import { Graphic } from './styles.js';

class Logo extends React.Component {
    render() {
        return (
            <div className = 'Logo'>
                <Graphic src = '../src/resources/whitworth-logo-horizontal-rgb.png'/>
            </div>
        );
    }
}

export default Logo;
