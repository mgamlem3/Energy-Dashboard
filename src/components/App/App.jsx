import React from "react";
import Header from "../Header/header.jsx";
import HomePageContent from "../HomepageContent/homepage-content.jsx";
import { getMostRecentEntryForBuilding, getMostRecentEntriesForBuilding, convertResponseToArrays } from "../../database functions/api_functions.js";

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
            </div>
        ];
    }
} export default App;
