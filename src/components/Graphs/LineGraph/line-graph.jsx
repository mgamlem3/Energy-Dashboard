/* eslint-disable no-magic-numbers */

import React from "react";

var Chart = require("chart.js");

class LineGraph extends React.Component {
    constructor(props) {
      super(props);
      this.buildingIds = ['None','None','None'];
      this.hrsLabels = [];
      this.daysLabels = [];
      this.monthsLabels = [];
      this.hrs1 = [[],[],[]];
      this.days1 = [[],[],[]];
      this.months1 = [[],[],[]]; 
      this.hrs2 = [[],[],[]];
      this.days2 = [[],[],[]];
      this.months2 = [[],[],[]];      
      this.hrs3 = [[],[],[]];
      this.days3 = [[],[],[]];
      this.months3 = [[],[],[]];
      this.time = 3;
      this.years = 1;
      this.buildingCount = 0;
      this.dataLabels = [,,,,,,,,];
      this.xLabels = [];
      this.data = [[],[],[],[],[],[],[],[],[]];
      this.type = 'line';
      this.colors = [
        'rgba(194, 32, 51, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(7, 38, 209, 0.2)',
        'rgba(34, 245, 187, 0.2)'];
      this.backgroundColors = [this.colors[0], this.colors[2], this.colors[3]];
      this.title = 'Energy Usage (KW/h)';
    }

    componentDidMount() {
      this.buildGraph();
    }

    editData(newData, labels, id) {
      if(this.buildingCount == 0){
        this.addDataset(0);
        this.buildingCount = 1;
      } else {
          for (const [index, value] of this.xLabels.entries()+1){
            this.xLabels.pop();
          }
        this.lineChart.data.datasets.forEach((dataset) => {
          for(const [index, value] of this.data[0].entries()+1){
            this.data[0].pop();
          }
        });
      }
      for (const [index, value] of labels.entries()){
        this.xLabels.push(labels[index]);
      }
      this.lineChart.data.datasets.forEach((dataset) => {
        for(const [index, value] of newData.entries()){
          this.data[0].push(newData[index]);
        }
      });
      this.dataLabels[0] = id;

      this.lineChart.update();
    } 

