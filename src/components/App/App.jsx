import React from "react";
import Header from "../Header/header.jsx";
import HomePageContent from "../HomepageContent/homepage-content.jsx";

class App extends React.Component {    
    render() {
        return [
            <div id='app'>
                <Header />
                <HomePageContent />
            </div>
        ];
    }
} export default App;
