import React from "react";
var Chart = require("chart.js");

class MixGraph extends React.Component {
    constructor(props) {
        super(props);

        this.datasets = [[1650, 1200, 1500],[1350, 1250, 1400]];
        this.labels = ["Energy Usage (Kw/hr)", "Average Energy Usage (Kw/hr)"];
    }
    componentDidMount() {
        const context = this.context;

        this.mixChart = new Chart(context, {
            type: "line",
            data: {
                labels: ["Mar 7", "Mar 8", "Mar 9"],
                datasets: [
                  {
                    label: this.labels[0],
                    data: this.datasets[0],
                    backgroundColor: [
                      "rgba(194, 32, 51, 0.2)"
                    ]
                  },
                  {
                    label: this.labels[1],
                    data: this.datasets[1],
                    backgroundColor:[
                      "rgba(54, 162, 235, 0.2)"
                    ],
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

  addData(newData, newLabel){
    //this.datasets.push(newData);
    //this.labels.push(newLabel);
    this.mixChart.data.labels.push(newLabel);
    this.mixChart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData[0]);
    });
    this.mixChart.update();
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 500, height: 285 }}
          ref={context => (this.context = context)}
        />
      </div>
    );
  }
}

export default MixGraph;
