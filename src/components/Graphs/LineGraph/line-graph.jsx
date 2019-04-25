/* eslint-disable no-magic-numbers */

import React from "react";

var Chart = require("chart.js");

class LineGraph extends React.Component {
    constructor(props) {
      super(props);
      this.hrsLabels = ['1','2','3'];
      this.daysLabels = ['11','22','33'];
      this.monthsLabels = ['111','222','333'];
      this.hrs1 = [[1,2,3],[4,5,6],[7,8,9]];
      this.days1 = [[9,8,7],[6,5,4],[3,2,1]];
      this.months1 = [[0,0,0],[1,1,1],[2,2,2]];
      this.hrs2 = [[],[],[]];
      this.days2 = [[],[],[]];
      this.months2 = [[],[],[]];      
      this.hrs3 = [[],[],[]];
      this.days3 = [[],[],[]];
      this.months3 = [[],[],[]];
      this.time = 3;
      this.years = 1;
      this.buildingCount = 1;
      this.dataLabels = ['Current Year','Last Year','2 Years ago'];
      this.xLabels = ['111','222','333'];
      this.data = [[0,0,0],[1,1,1],[2,2,2],[],[],[],[],[],[]];
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

    editData(newData, labels) {
      for (const [index, value] of this.xLabels.entries()+1){
        this.xLabels.pop();
      }

      this.lineChart.data.datasets.forEach((dataset) => {
        for(const [index, value] of this.data[0].entries()+1){

          this.data[0].pop();
        }
      });

      for (const [index, value] of labels.entries()){
        this.xLabels.push(labels[index]);
      }
      this.lineChart.data.datasets.forEach((dataset) => {
        for(const [index, value] of newData.entries()){
          this.data[0].push(newData[index]);
        }
      });

      this.lineChart.update();
    } 

    addData(data, label){
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
          this.data[i][j] = data[j+3*i];
        }
      }
    }

    updateTime(time){
      for (const [index, value] of this.xLabels.entries()+1){
        this.xLabels.pop();
      }

      for(var count = 0; count < 9; count++){
        for(var num = 0; num < this.time; num++){
          this.data[count].pop();
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
              this.data[j].push(this.days3[j%3][i]);          }
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
              this.data[j].push(this.months3[j%3][i]);          }
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
              this.data[j].push(this.months3[j%3][i]);          }
        }
        this.time = 12;
      }

      this.lineChart.update();
    }

    updateYear(year){
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

      //3 Buildings

      if(year == '1'){
        this.years = 1;
      }
      else if(year == '2'){
        this.years = 2;
      }
      else if(year == '3'){
        this.years = 3;
      }

      /*
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

    buildGraph() {
      const context = this.context;
      const first = 0;
      this.lineChart = new Chart(context, {
        type: this.type,
        data: {
            labels: this.xLabels,
          datasets: [
            {
              label: this.dataLabels[first],
              data: this.data[first], 
                backgroundColor: this.backgroundColors[first]
            }
          ]
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

export default LineGraph;
