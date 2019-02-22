import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
    return [
        <div id="app">
            <div>Hello World!</div>
            <div class="alert alert-primary">This is a Bootstrap Alert!</div>
            <div class="alert alert-danger">This alert is Dangerous!</div>
        </div>
    ]
};
  
ReactDOM.render(<Index />, document.getElementById("index"));