    addData(hrs, days, months, id, label, hrsLabel, daysLabel, monthsLabel){
      var error = 0;
      if(this.buildingCount == 0){
        this.hrsLabels = hrsLabel;
        this.daysLabels = daysLabel;
        this.monthsLabels = monthsLabel;
        this.buildingIds[0] = id;
        this.buildingCount++;

        for(var dataLabel = 0; dataLabel < 3; dataLabel++){
          this.dataLabels[dataLabel * 3] = label;
          this.dataLabels[(dataLabel * 3) + 1] = label + ' Last Year';
          this.dataLabels[(dataLabel * 3) + 2] = label + ' 2 Years Ago';
        }
        
        this.hrs1 = hrs;
        this.days1 = days;
        this.months1 = months;

        this.hrs2 = hrs;
        this.days2 = days;
        this.months2 = months;

        this.hrs3 = hrs;
        this.days3 = days;
        this.months3 = months;
      } else{
        var foundBuilding = 0;
        for(var i = 0; i<3; i++){
          if(this.buildingIds[i] == id){

            //Remove building
            this.buildingIds[i] = 'None';
            this.buildingCount--;
            foundBuilding = 1;
            break;
          }
        }
        if(foundBuilding == 0){
          if(this.buildingCount == 3){

            //Error message - Not Complete
            console.log('Already 3 buildings');
            error = 1;
          } else{

            //Add Building
            this.buildingCount++;
            if(this.buildingIds[0] == 'None'){
              this.hrs1 = hrs;
              this.days1 = days;
              this.months1 = months;
              this.buildingIds[0] = id;
              this.dataLabels[0] = label;
              this.dataLabels[1] = label + ' Last Year';
              this.dataLabels[2] = label + ' 2 Years Ago';
            } else if(this.buildingIds[1] == 'None'){
              this.hrs2 = hrs;
              this.days2 = days;
              this.months2 = months;
              this.buildingIds[1] = id;
              this.dataLabels[3] = label;
              this.dataLabels[4] = label + ' Last Year';
              this.dataLabels[5] = label + ' 2 Years Ago';
            } else if(this.buildingIds[2] == 'None'){
              this.hrs3 = hrs;
              this.days3 = days;
              this.months3 = months;
              this.buildingIds[2] = id;
              this.dataLabels[6] = label;
              this.dataLabels[7] = label + ' Last Year';
              this.dataLabels[8] = label + ' 2 Years Ago';
            }
          }
        }
      }
      
      if(error == 0){
        var time = this.time.toString();

        //Rebuild graph with new buildings
        this.rebuildGraph();
        this.updateData(time);
        this.updateDatasets();
        this.lineChart.update();
      }
    }

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
        for(var year = 0; year < this.years; year++){
          this.addDataset(year + 3);
        }
      }      
      if(this.buildingIds[2] != 'None'){
        for(var year = 0; year < this.years; year++){
          this.addDataset(year + 6);
        }
      }
    }

    updateData(time){
      if(this.buildingCount != 0){
        for (const [index, value] of this.xLabels.entries()+1){
          this.xLabels.pop();
        }

        for(var count = 0; count < 9; count++){
          for(var num = 0; num < this.time; num++){
            this.data[count].pop();
          }
        }
      }

      if (time == '24'){
        for (var i = 0; i<24; i++){
          this.xLabels.push(this.hrsLabels[i]);
          for (var j = 0; j<9; j++){
            if(j<=2)
              this.data[j].push(this.hrs1[j%3][i]);
            else if(j>2 && j<=5)
              this.data[j].push(this.hrs2[j%3][i]);
            else
              this.data[j].push(this.hrs3[j%3][i]);
          }
        }
        this.time = 24;
      }
      if (time == '7'){
        for (var i = 0; i<7; i++){
          this.xLabels.push(this.daysLabels[i]);
          for (var j = 0; j<9; j++){
            if(j<=2)
              this.data[j].push(this.days1[j%3][i]);
            else if(j>2 && j<=5)
              this.data[j].push(this.days2[j%3][i]);
            else
              this.data[j].push(this.days3[j%3][i]);
          }
        }
        this.time = 7;
      }
      if (time == '21'){
        for (var i = 0; i<21; i++){
          this.xLabels.push(this.daysLabels[i]);
          for (var j = 0; j<9; j++){
            if(j<=2)
              this.data[j].push(this.days1[j%3][i]);
            else if(j>2 && j<=5)
              this.data[j].push(this.days2[j%3][i]);
            else
              this.data[j].push(this.days3[j%3][i]); 
}
        }
        this.time = 21;
      }
      if (time == '3'){
        for (var i = 0; i<3; i++){
          this.xLabels.push(this.monthsLabels[i]);
          for (var j = 0; j<9; j++){
            if(j<=2)
              this.data[j].push(this.months1[j%3][i]);
            else if(j>2 && j<=5)
              this.data[j].push(this.months2[j%3][i]);
            else
              this.data[j].push(this.months3[j%3][i]);
          }
        }
        this.time = 3;
      }
      if (time == '6'){
        for (var i = 0; i<6; i++){
          this.xLabels.push(this.monthsLabels[i]);
          for (var j = 0; j<9; j++){
            if(j<=2)
              this.data[j].push(this.months1[j%3][i]);
            else if(j>2 && j<=5)
              this.data[j].push(this.months2[j%3][i]);
            else
              this.data[j].push(this.months3[j%3][i]); 
}
        }
        this.time = 6;
      }
      if (time == '12'){
        for (var i = 0; i<12; i++){
          this.xLabels.push(this.monthsLabels[i]);
          for (var j = 0; j<9; j++){
            if(j<=2)
              this.data[j].push(this.months1[j%3][i]);
            else if(j>2 && j<=5)
              this.data[j].push(this.months2[j%3][i]);
            else
              this.data[j].push(this.months3[j%3][i]); 
}
        }
        this.time = 12;
      }

      this.lineChart.update();
    }

    updateYear(year){
      if(year == '1'){
        this.years = 1;
      } else if(year == '2'){
        this.years = 2;
      } else if(year == '3'){
        this.years = 3;
      }

      this.updateDatasets();
      this.lineChart.update();
    }

    addDataset(datasetNumber){
      this.lineChart.data.datasets.push({
        label: this.dataLabels[datasetNumber],
        data: this.data[datasetNumber], 
        backgroundColor: this.backgroundColors[datasetNumber]
      });
    }

    toggle(){
      if(this.type == 'line'){
        this.backgroundColors[0] = this.colors;
        this.type = 'bar';
      } else if(this.type == 'bar'){
        this.type = 'horizontalBar';
      } else if(this.type == 'horizontalBar'){
        this.type = 'line';
        this.backgroundColors[0] = this.colors[0];
      }
      
      this.lineChart.destroy();
      this.buildGraph();      
    }

    rebuildGraph(){
      if(this.buildingCount > 1){
        this.type = 'bar';
      } else{
        this.type = 'line';
      }
      this.lineChart.destroy();
      this.buildGraph(); 
    }

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

