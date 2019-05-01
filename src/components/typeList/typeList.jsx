import React from "react";
import "bootstrap";

class TypeList extends React.Component {
    constructor(props) {
        super(props);
        this.type = 'line';
        this.state = {type: 'line'};
        this.updateType = this.updateType.bind(this);
   }
    
   updateType(type){
        this.type = type.target.value;
        this.setState({type: type.target.value});
        this.props.updateType(this.type);
    }

    render() {
        return (
            <div className='col-sm-6' id='typeListCol'>
                <ul className='list-group' id='typeList'> 
                    <a>
                        <label>
                            <input type='radio' id='line' value='line' checked={this.state.type === 'line'} onChange={this.updateType} defaultChecked={this.state.type}/> Line
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' id='bar' value='bar' checked={this.state.type === 'bar'} onChange={this.updateType} defaultChecked={this.state.type}/> Bar
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' id='horizontalBar' value='horizontalBar' checked={this.state.type === 'horizontalBar'} onChange={this.updateType} defaultChecked={this.state.type}/> Horizontal Bar
                        </label>
                    </a>
                </ul>
            </div>
        );
    }
}
  
export default TypeList;
