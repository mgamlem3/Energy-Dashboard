import React from 'react';

import { Graphic } from './styles.js';

class CampusMap extends React.Component {
    render() {
        return (
            <div className = 'CampusMap'>
                <Graphic src = '../src/resources/CampusMap.png' alt='Whitworth Campus Map'/>
                Testing text
            </div>
        );
    }
}

export default CampusMap;
