import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import ManagementPage from "./components/ManagementPage/management_page.jsx"

const Index = () => {
    return [
        <div id='app'>
            <ManagementPage />
        </div>
    ];
};
  
ReactDOM.render(<Index />, document.getElementById("management"));
