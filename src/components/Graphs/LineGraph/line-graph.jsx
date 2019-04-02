import React from "react";
import PropTypes from "prop-types";
var Chart = require("chart.js");

class LineGraph extends React.Component {
    constructor(props) {
      super(props);
      this.kwh = [1300, 1500, 1800];
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

    editData(data=[]) {
      console.log("updating graph with the new data");
      this.kwh = data;

      //this.lineChart.data.datasets.pop();
      //this.lineChart.data.labels.push("Energy Usage")
      this.lineChart.data.datasets.push(this.kwh);
      
      this.lineChart.update();
    } 

    updateData(){
      console.log("updating");
      
      this.lineChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
      });  
      
      this.lineChart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
      });
      
      chart.update();
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
