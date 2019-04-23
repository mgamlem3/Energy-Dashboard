/* eslint-disable no-magic-numbers */

import React from "react";

var Chart = require("chart.js");

class LineGraph extends React.Component {
    constructor(props) {
      super(props);
      this.data = [[1, 2, 3],[4, 2, 2],[1, 0, 1]];
      this.years = 1;
      this.dataLabels = ['Current Year','Last Year','2 Years ago'];
      this.xLabels = ['1', '2', '3'];
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

    updateTime(time){
      console.log(time);
      this.dataSetCount = 0;
      for (const [index, value] of this.xLabels.entries()+1){
        this.xLabels.pop();
      }

      this.lineChart.data.datasets.forEach((dataset) => {
        for(const [index, value] of this.data[this.dataSetCount].entries()+1){

          this.data[this.dataSetCount].pop();
        }
        this.dataSetCount++;
      });

      if (time == '24'){
        for (var i = 0; i<24; i++){
          this.xLabels.push('hour ' + i);
          for (var j = 0; j<this.dataSetCount; j++){
            this.data[j].push(j+1);
          }
        }
      }
      if (time == '7'){
        for (var i = 0; i<7; i++){
          this.xLabels.push('day ' + i);
          for (var j = 0; j<this.dataSetCount; j++){
            this.data[j].push(j+2);
          }
        }
      }
      if (time == '31'){
        for (var i = 0; i<21; i++){
          this.xLabels.push('day ' + i);
          for (var j = 0; j<this.dataSetCount; j++){
            this.data[j].push(j+3);
          }
        }
      }
      if (time == '3'){
        for (var i = 0; i<3; i++){
          this.xLabels.push('month ' + i);
          for (var j = 0; j<this.dataSetCount; j++){
            this.data[j].push(j+4);
          }
        }
      }
      if (time == '6'){
        for (var i = 0; i<6; i++){
          this.xLabels.push('month ' + i);
          for (var j = 0; j<this.dataSetCount; j++){
            this.data[j].push(j+5);
          }
        }
      }
      if (time == '12'){
        for (var i = 0; i<12; i++){
          this.xLabels.push('month ' + i);
          for (var j = 0; j<this.dataSetCount; j++){
            this.data[j].push(j+6);
          }
        }
      }

      this.lineChart.update();
    }

    updateYear(year){
      if(year == '1'){
        while(this.years > 1){
          this.lineChart.data.datasets.pop();
          this.years--;
        }
      } else if(year == '2'){
        if(this.years == 1){
          this.lineChart.data.datasets.push({
            label: this.dataLabels[this.years],
            data: this.data[this.years], 
              backgroundColor: this.backgroundColors[this.years]
          });
          this.years++;
        } else if(this.years == 3){
          this.lineChart.data.datasets.pop();
          this.years--;
        }
      } else if(year == '3'){
        while(this.years < 3){
          this.lineChart.data.datasets.push({
            label: this.dataLabels[this.years],
            data: this.data[this.years], 
              backgroundColor: this.backgroundColors[this.years]
          });
          this.years++;
        }
      }

      this.lineChart.update();
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
