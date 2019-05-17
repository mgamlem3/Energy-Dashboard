import React from "react";
import "bootstrap";

class DatatypeList extends React.Component {
    constructor(props) {
        super(props);
        this.datatype = 'kwhsqft';
        this.state = {datatype: 'kwhsqft'};
        this.updateDatatype = this.updateDatatype.bind(this);
   }
    
   updateDatatype(Datatype){
        this.datatype = Datatype.target.value;
        this.setState({datatype: Datatype.target.value});
        this.props.updateDatatype(this.datatype);
    }

    render() {
        return (
            <div className='col-sm-3' id='datatypeListCol'>
                <ul className='list-group' id='datatypeList'> 
                    <a>
                        <label>
                            <input type='radio' id='datatypeKWH' value='kwh' checked={this.state.datatype === 'kwh'} onChange={this.updateDatatype} defaultChecked={this.state.datatype}/> KWH
                        </label>
                    </a>
                    <a>
                        <label>
                            <input type='radio' id='datatypeKWHsqft' value='kwhsqft' checked={this.state.datatype === 'kwhsqft'} onChange={this.updateDatatype} defaultChecked={this.state.datatype}/> KWH/SQFT
                        </label>
                    </a>
                </ul>
            </div>
        );
    }
}
  
export default DatatypeList;
