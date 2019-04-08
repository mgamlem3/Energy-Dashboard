import React from "react";
import Header from "../Header/header.jsx";
import HomePageContent from "../HomepageContent/homepage-content.jsx";
import { getDataFromDatabase, getMostRecentEntryForBuilding, getMostRecentEntriesForBuilding, convertResponseToArrays } from "../../database functions/api_functions.mjs";

class App extends React.Component {    
    async logBuildingData() {
        var response = await getMostRecentEntryForBuilding("All");
        console.log(response.data);
    }

    async mostRecentEntries() {
        var response = await getMostRecentEntriesForBuilding("Boppel", 6);
        console.log(response.data);
        var data = convertResponseToArrays(response);
        console.log(data);
    }
    
    render() {
        return [
            <div id='app'>
                <Header />
                <HomePageContent />
                <button onClick = {getDataFromDatabase}>get all data from database</button>
                <button onClick={this.logBuildingData}>get most recent data for all campus</button>
                <button onClick={this.mostRecentEntries}>get six most recent entries for Boppel</button>
            </div>
        ];
    }
} export default App;
