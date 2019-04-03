import React from "react";
import 'bootstrap';
import Header from "../Header/header.jsx";
import HomePageContent from "../HomepageContent/homepage-content.jsx";
import axios from 'axios';

class App extends React.Component {
    state = {
        data: [],
        id: 0,
        message: "test 123"
    }

    getDataFromDb = () => {
        fetch("http://localhost:5001/api/getData")
          .then(data => data.json())
          .then(res => console.log(res.data ));
    };

    putDataToDB = message => {
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
    
    render() {
        return [
            <div id='app'>
                <Header />
                <HomePageContent />
                <button onClick={this.getDataFromDb}>get data</button>
                <button onClick={this.putDataToDB}>put</button>
            </div>
        ];
    }
} export default App;
