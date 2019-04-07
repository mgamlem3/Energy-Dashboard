/**
 * @author Michael Gamlem III
 */

import axios from 'axios';

const API_URL = "http://localhost:5001/api";

/**
 * @deprecated Do not use this function. It will log all data to the console. It is left in case it has a use in the future
 */
export function getDataFromDatabase() {
    fetch(API_URL+"/getData")
        .then(data => data.json())
        .then(res => console.log(res.data));
};

/**
 * @param message optional message to append to database
 * @description Use this function to add data to the database. The body of the post must have the data that is to be added to the database
 */
export function putDataToDatabase(message) {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
        ++idToBeAdded;
    }

    axios.post(API_URL+"/putData", {
        id: idToBeAdded,
        message: this.state.message
    });
};

/**
 * @async
 * @param building Building that is to be searched for in the database
 * @description This function will return the most recent entry for one building
 */
export function getMostRecentEntryForBuilding(building) {
    var url = new URL(API_URL+'/mostRecent')

    var params = {building: building};

    url.search = new URLSearchParams(params);
    
    return new Promise(resolve => {
        fetch(url)
        .then(data => data.json())
        .then(res => {
            resolve(res);
        });
    });
}

/**
 * @description this will return multiple results for a building
 * @async
 * @param building building to search
 * @param count number of results to return (max 10)
 */
export function getMostRecentEntriesForBuilding(building, count) {
    var URL = new URL(API_URL+'/mostRecentMultiple');

    var params = {building: building, count: count};

    url.search = new URLSearchParams(params);

    return new Promise(resolve => {
        fetch(url)
        .then(data => data.json())
        .then(res => {
            resolve(res);
        });
    });
}
