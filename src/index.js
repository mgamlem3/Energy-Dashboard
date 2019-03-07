import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header.jsx";
import HomePageContent from "./components/HomepageContent/homepage-content.jsx";

const Index = () => {
    return [
        <div id='app'>
            <Header />
            <HomePageContent />
        </div>
    ];
};
  
ReactDOM.render(<Index />, document.getElementById("index"));
