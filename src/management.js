import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header.jsx";
import ManagementList from "./components/ManagementSidebar/management-sidebar.jsx";
import ManagementDetails from "./components/ManagementDetails/management-details.jsx";

const Index = () => {
    return [
        <div id='app'>
            <Header />
            <div className='d-flex flex-row no-gutters'>
                <div className='col-sm-3'>
                    <ManagementList />
                </div>
                <div className='col-sm-9'>
                    <ManagementDetails />
                </div>
            </div>
        </div>
    ];
};
  
ReactDOM.render(<Index />, document.getElementById("management"));
