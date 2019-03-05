import React from 'react';

import { Graphic } from './styles.js';

class CampusMap extends React.Component {
    render() {
        return (
            <div className = 'CampusMap'>
                <Graphic src = '../src/resources/CampusMap.png'/>
                Testing text
            </div>
        );
    }
}

export default CampusMap;