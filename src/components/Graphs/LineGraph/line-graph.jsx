import React from "react";
var Chart = require("chart.js");

class LineGraph extends React.Component {
    constructor(props) {
      var lineChart;
      super(props);

      //this.updateData = this.updateData.bind(this);
    }
    componentDidMount() {
        const context = this.context;

        //this.props.updateData(this.updateData);

        this.lineChart = new Chart(context, {
            type: "line",
            data: {
                labels: ["Mar 7", "Mar 8", "Mar 9"],
              datasets: [
                {
                  label: "Energy Usage (Kw/hr)",
                  data: [1200, 1900, 1300], // eslint-disable-line no-magic-numbers
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

    updateData() {
      this.lineChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
      });  
      
      this.lineChart.data.datasets.forEach((dataset) => {
            dataset.data.push([1700, 1900, 1200]);
        });
        chart.update();
      }

    /* This is the example for how to edit data: modified above
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
    */

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
