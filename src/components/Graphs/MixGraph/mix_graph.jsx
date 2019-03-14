import React from "react";
var Chart = require("chart.js");

class MixGraph extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const context = this.context;

    var myChart = new Chart(context, {
      type: "line",
      data: {
        labels: ["Mar 7", "Mar 8", "Mar 9"],
        datasets: [
          {
            label: "Energy Usage (Kw/hr)",
            data: [1650, 1200, 1500],
            backgroundColor: [
              "rgba(194, 32, 51, 0.2)"
            ]
          },
          {
            label: "Average Energy Usage (Kw/hr)",
            data: [1350, 1250, 1400],

            //type: "bar"
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

export default MixGraph;