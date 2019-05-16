/**
 * @author Michael Gamlem III
 */

import axios from "axios";

import { API_URL } from "../resources/common-text-resources";
import { squareFootage } from "../resources/building-square-footages.js"

/**
 * @description Function to call upon 200 OK response from database. It will parse the response to the format used for graphs. Takes either a single response or an array of responses
 * @param response Response from the database.
 */

export function convertResponseToArrays(response) {
    var building, dates, values;
    try {
        building = response.data[0].building;
        dates = [];
        values = [];

        response.data.dates = formatDate(response.data);

        response.data.forEach(entry => {
            dates.push(entry.date);
            values.push(parseFloat(entry.peakDemand));
        });
    } catch (error) {
        console.error("Error parsing database response to array:\n" + error);
    }
    return {
        building,
        dates,
        values
    };
}

/**
 * @description this function will format the dates returned from the database in a format that looks good to the user
 * @param dates array of date strings to be formatted
 * @returns an array of formatted date strings
 */

function formatDate(dates) {
    const regex = /\d{2,4}/;
    const NUM_MONTHS = 12;
    dates.forEach(date => {
        date = toString(date);
        var matches = date.split(regex);
        var AMorPM = "am";
        if (matches[3] > NUM_MONTHS) {
            matches[3] = matches[3] - NUM_MONTHS;
            AMorPM = "pm";
        }

        // this will reorder the date to a more standard and readable format
        //         month     /   day       /  year          hour       :  minute am/pm
        date = `${matches[1]}/${matches[2]}/${matches[0]} ${matches[3]}:${matches[4]}${AMorPM}`;
    });
    return dates;
}

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
}

/**
 * @async
 * @param building Building that is to be searched for in the database
 * @description This function will return the most recent entry for one building
 */

export function getMostRecentEntryForBuilding(building) {
    var url = new URL(API_URL+"/mostRecent");

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
 * @param building building name to search
 * @description this will return KWH averages for a building for the past 1, 2, 3 years and past 7 days, and past 24 hrs
 */

export function getMainGraphDataForBuilding(building) {
    var url = new URL(API_URL+"/getMainGraphData");

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
    var url = new URL(API_URL+"/mostRecentMultiple");

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

/**
 * @description will return appropriate building square footage
 * @param building name of building to get square footage for
 * @returns number or 1 if cannot be found
 */
export function getBuildingSquareFootage(_building) {
    var _squareFootage = 1;
    try {
        _squareFootage = squareFootage._building;
    } catch (e) {
        console.error("Unable to get building square footage. " + e);
    }
    return _squareFootage;
}
