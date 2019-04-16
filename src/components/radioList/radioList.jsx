import React from "react";
import "bootstrap";

class RadioList extends React.Component {
    constructor(props) {
        super(props);
        this.interval = '3';
        this.state = {time: ''};
        this.updateTime = this.updateTime.bind(this);
   }
    
   updateTime(time){
        this.interval = time.target.value;
        this.setState({time: time.target.value});
        this.props.updateTime(this.interval);
    }

    render() {
        return (
            <div id='radioList'>
                <ul> 
                    <li>
                        <label>
                            <input type='radio' value='3' checked={this.state.time === '3'} onChange={this.updateTime}/> 3 Months
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='radio' value='6' checked={this.state.time === '6'} onChange={this.updateTime}/> 6 Months
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='radio' value='12' checked={this.state.time === '12'} onChange={this.updateTime}/> 12 Months
                        </label>
                    </li>
                </ul>
            </div>
        );
    }
}
  
export default RadioList;
