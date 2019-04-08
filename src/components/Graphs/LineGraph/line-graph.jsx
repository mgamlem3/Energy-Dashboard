/* eslint-disable no-magic-numbers */

import React from "react";

var Chart = require("chart.js");

class LineGraph extends React.Component {
    constructor(props) {
      super(props);
      this.kwh = [];
      this.xlabels = [];
      this.type = 'line';
      this.colors = [
        'rgba(194, 32, 51, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(7, 38, 209, 0.2)',
        'rgba(34, 245, 187, 0.2)'];
      this.backgroundColors = this.colors[0];
      this.title = 'Daily Energy Usage';
    }

    componentDidMount() {
      this.buildGraph();
    }

    editData(newData, labels) {
      for (const [index, value] of this.xlabels.entries()+1){
        this.xlabels.pop();
      }

      this.lineChart.data.datasets.forEach((dataset) => {
        for(const [index, value] of this.kwh.entries()+1){

          this.kwh.pop();
        }
      });

      for (const [index, value] of labels.entries()){
        this.xlabels.push(labels[index]);
      }
      this.lineChart.data.datasets.forEach((dataset) => {
        for(const [index, value] of newData.entries()){
          this.kwh.push(newData[index]);
        }
      });

      this.lineChart.update();
    } 

    toggle(){
      if(this.type == 'line'){
        this.backgroundColors = this.colors;
        this.type = 'bar';
      }
      else if(this.type == 'bar'){
        this.type = 'horizontalBar';
      }
      else if(this.type == 'horizontalBar'){
        this.type = 'line';
        this.backgroundColors = this.colors[0];
      }
      
      this.lineChart.destroy();
      this.buildGraph();      
    }

    buildGraph() {
      const context = this.context;
      this.lineChart = new Chart(context, {
        type: this.type,
        data: {
            labels: this.xlabels,
          datasets: [
            {
              label: 'Energy Usage (Kw/hr)',
              data: this.kwh, 
                backgroundColor: this.backgroundColors
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
  //kwh: PropTypes.array
//};

export default LineGraph;
