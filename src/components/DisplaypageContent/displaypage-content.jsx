import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "../Logo/logo.jsx";
import LineGraph from "../Graphs/LineGraph/line-graph.jsx";
import DisplaySidebar from "../DisplaySidebar/display-sidebar.jsx";

class DisplayPageContent extends React.Component {
    constructor(props){
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
