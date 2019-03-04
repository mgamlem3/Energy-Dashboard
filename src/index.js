import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import Hello from "./components/Hello/hello.jsx";
import "./components/Logo/logo.jsx";
import "./components/Nav/nav.jsx";

const Index = () => { // eslint-disable-line no-unused-vars
    return [
        <div id='app'>
            <Logo />
            {/* <div>Hello World!</div> */}
            {/* <div className='alert alert-primary'>This is a Bootstrap Alert!</div> */}
            {/* <div className='alert alert-danger'>This alert is Dangerous!</div> */}
            {/* <Hello name='Team'></Hello> */}
            <Nav />
        </div>
    ];
};
  
ReactDOM.render(<Index />, document.getElementById("index"));
