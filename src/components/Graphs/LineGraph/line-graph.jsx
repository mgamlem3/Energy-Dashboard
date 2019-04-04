import React from "react";

//import PropTypes from "prop-types";
var Chart = require("chart.js");

class LineGraph extends React.Component {
    constructor(props) {
      super(props);
      this.kwh = [1100, 1500, 1800];
    }

    componentDidMount() {
        const context = this.context;

        this.lineChart = new Chart(context, {
            type: "line",
            data: {
                labels: ["Mar 7", "Mar 8", "Mar 9"],
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

    editData(newData) {
      console.log("updating graph with the new data");

      //this.lineChart.data.datasets.pop();
      //this.lineChart.data.labels.push("March 7");
      //this.lineChart.data.datasets.push(this.kwh);

      this.lineChart.data.datasets.forEach((dataset) => {
        for(const [index, value] of this.kwh.entries()){
          dataset.data.pop();
        }
        dataset.data.pop();
      });

      this.kwh = newData;

      this.lineChart.data.datasets.forEach((dataset) => {
        for(const [index, value] of this.kwh.entries()){
          dataset.data.push(this.kwh[index]);
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
