import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/Hello/hello.jsx';

const Index = () => {
    return [
        <div id="app">
            <div>Hello World!</div>
            <div className="alert alert-primary">This is a Bootstrap Alert!</div>
            <div className="alert alert-danger">This alert is Dangerous!</div>
            <Hello name="Team"></Hello>
        </div>
    ]
};
  
ReactDOM.render(<Index />, document.getElementById("index"));
