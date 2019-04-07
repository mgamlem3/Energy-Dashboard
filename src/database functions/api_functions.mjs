import axios from 'axios';

const API_URL = "http://localhost:5001/api";

export function getDataFromDatabase() {
    fetch(API_URL+"/getData")
        .then(data => data.json())
        .then(res => console.log(res.data));
};

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
