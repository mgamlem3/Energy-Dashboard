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

        if(this.state.seconds % 5 == 0){
            var id = 'bld';
            var data = [1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200, 1200, 1600, 1300, 1600, 1900, 1200];
            var labels = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"];    
            var text = 'hello world';
            this.refs.line.editData(data, data, data, id, labels, labels, labels);
            this.refs.displayBar.updateText(text);
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
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
                    <DisplaySidebar ref='displayBar'/>
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
