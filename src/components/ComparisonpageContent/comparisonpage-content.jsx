import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/header.jsx";
import BuildingList from "../BuildingList/buildingList.jsx";
import MixGraph from "../Graphs/MixGraph/mix-graph.jsx";

class ComparisonPageContent extends React.Component {
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
    }

    updateData(id) {
        var data = [1700, 1700, 1700]; // eslint-disable-line no-magic-numbers
        this.refs.mix.addData(data, id);
    }

    render() {
        return (
            <div id='app'>
                <Header />
                <div className='d-flex flex-row no-gutters'>
                    <div className='col-sm-3'>
                        <BuildingList updateData={this.updateData}/>
                    </div>
                    <div className='col-sm-9'>
                        <MixGraph ref='mix'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComparisonPageContent;
