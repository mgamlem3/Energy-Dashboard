/* eslint-disable no-magic-numbers */

import React from "react";

var Chart = require("chart.js");

class LineGraph extends React.Component {
    constructor(props) {
      super(props);
      this.kwh = [1100, 1500, 1800];
      this.xlabels = ["Mar 7", "Mar 8", "Mar 9"];
    }

    componentDidMount() {
        const context = this.context;

        this.lineChart = new Chart(context, {
            type: "line",
            data: {
                labels: this.xlabels,
              datasets: [
                {
                  label: "Energy Usage (Kw/hr)",
                  data: this.kwh, 
                    backgroundColor: [
                        "rgba(194, 32, 51, 0.2)"
                    ]
                }
              ]
            },
            options: {
              title: {
                  display: true,
                  text: 'Daily Energy Usage'
              },
              scales: {
                  yAxes: [{
                    ticks: {
                        suggestedMin: 1000,
                        suggestedMax: 2000
                    }
                  }]
              }
            }
        });
      }

    editData(newData, labels) {
      for (const [index, value] of this.xlabels.entries()+1){
        this.xlabels.pop();
        //this.lineChart.data.labels.pop();
      }
      //this.lineChart.data.labels.pop();
      //this.xlabels.pop();

      this.lineChart.data.datasets.forEach((dataset) => {
        for(const [index, value] of this.kwh.entries()+1){
          //dataset.data.pop();
          this.kwh.pop();
        }
        //dataset.data.pop();
        this.kwh.pop();
      });

      //this.kwh = newData;
      //this.xlabels = labels;

      for (const [index, value] of labels.entries()){
        //this.lineChart.data.labels.push(this.xlabels[index]);
        this.xlabels.push(labels[index]);
      }
      this.lineChart.data.datasets.forEach((dataset) => {
        for(const [index, value] of newData.entries()){
          //dataset.data.push(this.kwh[index]);
          this.kwh.push(newData[index]);
        }
      });

      this.lineChart.update();
    } 

    addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }
    
    removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
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