//LineGraph.propTypes = {
  //data[0]: PropTypes.array
//};

      /* Method for adjusting year that didn't put datasets in correct order
      var yearChange = 0;
      if(year == '1'){
        for(var i = 0; i < this.buildingCount; i++){
          if(this.years > 1)
            this.lineChart.data.datasets.pop();
          if(this.years > 2)
            this.lineChart.data.datasets.pop();
          if(this.years == 2)
            yearChange = -1;
          else
            yearChange = -2;
        }
      } else if(year == '2'){
        for(var i = 0; i < this.buildingCount; i++){
          if(this.years == 1){
            this.addDataset(this.years + 3*i);
            yearChange = 1;
          } else if(this.years == 3){
            this.lineChart.data.datasets.pop();
            yearChange = -1;
          }
        }
      } else if(year == '3'){
        if(this.years == 1){
          for(var dataset = 0; dataset<2; dataset++){
            for(var i = 0; i < this.buildingCount; i++){
              this.addDataset(this.years + 3*i + dataset);
            }
          }
        }
        if(this.years == 2)
          for(var i = 0; i < this.buildingCount; i++){
            this.addDataset(this.years + 3*i);
          }
        if(this.years == 2)
          yearChange = 1;
        else
          yearChange = 2;
      }
    
      this.years += yearChange;
      */
      /* Brute force method for adjusting year, but couldn't account for certain building numbers being used as the sole building
      //1 Building
      if(this.years == 1 && year == '2' && this.buildingCount == 1){
        this.addDataset(1);
      }
      if((this.years == 1 || this.years == 2) && year == '3' && this.buildingCount == 1){
        this.addDataset(2);
      }
      if(this.years == 2 && year == '1' && this.buildingCount == 1){
        this.lineChart.data.datasets.pop();
      }
      if(this.years == 3 && (year == '2' || year == '1') && this.buildingCount == 1){
        this.lineChart.data.datasets.pop();
      }
      if(this.years == 3 && year == '1' && this.buildingCount == 1){
        this.lineChart.data.datasets.pop();
      }
      
      //2 Buildings
      if(this.years == 1 && year == '2' && this.buildingCount == 2){
        this.lineChart.data.datasets.pop();
        this.addDataset(1);
        this.addDataset(3);
        this.addDataset(4);
      }
      else if(this.years == 1 && year == '3' && this.buildingCount == 2){
        this.lineChart.data.datasets.pop();
        this.addDataset(1);
        this.addDataset(2);
        this.addDataset(3);
        this.addDataset(4);
        this.addDataset(5);
      }
      else if(this.years == 2 && year == '1' && this.buildingCount == 2){
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.addDataset(3);
      }
      else if(this.years == 2 && year == '3' && this.buildingCount == 2){
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.addDataset(2);
        this.addDataset(3);
        this.addDataset(4);
        this.addDataset(5);
      }
      else if(this.years == 3 && year == '1' && this.buildingCount == 2){
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.addDataset(3);
      }
      else if(this.years == 3 && year == '2' && this.buildingCount == 2){
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.addDataset(3);
        this.addDataset(4);

      }
      //3 Buildings
      if(this.years == 1 && year == '2' && this.buildingCount == 3){
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.addDataset(1);
        this.addDataset(3);
        this.addDataset(4);
        this.addDataset(6);
        this.addDataset(7);
      }
      else if(this.years == 1 && year == '3' && this.buildingCount == 3){
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.addDataset(1);
        this.addDataset(2);
        this.addDataset(3);
        this.addDataset(4);
        this.addDataset(5);
        this.addDataset(6);
        this.addDataset(7);
        this.addDataset(8);
      }
      else if(this.years == 2 && year == '1' && this.buildingCount == 3){
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();        
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.addDataset(3);
        this.addDataset(6);
      }
      else if(this.years == 2 && year == '3' && this.buildingCount == 3){
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();        
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.addDataset(2);
        this.addDataset(3);
        this.addDataset(4);
        this.addDataset(5);
        this.addDataset(6);
        this.addDataset(7);
        this.addDataset(8);
      }
      else if(this.years == 3 && year == '1' && this.buildingCount == 3){
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();        
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.addDataset(3);
        this.addDataset(6);
      }
      else if(this.years == 3 && year == '2' && this.buildingCount == 3){
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();        
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.lineChart.data.datasets.pop();
        this.addDataset(3);
        this.addDataset(4);
        this.addDataset(6);
        this.addDataset(7);
      }
*/

export default LineGraph;
