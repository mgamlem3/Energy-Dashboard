import React from "react";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";

import { LRColumn } from "./styles.js";

class HomePageContent extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <LRColumn className='row'>
                    <div className='col-sm-6'>
                        <div className='row'>
                            <h1>Money Saved vs Previous Month</h1>
                        </div>
                        <div className='row'>
                            Total Energy Used This Month: 10000kWh
                        </div>
                        <div className='row'>
                            Total Energy Used Last Month: 11000kWh
                        </div>
                        <div className='row'>
                            Difference: -1000kWh
                        </div>
                        <div className='row'>
                            Cost Difference: -$86.00
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
