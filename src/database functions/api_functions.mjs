import axios from 'axios';

export function getDataFromDatabase() {
    fetch("http://localhost:5001/api/getData")
        .then(data => data.json())
        .then(res => console.log(res.data ));
};

export function putDataToDatabase(message) {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
        ++idToBeAdded;
    }

    axios.post("http://localhost:5001/api/putData", {
        id: idToBeAdded,
        message: this.state.message
    });
};