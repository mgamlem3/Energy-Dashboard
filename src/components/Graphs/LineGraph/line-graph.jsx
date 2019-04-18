/* eslint-disable no-magic-numbers */

import React from "react";

var Chart = require("chart.js");

class LineGraph extends React.Component {
    constructor(props) {
      super(props);
      this.data = [[],[],[]];
      this.dataLabels = ['Energy Usage (Kw/hr)','',''];
      this.xLabels = [];
      this.type = 'line';
      this.colors = [
        'rgba(194, 32, 51, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(7, 38, 209, 0.2)',
        'rgba(34, 245, 187, 0.2)'];
      this.backgroundColors = [this.colors[0]];
      this.title = 'Daily Energy Usage';
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
      const second = 1;
      const third = 2;
      this.lineChart = new Chart(context, {
        type: this.type,
        data: {
            labels: this.xLabels,
          datasets: [
            {
              label: this.dataLabels[first],
              data: this.data[first], 
                backgroundColor: this.backgroundColors[first]
            },
            {
              label: this.dataLabels[second],
              data: this.data[second], 
                backgroundColor: this.backgroundColors[second]
            },
            {
              label: this.dataLabels[third],
              data: this.data[third], 
                backgroundColor: this.backgroundColors[third]
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
