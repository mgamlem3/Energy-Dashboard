import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header.jsx";

const Management = () => {
    return [
        <div id='app'>
            <Header />
            <div className='d-flex flex-row no-gutters'>
                <div className='col-sm-3'>
                    Management Navigation Sidebar
                </div>
                <div className='col-sm-9'>
                    Details for whatever is selected on sidebar
                </div>
            </div>
        </div>
    ];
};
  
ReactDOM.render(<Management />, document.getElementById("management"));
