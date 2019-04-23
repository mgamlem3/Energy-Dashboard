import React from "react";
import "bootstrap";

class RadioList extends React.Component {
    constructor(props) {
        super(props);
        this.interval = '24';
        this.state = {time: '24'};
        this.updateTime = this.updateTime.bind(this);
   }
    
   updateTime(time){
        this.interval = time.target.value;
        this.setState({time: time.target.value});
        this.props.updateTime(this.interval);
    }

    render() {
        return (
            <div className='col-sm-6' id='radioList'>
                <ul className='list-group'> 
                    <a>
                        <label>
                            <input type='radio' value='24' checked={this.state.time === '24'} onChange={this.updateTime} defaultChecked={this.state.time}/> Today
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' value='7' checked={this.state.time === '7'} onChange={this.updateTime} defaultChecked={this.state.time}/> This week
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' value='1' checked={this.state.time === '1'} onChange={this.updateTime} defaultChecked={this.state.time}/> 1 Month
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' value='3' checked={this.state.time === '3'} onChange={this.updateTime} defaultChecked={this.state.time}/> 3 Months
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' value='6' checked={this.state.time === '6'} onChange={this.updateTime} defaultChecked={this.state.time}/> 6 Months
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' value='12' checked={this.state.time === '12'} onChange={this.updateTime} defaultChecked={this.state.time}/> 12 Months
                        </label>
                    </a>
                </ul>
            </div>
        );
    }
}
  
export default RadioList;
