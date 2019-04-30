import React from "react";
import CampusMap from "../CampusMap/campusmap.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";

import { LRColumn } from "./styles.js";

class HomePageContent extends React.Component {
    updateLineGraph(){
        //Needs to be called when the page is rendered (isn't called again)
        //Needs to get real data: Average power for entire campus, similar to detailspage-content
        avgKWH = [1200, 1300, 1400];
        dateRange = ['Jan', 'Feb', 'Mar'];
        this.refs.line.editData(avgKWH, avgKWH, avgKWH, 'Average Campus Energy Usage', dateRange, dateRange, dateRange);
    }
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
                            <LineGraph ref='line'/>
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
