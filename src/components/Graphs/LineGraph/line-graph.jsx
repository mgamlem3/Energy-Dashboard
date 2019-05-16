/* eslint-disable no-magic-numbers */

import React from "react";

var Chart = require("chart.js");

class LineGraph extends React.Component {
    constructor(props) {
      super(props);
      this.firstLine = true;
      this.buildingIds = ['None', 'None', 'None'];

      //Below data is used to store axis labels and data values for the buildings
      this.hrsLabels = [];
      this.daysLabels = [];
      this.monthsLabels = [];
      this.hrs1 = [[], [], []];
      this.days1 = [[], [], []];
      this.months1 = [[], [], []];
      this.hrs2 = [[], [], []];
      this.days2 = [[], [], []];
      this.months2 = [[], [], []];
      this.hrs3 = [[], [], []];
      this.days3 = [[], [], []];
      this.months3 = [[], [], []];
      this.sqft = [1, 1, 1];
      this.time = 3;
      this.years = 1;
      this.buildingCount = 0;

      //Below values are used to control graph settings. These are set in other methods
      this.dataLabels = [];
      this.xLabels = [];  
      this.data = [[], [], [], [], [], [], [], [], []];
      this.type = 'line';
      this.dataType = 'kwh';
      this.dataModifier = [1, 1, 1];
      this.colors = [
        'rgba(194, 32, 51, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(7, 38, 209, 0.2)',
        'rgba(34, 245, 187, 0.2)'];
      this.backgroundColors = [
          'rgba(230, 32, 51, 0.2)',
          'rgba(190, 32, 51, 0.2)',
          'rgba(150, 32, 51, 0.2)',
          'rgba(54, 200, 235, 0.2)',
          'rgba(54, 150, 235, 0.2)',
          'rgba(54, 100, 235, 0.2)',
          'rgba(255, 206, 170, 0.2)',
          'rgba(255, 206, 110, 0.2)',
          'rgba(255, 206, 50, 0.2)'];
      this.title = 'Energy Usage (kwh)';
    }

    componentDidMount() {
      this.buildGraph();
    }

    //When there is only 1 dataset/line, this fuction should be called to alter the data
    //Variable descriptions are the same as addData()
    editData(hrs, days, months, sqft, label, hrsLabel, daysLabel, monthsLabel) {
      this.fixEmpty(hrs);
      this.fixEmpty(days);
      this.fixEmpty(months);
      this.hrsLabels = hrsLabel;
      this.daysLabels = daysLabel;
      this.monthsLabels = monthsLabel;
      this.hrs1[0] = hrs[0];
      this.days1[0] = days[0];
      this.months1[0] = months[0];
      this.dataLabels[0] = label;
      this.sqft[0] = sqft;
      
      //If it is the first time adding data, must set additional defaults

      if(this.buildingCount == 0){
        this.buildingIds[0] = label;
        this.addDataset(0);
        this.buildingCount++;
      }
      this.lineChart.data.datasets[0].label = this.dataLabels[0];
      var time = this.time.toString();
      this.updateDatatype(this.dataType);
      this.updateData(time, 1);
      this.firstLine = false;
      this.lineChart.update();
    }

