import React from "react";

class DisplaySidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = { text: 'This column will display selected details about the building(s) the page is currently referring to.' };

    }

    updateText(newText){
        this.setState({text: newText});    
    }

    render() {
        return (
            <div className='container-fluid'>
                <div id='DisplaySidebar'>
                    <p>{this.state.text}</p>
                </div>
            </div>
        );
    }
}

export default DisplaySidebar;
