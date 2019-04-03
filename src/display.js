import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header.jsx";
import MixGraph from "./components/Graphs/MixGraph/mix-graph.jsx";

const Index = () => {
    return [
        <div id='app'>
            <Header />
            <div className='d-flex flex-row no-gutters'>
                <div className='col-sm-3'>
                    Note: Graph currently sizes itself based on column width only. Sizing by window height does not currently work.
                </div>
                <div className='col-sm-9'>
                    <MixGraph />
                </div>
            </div>
        </div>
    ];
};
  
ReactDOM.render(<Index />, document.getElementById("display"));