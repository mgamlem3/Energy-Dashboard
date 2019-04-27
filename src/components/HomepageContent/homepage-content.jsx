import React from "react";
import CampusMap from "../CampusMap/campusmap.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";

import { LRColumn } from "./styles.js";

class HomePageContent extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <LRColumn className='row'>
                    <div className='col-sm-6'>
                        <div className='row'>
                            Money Saved vs Previous Time Period
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='row'>
                            <LineGraph />
                        </div>
                        <div className='row'>
                            KW 24 Hr Graph
                        </div>
                    </div>
                </LRColumn>
            </div>
        );
    }
}

export default HomePageContent;
