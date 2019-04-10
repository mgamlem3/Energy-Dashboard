import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./components/Logo/logo.jsx";
import MixGraph from "./components/Graphs/MixGraph/mix-graph.jsx";
import DisplaySidebar from "./components/DisplaySidebar/display-sidebar.jsx";

const Index = () => {
    return [
        <div id='app'>
            <Logo />
            <div className='d-flex flex-row no-gutters'>
                <div className='col-sm-3'>
                    <DisplaySidebar />
                </div>
                <div className='col-sm-9'>
                    <MixGraph />
                </div>
            </div>
        </div>
    ];
};
  
ReactDOM.render(<Index />, document.getElementById("display"));
