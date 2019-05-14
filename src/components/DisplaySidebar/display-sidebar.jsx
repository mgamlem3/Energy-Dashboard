import React from "react";

class DisplaySidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            text: 'This column will display selected details about the building(s) the page is currently referring to.',
            energy: 1,
            cost: 5       
    };

    }

    updateText(newText){
        this.setState({text: newText});    
    }

    updateEnergy(newEnergy){
        this.setState({energy: newEnergy});
    }

    updateCost(newCost){
        this.setState({cost: newCost});
    }

    render() {
        return (
            <div className='container-fluid'>
                <div id='DisplaySidebar'>
                    <p>{this.state.text}</p>
                    <h1>Today's Energy Usage: </h1>
                    <h3>{this.state.energy} kwhrs/sqft</h3>
                    <h1>Cost:</h1>
                    <h3> ${this.state.cost}/sqft </h3>
                </div>
            </div>
        );
    }
}

export default DisplaySidebar;