    //Whenever a dataset is trying to be added or removed, this should be called
    //hrs: [[],[],[]] last 24 hr datavalues for this year in the first array, last year and 2 years ago are the 2nd and 3rd
    //days and months are similar with 21 and 12 data points per array respectively
    //id is a unique tag for a building, it is not displayed and can be the id used to call a building
    //label is building name that will be displayed
    //hrsLabel, daysLabel and monthsLabel are arrays of x labels for the graph: 24, 21 and 12 respectively
    addData(hrs, days, months, sqft, id, label, hrsLabel, daysLabel, monthsLabel){
      var error = 0;
      this.fixEmpty(hrs);
      this.fixEmpty(days);
      this.fixEmpty(months);
      //When the first line is added, it must set all default values
      if(this.firstLine){
        this.hrsLabels = hrsLabel;
        this.daysLabels = daysLabel;
        this.monthsLabels = monthsLabel;
        this.buildingIds[0] = id;
        this.sqft[0] = sqft;
        this.buildingCount++;

        for(var dataLabel = 0; dataLabel < 3; dataLabel++){
          this.dataLabels[dataLabel * 3] = label;
          this.dataLabels[(dataLabel * 3) + 1] = label + ' Last Year';
          this.dataLabels[(dataLabel * 3) + 2] = label + ' 2 Years Ago';
        }

        this.hrs1 = hrs;
        this.hrs2 = hrs;
        this.hrs3 = hrs;
        this.days1 = days;
        this.days2 = days;
        this.days3 = days;
        this.months1 = months;
        this.months2 = months;
        this.months3 = months;

      } else{
        var foundBuilding = 0;
        for(var i = 0; i<3; i++){
          if(this.buildingIds[i] == id){

            //Remove building
            this.buildingIds[i] = 'None';
            this.buildingCount--;
            foundBuilding = 1;
            this.props.warning('valid');
            break;
          }
        }
        if(foundBuilding == 0){
          if(this.buildingCount == 3){
            this.props.warning('error');
            error = 1;
          } else{
            //Add Building
            this.buildingCount++;
            if(this.buildingIds[0] == 'None'){
              this.hrs1 = hrs;
              this.days1 = days;
              this.months1 = months;
              this.sqft[0] = sqft;
              this.buildingIds[0] = id;
              this.dataLabels[0] = label;
              this.dataLabels[1] = label + ' Last Year';
              this.dataLabels[2] = label + ' 2 Years Ago';
            } else if(this.buildingIds[1] == 'None'){
              this.hrs2 = hrs;
              this.days2 = days;
              this.months2 = months;
              this.sqft[1] = sqft;
              this.buildingIds[1] = id;
              this.dataLabels[3] = label;
              this.dataLabels[4] = label + ' Last Year';
              this.dataLabels[5] = label + ' 2 Years Ago';
            } else if(this.buildingIds[2] == 'None'){
              this.hrs3 = hrs;
              this.days3 = days;
              this.months3 = months;
              this.sqft[2] = sqft;
              this.buildingIds[2] = id;
              this.dataLabels[6] = label;
              this.dataLabels[7] = label + ' Last Year';
              this.dataLabels[8] = label + ' 2 Years Ago';
            }
          }
        }
      }

      if(this.buildingCount == 0){
        this.xLabels = [];
      }

      if(error == 0){
        var time = this.time.toString();

        //Rebuild graph with new buildings
        this.updateDatatype(this.dataType);
        this.updateData(time, 9);
        this.firstLine = false;
        this.updateDatasets();
      }
    }

    fixEmpty(data) {
      try {  
        data.forEach(array => {
          array.forEach(element => {
            if (element === undefined || element === [] || element === null) {
              element = 0;
            }
          });
        });
      } catch (e) {
        console.warn("unable to fix element: " + e);
      }
    }

    //This completely rebuilds the graph and adds the correct datasets
    updateDatasets(){
      this.lineChart.destroy();
      this.buildGraph();

      //Add necessary datasets
      if(this.buildingIds[0] != 'None'){
        for(var year = 0; year < this.years; year++){
          this.addDataset(year);
        }
      }
      if(this.buildingIds[1] != 'None'){
        for(year = 0; year < this.years; year++){
          this.addDataset(year + 3);
        }
      }
      if(this.buildingIds[2] != 'None'){
        for(year = 0; year < this.years; year++){
          this.addDataset(year + 6);
        }
      }
      this.lineChart.update();
    }

    //This clears the current graph data and loads in the correct new data
    //time is the current time period from the radio buttons
    //maxDatasetCount is the total number of buildings/datasets, typically 1 or 9 (when 3 years for 3 buildings)
    updateData(time, maxDatasetCount){
      if(this.firstLine == false){
        for (const [index, value] of this.xLabels.entries()+1){
            this.xLabels.pop();
        }

        for(var count = 0; count < maxDatasetCount; count++){
          for(var num = 0; num < this.time; num++){
              this.data[count].pop();
          }
        }
      }

      //Determine which data needs to be shown on the graph using designated time period
      if (time == '24'){
        this.hours(24, maxDatasetCount);
      } else if (time == '7'){
        this.days(7, maxDatasetCount);
      } else if (time == '21'){
        this.days(21, maxDatasetCount);
      } else if (time == '3'){
        this.months(3, maxDatasetCount);
      } else if (time == '6'){
        this.months(6, maxDatasetCount);
      } else if (time == '12'){
        this.months(12, maxDatasetCount);
      }

      this.lineChart.update();
    }

