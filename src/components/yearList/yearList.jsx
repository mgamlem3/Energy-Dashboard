import React from "react";
import "bootstrap";

class YearList extends React.Component {
    constructor(props) {
        super(props);
        this.year = '1';
        this.state = {year: ''};
        this.updateYear = this.updateYear.bind(this);
   }
    
   updateYear(year){
        this.year = year.target.value;
        this.setState({year: year.target.value});
        this.props.updateYear(this.year);
    }

    render() {
        return (
            <div id='yearList'>
                <ul> 
                    <a>
                        <label>
                            <input type='radio' value='1' checked={this.state.year === '1'} onChange={this.updateYear}/> 1 Year
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' value='2' checked={this.state.year === '2'} onChange={this.updateYear}/> 2 Years
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' value='3' checked={this.state.year === '3'} onChange={this.updateYear}/> 3 Years
                        </label>
                    </a>
                </ul>
            </div>
        );
    }
}
  
export default YearList;