import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./components/Logo/logo.jsx";
import LineGraph from "./components/Graphs/LineGraph/line-graph.jsx";
import DisplaySidebar from "./components/DisplaySidebar/display-sidebar.jsx";

class DisplayPageContent extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render() {
        return ( 
            <div id='app'>
            <Logo />
            <div className='d-flex flex-row no-gutters'>
                <div className='col-sm-3'>
                    <DisplaySidebar />
                </div>
                <div className='col-sm-9'>
                    <LineGraph ref='line'/>
                </div>
            </div>
            </div>
        );
    }
}

export default DisplayPageContent;
