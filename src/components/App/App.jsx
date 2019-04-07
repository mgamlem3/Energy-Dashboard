import React from "react";
import Header from "../Header/header.jsx";
import HomePageContent from "../HomepageContent/homepage-content.jsx";
import { getDataFromDatabase, getMostRecentEntryForBuilding } from "../../database functions/api_functions.mjs";

class App extends React.Component {    
    async logBuildingData() {
        var response = await getMostRecentEntryForBuilding("All");
        console.log(response.data);
    }
    
    render() {
        return [
            <div id='app'>
                <Header />
                <HomePageContent />
                <button onClick = {getDataFromDatabase}>get all data from database</button>
                <button onClick={this.logBuildingData}>get most recent data for all campus</button>
            </div>
        ];
    }
} export default App;
