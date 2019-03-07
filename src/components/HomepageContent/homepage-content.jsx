import React from 'react';
import CampusMap from '../CampusMap/campusmap.jsx';

import { LeftColumn } from './styles.js';

class HomePageContent extends React.Component {
    render() {
        return (
            <LeftColumn className='row'>
                <div className='col-sm-6'>
                    <div className='row'>
                        <CampusMap />
                    </div>
                    <div className='row'>
                        Weather Graph
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='row'>
                        KW Instant Graph
                    </div>

                    <div className='row'>
                        KW 24 Hr Graph
                    </div>
                </div>
            </LeftColumn>
        );
    }
}

export default HomePageContent;
