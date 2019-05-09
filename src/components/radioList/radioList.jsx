import React from "react";
import "bootstrap";

class RadioList extends React.Component {
    constructor(props) {
        super(props);
        this.interval = '3';
        this.state = {time: '3'};
        this.updateTime = this.updateTime.bind(this);
   }
    
   updateTime(time){
        this.interval = time.target.value;
        this.setState({time: time.target.value});
        this.props.updateTime(this.interval);
    }

    render() {
        return (
            <div className='col-sm-3' id='radioListCol'>
                <ul className='list-group' id='radioList'> 
                    <a>
                        <label>
                            <input type='radio' id='radio24' value='24' checked={this.state.time === '24'} onChange={this.updateTime} defaultChecked={this.state.time}/> Today
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' id='radio7' value='7' checked={this.state.time === '7'} onChange={this.updateTime} defaultChecked={this.state.time}/> 1 Week
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' id='radio21' value='21' checked={this.state.time === '21'} onChange={this.updateTime} defaultChecked={this.state.time}/> 21 Days
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' id='radio3' value='3' checked={this.state.time === '3'} onChange={this.updateTime} defaultChecked={this.state.time}/> 3 Months
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' id='radio6' value='6' checked={this.state.time === '6'} onChange={this.updateTime} defaultChecked={this.state.time}/> 6 Months
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' id='radio12' value='12' checked={this.state.time === '12'} onChange={this.updateTime} defaultChecked={this.state.time}/> 12 Months
                        </label>
                    </a>
                </ul>
            </div>
        );
    }
}
  
export default RadioList;