    //hours, days and months set data[] properly to automatically build the graph
    //The correct method will be called by updateData()
    hours(hourCount, maxDatasetCount){
      try {
        for (var i = hourCount - 1; i>=0; i--){
          this.xLabels.push(this.hrsLabels[i]);
          for (var j = 0; j<maxDatasetCount; j++){
            if(j<=2)
              this.data[j].push(this.hrs1[j%3][i] * this.dataModifier[0]);
            else if(j>2 && j<=5)
              this.data[j].push(this.hrs2[j%3][i] * this.dataModifier[1]);
            else
              this.data[j].push(this.hrs3[j%3][i] * this.dataModifier[2]);
          }
        }
        this.time = hourCount;
      } catch (e) {
        console.warn("Skipping element because it does not exist: " + e);
      }
    }
    
    days(dayCount, maxDatasetCount){
      for (var i = dayCount - 1; i>=0; i--){
        this.xLabels.push(this.daysLabels[i]);
        for (var j = 0; j<maxDatasetCount; j++){
          if(j<=2)
            this.data[j].push(this.days1[j%3][i] * this.dataModifier[0]);
          else if(j>2 && j<=5)
            this.data[j].push(this.days2[j%3][i] * this.dataModifier[1]);
          else
            this.data[j].push(this.days3[j%3][i] * this.dataModifier[2]);
        }
      }
      this.time = dayCount;
    }

    months(monthCount, maxDatasetCount){
      for (var i = monthCount - 1; i>=0; i--){
        this.xLabels.push(this.monthsLabels[i]);
        for (var j = 0; j<maxDatasetCount; j++){
          if(j<=2)
            this.data[j].push(this.months1[j%3][i] * this.dataModifier[0]);
          else if(j>2 && j<=5)
            this.data[j].push(this.months2[j%3][i] * this.dataModifier[1]);
          else
            this.data[j].push(this.months3[j%3][i] * this.dataModifier[2]);
        }
      }
      this.time = monthCount;
}

    //Whenever the year radio buttons adjusts the number of years this should be called
    //year is the new number of years
    updateYear(year){
      if(year == '1'){
        this.years = 1;
      } else if(year == '2'){
        this.years = 2;
      } else if(year == '3'){
        this.years = 3;
      }

      this.updateDatasets();
    }

    //If the graph type is being changed (line, bar, etc.) this will set its type to the input 'type'
    updateType(type){
      this.type = type;
      this.updateDatasets();
    }

    //If switching the graph to show either kwh or kwh/sqft, this is called
    updateDatatype(datatype){
      this.dataType = datatype;
      if(datatype == 'kwh'){
        this.dataModifier = [1, 1, 1];
      } else if(datatype == 'kwhsqft'){
        this.dataModifier = [1/this.sqft[0], 1/this.sqft[1], 1/this.sqft[2]];
      }
    }

    //This will update the title of the graph
    updateTitle(newTitle){
      if(newTitle == 'kwh'){
        this.title = 'Energy Usage (kwh)';
      } else if(newTitle == 'kwhsqft'){
        this.title = 'Energy Usage (kwh/sqft)';
      }

      this.lineChart.options.title.text = this.title;
      this.lineChart.update();
    }

    //This function is what adds a dataset to a graph. Should only be called by updateDatasets()
    addDataset(datasetNumber){
      this.lineChart.data.datasets.push({
        label: this.dataLabels[datasetNumber],
        data: this.data[datasetNumber],
        backgroundColor: this.backgroundColors[datasetNumber]
      });
    }

    //This is what builds the graph, should not be called directly
    buildGraph() {
      const context = this.context;
      this.lineChart = new Chart(context, {
        type: this.type,
        data: {
            labels: this.xLabels,
          datasets: []
        },
        options: {
          title: {
              display: true,
              text: this.title
          },
          scales: {
              yAxes: [{
                ticks: {
                    beginAtZero: true
                }
              }],
              xAxes: [{
                ticks: {
                    beginAtZero: true
                }
              }]
          }
        }
        });
    }

    render() {
      return (
        <div>
          <canvas
            style={{ width: 500, height: 300 }}
            ref={context => (this.context = context)}
          />
        </div>
      );
    }
}

export default LineGraph;
